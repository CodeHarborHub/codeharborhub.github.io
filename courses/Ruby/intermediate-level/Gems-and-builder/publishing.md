---
id: lesson-2
title: "Creating and Publishing Your Own Gem"
sidebar_label: Publish Gem
sidebar_position: 2
description: "Creating and Publishing Your Own Gem"
tags: [courses,intermediate-level,Ruby,Introduction]
---  
 

- **Creating a Gem**:
  1. **Setup**: Install Bundler and create a new gem skeleton.
     ```bash
     gem install bundler
     bundler gem my_gem
     ```
  2. **Edit the Gem Specification**: Modify the `.gemspec` file with your gem’s details.
  3. **Add Code**: Place your Ruby code in the `lib/` directory.
  4. **Build the Gem**:
     ```bash
     gem build my_gem.gemspec
     ```
  5. **Install Locally** (optional):
     ```bash
     gem install ./my_gem-0.1.0.gem
     ```

- **Publishing Your Gem**:
  - **Sign Up**: Create an account on [RubyGems.org](https://rubygems.org).
  - **Push Your Gem**:
    ```bash
    gem push my_gem-0.1.0.gem
    ```

#### **Managing Dependencies with Bundler**

- **What is Bundler?**
  - Bundler manages gem dependencies for Ruby projects, ensuring that the exact versions of gems required are installed.

- **Setting Up Bundler**:
  1. **Create a `Gemfile`**: List your gem dependencies.
     ```ruby
     source 'https://rubygems.org'
     gem 'nokogiri'
     gem 'rails', '~> 6.1.0'
     ```
  2. **Install Gems**:
     ```bash
     bundle install
     ```

:::tip

1. **Use `bundle exec`**:
   - Always use `bundle exec` to run commands that depend on your project’s gems to ensure you're using the correct gem versions.

2. **Keep Your Gems Up-to-Date**:
   - Regularly update your gems and test your application to ensure compatibility with newer versions.

3. **Be Careful with Version Constraints**:
   - Use version constraints in your `Gemfile` to avoid unexpected behavior from gem updates. For example, `gem 'rails', '~> 6.1.0'` ensures that only patch-level updates are allowed.
:::

- **Using Bundler**:
  - **Check Dependencies**:
    ```bash
    bundle show
    ```
  - **Update Gems**:
    ```bash
    bundle update
    ```

- **Running Commands**:
  - **Run a Ruby script with Bundler**:
    ```bash
    bundle exec ruby my_script.rb
    ```



:::important

1. **Gem Dependencies**:
   - Clearly define your gem dependencies in the `Gemfile` to maintain consistency across different environments.

2. **Gem Security**:
   - Regularly audit your gem dependencies for vulnerabilities using tools like [bundler-audit](https://github.com/rubysec/bundler-audit).

3. **Gem Documentation**:
   - Ensure your gem includes adequate documentation and usage instructions to help others understand how to use it effectively.
:::