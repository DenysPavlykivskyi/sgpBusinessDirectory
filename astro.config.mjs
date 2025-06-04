// Make sure this import is at the top
import { defineConfig } from 'vite';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://sg-business.com',
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs20.x',
    functionPerRoute: true,
    edgeMiddleware: false,
  }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});