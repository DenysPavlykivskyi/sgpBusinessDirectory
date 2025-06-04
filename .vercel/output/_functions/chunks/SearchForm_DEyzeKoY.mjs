import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead } from './astro/server_CZhOI031.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sg-business.com");
const $$SearchForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchForm;
  const {
    initialValues = {},
    action = "/search",
    method = "GET",
    className = "",
    showTitle = false
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<div", '> <div class="p-6"> ', ' <form id="searchForm"', "", ' class="space-y-6"> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"> <!-- Keywords --> <div> <label for="q" class="block text-sm font-medium text-gray-700">Keywords</label> <input type="text" name="q" id="q"', ' placeholder="Name, UEN, or address" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"> </div> <!-- Company Name --> <div> <label for="name" class="block text-sm font-medium text-gray-700">Company Name</label> <input type="text" name="name" id="name"', ' placeholder="Exact name match" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"> </div> <!-- Registration Type --> <div> <label for="type" class="block text-sm font-medium text-gray-700">Registration Type</label> <select name="type" id="type" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">All Types</option> <option value="Sole Proprietorship/Partnership"', '>\nSole Proprietorship/Partnership\n</option> <option value="Local Company"', '>\nLocal Company\n</option> <option value="Limited Partnership"', '>\nLimited Partnership\n</option> <option value="Foreign Company Branch"', '>\nForeign Company Branch\n</option> <option value="Limited Liability Partnership"', '>\nLimited Liability Partnership\n</option> </select> </div> <!-- Status --> <div> <label for="status" class="block text-sm font-medium text-gray-700">Status</label> <select name="status" id="status" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">All Statuses</option> <option value="Live"', '>\nLive\n</option> <option value="Terminated"', '>\nTerminated\n</option> <option value="Cancelled"', `>
Cancelled
</option> </select> </div> </div> <div class="flex flex-col sm:flex-row items-center justify-end gap-3"> <a href="/search" class="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Clear All
</a> <button type="submit" class="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Search Companies
</button> </div> </form> </div> </div> <script>
  document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    
    if (searchForm) {
      // Enhanced form submission
      searchForm.addEventListener('submit', (e) => {
        // For GET forms, let the browser handle it natively
        if (searchForm.method.toLowerCase() === 'get') return;
        
        e.preventDefault();
        const formData = new FormData(searchForm);
        const params = new URLSearchParams();
        
        // Only include non-empty values
        formData.forEach((value, key) => {
          if (value && value.trim()) params.set(key, value.trim());
        });
        
        // Reset page to 1 for new searches
        params.set('page', '1');
        
        // Ensure we're always using the same path
        const actionPath = searchForm.action.endsWith('/search') 
          ? '/search' 
          : searchForm.action;
        
        window.location.href = \`\${actionPath}?\${params.toString()}\`;
      });

      // Clear button functionality
      const clearButtons = document.querySelectorAll('[href="/search"]');
      clearButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          if (window.location.pathname === '/search') {
            e.preventDefault();
            window.location.href = '/search';
          }
          // Otherwise, let the link work normally
        });
      });
    }
  });
<\/script>`], ["", "<div", '> <div class="p-6"> ', ' <form id="searchForm"', "", ' class="space-y-6"> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"> <!-- Keywords --> <div> <label for="q" class="block text-sm font-medium text-gray-700">Keywords</label> <input type="text" name="q" id="q"', ' placeholder="Name, UEN, or address" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"> </div> <!-- Company Name --> <div> <label for="name" class="block text-sm font-medium text-gray-700">Company Name</label> <input type="text" name="name" id="name"', ' placeholder="Exact name match" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"> </div> <!-- Registration Type --> <div> <label for="type" class="block text-sm font-medium text-gray-700">Registration Type</label> <select name="type" id="type" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">All Types</option> <option value="Sole Proprietorship/Partnership"', '>\nSole Proprietorship/Partnership\n</option> <option value="Local Company"', '>\nLocal Company\n</option> <option value="Limited Partnership"', '>\nLimited Partnership\n</option> <option value="Foreign Company Branch"', '>\nForeign Company Branch\n</option> <option value="Limited Liability Partnership"', '>\nLimited Liability Partnership\n</option> </select> </div> <!-- Status --> <div> <label for="status" class="block text-sm font-medium text-gray-700">Status</label> <select name="status" id="status" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"> <option value="">All Statuses</option> <option value="Live"', '>\nLive\n</option> <option value="Terminated"', '>\nTerminated\n</option> <option value="Cancelled"', `>
Cancelled
</option> </select> </div> </div> <div class="flex flex-col sm:flex-row items-center justify-end gap-3"> <a href="/search" class="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Clear All
</a> <button type="submit" class="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Search Companies
</button> </div> </form> </div> </div> <script>
  document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    
    if (searchForm) {
      // Enhanced form submission
      searchForm.addEventListener('submit', (e) => {
        // For GET forms, let the browser handle it natively
        if (searchForm.method.toLowerCase() === 'get') return;
        
        e.preventDefault();
        const formData = new FormData(searchForm);
        const params = new URLSearchParams();
        
        // Only include non-empty values
        formData.forEach((value, key) => {
          if (value && value.trim()) params.set(key, value.trim());
        });
        
        // Reset page to 1 for new searches
        params.set('page', '1');
        
        // Ensure we're always using the same path
        const actionPath = searchForm.action.endsWith('/search') 
          ? '/search' 
          : searchForm.action;
        
        window.location.href = \\\`\\\${actionPath}?\\\${params.toString()}\\\`;
      });

      // Clear button functionality
      const clearButtons = document.querySelectorAll('[href="/search"]');
      clearButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          if (window.location.pathname === '/search') {
            e.preventDefault();
            window.location.href = '/search';
          }
          // Otherwise, let the link work normally
        });
      });
    }
  });
<\/script>`])), maybeRenderHead(), addAttribute(`bg-white shadow-sm rounded-lg overflow-hidden ${className}`, "class"), showTitle && renderTemplate`<h2 class="text-lg font-medium text-gray-900 mb-6">Search Companies</h2>`, addAttribute(method, "method"), addAttribute(action, "action"), addAttribute(initialValues.q || "", "value"), addAttribute(initialValues.name || "", "value"), addAttribute(initialValues.type === "Sole Proprietorship/Partnership", "selected"), addAttribute(initialValues.type === "Local Company", "selected"), addAttribute(initialValues.type === "Limited Partnership", "selected"), addAttribute(initialValues.type === "Foreign Company Branch", "selected"), addAttribute(initialValues.type === "Limited Liability Partnership", "selected"), addAttribute(initialValues.status === "Live", "selected"), addAttribute(initialValues.status === "Terminated", "selected"), addAttribute(initialValues.status === "Cancelled", "selected"));
}, "C:/sgpbusiness/sgpBusinessDirectory/src/components/SearchForm.astro", void 0);

export { $$SearchForm as $ };
