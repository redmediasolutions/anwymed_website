import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, d as decodeKey } from './chunks/astro/server_Cm3P8ug0.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/sujaykumar/Downloads/astro-project/","cacheDir":"file:///Users/sujaykumar/Downloads/astro-project/node_modules/.astro/","outDir":"file:///Users/sujaykumar/Downloads/astro-project/dist/","srcDir":"file:///Users/sujaykumar/Downloads/astro-project/src/","publicDir":"file:///Users/sujaykumar/Downloads/astro-project/public/","buildClientDir":"file:///Users/sujaykumar/Downloads/astro-project/dist/client/","buildServerDir":"file:///Users/sujaykumar/Downloads/astro-project/dist/server/","adapterName":"","routes":[{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/404.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/appointment-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/appointment-management","isIndex":false,"type":"page","pattern":"^\\/appointment-management\\/?$","segments":[[{"content":"appointment-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/appointment-management.astro","pathname":"/appointment-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/batch-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/batch-management","isIndex":false,"type":"page","pattern":"^\\/batch-management\\/?$","segments":[[{"content":"batch-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/batch-management.astro","pathname":"/batch-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/billing-invoicing/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/billing-invoicing","isIndex":false,"type":"page","pattern":"^\\/billing-invoicing\\/?$","segments":[[{"content":"billing-invoicing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/billing-invoicing.astro","pathname":"/billing-invoicing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/book-demo/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/book-demo","isIndex":false,"type":"page","pattern":"^\\/book-demo\\/?$","segments":[[{"content":"book-demo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/book-demo.astro","pathname":"/book-demo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/cloud-security/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/cloud-security","isIndex":false,"type":"page","pattern":"^\\/cloud-security\\/?$","segments":[[{"content":"cloud-security","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cloud-security.astro","pathname":"/cloud-security","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/consultation-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/consultation-management","isIndex":false,"type":"page","pattern":"^\\/consultation-management\\/?$","segments":[[{"content":"consultation-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/consultation-management.astro","pathname":"/consultation-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/follow-up-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/follow-up-management","isIndex":false,"type":"page","pattern":"^\\/follow-up-management\\/?$","segments":[[{"content":"follow-up-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/follow-up-management.astro","pathname":"/follow-up-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/inventory-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/inventory-management","isIndex":false,"type":"page","pattern":"^\\/inventory-management\\/?$","segments":[[{"content":"inventory-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inventory-management.astro","pathname":"/inventory-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/medical-attachments/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/medical-attachments","isIndex":false,"type":"page","pattern":"^\\/medical-attachments\\/?$","segments":[[{"content":"medical-attachments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/medical-attachments.astro","pathname":"/medical-attachments","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/medical-procedures/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/medical-procedures","isIndex":false,"type":"page","pattern":"^\\/medical-procedures\\/?$","segments":[[{"content":"medical-procedures","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/medical-procedures.astro","pathname":"/medical-procedures","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/multi-tenant/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/multi-tenant","isIndex":false,"type":"page","pattern":"^\\/multi-tenant\\/?$","segments":[[{"content":"multi-tenant","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/multi-tenant.astro","pathname":"/multi-tenant","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/patient-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/patient-management","isIndex":false,"type":"page","pattern":"^\\/patient-management\\/?$","segments":[[{"content":"patient-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/patient-management.astro","pathname":"/patient-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/prescription-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/prescription-management","isIndex":false,"type":"page","pattern":"^\\/prescription-management\\/?$","segments":[[{"content":"prescription-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/prescription-management.astro","pathname":"/prescription-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/user-staff-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/user-staff-management","isIndex":false,"type":"page","pattern":"^\\/user-staff-management\\/?$","segments":[[{"content":"user-staff-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/user-staff-management.astro","pathname":"/user-staff-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/vitals-management/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/vitals-management","isIndex":false,"type":"page","pattern":"^\\/vitals-management\\/?$","segments":[[{"content":"vitals-management","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vitals-management.astro","pathname":"/vitals-management","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/sujaykumar/Downloads/astro-project/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/appointment-management.BL7cYafP.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/sujaykumar/Downloads/astro-project/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/appointment-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/batch-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/billing-invoicing.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/book-demo.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/cloud-security.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/consultation-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/follow-up-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/inventory-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/medical-attachments.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/medical-procedures.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/multi-tenant.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/patient-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/prescription-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/user-staff-management.astro",{"propagation":"none","containsHead":true}],["/Users/sujaykumar/Downloads/astro-project/src/pages/vitals-management.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/appointment-management@_@astro":"pages/appointment-management.astro.mjs","\u0000@astro-page:src/pages/batch-management@_@astro":"pages/batch-management.astro.mjs","\u0000@astro-page:src/pages/billing-invoicing@_@astro":"pages/billing-invoicing.astro.mjs","\u0000@astro-page:src/pages/book-demo@_@astro":"pages/book-demo.astro.mjs","\u0000@astro-page:src/pages/cloud-security@_@astro":"pages/cloud-security.astro.mjs","\u0000@astro-page:src/pages/consultation-management@_@astro":"pages/consultation-management.astro.mjs","\u0000@astro-page:src/pages/follow-up-management@_@astro":"pages/follow-up-management.astro.mjs","\u0000@astro-page:src/pages/inventory-management@_@astro":"pages/inventory-management.astro.mjs","\u0000@astro-page:src/pages/medical-attachments@_@astro":"pages/medical-attachments.astro.mjs","\u0000@astro-page:src/pages/medical-procedures@_@astro":"pages/medical-procedures.astro.mjs","\u0000@astro-page:src/pages/multi-tenant@_@astro":"pages/multi-tenant.astro.mjs","\u0000@astro-page:src/pages/patient-management@_@astro":"pages/patient-management.astro.mjs","\u0000@astro-page:src/pages/prescription-management@_@astro":"pages/prescription-management.astro.mjs","\u0000@astro-page:src/pages/user-staff-management@_@astro":"pages/user-staff-management.astro.mjs","\u0000@astro-page:src/pages/vitals-management@_@astro":"pages/vitals-management.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CxSHD508.mjs","/Users/sujaykumar/Downloads/astro-project/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BQ0wYeGw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/sujaykumar/Downloads/astro-project/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"features-dropdown\");document.getElementById(\"features-btn\");const t=document.getElementById(\"features-menu\"),s=document.getElementById(\"features-chevron\");e&&t&&(e.addEventListener(\"mouseenter\",()=>{t.classList.remove(\"hidden\"),s?.classList.add(\"rotate-180\")}),e.addEventListener(\"mouseleave\",()=>{t.classList.add(\"hidden\"),s?.classList.remove(\"rotate-180\")}));const d=document.getElementById(\"mobile-menu-btn\"),o=document.getElementById(\"mobile-menu\"),c=document.getElementById(\"icon-open\"),i=document.getElementById(\"icon-close\");d?.addEventListener(\"click\",()=>{const n=o?.classList.contains(\"hidden\");o?.classList.toggle(\"hidden\"),c?.classList.toggle(\"hidden\",!n),i?.classList.toggle(\"hidden\",n)});const l=document.getElementById(\"mobile-features-btn\"),m=document.getElementById(\"mobile-features-menu\"),a=document.getElementById(\"mobile-features-chevron\");l?.addEventListener(\"click\",()=>{m?.classList.toggle(\"hidden\"),a?.classList.toggle(\"rotate-180\")});"]],"assets":["/file:///Users/sujaykumar/Downloads/astro-project/dist/404.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/appointment-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/batch-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/billing-invoicing/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/book-demo/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/cloud-security/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/consultation-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/follow-up-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/inventory-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/medical-attachments/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/medical-procedures/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/multi-tenant/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/patient-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/prescription-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/user-staff-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/vitals-management/index.html","/file:///Users/sujaykumar/Downloads/astro-project/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"9ASn948FLSzC4wNikwKp5ZgO0676LU0o6+YjIbW/QTg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
