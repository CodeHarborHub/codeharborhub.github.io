---
id: adding-audio-and-video
title: Adding Audio and Video in HTML
sidebar_label: Adding Audio and Video
sidebar_position: 1
tags: [html, web-development, multimedia, audio, video]
description: In this tutorial, you will learn how to add audio and video to your HTML documents.
---
Multimedia elements like audio and video are crucial for creating engaging web experiences. HTML5 simplified the embedding of media directly into web pages with the introduction of the `<audio>` and `<video>` elements, eliminating the need for external plugins.

## Audio

To add audio to your web page, use the `<audio>` element. This tag supports various audio formats, such as MP3, WAV, and OGG, allowing for broad compatibility across different browsers and devices.

    ```html
    <audio>
      <source src="path/to/your-audio.mp3" type="audio/mp3">  
    </audio>
    ```

## Video

Embedding video content is similarly straightforward with the `<video>` element. This tag supports several video formats, including MP4, WebM, and OGG, to ensure your content is accessible on a wide range of platforms.

    ```html
    <video>
      <source src="path/to/your-video.mp4" type="video/mp4">
    </video>
    ```


## Browser Support
The numbers in the table specify the first browser version that fully supports the element.
<table class="browserref notranslate">
  <tbody><tr>
    <th>Element</th>
    <th>Chrome</th>
    <th>Edge</th>
    <th>Firefox</th>
    <th>Safari</th>
    <th>Opera</th>
  </tr>
    <tr>
    <td>&lt;audio&gt;</td>
    <td>4.0</td>
    <td>9.0</td>
    <td>3.5</td>
    <td>4.0</td>
    <td>11.5</td>
  </tr>
  <tr>
    <td>&lt;video&gt;</td>
    <td>4.0</td>
    <td>9.0</td>
    <td>3.5</td>
    <td>3.1</td>
    <td>11.5</td>
  </tr>
  </tbody></table>

## Conclusion

Incorporating audio and video into web pages significantly enhances user engagement by providing a richer multimedia experience. The `<audio>` and `<video>` elements facilitate the embedding of media content directly into your sites, making it more dynamic and interactive. Always ensure your media files are optimized for the web to improve loading times and overall user experience.