/* empty css                                 */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$CompanyCard } from '../chunks/CompanyCard_CYxKHnGS.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_C66Y4Q0J.mjs';
import { $ as $$AdSlot } from '../chunks/AdSlot_resRu42K.mjs';
import { c as companies } from '../chunks/companies_CP-KSTNV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sg-business.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageSize = 12;
  const currentPage = parseInt(Astro2.params.page) || 1;
  const totalCompanies = companies.length;
  const totalPages = Math.ceil(totalCompanies / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedCompanies = companies.slice(startIndex, endIndex);
  const basePath = "/companies/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Singapore Companies Directory - Browse All Companies", "description": "Browse through our comprehensive directory of businesses registered in Singapore. Filter by company name, type, and status." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <h1 class="text-3xl font-bold text-gray-900">Companies Directory</h1> <p class="mt-2 text-lg text-gray-600">
Browse through our comprehensive list of businesses registered in Singapore
</p> <!-- Ad slot below the title --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "directory-top-ad", "position": "directory-top", "className": "mt-6" })} <!-- Filter and search form --> <div class="mt-6 bg-gray-50 p-4 rounded-lg"> <form action="/search" method="get" class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Company Name</label> <input type="text" name="name" id="name" placeholder="Search by name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"> </div> <div> <label for="type" class="block text-sm font-medium text-gray-700">Registration Type</label> <select id="type" name="type" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">All Types</option> <option value="Sole Proprietorship/ Partnership">Sole Proprietorship/Partnership</option> <option value="Local Company">Local Company</option> <option value="Limited Partnership">Limited Partnership</option> <option value="Foreign Company Branch">Foreign Company Branch</option> <option value="Limited Liability Partnership">Limited Liability Partnership</option> </select> </div> <div> <label for="status" class="block text-sm font-medium text-gray-700">Status</label> <select id="status" name="status" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">All Statuses</option> <option value="Live">Live</option> <option value="Terminated">Terminated</option> <option value="Cancelled">Cancelled</option> </select> </div> <div class="md:col-span-3"> <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Apply Filters
</button> </div> </form> </div> </div> </section> <section class="bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Company listing --> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${paginatedCompanies.map((company) => renderTemplate`${renderComponent($$result2, "CompanyCard", $$CompanyCard, { "company": company })}`)} </div> <!-- Pagination --> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "basePath": basePath })} <!-- Ad slot below pagination --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "directory-bottom-ad", "position": "directory-bottom", "className": "mt-8" })} </div> </section> ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/companies/index.astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/companies/index.astro";
const $$url = "/companies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
