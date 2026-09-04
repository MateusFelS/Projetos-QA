import { test, expect } from '@playwright/test';

// Configurações
const baseUrl = process.env.BASE_URL!;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const locale = 'en-US';

const productContentType = 'produto';
const categoryContentType = 'categoria';

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
  await request.delete(`${baseUrl}/entries/${entryId}/published`, {
    headers: getAuthHeaders(),
  });
  await request.delete(`${baseUrl}/entries/${entryId}`, {
    headers: getAuthHeaders(),
  });
};

// =====================================================================
// TESTE POSITIVO - CRUD de produto e categoria
// =====================================================================
test('Product CRUD', async ({ request }) => {
  const categoryData = {
    fields: {
      name: { [locale]: 'Categoria Produto' },
      slug: { [locale]: 'categoria-produto' },
    },
  };

  const categoryRes = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(categoryContentType),
    data: categoryData,
  });

  expect(categoryRes.status()).toBe(201);
  const createdCategory = await categoryRes.json();
  const categoryId = createdCategory.sys.id;

  await publishEntry(request, categoryId, createdCategory.sys.version);

  const productData = {
    fields: {
      name: { [locale]: 'Produto Teste' },
      slug: { [locale]: 'produto-teste' },
      description: { [locale]: 'Este é um produto de teste.' },
      price: { [locale]: 99.99 },
      available: { [locale]: true },
      ingredients: { [locale]: ['Ingrediente A', 'Ingrediente B'] },
      category: {
        [locale]: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: categoryId,
          },
        },
      },
    },
  };

  const productRes = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(productContentType),
    data: productData,
  });

  expect(productRes.status()).toBe(201);
  const createdProduct = await productRes.json();
  const productId = createdProduct.sys.id;

  await publishEntry(request, productId, createdProduct.sys.version);

  const getRes = await request.get(`${baseUrl}/entries?content_type=${productContentType}`, {
    headers: getAuthHeaders(),
  });

  expect(getRes.status()).toBe(200);
  const data = await getRes.json();

  const found = data.items.find((item: any) => {
    const fields = item.fields;
    return (
      fields.name?.[locale] === 'Produto Teste' &&
      fields.slug?.[locale] === 'produto-teste'
    );
  });

  expect(found).toBeTruthy();

  await deleteEntry(request, productId);
  await deleteEntry(request, categoryId);
});

// =====================================================================
// TESTES NEGATIVOS
// =====================================================================

// 2. Preço com tipo incorreto (string ao invés de número)
test('Não deve permitir criar produto com preço como string', async ({ request }) => {
  const productData = {
    fields: {
      name: { [locale]: 'Produto com erro de tipo' },
      slug: { [locale]: 'produto-com-erro' },
      description: { [locale]: 'Teste' },
      price: { [locale]: 'dez reais' }, // erro aqui
      available: { [locale]: true },
      ingredients: { [locale]: ['Item 1'] },
    },
  };

  const res = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(productContentType),
    data: productData,
  });

  expect(res.status()).not.toBe(201);
});

// 3. Referência para categoria inexistente
test('Não deve permitir criar produto com referência inválida', async ({ request }) => {
  const productData = {
    fields: {
      name: { [locale]: 'Produto Ref. Inválida' },
      slug: { [locale]: 'produto-ref-invalida' },
      description: { [locale]: 'Teste' },
      price: { [locale]: 50 },
      available: { [locale]: true },
      ingredients: { [locale]: ['Item A'] },
      category: {
        [locale]: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: 'categoria-inexistente',
          },
        },
      },
    },
  };

  const res = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(productContentType),
    data: productData,
  });

  expect(res.status()).toBe(201); // criação pode ocorrer
  const created = await res.json();
  const id = created.sys.id;

  // Publicar deve falhar por referência inválida
  const pubRes = await request.put(`${baseUrl}/entries/${id}/published`, {
    headers: {
      ...getAuthHeaders(),
      'X-Contentful-Version': String(created.sys.version),
    },
  });

  expect(pubRes.status()).not.toBe(200);

  await deleteEntry(request, id);
});

// 4. Publicar produto com versão incorreta
test('Não deve permitir publicar produto com versão errada', async ({ request }) => {
  const productData = {
    fields: {
      name: { [locale]: 'Produto Versão Incorreta' },
      slug: { [locale]: 'produto-versao-errada' },
      description: { [locale]: 'Teste' },
      price: { [locale]: 99.9 },
      available: { [locale]: true },
      ingredients: { [locale]: ['Item A'] },
    },
  };

  const res = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(productContentType),
    data: productData,
  });

  expect(res.status()).toBe(201);
  const created = await res.json();

  const pubRes = await request.put(`${baseUrl}/entries/${created.sys.id}/published`, {
    headers: {
      ...getAuthHeaders(),
      'X-Contentful-Version': '0',
    },
  });

  expect(pubRes.status()).not.toBe(200);

  await deleteEntry(request, created.sys.id);
});

// 5. Token inválido
test('Não deve acessar API com token inválido', async ({ request }) => {
  const res = await request.get(`${baseUrl}/entries?content_type=${productContentType}`, {
    headers: {
      Authorization: 'Bearer token_invalido',
    },
  });

  expect(res.status()).toBe(401);
});
