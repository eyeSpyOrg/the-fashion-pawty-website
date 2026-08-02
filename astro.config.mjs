// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/config/site.js';

export default defineConfig({
  // Sitemap + canonical URLs require this. Change per project in src/config/site.js
  site: SITE.url,
  integrations: [
    sitemap({
      // Exclude utility pages from the sitemap
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Inline small stylesheets to reduce render-blocking requests (Lighthouse perf)
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
