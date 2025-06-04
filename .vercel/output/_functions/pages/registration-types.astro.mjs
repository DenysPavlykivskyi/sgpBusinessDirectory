/* empty css                                 */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$AdSlot } from '../chunks/AdSlot_resRu42K.mjs';
import { r as registrationTypes } from '../chunks/registrationTypes_2eUyI_p7.mjs';
import { c as companies } from '../chunks/companies_CP-KSTNV.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const typesWithCount = registrationTypes.map((type) => {
    const count = companies.filter((company) => company.type === type.name).length;
    return { ...type, count };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Singapore Business Registration Types - Directory", "description": "Learn about different business registration types in Singapore. Browse businesses by their registration category." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <h1 class="text-3xl font-bold text-gray-900">Business Registration Types</h1> <p class="mt-2 text-lg text-gray-600">
Explore Singapore businesses by their registration category
</p> </div> </section> <section class="bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Ad slot at the top of the page --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "reg-types-top-ad", "position": "reg-types-top", "className": "mb-8" })} <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${typesWithCount.map((type) => renderTemplate`<a${addAttribute(`/registration-types/${type.slug}/`, "href")} class="group bg-white shadow-sm hover:shadow-md rounded-lg overflow-hidden flex flex-col transition duration-300"> <div class="p-6 flex-1"> <h2 class="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-200"> ${type.name} </h2> <div class="mt-4 flex items-center justify-between"> <span class="text-sm font-medium text-primary-700 group-hover:text-primary-800 flex items-center">
Browse companies
<svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"> ${type.count} companies
</span> </div> </div> </a>`)} </div> <!-- Registration Types Information --> <div class="mt-16"> <h2 class="text-2xl font-bold text-gray-900 mb-6">Understanding Business Registration Types</h2> <div class="bg-white shadow-sm rounded-lg overflow-hidden"> <div class="p-6"> <h3 class="text-lg font-medium text-gray-900 mb-4">Sole Proprietorship/ Partnership</h3> <p class="text-gray-600 mb-6">
A sole proprietorship is a business owned by one individual, while a partnership involves two or more persons. 
              These are the simplest forms of business entities in Singapore, with the owner(s) having unlimited liability.
</p> <h3 class="text-lg font-medium text-gray-900 mb-4">Local Company</h3> <p class="text-gray-600 mb-6">
A local company in Singapore is a separate legal entity from its shareholders. It can be limited by shares, 
              limited by guarantee, or unlimited. Most Singapore companies are private limited companies.
</p> <h3 class="text-lg font-medium text-gray-900 mb-4">Limited Partnership</h3> <p class="text-gray-600 mb-6">
A limited partnership consists of at least one general partner with unlimited liability and one limited partner 
              with liability limited to the amount of their agreed contribution.
</p> <h3 class="text-lg font-medium text-gray-900 mb-4">Foreign Company Branch</h3> <p class="text-gray-600 mb-6">
A foreign company may establish a branch office in Singapore to conduct business activities. The branch is not 
              a separate legal entity from its parent company.
</p> <h3 class="text-lg font-medium text-gray-900 mb-4">Limited Liability Partnership</h3> <p class="text-gray-600 mb-6">
A limited liability partnership (LLP) combines elements of a partnership and a company. It provides limited 
              liability to its partners while allowing them to enjoy the flexibility of operating as a partnership.
</p> </div> </div> </div> <!-- Ad slot at the bottom of the page --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "reg-types-bottom-ad", "position": "reg-types-bottom", "className": "mt-8" })} </div> </section> ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/registration-types/index.astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/registration-types/index.astro";
const $$url = "/registration-types";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
