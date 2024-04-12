---
id: adding-custom-environment-variables
title: Adding Custom Environment Variables
sidebar_label: Environment Variables
sidebar_position: 9
tags: [environment, variables, env, custom, create react app, react, react-scripts, node, node.js, npm, start, build, test, production, development, local, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret,]
keywords: [environment, variables, env, custom, create react app, react, react-scripts, node, node.js, npm, start, build, test, production, development, local, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret, sensitive, information, security, configuration, settings, dynamic, value, html, css, js, bundle, server, placeholders, dotenv, expand, server, client, runtime, embed, build-time, process, api, key, secret,]
description: Learn how to add custom environment variables to your Create React App, empowering your app to configure differently based on the environment in which it runs.
---

Welcome, aspiring Coders, to the enchanting world of React development! In this guide, we will explore the magical realm of custom environment variables and how they empower your React applications.

:::note
This feature is available with `react-scripts@0.2.3` and higher.
:::


## Introduction to Environment Variables

Environment variables are like magical keys that unlock hidden powers for your React app. They allow you to configure your app differently based on the environment in which it runs. With Create React App, you get two special environment variables by default: `NODE_ENV` and any variable starting with `REACT_APP_`.

:::caution Warning
Never store sensitive information like private API keys in your React app! Environment variables are embedded into the build, making them accessible to anyone inspecting your app's files.
:::

## Understanding Build-time Embedding

During the build process, Create React App embeds the environment variables into the static HTML/CSS/JS bundle. As a result, your app cannot access or change these variables at runtime. If you need dynamic values at runtime, you'd have to load HTML into memory on the server and replace placeholders. Alternatively, rebuild your app on the server each time the variables change.

## Creating Custom Environment Variables

To create custom environment variables, you must name them starting with `REACT_APP_`. Any other variables, except for `NODE_ENV`, will be ignored to prevent accidental exposure of private keys.

For instance, to define a variable `REACT_APP_API_KEY`, you can do it in two ways:

### Method 1: Shell Environment Variables (Temporary)

For a temporary solution during your current shell session:

#### Windows (cmd.exe)

```cmd
set "REACT_APP_API_KEY=your-api-key" && npm start
```

#### Windows (Powershell)

```Powershell
($env:REACT_APP_API_KEY = "your-api-key") -and (npm start)
```

#### Linux, macOS (Bash)

```sh
REACT_APP_API_KEY=your-api-key npm start
```

### Method 2: .env File (Permanent)

For permanent environment variables, create a file called `.env` in the root of your project and define your variables like this:

```
REACT_APP_API_KEY=your-api-key
```

:::tip
Environment variables defined in `.env` should be kept secret and not committed to source control.
:::

### Using Custom Environment Variables in Your App

Once you've defined your custom variables, you can access them in your code via `process.env`. For example, let's display the API key and the current environment in a component:

```jsx title="MyComponent.jsx"
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <p>Your API key: {process.env.REACT_APP_API_KEY}</p>
      <p>You are running in {process.env.NODE_ENV} mode.</p>
    </div>
  );
};

export default MyComponent;
```

During the build process, `process.env.REACT_APP_API_KEY` will be replaced with the actual value you defined in the environment variable. The value of `process.env.NODE_ENV` will be set automatically based on the build type: `'development'`, `'test'`, or `'production'`.

## Leveraging Environment Variables in the HTML

Starting with `react-scripts@0.9.0`, you can also use environment variables in `public/index.html`. For example:

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

Remember the same naming convention applies: the variable must start with `REACT_APP_`.

## More `.env` Files and Environment-specific Settings

From `react-scripts@1.0.0`, Create React App allows you to use different `.env` files for various environments:

- `.env`: Default file.
- `.env.local`: Local overrides for all environments except `test`.
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides for environment-specific settings.

When multiple `.env` files are present, they follow the priority order:

- `npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
- `npm run build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

Environment-specific variables serve as defaults if not explicitly set on the machine.

## Expanding Variables in `.env`

With `react-scripts@1.1.0` and higher, you can use variables already defined on your machine within your `.env` file using [dotenv-expand](https://github.com/motdotla/dotenv-expand). For example:

```
REACT_APP_VERSION=$npm_package_version
# or
REACT_APP_VERSION=${npm_package_version}
```

## Conclusion

You've now mastered the art of adding custom environment variables to your Create React App! These magical keys will help you configure your app in various environments while keeping sensitive information secure. Remember to handle secrets carefully and avoid committing them to source control.

Happy coding, and may your React apps enchant users across the realms of the web!
