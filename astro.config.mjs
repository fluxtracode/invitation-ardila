// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Never inline client scripts into the HTML. Keeping all JS in external
      // files lets us ship a strict Content-Security-Policy without
      // 'unsafe-inline' for script-src.
      assetsInlineLimit: 0
    }
  }
});