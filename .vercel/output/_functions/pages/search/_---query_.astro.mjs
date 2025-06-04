/* empty css                                    */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$CompanyCard } from '../../chunks/CompanyCard_CYxKHnGS.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_C66Y4Q0J.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_DEyzeKoY.mjs';
import { c as companies } from '../../chunks/companies_CP-KSTNV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sg-business.com");
const prerender = false;
function getStaticPaths() {
  return [
    { params: { query: [] } }
    // Fallback for /search
  ];
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const getSearchParam = (param) => {
    try {
      return param ? decodeURIComponent(param).trim() : "";
    } catch {
      return "";
    }
  };
  const url = new URL(Astro2.request.url);
  const searchParams = url.searchParams;
  const searchFilters = {
    q: getSearchParam(searchParams.get("q")),
    name: getSearchParam(searchParams.get("name")),
    type: getSearchParam(searchParams.get("type")),
    status: getSearchParam(searchParams.get("status")),
    page: Math.max(1, parseInt(searchParams.get("page") || "1"))
  };
  const filteredCompanies = companies.filter((company) => {
    const searchQ = searchFilters.q.toLowerCase();
    const searchName = searchFilters.name.toLowerCase();
    const searchType = searchFilters.type.toLowerCase();
    const searchStatus = searchFilters.status.toLowerCase();
    const companyName = company.name?.toLowerCase() || "";
    const companyUen = company.uen?.toLowerCase() || "";
    const companyAddress = company.address?.toLowerCase() || "";
    const companyType = company.type?.toLowerCase() || "";
    const companyStatus = company.status?.toLowerCase() || "";
    const matchesQ = !searchFilters.q || companyName.includes(searchQ) || companyUen.includes(searchQ) || companyAddress.includes(searchQ);
    const matchesName = !searchFilters.name || companyName.includes(searchName);
    const matchesType = !searchFilters.type || companyType === searchType;
    const matchesStatus = !searchFilters.status || companyStatus === searchStatus;
    return matchesQ && matchesName && matchesType && matchesStatus;
  });
  const pageSize = 12;
  const totalCompanies = filteredCompanies.length;
  const totalPages = Math.ceil(totalCompanies / pageSize);
  const currentPage = Math.min(searchFilters.page, totalPages || 1);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCompanies = filteredCompanies.slice(startIndex, startIndex + pageSize);
  const buildPaginationUrl = () => {
    const params = new URLSearchParams();
    if (searchFilters.q) params.set("q", searchFilters.q);
    if (searchFilters.name) params.set("name", searchFilters.name);
    if (searchFilters.type) params.set("type", searchFilters.type);
    if (searchFilters.status) params.set("status", searchFilters.status);
    return `/search?${params.toString()}`;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search Results - ${searchFilters.q || searchFilters.name || "Companies"}`, "description": `Search results for companies in Singapore matching your criteria - Page ${currentPage} of ${totalPages}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <h1 class="text-3xl font-bold text-gray-900">Search Results</h1> <p class="mt-2 text-lg text-gray-600"> ${searchFilters.q && `Matching: "${searchFilters.q}"`} ${searchFilters.name && `Company name: "${searchFilters.name}"`} ${searchFilters.type && ` \u2022 Type: ${searchFilters.type}`} ${searchFilters.status && ` \u2022 Status: ${searchFilters.status}`} ${!searchFilters.q && !searchFilters.name && !searchFilters.type && !searchFilters.status && "Showing all companies"} </p> </div> </section> <section class="bg-gray-50 py-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Search Form with current values pre-filled --> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "action": "/search/[...query]", "method": "GET", "initialValues": searchFilters, "className": "bg-white p-6 rounded-lg shadow-sm mb-8" })} <!-- Results Summary --> <div class="mb-6 flex justify-between items-center"> <h2 class="text-lg font-medium text-gray-900"> ${totalCompanies > 0 ? `Found ${totalCompanies} companies (page ${currentPage} of ${totalPages})` : "No companies found matching your criteria"} </h2> </div> <!-- Results Grid --> ${totalCompanies > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${paginatedCompanies.map((company) => renderTemplate`${renderComponent($$result3, "CompanyCard", $$CompanyCard, { "company": company })}`)} </div> ${totalPages > 1 && renderTemplate`${renderComponent($$result3, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "basePath": buildPaginationUrl(), "className": "mt-8" })}`}` })}` : renderTemplate`<div class="bg-white p-8 shadow-sm rounded-lg text-center"> <h3 class="mt-2 text-lg font-medium text-gray-900">No results found</h3> <p class="mt-1 text-sm text-gray-500">
Try adjusting your search criteria or removing some filters
</p> </div>`} </div> </section> ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/search/[...query].astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/search/[...query].astro";
const $$url = "/search/[...query]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
