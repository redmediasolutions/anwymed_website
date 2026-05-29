import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$BatchManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Batch Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Batch Management", "subtitle": "Track every medicine batch with detailed information", "description": "Monitor individual medicine batches with tracking of batch numbers, stock quantities, expiry dates, purchase costs, and selling prices. Make batch-wise stock adjustments for accurate inventory management.", "features": [
    "Batch number tracking",
    "Batch-wise stock quantities",
    "Expiry date monitoring",
    "Purchase cost tracking",
    "Selling price management",
    "Batch stock adjustments"
  ], "benefits": [
    "Better compliance with regulatory requirements",
    "Accurate stock management at batch level",
    "Easy expiry monitoring to prevent losses"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/batch-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/batch-management.astro";
const $$url = "/batch-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BatchManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
