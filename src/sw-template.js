if (typeof importScripts === 'function') {
  const twoHours = 2 * 60 * 60 * 1000;

  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
  if (workbox) {
    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(
      /\.css$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 10,
            maxAgeSeconds: twoHours
          })
        ]
      })
    );

    workbox.routing.registerRoute(
      /\.(?:png|jpg|jpeg|svg|gif)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'image-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
            maxAgeSeconds: twoHours
          })
        ]
      })
    );

    addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );
    });

    workbox.routing.registerRoute(
      /\.js$/,
      new workbox.strategies.NetworkFirst({
        cacheName: 'js-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
            maxAgeSeconds: twoHours
          })
        ]
      })
    );

    workbox.routing.registerRoute(
      /\.json$/,
      new workbox.strategies.NetworkFirst({
        cacheName: 'json-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
            maxAgeSeconds: twoHours
          })
        ]
      })
    );

    workbox.routing.registerRoute(
      /\.ico$/,
      new workbox.strategies.NetworkFirst({
        cacheName: 'ico-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
            maxAgeSeconds: twoHours
          })
        ]
      })
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
