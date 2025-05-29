import { getCollection } from 'astro:content';
import companies from '../data/companies.json';
import registrationTypes from '../data/registrationTypes.json';

function formatDate(date) {
  const d = new Date(date);
  return d.toISOString();
}

export async function get({ site }) {
  const baseUrl = site ? site.toString() : 'https://sg-business.com';
  
  // Today's date for the lastmod field
  const today = formatDate(new Date());
  
  // Start with static pages
  const staticPages = [
    { url: '/', lastmod: today, changefreq: 'daily', priority: '1.0' },
    { url: '/companies/', lastmod: today, changefreq: 'daily', priority: '0.9' },
    { url: '/registration-types/', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { url: '/blog/', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { url: '/news/', lastmod: today, changefreq: 'daily', priority: '0.7' },
    { url: '/search/', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { url: '/about/', lastmod: today, changefreq: 'monthly', priority: '0.5' },
  ];
  
  // Generate urls for companies
  const companyPages = companies.map(company => ({
    url: `/companies/${company.slug}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7'
  }));
  
  // Generate urls for registration types
  const registrationTypePages = registrationTypes.map(type => ({
    url: `/registration-types/${type.slug}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.6'
  }));
  
  // Combine all URLs
  const allPages = [
    ...staticPages,
    ...companyPages,
    ...registrationTypePages,
  ];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}