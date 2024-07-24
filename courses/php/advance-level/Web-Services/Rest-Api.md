---
id: lesson-1
title: "RESTful APIs"
sidebar_label: RESTful APIs
sidebar_position: 1
description: "Learn RESTful APIs in PHP"
tags: [courses,Advance-level,Introduction]
---  
  

REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, usually HTTP. RESTful APIs use standard HTTP methods like GET, POST, PUT, DELETE, and PATCH.

:::important
**REST API Principles:**
- **Stateless:** Each request from a client to a server must contain all the information needed to understand and process the request.
- **Uniform Interface:** Simplifies and decouples the architecture, allowing each part to evolve independently.
- **Resource-Based:** Resources (data) are identified by URIs (Uniform Resource Identifiers).
- **HTTP Methods:** Use HTTP methods explicitly (GET for reading, POST for creating, PUT for updating, DELETE for deleting).
:::

### Creating and Consuming REST APIs with PHP

**Creating a REST API with PHP:**

```php
<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

switch ($method) {
    case 'GET':
        handleGetRequest($request);
        break;
    case 'POST':
        handlePostRequest();
        break;
    case 'PUT':
        handlePutRequest($request);
        break;
    case 'DELETE':
        handleDeleteRequest($request);
        break;
    default:
        echo json_encode(["message" => "Invalid request method"]);
        break;
}

function handleGetRequest($request) {
    if (isset($request[0]) && $request[0] == 'users') {
        $userId = isset($request[1]) ? $request[1] : null;
        echo json_encode(["message" => "Fetching user data", "userId" => $userId]);
    }
}

function handlePostRequest() {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(["message" => "Creating user", "data" => $data]);
}

function handlePutRequest($request) {
    $userId = isset($request[1]) ? $request[1] : null;
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(["message" => "Updating user data", "userId" => $userId, "data" => $data]);
}

function handleDeleteRequest($request) {
    $userId = isset($request[1]) ? $request[1] : null;
    echo json_encode(["message" => "Deleting user", "userId" => $userId]);
}
?>
```

**Consuming a REST API with PHP:**

```php
<?php
$url = "https://jsonplaceholder.typicode.com/posts";
$response = file_get_contents($url);
$data = json_decode($response, true);

foreach ($data as $post) {
    echo "Title: " . $post['title'] . "<br>";
    echo "Body: " . $post['body'] . "<br><br>";
}
?>
```
