---
id: lesson-2
title: "Service Workers"
sidebar_label: Service Workers
sidebar_position: 2
description: "Learn to Service Workers."
tags: [courses,advance-level,Service Workers,Introduction]
---   
 
 

Service Workers are a core technology behind PWAs, acting as a proxy between the web application and the network. They enable the application to intercept network requests and cache resources, allowing for offline functionality and faster load times.

**Basic Steps to Implement a Service Worker:**

1. **Register the Service Worker:**
   ```javascript
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/service-worker.js')
       .then(function(registration) {
         console.log('Service Worker registered with scope:', registration.scope);
       })
       .catch(function(error) {
         console.error('Service Worker registration failed:', error);
       });
   }
   ```

2. **Create the Service Worker File:**
   ```javascript
   // service-worker.js
   self.addEventListener('install', function(event) {
     event.waitUntil(
       caches.open('v1').then(function(cache) {
         return cache.addAll([
           '/',
           '/index.html',
           '/styles.css',
           '/script.js',
           '/offline.html'
         ]);
       })
     );
   });

   self.addEventListener('fetch', function(event) {
     event.respondWith(
       caches.match(event.request).then(function(response) {
         return response || fetch(event.request);
       })
     );
   });

   self.addEventListener('activate', function(event) {
     event.waitUntil(
       caches.keys().then(function(cacheNames) {
         return Promise.all(
           cacheNames.map(function(cacheName) {
             if (cacheName !== 'v1') {
               return caches.delete(cacheName);
             }
           })
         );
       })
     );
   });
   ```

**Example Usage:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>PWA Example</title>
  <link rel="manifest" href="/manifest.json">
</head>
<body>
  <h1>Hello, PWA!</h1>
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('Service Worker registered:', registration))
        .catch(error => console.error('Service Worker registration failed:', error));
    }
  </script>
</body>
</html>
```
