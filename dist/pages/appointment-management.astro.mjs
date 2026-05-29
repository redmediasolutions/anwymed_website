import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$AppointmentManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Appointment Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Appointment Management", "subtitle": "Efficient appointment scheduling is at the heart of every successful clinic", "description": "Streamline your appointment workflow with online booking, walk-in registration, calendar views, and queue management. Reduce waiting times, avoid scheduling conflicts, and improve the overall patient experience.", "features": [
    "Online appointment booking",
    "Walk-in patient registration",
    "Appointment calendar view",
    "Doctor-wise scheduling",
    "Consultation queue management",
    "Appointment status tracking",
    "Follow-up appointment scheduling",
    "Patient visit history"
  ], "benefits": [
    "Reduce waiting time and improve patient satisfaction",
    "Avoid scheduling conflicts with smart calendar management",
    "Improve patient experience with streamlined booking",
    "Better doctor time management and resource allocation"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/appointment-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/appointment-management.astro";
const $$url = "/appointment-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AppointmentManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
