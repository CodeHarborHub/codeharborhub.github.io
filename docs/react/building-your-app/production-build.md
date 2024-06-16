---
id: production-build
title: Creating a Production Build in Create React App
sidebar_label: Production Build
sidebar_position: 12
tags: [react, create react app, production build, react build, production build, create react app production build, react production build, create react app build, react build, production build, create react app production build, react production build, create react app build, react build, production build, create react app production build, react production build, create react app build, react build, production build, create react app production build, react production build, create react app build, react build, production build, create react app production build, react production build, create react app build, react build, production build ]
keywords: ["create react app production build", "react production build", "create react app build", "react build", "production build", "create react app production build", "react production build", "create react app build", "react build", "production build", "create react app production build", "react production build", "create react app build", "react build", "production build", "create react app production build", "react production build", "create react app build", "react build", "production build" ]
description: Learn how to create a production build for your React app using Create React App. Optimize your code, reduce file sizes, and enhance performance for your users with this enchanting guide!
---

Welcome, aspiring developers, to the magical world of React production builds! In this enchanting guide, we'll walk you through the process of creating a production build for your Create React App. Brace yourselves for optimized code, faster load times, and an immersive user experience!

## Understanding Production Builds

Before we set sail on our quest, let's unravel the mystery of production builds. During development, we often use a special mode that helps with debugging and hot-reloading. But when it's time to release our app into the wild, we want it to be nimble and performant. Enter the production build!

A production build is the polished and optimized version of your React app. It reduces file sizes, implements caching techniques, and enhances performance for your end-users. Imagine your app transforming from a budding sapling to a majestic oak tree—ready to stand tall in the digital forest!

### 📁 Static File Caching 🚀

When you create a production build in Create React App, a fascinating magic happens! Each file inside the `build/static` directory receives a unique hash 🧙‍♂️. It's like a secret spell that's generated based on the file's contents 📝. This enchanting hash allows us to use aggressive caching techniques ✨. Imagine it as a magical seal that prevents the browser from re-downloading your assets if nothing has changed 🚫🔄.

For instance, let's say your React app has a magical image ✨🌟 that rarely changes, like your logo. During the first build, the image gets a unique hash in its filename, like `logo.abc123.png` 🎇. When you deploy your app, the browser happily caches this logo with its magical seal for a year 🗓️.

Now, imagine you decide to update the image slightly. No worries! During the subsequent build, the contents of the image change, and voilà, a new unique hash is born 🎉. The updated image now has a filename like `logo.xyz456.png`. Since the filename hash has changed, the browser knows it's time to download the new version with excitement 🎊.

To deliver the ultimate performance to your users, you can use the Cache-Control header 📜. Think of it as a scroll of command that controls the caching duration. For example, you can set `Cache-Control: max-age=31536000` for your `build/static` assets, like your JavaScript and CSS files. This delightful spell ensures that your user's browser will cache these files for a whole year 🗓️.

Now, imagine you have a spellbinding HTML file, your `index.html`, which might change more often than the static assets. In this case, you can set `Cache-Control: no-cache` for your `index.html`. This clever trick ensures the browser will always check for an updated version of your HTML spellbook whenever your app is revisited 📖.

To sum it all up, using these caching spells wisely ensures your users will experience the magic of your app with lightning-fast loading times and a delightful user experience! 🌟⚡

### 🎭 Profiling: Peek Behind the Curtain!

In the magical land of React, performance profiling is like gazing into a crystal ball, revealing the secrets of your app's performance. 🌟

In development mode (v16.5+), ReactDOM automatically supports profiling without any special incantations. However, in production mode, profiling remains hidden, adding just a touch of extra magic. To unveil its powers, you must opt-in using the `--profile` flag. 🧙‍♂️

Imagine you're preparing for the grand performance of your app, and you want to ensure it shines like a dazzling star. To enable profiling in the production build, wave your wand (terminal) and chant:

