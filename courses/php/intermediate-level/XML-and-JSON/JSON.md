---
id: lesson-2
title: "JSON Encoding and Decoding"
sidebar_label: JSON 
sidebar_position: 2
description: "Learn JSON Encoding and Decoding"
tags: [courses,intermediate-level,php,Introduction]
---  
 

**JSON Encoding:**

```php
<?php
$data = array(
    "name" => "John Doe",
    "age" => 30,
    "city" => "New York"
);

$jsonData = json_encode($data);
echo $jsonData;
?>
```

**JSON Decoding:**

```php
<?php
$jsonData = '{"name":"John Doe","age":30,"city":"New York"}';
$data = json_decode($jsonData, true);

echo "Name: " . $data['name'] . "<br>";
echo "Age: " . $data['age'] . "<br>";
echo "City: " . $data['city'] . "<br>";
?>
```

### Handling AJAX Requests

**AJAX Request with jQuery:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>AJAX Request</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <button id="loadData">Load Data</button>
    <div id="result"></div>

    <script>
        $(document).ready(function() {
            $('#loadData').click(function() {
                $.ajax({
                    url: 'data.php',
                    method: 'GET',
                    success: function(response) {
                        $('#result').html(response);
                    }
                });
            });
        });
    </script>
</body>
</html>
```

**PHP Script to Handle the AJAX Request (`data.php`):**

```php
<?php
$data = array(
    "name" => "John Doe",
    "age" => 30,
    "city" => "New York"
);

echo json_encode($data);
?>
```




:::tip
- Use SimpleXML for quick and easy XML parsing.
- For more complex XML manipulations, consider using the `DOMDocument` class.
- Use `json_encode()` and `json_decode()` for handling JSON data in PHP.
- Always validate and sanitize user input when handling AJAX requests to prevent security vulnerabilities.
- Make use of browser developer tools to debug and inspect AJAX requests and responses.
:::