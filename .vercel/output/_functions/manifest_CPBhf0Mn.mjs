import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_DiIDCIrw.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_Cj-LMy9-.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_K-Z_wcAH.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/sgpbusiness/sgpBusinessDirectory/","cacheDir":"file:///C:/sgpbusiness/sgpBusinessDirectory/node_modules/.astro/","outDir":"file:///C:/sgpbusiness/sgpBusinessDirectory/dist/","srcDir":"file:///C:/sgpbusiness/sgpBusinessDirectory/src/","publicDir":"file:///C:/sgpbusiness/sgpBusinessDirectory/public/","buildClientDir":"file:///C:/sgpbusiness/sgpBusinessDirectory/dist/client/","buildServerDir":"file:///C:/sgpbusiness/sgpBusinessDirectory/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/companies","isIndex":true,"type":"page","pattern":"^\\/companies\\/?$","segments":[[{"content":"companies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/companies/index.astro","pathname":"/companies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/news","isIndex":true,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news/index.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/registration-types/[slug]","isIndex":false,"type":"page","pattern":"^\\/registration-types\\/([^/]+?)\\/?$","segments":[[{"content":"registration-types","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/registration-types/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/registration-types","isIndex":true,"type":"page","pattern":"^\\/registration-types\\/?$","segments":[[{"content":"registration-types","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/registration-types/index.astro","pathname":"/registration-types","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"}],"routeData":{"route":"/search/[...query]","isIndex":false,"type":"page","pattern":"^\\/search(?:\\/(.*?))?\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}],[{"content":"...query","dynamic":true,"spread":true}]],"params":["...query"],"component":"src/pages/search/[...query].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.js","pathname":"/sitemap.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dyq19MkF.css"},{"type":"inline","content":".ad-container[data-astro-cid-fgwukgf6]{margin:0 auto;overflow:hidden;transition:height .3s ease-in-out}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://sg-business.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/sitemap.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/sitemap.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/companies/[...page].astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/companies/[slug].astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/companies/index.astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/news/index.astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/registration-types/[slug].astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/registration-types/index.astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/search/[...query].astro",{"propagation":"none","containsHead":true}],["C:/sgpbusiness/sgpBusinessDirectory/src/pages/search/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/companies/index@_@astro":"pages/companies.astro.mjs","\u0000@astro-page:src/pages/companies/[...page]@_@astro":"pages/companies/_---page_.astro.mjs","\u0000@astro-page:src/pages/news/index@_@astro":"pages/news.astro.mjs","\u0000@astro-page:src/pages/registration-types/[slug]@_@astro":"pages/registration-types/_slug_.astro.mjs","\u0000@astro-page:src/pages/registration-types/index@_@astro":"pages/registration-types.astro.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/search/[...query]@_@astro":"pages/search/_---query_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/companies/[slug]@_@astro":"pages/companies/_slug_.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@js":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/sgpbusiness/sgpBusinessDirectory/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BGmgCDdN.mjs","\u0000@astrojs-manifest":"manifest_CPBhf0Mn.mjs","C:/sgpbusiness/sgpBusinessDirectory/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BXOCHn4U.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/sgpbusiness/sgpBusinessDirectory/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\"),n=e?.querySelectorAll(\"svg\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\"),n?.forEach(o=>{o.classList.toggle(\"hidden\")})})});"]],"assets":["/_astro/about.Dyq19MkF.css","/favicon.svg","/robots.txt","/search/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jelSl7p8s9dfvFbAhAnhgZST4UAdDe/TdhaayTod+mU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
