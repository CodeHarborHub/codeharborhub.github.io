---
id: jekyll-configuration
title: Jekyll Configuration
sidebar_label: Jekyll Configuration
sidebar_position: 4
tags: [jekyll, configuration]
description: Learn how to configure your Jekyll site using the `_config.yml` file to customize settings and behavior.
---

Jekyll uses a `_config.yml` file for configuration, where you can set various options for your site. This file is essential for customizing your site's behavior, appearance, and functionality.

### Key Configuration Options

1. **Site Settings:**
``yaml
title: My Awesome Site
description: >- # this means to ignore newlines until "baseurl:"
  This is my awesome website built with Jekyll.
baseurl: "" # the subpath of your site, e.g. /blog
url: "http://example.com" # the base hostname & protocol for your site
```

2. **Build Settings:**
```yaml
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
```

### Conclusion

The `_config.yml` file is crucial for customizing your Jekyll site. By modifying this file, you can easily change the behavior and appearance of your site. Whether you need to update the site title, add plugins, or adjust markdown settings,` _config.yml` provides a centralized location for these configurations, simplifying site management and customization.