```bash
npm run build -- --profile
```

Or if you prefer yarn magic:

```bash
yarn build --profile
```

Now, behold the wondrous React DevTools! 🌌 They hold the key to understanding your app's performance like never before. Consult the [React docs](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler) to master the art of using the DevTools Profiler. It's like learning to control the elements! 🔥💨💧🌪

Just as a talented performer perfects their craft by studying their act, you, too, can dive into your app's performance to discover hidden bottlenecks and optimize its speed and efficiency. 🎉


## The Production Build Process

To create a production build in Create React App, you'll need Node.js and npm (Node Package Manager) installed on your computer. If you don't have them already, head to https://nodejs.org and follow the installation instructions.

Now, let's dive into the steps to create a magical production build:

### Step 1: Navigate to Your App Directory

Open your favorite terminal or command prompt and navigate to your React app's root directory. If you're not sure where it is, run the following command to create a new React app:

```bash
npx create-react-app my-awesome-app
cd my-awesome-app
```

Replace `my-awesome-app` with your desired app name.

### Step 2: Cast the Spell of Optimization

With your wand (terminal) in hand, it's time to unleash the power of optimization upon your app. To create the production build, run the following command:

```bash
npm run build
```

This command works its magic and conjures a `build` directory containing your production-ready app.

### Step 3: Unveil the Artifacts

Behold, the fruits of your labor are revealed within the `build` directory! Inside the `build/static` folder, you'll find the precious JavaScript and CSS files. Each filename will be appended with a unique hash, like a secret spell, to enable [long term caching techniques](#-static-file-caching-).

Additionally, you'll encounter several `.js` files, also known as _chunks_, within the `build/static/js` directory:

- `main.[hash].chunk.js`: This houses your application code, including your beloved `App.js`.

- `[number].[hash].chunk.js`: These files contain either _vendor_ code or [code splitting chunks](../styles-and-assets/code-splitting.md). _Vendor_ code includes modules imported from `node_modules`. Separating _vendor_ and _application_ code allows for better caching and improved loading performance.

- `runtime-main.[hash].js`: This small chunk of [webpack runtime](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) logic is used to load and run your application. By default, it's embedded in your `build/index.html` file to save a network request.

### Step 4: Embrace Static File Caching

In the realm of production builds, caching is a powerful ally for performance. Each file inside `build/static` has a unique hash based on its contents. This enables [aggressive caching techniques](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses), preventing unnecessary re-downloads when file contents haven't changed.

To optimize caching, specify a `Cache-Control` header for both `index.html` and the files within `build/static`. This header controls the caching duration for the browser and Content Delivery Networks (CDNs). Here's an example of setting `Cache-Control` headers:

```html
<!-- index.html -->
<meta http-equiv="Cache-Control" content="max-age=31536000">

<!-- All files in build/static -->
<FilesMatch "\.(js|css)$">
  Header set Cache-Control "max-age=31536000"
</FilesMatch>
```

With these caching spells in place, your app's static assets will be cached for a year, and your users will enjoy a delightful experience.

### Step 5: Profiling Your App (Optional)

For those who wish to dive deeper into the magical arts of performance optimization, React offers profiling in development mode (v16.5+). In production mode, profiling is opt-in, providing insights into your app's performance. To enable profiling, add the `--profile` flag when running the build command:

```bash
npm run build -- --profile
```

With profiling activated, you can leverage the React DevTools to delve into the mysteries of your app's performance. For more details, visit the [React Docs](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler).

## Conclusion

Congratulations, young wizards! You've successfully mastered the art of creating a production build for your React app. Now, your code is optimized, your performance is enchanting, and your users will be spellbound by the experience. As you embark on your coding adventures, remember to cast the spells of optimization and caching to create truly magical web applications!

May your code be bug-free, your designs be captivating, and your journey be filled with awe-inspiring creations. Happy coding!
