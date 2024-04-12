---
id: all-about-strings
title: All Basic About Strings in JavaScript
sidebar_label: Strings in JavaScript
sidebar_position: 13
tags: [JavaScript, Strings, String Methods, Template Literals, Escape Characters, String Length, toUpperCase, toLowerCase, charAt, indexOf, lastIndexOf, includes, startsWith, endsWith, slice, substring, substr, replace, split, trim, concat, repeat, padStart, padEnd, match, search, localeCompare, charCodeAt, fromCharCode, fromCodePoint, codePointAt, normalize]
description: "In the JavaScript programming language, strings are text that is displayed on the screen. They are used to store and manipulate text. In this section, you will learn how to create and manipulate strings in JavaScript. You will also learn about the different methods that can be used to manipulate strings. We are going to cover the following topics in this section:"
---

> Strings are used to store text. They are used to represent a sequence of characters.
> Strings are written with quotes. You can use single or double quotes.

```js title="index.js"
let name = "Ajay";
let message = 'Hello, Ajay!';
```

## String Length

The `length` property returns the length of a string (number of characters).

```js title="index.js"
let name = "Ajay";
console.log(name.length); // 4
```

## Escape Characters

In JavaScript, you can use the backslash `\` to escape quotes and other characters.

```js title="index.js"
let message = 'It\'s a beautiful day!';
console.log(message); // It's a beautiful day!
``` 

The backslash `\` is used to escape quotes and other characters in a string.

| Code | Output | Description |
| :--: | :----: | :---------: |
| `\'` | ' | Single quote |
| `\"` | " | Double quote |
| `\\` | \ | Backslash |
| `\n` |  | New line |
| `\r` |  | Carriage return |
| `\t` |  | Tab |
| `\b` |  | Backspace |
| `\f` |  | Form feed |
| `\v` |  | Vertical tab |

## String Methods

JavaScript has a number of built-in methods for working with strings.

### `toUpperCase()`

The `toUpperCase()` method converts a string to uppercase letters.

```js title="index.js"
let name = "Ajay";
console.log(name.toUpperCase()); // AJAY
```

### `toLowerCase()`

The `toLowerCase()` method converts a string to lowercase letters.

```js title="index.js"
let name = "AJAY";
console.log(name.toLowerCase()); // ajay
```

### `charAt()`

The `charAt()` method returns the character at a specified index (position) in a string.

```js title="index.js"
let name = "Ajay";
console.log(name.charAt(0)); // A
console.log(name.charAt(1)); // j
```

### `indexOf()`

The `indexOf()` method returns the position of the first occurrence of a specified value in a string.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.indexOf('Ajay')); // 7
```

### `lastIndexOf()`

The `lastIndexOf()` method returns the position of the last occurrence of a specified value in a string.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.lastIndexOf('l')); // 3
```

### `includes()`

The `includes()` method returns `true` if a string contains a specified value, otherwise `false`.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.includes('Ajay')); // true
console.log(message.includes('Ajayy')); // false

// Case sensitive
console.log(message.includes('ajay')); // false
```

### `startsWith()`

The `startsWith()` method returns `true` if a string starts with a specified value, otherwise `false`.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.startsWith('Hello')); // true
console.log(message.startsWith('Ajay')); // false
```

### `endsWith()`

The `endsWith()` method returns `true` if a string ends with a specified value, otherwise `false`.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.endsWith('Ajay!')); // true
console.log(message.endsWith('Hello')); // false
```

### `slice()`

The `slice()` method extracts a part of a string and returns the extracted part in a new string.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.slice(7)); // Ajay!
console.log(message.slice(7, 11)); // Ajay
```

### `substring()`

The `substring()` method extracts the characters from a string, between two specified indices, and returns the new sub string.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.substring(7)); // Ajay!
console.log(message.substring(7, 11)); // Ajay
```

### `substr()`

The `substr()` method extracts the characters from a string, beginning at a specified start position, and through the specified number of character.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.substr(7)); // Ajay!
console.log(message.substr(7, 4)); // Ajay
```

