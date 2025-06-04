import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CZhOI031.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sg-business.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, basePath, className = "" } = Astro2.props;
  const isQueryPagination = basePath.includes("?");
  const getVisiblePageNumbers = (current, total) => {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 4) {
      return [1, 2, 3, 4, 5, null, total];
    }
    if (current >= total - 3) {
      return [1, null, total - 4, total - 3, total - 2, total - 1, total];
    }
    return [1, null, current - 1, current, current + 1, null, total];
  };
  const visiblePages = getVisiblePageNumbers(currentPage, totalPages);
  const getPageUrl = (pageNum) => {
    if (isQueryPagination) {
      return `${basePath}${pageNum}`;
    } else {
      return `${basePath}${pageNum === 1 ? "" : pageNum}`;
    }
  };
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav aria-label="Pagination"${addAttribute(`my-8 ${className}`, "class")}><ul class="flex justify-center space-x-1 text-sm"><li>${currentPage > 1 ? renderTemplate`<a${addAttribute(getPageUrl(currentPage - 1), "href")} class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>`}</li>${visiblePages.map(
    (pageNum, index) => pageNum === null ? renderTemplate`<li${addAttribute(`ellipsis-${index}`, "key")}><span class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
&hellip;
</span></li>` : renderTemplate`<li${addAttribute(`page-${pageNum}`, "key")}>${pageNum === currentPage ? renderTemplate`<span class="relative z-10 inline-flex items-center px-4 py-2 border border-primary-500 text-sm font-medium rounded-md text-white bg-primary-600 cursor-default" aria-current="page">${pageNum}</span>` : renderTemplate`<a${addAttribute(getPageUrl(pageNum), "href")} class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">${pageNum}</a>`}</li>`
  )}<li>${currentPage < totalPages ? renderTemplate`<a${addAttribute(getPageUrl(currentPage + 1), "href")} class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</li></ul></nav>`}`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
