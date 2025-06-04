import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BLIWl97y.mjs';
import { manifest } from './manifest_CkcgOEZn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/companies/_slug_.astro.mjs');
const _page5 = () => import('./pages/companies.astro.mjs');
const _page6 = () => import('./pages/companies/_---page_.astro.mjs');
const _page7 = () => import('./pages/news.astro.mjs');
const _page8 = () => import('./pages/registration-types/_slug_.astro.mjs');
const _page9 = () => import('./pages/registration-types.astro.mjs');
const _page10 = () => import('./pages/search.astro.mjs');
const _page11 = () => import('./pages/search/_---query_.astro.mjs');
const _page12 = () => import('./pages/sitemap.xml.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/companies/[slug].astro", _page4],
    ["src/pages/companies/index.astro", _page5],
    ["src/pages/companies/[...page].astro", _page6],
    ["src/pages/news/index.astro", _page7],
    ["src/pages/registration-types/[slug].astro", _page8],
    ["src/pages/registration-types/index.astro", _page9],
    ["src/pages/search/index.astro", _page10],
    ["src/pages/search/[...query].astro", _page11],
    ["src/pages/sitemap.xml.js", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6197c982-ff4f-4d38-bab2-ebd8c4bdae2e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
