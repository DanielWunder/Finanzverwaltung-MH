if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-c9c1d482"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"categories.js",revision:"a7a788192193a2d611386a3c215607b6"},{url:"index.css",revision:"7d1182e69cb4ba1bdf326c5b85cc578b"},{url:"index.html",revision:"f254e643d5435291012b116554133e09"},{url:"index.js",revision:"b8eba9e8d8dac5d0b6e080fca5964726"},{url:"manifest.json",revision:"b94f50f24f3d1b7111608ff77e601945"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});