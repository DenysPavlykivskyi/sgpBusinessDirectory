import { c as createAstro, a as createComponent, b as addAttribute, r as renderTemplate, s as spreadAttributes, u as unescapeHTML, d as renderComponent, m as maybeRenderHead, h as renderScript, i as renderSlot, j as renderHead } from './astro/server_DiIDCIrw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$9 = createAstro("https://sg-business.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://sg-business.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://sg-business.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://sg-business.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://sg-business.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://sg-business.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://sg-business.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://sg-business.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$1 = createAstro("https://sg-business.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Companies", href: "/companies/" },
    { name: "Categories", href: "/registration-types/" },
    { name: "Blog", href: "/blog/" },
    { name: "News", href: "/news/" },
    { name: "About", href: "/about/" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-gray-700 shadow-sm sticky z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex"> <div class="flex-shrink-0 flex items-center"> <a href="/" class="flex items-center"> <span class="text-2xl font-bold text-white">SGP</span> <span class="text-2xl font-bold text-white">Business</span> </a> </div> <nav class="hidden sm:ml-6 sm:flex sm:space-x-8" aria-label="Main navigation"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-400 hover:text-gray-300 hover:border-gray-300 transition duration-150 ease-in-out"${addAttribute(Astro2.url.pathname === item.href ? "page" : void 0, "aria-current")}> ${item.name} </a>`)} </nav> </div> <div class="hidden sm:ml-6 sm:flex sm:items-center"> <div class="relative"> <form action="/search" method="get" class="flex items-center"> <input type="text" name="q" placeholder="Search companies..." class="w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"> <button type="submit" class="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-500"> <span class="sr-only">Search</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path> </svg> </button> </form> </div> </div> <div class="-mr-2 flex items-center sm:hidden"> <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button"> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> <!-- Mobile menu, show/hide based on menu state. --> <div class="hidden sm:hidden" id="mobile-menu"> <div class="pt-2 pb-3 space-y-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition duration-150 ease-in-out"${addAttribute(Astro2.url.pathname === item.href ? "page" : void 0, "aria-current")}> ${item.name} </a>`)} </div> <div class="pt-4 pb-3 border-t border-gray-200"> <div class="mt-3 px-2"> <form action="/search" method="get" class="flex items-center"> <input type="text" name="q" placeholder="Search companies..." class="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"> <button type="submit" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"> <span class="sr-only">Search</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path> </svg> </button> </form> </div> </div> </div> </header> ${renderScript($$result, "C:/sgpbusiness/sgpBusinessDirectory/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const countryBusinessDirectory = [
    { icon: "https://flagicons.lipis.dev/flags/4x3/au.svg", name: "Australia Business Directory", href: "https://www.aus61business.com/" },
    { icon: "https://flagicons.lipis.dev/flags/4x3/ca.svg", name: "Canada Business Directory", href: "https://www.can1business.com/" },
    { icon: "https://flagicons.lipis.dev/flags/4x3/gb.svg", name: "United Kingdom Business Directory", href: "https://www.gbrbusiness.com/" },
    { icon: "https://flagicons.lipis.dev/flags/4x3/hk.svg", name: "Hong Kong Business Directory", href: "https://www.hkgbusiness.com/" },
    { icon: "https://flagicons.lipis.dev/flags/4x3/my.svg", name: "Malaysia Business Directory", href: "https://www.mysbusiness.com/" },
    { icon: "https://flagicons.lipis.dev/flags/4x3/no.svg", name: "Norway Business Directory", href: "https://www.nor47business.com/" },
    { icon: "https://flagicons.lipis.dev/flags/4x3/nz.svg", name: "New Zealand Business Directory", href: "https://www.nzlbusiness.com/" }
  ];
  const QuickLinks = [
    { name: "Home About SGP Business", href: "/" },
    { name: "Singapore Standard Industrial Classification", href: "companies" },
    { name: "Browser Categories", href: "/categories" },
    { name: "Singapore Government", href: "/government" },
    { name: "Instagram(@sgpbusiness)", href: "https://www.instagram.com/sgpbusiness/" },
    { name: "Our Privacy Policy", href: "/Privacy-Policy" },
    { name: "Contact US", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-700 text-white" data-astro-cid-sz7xmlte> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <h2 class="text-xl font-bold mb-4" data-astro-cid-sz7xmlte>About SGP Business</h2> <p class="text-gray-300 mb-4 text-sm" data-astro-cid-sz7xmlte>
Singapore’s premier platform for businesses and individuals. We consolidate data from across the web and present it in a clean, organized format. Let us handle the research while you access reliable, up-to-date business directories tailored for Singapore.
</p> <!-- Ad container that won't be visible until ads are added --> <div id="footer-ad" class="ad-container" data-ad-slot="footer" data-astro-cid-sz7xmlte></div> </div> <div data-astro-cid-sz7xmlte> <h3 class="text-lg font-bold mb-4" data-astro-cid-sz7xmlte>Business Directories</h3> <ul class="space-y-2 mb-4" data-astro-cid-sz7xmlte> ${countryBusinessDirectory.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <span class="flag-icon"${addAttribute(`background-image: url(${link.icon})`, "style")} data-astro-cid-sz7xmlte></span> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200 text-sm ease-in-out" data-astro-cid-sz7xmlte> ${link.name} </a> </li>`)} </ul> <h4 class="text-md hover:text-gray-300 mb-4" data-astro-cid-sz7xmlte><a href="#" class="text-gray-300 hover:text-white" data-astro-cid-sz7xmlte>Masked NRIC is Not Private</a></h4> <h3 class="text-lg font-bold mb-4" data-astro-cid-sz7xmlte>Data Analytics</h3> <ul class="space-y-2 mb-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="#" class="text-gray-300 hover:text-white" data-astro-cid-sz7xmlte>Live Entities with Exact Match Name</a></li> <li data-astro-cid-sz7xmlte><a href="#" class="text-gray-300 hover:text-white" data-astro-cid-sz7xmlte>Top 20 Property Agency by Number of Salesperson</a></li> <li data-astro-cid-sz7xmlte><a href="#" class="text-gray-300 hover:text-white" data-astro-cid-sz7xmlte>Energy Market Company-Uniform Singapore Energy Price(USEP)</a></li> </ul> <h3 class="text-lg font-bold mb-4" data-astro-cid-sz7xmlte>List of</h3> <ul class="space-y-2 mb-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="#" class="text-gray-300 hover:text-white" data-astro-cid-sz7xmlte>Singapore SMS Registry - Participating SMS Aggregators</a></li> <li data-astro-cid-sz7xmlte><a href="#" class="text-gray-300 hover:text-white" data-astro-cid-sz7xmlte>COVID-19 Self-Test Kits Authorised for use in Singapore (Distributors)</a></li> </ul> </div> <div data-astro-cid-sz7xmlte> <h3 class="text-lg font-bold mb-4" data-astro-cid-sz7xmlte>Singapore Company Search</h3> <div class="sm:flex mb-4" data-astro-cid-sz7xmlte> <form action="/search" method="get" class="flex items-center" data-astro-cid-sz7xmlte> <input type="text" name="q" placeholder="Search companies..." class="w-64 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" data-astro-cid-sz7xmlte> <button type="submit" class="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-500" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Search</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" data-astro-cid-sz7xmlte></path> </svg> </button> </form> </div> <h3 class="text-lg font-bold mb-4" data-astro-cid-sz7xmlte>Quick Links</h3> <ul class="space-y-2 mb-4" data-astro-cid-sz7xmlte> ${QuickLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-astro-cid-sz7xmlte> ${link.name} </a> </li>`)} </ul> <h3 class="text-lg font-bold mb-4" data-astro-cid-sz7xmlte>Contact Us</h3> <a href="mailto:hello@sgpbusiness.com" class="text-gray-300 hover:text-white" data-astro-cid-sz7xmlte>hello@sgpbusiness.com</a> </div> </div> <div class="mt-12 pt-8 border-t border-gray-700" data-astro-cid-sz7xmlte> <div class="flex flex-col justify-between" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>Disclaimer</h3> <p class="text-gray-300 text-sm" data-astro-cid-sz7xmlte>
All information and any services provided from sgpbusiness.com, its subdomain or all other pages under this domain are on an "as-is" and "as-available" basis without warranties of any kind and are made available for your general information and use only. While we endeavour to keep the information provided up to date, and as accurately as possible, your use is entirely at your risk, for which SGPBusiness.com shall not be liable whatsoever. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics on the website for any purpose. Therefore, any reliance you place on such information is strictly at your own risk. Our data may sometimes be cached or crawled and republished by other not affiliated or related sites, and we cannot be responsible for their content.
          Please contact us, should you discover any outdated information, discrepancy or error. A correction will be made. Please note that all information published on our platform are readily available to the public on the Internet and are published in accordance with privacy laws.
<br data-astro-cid-sz7xmlte>
Information for App Store Apps is aggregated based on the "Seller" have an exact name match with the company name as listed on this page. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
<br data-astro-cid-sz7xmlte>
Information (less other data with last aggregated date) on this page was last updated on 8 January 2022, 00:17:01 GMT+8.
</p> <p class="text-gray-300 text-sm" data-astro-cid-sz7xmlte>
&copy; ${currentYear} SGP Business Directory. All rights reserved.
</p> </div> </div> </div> </footer> `;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sg-business.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Singapore Business Directory",
    description = "Find and connect with businesses across Singapore",
    image = "/images/og-image.jpg",
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href,
    type = "website"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">', "<!-- Ad slot placeholders - will not be visible until ads are added later --><script>\n      // This script can be used to dynamically load ads in the future\n      window.adSlots = {};\n    <\/script><!-- Analytics placeholder - empty for now --><script>\n      // Analytics code will be added here later\n    <\/script>", '</head> <body class="min-h-screen flex flex-col bg-gray-50"> ', ' <main class="flex-1"> ', " </main> ", " </body></html>"])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonicalURL, "openGraph": {
    basic: {
      title,
      type,
      image,
      url: canonicalURL
    },
    optional: {
      siteName: "Singapore Business Directory",
      description
    },
    image: {
      alt: "Singapore Business Directory"
    }
  }, "twitter": {
    card: "summary_large_image",
    site: "@sgbusinessdir",
    creator: "@sgbusinessdir"
  }, "extend": {
    link: [
      { rel: "icon", href: "/favicon.svg" },
      { rel: "sitemap", href: "/sitemap-index.xml" }
    ],
    meta: [
      { name: "generator", content: Astro2.generator }
    ]
  } }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/sgpbusiness/sgpBusinessDirectory/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
