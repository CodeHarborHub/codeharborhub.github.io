---
id: lesson-1
title: "Advanced Arrays in PHP"
sidebar_label: Advance Array concept
sidebar_position: 1
description: "Learn Advanced Arrays in PHP"
tags: [courses,Advance-level,Introduction]
---  


#### Topics Covered:
1. Array Iteration and Manipulation
2. Sorting and Filtering Arrays
3. Using Array Pointers
4. Advanced Array Functions (`array_map`, `array_reduce`, `array_filter`)

### 1. Array Iteration and Manipulation

**Iteration using `foreach`:**

```php
<?php
$fruits = ["apple", "banana", "cherry"];

foreach ($fruits as $fruit) {
    echo $fruit . "<br>";
}
?>
```
<BrowserWindow>
   <div>
     <p> apple<br />banana<br />cherry<br /></p>
   </div>  
</BrowserWindow>

**Manipulation:**

```php
<?php
$fruits[] = "date"; // Add an element
unset($fruits[1]); // Remove an element
$fruits[1] = "blueberry"; // Update an element

print_r($fruits);
?>
```

**Output:**
<BrowserWindow>
   <div>
       <p>Array ( [0] => apple [2] => cherry [3] => date [1] => blueberry )</p>
   </div>
</BrowserWindow>


### 2. Sorting and Filtering Arrays

**Sorting:**

```php
<?php
$numbers = [4, 2, 8, 6];
sort($numbers);
print_r($numbers); // [2, 4, 6, 8]

$associative = ["a" => 4, "b" => 2, "c" => 8, "d" => 6];
asort($associative); // Sort associative array by value
print_r($associative); // [b => 2, a => 4, d => 6, c => 8]
?>
```
<BrowserWindow>
   <div>
        <p> Array ( [0] => 2 [1] => 4 [2] => 6 [3] => 8 )<br />Array ( [b] => 2 [a] => 4 [d] => 6 [c] => 8 )</p>
   </div>
</BrowserWindow>

**Filtering:**

```php
<?php
$numbers = [1, 2, 3, 4, 5, 6];

$even = array_filter($numbers, function($num) {
    return $num % 2 == 0;
});

print_r($even); // [2, 4, 6]
?>
```
<BrowserWindow>
    <div>
        <p>Array ( [1] => 2 [3] => 4 [5] => 6 )</p>
    </div>
</BrowserWindow>

### 3. Using Array Pointers

**Array Pointer Functions:**

```php
<?php
$fruits = ["apple", "banana", "cherry"];
echo current($fruits); // apple
next($fruits);
echo current($fruits); // banana
reset($fruits);
echo current($fruits); // apple
?>
```
<BrowserWindow>
    <div>
        <p>apple<br />banana<br />apple</p> 
    </div>
</BrowserWindow>


### 4. Advanced Array Functions

**`array_map`:**

```php
<?php
$numbers = [1, 2, 3, 4];

$squared = array_map(function($num) {
    return $num * $num;
}, $numbers);

print_r($squared); // [1, 4, 9, 16]
?>
```

**`array_reduce`:**

```php
<?php
$numbers = [1, 2, 3, 4];

$sum = array_reduce($numbers, function($carry, $item) {
    return $carry + $item;
}, 0);

echo $sum; // 10
?>
```

**`array_filter`:**

```php
<?php
$numbers = [1, 2, 3, 4, 5, 6];

$even = array_filter($numbers, function($num) {
    return $num % 2 == 0;
});

print_r($even); // [2, 4, 6]
?>
```

###  Output 

<BrowserWindow>
    <div> 
        <h2>Advanced Array Functions</h2>
        <p>Output: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 )<br />10<br />Array ( [1] => 2 [3] => 4 [5] => 6 )</p>
    </div>
</BrowserWindow>
 
 

:::tip
- Use `foreach` for easy iteration over arrays.
- Use built-in functions like `sort()`, `array_filter()`, and `array_map()` for common array operations.
- Remember that `sort()` sorts by values, `ksort()` sorts by keys.
- For complex array manipulations, consider using pointers and advanced functions.
- Always validate array data when filtering or reducing to ensure correct results.
:::