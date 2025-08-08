import { test, expect } from '@playwright/test';

// Configurações
const baseUrl = process.env.BASE_URL!;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const locale = 'en-US';

const orderContentType = 'pedido';

// IDs reais existentes (exemplo)
const existingUserId = '7IRpgdQxvFPUpdZ7zZk1RO';
const existingProductId = '46ss7QLmhEyyTCImBc4Vog';

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

// ======================================================
// TESTE POSITIVO - CRUD do Pedido
// ======================================================
test('Order CRUD', async ({ request }) => {
  const orderData = {
    fields: {
      customerName: { [locale]: 'Cliente Exemplo' },
      totalPrice: { [locale]: 49.99 },
      status: { [locale]: 'Pendente' },
      orderType: { [locale]: 'Pix' },
      items: {
        [locale]: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: existingProductId,
          },
        },
      },
      user: {
        [locale]: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: existingUserId,
          },
        },
      },
    },
  };

  const orderRes = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(orderContentType),
    data: orderData,
  });

  expect(orderRes.status()).toBe(201);
  const createdOrder = await orderRes.json();
  const orderId = createdOrder.sys.id;

  await publishEntry(request, orderId, createdOrder.sys.version);

  const getOrderRes = await request.get(`${baseUrl}/entries?content_type=${orderContentType}`, {
    headers: getAuthHeaders(),
  });

  expect(getOrderRes.status()).toBe(200);
  const ordersData = await getOrderRes.json();

  const foundOrder = ordersData.items.find(
    (item: any) => item.fields.customerName?.[locale] === 'Cliente Exemplo'
  );

  expect(foundOrder).toBeTruthy();

  await deleteEntry(request, orderId);
});

// ======================================================
// TESTES NEGATIVOS
// ======================================================

// 1. Campo totalPrice com valor inválido (string)
test('Não deve permitir criar pedido com totalPrice inválido', async ({ request }) => {
  const invalidOrder = {
    fields: {
      customerName: { [locale]: 'Cliente Erro Tipo' },
      totalPrice: { [locale]: 'quarenta' }, // string em vez de número
      status: { [locale]: 'Pendente' },
      orderType: { [locale]: 'Cartão' },
    },
  };

  const res = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(orderContentType),
    data: invalidOrder,
  });

  expect(res.status()).not.toBe(201);
});

// 3. Publicação com versão incorreta
test('Não deve permitir publicar pedido com versão incorreta', async ({ request }) => {
  const orderData = {
    fields: {
      customerName: { [locale]: 'Versão Errada' },
      totalPrice: { [locale]: 59.99 },
      status: { [locale]: 'Pendente' },
      orderType: { [locale]: 'Crédito' },
    },
  };

  const res = await request.post(`${baseUrl}/entries`, {
    headers: getContentHeaders(orderContentType),
    data: orderData,
  });

  expect(res.status()).toBe(201);
  const created = await res.json();

  const pubRes = await request.put(`${baseUrl}/entries/${created.sys.id}/published`, {
    headers: {
      ...getAuthHeaders(),
      'X-Contentful-Version': '0', // versão errada
    },
  });

  expect(pubRes.status()).not.toBe(200);

  await deleteEntry(request, created.sys.id);
});

// 4. Tentativa de acessar a API com token inválido
test('Não deve acessar a API com token inválido', async ({ request }) => {
  const res = await request.get(`${baseUrl}/entries?content_type=${orderContentType}`, {
    headers: {
      Authorization: 'Bearer token_invalido',
    },
  });

  expect(res.status()).toBe(401);
});
