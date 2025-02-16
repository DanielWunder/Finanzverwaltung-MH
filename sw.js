const version = 2;
const staticName = `cache_${version}`;

let assets = ['/', '/index.html', '/index.css', '/index.js', 'categories.json'];

self.addEventListener("install", (e) => {
    self.skipWaiting();
    e.waitUntil(caches.open(staticName).then(cache => {
        cache.addAll(assets);
    }));
});

self.addEventListener("activate", (e) => {
    clients.claim();
    e.waitUntil(caches.keys().then((keys) => {
        return Promise.all(
            keys.filter(key => key != staticName).map(key => {caches.delete(key); console.log(`deleted ${key}`)})
        );
    }))
});

self.addEventListener("fetch", (e) => {
    if(!self.serviceWorker.scriptURL.includes('localhost')) {
        e.respondWith(caches.match(e.request).then(cacheResult => {
            return cacheResult || fetch(e.request);
        }));
    }
});