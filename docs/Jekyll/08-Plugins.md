---
id: jekyll-plugins
title: Jekyll Plugins
sidebar_label: Jekyll Plugins
sidebar_position: 8
tags: [jekyll, plugins]
description: Discover how to extend your Jekyll site’s functionality using plugins.
---

Jekyll plugins allow you to extend the functionality of your site beyond the built-in features. Plugins can handle tasks such as generating sitemaps, managing assets, and more.

### Installing Plugins

1. **Add the Plugin to Your `Gemfile`:**
```ruby
gem "jekyll-sitemap"
```

2. **Update Your Bundle:**
```sh
bundle install
```

3. **Enable the Plugin in `_config.yml:`**
```yaml
plugins:
  - jekyll-sitemap
```

### Popular Plugins
1. **jekyll-seo-tag:** Adds SEO tags to your site.
2. **jekyll-paginate:** Provides pagination for posts.
3. **jekyll-feed:** Generates an RSS feed for your posts

### Conclusion

Jekyll plugins are a great way to enhance your site with additional features. By leveraging plugins, you can save time and effort while adding powerful capabilities to your static site.