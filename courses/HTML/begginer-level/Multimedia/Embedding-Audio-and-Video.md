---
id: lesson-1
title: "Embedding Audio and Video"
sidebar_label: Embedding Audio and Video
sidebar_position: 1
description: "Learn to Embedding Audio and Video."
tags: [courses,beginner-level,Embedding Audio and Video,Introduction]
---  
 

Embedding multimedia elements like audio and video enhances the user experience by providing dynamic content. HTML5 introduced `<audio>` and `<video>` tags, making it straightforward to embed and control media files.

### Using the `<audio>` Tag

The `<audio>` tag is used to embed sound content in documents. It supports various audio formats like MP3, WAV, and Ogg. The `<audio>` tag can include multiple sources to ensure compatibility across different browsers.

**Basic Audio Example:**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

In this example:
- The `controls` attribute adds audio controls like play, pause, and volume.
- `<source>` tags specify different audio formats to ensure compatibility.
- The text "Your browser does not support the audio element." is displayed if the browser does not support the `<audio>` tag.

**Audio Attributes:**
- `controls`: Adds controls for play, pause, and volume.
- `autoplay`: The audio will play automatically as soon as it is ready.
- `loop`: The audio will loop continuously.
- `muted`: The audio output is muted.
- `preload`: Specifies if and how the audio should be loaded when the page loads (`none`, `metadata`, `auto`).

**Example with Attributes:**
```html
<audio controls autoplay loop muted preload="auto">
  <source src="background-music.mp3" type="audio/mpeg">
  <source src="background-music.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```
In this example:
- The audio will autoplay, loop continuously, and start muted.
- The `preload="auto"` attribute ensures the audio file is loaded when the page loads.

### Using the `<video>` Tag

The `<video>` tag is used to embed video content. It supports formats like MP4, WebM, and Ogg. Like the `<audio>` tag, `<video>` can include multiple sources.

**Basic Video Example:**
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

In this example:
- `width` and `height` specify the dimensions of the video player.
- The `controls` attribute adds video controls like play, pause, and volume.
- `<source>` tags specify different video formats to ensure compatibility.
- The text "Your browser does not support the video tag." is displayed if the browser does not support the `<video>` tag.

**Video Attributes:**
- `controls`: Adds controls for play, pause, volume, and fullscreen.
- `autoplay`: The video will play automatically as soon as it is ready.
- `loop`: The video will loop continuously.
- `muted`: The video output is muted.
- `preload`: Specifies if and how the video should be loaded when the page loads (`none`, `metadata`, `auto`).
- `poster`: Specifies an image to show while the video is downloading or until the user hits the play button.

**Example with Attributes:**
```html
<video width="640" height="360" controls autoplay loop muted preload="auto" poster="thumbnail.jpg">
  <source src="trailer.mp4" type="video/mp4">
  <source src="trailer.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

In this example:
- The video will autoplay, loop continuously, and start muted.
- The `preload="auto"` attribute ensures the video file is loaded when the page loads.
- The `poster` attribute specifies an image to display before the video starts playing.