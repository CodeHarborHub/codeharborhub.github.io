---
id: advanced-configuration
title: Advanced Configuration
sidebar_label: Advanced Configuration
sidebar_position: 4
tags: [Create React App, Advanced Configuration, Environment Variables, Webpack, Babel, CRACO, react-scripts, Custom Scripts, Ejectify, Custom Templates]
keywords: [create react app, advanced configuration, environment variables, webpack, babel, craco, react-scripts, custom scripts, ejectify, custom templates]
description: Learn how to customize and fine-tune your React projects with advanced configuration options in Create React App. Discover powerful features and alternatives to ejecting that will help you take control of your development environment.
---
In Create React App, you have the power to customize various development and production settings using environment variables. These options allow you to control the behavior of your React application without diving into complex configurations. Let's take a closer look at each setting in a handy table format:

| Variable                  | Development | Production | Usage   |
| :------------------------ | :---------: | :--------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BROWSER                   |   ✅ Used   | 🚫 Ignored | Override the default system browser that Create React App opens during development. You can specify a specific browser or set it to `none` to disable browser opening. You can even use a custom Node.js script for launching the browser with additional arguments from `npm start`.                 |
| BROWSER_ARGS              |   ✅ Used   | 🚫 Ignored | Pass additional arguments to the browser instance when `BROWSER` is specified. Multiple arguments are supported, separated by spaces.                                                                                                                                                                 |
| HOST                      |   ✅ Used   | 🚫 Ignored | Specify a custom host for the development web server. By default, it binds to all available hostnames on the device.                                                                                                                                                                                  |
| PORT                      |   ✅ Used   | 🚫 Ignored | Set a custom port for the development web server. By default, it listens on port 3000 or finds the next available port if 3000 is in use.                                                                                                                                                             |
| HTTPS                     |   ✅ Used   | 🚫 Ignored | Run the development server in `https` mode by setting this variable to `true`.                                                                                                                                                                                                                        |
| WDS_SOCKET_HOST           |   ✅ Used   | 🚫 Ignored | Specify a custom WebSocket hostname for hot module reloading in the development server. Useful when working on multiple Create React App projects simultaneously.                                                                                                                                     |
| WDS_SOCKET_PATH           |   ✅ Used   | 🚫 Ignored | Set a custom WebSocket path for hot module reloading in the development server. Helpful when working on multiple Create React App projects simultaneously.                                                                                                                                            |
| WDS_SOCKET_PORT           |   ✅ Used   | 🚫 Ignored | Use a custom WebSocket port for hot module reloading in the development server. Useful for working on multiple Create React App projects simultaneously.                                                                                                                                              |
| PUBLIC_URL                |   ✅ Used   |  ✅ Used   | Force assets to be referenced verbatim to the provided URL (including hostname). Useful when using a CDN to host your application. This variable overrides the default assumption of your app's hosting location specified in `package.json` (`homepage`).                                            |
| BUILD_PATH                | 🚫 Ignored  |  ✅ Used   | Specify a new path for Create React App to output compiled assets during the production build. By default, assets are output to `/build` directory adjacent to your `/src`.                                                                                                                           |
| CI                        |   ✅ Used   |  ✅ Used   | Treat warnings as build failures and make the test runner non-watching when `true`. Most Continuous Integration (CI) environments set this flag by default.                                                                                                                                           |
| REACT_EDITOR              |   ✅ Used   | 🚫 Ignored | Override the automatic editor detection in development. When your app crashes, you'll see an error overlay with a clickable stack trace. Clicking it opens the relevant source file based on running processes. You can set this variable to your editor's bin folder's path or `none` to disable it. |
| CHOKIDAR_USEPOLLING       |   ✅ Used   | 🚫 Ignored | Run the watcher in polling mode (`true`) if `npm start` isn't detecting changes. Useful inside virtual machines (VMs).                                                                                                                                                                                |
| GENERATE_SOURCEMAP        | 🚫 Ignored  |  ✅ Used   | Enable (`true`) or disable (`false`) source maps generation during production build. Disabling source maps can resolve Out of Memory (OOM) issues on some smaller machines.                                                                                                                           |
| INLINE_RUNTIME_CHUNK      | 🚫 Ignored  |  ✅ Used   | Embed (`true`) or import as usual (`false`) the runtime script into `index.html` during production build. Use this when dealing with Content Security Policy (CSP) restrictions.                                                                                                                      |
| IMAGE_INLINE_SIZE_LIMIT   |   ✅ Used   |  ✅ Used   | Control the size limit (in bytes) for images that will be inlined in the CSS or JS build artifact as data URI in base64. Set to `0` to disable image inlining.                                                                                                                                        |
| FAST_REFRESH              |   ✅ Used   | 🚫 Ignored | Enable (`true`) or disable (`false`) experimental Fast Refresh support. Fast Refresh allows tweaking components in real-time without reloading the page.                                                                                                                                              |
| TSC_COMPILE_ON_ERROR      |   ✅ Used   |  ✅ Used   | Allow running and building TypeScript projects even with TypeScript type check errors. Errors are displayed as warnings in the terminal and/or browser console.                                                                                                                                       |
| ESLINT_NO_DEV_ERRORS      |   ✅ Used   | 🚫 Ignored | Convert ESLint errors to warnings during development, hiding them from the error overlay.                                                                                                                                                                                                             |
| DISABLE_ESLINT_PLUGIN     |   ✅ Used   |  ✅ Used   | Completely disable the [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin).                                                                                                                                                                                             |
| DISABLE_NEW_JSX_TRANSFORM |   ✅ Used   |  ✅ Used   | Disable (`true`) the new JSX transform introduced in React 17 and backported to React 16.14.0, 15.7.0, and 0.14.10. New projects have this enabled by default, but you may need to disable it in existing projects if you can't upgrade React.                                                        |

