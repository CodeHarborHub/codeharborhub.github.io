---
id: lesson-2
title: "Methods Dynamically"
sidebar_label: Dynamic Method 
sidebar_position: 2
description: "Learn Methods Dynamically in Ruby"
tags: [courses,intermediate-level,Ruby,Introduction]
---  
 

#### **3. Defining Methods Dynamically**
- You can define methods dynamically using `define_method`. This is useful for creating methods based on runtime conditions or data.

  **Example**:
  ```ruby
  class DynamicClass
    define_method(:dynamic_method) do |arg|
      "Dynamic method called with #{arg}"
    end
  end

  obj = DynamicClass.new
  puts obj.dynamic_method("example")
  ```
  **Output**:
  ```bash
  Dynamic method called with example
  ```

#### **4. Understanding Hooks**
- Hooks are special methods that are triggered by specific events, such as including or inheriting modules.

  **Example**:
  ```ruby
  module HookExample
    def self.included(base)
      puts "#{base} included HookExample"
    end

    def self.extended(base)
      puts "#{base} extended HookExample"
    end
  end

  class TestClass
    include HookExample
  end

  class AnotherClass
    extend HookExample
  end
  ```
  **Output**:
  ```bash
  TestClass included HookExample
  AnotherClass extended HookExample
  ```

:::tip
1. **Use Metaprogramming Sparingly**:
   - Metaprogramming can lead to code that’s hard to understand and maintain. Apply it only when it simplifies or adds significant value to your code.

2. **Document Metaprogramming Code**:
   - Clearly document why and how metaprogramming techniques are used. This will help others (and yourself) understand the purpose and mechanics of your code.

3. **Handle Errors Gracefully**:
   - When using methods like `method_missing`, ensure you handle unexpected method calls or arguments gracefully to prevent runtime errors.
:::