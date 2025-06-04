import 'html-escaper';
import 'neotraverse/modern';
import 'kleur/colors';
import '../chunks/astro/server_CZhOI031.mjs';
import 'clsx';
import { c as companies } from '../chunks/companies_CP-KSTNV.mjs';
import { r as registrationTypes } from '../chunks/registrationTypes_2eUyI_p7.mjs';
export { renderers } from '../renderers.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

function formatDate(date) {
  const d = new Date(date);
  return d.toISOString();
}

async function get({ site }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
