/* empty css                                 */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$AdSlot } from '../chunks/AdSlot_resRu42K.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us - Singapore Business Directory", "description": "Learn about our mission to provide comprehensive information on businesses registered in Singapore." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <h1 class="text-3xl font-bold text-gray-900">About SGPBusiness.com</h1> </div> </section> <section class="bg-gray-50 py-12"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-white shadow-sm rounded-lg overflow-hidden"> <div class="p-8"> <h2 class="text-2xl font-bold text-gray-900 mb-6">It's about getting ahead in this new world</h2> <p class="text-gray-600 mb-6">
Singapore’s premier platform for businesses and individuals. We consolidate data from across the web and present it in a clean, organized format. Let us handle the research while you access reliable, up-to-date business directories tailored for Singapore.
</p> <!-- Ad slot in middle of content --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "about-mid-ad", "position": "about-mid", "className": "my-8" })} </div> </div> </div> </section> ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/about.astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
