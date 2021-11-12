const cacheName = "app-" + "b4c6ad72979b5e96ffbd80bfee3949a18f94058c";

self.addEventListener("install", event => {
  console.log("installing app worker b4c6ad72979b5e96ffbd80bfee3949a18f94058c");

  event.waitUntil(
    caches.open(cacheName).
      then(cache => {
        return cache.addAll([
          "/ra-vn.github.io",
          "/ra-vn.github.io/app.css",
          "/ra-vn.github.io/app.js",
          "/ra-vn.github.io/manifest.webmanifest",
          "/ra-vn.github.io/wasm_exec.js",
          "/ra-vn.github.io/web/app.wasm",
          "https://storage.googleapis.com/murlok-github/icon-192.png",
          "https://storage.googleapis.com/murlok-github/icon-512.png",
          
        ]);
      }).
      then(() => {
        self.skipWaiting();
      })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  console.log("app worker b4c6ad72979b5e96ffbd80bfee3949a18f94058c is activated");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
