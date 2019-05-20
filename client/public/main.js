var p = navigator.serviceWorker.register(SW_URL, [options]);
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js');
        
        //navigator.serviceWorker.ready always resolve
        navigator.serviceWorker.ready.then(function (registration) {
            console.log('Service worker successfully registered on scope', registration.scope);
        });
    });
}