import { test, expect } from '@playwright/test';

test.describe('Activity Requests', () => {
  test('API GET Request', async ({ request }) => {
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Activities');
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
  });

  test('API POST Request', async ({ request }) => {
    const response = await request.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
      data: {
        id: 101,
        title: 'New Activity',
        dueDate: '2025-01-10T00:00:00',
        completed: false,
      },
    });

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
  });

  test('API UPDATE Request', async ({ request }) => {
    const response = await request.put('https://fakerestapi.azurewebsites.net/api/v1/Activities/1', {
      data: {
        id: 1,
        title: 'Update Activity',
        dueDate: '2025-01-10T00:00:00',
        completed: true,
      },
    });
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
  });

  test('API DELETE Request', async ({ request }) => {
    const response = await request.delete('https://fakerestapi.azurewebsites.net/api/v1/Activities/1');
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
  });
});
