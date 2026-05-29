import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$ConsultationManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Consultation Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Consultation Management", "subtitle": "Conduct and document consultations digitally with ease", "description": "Maintain detailed digital records of every consultation including chief complaints, diagnoses, symptoms, and clinical observations. Access complete consultation history instantly for better clinical decision-making.", "features": [
    "Consultation notes",
    "Chief complaint tracking",
    "Diagnosis recording",
    "Symptoms documentation",
    "Clinical observations",
    "Consultation status management",
    "Consultation history",
    "Digital records storage"
  ], "benefits": [
    "Organized medical records for every patient visit",
    "Faster consultations with quick access to history",
    "Improved documentation accuracy and completeness",
    "Better clinical decision-making with historical data"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/consultation-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/consultation-management.astro";
const $$url = "/consultation-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ConsultationManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
