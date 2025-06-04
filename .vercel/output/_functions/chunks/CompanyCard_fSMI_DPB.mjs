import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DiIDCIrw.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sg-business.com");
const $$CompanyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CompanyCard;
  const { company } = Astro2.props;
  const formattedDate = new Date(company.registrationDate).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "live":
        return "bg-green-100 text-green-800";
      case "terminated":
        return "bg-red-100 text-red-800";
      case "cancelled":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const statusColor = getStatusColor(company.status);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"> <a${addAttribute(`/companies/${company.slug}/`, "href")} class="block"> <div class="p-6"> <div class="flex justify-between items-start mb-2"> <h2 class="text-xl font-medium text-gray-900 hover:text-primary-700 transition-colors duration-200"> ${company.name} </h2> <span${addAttribute(`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColor}`, "class")}> ${company.status} </span> </div> <p class="text-sm text-gray-500 mb-4">UEN: ${company.uen}</p> <div class="space-y-2"> <div class="flex items-start"> <svg class="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> <span class="ml-2 text-sm text-gray-600 line-clamp-2"> ${company.address} </span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span class="ml-2 text-sm text-gray-600">
Registered: ${formattedDate} </span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> <span class="ml-2 text-sm text-gray-600">
Type: ${company.constitution} </span> </div> </div> <div class="mt-4"> <span class="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-800">
View company details
<svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </div> </div> </a> </div>`;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/components/CompanyCard.astro", void 0);

export { $$CompanyCard as $ };
