// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://419087.github.io',
  base: '/shirokuro-portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
});