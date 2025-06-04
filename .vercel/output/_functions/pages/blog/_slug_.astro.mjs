/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, e as defineScriptVars, d as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CZhOI031.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_AdaGzw4y.mjs';
import { $ as $$AdSlot } from '../../chunks/AdSlot_resRu42K.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sg-business.com");
async function getStaticPaths() {
  const blogPosts = [
    {
      id: 1,
      slug: "understanding-business-registration",
      title: "Understanding Business Registration in Singapore",
      excerpt: "Learn about the different types of business registrations in Singapore and how to choose the right one for your venture.",
      content: `
        <p>Singapore is known for its business-friendly environment, making it an attractive destination for entrepreneurs and companies looking to establish a presence in Asia. Understanding the different types of business entities available is crucial for making the right choice for your specific needs.</p>
        
        <h2>Sole Proprietorship</h2>
        <p>A sole proprietorship is the simplest form of business entity in Singapore. It's owned by one individual who has unlimited liability for all debts and obligations. This means your personal assets are not protected if your business faces financial difficulties.</p>
        
        <p>Advantages:</p>
        <ul>
          <li>Easy and inexpensive to set up</li>
          <li>Minimal compliance requirements</li>
          <li>No need for audited accounts</li>
        </ul>
        
        <p>Disadvantages:</p>
        <ul>
          <li>Unlimited liability</li>
          <li>Limited financing options</li>
          <li>Ceases to exist upon the death of the owner</li>
        </ul>
        
        <h2>Partnership</h2>
        <p>A partnership involves two or more individuals who share ownership. Like sole proprietorships, partners have unlimited liability for business debts.</p>
        
        <p>Advantages:</p>
        <ul>
          <li>Easy to set up</li>
          <li>Shared management responsibilities</li>
          <li>Broader skill set and resources</li>
        </ul>
        
        <p>Disadvantages:</p>
        <ul>
          <li>Unlimited liability for all partners</li>
          <li>Partnership dissolves when a partner leaves</li>
          <li>Partners are liable for actions of other partners</li>
        </ul>
        
        <h2>Limited Partnership (LP)</h2>
        <p>A limited partnership has at least one general partner with unlimited liability and one limited partner whose liability is limited to the amount of their agreed contribution.</p>
        
        <p>Advantages:</p>
        <ul>
          <li>Limited liability for limited partners</li>
          <li>Flexibility in profit sharing</li>
          <li>Less disclosure requirements than companies</li>
        </ul>
        
        <p>Disadvantages:</p>
        <ul>
          <li>At least one partner must have unlimited liability</li>
          <li>Limited partners cannot be involved in management</li>
          <li>Can be complex to set up</li>
        </ul>
        
        <h2>Private Limited Company</h2>
        <p>A private limited company is a separate legal entity from its shareholders. Shareholders' liability is limited to their capital contribution.</p>
        
        <p>Advantages:</p>
        <ul>
          <li>Limited liability protection</li>
          <li>Perpetual succession</li>
          <li>Enhanced credibility and image</li>
          <li>Tax benefits and incentives</li>
          <li>Easier to raise capital</li>
        </ul>
        
        <p>Disadvantages:</p>
        <ul>
          <li>Higher setup and maintenance costs</li>
          <li>More statutory compliance requirements</li>
          <li>Annual filing of accounts and returns</li>
        </ul>
        
        <h2>Limited Liability Partnership (LLP)</h2>
        <p>An LLP combines elements of a partnership and a company. Partners have limited liability while the partnership has the flexibility of operating as a traditional partnership.</p>
        
        <p>Advantages:</p>
        <ul>
          <li>Limited liability protection</li>
          <li>Flexibility in management and profit sharing</li>
          <li>Lower compliance requirements than companies</li>
        </ul>
        
        <p>Disadvantages:</p>
        <ul>
          <li>May not be as prestigious as a company</li>
          <li>Less understood by the public</li>
          <li>Cannot issue shares to raise capital</li>
        </ul>
        
        <h2>Making the Right Choice</h2>
        <p>When deciding on the type of business entity to register in Singapore, consider the following factors:</p>
        
        <ul>
          <li>Liability exposure and risk tolerance</li>
          <li>Tax implications</li>
          <li>Compliance requirements and costs</li>
          <li>Funding needs</li>
          <li>Long-term business goals</li>
        </ul>
        
        <p>It's advisable to consult with a professional business consultant or legal advisor before making your decision. The right business structure will provide a solid foundation for your venture's growth and success in Singapore's dynamic market.</p>`,
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
      content: `<p>Singapore's business landscape has undergone significant transformation in recent years. This article examines the current state and future trends.</p>`,
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
      content: `<p>Singapore offers a competitive tax environment for businesses. This article explores key tax considerations for companies operating in Singapore.</p>`,
      date: "2025-05-20",
      author: "David Wong",
      category: "Finance",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const formattedDate = new Date(post.date).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const relatedPosts = [
    {
      id: 1,
      slug: "understanding-business-registration",
      title: "Understanding Business Registration in Singapore",
      excerpt: "Learn about the different types of business registrations...",
      date: "2025-06-15",
      author: "Sarah Chen",
      category: "Business Tips",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      slug: "singapore-business-landscape-2025",
      title: "The Changing Landscape of Singapore Business in 2025",
      excerpt: "An in-depth analysis of how Singapore's business environment...",
      date: "2025-06-01",
      author: "Michael Tan",
      category: "Business Analysis",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      slug: "tax-considerations-singapore-companies",
      title: "Tax Considerations for Singapore Companies",
      excerpt: "Essential tax information for businesses operating...",
      date: "2025-05-20",
      author: "David Wong",
      category: "Finance",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ].filter((p) => p.id !== post.id).slice(0, 3);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-SG", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
// Add structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": postTitle,
  "description": postExcerpt,
  "image": postImage,
  "datePublished": postDate,
  "author": {
    "@type": "Person",
    "name": postAuthor
  }
};

// Add structured data to the page
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);
})();<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - Singapore Business Directory Blog`, "description": post.excerpt, "image": post.image, "type": "article" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <!-- Article Header --> <div class="bg-white border-b"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <!-- Breadcrumbs --> <nav class="flex mb-6" aria-label="Breadcrumb"> <ol class="flex items-center space-x-4"> <li> <div> <a href="/" class="text-gray-400 hover:text-gray-500">Home</a> </div> </li> <li> <div class="flex items-center"> <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path> </svg> <a href="/blog/" class="ml-4 text-gray-400 hover:text-gray-500">Blog</a> </div> </li> <li> <div class="flex items-center"> <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path> </svg> <span class="ml-4 text-gray-500 font-medium truncate" aria-current="page"> ${post.title.length > 40 ? post.title.substring(0, 40) + "..." : post.title} </span> </div> </li> </ol> </nav> <div class="flex flex-col items-center text-center"> <div class="flex items-center space-x-2 text-sm"> <span class="text-primary-700 font-medium">${post.category}</span> <span class="text-gray-400">·</span> <time${addAttribute(post.date, "datetime")} class="text-gray-500">${formattedDate}</time> </div> <h1 class="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"> ${post.title} </h1> <p class="mt-4 text-lg text-gray-600 max-w-2xl"> ${post.excerpt} </p> <div class="mt-6 flex items-center"> <div class="flex-shrink-0"> <span class="sr-only">${post.author}</span> <svg class="h-10 w-10 rounded-full bg-gray-200 text-gray-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </div> <div class="ml-3"> <p class="text-sm font-medium text-gray-900">${post.author}</p> </div> </div> </div> </div> </div> <!-- Featured Image --> <div class="relative"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-96 object-cover"> </div> <!-- Article Content --> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Ad slot at the top of content --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "blog-content-top-ad", "position": "blog-content-top", "className": "mb-8" })} <div class="prose prose-lg mx-auto"> <div>${unescapeHTML(post.content)}</div> </div> <!-- Ad slot at the bottom of content --> ${renderComponent($$result2, "AdSlot", $$AdSlot, { "id": "blog-content-bottom-ad", "position": "blog-content-bottom", "className": "mt-8" })} <!-- Article Footer --> <div class="mt-12 border-t border-gray-200 pt-8"> <div class="flex justify-between items-center"> <div class="flex space-x-4"> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(Astro2.url)}`, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-600"> <span class="sr-only">Facebook</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> <a${addAttribute(`https://twitter.com/intent/tweet?url=${encodeURIComponent(Astro2.url)}&text=${encodeURIComponent(post.title)}`, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(Astro2.url)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-700"> <span class="sr-only">LinkedIn</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path> </svg> </a> </div> <a href="/blog/" class="text-primary-700 hover:text-primary-800 font-medium flex items-center">
Back to blog
<svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> </article>  ${relatedPosts.length > 0 && renderTemplate`<section class="bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-2xl font-bold text-gray-900 mb-8">You may also like</h2> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${relatedPosts.map((related) => renderTemplate`<article class="bg-white rounded-lg shadow-sm overflow-hidden"> <a${addAttribute(`/blog/${related.slug}/`, "href")} class="block"> <img${addAttribute(related.image, "src")}${addAttribute(related.title, "alt")} class="h-48 w-full object-cover"> <div class="p-6"> <div class="flex items-center"> <span class="text-sm font-medium text-primary-700">${related.category}</span> <span class="mx-1 text-gray-400">·</span> <span class="text-sm text-gray-500">${formatDate(related.date)}</span> </div> <h3 class="mt-2 text-xl font-semibold text-gray-900"> ${related.title} </h3> <p class="mt-3 text-sm text-gray-600">${related.excerpt}</p> </div> </a> </article>`)} </div> </div> </section>`}` }), defineScriptVars({ postTitle: post.title, postExcerpt: post.excerpt, postDate: post.date, postImage: post.image, postAuthor: post.author }));
}, "C:/sgpbusiness/sgpBusinessDirectory/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/sgpbusiness/sgpBusinessDirectory/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
