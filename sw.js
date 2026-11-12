// Minimal service worker: makes the app installable. No offline cache (data is live in Supabase),
// so the page is always loaded from the network and updates are immediate.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
