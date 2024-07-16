---
id: lesson-3
title: "Lazy Loading Images and Videos"
sidebar_label: Lazy Loading
sidebar_position: 3
description: "Learn to Lazy Loading Images and Videos."
tags: [courses,advance-level,Image,Videos,Introduction]
---  
   
 

Lazy loading is a technique that defers the loading of non-visible images and videos until they are about to enter the viewport, significantly improving initial page load times.

1. **Using the `loading` Attribute for Images:**
   - Add the `loading="lazy"` attribute to `<img>` elements to enable native lazy loading.
   ```html
   <img src="image.jpg" alt="Description" loading="lazy">
   ```

2. **Lazy Loading Background Images:**
   - For background images, implement lazy loading using JavaScript or CSS techniques, such as using a placeholder or data attributes.
   ```html
   <div class="lazy-background" data-bg="background-image.jpg"></div>

   <script>
     document.addEventListener('DOMContentLoaded', function() {
       const lazyBackgrounds = document.querySelectorAll('.lazy-background');
       lazyBackgrounds.forEach(bg => {
         bg.style.backgroundImage = `url(${bg.dataset.bg})`;
       });
     });
   </script>
   ```

3. **Lazy Loading Videos:**
   - Use the `loading="lazy"` attribute on `<video>` tags to delay loading until needed.
   ```html
   <video src="video.mp4" controls loading="lazy"></video>
   ```

4. **Use Intersection Observer API:**
   - For more control over lazy loading, utilize the Intersection Observer API to load elements when they come into view.
   ```javascript
   const images = document.querySelectorAll('img[data-src]');
   const options = {
     root: null,
     rootMargin: '0px',
     threshold: 0.1
   };

   const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const img = entry.target;
         img.src = img.dataset.src;
         observer.unobserve(img);
       }
     });
   }, options);

   images.forEach(image => {
     observer.observe(image);
   });
   ```

By applying these performance optimization techniques—optimizing HTML, reducing render-blocking resources, and implementing lazy loading—you can significantly enhance your website's loading speed and overall user experience.