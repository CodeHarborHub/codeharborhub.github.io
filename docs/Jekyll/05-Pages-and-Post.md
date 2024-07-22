---
id: creating-pages-and-posts
title: Creating Pages and Posts
sidebar_label: Creating Pages and Posts
sidebar_position: 5
tags: [jekyll, pages, posts]
description: Learn how to create pages and posts in Jekyll to add content to your site.
---

Creating content in Jekyll involves creating pages and posts. Pages are used for static content, while posts are typically used for blog entries.

### Creating Pages

1. **Create a New Page:**
```sh
touch about.md
```
- Add the following front matter to the page:

markdown
---
layout: page
title: About
permalink: /about/
---


2. **Add Content:**

markdown
# About Me
This is the about page of my Jekyll site.


### Creating Posts

1. **Create a New Post:**
```sh
touch _posts/2024-07-20-my-first-post.md
```

- Add the following front matter to the post:

```markdown
---
layout: post
title: "My First Post"
date: 2024-07-20 12:00:00 -0400
categories: blog
---
```

2. **Add Content:**

```markdown
# Welcome
This is my first blog post on my new Jekyll site.
```

### Conclusion

Creating pages and posts in Jekyll is straightforward. By using the appropriate front matter, you can easily add and organize content on your site. Whether you're building a blog, a portfolio, or a documentation site, Jekyll's simple file-based structure makes content management intuitive and efficient.