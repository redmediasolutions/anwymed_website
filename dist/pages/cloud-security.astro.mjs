import { b as createComponent, r as renderComponent, h as renderTemplate } from '../chunks/astro/server_Cm3P8ug0.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_8IilYkJq.mjs';
import { $ as $$ModulePage } from '../chunks/ModulePage_iAAYF7vQ.mjs';
export { renderers } from '../renderers.mjs';

const $$CloudSecurity = createComponent(($$result, $$props, $$slots) => {
  const iconSvg = `<svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cloud Security" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModulePage", $$ModulePage, { "iconSvg": iconSvg, "title": "Enterprise-Grade Cloud Infrastructure & Data Security", "subtitle": "Protecting patient information and ensuring uninterrupted access to critical healthcare data", "description": "Built on Amazon Web Services (AWS) with enterprise-grade security, automated daily backups, point-in-time recovery, and encrypted communication. Our infrastructure delivers security, reliability, scalability, and business continuity.", "features": [
    "Amazon EC2 for highly available hosting",
    "Amazon RDS for managed databases",
    "SSL/TLS encrypted communication",
    "Automated daily backups",
    "Point-in-time recovery",
    "HTTPS encryption for all data transfers",
    "Role-based user permissions",
    "Continuous infrastructure monitoring"
  ], "benefits": [
    "Access from anywhere with cloud-based platform",
    "Data protection with automated backups and encryption",
    "High availability with minimal downtime",
    "Business continuity with disaster recovery",
    "Scalable infrastructure that grows with your practice"
  ] })} ` })}`;
}, "/Users/sujaykumar/Downloads/astro-project/src/pages/cloud-security.astro", void 0);

const $$file = "/Users/sujaykumar/Downloads/astro-project/src/pages/cloud-security.astro";
const $$url = "/cloud-security";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CloudSecurity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
