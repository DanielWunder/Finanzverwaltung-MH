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