/* empty css                                    */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$CompanyCard } from '../../chunks/CompanyCard_CYxKHnGS.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_C66Y4Q0J.mjs';
import { $ as $$AdSlot } from '../../chunks/AdSlot_resRu42K.mjs';
import { r as registrationTypes } from '../../chunks/registrationTypes_2eUyI_p7.mjs';
import { c as companies } from '../../chunks/companies_CP-KSTNV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sg-business.com");
async function getStaticPaths() {
  return registrationTypes.map((type) => {
    const typeCompanies = companies.filter((company) => company.type === type.name);
    return {
      params: { slug: type.slug },
      props: { type, typeCompanies }
    };
  });
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { type, typeCompanies } = Astro2.props;
  const pageSize = 12;
  const currentPage = 1;
  const totalCompanies = typeCompanies.length;
  const totalPages = Math.ceil(totalCompanies / pageSize);
  const paginatedCompanies = typeCompanies.slice(0, pageSize);
  const getTypeDescription = (typeName) => {
    switch (typeName) {
      case "Sole Proprietorship/ Partnership":
        return "A sole proprietorship is a business owned by one individual, while a partnership involves two or more persons. These are the simplest forms of business entities in Singapore.";
      case "Local Company":
        return "A local company in Singapore is a separate legal entity from its shareholders. Most Singapore companies are private limited companies.";
      case "Limited Partnership":
        return "A limited partnership consists of at least one general partner with unlimited liability and one limited partner with liability limited to the amount of their agreed contribution.";
      case "Foreign Company Branch":
        return "A foreign company may establish a branch office in Singapore to conduct business activities. The branch is not a separate legal entity from its parent company.";
      case "Limited Liability Partnership":
        return "A limited liability partnership (LLP) combines elements of a partnership and a company, providing limited liability to its partners while allowing them to enjoy partnership flexibility.";
      default:
        return "Business entity registered in Singapore.";
    }
  };
  const typeDescription = getTypeDescription(type.name);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${type.name} Companies in Singapore - Directory`, "description": `Browse Singapore businesses registered as ${type.name}. Find company information, registration details, address, and more.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <!-- Breadcrumbs --> <nav class="flex mb-4" aria-label="Breadcrumb"> <ol class="flex items-center space-x-4"> <li> <div> <a href="/" class="text-gray-400 hover:text-gray-500">Home</a> </div> </li> <li> <div class="flex items-center"> <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path> </svg> <a href="/registration-types/" class="ml-4 text-gray-400 hover:text-gray-500">Registration Types</a> </div> </li> <li> <div class="flex items-center"> <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path> </svg> <span class="ml-4 text-gray-500 font-medium" aria-current="page">${type.name}</span> </div> </li> </ol> </nav> <h1 class="text-3xl font-bold text-gray-900">${type.name} Companies</h1> <p class="mt-2 text-lg text-gray-600"> ${typeDescription} </p> <p class="mt-1 text-sm text-gray-500">
Found ${totalCompanies} companies registered as ${type.name} </p> </div> </section> <section class="bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Ad slot at the top of listings --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "type-top-ad", "position": "type-top", "className": "mb-8" })} ${totalCompanies > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${paginatedCompanies.map((company) => renderTemplate`${renderComponent($$result3, "CompanyCard", $$CompanyCard, { "company": company })}`)} </div>  ${renderComponent($$result3, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "basePath": `/registration-types/${type.slug}/` })} ` })}` : renderTemplate`<div class="text-center py-12"> <h3 class="text-lg font-medium text-gray-900">No companies found</h3> <p class="mt-2 text-gray-500">There are currently no companies listed under this registration type.</p> </div>`} <!-- Ad slot at the bottom of listings --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "type-bottom-ad", "position": "type-bottom", "className": "mt-8" })} </div> </section> ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/registration-types/[slug].astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/registration-types/[slug].astro";
const $$url = "/registration-types/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
