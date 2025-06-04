/* empty css                                 */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$AdSlot } from '../chunks/AdSlot_resRu42K.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = [
    {
      id: 1,
      slug: "understanding-business-registration",
      title: "Understanding Business Registration in Singapore",
      excerpt: "Learn about the different types of business registrations in Singapore and how to choose the right one for your venture.",
      date: "2025-06-15",
      author: "Sarah Chen",
      category: "Business Tips",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      slug: "singapore-business-landscape-2025",
      title: "The Changing Landscape of Singapore Business in 2025",
      excerpt: "An in-depth analysis of how Singapore's business environment has evolved and what to expect in the coming years.",
      date: "2025-06-01",
      author: "Michael Tan",
      category: "Business Analysis",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      slug: "tax-considerations-singapore-companies",
      title: "Tax Considerations for Singapore Companies",
      excerpt: "Essential tax information for businesses operating in Singapore, including incentives, rates, and compliance requirements.",
      date: "2025-05-20",
      author: "David Wong",
      category: "Finance",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-SG", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Business Blog", "description": "Read insightful articles about business registration, operations, and trends in Singapore." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <h1 class="text-3xl font-bold text-gray-900">Business Blog</h1> </div> </section> <section class="bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Ad slot at the top of the blog list --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "blog-top-ad", "position": "blog-top", "className": "mb-8" })} <!-- Featured Post --> ${blogPosts.length > 0 && renderTemplate`<div class="mb-12"> <a${addAttribute(`/blog/${blogPosts[0].slug}/`, "href")} class="block"> <div class="bg-white rounded-lg shadow-sm overflow-hidden"> <div class="md:flex"> <div class="md:flex-shrink-0"> <img${addAttribute(blogPosts[0].image, "src")}${addAttribute(blogPosts[0].title, "alt")} class="h-48 w-full object-cover md:h-full md:w-48"> </div> <div class="p-8"> <div class="flex items-center"> <span class="text-sm font-medium text-primary-700">${blogPosts[0].category}</span> <span class="mx-1 text-gray-400">·</span> <span class="text-sm text-gray-500">${formatDate(blogPosts[0].date)}</span> </div> <h2 class="mt-2 text-2xl font-semibold text-gray-900 group-hover:text-primary-700"> ${blogPosts[0].title} </h2> <p class="mt-3 text-gray-600">${blogPosts[0].excerpt}</p> <div class="mt-4 flex items-center"> <div class="flex-shrink-0"> <span class="sr-only">${blogPosts[0].author}</span> <svg class="h-10 w-10 rounded-full bg-gray-200 text-gray-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </div> <div class="ml-3"> <p class="text-sm font-medium text-gray-900">${blogPosts[0].author}</p> </div> </div> </div> </div> </div> </a> </div>`} <!-- Blog List --> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${blogPosts.slice(1).map((post) => renderTemplate`<article class="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="block"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="h-48 w-full object-cover"> <div class="p-6 flex-1"> <div class="flex items-center"> <span class="text-sm font-medium text-primary-700">${post.category}</span> <span class="mx-1 text-gray-400">·</span> <span class="text-sm text-gray-500">${formatDate(post.date)}</span> </div> <h2 class="mt-2 text-xl font-semibold text-gray-900"> ${post.title} </h2> <p class="mt-3 text-sm text-gray-600">${post.excerpt}</p> </div> </a> <div class="px-6 pb-6 mt-auto"> <div class="flex items-center"> <div class="flex-shrink-0"> <span class="sr-only">${post.author}</span> <svg class="h-8 w-8 rounded-full bg-gray-200 text-gray-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </div> <div class="ml-3"> <p class="text-sm font-medium text-gray-900">${post.author}</p> </div> </div> </div> </article>`)} </div> <!-- Ad slot at the bottom of the blog list --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "blog-bottom-ad", "position": "blog-bottom", "className": "mt-8" })} </div> </section> ` })}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/blog/index.astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
