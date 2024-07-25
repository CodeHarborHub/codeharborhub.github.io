---
id: lesson-1
title: "Gems and Bundler in Ruby"
sidebar_label: Intro & Uses
sidebar_position: 1
description: "Gems and Bundler in Ruby"
tags: [courses,intermediate-level,Ruby,Introduction]
---  
  

**RubyGems** is a package manager for Ruby, allowing you to manage libraries (gems) and their dependencies. **Bundler** is a tool that helps manage gem dependencies for your Ruby projects.

#### **1. Introduction to RubyGems**

- **What is RubyGems?**
  - RubyGems is the standard way to distribute and manage Ruby libraries. Each library is packaged into a gem, which is a compressed file containing Ruby code, metadata, and a gemspec file.

:::note
- **Common Commands**:
  - **`gem install <gem_name>`**: Install a gem.
  - **`gem list`**: List installed gems.
  - **`gem update`**: Update installed gems.
  - **`gem uninstall <gem_name>`**: Uninstall a gem.
:::

#### **2. Installing and Using Gems**

- **Installation**:
  - To install a gem, use the `gem install` command followed by the gem name.

  **Example**:
  ```bash
  gem install nokogiri
  ```

- **Using Gems in Your Code**:
  - To use a gem in your Ruby code, require it at the beginning of your script.

  **Example**:
  ```ruby
  require 'nokogiri'

  doc = Nokogiri::HTML("<html><body>Hello World</body></html>")
  puts doc.at('body').text
  ```
  **Output**:
  ```bash
  Hello World
  ```