import { test, expect } from '@playwright/test';
import { ContentfulClient } from '../helpers/contentful-client';
import { BASE_URL, ACCESS_TOKEN, LOCALE, CONTENT_TYPES } from '../helpers/config';
import type { ContentfulEntriesResponse, UserFields } from '../helpers/contentful.types';

let client: ContentfulClient;

test.beforeEach(({ request }) => {
  client = new ContentfulClient(request, BASE_URL, ACCESS_TOKEN);
});

// ============================================================
// TESTE POSITIVO - CRUD completo
// ============================================================
test('User CRUD', async () => {
  const newUser: UserFields = {
    name: { [LOCALE]: 'Teste' },
    email: { [LOCALE]: 'teste@gmail.com' },
    phone: { [LOCALE]: '1412321313' },
    address: { [LOCALE]: 'Rua Teste' },
  };

  const createRes = await client.createEntry(CONTENT_TYPES.USER, newUser);
  expect(createRes.status()).toBe(201);
  const created = await createRes.json();
  const entryId = created.sys.id;

  await client.publishEntry(entryId, created.sys.version);

  const getRes = await client.listEntries(CONTENT_TYPES.USER);
  expect(getRes.status()).toBe(200);
  const data: ContentfulEntriesResponse<UserFields> = await getRes.json();

  const found = data.items.find((item) => {
    const fields = item.fields;
    return (
      fields.name?.[LOCALE] === 'Teste' &&
      fields.email?.[LOCALE] === 'teste@gmail.com' &&
      fields.phone?.[LOCALE] === '1412321313' &&
      fields.address?.[LOCALE] === 'Rua Teste'
    );
  });

  expect(found).toBeTruthy();

  await client.cleanupEntry(entryId);
});

// ============================================================
// TESTES NEGATIVOS
// ============================================================

// 2. Tipo de campo incorreto
test('Não deve permitir criar usuário com tipo de campo incorreto', async () => {
  const invalidUser = {
    name: { [LOCALE]: 12345 }, // deve ser string
    email: { [LOCALE]: 'teste@teste.com' },
    phone: { [LOCALE]: '999999999' },
    address: { [LOCALE]: 'Rua Qualquer' },
  };

  const res = await client.createEntry(CONTENT_TYPES.USER, invalidUser);
  expect(res.status()).not.toBe(201);
});

// 3. Publicação com versão incorreta
test('Não deve permitir publicar usuário com versão incorreta', async () => {
  const user: UserFields = {
    name: { [LOCALE]: 'Usuário Versão Errada' },
    email: { [LOCALE]: 'teste@errado.com' },
    phone: { [LOCALE]: '1412321313' },
    address: { [LOCALE]: 'Rua Errada' },
  };

  const createRes = await client.createEntry(CONTENT_TYPES.USER, user);
  expect(createRes.status()).toBe(201);
  const created = await createRes.json();
  const entryId = created.sys.id;

  const publishRes = await client.tryPublishEntry(entryId, 0);
  expect(publishRes.status()).not.toBe(200);

  await client.cleanupEntry(entryId);
});

// 4. Deletar entrada inexistente
test('Não deve deletar entrada inexistente', async () => {
  const fakeId = 'fake-entry-id';

  const deleteRes = await client.deleteEntry(fakeId);
  expect([400, 404]).toContain(deleteRes.status());
});

// 5. Token inválido
test('Não deve acessar a API com token inválido', async ({ request }) => {
  const invalidClient = new ContentfulClient(request, BASE_URL, 'token_invalido');

  const res = await invalidClient.listEntries(CONTENT_TYPES.USER);
  expect(res.status()).toBe(401); // Unauthorized
});
