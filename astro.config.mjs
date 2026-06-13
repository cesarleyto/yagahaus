// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), sitemap()], // <--- ¡AQUÍ ESTÁ EL CAMBIO! Faltaba esta coma
  site: 'https://yaga.haus',
});