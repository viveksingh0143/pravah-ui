import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pravah-ui',
      fileName: 'pravah-ui',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // external: /^lit/,
      // output: {
      //   preserveModules: true,
      //   preserveModuleRoot: 'src',
      // },
    },
  },
  css: {
    postcss: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});