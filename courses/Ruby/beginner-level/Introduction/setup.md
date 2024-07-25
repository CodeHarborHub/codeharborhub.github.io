---
id: lesson-2
title: "Setting Up the Development Environment"
sidebar_label: Setting Up
sidebar_position: 2
description: "Learn Setting Up the Development Environment"
tags: [courses,beginner-level,Ruby,Introduction]
--- 
     

**Step 1: Install Ruby**

To install Ruby, you can use a version manager like RVM (Ruby Version Manager) or rbenv. Here we'll use RVM.

**Install RVM:**

```bash
\curl -sSL https://get.rvm.io | bash -s stable
```

**Install Ruby:**

```bash
rvm install ruby
rvm use ruby --default
```

**Step 2: Verify Installation**

```bash
ruby -v
# This should output the Ruby version, e.g., ruby 3.1.2
```

### Writing and Running Your First Ruby Program

**Step 1: Write the Program**

Create a file named `hello_world.rb` and open it in your favorite text editor. Add the following code:

```ruby
# hello_world.rb
puts 'Hello, World!'
```

**Step 2: Run the Program**

Open your terminal and navigate to the directory where `hello_world.rb` is located. Run the program using the following command:

```bash
ruby hello_world.rb
``` 

**Output:**
 ```bash
   Hello, World!
 ```
 