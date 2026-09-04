import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Carrega as variáveis do arquivo .env para process.env
dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',

    // Você pode definir aqui variáveis padrão para usar nos testes
    baseURL: process.env.CONTENTFUL_BASE_URL, // se quiser usar no 'page.goto' etc
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
