import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$UserStaffManagement = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "User & Staff Management" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "User & Staff Management", "subtitle": "Manage clinic staff and user permissions", "description": "Create and manage doctor and staff accounts with role-based access control. Ensure secure authentication and controlled access to sensitive information while enabling better team collaboration.", "features": [
    "Role-based access control",
    "Doctor accounts",
    "Staff accounts",
    "Secure authentication",
    "Multi-user support"
  ], "benefits": [
    "Improved security with controlled access",
    "Controlled access to sensitive information",
    "Better team collaboration and coordination"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/user-staff-management.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/user-staff-management.astro";
const $$url = "/user-staff-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UserStaffManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
