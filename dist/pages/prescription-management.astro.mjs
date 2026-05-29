import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$PrescriptionManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Prescription Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Prescription Management", "subtitle": "Generate and manage digital prescriptions efficiently", "description": "Create digital prescriptions with medicine selection, dosage instructions, duration, and frequency tracking. Access prescription history and support repeat prescriptions for chronic conditions.", "features": [
    "Medicine selection",
    "Dosage instructions",
    "Duration management",
    "Frequency tracking",
    "Prescription history",
    "Repeat prescription support",
    "Digital prescription records"
  ], "benefits": [
    "Reduced prescription errors with standardized formats",
    "Faster prescription generation during consultations",
    "Easy patient access to treatment plans",
    "Better medication management and adherence tracking"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/prescription-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/prescription-management.astro";
const $$url = "/prescription-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrescriptionManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
