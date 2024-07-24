---
id: lesson-1
title: "Basic Syntax in PHP"
sidebar_label:  Basic Syntax
sidebar_position: 1
description: "Basic Syntax in PHP"
tags: [courses,beginner-level,php,Introduction]
---  

#### PHP Tags and Basic Syntax
- PHP scripts are embedded within HTML using PHP tags: `<?php ... ?>`.
- The script starts with `<?php` and ends with `?>`.

```php
<?php 
  echo "Hello, World!"; // Output a string
?>
```
<BrowserWindow>
  <div> 
     <h1> Hello, World!</h1>
  </div>
</BrowserWindow>

#### Data Types and Variables
:::note
PHP supports several data types:
- **String**
- **Integer**
- **Float (double)**
- **Boolean**
- **Array**
- **Object**
- **NULL**
- **Resource**

Variables in PHP start with a `$` sign followed by the variable name.
:::

```php
<?php
  $stringVar = "Hello, World!";
  $intVar = 42;
  $floatVar = 3.14;
  $boolVar = true;
  $arrayVar = array(1, 2, 3);
  $nullVar = NULL;
  
  echo $stringVar;
?>
```

#### Constants
Constants are defined using the `define()` function and cannot be changed once set.

```php
<?php
  define("GREETING", "Welcome to PHP!");
  echo GREETING; // Outputs: Welcome to PHP!
?>
```
<BrowserWindow>
  <div> 
     <h1> Welcome to PHP!</h1>
  </div>
</BrowserWindow>
