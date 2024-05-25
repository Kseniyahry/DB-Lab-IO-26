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
    "revision": "901aa2c5e7319eeb641876f8971a9ccc"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1a58a9b6.css",
    "revision": "d4c569b95f8b3754fcad8446e45531e0"
  },
  {
    "url": "assets/img/DeleteTask.9e7ae713.9e7ae713.png",
    "revision": "9e7ae713e07b1d77b443e77be4f35c82"
  },
  {
    "url": "assets/img/GetTask.0808a4c8.0808a4c8.png",
    "revision": "0808a4c88ba1e61a06725d756248a100"
  },
  {
    "url": "assets/img/GetTasks.a68d300f.a68d300f.png",
    "revision": "a68d300f973c65826e7c6ebe8ec9882a"
  },
  {
    "url": "assets/img/MySQL.8db3eeeb.png",
    "revision": "8db3eeebdfb320985ce9aec2fee77203"
  },
  {
    "url": "assets/img/PatchTask.1c82ab74.1c82ab74.png",
    "revision": "1c82ab74a010d72c655fac603a13f3f4"
  },
  {
    "url": "assets/img/PostTask.eca018df.eca018df.png",
    "revision": "eca018dff3c196985141fbbc95cef993"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9d162410.js",
    "revision": "d95147809cf5488a74a5b505ebcecd89"
  },
  {
    "url": "assets/js/10.e1892961.js",
    "revision": "2f34b9cbe12337412834fccac6ceb6b1"
  },
  {
    "url": "assets/js/13.ea0b32a5.js",
    "revision": "9d186b3fe44d6417509dbb74514cfe3f"
  },
  {
    "url": "assets/js/14.6f3371f2.js",
    "revision": "b52769935871405b646d1afa0325c69f"
  },
  {
    "url": "assets/js/15.4b281890.js",
    "revision": "35532ddee7c694134389cdef556e9f09"
  },
  {
    "url": "assets/js/16.0b03e26a.js",
    "revision": "7352c141cab9eebe7b9818359787f1bb"
  },
  {
    "url": "assets/js/17.affa6a1c.js",
    "revision": "9816857c6a65d2eb26fe0010745f58e5"
  },
  {
    "url": "assets/js/18.a6e5497b.js",
    "revision": "8c3cd543a7220331c3f7883628e550a0"
  },
  {
    "url": "assets/js/19.ff1e7bb2.js",
    "revision": "66ac356049e95033bbe4eccf351e42b8"
  },
  {
    "url": "assets/js/2.a55a3003.js",
    "revision": "2e23159186f4379b5a1c2fba332c1795"
  },
  {
    "url": "assets/js/20.f4b05e0c.js",
    "revision": "0c3023fba50a750f42c99fae331202d6"
  },
  {
    "url": "assets/js/21.4e1cc404.js",
    "revision": "81041c8b09232f0fe7762bc47cc012f3"
  },
  {
    "url": "assets/js/22.8c2f48ed.js",
    "revision": "6ea3985ce9470744d0289cbf480cde84"
  },
  {
    "url": "assets/js/23.6332bedd.js",
    "revision": "0393bf62740d7668ff50b3911e3fd4ae"
  },
  {
    "url": "assets/js/24.0ca8d49e.js",
    "revision": "b8520a96f425adce0b7e7431c8b984ed"
  },
  {
    "url": "assets/js/25.2346a27f.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.64a380ff.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.6f6b5581.js",
    "revision": "ffadab875a876591e3ea5f38ed020127"
  },
  {
    "url": "assets/js/28.d13fef6c.js",
    "revision": "24bea497784fa74a217d0df5beb8ee3a"
  },
  {
    "url": "assets/js/29.796c6e28.js",
    "revision": "03f0274c25e757b5c6be1041cf9a487f"
  },
  {
    "url": "assets/js/3.90c9f46a.js",
    "revision": "159f2ae06d83459b0189e5b7e1bb83d3"
  },
  {
    "url": "assets/js/30.3af32fd5.js",
    "revision": "5666a76e6cd6c514f50ee985f72a7271"
  },
  {
    "url": "assets/js/31.cf443a72.js",
    "revision": "d1aad876962fbc1ce305cb1bd9c51131"
  },
  {
    "url": "assets/js/32.55b6e139.js",
    "revision": "6acb9ebdbcb90dd05fd207ee084d2e31"
  },
  {
    "url": "assets/js/33.b4893f19.js",
    "revision": "e3df771455b02da7ec029ba57ccf8211"
  },
  {
    "url": "assets/js/34.e0c0489e.js",
    "revision": "7a69fed096ea895893d975849b185afc"
  },
  {
    "url": "assets/js/35.767cf533.js",
    "revision": "34e00d52eb48d76c37f78443c05f5e07"
  },
  {
    "url": "assets/js/36.12195d9f.js",
    "revision": "3b990afd3921c1fa91e6867ed229178a"
  },
  {
    "url": "assets/js/37.66bf8dca.js",
    "revision": "786075e3dd4b019fd8375ad425962d13"
  },
  {
    "url": "assets/js/38.4c7e085f.js",
    "revision": "971cf8598ba99933828e09d79fc7d731"
  },
  {
    "url": "assets/js/39.9017dc87.js",
    "revision": "3de44ea085d48009305a02a42c203acd"
  },
  {
    "url": "assets/js/4.be1c0d15.js",
    "revision": "b4054b916ae4edffe720ab213f59212e"
  },
  {
    "url": "assets/js/41.18daa216.js",
    "revision": "bebaba473198da5ec8c295541926802a"
  },
  {
    "url": "assets/js/5.9b084b0d.js",
    "revision": "f945f9645222d26e5aae5eb8614386a9"
  },
  {
    "url": "assets/js/6.e2a653a5.js",
    "revision": "fb3a00f17b021c08b4fb92dbf1bc37f3"
  },
  {
    "url": "assets/js/7.e3eee692.js",
    "revision": "4d9f4f23432474f62e82cb7bfee3fe24"
  },
  {
    "url": "assets/js/8.f217b42b.js",
    "revision": "5c91ce66e46e922493f843068e76edea"
  },
  {
    "url": "assets/js/9.86376259.js",
    "revision": "adab463133351317e261f11c723ee497"
  },
  {
    "url": "assets/js/app.125cd35f.js",
    "revision": "6823a6f0f60f614601185031b33aef28"
  },
  {
    "url": "assets/js/vendors~docsearch.df13434b.js",
    "revision": "cf0ad8136632d4442e69d96862099c87"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3a26be33fbd734fc9d191cefe23c3bf5"
  },
  {
    "url": "design/index.html",
    "revision": "7cf8493da44b8d37ee36fb8b00783edd"
  },
  {
    "url": "index.html",
    "revision": "a86ccb3fc915f1d62a39eb8d511ab017"
  },
  {
    "url": "intro/index.html",
    "revision": "d5016b58b8e5edba55c1fb150169997b"
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
    "revision": "f304eb53d690eb21e33881c501ec2d10"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "daa5a402310e411e51d5c7e9493dea33"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "09906f0fda5768fad53b19f7ae2f69aa"
  },
  {
    "url": "software/index.html",
    "revision": "d1dc7497125c91880ddbcf715c9fbe1c"
  },
  {
    "url": "test/index.html",
    "revision": "4aea36f22d730fff2129913961171cb6"
  },
  {
    "url": "use cases/index.html",
    "revision": "fcff359026bfd119786dce411bcc5a0c"
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
