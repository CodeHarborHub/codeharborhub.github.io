---
id: lesson-2
title: "Operators in PHP"
sidebar_label:  Operators
sidebar_position: 2
description: "Learn Operators in PHP"
tags: [courses,beginner-level,php,Introduction]
---   

PHP supports several types of operators:

##### Arithmetic Operators
- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Modulus: `%`
- Exponentiation: `**`

```php
<?php
  $a = 10;
  $b = 3;
  
  echo $a + $b; // Outputs: 13
  echo $a - $b; // Outputs: 7
  echo $a * $b; // Outputs: 30
  echo $a / $b; // Outputs: 3.3333333333333
  echo $a % $b; // Outputs: 1
  echo $a ** $b; // Outputs: 1000
?>
```

##### Comparison Operators
- Equal: `==`
- Identical: `===`
- Not equal: `!=` or `<>`
- Not identical: `!==`
- Greater than: `>`
- Less than: `<`
- Greater than or equal to: `>=`
- Less than or equal to: `<=`

```php
<?php
  $a = 10;
  $b = 20;
  
  var_dump($a == $b); // Outputs: bool(false)
  var_dump($a != $b); // Outputs: bool(true)
  var_dump($a < $b);  // Outputs: bool(true)
  var_dump($a >= $b); // Outputs: bool(false)
?>
```

##### Logical Operators
- And: `&&` or `and`
- Or: `||` or `or`
- Not: `!`

```php
<?php
  $a = true;
  $b = false;
  
  var_dump($a && $b); // Outputs: bool(false)
  var_dump($a || $b); // Outputs: bool(true)
  var_dump(!$a);      // Outputs: bool(false)
?>
```

##### Assignment Operators
- Assignment: `=`
- Addition assignment: `+=`
- Subtraction assignment: `-=`
- Multiplication assignment: `*=`
- Division assignment: `/=`
- Modulus assignment: `%=`

```php
<?php
  $a = 10;
  $b = 20;
  
  $a += $b; // $a = $a + $b; Outputs: $a = 30
  $a -= $b; // $a = $a - $b; Outputs: $a = 10
  $a *= $b; // $a = $a * $b; Outputs: $a = 200
  $a /= $b; // $a = $a / $b; Outputs: $a = 10
  $a %= $b; // $a = $a % $b; Outputs: $a = 10
?>
```

### Example PHP Script with Output

```php
<?php 
  
  // Data types and variables
  $greeting = "Welcome to PHP!";
  $year = 2024;
  $pi = 3.14159;
  $isLearning = true;
  $colors = array("red", "green", "blue");
  
  // Constants
  define("SITE_URL", "https://www.example.com");
  
  // Operators
  $a = 10;
  $b = 5;
  $sum = $a + $b;
  $isEqual = ($a == $b);
  $isAnd = ($a > 0 && $b > 0);
  $a += $b; // $a is now 15
  
  // Output results
  echo "<p>Greeting: $greeting</p>";
  echo "<p>Year: $year</p>";
  echo "<p>Pi: $pi</p>";
  echo "<p>Is Learning: " . ($isLearning ? "true" : "false") . "</p>";
  echo "<p>Colors: " . implode(", ", $colors) . "</p>";
  echo "<p>Site URL: " . SITE_URL . "</p>";
  echo "<p>Sum: $sum</p>";
  echo "<p>Is Equal: " . ($isEqual ? "true" : "false") . "</p>";
  echo "<p>Logical AND: " . ($isAnd ? "true" : "false") . "</p>";
?>
```
 
<BrowserWindow>
  <div>
    <h1>Hello, World!</h1>
    <p>Greeting: Welcome to PHP!</p>
    <p>Year: 2024</p>
    <p>Pi: 3.14159</p>
    <p>Is Learning: true</p>
    <p>Colors: red, green, blue</p>
    <p>Site URL: https://www.example.com</p>
    <p>Sum: 15</p>
    <p>Is Equal: false</p>
    <p>Logical AND: true</p>
  </div>
</BrowserWindow>

:::tip
- Always use `<?php` to open PHP code blocks.
- Variable names are case-sensitive and must start with a `$`.
- Use `echo` or `print` to output data to the browser.
- Constants are defined using the `define()` function and are usually named in uppercase.
- Understand the different operators and their precedence to avoid logical errors in your code.
:::