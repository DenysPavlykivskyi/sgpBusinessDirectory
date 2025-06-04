export default defineConfig({
  site: 'https://sg-business.com',
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs20.x',
    functionPerRoute: false, // Try disabling this first
    edgeMiddleware: false,
    // Add this for better error handling
    isr: {
      expiration: false,
    }
  }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});