
const staticCacheName = 'site-static';
const assets = [
    '/',
]


self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shel assets');
            cache.addAll(assets)
    }))
});

self.addEventListener('activate', evt => {
    //console.log('service worker activated');
});

self.addEventListener('fetch', evt => {
    //console.log('event fetched', evt);
});
