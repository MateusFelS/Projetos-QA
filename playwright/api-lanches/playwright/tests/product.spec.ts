import { test, expect } from '@playwright/test';
import { ContentfulClient } from '../helpers/contentful-client';
import { BASE_URL, ACCESS_TOKEN, LOCALE, CONTENT_TYPES } from '../helpers/config';
import { toEntryLink } from '../helpers/contentful.types';
import type { CategoryFields, ContentfulEntriesResponse, ProductFields } from '../helpers/contentful.types';

let client: ContentfulClient;

test.beforeEach(({ request }) => {
  client = new ContentfulClient(request, BASE_URL, ACCESS_TOKEN);
});

// =====================================================================
// TESTE POSITIVO - CRUD de produto e categoria
// =====================================================================
test('Product CRUD', async () => {
  const categoryData: CategoryFields = {
    name: { [LOCALE]: 'Categoria Produto' },
    slug: { [LOCALE]: 'categoria-produto' },
  };

  const categoryRes = await client.createEntry(CONTENT_TYPES.CATEGORIA, categoryData);
  expect(categoryRes.status()).toBe(201);
  const createdCategory = await categoryRes.json();
  const categoryId = createdCategory.sys.id;

  await client.publishEntry(categoryId, createdCategory.sys.version);

  const productData: ProductFields = {
    name: { [LOCALE]: 'Produto Teste' },
    slug: { [LOCALE]: 'produto-teste' },
    description: { [LOCALE]: 'Este é um produto de teste.' },
    price: { [LOCALE]: 99.99 },
    available: { [LOCALE]: true },
    ingredients: { [LOCALE]: ['Ingrediente A', 'Ingrediente B'] },
    category: { [LOCALE]: toEntryLink(categoryId) },
  };

  const productRes = await client.createEntry(CONTENT_TYPES.PRODUTO, productData);
  expect(productRes.status()).toBe(201);
  const createdProduct = await productRes.json();
  const productId = createdProduct.sys.id;

  await client.publishEntry(productId, createdProduct.sys.version);

  const getRes = await client.listEntries(CONTENT_TYPES.PRODUTO);
  expect(getRes.status()).toBe(200);
  const data: ContentfulEntriesResponse<ProductFields> = await getRes.json();

  const found = data.items.find((item) => {
    const fields = item.fields;
    return (
      fields.name?.[LOCALE] === 'Produto Teste' &&
      fields.slug?.[LOCALE] === 'produto-teste'
    );
  });

  expect(found).toBeTruthy();

  await client.cleanupEntry(productId);
  await client.cleanupEntry(categoryId);
});

// =====================================================================
// TESTES NEGATIVOS
// =====================================================================

// 2. Preço com tipo incorreto (string ao invés de número)
test('Não deve permitir criar produto com preço como string', async () => {
  const productData = {
    name: { [LOCALE]: 'Produto com erro de tipo' },
    slug: { [LOCALE]: 'produto-com-erro' },
    description: { [LOCALE]: 'Teste' },
    price: { [LOCALE]: 'dez reais' }, // erro aqui
    available: { [LOCALE]: true },
    ingredients: { [LOCALE]: ['Item 1'] },
  };

  const res = await client.createEntry(CONTENT_TYPES.PRODUTO, productData);
  expect(res.status()).not.toBe(201);
});

// 3. Referência para categoria inexistente
test('Não deve permitir criar produto com referência inválida', async () => {
  const productData: ProductFields = {
    name: { [LOCALE]: 'Produto Ref. Inválida' },
    slug: { [LOCALE]: 'produto-ref-invalida' },
    description: { [LOCALE]: 'Teste' },
    price: { [LOCALE]: 50 },
    available: { [LOCALE]: true },
    ingredients: { [LOCALE]: ['Item A'] },
    category: { [LOCALE]: toEntryLink('categoria-inexistente') },
  };

  const res = await client.createEntry(CONTENT_TYPES.PRODUTO, productData);
  expect(res.status()).toBe(201); // criação pode ocorrer
  const created = await res.json();
  const id = created.sys.id;

  // Publicar deve falhar por referência inválida
  const pubRes = await client.tryPublishEntry(id, created.sys.version);
  expect(pubRes.status()).not.toBe(200);

  await client.cleanupEntry(id);
});

// 4. Publicar produto com versão incorreta
test('Não deve permitir publicar produto com versão errada', async () => {
  const productData: ProductFields = {
    name: { [LOCALE]: 'Produto Versão Incorreta' },
    slug: { [LOCALE]: 'produto-versao-errada' },
    description: { [LOCALE]: 'Teste' },
    price: { [LOCALE]: 99.9 },
    available: { [LOCALE]: true },
    ingredients: { [LOCALE]: ['Item A'] },
  };

  const res = await client.createEntry(CONTENT_TYPES.PRODUTO, productData);
  expect(res.status()).toBe(201);
  const created = await res.json();

  const pubRes = await client.tryPublishEntry(created.sys.id, 0);
  expect(pubRes.status()).not.toBe(200);

  await client.cleanupEntry(created.sys.id);
});

// 5. Token inválido
test('Não deve acessar API com token inválido', async ({ request }) => {
  const invalidClient = new ContentfulClient(request, BASE_URL, 'token_invalido');

  const res = await invalidClient.listEntries(CONTENT_TYPES.PRODUTO);
  expect(res.status()).toBe(401);
});
