'use strict';

const cacheName = 'hello-pwa';
const filesToCache = [
  '/~suvimyn/2025/jakso1/js-pwa/Hello-PWA/',
  '/~suvimyn/2025/jakso1/js-pwa/Hello-PWA/index.html',
  '/~suvimyn/2025/jakso1/js-pwa/Hello-PWA/css/style.css',
  '/~suvimyn/2025/jakso1/js-pwa/Hello-PWA/js/main.js',
  '/~suvimyn/2025/jakso1/js-pwa/Hello-PWA/images/talvinen.jpg',
  '',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        return cache.addAll(filesToCache);
      } catch (e) {
        console.log(e.message);
      }
    })()
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', (event) => {
  console.log('ServiceWorker Fetch', event.request.url);
  event.respondWith(
    (async () => {
      try {
        const response = await caches.match(event.request);
        return response || fetch(event.request);
      } catch (e) {
        console.log(e.message);
      }
    })()
  );
});
