import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://sg-business.com',
  output: 'server', // Required for SSR
  adapter: vercel({
    runtime: 'nodejs20.x',
    functionPerRoute: true, // Helps isolate crashes
    edgeMiddleware: false, // Disable if not needed
  }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});