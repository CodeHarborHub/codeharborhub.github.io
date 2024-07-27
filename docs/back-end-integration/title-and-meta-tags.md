---
id: title-and-meta-tags
title: Title And Meta Tags
sidebar_label: Title & Meta Tags
sidebar_position: 4
tags: [title, meta, tags, react, create react app, seo, search engine optimization, server, server-side, back-end, integration]
keywords: [title, meta, tags, react, create react app, seo, search engine optimization, server, server-side, back-end, integration]
description: Learn how to handle title and meta tags in your Create React App for back-end integration, making your website more appealing and discoverable.
---

import '../css/style.css'

In web development, title and meta tags play a crucial role in optimizing your website for search engines and providing a better user experience. They are like a website's introduction, giving a sneak peek into what visitors can expect. In this guide, we will explore how to handle title and meta tags in your Create React App for back-end integration, making your website more appealing and discoverable.

### Changing the Title Tag

The first step to customizing your website's title is to locate the source HTML file in the `public` folder of your generated Create React App project. There, you'll find the `<title>` tag, which you can modify to display your desired title instead of the default "React App."

:::tip
Editing files in the `public` folder should be done sparingly. For most changes, like adding a stylesheet, you can do so without touching the HTML.
:::

If you need to dynamically update the page title based on the content or perform more complex title changes from React components, you can use the [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) API. For more advanced scenarios, where you want to manage title and meta tags with ease, consider using the popular third-party library, [React Helmet](https://github.com/nfl/react-helmet).

### Generating Dynamic Meta Tags on the Server

Create React App doesn't support server rendering by default, which might leave you wondering how to make `<meta>` tags dynamic and responsive to the current URL. To tackle this challenge, we recommend using placeholders in your HTML.

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__" />
    <meta property="og:description" content="__OG_DESCRIPTION__" />
  </head>
</html>
```

On your server, regardless of the backend you use, read the `index.html` file into memory and replace the `__OG_TITLE__`, `__OG_DESCRIPTION__`, and any other placeholders with actual values based on the current URL. It's crucial to sanitize and escape these interpolated values to ensure they are safe to embed into HTML.

If you're using a Node server, you can even share the route matching logic between the client and the server, although duplicating it in basic cases works fine.

### Injecting Data from the Server into the Page

Another powerful technique is injecting data from the server into your page, enabling you to pass global variables to your client-side JavaScript.


```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
  </head>
</html>
```

On the server, replace `__SERVER_DATA__` with a JSON object containing real data before sending the response. The client-side code can then read `window.SERVER_DATA` to access and use this data.

:::warning
Remember to sanitize the JSON before sending it to the client to prevent XSS attacks. Always prioritize security!
:::

## Conclusion:

Congratulations! You've learned how to handle title and meta tags in your Create React App for back-end integration. By customizing your title and meta tags, you can enhance your website's visibility in search engines and deliver a better experience to your users. Remember to use React Helmet for more advanced management of your head elements and be cautious when dealing with server-side data to ensure security. Happy coding and creating!