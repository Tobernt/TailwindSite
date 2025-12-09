const baseConfig = require('../tailwind.config.js');

module.exports = {
  ...baseConfig,
  content: [
    ...(baseConfig.content || []),
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
};
