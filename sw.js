// service-worker.js (register this as a service worker)
self.addEventListener('install', event => event.waitUntil(onInstall(event)));
self.addEventListener('activate', event => event.waitUntil(onActivate(event)));
self.addEventListener('fetch', () => { });

async function onInstall(event) {
    console.info('Service worker: Install');
    // Here we are telling the service worker to activate right away when an update is pickedup.
    // In our main JavaScript this will trigger 'controllerchange', which we can use to trigger an page reload.
    self.skipWaiting();
}

async function onActivate(event) {
    console.info('Service worker: Activate');
}

workbox.precaching.precacheAndRoute([
  {
    "url": "index.css",
    "revision": "d3072ab3693c185313018e404e07d914"
  },
  {
    "url": "index.html",
    "revision": "a40871df1e3a91dd14b9e21363d4cc71"
  },
  {
    "url": "index.js",
    "revision": "6b73f45a2506a26e00e425688eaa6514"
  }
]);