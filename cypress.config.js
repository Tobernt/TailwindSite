const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || process.env.DEPLOY_URL || 'http://localhost:4173',
    video: false,
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
