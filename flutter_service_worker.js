'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5ecdc9b69fa498de06a9408b97f292e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8e4fe317b0de7060b51e3046c00f10dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c011a3f7096878c13e168e47cfd2a490",
".git/logs/refs/heads/main": "e9acf0763e777f8ee6d052f632d45ca1",
".git/logs/refs/remotes/origin/main": "ba34ab2ae57092509db1d0dfb6b862e2",
".git/objects/01/cbe514551737c94c018c36bda5577df3756fa7": "0da928594d376be188d1fca881935fdf",
".git/objects/04/642d2365e4ad5d20fa4e58655394c5a1c12cbf": "ef55e02d031ca4fb6b6fabdc5594e166",
".git/objects/08/15f415b92ef9b376ffd2661a8dce91358dd36f": "50a131ef00d9cd83329e6a4d36c72782",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/a46b1b3b8c10895c305194567d1f4b4b2b59ff": "94b1fe932f560ef91eb659e1faa9c364",
".git/objects/12/b3eb09383dc44c75c5d8b565ee569de14a22b5": "dd8721f6122637f81718238dec52ed06",
".git/objects/1b/2065457c39775e6d840c9b619da8c88c6098f2": "2229ced59bfd4f260e87c8fbc7924d7f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1bb46ad501a60a0ba94d53b51bf0e827c67b12": "32255591d733bcfd817b6c65fe9d61ac",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/28/8ea47a599cae17cd43b79da31377f1d5de2226": "5e31a07ea89be018614c88cdf1b875d6",
".git/objects/2a/a27ad58af1097fdb57d24c169c06b40ec51294": "1c2bffa4f1e38da7bde10810124c20fd",
".git/objects/2c/92c37ccb41f40663b49cae239981e2777f1fa5": "eba33d715109163c67dd982d1c33984f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/37f18e0564808fb4724e4ded948e6c86832597": "9ecb15e7fb83c77646148056f214ff82",
".git/objects/39/2e899eb0f2d3ffb1fef330a957cb8602df6db2": "f8d0315a31c79ad91eb0f0895fa157e9",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/416dd37adea59ea95e9ae58e48455d93974a03": "7569cf8e0028ffcf06c8ad9e392ed46e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/a5c115f48a2fc156dad60f1597b8a422d89c4f": "b41d3b25a6396ffa046565947415f1e1",
".git/objects/43/0dc047f540faba685345cfcfdd531e7c082632": "2112f955c94b38cba63bc0699c14db9f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/56/2596dfa74b9879366343eb4a5626b9360c1710": "500a47755df5de18adad5cf8efa8bd07",
".git/objects/5d/f3b0e046b2897c96bc660c080a2098218a61aa": "54d73437456efc530da6324ae3164f8d",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/64/4b66d3f1445c067f34e8173992f7ef26932199": "5c28933570520ccbc383588f04eddcf5",
".git/objects/65/2ee80c10c7dc21f9ea14c3367e9cfa9391bb5a": "3c6c0b73870ed0fd6c7af8e840a6bbf2",
".git/objects/67/2addcf11f4e92f9208f13bb536357b03a4ff41": "4f855c7127a5a7a4a945f35fa2e1499f",
".git/objects/69/9e13f779cc866a4b257474d1e37f965c95a3d1": "2b7ae796c46db45693cb738f9f5d36da",
".git/objects/69/de4c41c3e6f778569d6e897c80824e9956eb58": "ebff73398713a6ac3e9de6190948d140",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/72/b931092bb4006d4408b34185a397b1cf1e8414": "57eeb48629febc58258238731c5f8c01",
".git/objects/77/644beff4e6236e72445c017202c3001f8d46c5": "e3c3f39ac3634004e1f86b04d63dfbf2",
".git/objects/7a/c6da4d31fe40cc60295028892d568cfd06f87c": "5b56ca209a44223fe3c3300be49c16d6",
".git/objects/82/6213be635cb1f67eb0323cceb820aa415aeced": "7eff27d88a967e66943e3e13d591a6fa",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/89524838f813c9438364b1398527972197b9e5": "ff97ef77450355432f925c89fdcbf276",
".git/objects/96/f088cbe96f4064a8f621931abd7ad1a500d66e": "5c52504e05947ba8c30885e8ea821c2c",
".git/objects/97/c42a57ac6d2cd5922304c3b114c03b163cd1ab": "927ce7c5ae4580ac0c0ac9ec8d801df0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/a03bdb011a8ecf4ed78bf32db630a792542616": "12bc04875c36242a1183091553fa0ed0",
".git/objects/a3/9fc6364537ce1821f2687c2569a88cda0b78de": "a94d5ae950f085681b863918d4b63d76",
".git/objects/b1/0357c6672a56b6ae7e6be898c2453297bbd703": "253d688d3f1e469f7820932fa693bf41",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/03f467c99256c34bb5c03a7f75f2d342ebc0e8": "1eef9347611156439030e74db457f1da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/50765ae85736701e2c7b6cdcde865cbfd9e18a": "cfb8e260a39ad910b367e7df6d0cd4d9",
".git/objects/cb/d7cc21f5cd50c36a2fa09193d2faea671f0069": "f66072309715188b505637bcc4a0fe9f",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f1782321e7a8dc68793674bfcaf8e0b7e81b0a": "b2d862a469dadef9f1560a5566d3c5ca",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/68fcf09f5375145ae250aeb37b81537b45282d": "ed18ecf875757541f5e47e5c0b9fe965",
".git/objects/e6/58e651a8766988ddc06a9f67c58eb17915ada7": "6b25f6bf37a6a40966dc43fa4c249167",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/93237e760a51dd60fc6161ecd76c43fa5829ea": "e7af307239e5985f5889def835db255c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/858dc93e8598ba945bc7fb64f451fdf5dd53fe": "b938f158555d1490fa18fa5b19676643",
".git/objects/f5/90f0b39f6df550d90d12774b290109b0bfabe9": "fa35a66c8140012644d88ce2881aa340",
".git/objects/f7/2b0ed1d5e305d6376d7de66ffe2e03a10a2871": "7f19d9bfee001674042f2340ce9e7f33",
".git/objects/fe/a440b25ed2caa2e7d5dbd91c198fc24937b120": "2df9ab3d597f480b44c1aee80a954fb9",
".git/refs/heads/main": "66f50aa07a337b89ddcc5ba11a4071ed",
".git/refs/remotes/origin/main": "66f50aa07a337b89ddcc5ba11a4071ed",
"assets/AssetManifest.bin": "3abd9dc66933f93f512add1f2ed37702",
"assets/AssetManifest.bin.json": "83c881489db0958f122aca88d7a3c189",
"assets/AssetManifest.json": "2cd08d88d03ac550f3351fe0f34afa7c",
"assets/assets/icons/barOb24.png": "438be935c18b12f8db39137d0c6e912c",
"assets/assets/icons/cure_curve.png": "c19affda76106c186befea4b4c446187",
"assets/assets/icons/everve-no-background.png": "b2da4aff7d3d9ca0a3b1f29ee2e6cffe",
"assets/assets/icons/flitsboek.png": "37a313a4210ad9b9d275e2dc54dbaa1f",
"assets/assets/icons/mesatrade-no-background.png": "d327c46dff55bbbca69deaadeebf5b13",
"assets/assets/icons/proxify-no-background.png": "3f11fb64d7d04c4c75d5db71453dc205",
"assets/assets/icons/quantix.png": "11504172bb55a8308a092c005db04b02",
"assets/assets/icons/ritech_logo.png": "a186ceebbf5870a7e801c6a03157a959",
"assets/assets/images/ambra.png": "6a8f0813a26e3d9145c301c9eb24671c",
"assets/assets/images/efit+.png": "860bb80336554a34f51e5ddaef3544ee",
"assets/assets/images/elina.png": "64a95a4d4890239c9c0eac6f8dbccb40",
"assets/assets/images/mesatrade.png": "5c9c78fb1b52e7be1c8e2451ed062a2a",
"assets/assets/images/mesa_white.png": "d8748586d3fec9ae8b837b19d10bd7c3",
"assets/assets/images/paybyphone.png": "4e424acc60e0384f34f53f31df0a0dea",
"assets/assets/images/profile_image.jpg": "bdd40c3b64906a310bd85eafa9f1eb37",
"assets/assets/images/work-scribble.svg": "b291f29b47b995e780271a331622cead",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ae7b9ab7bdda5a3a5d04d0d1c9d7e05d",
"assets/NOTICES": "1fc45517f808589e82692d96fe74a02f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "a9989c356a88d3bb1f11c710ff2923de",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a6616ca0a54a4e794e4a7826b9c4ec0e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1003d33aac8e8e106c6a360037fe9f9b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5c72ae3e69c775df2c4a1c289e60357",
"/": "f5c72ae3e69c775df2c4a1c289e60357",
"main.dart.js": "324abc763ceccac96bc023d19c65a02a",
"manifest.json": "87fc2a1c22c9eb98948df1674a445bf2",
"version.json": "30e0cc153fc55086fd3c58276e34c690"};
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
