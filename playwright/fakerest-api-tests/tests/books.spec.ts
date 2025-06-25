import { test, expect } from '@playwright/test';

test.describe('Books Requests', () => {
    test('GET Books', async ({ request }) => {
      const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
      expect(response.status()).toBe(200);
    });
  
    test('POST Book', async ({ request }) => {
      const response = await request.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
        data: {
          id: 201,
          title: 'New Book',
          description: 'This is a new book',
          pageCount: 300,
          excerpt: 'This is an excerpt',
          publishDate: '2025-01-01T00:00:00',
        },
      });
      expect(response.status()).toBe(200);
    });
  
    test('PUT Book', async ({ request }) => {
      const response = await request.put('https://fakerestapi.azurewebsites.net/api/v1/Books/201', {
        data: {
          id: 201,
          title: 'Updated Book',
          description: 'Updated description',
          pageCount: 320,
          excerpt: 'Updated excerpt',
          publishDate: '2025-01-02T00:00:00',
        },
      });
      expect(response.status()).toBe(200);
    });
  
    test('DELETE Book', async ({ request }) => {
      const response = await request.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/201');
      expect(response.status()).toBe(200);
    });
  });