---
id: lesson-1
title: "Conditional Statements in PHP"
sidebar_label: Conditional Statements
sidebar_position: 1
description: "Learn Conditional Statements in PHP"
tags: [courses,beginner-level,php,Introduction]
---   

 
1. **if Statement**
2. **if-else Statement**
3. **switch-case Statement**

### Flowchart

```mermaid
graph TD;
    A[Start] --> B{Condition?}
    B -- True --> C[Execute if block]
    B -- False --> D[Execute else block]
    C --> E[Next Statement]
    D --> E[Next Statement]
```

### if Statement

```php
<?php
$number = 10;
if ($number > 0) {
    echo "The number is positive.";
}
?>
```

### if-else Statement

```php
<?php
$number = -10;
if ($number > 0) {
    echo "The number is positive.";
} else {
    echo "The number is negative.";
}
?>
```

### switch-case Statement

#### Flowchart
```mermaid
graph TD;
 K[Start Switch] --> L{Case 1?}
    L -- True --> M[Execute Case 1]
    L -- False --> N{Case 2?}
    N -- True --> O[Execute Case 2]
    N -- False --> P[Default Case]
    M --> Q[Break]
    O --> Q[Break]
    P --> Q[End Switch]
```


```php
<?php
$day = "Monday";
switch ($day) {
    case "Monday":
        echo "Today is Monday.";
        break;
    case "Tuesday":
        echo "Today is Tuesday.";
        break;
    default:
        echo "Today is neither Monday nor Tuesday.";
}
?>
```

