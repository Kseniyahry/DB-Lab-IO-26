/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "f1340ede82c7c482c3e9a051f9250938"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.01a5fa24.css",
    "revision": "dea83b856e650478c6a698516fe6eebf"
  },
  {
    "url": "assets/img/MySQL.8db3eeeb.png",
    "revision": "8db3eeebdfb320985ce9aec2fee77203"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9a83e18f.js",
    "revision": "5e19707585a762db252e176c8cbcef0a"
  },
  {
    "url": "assets/js/11.6d3cbd91.js",
    "revision": "e963426246302b67de6ab54259eb47f8"
  },
  {
    "url": "assets/js/12.5f2bd97f.js",
    "revision": "43fe67513681adf4a8e131f9019fa98f"
  },
  {
    "url": "assets/js/13.c1b24d3f.js",
    "revision": "6b672a2175e5b73335928443252f6132"
  },
  {
    "url": "assets/js/14.f7a5257c.js",
    "revision": "43d1ef5f7d67316b46e2b3a69fc9e23d"
  },
  {
    "url": "assets/js/15.d3a72f6c.js",
    "revision": "7e212e286d760ec0758d471f6a91ba5f"
  },
  {
    "url": "assets/js/16.e3cb5e88.js",
    "revision": "66a437b468767b753caca4bb7b4df107"
  },
  {
    "url": "assets/js/17.08be34df.js",
    "revision": "77486d6a90ca4b6efc6b568b5618542b"
  },
  {
    "url": "assets/js/18.ddd256ab.js",
    "revision": "fc1dacae0609bd02505b77969d42fd10"
  },
  {
    "url": "assets/js/19.b9897811.js",
    "revision": "e57ae553036f3704223263f53fbfefb9"
  },
  {
    "url": "assets/js/2.d5f2bfb4.js",
    "revision": "b53159e61f8408e43ba49014d2831d55"
  },
  {
    "url": "assets/js/20.48439e9b.js",
    "revision": "643ec05836a881e09ba960a7d987e4d3"
  },
  {
    "url": "assets/js/21.9d3d049c.js",
    "revision": "0f501475f8c807785099aa626c91b178"
  },
  {
    "url": "assets/js/22.749b40ec.js",
    "revision": "5d0a422ab7a253b62f95ecfa70e72334"
  },
  {
    "url": "assets/js/23.b48028c7.js",
    "revision": "a692be04c0201957205d76bd736b536b"
  },
  {
    "url": "assets/js/24.8a65850c.js",
    "revision": "613fdc00f9a3a71ef7062e016c469e42"
  },
  {
    "url": "assets/js/26.189ec659.js",
    "revision": "0816a5fe129ef6bae1d5c700b5eea9e9"
  },
  {
    "url": "assets/js/3.1729ac6e.js",
    "revision": "ca5f7a9185a3763609eb2bb361f71518"
  },
  {
    "url": "assets/js/4.9865f352.js",
    "revision": "4e8a1a9a92ada3531bbfd55d491b5c49"
  },
  {
    "url": "assets/js/5.f8e841cb.js",
    "revision": "457b345e1c1a26a3313d3f0033008e31"
  },
  {
    "url": "assets/js/6.93719b9f.js",
    "revision": "231835ea716f3dc2cf063fef6ab54d57"
  },
  {
    "url": "assets/js/7.63eacd33.js",
    "revision": "853777ac910e27e964a02c7bd8edcd54"
  },
  {
    "url": "assets/js/8.b01a71a3.js",
    "revision": "db627087377ab2eec6ba3d42ba061a84"
  },
  {
    "url": "assets/js/9.90c15095.js",
    "revision": "2ed278de35f0511e4235a0f9349f03cd"
  },
  {
    "url": "assets/js/app.c360b190.js",
    "revision": "56cd321bb0ea1fa94c81a249253a1f2d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "19949f27d7ad71fe8eb2ea77a59f09fe"
  },
  {
    "url": "design/index.html",
    "revision": "e9dbb83923a6099f3f70cd4cefceb1b7"
  },
  {
    "url": "index.html",
    "revision": "bb99ece3c9f0f1a431298217ba2d8c9c"
  },
  {
    "url": "intro/index.html",
    "revision": "dd24a68621acc190e13106bc95342f15"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "390f0e4d9ce0bf395c9042e307fe3a43"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e8c7c8952172fefac8ae73b8570bc695"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0e6afcc1223ec8630cf366a4f30f243d"
  },
  {
    "url": "software/index.html",
    "revision": "2609fe40f01f0939d217ae1cd8b07374"
  },
  {
    "url": "test/index.html",
    "revision": "2ce89a9e2ea843ccfad8d246fc3b8b79"
  },
  {
    "url": "use cases/index.html",
    "revision": "5f8a3997d435ce3ec8e5edaa4f359526"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
