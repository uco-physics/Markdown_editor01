self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('markdown-editor').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        'https://cdn.jsdelivr.net/npm/marked@4.3.0/lib/marked.min.js',
        'https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.min.js',
        'https://cdn.jsdelivr.net/npm/highlight.js@11.10.0/lib/core.min.js',
        'https://cdn.jsdelivr.net/npm/highlight.js@11.10.0/lib/languages/javascript.min.js',
        'https://cdn.jsdelivr.net/npm/dexie@3.2.7/dist/dexie.min.js',
        'https://cdn.jsdelivr.net/npm/yjs@13.6.18/dist/y.min.js',
        'https://cdn.jsdelivr.net/npm/y-indexeddb@9.0.6/dist/y-indexeddb.min.js',
        'https://unpkg.com/simple-peer@9.11.1/simplepeer.min.js',
        'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
        'https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js',
        'https://cdn.jsdelivr.net/npm/libsodium-wrappers@0.7.13/dist/modules/libsodium-wrappers.min.js',
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
