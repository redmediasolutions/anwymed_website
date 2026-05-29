import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$BillingInvoicing = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Billing & Invoicing" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Billing & Invoicing System", "subtitle": "Automate billing and payment management", "description": "Generate professional invoices automatically for consultations, procedures, and services. Manage discounts, track payment status, and maintain organized billing records with automated invoice numbering.", "features": [
    "Automatic bill generation",
    "Invoice creation",
    "Consultation billing",
    "Procedure billing",
    "Service billing",
    "Discount management",
    "Payment status tracking",
    "Invoice numbering system"
  ], "benefits": [
    "Faster billing process for improved cash flow",
    "Reduced accounting errors with automated calculations",
    "Improved revenue management and tracking",
    "Professional invoices that enhance clinic image"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/billing-invoicing.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/billing-invoicing.astro";
const $$url = "/billing-invoicing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BillingInvoicing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
