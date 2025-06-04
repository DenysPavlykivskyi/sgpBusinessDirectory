import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://sg-business.com',
  output: 'server', // Required for SSR
  adapter: vercel({
    // Vercel-specific configurations
    webAnalytics: {
      enabled: true, // Optional: Enable Vercel Analytics
    },
    speedInsights: {
      enabled: true, // Optional: Enable Speed Insights
    },
    // Additional Vercel edge configurations can go here
  }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});