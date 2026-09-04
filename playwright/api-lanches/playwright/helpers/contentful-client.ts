import type { APIRequestContext, APIResponse } from '@playwright/test';
import { expect } from '@playwright/test';
import type { ContentfulEntry } from './contentful.types';

/**
 * Encapsula as chamadas à Content Management API do Contentful usadas
 * pelos 4 specs (category/order/product/user). Antes, cada spec tinha
 * sua própria cópia de getAuthHeaders/getContentHeaders/publishEntry/
 * deleteEntry — qualquer mudança na API exigia editar 4 arquivos.
 */
export class ContentfulClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly baseUrl: string,
    private readonly accessToken: string,
  ) {}

  private authHeaders() {
    return { Authorization: `Bearer ${this.accessToken}` };
  }

  private contentHeaders(contentType: string) {
    return {
      ...this.authHeaders(),
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      'X-Contentful-Content-Type': contentType,
    };
  }

  createEntry<TFields>(contentType: string, fields: TFields): Promise<APIResponse> {
    return this.request.post(`${this.baseUrl}/entries`, {
      headers: this.contentHeaders(contentType),
      data: { fields },
    });
  }

  getEntry(entryId: string): Promise<APIResponse> {
    return this.request.get(`${this.baseUrl}/entries/${entryId}`, {
      headers: this.authHeaders(),
    });
  }

  listEntries(contentType: string): Promise<APIResponse> {
    return this.request.get(`${this.baseUrl}/entries?content_type=${contentType}`, {
      headers: this.authHeaders(),
    });
  }

  /** Publica a entry e já valida (200) — igual ao helper original usado nos fluxos positivos. */
  async publishEntry(entryId: string, version: number): Promise<APIResponse> {
    const res = await this.request.put(`${this.baseUrl}/entries/${entryId}/published`, {
      headers: {
        ...this.authHeaders(),
        'X-Contentful-Version': String(version),
      },
    });
    expect(res.status()).toBe(200);
    return res;
  }

  /** Tenta publicar SEM validar o status — usado nos testes negativos de versão incorreta. */
  tryPublishEntry(entryId: string, version: number | string): Promise<APIResponse> {
    return this.request.put(`${this.baseUrl}/entries/${entryId}/published`, {
      headers: {
        ...this.authHeaders(),
        'X-Contentful-Version': String(version),
      },
    });
  }

  unpublishEntry(entryId: string): Promise<APIResponse> {
    return this.request.delete(`${this.baseUrl}/entries/${entryId}/published`, {
      headers: this.authHeaders(),
    });
  }

  deleteEntry(entryId: string): Promise<APIResponse> {
    return this.request.delete(`${this.baseUrl}/entries/${entryId}`, {
      headers: this.authHeaders(),
    });
  }

  /**
   * Remove uma entry de forma segura para teardown de teste:
   * verifica se está publicada, despublica se necessário (valida 200)
   * e então deleta (valida 204). Se a entry já não existir, não faz nada.
   */
  async cleanupEntry(entryId: string): Promise<void> {
    const getRes = await this.getEntry(entryId);
    if (!getRes.ok()) return;

    const entry: ContentfulEntry = await getRes.json();
    const isPublished = Boolean(entry.sys.publishedVersion);

    if (isPublished) {
      const unpublishRes = await this.unpublishEntry(entryId);
      expect(unpublishRes.status()).toBe(200);
    }

    const deleteRes = await this.deleteEntry(entryId);
    expect(deleteRes.status()).toBe(204);
  }
}
