---
id: Inserting-Images
title: Inserting Images
sidebar_label: Inserting Images
sidebar_position: 1
tags: [html, Img]
---

# Inserting Images on Web Page

Now, we will check out how to insert Images on your webpage. The tag that is used for inserting the Images in the webpage is `<img>` tag.

The `<img>` tag in HTML is used to insert images into a web page. It is one of the fundamental elements for web development as it allows you to display visual content seamlessly.

`<img src="image.jpg" alt="Description of the image">`

- **src:** This attribute specifies the URL of the image. It can be a relative or absolute path to the image file.

- **alt:** This attribute provides alternative text for the image, which is displayed if the image cannot be loaded or for accessibility purposes. It's essential for visually impaired users who rely on screen readers.

Here's an example of how you might use the `<img>` tag:

```html 
<!DOCTYPE html>
<html>
<head>
    <title>Intro to Images</title>
</head>
<body>
    <h1>My Image</h1>
    <img src="example.jpg" alt="An example for inserting the Image!">
</body>
</html>

```

This code will display the image "example.jpg" with the alternative text "An example for inserting the Image".

# Accessibility:

Adding descriptive <u>**alt**</u> text to images is crucial for accessibility. Screen readers rely on this text to describe images to visually impaired users. So, always ensure your images have meaningful alt attributes.