import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$VitalsManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vitals Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Vitals Management", "subtitle": "Record and monitor patient vital signs during consultations", "description": "Track comprehensive vital signs including blood pressure, pulse, temperature, oxygen saturation, height, weight, and BMI. Maintain historical vitals data for better diagnosis support and treatment planning.", "features": [
    "Blood pressure tracking",
    "Pulse monitoring",
    "Temperature recording",
    "Oxygen saturation monitoring",
    "Height and weight recording",
    "BMI calculation",
    "Clinical notes"
  ], "benefits": [
    "Complete patient assessment at every visit",
    "Better diagnosis support with comprehensive vitals",
    "Historical vitals tracking for trend analysis",
    "Improved treatment planning based on patient data"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/vitals-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/vitals-management.astro";
const $$url = "/vitals-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VitalsManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
