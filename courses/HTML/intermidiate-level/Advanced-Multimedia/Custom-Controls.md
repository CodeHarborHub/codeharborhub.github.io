---
id: lesson-2
title: "Custom Video Controls"
sidebar_label:  Custom Video Controls
sidebar_position: 2
description: "Learn to Custom Video Controls."
tags: [courses,advance-level,Video Control,Introduction]
---  

 

1. **Creating Custom Buttons:**
   Use JavaScript to control video playback with custom buttons.

   **HTML:**
   ```html
   <video id="myVideo" width="600">
     <source src="video.mp4" type="video/mp4">
     Your browser does not support the video tag.
   </video>
   <button id="playPauseBtn">Play/Pause</button>
   <button id="stopBtn">Stop</button>
   ```

   **JavaScript:**
   ```html
   <script>
     var video = document.getElementById('myVideo');
     var playPauseBtn = document.getElementById('playPauseBtn');
     var stopBtn = document.getElementById('stopBtn');

     playPauseBtn.addEventListener('click', function() {
       if (video.paused) {
         video.play();
         playPauseBtn.textContent = 'Pause';
       } else {
         video.pause();
         playPauseBtn.textContent = 'Play';
       }
     });

     stopBtn.addEventListener('click', function() {
       video.pause();
       video.currentTime = 0;
       playPauseBtn.textContent = 'Play';
     });
   </script>
   ```

2. **Full-Screen Control:**
   Add a button to toggle full-screen mode.

   **HTML:**
   ```html
   <button id="fullScreenBtn">Full Screen</button>
   ```

   **JavaScript:**
   ```html
   <script>
     var fullScreenBtn = document.getElementById('fullScreenBtn');

     fullScreenBtn.addEventListener('click', function() {
       if (video.requestFullscreen) {
         video.requestFullscreen();
       } else if (video.mozRequestFullScreen) { /* Firefox */
         video.mozRequestFullScreen();
       } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
         video.webkitRequestFullscreen();
       } else if (video.msRequestFullscreen) { /* IE/Edge */
         video.msRequestFullscreen();
       }
     });
   </script>
   ```

By leveraging these advanced features and custom controls, you can create a more interactive and engaging multimedia experience for users.