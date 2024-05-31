---
id: getstart-tailwind
title: Getting Started with Tailwind CSS
sidebar_label: Getting Started
sidebar_position: 2
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

In this guide, we will walk through the steps required to get started with Tailwind CSS, from installation to basic usage.

## Installation

### Using npm

The recommended way to install Tailwind CSS is via npm. If you don't have npm installed, you can download and install it from [npm's official website](https://www.npmjs.com/).

1. Initialize your project:

   ```bash
   npm init -y

   ```

2. Install Tailwind CSS via npm:

```bash
npm install tailwindcss
```

3. Generate a configuration file:

```bash
npx tailwindcss init
```

### Using CDN

If you prefer not to use npm, you can include Tailwind CSS directly from a CDN. Add the following ` <link>` tag to the ` <head>` of your HTML file:

```bash
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="
```

Basic Usage
Once you have Tailwind CSS installed, you can start using its utility classes in your HTML.

Example
Here is a simple example of a responsive card using Tailwind CSS:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Tailwind CSS Card</title>
</head>
<body class="bg-gray-100">
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" src="/path/to/image.jpg" alt="An example image">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card title</div>
        <p class="mt-2 text-gray-500">This is an example of a card using Tailwind CSS. You can replace this text with your own.</p>
      </div>
    </div>
  </div>
</body>
</html>
```
