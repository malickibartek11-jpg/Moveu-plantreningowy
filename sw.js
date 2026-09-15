// Minimalny service worker - potrzebny tylko po to, żeby przeglądarka
// uznała aplikację za "instalowalną" (PWA). Nie robi cache'owania,
// żeby uniknąć problemów z pokazywaniem starej wersji po aktualizacji.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // celowo brak własnej obsługi - zawsze idź do sieci po najnowszą wersję
});
