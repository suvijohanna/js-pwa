'use strict';

(async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register(
        '/~suvimyn/2025/jakso1/js-pwa/Hello-PWA/js/sw.js'
      );
      console.log('Service Worker Registered');
    } catch (e) {
      console.log(e.message);
    }
  }
})();
