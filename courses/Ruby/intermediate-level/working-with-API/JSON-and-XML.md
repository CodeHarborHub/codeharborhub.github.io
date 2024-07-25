---
id: lesson-2
title: "Parsing JSON and XML"
sidebar_label: JSON and XML
sidebar_position: 2
description: "Learn JSON and XML"
tags: [courses,intermediate-level,Ruby,Introduction]
---   
 

**Parsing JSON**:
- JSON is a common format for API responses. Ruby provides a built-in `JSON` library for parsing.

  **Example**:
  ```ruby
  require 'json'

  json_string = '{"name": "John", "age": 30}'
  parsed_data = JSON.parse(json_string)

  puts parsed_data['name'] # Output: John
  ```

**Parsing XML**:
- XML parsing can be done using libraries like `Nokogiri`.

  **Example**:
  ```ruby
  require 'nokogiri'

  xml_string = '<person><name>John</name><age>30</age></person>'
  doc = Nokogiri::XML(xml_string)

  puts doc.at_xpath('//name').text # Output: John
  ```

#### **Creating a Simple REST API**

- A simple REST API can be created using the `sinatra` gem.

  **Example**:
  ```ruby
  require 'sinatra'
  require 'json'

  get '/api/hello' do
    content_type :json
    { message: 'Hello, world!' }.to_json
  end

  # To run: `ruby app.rb`
  ```

  **Test with `curl`**:
  ```bash
  curl http://localhost:4567/api/hello
  ```

  **Output**:
  ```bash
  {"message":"Hello, world!"}
  ```

#### **Consuming Third-Party APIs**

- Use HTTP clients like `Net::HTTP` or `HTTParty` to interact with third-party APIs.

  **Example with `HTTParty`**:
  ```ruby
  require 'httparty'

  response = HTTParty.get('https://api.github.com/users/octocat')
  user = response.parsed_response

  puts "User: #{user['login']}"
  puts "Bio: #{user['bio']}"
  ```

  **Output**:
  ```bash
  User: octocat
  Bio: A mysterious octocat
  ```

:::tip
1. **Check API Documentation**:
   - Always refer to the API documentation for details on endpoints, parameters, and response formats.

2. **Authentication**:
   - Many APIs require authentication (e.g., API keys, OAuth). Ensure you include necessary credentials in your requests.

3. **Data Parsing**:
   - Be prepared to handle and parse different data formats (JSON, XML) based on the API's response.

4. **Handle Errors Gracefully**:
   - Implement error handling to manage issues such as network errors or invalid responses.

5. **Respect Rate Limits**:
   - Be aware of rate limits set by the API provider to avoid being blocked.
::: 