---
id: using-themes
title: Using Themes
sidebar_label: Using Themes
sidebar_position: 6
tags: [jekyll, themes]
description: Learn how to use and customize themes in Jekyll to enhance the look and feel of your site.
---

Jekyll themes allow you to quickly change the appearance of your site without having to design it from scratch. Themes provide a consistent look and feel across all pages and posts.

### Steps to Use a Theme

1. **Choose a Theme:** Browse themes on Jekyll Themes or GitHub.

2. **Add the Theme to Your Site:**

```yaml
# _config.yml
theme: jekyll-theme-minimal
```

3. **Install the Theme:**
```sh
bundle install
```

### Customizing a Theme

To customize a theme, you can override theme files by copying them into your site’s directory. For example, to customize the `_layouts/default.html` layout, copy it from the theme's gem to your local `_layouts` directory.

### Conclusion

Using themes in Jekyll simplifies the process of styling your site. You can quickly implement a professional design and further customize it to meet your needs, ensuring your site looks unique and polished.