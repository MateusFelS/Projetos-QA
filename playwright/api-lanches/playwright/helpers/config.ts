/**
 * Configurações centralizadas dos testes de API (Contentful).
 * Antes, cada spec (category/order/product/user) redeclarava
 * BASE_URL, ACCESS_TOKEN, locale e content type. Agora fica em
 * um único lugar — trocar de ambiente ou renomear um content
 * type no Contentful vira uma alteração em um arquivo só.
 */

export const BASE_URL = process.env.BASE_URL!;
export const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;

export const LOCALE = 'en-US';

export const CONTENT_TYPES = {
  CATEGORIA: 'categoria',
  PRODUTO: 'produto',
  PEDIDO: 'pedido',
  USER: 'user',
} as const;

if (!BASE_URL) {
  throw new Error('BASE_URL não definida. Configure a variável de ambiente antes de rodar os testes.');
}
if (!ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN não definida. Configure a variável de ambiente antes de rodar os testes.');
}
