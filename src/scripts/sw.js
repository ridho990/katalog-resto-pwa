import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './global/config';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

// const cacheAllDataResto = new Route(
//     new RegExp('/*'),
//     new StaleWhileRevalidate({
//         cacheName: CONFIG.CACHE_NAME
//     })
// );

const restoApi = new Route(
    ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
    new StaleWhileRevalidate({
        cacheName: 'resto-api'
    })
);

registerRoute(restoApi);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});
