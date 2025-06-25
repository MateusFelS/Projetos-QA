import { test, expect } from '@playwright/test';

test.describe('Authors Requests', () => {
    test('GET Authors', async ({ request }) => {
      const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Authors');
      expect(response.status()).toBe(200);
    });
  
    test('POST Author', async ({ request }) => {
      const response = await request.post('https://fakerestapi.azurewebsites.net/api/v1/Authors', {
        data: {
          id: 101,
          idBook: 1,
          firstName: 'John',
          lastName: 'Doe',
        },
      });
      expect(response.status()).toBe(200);
    });
  
    test('PUT Author', async ({ request }) => {
      const response = await request.put('https://fakerestapi.azurewebsites.net/api/v1/Authors/101', {
        data: {
          id: 101,
          idBook: 1,
          firstName: 'Updated John',
          lastName: 'Updated Doe',
        },
      });
      expect(response.status()).toBe(200);
    });
  
    test('DELETE Author', async ({ request }) => {
      const response = await request.delete('https://fakerestapi.azurewebsites.net/api/v1/Authors/101');
      expect(response.status()).toBe(200);
    });
  });