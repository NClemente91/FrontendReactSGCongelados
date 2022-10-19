/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

//Le da el poder al service worker
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

//Lugar para guardar recursos - Nuestros archivos
const CACHE_STATIC = "cache-static-nico-v1";
//Otro lugar para guardar recursos
const CACHE_DYNAMIC = "cache-dynamic-nico-v1";
//Recursos que no son nuestros y no cambian en la vida de la página. Ej Bootstrap, Google fonts
const CACHE_INMUTABLE = "cache-inmutable-nico-v1";

const APP_SHELL = ["/favicon.ico", "/", "index.html"]; //cualquier otra imagen que sea "común" y no cambie en la pagina como un logo o una imagen de fondo

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
