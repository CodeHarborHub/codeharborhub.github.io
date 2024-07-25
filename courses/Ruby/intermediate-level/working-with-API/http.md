---
id: lesson-1
title: "Working with APIs in Ruby"
sidebar_label: Dynamic Method 
sidebar_position: 1
description: "Learn Handling APIs in Ruby"
tags: [courses,intermediate-level,Ruby,Introduction]
---   

APIs (Application Programming Interfaces) allow different software applications to communicate with each other. Ruby provides several libraries for making HTTP requests and handling API responses.

#### **1. Making HTTP Requests**

**Using `Net::HTTP`**:
- `Net::HTTP` is Ruby's standard library for making HTTP requests.

  **Example**:
  ```ruby
  require 'net/http'
  require 'json'

  url = URI.parse('https://jsonplaceholder.typicode.com/posts/1')
  response = Net::HTTP.get_response(url)
  data = JSON.parse(response.body)

  puts data
  ```

  **Output**:
  ```bash
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit...nesciunt"
  }
  ```

**Using `HTTParty`**:
- `HTTParty` is a gem that simplifies making HTTP requests.

  **Example**:
  ```ruby
  require 'httparty'

  response = HTTParty.get('https://jsonplaceholder.typicode.com/posts/1')
  data = response.parsed_response

  puts data
  ```

  **Output**:
  ```bash
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit...nesciunt"
  }
  ```