### `replace()`

The `replace()` method replaces a specified value with another value in a string.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.replace('Ajay', 'John')); // Hello, John!
```

### `split()`

The `split()` method splits a string into an array of substrings, and returns the new array.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.split(' ')); // [ 'Hello,', 'Ajay!' ]
```

### `trim()`

The `trim()` method removes whitespace from both ends of a string.

```js title="index.js"
let message = '   Hello, Ajay!   ';
console.log(message.trim()); // Hello, Ajay!
```

### `concat()`

The `concat()` method joins two or more strings.

```js title="index.js"
let name = "Ajay";
let message = 'Hello, ';
console.log(message.concat(name)); // Hello, Ajay
```

### `repeat()`

The `repeat()` method returns a new string with a specified number of copies of the string it was called on.

```js title="index.js"
let name = "Ajay";
console.log(name.repeat(3)); // AjayAjayAjay
```

### `padStart()`

The `padStart()` method pads the current string with another string until the resulting string reaches the given length.

```js title="index.js"
let name = "Ajay";
console.log(name.padStart(10, 'Hi ')); // Hi Hi Ajay
```

### `padEnd()`

The `padEnd()` method pads the current string with another string until the resulting string reaches the given length.

```js title="index.js"
let name = "Ajay";
console.log(name.padEnd(10, ' Hi')); // Ajay Hi Hi
```

### `match()`

The `match()` method searches a string for a match against a regular expression, and returns the matches, as an Array object.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.match('Ajay')); // [ 'Ajay', index: 7, input: 'Hello, Ajay!', groups: undefined ]
```

### `search()`

The `search()` method searches a string for a specified value, and returns the position of the match.

```js title="index.js"
let message = 'Hello, Ajay!';
console.log(message.search('Ajay')); // 7
```

### `localeCompare()`

The `localeCompare()` method compares two strings in the current locale.

```js title="index.js"
let name1 = "Ajay";
let name2 = "John";

console.log(name1.localeCompare(name2)); // -1
console.log(name2.localeCompare(name1)); // 1
console.log(name1.localeCompare(name1)); // 0
```

### `charCodeAt()`

The `charCodeAt()` method returns the Unicode of the character at a specified index in a string.

```js title="index.js"
let name = "Ajay";
console.log(name.charCodeAt(0)); // 65
console.log(name.charCodeAt(1)); // 106
```

### `fromCharCode()`

The `fromCharCode()` method converts Unicode values to characters.

```js title="index.js"
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(106)); // j
```

### `fromCodePoint()`

The `fromCodePoint()` method returns a string created by using the specified sequence of code points.

```js title="index.js"
console.log(String.fromCodePoint(65)); // A
console.log(String.fromCodePoint(106)); // j
```

### `codePointAt()`

The `codePointAt()` method returns a non-negative integer that is the Unicode code point value.

```js title="index.js"
let name = "Ajay";
console.log(name.codePointAt(0)); // 65
console.log(name.codePointAt(1)); // 106
```

### `normalize()`

The `normalize()` method returns the Unicode Normalization Form of a given string.

```js title="index.js"
let name = "Ajay";
console.log(name.normalize()); // Ajay
```

### `includes()`

The `includes()` method determines whether a string contains the characters of a specified string.

```js title="index.js"
let name = "Ajay";
console.log(name.includes('A')); // true
console.log(name.includes('a')); // false
```

## Template Literals

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

```js title="index.js"
let name = "Ajay";
let message = `Hello, ${name}!`;
console.log(message); // Hello, Ajay!
```

:::info 
Template literals are enclosed by the back-tick (&lt) (grave accent) character instead of double or single quotes.
:::

## Conclusion

In this tutorial, we learned about strings in JavaScript and various methods to work with strings. We also learned about template literals. 