---
id: lesson-3
title: "WebRTC for Real-time Communication"
sidebar_label: WebRTC
sidebar_position: 3
description: "Learn to WebRTC for Real-time Communication."
tags: [courses,advance-level,WebRTC,Introduction]
---  
 
 

WebRTC (Web Real-Time Communication) enables peer-to-peer audio, video, and data sharing between browsers without the need for plugins. It's commonly used for video conferencing, file sharing, and other real-time communication applications.

**Basic Steps:**

1. **Get User Media:**
   ```javascript
   navigator.mediaDevices.getUserMedia({ video: true, audio: true })
     .then(function(stream) {
       var videoElement = document.querySelector('video');
       videoElement.srcObject = stream;
     })
     .catch(function(error) {
       console.error('Error accessing media devices.', error);
     });
   ```

2. **Create Peer Connection:**
   ```javascript
   var peerConnection = new RTCPeerConnection();

   peerConnection.onicecandidate = function(event) {
     if (event.candidate) {
       // Send the candidate to the remote peer
     }
   };

   peerConnection.ontrack = function(event) {
     var remoteVideo = document.querySelector('video#remote');
     remoteVideo.srcObject = event.streams[0];
   };

   // Add local stream tracks to the connection
   stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
   ```

3. **Create Offer/Answer:**
   ```javascript
   peerConnection.createOffer()
     .then(function(offer) {
       return peerConnection.setLocalDescription(offer);
     })
     .then(function() {
       // Send the offer to the remote peer
     });

   // On receiving an offer
   peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
     .then(function() {
       return peerConnection.createAnswer();
     })
     .then(function(answer) {
       return peerConnection.setLocalDescription(answer);
     })
     .then(function() {
       // Send the answer to the remote peer
     });
   ```

**Example Usage:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>WebRTC Example</title>
</head>
<body>
  <video id="local" autoplay muted></video>
  <video id="remote" autoplay></video>
  <script>
    var localVideo = document.getElementById('local');
    var remoteVideo = document.getElementById('remote');
    var peerConnection = new RTCPeerConnection();

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(function(stream) {
        localVideo.srcObject = stream;
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
      })
      .catch(function(error) {
        console.error('Error accessing media devices.', error);
      });

    peerConnection.onicecandidate = function(event) {
      if (event.candidate) {
        // Send the candidate to the remote peer
      }
    };

    peerConnection.ontrack = function(event) {
      remoteVideo.srcObject = event.streams[0];
    };

    // Example: Creating an offer
    peerConnection.createOffer()
      .then(function(offer) {
        return peerConnection.setLocalDescription(offer);
      })
      .then(function() {
        // Send the offer to the remote peer
      });
  </script>
</body>
</html>
```

By leveraging these advanced HTML5 APIs, developers can build highly interactive and real-time web applications, providing rich user experiences and seamless communication.