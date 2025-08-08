import { test, expect } from '@playwright/test';

// Configurações
const baseUrl = process.env.BASE_URL!;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const locale = 'en-US';
const contentType = 'user';

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
  // Despublicar
  await request.delete(`${baseUrl}/entries/${entryId}/published`, {
    headers: getAuthHeaders(),
  });

  // Deletar
  const res = await request.delete(`${baseUrl}/entries/${entryId}`, {
    headers: getAuthHeaders(),
  });

  expect(res.status()).toBe(204);
};

// ============================================================
// TESTE POSITIVO - CRUD completo
// ============================================================
test('User CRUD', async ({ request }) => {
  const newUser = {
    fields: {
      name: { [locale]: 'Teste' },
      email: { [locale]: 'teste@gmail.com' },
      phone: { [locale]: '1412321313' },
      address: { [locale]: 'Rua Teste' },
    },
  };

  const createRes = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(contentType),
    data: newUser,
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
      fields.name?.[locale] === 'Teste' &&
      fields.email?.[locale] === 'teste@gmail.com' &&
      fields.phone?.[locale] === '1412321313' &&
      fields.address?.[locale] === 'Rua Teste'
    );
  });

  expect(found).toBeTruthy();

  await deleteEntry(request, entryId);
});

// ============================================================
// TESTES NEGATIVOS
// ============================================================


// 2. Tipo de campo incorreto
test('Não deve permitir criar usuário com tipo de campo incorreto', async ({ request }) => {
  const invalidUser = {
    fields: {
      name: { [locale]: 12345 }, // deve ser string
      email: { [locale]: 'teste@teste.com' },
      phone: { [locale]: '999999999' },
      address: { [locale]: 'Rua Qualquer' },
    },
  };

  const res = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(contentType),
    data: invalidUser,
  });

  expect(res.status()).not.toBe(201);
});

// 3. Publicação com versão incorreta
test('Não deve permitir publicar usuário com versão incorreta', async ({ request }) => {
  const user = {
    fields: {
      name: { [locale]: 'Usuário Versão Errada' },
      email: { [locale]: 'teste@errado.com' },
      phone: { [locale]: '1412321313' },
      address: { [locale]: 'Rua Errada' },
    },
  };

  const createRes = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(contentType),
    data: user,
  });

  expect(createRes.status()).toBe(201);
  const created = await createRes.json();
  const entryId = created.sys.id;

  const publishRes = await request.put(`${baseUrl}/entries/${entryId}/published`, {
    headers: {
      ...getAuthHeaders(),
      'X-Contentful-Version': '0', // versão errada
    },
  });

  expect(publishRes.status()).not.toBe(200);

  await deleteEntry(request, entryId);
});

// 4. Deletar entrada inexistente
test('Não deve deletar entrada inexistente', async ({ request }) => {
  const fakeId = 'fake-entry-id';

  const deleteRes = await request.delete(`${baseUrl}/entries/${fakeId}`, {
    headers: getAuthHeaders(),
  });

  expect([400, 404]).toContain(deleteRes.status());
});

// 5. Token inválido
test('Não deve acessar a API com token inválido', async ({ request }) => {
  const res = await request.get(`${baseUrl}/entries?content_type=${contentType}`, {
    headers: {
      Authorization: 'Bearer token_invalido',
    },
  });

  expect(res.status()).toBe(401); // Unauthorized
});