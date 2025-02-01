if (!self.define) {
    let e, i = {};
    const r = (r, s) => (r = new URL(r + ".js", s).href, i[r] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = r, e.onload = i, document.head.appendChild(e)
        } else e = r, importScripts(r), i()
    })).then((() => {
        let e = i[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e
    })));
    self.define = (s, t) => {
        const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[n]) return;
        let o = {};
        const c = e => r(e, n),
            d = {
                module: {
                    uri: n
                },
                exports: o,
                require: c
            };
        i[n] = Promise.all(s.map((e => d[e] || c(e)))).then((e => (t(...e), o)))
    }
}
define(["./workbox-c9c1d482"], (function(e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "index.css",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    }, {
        url: "index.html",
        revision: "3874571a138eb4152675e4c0cb17037b"
    }, {
        url: "index.js",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=sw.js.map