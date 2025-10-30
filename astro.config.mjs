import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://motivandoalagyal.org',
  integrations: [
    tailwind({
      // Usa estilos base de Tailwind para reset/normalización
      config: { applyBaseStyles: true }
    })
  ],
  server: { port: 4321 }
});
