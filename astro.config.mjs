// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()], // <--- ¡AQUÍ ESTÁ EL CAMBIO! Faltaba esta coma
  site: 'https://yaga.haus',
});
