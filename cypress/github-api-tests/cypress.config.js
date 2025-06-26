const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.github.com',
    env: {
      GITHUB_TOKEN: process.env.MY_GITHUB_TOKEN
    },
     testIsolation: false,
  },
});
