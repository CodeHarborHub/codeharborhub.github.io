---
id: lesson-2
title: "Working with SOAP"
sidebar_label: Working with SOAP
sidebar_position: 2
description: "Learn Working with SOAP in php"
tags: [courses,Advance-level,Introduction]
---  
   

SOAP (Simple Object Access Protocol) is a protocol for exchanging structured information in web services. PHP provides the `SoapClient` and `SoapServer` classes to work with SOAP.

**Creating a SOAP Server:**

```php
<?php
class Calculator {
    public function add($a, $b) {
        return $a + $b;
    }

    public function subtract($a, $b) {
        return $a - $b;
    }
}

$server = new SoapServer(null, ['uri' => "http://localhost/soap-server"]);
$server->setClass('Calculator');
$server->handle();
?>
```

**Creating a SOAP Client:**

```php
<?php
$client = new SoapClient(null, [
    'location' => "http://localhost/soap-server",
    'uri' => "http://localhost/soap-server",
    'trace' => 1
]);

try {
    $result = $client->add(2, 3);
    echo "Result of addition: $result <br>";

    $result = $client->subtract(5, 2);
    echo "Result of subtraction: $result <br>";
} catch (SoapFault $e) {
    echo "Error: {$e->getMessage()}";
}
?>
```

###  Handling API Authentication (OAuth, JWT)

**OAuth:** OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets.

**JWT (JSON Web Tokens):** JWT is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object.

**Generating JWT in PHP:**

```php
<?php
require 'vendor/autoload.php';
use Firebase\JWT\JWT;

$key = "your_secret_key";
$payload = [
    'iss' => "http://your-domain.com",
    'iat' => time(),
    'exp' => time() + (60*60), // 1 hour expiration
    'uid' => 1
];

$jwt = JWT::encode($payload, $key);
echo "JWT: " . $jwt;
?>
```

**Verifying JWT in PHP:**

```php
<?php
require 'vendor/autoload.php';
use Firebase\JWT\JWT;

$key = "your_secret_key";
$jwt = $_GET['jwt'];

try {
    $decoded = JWT::decode($jwt, $key, array('HS256'));
    print_r((array)$decoded);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
``` 

:::tip
- Use RESTful APIs for simplicity and scalability in web services.
- Utilize transactions to ensure data integrity during complex database operations.
- Implement OAuth and JWT for secure API authentication and authorization.
- Leverage SOAP for enterprise-level web services requiring strong protocol adherence.
- Keep your API endpoints stateless and ensure proper error handling.
:::