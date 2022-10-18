/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
// import { updateDynamicCache } from "./swUtils";

//Le da el poder al service worker
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

//Lugar para guardar recursos - Nuestros archivos
const CACHE_STATIC = "cache-static-nico-v1";
//Otro lugar para guardar recursos
const CACHE_DYNAMIC = "cache-dynamic-nico-v1";
//Recursos que no son nuestros y no cambian en la vida de la página. Ej Bootstrap, Google fonts
const CACHE_INMUTABLE = "cache-inmutable-nico-v1";

// const APP_SHELL = ["/favicon.ico", "/", "index.html"];
const APP_SHELL = ["/", "/index.html", "/static/media/"]; //cualquier otra imagen que sea "común" y no cambie en la pagina como un logo o una imagen de fondo

const APP_SHELL_INMUTABLE = [];

self.addEventListener("install", (e) => {
  const promesaStatic = caches
    .open(CACHE_STATIC)
    .then((cache) => cache.addAll(APP_SHELL));
  const promesaInmutable = caches
    .open(CACHE_INMUTABLE)
    .then((cache) => cache.addAll(APP_SHELL_INMUTABLE));

  //Esperamos que se devuelvan las dos promesas
  e.waitUntil(Promise.all([promesaStatic, promesaInmutable]));
});

self.addEventListener("activate", (e) => {
  //En la activacion limpiamos las versiones viejas de caché
  const respuesta = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== CACHE_STATIC && key.includes("static")) {
        return caches.delete(key);
      }
      if (key !== CACHE_DYNAMIC && key.includes("dynamic")) {
        return caches.delete(key);
      }
    });
  });

  //Esperamos que se limpie para terminar la activacion
  e.waitUntil(respuesta);
});

// self.addEventListener("fetch", (e) => {

//   console.log(e.request.url);
//   //Url de
//   let url = "url"
//   let resp;

//   if(e.request.url.indexOf(url) > -1){
//     resp = caches.match(e.request)
//       .then(cacheResp => {
//         if(cacheResp) return cacheResp
//         return fetch(url)
//           .then(res => res.json())
//           .then(body => {
//             let resArray = [];
//             for(let key in body){
//               let json = body[key]
//               resArray.push(json)
//             }
//             caches.open(CACHE_DYNAMIC)
//               .then(cache => {
//                 cache.put(e.request.url, new Response(resArray))
//               })
//             return new Response(resArray)
//           })
//       })
//   } else {
//     resp.caches.match(e.request.url)
//       .then(cacheResp => {
//         if(cacheResp) return cacheResp;
//         return fetch(e.request)
//           .then(fetchResp => {
//             return updateDynamicCache(CACHE_DYNAMIC, e.request, fetchResp)
//           })
//       })
//   }

//   e.respondWith(resp)
// });

self.addEventListener("push", (e) => {
  console.log(e.data);
});
