---
id: php-constants
title: PHP - Constants
sidebar_label: PHP - Constants
sidebar_position: 13
tags: [PHP, constants]
---

# PHP - Constants

## Introduction to Constants

A constant in PHP is a name or identifier for a value that remains unchanged during the execution of the script. Constants are case-sensitive by default and are typically named using uppercase letters.

### Valid and Invalid Constant Names

- **Valid constant names**:
  ```php
  define("ONE", "first thing");
  define("TWO2", "second thing");
  define("THREE_3", "third thing");
  define("__THREE__", "third value");
  ```
- **Invalid constant names**:
  ```php
  define("2TWO", "second thing");
  ```

## Difference between Constants and Variables

- Constants are defined using `define()` and cannot be redefined or undefined.
- Constants have global scope and can be accessed anywhere in the script.

## Defining a Named Constant

The `define()` function is used to define constants in PHP.

```php
define(string $const_name, mixed $value, bool $case = false): bool
```

- `$const_name`: The name of the constant.
- `$value`: The value of the constant (scalar or array).
- `$case`: Optional. If set to true, the constant will be case-insensitive.

### Example

```php
<?php  
   define("CONSTANT", "Hello world.");

   echo CONSTANT; // Outputs: Hello world.
   // echo Constant; // Generates an error
?>
```

## Using the `constant()` Function

You can also use the `constant()` function to retrieve the value of a constant.

```php
constant(string $name): mixed
```

### Example

```php
<?php
   define("MINSIZE", 50);

   echo MINSIZE; // Outputs: 50
   echo constant("MINSIZE"); // Outputs: 50
?>
```

## Using the `defined()` Function

The `defined()` function checks if a constant is defined.

```php
defined(string $name): bool
```

### Example

```php
<?php
   define('MAX', 100);

   if (defined('MAX')) {
      echo MAX; // Outputs: 100
   }
?>
```

## Getting All Defined Constants

PHP provides the `get_defined_constants()` function to retrieve all defined constants.

### Example

```php
<?php
   $constants = get_defined_constants(true);
   echo "<pre>";
   print_r($constants);
   echo "</pre>";
?>
```

This will display an associative array of all defined constants and their values.

This concludes the overview of constants in PHP.