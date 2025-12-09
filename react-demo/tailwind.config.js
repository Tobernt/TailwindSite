const sharedConfig = require('../tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  presets: [sharedConfig],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
};
