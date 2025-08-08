import { test, expect } from '@playwright/test';

// Configurações
const baseUrl = process.env.BASE_URL!;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const locale = 'en-US';
const contentType = 'categoria';

// Helpers
const getAuthHeaders = () => ({
  Authorization: `Bearer ${accessToken}`,
});

const getContentHeaders = (contentType: string) => ({
  ...getAuthHeaders(),
  'Content-Type': 'application/vnd.contentful.management.v1+json',
  'X-Contentful-Content-Type': contentType,
});

const publishEntry = async (request: any, entryId: string, version: number) => {
  const res = await request.put(`${baseUrl}/entries/${entryId}/published`, {
    headers: {
      ...getAuthHeaders(),
      'X-Contentful-Version': String(version),
    },
  });
  expect(res.status()).toBe(200);
};

const deleteEntry = async (request: any, entryId: string) => {
  // Verifica se está publicado antes de tentar despublicar
  const getRes = await request.get(`${baseUrl}/entries/${entryId}`, {
    headers: getAuthHeaders(),
  });
  const entry = await getRes.json();

  const isPublished = !!entry.sys.publishedVersion;

  if (isPublished) {
    const unpublishRes = await request.delete(`${baseUrl}/entries/${entryId}/published`, {
      headers: getAuthHeaders(),
    });
    expect(unpublishRes.status()).toBe(200);
  }

  const deleteRes = await request.delete(`${baseUrl}/entries/${entryId}`, {
    headers: getAuthHeaders(),
  });
  expect(deleteRes.status()).toBe(204);
};

// ======================================================
// TESTE POSITIVO - CRUD de Categoria
// ======================================================
test('Category CRUD', async ({ request }) => {
  const newCategory = {
    fields: {
      name: { [locale]: 'Categoria Teste' },
      slug: { [locale]: 'categoria-teste' },
    },
  };

  const createRes = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(contentType),
    data: newCategory,
  });

  expect(createRes.status()).toBe(201);
  const created = await createRes.json();
  const entryId = created.sys.id;

  await publishEntry(request, entryId, created.sys.version);

  const getRes = await request.get(`${baseUrl}/entries?content_type=${contentType}`, {
    headers: getAuthHeaders(),
  });

  expect(getRes.status()).toBe(200);
  const data = await getRes.json();

  const found = data.items.find((item: any) => {
    const fields = item.fields;
    return (
      fields.name?.[locale] === 'Categoria Teste' &&
      fields.slug?.[locale] === 'categoria-teste'
    );
  });

  expect(found).toBeTruthy();

  await deleteEntry(request, entryId);
});

// ======================================================
// TESTES NEGATIVOS
// ======================================================

// 1. Publicação com versão incorreta
test('Não deve permitir publicar categoria com versão incorreta', async ({ request }) => {
  const category = {
    fields: {
      name: { [locale]: 'Categoria Versão Errada' },
      slug: { [locale]: 'categoria-versao-errada' },
    },
  };

  const res = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(contentType),
    data: category,
  });

  expect(res.status()).toBe(201);
  const created = await res.json();
  const entryId = created.sys.id;

  // Publicar com versão errada
  const pubRes = await request.put(`${baseUrl}/entries/${entryId}/published`, {
    headers: {
      ...getAuthHeaders(),
      'X-Contentful-Version': '0',
    },
  });

  expect(pubRes.status()).not.toBe(200);

  await deleteEntry(request, entryId);
});

// 2. Acesso com token inválido
test('Não deve acessar API com token inválido', async ({ request }) => {
  const res = await request.get(`${baseUrl}/entries?content_type=${contentType}`, {
    headers: {
      Authorization: 'Bearer token_invalido',
    },
  });

  expect(res.status()).toBe(401);
});
