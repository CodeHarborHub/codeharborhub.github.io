---
id: Image-Formats-And-Optimisation
title: Image Formats And Optimisation
sidebar_label: Image Formats And Optimisation
sidebar_position: 2
tags: [html, Img]
---

# Optimisation
Optimizing images for the web is crucial for improving website performance and user experience. By choosing the appropriate image format and applying optimization techniques, you can minimize file sizes without compromising image quality.

When optimizing images for use on an HTML webpage, it's essential to consider the format and optimization techniques to ensure fast loading times and good user experience.

### 1. JPEG (Joint Photographic Experts Group):
- **Description**: Ideal for photographs and images with gradients.
- **Optimization Techniques**:
  - Adjust compression levels: Balance image quality and file size by adjusting the compression level.
  - Optimize dimensions: Resize images to the actual size they will be displayed on the webpage.
  - Remove unnecessary metadata: Strip EXIF data and other metadata to reduce file size.
  - Use progressive encoding: Load images gradually for faster perceived performance.

```html
<img src="photo.jpg" alt="Description" width="800" height="600">
```

### 2. PNG (Portable Network Graphics):
- **Description**: Suitable for images with transparency and sharp lines.
- **Optimization Techniques**:
  - Use PNG-8 for simple graphics: PNG-8 supports up to 256 colors and is suitable for images with limited colors.
  - Optimize transparency: Use alpha transparency only where needed to minimize file size.
  - Compress PNG-24: Compress PNG-24 images to reduce file size while maintaining quality.

```html
<img src="logo.png" alt="Description" width="200" height="100">
```

### 3. GIF (Graphics Interchange Format):
- **Description**: Suitable for simple animations and images with limited colors.
- **Optimization Techniques**:
  - Limit color palette: Reduce the number of colors used in the image to minimize file size.
  - Optimize animations: Limit the number of frames and optimize frame duration for GIF animations.

```html
<img src="animation.gif" alt="Description" width="300" height="200">
```

### 4. WebP:
- **Description**: Modern image format offering both lossy and lossless compression.
- **Optimization Techniques**:
  - Convert JPEG/PNG to WebP: Convert existing images to WebP format for better compression and smaller file sizes.
  - Serve WebP images conditionally: Detect browser support for WebP and serve WebP images to compatible browsers.

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" width="400" height="300">
</picture>
```

By implementing these optimization techniques and choosing the appropriate image format, you can enhance the performance and user experience of your HTML webpages.