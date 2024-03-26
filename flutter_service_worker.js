'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app-ads.txt": "a41a434b76295669d1b16f589ea0e0f5",
"assets/AssetManifest.bin": "f85d2f6a5450039413bd75e041f336b7",
"assets/AssetManifest.bin.json": "8ec8b3c2c3b4e3612b45b22a64341a5b",
"assets/AssetManifest.json": "01d0c960e55017ff266295e1db3bd6f7",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/blakloopslogo.png": "5cffad2a01b723193acfabc234e16075",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/enlightened.png": "e789268c753f47cbb264954b67211369",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/frontrunner.png": "8b40c67f7771bdb03e12d747a75ccb23",
"assets/assets/github.png": "10e23ee28ee608d04400db5f2c6c0945",
"assets/assets/header_banner.png": "474395feb2616d61352e1680a48a76f3",
"assets/assets/instagram.png": "8c91c23a562f41c56fad770aa56812ad",
"assets/assets/isrc_generator_logo.png": "310255b3609e614b2a29a86789c088ec",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/logo_white_500.png": "835778cf4df1da37af6f676551f35a35",
"assets/assets/msp_logo.png": "988f21d022705c78975b363dec1d8682",
"assets/assets/sgorigins.png": "c53dd5dbaa00da829092fa9adedb6305",
"assets/assets/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/us_congress_logo.png": "43d2203103e7f015b3f7c7972fbe24e7",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/wanted_logo.png": "b1cfd21477a40aba9ee450b3101772ab",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c45296792dea588a5321e9678ae79460",
"assets/NOTICES": "b96464b62070bf937559e4062e759154",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"firebase-messaging-sw.js": "7735c423cbd0cd7274ea61921b27472c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "d1d307053ef2337b5eb9eacd35e91ff2",
"icons/android-chrome-512x512.png": "174fd11c574ec789437981145431e35e",
"icons/android-icon-144x144.png": "5c54e65975f2efb38aaf39ab450310c5",
"icons/android-icon-192x192.png": "38045b885be30ad4b01e7272a2b512f8",
"icons/android-icon-36x36.png": "fbed4ee276778dbd6e7b04feb2c323cc",
"icons/android-icon-48x48.png": "2c256f13020baea223a56fad94037540",
"icons/android-icon-72x72.png": "77e86b5fc9b23275f31c280ea5ebc620",
"icons/android-icon-96x96.png": "24f29cccaef8fc2a30deb68b6aaea42d",
"icons/apple-icon-114x114.png": "e09393e53343e07bc6fc024baa3b2f5d",
"icons/apple-icon-120x120.png": "cae3387c702205e310cbf67cbc07f5f2",
"icons/apple-icon-144x144.png": "5c54e65975f2efb38aaf39ab450310c5",
"icons/apple-icon-152x152.png": "bfe0cc0b9984e69309378b65eebed37e",
"icons/apple-icon-180x180.png": "f4b28893b59ba4f887c49153dc9a84c2",
"icons/apple-icon-57x57.png": "701b2d617d9de1a5b90dc724855fa2c4",
"icons/apple-icon-60x60.png": "c6e74885449ea70b15258fcb5ebe3768",
"icons/apple-icon-72x72.png": "77e86b5fc9b23275f31c280ea5ebc620",
"icons/apple-icon-76x76.png": "11002967782a574feeea45ed1abb4218",
"icons/apple-icon-precomposed.png": "313a8f8474383918080ae5c727ab8417",
"icons/apple-icon.png": "313a8f8474383918080ae5c727ab8417",
"icons/apple-touch-icon.png": "db297e25e121fcbc3764b992e997b8eb",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "1ca562066cb35b1a78c9384114ff861a",
"icons/favicon-32x32.png": "8df30c0a8bf9417502a59932164ade0e",
"icons/favicon-96x96.png": "24f29cccaef8fc2a30deb68b6aaea42d",
"icons/favicon.ico": "596142df607bb362cb70b87a73873acb",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "5c54e65975f2efb38aaf39ab450310c5",
"icons/ms-icon-150x150.png": "b03e393f5eece342ecf2b54991b269e9",
"icons/ms-icon-310x310.png": "b42b114b2fabb40f0213e4a6b62df80e",
"icons/ms-icon-70x70.png": "11d45008d0c4808ed03758e2b42a48d2",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"images/geareyewhite-72-500sq.png": "835778cf4df1da37af6f676551f35a35",
"index.html": "f09ae545f6ba1b4a7c07001885e26fd2",
"/": "f09ae545f6ba1b4a7c07001885e26fd2",
"main.dart.js": "5cf8044c951df36cb635dafb8cfcd8d5",
"manifest.json": "1504d28bfc5f9442705f7e95a1a81702",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"styles.css": "9891ef353edf12299644d6ccf2b8d1dc",
"version.json": "3c9f3c46d83470654e3121ebc9993be6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
