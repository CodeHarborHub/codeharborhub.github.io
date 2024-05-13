---
id: embedding-multimedia-content
title: Embedding Multimedia Content in HTML
sidebar_label: Embedding Multimedia Content
sidebar_position: 2
tags: [html, web-development, multimedia, embedding-multimedia-content]
description: In this tutorial, you will learn how to embed multimedia content such as images, audio, and video in your HTML documents.
---

In this tutorial, you will learn how to embed multimedia content such as images, audio, and video in your HTML documents.

## Adding Audio

To add audio to your web page, use the `<audio>` element. The `<audio>` tag is used to embed sound content in a document, such as music or other audio streams.

The `<audio>` tag contains one or more `<source>` tags with different audio sources. The browser will choose the first source it supports.

The text between the `<audio>` and `</audio>` tags will only be displayed in browsers that do not support the `<audio> `element.

There are three supported audio formats in HTML: MP3, WAV, and OGG.

<Tabs>
    <TabItem value="HTML">
    ```html
    <audio controls>
      <source src="path/to/your-audio.mp3" type="audio/mp3">
    </audio>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow url="http://127.0.0.1:5500/index.html">
        <div>
            <audio controls>
                <source src="path/to/your-audio.mp3" type="audio/mp3"></source>
            </audio>
        </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Adding Video

Embedding video content is similarly straightforward with the `<video>` element. The `<video>` tag is used to embed video content in a document, such as a movie clip or other video streams.

The `<video>` tag contains one or more `<source>` tags with different video sources. The browser will choose the first source it supports.

The text between the `<video>` and `</video>` tags will only be displayed in browsers that do not support the `<video>` element.

There are three supported video formats in HTML: MP4, WebM, and OGG.

<Tabs>
    <TabItem value="HTML">
    ```html
    <video controls>
      <source src="path/to/your-video.mp4" type="video/mp4">
    </video>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow url="http://127.0.0.1:5500/index.html">
        <div>
            <video controls>
                <source src="path/to/your-video.mp4" type="video/mp4"></source>
            </video>
        </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Conclusion

Embedding multimedia content into HTML documents is a powerful way to enhance the visual appeal and interactivity of web pages. Through this tutorial, we've explored the fundamentals of incorporating audio and video elements, which are essential components for creating rich multimedia experiences. By utilizing the `<audio>` and `<video>` tags, along with specifying various source files, developers can ensure broad compatibility across different browsers and devices, making content accessible to a wider audience.

In conclusion, the integration of audio and video into HTML documents is a testament to the evolving capabilities of the web as a platform for multimedia content. By following the guidelines and examples provided in this tutorial, developers can craft more immersive and interactive web experiences that captivate and engage users.