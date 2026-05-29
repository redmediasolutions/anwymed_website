import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$InventoryManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inventory Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Inventory & Medicine Management", "subtitle": "Manage medicines and stock levels with complete visibility", "description": "Maintain a comprehensive medicine catalog with batch-wise inventory tracking, stock monitoring, low-stock alerts, and expiry tracking. Manage purchase and selling prices for better profitability.", "features": [
    "Medicine catalog management",
    "Batch-wise inventory tracking",
    "Stock monitoring",
    "Low-stock alerts",
    "Expiry tracking",
    "Purchase price management",
    "Selling price management",
    "Batch management",
    "Inventory history"
  ], "benefits": [
    "Prevent stock shortages with proactive alerts",
    "Reduce medicine wastage with expiry tracking",
    "Better inventory control and optimization",
    "Improved profitability with price management"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/inventory-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/inventory-management.astro";
const $$url = "/inventory-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InventoryManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
