/* empty css                                 */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$AdSlot } from '../chunks/AdSlot_resRu42K.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const newsArticles = [
    {
      id: 1,
      title: "Singapore's Economy Shows Strong Growth in Q2 2025",
      summary: "The Ministry of Trade and Industry reports a 4.5% year-on-year growth for Singapore's economy in the second quarter.",
      source: "Singapore Business News",
      date: "2025-06-12",
      url: "/news/singapore-economy-q2-2025/",
      image: "https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "New Government Initiatives to Support SMEs Announced",
      summary: "The Singapore government has unveiled a new package of support measures for small and medium-sized enterprises.",
      source: "Channel News Asia",
      date: "2025-06-10",
      url: "/news/government-support-smes-2025/",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Tech Startups in Singapore Secure Record Funding",
      summary: "Singapore's technology startup ecosystem has attracted a record $5.2 billion in funding in the first half of 2025.",
      source: "Tech in Asia",
      date: "2025-06-08",
      url: "/news/tech-startups-funding-record/",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Singapore Strengthens Trade Relations with EU",
      summary: "A new trade agreement between Singapore and the European Union aims to enhance bilateral trade and investment.",
      source: "The Straits Times",
      date: "2025-06-05",
      url: "/news/singapore-eu-trade-relations/",
      image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Sustainability Becomes Key Focus for Singapore Businesses",
      summary: "More Singapore companies are integrating environmental, social, and governance (ESG) factors into their operations.",
      source: "Business Times",
      date: "2025-06-01",
      url: "/news/sustainability-singapore-businesses/",
      image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-SG", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Business News - Singapore Business Directory", "description": "Stay updated with the latest business news and developments in Singapore's corporate landscape." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <h1 class="text-3xl font-bold text-gray-900">Business News</h1> </div> </section> <section class="bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Ad slot at the top of news list --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "news-top-ad", "position": "news-top", "className": "mb-8" })} <!-- Featured News --> ${newsArticles.length > 0 && renderTemplate`<div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8"> <div class="md:flex"> <div class="md:flex-shrink-0"> <img${addAttribute(newsArticles[0].image, "src")}${addAttribute(newsArticles[0].title, "alt")} class="h-48 w-full object-cover md:w-96"> </div> <div class="p-8"> <div class="flex items-center"> <span class="text-sm font-medium text-primary-700">${newsArticles[0].source}</span> <span class="mx-1 text-gray-400">·</span> <span class="text-sm text-gray-500">${formatDate(newsArticles[0].date)}</span> </div> <a${addAttribute(newsArticles[0].url, "href")} class="mt-2 block"> <h2 class="text-2xl font-semibold text-gray-900 hover:text-primary-700"> ${newsArticles[0].title} </h2> <p class="mt-3 text-base text-gray-600">${newsArticles[0].summary}</p> </a> <div class="mt-4"> <a${addAttribute(newsArticles[0].url, "href")} class="text-primary-700 hover:text-primary-800 font-medium flex items-center">
Read full story
<svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> </div>`} <!-- News Articles --> <div class="space-y-8"> ${newsArticles.slice(1).map((article, index) => renderTemplate`<div class="bg-white rounded-lg shadow-sm overflow-hidden"> <div class="md:flex"> <div class="md:flex-shrink-0"> <img${addAttribute(article.image, "src")}${addAttribute(article.title, "alt")} class="h-48 w-full object-cover md:w-48"> </div> <div class="p-6"> <div class="flex items-center"> <span class="text-sm font-medium text-primary-700">${article.source}</span> <span class="mx-1 text-gray-400">·</span> <span class="text-sm text-gray-500">${formatDate(article.date)}</span> </div> <a${addAttribute(article.url, "href")} class="mt-2 block"> <h2 class="text-xl font-semibold text-gray-900 hover:text-primary-700"> ${article.title} </h2> <p class="mt-2 text-sm text-gray-600">${article.summary}</p> </a> <div class="mt-3"> <a${addAttribute(article.url, "href")} class="text-sm text-primary-700 hover:text-primary-800 font-medium flex items-center">
Read full story
<svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div>  ${index % 2 === 1 && renderTemplate`${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": `news-between-ad-${index}`, "position": `news-between-${index}`, "className": "mt-8" })}`} </div>`)} </div> <!-- Ad slot at the bottom of news list --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "news-bottom-ad", "position": "news-bottom", "className": "mt-8" })} </div> </section> ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/news/index.astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
