import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$MedicalAttachments = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Medical Attachments" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Medical Attachments & Records", "subtitle": "Store and manage supporting medical documents securely", "description": "Upload and organize medical reports, images, lab results, prescriptions, and other clinical documents. Access all patient documents from a centralized location for easy retrieval and better record keeping.", "features": [
    "Report uploads",
    "Medical image storage",
    "Lab report attachments",
    "Prescription attachments",
    "Document management"
  ], "benefits": [
    "Centralized patient records in one location",
    "Easy document retrieval during consultations",
    "Improved record keeping and compliance"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/medical-attachments.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/medical-attachments.astro";
const $$url = "/medical-attachments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MedicalAttachments,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
