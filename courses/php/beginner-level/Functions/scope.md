---
id: lesson-2
title: "Variable Scope (Global vs. Local)"
sidebar_label:  Variable Scope  
sidebar_position: 2
description: "Learn Variable Scope (Global vs. Local) in PHP"
tags: [courses,beginner-level,php,Introduction]
---    

Variables declared inside a function are local to that function. To access a global variable inside a function, the `global` keyword is used.

```php
<?php
$globalVar = "I'm global!";

function testScope() {
    global $globalVar;
    $localVar = "I'm local!";
    echo $globalVar; // Accessing global variable
    echo $localVar;  // Accessing local variable
}

testScope();

// Uncommenting the line below will cause an error as $localVar is not defined in the global scope
// echo $localVar;
?>
```

#### Output:
```plaintext
I'm global!I'm local!
```

### Built-in PHP Functions

PHP has many built-in functions for different purposes. Here are some examples:

- `strlen()`: Returns the length of a string.
- `array_merge()`: Merges one or more arrays.
- `date()`: Formats a local date and time.

```php
<?php
// String length
echo strlen("Hello, World!"); // Output: 13

// Array merge
$array1 = array("red", "green");
$array2 = array("blue", "yellow");
$result = array_merge($array1, $array2);
print_r($result); // Output: Array ( [0] => red [1] => green [2] => blue [3] => yellow )

// Date formatting
echo date("Y-m-d H:i:s"); // Output: current date and time in Y-m-d H:i:s format
?>
```

### Example

```php
<?php
// Defining and calling a function
function add($a, $b) {
    return $a + $b;
}

$result = add(5, 3);
echo "Sum: $result<br>";

// Function with local and global variables
$globalVar = 20;

function multiply($num) {
    global $globalVar;
    $localVar = 2;
    return $num * $localVar * $globalVar;
}

echo "Product: " . multiply(5) . "<br>";

// Using built-in functions
echo "String length: " . strlen("PHP Functions") . "<br>";

$array1 = array("apple", "banana");
$array2 = array("cherry", "date");
$mergedArray = array_merge($array1, $array2);
echo "Merged Array: ";
print_r($mergedArray);
echo "<br>";

echo "Current Date and Time: " . date("Y-m-d H:i:s") . "<br>";
?>
```

### Output

<BrowserWindow>
    <div>
        <p>Sum: 8</p>
        <p>Product: 200</p>
        <p>String length: 12</p>
        <p>Merged Array: Array ( [0] => apple [1] => banana [2] => cherry [3] => date )</p>
        <p>Current Date and Time: 2024-07-23 14:35:00</p>
    </div>
</BrowserWindow>

:::tip
- Always define functions before calling them in your script.
- Use meaningful names for your functions and variables to make your code readable.
- Remember to consider the scope of your variables and use the `global` keyword when necessary.
- Take advantage of PHP's rich set of built-in functions to simplify your code.
:::