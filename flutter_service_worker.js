'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d8191911b81ee32de399733a9b99dec2",
".git/config": "22af4684a9a1b9afbe83bf4d11c771ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e805a44cdefd32c43d515f8bf7f7b702",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3747522ded33de2c3f7cd58719764e4e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96c1f5c2469a4261dee3065fe6d6681d",
".git/logs/refs/heads/main": "e16fc4385ddd492a53d292fa01566bb4",
".git/logs/refs/remotes/origin/main": "2554486cec632b713fe71cb277c419cb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/10/091685a02683f9593d4344a7087b581a1265f2": "b0e115d0c44996c33543a92709de8a43",
".git/objects/11/c51b2acca19141d261f31c8c798965ca6cd475": "e712edc3ff1c93126cb2ff22b6ae09d2",
".git/objects/14/113ea65d54320708cb1b05b9711c1f5c84f8bc": "8201f2e7295041ddf3ff299cdb9ae017",
".git/objects/1a/96522915a6a75de1228eea9fd4cbbe0eb7cb35": "2c0073b19665c014dd2e91c5db7ee4d8",
".git/objects/1a/9bd23d71f6b7479b2c3d95b55828869afba883": "f1f873ae54aa2134340c29f1f20fd327",
".git/objects/1d/54a7a6cd85f98ee73454cb6b16983e7bda57d7": "2ae4de00e0ca1cbc4a69d4ab54aefe17",
".git/objects/1f/499b4579bd64dd7508415ac070412e77d0764c": "46d49216c2c23863f8ec9ba0f3fff97a",
".git/objects/22/6e1f73f6c85071f01b9166167dadd3d38670bc": "7b3c94f7f0f2747cc754d38f4d177454",
".git/objects/23/629551f1afcea09ddad74aa477852ebc701086": "0e84d787dcae48d785d564c568e9a8ba",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/127ccbcb4ec4b34af212f61632cd19f5257eee": "ea08424e537428abf03e981bcbcf43ea",
".git/objects/36/252e7c11e5f1ad6884b38f324aa372da0b3d5a": "b60f3830d02c19381973746ee9a01d21",
".git/objects/37/af4dde392d68f4c42d2c18060ce29fe7c92d22": "a69bfcf3201a0db57de9a88447001438",
".git/objects/40/295f7ae22c5193008eb1d7af95c4a0af7d18a3": "a2521e9faca3406c18d26184e6276c27",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/a9e849fc018e079099e8e1b8cdec01f1e1c755": "71ef99c18dbefdd9839cff3513afdf77",
".git/objects/52/f103330830f0992ab8508f655234f7a81f1518": "48d345e0d8edafbb5e6b6202d5e95c71",
".git/objects/6a/4c37972dd0d37ae4aafdf35bc74e54f041b0df": "220a2c005551632f924a5fe8eb1ac930",
".git/objects/6b/58e2fa169a60e6d02bb96ad47f9de47861e39c": "d8e36b556e44744eda3a1941bdec09ca",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/c3198991bf4aebaea2b43d517fa314101a1a38": "99eef85639a3ecbf702e0c3a63d9c313",
".git/objects/7f/3794f18da0fcc7938fd0d1a2ca62b7a625b373": "2f1dc1875f54d681e804f1d1a6753efb",
".git/objects/87/e18e2cf412f3cedde3ff5b424e90e37cd6a7fd": "c6b4dc711f81308f0afa79447a83c0bf",
".git/objects/88/1314df872ff82f721f4d5594d2043491c51148": "110b220d084452d488608bdb40743b60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/21043e48f56e2eb259be422468628d6ad4850c": "cb4c203d9d8e0a2bb0e3fed2a2f345d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/903f5d0ab70ff730970bf3e9532468b86e4737": "f877f6bd2e6402b495cf3a546f9a7993",
".git/objects/af/59dd1679fca920dcd4cd720c6315add108ca11": "9d7314991cd6d92b0a172ca9a32c7fb8",
".git/objects/b6/6bd9550f09c07d370e6d9b08b86f29adf8710f": "6ac9ac0f934af2acae86f1a33aaef8c4",
".git/objects/b6/f883ba593fb1a9c30873efbe7ab2bca260768f": "a49a09cce0cdf78177165d6d00a084f5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/8f6bb8876ec74e4a57b0c18c65bf24f3e1db8e": "a4fb6eb7ecda0a476d55b9aa24fd3db0",
".git/objects/c8/ec215ebaf433dddb2b58dfd62119a3bf0fedfe": "fd24866effb025032ec669a4f044c163",
".git/objects/ca/7b61a81458daf8360edb8b9634055d9446e9f7": "f62544415090966b8ca0ce8db43b18f4",
".git/objects/cc/7963ead8697bc412f58134d6ba968ceb2248d2": "47da0c17afd136694c883b768d342c43",
".git/objects/cd/f368a875d2bfd9215c86e1aff108a20a8b42be": "535812d75473a82f61d7bbf766896b75",
".git/objects/d2/00cfce39d6496a73ec52d39319a99d1be42fa7": "c8c8bc93d97a7758e1a704c976cd34fb",
".git/objects/d5/66b629b8d6fe4963f101c0eec962a514c97eec": "83188f670ac6bc0d6b64b6130071b2aa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/817e93806e5f1d7479efc48542465a248be349": "84bdf0e71a6d3d29832cf7ba09e1b6ee",
".git/objects/e4/530d42528c96e81caab663d7fed887025ad253": "8210f7b045b1c496d7122441802b9254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/b3ed5e1bc4762d381874b107b71c2024ffbab4": "0812c0b1021386953490b27c0c669be5",
".git/objects/ea/b9fa96e148d6d0e0f4e606c1e4f691c745166e": "c4cfe0602393dd4c96cbecb322846d1a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b58641ead1bee7bb39c6b840977d577577eb5a": "f975164b55c996bc7052e755afaa2e89",
".git/objects/fa/dfbdb2b9a7c59040cab99014d6296094f85a5a": "4bd1d1c55b9f3224677dff6329df5251",
".git/objects/fb/7a8f8b0842cf36810acd400971431110a4074e": "7005cbc5832e97055663708d8aa1f55e",
".git/objects/fc/4e373436ba8b2893685b4f50715b8418573323": "3ab139d8dd48586084bb0e4320388406",
".git/objects/fe/e5836c6f5c0afb41d3a773bdb43b012db8e853": "43d1d67f5d3b80dae4f747a3a9275038",
".git/ORIG_HEAD": "ba9e5c5bb37029be2ee6378d1144da70",
".git/refs/heads/main": "ba9e5c5bb37029be2ee6378d1144da70",
".git/refs/remotes/origin/main": "ba9e5c5bb37029be2ee6378d1144da70",
"app-ads.txt": "ecefae8fea8e595524c22c7a28bc2566",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "acaf5aa03db3c7ab35441c36b50917d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "58ba91914c5b67f607751a0909a8190a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5731d53d9605af6b2985704dcd1cde51",
"/": "5731d53d9605af6b2985704dcd1cde51",
"main.dart.js": "768c129a81e0f69428ac0e69667390a2",
"manifest.json": "ab268589b417d667d5c22efacaf3c0a8",
"version.json": "7d122104eff3ae5aef90898788b6bb49"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
