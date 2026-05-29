import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$PatientManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Patient Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Patient Management System", "subtitle": "Maintain complete digital patient records accessible anytime", "description": "Create and manage comprehensive digital patient profiles with complete medical history, consultation records, contact information, and demographic data. Access patient information instantly from any device.", "features": [
    "Patient registration",
    "Digital patient profiles",
    "Contact information management",
    "Medical history tracking",
    "Consultation history",
    "Follow-up records",
    "Patient search and filtering",
    "Demographic information management"
  ], "benefits": [
    "Centralized patient records accessible from anywhere",
    "Faster access to medical information during consultations",
    "Improved continuity of care across visits",
    "Enhanced patient engagement and communication"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/patient-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/patient-management.astro";
const $$url = "/patient-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PatientManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
