/* empty css                                 */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$CompanyCard } from '../chunks/CompanyCard_CYxKHnGS.mjs';
import { $ as $$AdSlot } from '../chunks/AdSlot_resRu42K.mjs';
import { c as companies } from '../chunks/companies_CP-KSTNV.mjs';
import { r as registrationTypes } from '../chunks/registrationTypes_2eUyI_p7.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredCompanies = companies.slice(0, 6);
  const companyCountByType = registrationTypes.map((type) => {
    const count = companies.filter((company) => company.type === type.name).length;
    return {
      name: type.name,
      slug: type.slug,
      count
    };
  });
  companies.length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Singapore Business Directory - Find Companies and Business Information", "description": "Search and find information about businesses registered in Singapore. Access company profiles, registration details, and more." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"> <div class="md:flex md:items-center md:justify-between"> <div class="md:w-1/2"> <h1 class="text-xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
Singapore Business Directory
</h1> <p class="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
It's all about getting ahead in this new world
</p> <div class="mt-8"> <form action="/search" method="get" class="sm:flex"> <label for="hero-search" class="sr-only">Search companies</label> <input id="hero-search" type="search" name="q" placeholder="Search for a company..." required class="w-full px-5 py-3 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs border-white rounded-md text-gray-900"> <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"> <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Search
</button> </div> </form> </div> </div> <div class="mt-8 md:mt-0 md:w-1/2 flex justify-center"> <img src="https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Singapore skyline" class="rounded-lg shadow-xl h-auto max-h-80 object-cover"> </div> </div> </div> </section>    <section class="py-12 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Companies</h2> <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
Explore some of the businesses in our directory
</p> </div> <!-- Ad slot above company listings --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "featured-top-ad", "position": "featured-top", "className": "mb-8" })} <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${featuredCompanies.map((company) => renderTemplate`${renderComponent($$result2, "CompanyCard", $$CompanyCard, { "company": company })}`)} </div> <div class="mt-12 text-center"> <a href="/companies/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
View all companies
<svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </section>  <section class="py-12 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Browse by Categories</h2> <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
Explore businesses based on their registration category
</p> </div> <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"> ${companyCountByType.map((type) => renderTemplate`<a${addAttribute(`/registration-types/${type.slug}/`, "href")} class="group block bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300"> <div class="p-6"> <h3 class="text-lg font-medium text-gray-900 group-hover:text-primary-700 transition-colors duration-200"> ${type.name} </h3> <p class="mt-2 text-sm text-gray-500"> ${type.count} companies
</p> <div class="mt-4 flex items-center text-primary-700"> <span class="text-sm font-medium">Browse companies</span> <svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a>`)} </div> </div> </section>  <section class="py-12 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest Updates</h2> <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
Stay informed with the latest business news and articles
</p> </div> <div class="grid gap-8 md:grid-cols-2"> <!-- Blog section --> <div> <h3 class="text-2xl font-bold text-gray-900 mb-6">From Our Blog</h3> <div class="bg-white shadow-sm rounded-lg overflow-hidden"> <div class="p-6"> <p class="text-sm text-gray-500 mb-1">June 15, 2025</p> <h4 class="text-xl font-semibold text-gray-900 mb-2">Understanding Business Registration in Singapore</h4> <p class="text-gray-600 mb-4">
Learn about the different types of business registrations in Singapore and how to choose the right one for your venture.
</p> <a href="/blog/understanding-business-registration/" class="text-primary-700 font-medium flex items-center">
Read more
<svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> <!-- News section --> <div> <h3 class="text-2xl font-bold text-gray-900 mb-6">Business News</h3> <div class="bg-white shadow-sm rounded-lg overflow-hidden"> <div class="p-6"> <p class="text-sm text-gray-500 mb-1">June 12, 2025</p> <h4 class="text-xl font-semibold text-gray-900 mb-2">Singapore's Economy Shows Strong Growth in Q2 2025</h4> <p class="text-gray-600 mb-4">
The Ministry of Trade and Industry reports a 4.5% year-on-year growth for Singapore's economy in the second quarter.
</p> <a href="/news/singapore-economy-q2-2025/" class="text-primary-700 font-medium flex items-center">
Read more
<svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> </div> <!-- Ad slot below content --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "updates-bottom-ad", "position": "updates-bottom", "className": "mt-12" })} </div> </section>   ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/index.astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
