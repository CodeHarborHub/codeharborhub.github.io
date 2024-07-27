---
id: using-the-public-folder
title: Unleash the Magic of the Public Folder
sidebar_label: Using the Public Folder
sidebar_position: 8
tags: [react, create-react-app, public-folder, assets, react-scripts, react-dom, react-app]
description: "Learn how to use the public folder in a Create React App project. Customize the HTML file and add assets directly to the public folder to enhance your React application."
---

:::tip info
Attention, brave adventurers! This feature requires `react-scripts@0.5.0` or higher.
:::

## Unveiling the Mysteries of HTML

Prepare to embark on a journey of HTML customization! Within the sacred `public` folder lies the fabled HTML file, ready to be molded to your will. Feel free to tweak it to your heart's content, whether it's altering the page title or adding [enchanting meta tags](../back-end-integration/title-and-meta-tags.md). And fear not, for the build process shall automatically incorporate the compiled code into this mystical artifact.

## Discover the Art of Asset Conjuring

While we typically encourage importing assets through JavaScript for their magical benefits (minification, bundling, and caching), there exists an alternate path—an escape hatch—to add assets directly to the `public` folder.

Here's the secret: any file you place within the `public` folder will retain its original form, untampered by the sorcery of webpack. To summon these assets, you must invoke the powers of an ancient incantation: the `PUBLIC_URL` environment variable.

For instance, within `index.html`, witness the power of the `PUBLIC_URL`:

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

But beware! Only the files within the `public` folder can be accessed through this mystical prefix. Should you require a file from `src` or `node_modules`, you must duplicate it within the `public` folder, thus clearly stating your intention to include it in the grand build.

During the sacred ritual of `npm run build`, Create React App shall infuse `%PUBLIC_URL%` with the correct absolute path. This ensures your project remains robust, even amidst the treacherous realm of client-side routing or when hosted at a non-root URL.

To wield the power of `PUBLIC_URL` in your JavaScript spells, simply invoke the `process.env.PUBLIC_URL` incantation:

```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally, we recommend importing assets using `import`, as described in the "Adding Images and Fonts" section above.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

Yet, be warned of the perils that await you on this path:

- None of the files in the `public` folder shall undergo post-processing or minification.
- Beware the wrath of missing files, for they shall manifest as dreaded 404 errors upon unsuspecting users.
- The filenames of your results shall remain unchanged, devoid of the mighty content hashes. You must add query arguments or rename them manually whenever they change.

## Embracing the Arcane Knowledge

The `public` folder, though an unconventional ally, shines in rare scenarios where alternative methods falter:

- When you seek to manifest a file with a specific name in the build output, such as the elusive [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest).
- In the presence of a multitude of images, demanding dynamic path references that push the boundaries of mortal comprehension.
- Should you yearn to include a humble script like [`pace.js`](https://codebyzach.github.io/pace/docs/) outside the confines of bundled code.
- And there are some libraries, resistant to the charms of webpack, that leave you no choice but to beckon them with a humble `<script>` tag.

However, dear adventurer, if you dare to add a `<script>` that unleashes global variables, turn your gaze towards the topic of [Using Global Variables](../building-your-app/using-global-variables.md) in the next section. There, you shall find wisdom on how to summon and bind these volatile forces.

With this newfound understanding, go forth and weave the magic of the `public` folder into your React creations, for you are now equipped to conquer the realms of customization and enchantment!

May your code be ever elegant and your journeys forever filled with whimsy