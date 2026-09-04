import { test, expect } from '@playwright/test';
import { ContentfulClient } from '../helpers/contentful-client';
import { BASE_URL, ACCESS_TOKEN, LOCALE, CONTENT_TYPES } from '../helpers/config';
import type { CategoryFields, ContentfulEntriesResponse } from '../helpers/contentful.types';

let client: ContentfulClient;

test.beforeEach(({ request }) => {
  client = new ContentfulClient(request, BASE_URL, ACCESS_TOKEN);
});

// ======================================================
// TESTE POSITIVO - CRUD de Categoria
// ======================================================
test('Category CRUD', async () => {
  const newCategory: CategoryFields = {
    name: { [LOCALE]: 'Categoria Teste' },
    slug: { [LOCALE]: 'categoria-teste' },
  };

  const createRes = await client.createEntry(CONTENT_TYPES.CATEGORIA, newCategory);
  expect(createRes.status()).toBe(201);
  const created = await createRes.json();
  const entryId = created.sys.id;

  await client.publishEntry(entryId, created.sys.version);

  const getRes = await client.listEntries(CONTENT_TYPES.CATEGORIA);
  expect(getRes.status()).toBe(200);
  const data: ContentfulEntriesResponse<CategoryFields> = await getRes.json();

  const found = data.items.find((item) => {
    const fields = item.fields;
    return (
      fields.name?.[LOCALE] === 'Categoria Teste' &&
      fields.slug?.[LOCALE] === 'categoria-teste'
    );
  });

  expect(found).toBeTruthy();

  await client.cleanupEntry(entryId);
});

// ======================================================
// TESTES NEGATIVOS
// ======================================================

// 1. Publicação com versão incorreta
test('Não deve permitir publicar categoria com versão incorreta', async () => {
  const category: CategoryFields = {
    name: { [LOCALE]: 'Categoria Versão Errada' },
    slug: { [LOCALE]: 'categoria-versao-errada' },
  };

  const res = await client.createEntry(CONTENT_TYPES.CATEGORIA, category);
  expect(res.status()).toBe(201);
  const created = await res.json();
  const entryId = created.sys.id;

  // Publicar com versão errada
  const pubRes = await client.tryPublishEntry(entryId, 0);
  expect(pubRes.status()).not.toBe(200);

  await client.cleanupEntry(entryId);
});

// 2. Acesso com token inválido
test('Não deve acessar API com token inválido', async ({ request }) => {
  const invalidClient = new ContentfulClient(request, BASE_URL, 'token_invalido');

  const res = await invalidClient.listEntries(CONTENT_TYPES.CATEGORIA);
  expect(res.status()).toBe(401);
});