Remember to experiment with these configurations, as it allows you to tailor your React application according to your specific requirements.

## Advanced Configuration in Create React App

Welcome to the world of advanced configurations in Create React App! 🚀 In this guide, we'll dive deeper into the powerful features and options available to fine-tune your React projects. Don't worry; we'll make sure it's easy to understand, even for beginners!

## What is Create React App?

For those who are new to Create React App (CRA), it's a fantastic tool that helps you kickstart your React projects without getting bogged down in complex setup processes. CRA abstracts away the configuration, allowing you to focus on building amazing React applications right from the get-go.

## Customizing the Configuration

CRA provides a way to customize its configuration without ejecting your project. Ejecting means you'd have to deal with all the build tools and configurations yourself, which can be overwhelming for beginners. So, let's look at how to customize the configuration while staying within the comfort zone of CRA.

### Environment Variables

Environment variables are super handy for managing various settings in your app. By default, CRA supports `.env` files, but you can create environment-specific files like `.env.development`, `.env.production`, etc.

```bash
# .env.development
REACT_APP_API_URL="https://api.dev.example.com"
```

Now, you can access the variable like this:

```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

### Adding Webpack Plugins

Webpack is the magic behind CRA, and you can extend it with plugins. For example, let's add the "Bundle Analyzer" plugin to visualize your bundle's size:

```javascript
// In your react-scripts version 5.0.0+ or higher, you can use the following syntax in the 'webpack.config.js'
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Inside your 'webpack.config.js' module.exports object, add this plugin to the 'plugins' array
module.exports = {
  // ... other config options ...
  plugins: [
    // ... other plugins ...
    new BundleAnalyzerPlugin(),
  ],
};
```

### Rewriting the Webpack Config

Need more control over the Webpack configuration? CRA offers a simple way to extend the config directly:

```javascript
// In your react-scripts version 4.0.0+ or higher, you can use the following syntax in the 'craco.config.js'
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add your custom webpack config here
      webpackConfig.optimization.minimize = true;
      return webpackConfig;
    },
  },
};
```

### Adding Babel Plugins

To further enhance your app's capabilities, you can add Babel plugins to transform your code. For example, let's add the "transform-class-properties" plugin:

```bash
npm install --save-dev @babel/plugin-proposal-class-properties
```

Then, create a `.babelrc` file in the root of your project:

```json
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

Now you can use class properties in your components:

```javascript
class MyClassComponent extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
}
```

## Conclusion

Congratulations! You've taken your first steps into the exciting world of advanced configuration in Create React App. Now you can customize your projects, add plugins, and take control of your development environment with confidence.

Remember, the power of customization comes with great responsibility. Always experiment with caution and keep an eye on the official documentation for the latest updates and best practices. Happy coding! 🎉