'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "13e9911ee52a49f282bcb650353fe63f",
"assets/assets/address.png": "34ffaa8db885f961becad69bd7692e92",
"assets/assets/amex.png": "a7b74fd738ff308384f2c73c8b842dd8",
"assets/assets/banner.png": "57c6eed385bd96809c68d67cc5a32246",
"assets/assets/banners.png": "5f246ce04ab227ee1b7b6c6e5535bcb7",
"assets/assets/card.png": "3e81c17363288e7b2c8636886b1d0fdb",
"assets/assets/cardcoupon.png": "2584c87b37e9127b0ade19154824f0da",
"assets/assets/cart.png": "5ad19da9ba55373b3d9b18766a2b624e",
"assets/assets/check.png": "baec24a0b18a2c7d5beb93a67a5ac361",
"assets/assets/contactus.png": "8efef13b260d8f72d870212c1ddd2593",
"assets/assets/coupon.png": "73db85412c1b9c0abe2008b5df4e69f2",
"assets/assets/couponcard.png": "7a3f57200ff29889fd2af56cf0c7a1b1",
"assets/assets/creditcard.png": "da1a97d5fb43664b286b085257b9eb1e",
"assets/assets/cvv.png": "7c9f6395adccac9cee342471866b4cb3",
"assets/assets/elo.png": "007f7e434dea90657ae2d3b815cc6e93",
"assets/assets/email.png": "bf9e365757b676333c667d33fae4eac7",
"assets/assets/exit.png": "7a64feb5d89a798cf756fac42a5470f5",
"assets/assets/facebook.png": "08efdd4baa5ab289054e3a41be092378",
"assets/assets/faq.png": "604b3a3fac623fe8a86bb9a2c8e1ba10",
"assets/assets/google.png": "2abfef18e635a70e058ac7385e2196e5",
"assets/assets/hipercard.png": "7ca6cfdb27fc3754d2ca01aaad0ae6b1",
"assets/assets/home.png": "2412bec588a245c197b3fb5646df9717",
"assets/assets/iconcamera.png": "1f15e76293a528804733e6ef80b22c30",
"assets/assets/iconimage.png": "23995ea4e322c9a472feb0cade50a92b",
"assets/assets/lanche.jpg": "00bb6181e4ce2390f77f0c092d972743",
"assets/assets/location.png": "c23526259af8de192ec53bb919ccce0f",
"assets/assets/logo.png": "ee688764ece8941e651a85006062f4de",
"assets/assets/mastercard.png": "bb7411ffc9871daff9a556f680f4d672",
"assets/assets/menu.png": "ac96ca4c3bdf52b7979e0ca5a6025ee2",
"assets/assets/notification.png": "3550749a7aba422388c6aa8df4347284",
"assets/assets/password.png": "323d215fff3f412f4b092bc1c825c553",
"assets/assets/perfil.png": "317417a92d338f11717c124a62fe2225",
"assets/assets/person.png": "81ee9398763d17b3403ab1e2faeaf15e",
"assets/assets/phone.png": "4f46a4c1a6a06173f420d28b8c5c59b6",
"assets/assets/requests.png": "8e2c2f130960caaccb5224900a3ece42",
"assets/assets/shop.png": "6eb61a222071ce03ad3a40a7eb2c9771",
"assets/assets/term.png": "20d3893dea4df53eb3d6284cbe12d66b",
"assets/assets/ticketproduct.png": "0bfcd578d62580c1d8b44dacdd61403a",
"assets/assets/visa.png": "699b57b64366b934794509bad5ec800e",
"assets/assets/voucher.png": "6ae5a433bd29d52fe1b50f89ece12dfe",
"assets/assets/whatsapp.png": "66d907f3b5e0ad8fb1f7e49a58f27866",
"assets/assets/zuuki.png": "99b30398eed70add6c74503e5e9110e6",
"assets/FontManifest.json": "b74e508913dfb159a95eb0442757ca35",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Poppins-Black.ttf": "8971d1710cbf4c91bca1b460aec154d7",
"assets/fonts/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/fonts/Poppins-ExtraBold.ttf": "0e6906b2b7be194f68b8f7b7252c4f6c",
"assets/fonts/Poppins-ExtraLight.ttf": "f99f9d50a569dbcf72e3084ef1a43208",
"assets/fonts/Poppins-Light.ttf": "3352653dedd571bbc490c8be132b38cd",
"assets/fonts/Poppins-Medium.ttf": "a4e11dda40531debd374e4c8b1dcc7f4",
"assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/fonts/Poppins-SemiBold.ttf": "e63b93dfac2600782654e2b87910d681",
"assets/fonts/Poppins-Thin.ttf": "735aa7d8e35b63068b9113ea2545f0c3",
"assets/NOTICES": "728301627e1331cfec067d4deb75d6f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c5c62315e3958e632a5ee78a4b062e1d",
"/": "c5c62315e3958e632a5ee78a4b062e1d",
"main.dart.js": "f55cccba241d3d52c147477b9b55006b",
"manifest.json": "7114ea44764a5e85a5ac5ae8ddd59ed5",
"version.json": "60a05867880d2d418285ad802b3ec7d7"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
