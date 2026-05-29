import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$MedicalProcedures = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Medical Procedures" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Medical Procedures Management", "subtitle": "Track procedures performed during consultations", "description": "Record and manage medical procedures with service selection, quantity management, pricing, and clinical notes. Maintain complete procedure history for accurate treatment records and revenue tracking.", "features": [
    "Procedure recording",
    "Service selection",
    "Quantity management",
    "Procedure pricing",
    "Clinical notes",
    "Procedure history"
  ], "benefits": [
    "Accurate treatment records for every patient",
    "Better revenue tracking and financial management",
    "Improved service documentation and compliance"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/medical-procedures.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/medical-procedures.astro";
const $$url = "/medical-procedures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MedicalProcedures,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
