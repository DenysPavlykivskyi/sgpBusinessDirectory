import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CZhOI031.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://sg-business.com");
const $$AdSlot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdSlot;
  const { id, position, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`ad-container ${className}`, "class")}${addAttribute(position, "data-ad-slot")} data-ad-format="auto" style="min-height: 0; min-width: 0; display: block;" data-astro-cid-fgwukgf6> <!-- Ads will be injected here by JavaScript when they become available --> </div> `;
}, "C:/sgpbusiness/sgpBusinessDirectory/src/components/AdSlot.astro", void 0);

export { $$AdSlot as $ };
