import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      'design-system': resolve(rootDir, '../design-system'),
      'prop-types': resolve(rootDir, 'node_modules/prop-types'),
      clsx: resolve(rootDir, 'node_modules/clsx'),
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        designSystem: resolve(rootDir, 'design-system/index.html'),
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
