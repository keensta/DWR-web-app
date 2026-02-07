'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a3e16edaacaccd19d073925fa1d8698b",
"assets/AssetManifest.bin.json": "7dddb4e826a791c4e55850841903882f",
"assets/assets/images/backgroundrp.jpg": "a95d88ce10e8946dc0f3d51ccdd66419",
"assets/assets/images/backgroundrp.png": "b942afa7eb9d6d5e1f1fef2a3be41dc8",
"assets/assets/images/dashboardscreen.jpg": "70b8d55d36439ec0c62ce45a4472a4a3",
"assets/assets/images/DWR_Black_WING.png": "7eff96cb113d3695d1c55bd7eb7e5fc0",
"assets/assets/images/DWR_Emblem_Black.png": "2b7f92429d0a7a45531deef9f7441252",
"assets/assets/images/DWR_Emblem_white.png": "4f45f5d51bdf42a6503a603863530895",
"assets/assets/images/DWR_Primary_Logo.png": "ceaf8583da52c19506fe82db7cb10ec3",
"assets/assets/images/DWR_Primary_Logo_Black.png": "3c98b370f0f58d2589be9511b34015b3",
"assets/assets/images/DWR_WING.png": "7cbe5f2839c17ece50ca2a08941fb0b5",
"assets/assets/images/DW_Racing.png": "c98ece990aa890d53e64d8234eff069f",
"assets/assets/images/DW_Racing_Short_Black.png": "af60bdf0f3f026462c73541f2c6a7fe2",
"assets/assets/images/DW_Racing_Short_White.png": "c7e3f4fc2ad058e2a03cf179aaa4f9ce",
"assets/assets/images/eventsscreen.jpg": "7e00c29576c16ba1c35001828cb173b4",
"assets/assets/images/loginscreen2026.png": "f71a27852c3e7ad9c953d58e0f393985",
"assets/assets/images/test.png": "6d0424812e9c928ea016309fd9edc94b",
"assets/assets/images/test2.png": "c7abf1368ec8698c499f1c7b4156cc90",
"assets/assets/images/userpage.png": "799ac7314d04cf41463dd2df94577fac",
"assets/assets/logos/DWR_Primary_Logo_White.png": "d51a0f91396bb1cc37e5a9ec73546210",
"assets/assets/logos/DWR_Wing.png": "7cbe5f2839c17ece50ca2a08941fb0b5",
"assets/FontManifest.json": "40b12a256d61a8e4ce901924907e6fcf",
"assets/fonts/MaterialIcons-Regular.otf": "2b63e94070f1358c7879f22c45f80cd9",
"assets/NOTICES": "9dd09a24862e77aa4a3e44fcd3c2e827",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "3832d8f75ae3ed53174cb5aa7e8d68f1",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "d56ba98ca23492e072fbb35c3915f594",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "f89319d201d70361f7068e5794762888",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "a8eb30cbffa7cecbe869b43017dd8c77",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "b11ab4e15408aba3e6283c64062a6186",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "54a0d7ac1c09aa367c76a7053de9e8a3",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "84e41fc2e01716302b54aef997166d6f",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/shadcn_ui/fonts/GeistMono-Black.otf": "d72857791f93bbf88629ab9601ebfa14",
"assets/packages/shadcn_ui/fonts/GeistMono-Bold.otf": "fce632a1c87f36e92fb23ae5618176ce",
"assets/packages/shadcn_ui/fonts/GeistMono-Light.otf": "92c6dfb1c2854b6b0fd3f63ab5af9b7a",
"assets/packages/shadcn_ui/fonts/GeistMono-Medium.otf": "b1f17a06e50fba3f1e9695c2a8ae0783",
"assets/packages/shadcn_ui/fonts/GeistMono-Regular.otf": "42af0dfdb5e9e272e7ac28868b5b99fb",
"assets/packages/shadcn_ui/fonts/GeistMono-SemiBold.otf": "02036797116901c5db4a3a629561e588",
"assets/packages/shadcn_ui/fonts/GeistMono-Thin.otf": "cbf62a8e76578e03404b0314787d9477",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraBlack.otf": "cfad4eb45ce5dff853a6c84c8a7d441b",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraLight.otf": "45ea4a4ba1034f7fa081c8b7ee958734",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "e231ac4a5e32297d70b7a9439ff193e2",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8b48cb30ab9770a82cfeb12828b83f8c",
"icons/Icon-192.png": "27f4bb74bb8bac013c96ad27b9ed9ea7",
"icons/Icon-512.png": "c528a4f56b6ef38b253e17226a7b65ab",
"icons/Icon-maskable-192.png": "27f4bb74bb8bac013c96ad27b9ed9ea7",
"icons/Icon-maskable-512.png": "c528a4f56b6ef38b253e17226a7b65ab",
"index.html": "0c2a126b151379ce6249f64e4ad61991",
"/": "0c2a126b151379ce6249f64e4ad61991",
"main.dart.js": "4eb46e6d64bddf9e2b35fca20f07faec",
"manifest.json": "03f00c633543def41cf1db38c88f87f7",
"version.json": "dcc25f35dbee804994d001f896726abb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
