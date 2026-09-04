import { test, expect } from '@playwright/test';
import { ContentfulClient } from '../helpers/contentful-client';
import { BASE_URL, ACCESS_TOKEN, LOCALE, CONTENT_TYPES } from '../helpers/config';
import { toEntryLink } from '../helpers/contentful.types';
import type { ContentfulEntriesResponse, OrderFields } from '../helpers/contentful.types';

// IDs reais existentes (exemplo)
const EXISTING_USER_ID = '7IRpgdQxvFPUpdZ7zZk1RO';
const EXISTING_PRODUCT_ID = '46ss7QLmhEyyTCImBc4Vog';

let client: ContentfulClient;

test.beforeEach(({ request }) => {
  client = new ContentfulClient(request, BASE_URL, ACCESS_TOKEN);
});

// ======================================================
// TESTE POSITIVO - CRUD do Pedido
// ======================================================
test('Order CRUD', async () => {
  const orderData: OrderFields = {
    customerName: { [LOCALE]: 'Cliente Exemplo' },
    totalPrice: { [LOCALE]: 49.99 },
    status: { [LOCALE]: 'Pendente' },
    orderType: { [LOCALE]: 'Pix' },
    items: { [LOCALE]: toEntryLink(EXISTING_PRODUCT_ID) },
    user: { [LOCALE]: toEntryLink(EXISTING_USER_ID) },
  };

  const orderRes = await client.createEntry(CONTENT_TYPES.PEDIDO, orderData);
  expect(orderRes.status()).toBe(201);
  const createdOrder = await orderRes.json();
  const orderId = createdOrder.sys.id;

  await client.publishEntry(orderId, createdOrder.sys.version);

  const getOrderRes = await client.listEntries(CONTENT_TYPES.PEDIDO);
  expect(getOrderRes.status()).toBe(200);
  const ordersData: ContentfulEntriesResponse<OrderFields> = await getOrderRes.json();

  const foundOrder = ordersData.items.find(
    (item) => item.fields.customerName?.[LOCALE] === 'Cliente Exemplo',
  );
  expect(foundOrder).toBeTruthy();

  await client.cleanupEntry(orderId);
});

// ======================================================
// TESTES NEGATIVOS
// ======================================================

// 1. Campo totalPrice com valor inválido (string)
test('Não deve permitir criar pedido com totalPrice inválido', async () => {
  const invalidOrder = {
    customerName: { [LOCALE]: 'Cliente Erro Tipo' },
    totalPrice: { [LOCALE]: 'quarenta' }, // string em vez de número
    status: { [LOCALE]: 'Pendente' },
    orderType: { [LOCALE]: 'Cartão' },
  };

  const res = await client.createEntry(CONTENT_TYPES.PEDIDO, invalidOrder);
  expect(res.status()).not.toBe(201);
});

// 3. Publicação com versão incorreta
test('Não deve permitir publicar pedido com versão incorreta', async () => {
  const orderData: OrderFields = {
    customerName: { [LOCALE]: 'Versão Errada' },
    totalPrice: { [LOCALE]: 59.99 },
    status: { [LOCALE]: 'Pendente' },
    orderType: { [LOCALE]: 'Crédito' },
  };

  const res = await client.createEntry(CONTENT_TYPES.PEDIDO, orderData);
  expect(res.status()).toBe(201);
  const created = await res.json();

  const pubRes = await client.tryPublishEntry(created.sys.id, 0);
  expect(pubRes.status()).not.toBe(200);

  await client.cleanupEntry(created.sys.id);
});

// 4. Tentativa de acessar a API com token inválido
test('Não deve acessar a API com token inválido', async ({ request }) => {
  const invalidClient = new ContentfulClient(request, BASE_URL, 'token_invalido');

  const res = await invalidClient.listEntries(CONTENT_TYPES.PEDIDO);
  expect(res.status()).toBe(401);
});
