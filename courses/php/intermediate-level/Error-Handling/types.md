---
id: lesson-1
title: "Error Types (Syntax, Runtime, Logical)"
sidebar_label: Error Types 
sidebar_position: 1
description: "Learn Error Types (Syntax, Runtime, Logical)"
tags: [courses,intermediate-level,php,Introduction]
---  

:::note
**Syntax Errors:** These are mistakes in the code syntax, like missing semicolons or parentheses. These errors are detected during parsing, and the script will not execute until these errors are resolved.

**Runtime Errors:** These errors occur during the execution of the script. Examples include trying to access an undefined variable or calling a function that doesn't exist.

**Logical Errors:** These errors occur when the code doesn't perform as expected. The script runs without any syntax or runtime errors, but the output is not as intended due to a flaw in the logic.
:::

### Using Error Handling Functions (die, trigger_error)

**die() Function:**
The `die()` function is used to terminate the script and display a message if a certain condition occurs.

```php
<?php
$file = fopen("test.txt", "r") or die("Unable to open file!");
// further code
?>
```

**trigger_error() Function:**
The `trigger_error()` function is used to generate a user-level error/warning/notice message.

```php
<?php
$test = 2;
if ($test >= 1) {
    trigger_error("Value must be 1 or below", E_USER_WARNING);
}
?>
```
