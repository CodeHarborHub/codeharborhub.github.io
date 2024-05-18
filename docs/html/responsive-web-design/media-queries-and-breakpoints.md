---
id: media-queries-and-breakpoints
title: Media Queries and Breakpoints in Responsive Web Design
sidebar_label: Media Queries and Breakpoints
sidebar_position: 2
tags: [html, web-development, responsive-web-design, media-queries, breakpoints]
description: In this tutorial, you will learn how to use media queries and breakpoints to create responsive web designs that adapt to different screen sizes and devices.
---

Media queries allow you to apply CSS styles depending on a device's media type (such as print vs. screen) or other features or characteristics such as screen resolution or orientation, aspect ratio, browser viewport width or height, user preferences such as preferring reduced motion, data usage, or transparenc

## Designing For The Best Experience For All Users
Web pages can be viewed using many different devices: desktops, tablets, and phones. Your web page should look good, and be easy to use, regardless of the device.

Web pages should not leave out information to fit smaller devices, but rather adapt its content to fit any device:

<Tabs>
    <TabItem value="Desktop">
        <BrowserWindow>
            <html>
            <center>
            <img src="https://www.w3schools.com/css/rwd_desktop.png"></img>
            </center>
            </html>
        </BrowserWindow>
    </TabItem>
    <TabItem value="Tablet">
        <BrowserWindow>
            <html>
            <center>
            <img src="https://www.w3schools.com/css/rwd_tablet.png"></img>
            </center>
            </html>
        </BrowserWindow>
    </TabItem>
    <TabItem value="Mobile">
        <BrowserWindow>
            <html>
            <center>
            <img src="https://www.w3schools.com/css/rwd_phone.png"></img>
            </center>
            </html>
        </BrowserWindow>
    </TabItem>
</Tabs>


## What Are Media Queries?
Media queries are a fundamental part of responsive web design. They allow you to apply CSS rules based on the characteristics of the device rendering the content, such as its width, height, orientation, and resolution.

### Basic Syntax
Here is the basic syntax of a media query:

```css
@media (condition) {
  /* CSS rules */
}
```

### Example
Let's look at a simple example where we change the background color based on the screen width:

<Tabs>
    <TabItem value="Code">
```css 
/* Default styles */
body {
  background-color: white;
}
/* Styles for screens wider than 600px */
@media (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}
/* Styles for screens wider than 900px */
@media (min-width: 900px) {
  body {
    background-color: lightgreen;
  }
}
```
    </TabItem>
    <TabItem value="Desktop">
        <BrowserWindow>
            ![banner](green.png)
        </BrowserWindow>
    </TabItem>
        <TabItem value="Tablet">
        <BrowserWindow>
            ![banner](blue.png)
        </BrowserWindow>
    </TabItem>
        <TabItem value="Mobile">
        <BrowserWindow>
            ![banner](white.png)
        </BrowserWindow>
    </TabItem>
</Tabs>

## Common Breakpoints
Breakpoints are the points at which your website content will adapt to provide the best possible layout for the user. Here are some common breakpoints:

- **Small devices (phones, 600px and down):**
  ```css
  @media (max-width: 600px) {
    /* CSS rules for small devices */
  }
  ```

- **Medium devices (tablets, 600px to 900px):**
  ```css
  @media (min-width: 600px) and (max-width: 900px) {
    /* CSS rules for medium devices */
  }
  ```

- **Large devices (desktops, 900px and up):**
  ```css
  @media (min-width: 900px) {
    /* CSS rules for large devices */
  }
  ```

## Advanced Media Queries
Media queries can also be combined to create more complex conditions. For example, you can target devices with a specific orientation or resolution:

### Orientation
```css
/* Styles for landscape orientation */
@media (orientation: landscape) {
  /* CSS rules for landscape orientation */
}

/* Styles for portrait orientation */
@media (orientation: portrait) {
  /* CSS rules for portrait orientation */
}
```

### Resolution
```css
/* Styles for high-resolution screens */
@media (min-resolution: 2dppx) {
  /* CSS rules for high-resolution screens */
}
```

## Practical Example of Orientation
Let's create a practical example where we adjust the layout of a simple webpage based on different screen sizes:

<Tabs>
    <TabItem value="Desktop">
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Web Design</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .box {
      width: 100%;
      padding: 20px;
      margin: 10px 0;
      background-color: lightgray;
      text-align: center;
    }

    @media (min-width: 600px) {
      .container {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      .box {
        width: 45%;
      }
    }

    @media (min-width: 900px) {
      .box {
        width: 30%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>
```
    </TabItem>
    <TabItem value="Landscape">
        <BrowserWindow>
            <html>
            <center>
            <img src="https://global.discourse-cdn.com/freecodecamp/original/3X/2/d/2d7736d5fbbdaa12214c6ea3675d99a604abbf33.png"></img>
            </center>
            </html>
        </BrowserWindow>
    </TabItem>
    <TabItem value="Potrait">
        <BrowserWindow>
            <html>
            <center>
            <img src="https://global.discourse-cdn.com/freecodecamp/original/3X/3/6/3634f275e75991d22fc1e8ca0701f79c3bb5737b.png"></img>
            </center>
            </html>
        </BrowserWindow>
    </TabItem>
</Tabs>
## Conclusion
Media queries and breakpoints are essential tools in creating responsive web designs. By understanding and utilizing these techniques, you can ensure that your web pages provide an optimal viewing experience across a wide range of devices and screen sizes. Experiment with different breakpoints and media query conditions to see what works best for your specific design needs.

## Conclusion