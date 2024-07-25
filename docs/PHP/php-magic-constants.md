---
id: php-magic-constants
title: PHP - Magic Constants
sidebar_label: PHP - Magic Constants
sidebar_position: 14
tags: [PHP, magic constants]
---

# PHP - Magic Constants

## Introduction to Magic Constants

Magic constants in PHP are predefined constants that change based on their usage and are resolved at compile time. They are case insensitive and provide information about the current context of the script.

### List of Magic Constants

1. `__LINE__`: Returns the current line number in the file.
2. `__FILE__`: Returns the full path and filename of the file.
3. `__DIR__`: Returns the directory of the file.
4. `__FUNCTION__`: Returns the function name.
5. `__CLASS__`: Returns the class name.
6. `__METHOD__`: Returns the method name.
7. `__TRAIT__`: Returns the trait name.
8. `__NAMESPACE__`: Returns the current namespace name.

## Examples of Magic Constants

### `__LINE__`

```php
<?php
   $x = "Hello World";
   echo "$x. The current Line number is " . __LINE__ . ".";
?>
```
Output:
```
Hello World. The current Line number is 5.
```

### `__FILE__`

```php
<?php
   $x = "Hello World";
   echo "$x. Current PHP script name is " . __FILE__ . ".";
?>
```
Output:
```
Hello World. Current PHP script name is C:\xampp\htdocs\hello.php.
```

### `__DIR__`

```php
<?php
   $x = "Hello World";
   echo "$x. Directory of the Current PHP script name is " . __DIR__ . ".";
?>
```
Output:
```
Hello World. Directory of the Current PHP script name is C:\xampp\htdocs.
```

### `__FUNCTION__`

```php
<?php
   function hello(){    
      $x = "Hello World";  
      echo "$x. The function name is ". __FUNCTION__ . "";   
   } 
   hello();   
?>
```
Output:
```
Hello World. The function name is hello.
```

### `__CLASS__`

```php
<?php
   class MyClass {    
      public function __construct() {    
         echo "Inside the constructor of ". __CLASS__ . PHP_EOL;    
      }    
      function getClassName(){                      
         echo "from an instance method of " . __CLASS__ . "";   
      }    
   }    
   $obj = new MyClass;    
   $obj->getClassName();    
?>
```
Output:
```
Inside the constructor of MyClass
from an instance method of MyClass
```

### `__METHOD__`

```php
<?php
   class MyClass {    
      public function __construct() {    
         echo "Calling " . __METHOD__ . " of " . __CLASS__ ."<br>";
      }    
      function myMethod(){                      
         echo "Calling " . __METHOD__ . " of " . __CLASS__ ."";
      }    
   }    
   $obj = new MyClass;    
   $obj->myMethod();
?>
```
Output:
```
Calling MyClass::__construct of MyClass
Calling MyClass::myMethod of MyClass
```

### `__TRAIT__`

```php
<?php
   trait MyTrait {
      public function hello() {
         echo "Hello World from " . __TRAIT__ ."";
      }
   }
   class MyClass {
      use MyTrait;
   }
   $obj = new MyClass();
   $obj->hello();
?>
```
Output:
```
Hello World from MyTrait
```

### `__NAMESPACE__`

```php
<?php
   namespace MyNamespace;
   class MyClass {    
      public function __construct() {    
         echo "Name of the class: " . __CLASS__ . " in " . __NAMESPACE__ . ""; 
      }     
   }    
   $class_name = __NAMESPACE__ . '\MyClass';    
   $a = new $class_name;   
?>
```
Output:
```
Name of the class: MyNamespace\MyClass in MyNamespace
```

## Conclusion

These magic constants provide valuable information about the context in which they are used, enhancing the flexibility and functionality of PHP scripts.
