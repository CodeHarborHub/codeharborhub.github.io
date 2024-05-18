---
id: introduction-to-responsive-design
title: Introduction to Responsive Web Design
sidebar_label: Introduction to Responsive Design
sidebar_position: 1
tags: [html, web-development, responsive-web-design]
description: In this tutorial, you will learn the basics of responsive web design and how to create responsive websites that work on all devices.
---

Responsive Web Design (RWD) is an approach to web development that ensures web pages render well on a variety of devices and window or screen sizes. This is achieved through the use of flexible layouts, flexible images, and CSS media queries.

A responsive web design will automatically adjust for different screen sizes and viewports.

Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):

![banner](https://www.infront.com/wp-content/uploads/2019/10/responsive-websites-700-1.jpg)

## Setting The Viewport
To create a responsive website, add the following `<meta>` tag to all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
This will set the viewport of your page, which will give the browser instructions on how to control the page's dimensions and scaling.

Here is an example of a web page without the viewport meta tag, and the same web page with the viewport meta tag:

<Tabs>
    <TabItem value="Without Viewport">
        <BrowserWindow>
            <html>
            <center>
            <img src="https://www.w3schools.com/css/img_viewport1.png"></img>
            </center>
            </html>
        </BrowserWindow>
    </TabItem>
    <TabItem value="With Viewport">
        <BrowserWindow>
            <html>
            <center>
            <img src="https://www.w3schools.com/css/img_viewport2.png"></img>
            </center>
            </html>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Flexible Layouts

Flexible layouts use relative length units, such as percentages, rather than fixed units like pixels. This allows the layout to adapt to the size of the viewport.

```html
<div style="width: 50%;">
  This div will take up 50% of the width of its container.
</div>
```

## Flexible Images

Flexible images are also sized in relative units to prevent them from displaying outside their containing element.

```html
<img src="path/to/your-image.jpg" style="max-width: 100%;" alt="Responsive Image">
```

## Media Queries

Media queries are a key component of responsive design. They allow you to apply different styles based on the characteristics of the device, such as its width, height, or orientation.

```css
@media (max-width: 600px) {
  .responsive-class {
    font-size: 14px;
  }
}
```

## Browser Support

The numbers in the table specify the first browser version that fully supports the feature.

<table class="browserref notranslate">
  <tbody>
    <tr>
      <th>Feature</th>
      <th>Chrome</th>
      <th>Edge</th>
      <th>Firefox</th>
      <th>Safari</th>
      <th>Opera</th>
    </tr>
    <tr>
      <td>Flexible Layouts</td>
      <td>1.0</td>
      <td>12.0</td>
      <td>1.0</td>
      <td>3.1</td>
      <td>7.0</td>
    </tr>
    <tr>
      <td>Flexible Images</td>
      <td>1.0</td>
      <td>12.0</td>
      <td>1.0</td>
      <td>3.1</td>
      <td>7.0</td>
    </tr>
    <tr>
      <td>Media Queries</td>
      <td>21.0</td>
      <td>12.0</td>
      <td>3.5</td>
      <td>4.0</td>
      <td>12.1</td>
    </tr>
  </tbody>
</table>

## Conclusion

Responsive Web Design is essential for creating web pages that provide a good user experience across a wide range of devices. By using flexible layouts, flexible images, and media queries, you can ensure your web pages look great no matter the screen size. Always test your designs on multiple devices to ensure compatibility and usability.