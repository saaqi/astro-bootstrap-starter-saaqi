// @ts-check
import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  site: 'https://saaqi.github.io',
  base: '/astro-bootstrap-starter-saaqi',
  // ...
  integrations: [
    // ... other integrations
    purgecss({
      content: [
        './src/pages/index.astro',
        './src/**/*.{astro,svelte,ts,js}',
        'bootstrap/js/dist/collapse.js',
        // `${bootstrap}/js/dist/modal.js`
      ],
      safelist: [/astro/, /svelte/, /modal/, /:global/, /active/],
      // Use blocklist to explicitly force removal of selectors
      blocklist: ['unused-legacy-class'],
    }),
  ],
});
