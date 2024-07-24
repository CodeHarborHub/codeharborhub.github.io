---
id: lesson-2
title: " 3. Static Properties and Methods"
sidebar_label:  Static Properties and Methods
sidebar_position: 2
description: "Learn Advanced OOP Concepts in PHP"
tags: [courses,Advance-level,Introduction]
---  
  

**Static Properties and Methods:**
- Static properties and methods belong to the class, not instances of the class.

```php
<?php
class Math {
    public static $value = 10;
    
    public static function add($a, $b) {
        return $a + $b;
    }
}

echo Math::$value; // Output: 10
echo Math::add(5, 3); // Output: 8
?>
```
###  Output 

<BrowserWindow>
    <div> 
        <p>10<br />8</p> 
    </div>
</BrowserWindow>

### 4. Magic Methods and Constants

**Magic Methods:**
- Magic methods in PHP are special methods that start with double underscores (__).

```php
<?php
class Magic {
    private $data = [];

    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    public function __get($name) {
        return isset($this->data[$name]) ? $this->data[$name] : null;
    }
}

$magic = new Magic();
$magic->color = "blue";
echo $magic->color; // Output: blue
?>
```

**Constants:**
- Constants are defined using the `const` keyword and cannot be changed once set.

```php
<?php
class Configuration {
    const MAX_USERS = 100;
    
    public function getMaxUsers() {
        return self::MAX_USERS;
    }
}

echo Configuration::MAX_USERS; // Output: 100
$config = new Configuration();
echo $config->getMaxUsers(); // Output: 100
?>
```

###  Output 

<BrowserWindow>
    <div>
        <p>blue<br />100<br />100</p>
    </div>
</BrowserWindow>



:::tip
- Use abstract classes for shared behavior with the requirement for subclasses to implement specific methods.
- Interfaces are ideal for defining a contract for classes without dictating how the contract is fulfilled.
- Traits provide a flexible way to reuse methods across multiple classes.
- Static properties and methods are useful for functionality that is not dependent on object instances.
- Magic methods can simplify code but should be used judiciously to avoid confusion.
- Constants are great for values that should not change throughout the execution of the script.
:::