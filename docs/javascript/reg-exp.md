---
id: reg-exp-in-javascript
title: Regular Expressions in JavaScript
sidebar_label: Regular Expressions
sidebar_position: 29
tags: [JavaScript, Regular Expressions, RegExp, Pattern, Match, Replace, Search, Split, Test, RegExp Object, RegExp Methods, RegExp Properties, RegExp in JavaScript, Regular Expressions in JavaScript, RegExp Object in JavaScript, RegExp Methods in JavaScript, RegExp Properties in JavaScript]
description: "In this tutorial, we will learn about regular expressions in JavaScript. We will learn how to create and use regular expressions to match, search, replace, and split strings in JavaScript."
---

In JavaScript, a regular expression is an object that describes a pattern of characters. Regular expressions are used to perform pattern-matching and search-and-replace functions on strings. They are a powerful tool for working with strings and text data in JavaScript.

## Creating a Regular Expression

In JavaScript, you can create a regular expression using the `RegExp` object or by using a regular expression literal.

### Using the `RegExp` Object

You can create a regular expression using the `RegExp` object as follows:

```js title="app.js"
const pattern = new RegExp("hello");

console.log(pattern); // /hello/
```

In this example, we have created a regular expression that matches the string `"hello"`.
The `RegExp` object takes two arguments: the pattern and the flags.

### Using Regular Expression Literal

You can also create a regular expression using a regular expression literal as follows:

```js title="app.js"
const pattern = /hello/;
```

In this example, we have created a regular expression using a regular expression literal.

## Regular Expression Patterns

A regular expression pattern is a sequence of characters that define a search pattern. It can include literal characters, metacharacters, and quantifiers.

### Literal Characters

Literal characters are characters that match themselves. For example, the regular expression `/hello/` matches the string `"hello"`.

### Metacharacters

Metacharacters are special characters that have a special meaning in regular expressions. Some common metacharacters are:

- `.`: Matches any single character except the newline character.
- `^`: Matches the beginning of a string.
- `$`: Matches the end of a string.
- `*`: Matches zero or more occurrences of the preceding character.
- `+`: Matches one or more occurrences of the preceding character.
- `?`: Matches zero or one occurrence of the preceding character.
- `[]`: Matches any one of the characters inside the square brackets.
- `()`: Groups multiple tokens together.
- `|`: Matches either the expression before or after the `|`.
- `\`: Escapes a metacharacter or a special character.
- `{}`: Matches a specific number of occurrences of the preceding character.
- `^`: Inside square brackets, it negates the character set.
- `\b`: Matches a word boundary.
- `\B`: Matches a non-word boundary.
- `\d`: Matches a digit character.
- `\D`: Matches a non-digit character.
- `\s`: Matches a whitespace character.
- `\S`: Matches a non-whitespace character.
- `\w`: Matches a word character.
- `\W`: Matches a non-word character.
- `\n`: Matches a newline character.
- `\r`: Matches a carriage return character.
- `\t`: Matches a tab character.
- `\v`: Matches a vertical tab character.
- `\f`: Matches a form feed character.
- `\0`: Matches a null character.

**Example for all metacharacters with their description or usage.**

```js title="app.js"
const pattern1 = /./; // Matches any single character except the newline character
const pattern2 = /^hello/; // Matches the beginning of a string
const pattern3 = /world$/; // Matches the end of a string
const pattern4 = /a*/; // Matches zero or more occurrences of the preceding character
const pattern5 = /b+/; // Matches one or more occurrences of the preceding character
const pattern6 = /c?/; // Matches zero or one occurrence of the preceding character
const pattern7 = /[abc]/; // Matches any one of the characters inside the square brackets
const pattern8 = /(abc)/; // Groups multiple tokens together
const pattern9 = /a|b/; // Matches either the expression before or after the |
const pattern10 = /\./; // Escapes a metacharacter or a special character
const pattern11 = /d{3}/; // Matches exactly 3 occurrences of the preceding character
const pattern12 = /[^abc]/; // Negates the character set
const pattern13 = /\bword\b/; // Matches a word boundary
const pattern14 = /\d/; // Matches a digit character
const pattern15 = /\D/; // Matches a non-digit character
const pattern16 = /\s/; // Matches a whitespace character
const pattern17 = /\S/; // Matches a non-whitespace character
const pattern18 = /\w/; // Matches a word character
const pattern19 = /\W/; // Matches a non-word character
const pattern20 = /\n/; // Matches a newline character
const pattern21 = /\r/; // Matches a carriage return character
const pattern22 = /\t/; // Matches a tab character
const pattern23 = /\v/; // Matches a vertical tab character
const pattern24 = /\f/; // Matches a form feed character
const pattern25 = /\0/; // Matches a null character

console.log(pattern1);
```

## Regular Expression Flags

Regular expressions can have flags that modify the behavior of the pattern-matching. Some common flags are:

- `i`: Case-insensitive matching.
- `g`: Global matching (find all matches).
- `m`: Multiline matching.
- `s`: Allows `.` to match newline characters.
- `u`: Enables full Unicode support.
- `y`: Sticky matching (matches from the last index).
- `d`: Enables ECMAScript 2018 mode.
- `x`: Ignores whitespace and allows comments in the pattern.
- `A`: Enables the `astral` mode.
- `D`: Enables the `dotAll` mode.
- `U`: Enables the `ungreedy` mode.
- `J`: Enables the `freeSpacing` mode.
- `X`: Enables the `extra` mode.
- `T`: Enables the `unicode` mode.
- `S`: Enables the `namedGroups` mode.
- `R`: Enables the `rightContext` mode.
- `L`: Enables the `lookbehind` mode.
- `P`: Enables the `hasIndices` mode.
- `O`: Enables the `optimize` mode.
- `C`: Enables the `constrained` mode.
- `B`: Enables the `backreferences` mode.
- `F`: Enables the `freeSpacing` mode.
- `N`: Enables the `newline` mode.
- `K`: Enables the `keepOrder` mode.
- `I`: Enables the `ignorePatternWhitespace` mode.
- `M`: Enables the `multiline` mode.
- `Y`: Enables the `sticky` mode.
- `G`: Enables the `global` mode.

**Example for all flags with their description or usage.**

```js title="app.js"
const pattern1 = /hello/i; // Case-insensitive matching
const pattern2 = /hello/g; // Global matching (find all matches)
const pattern3 = /hello/m; // Multiline matching
const pattern4 = /hello/s; // Allows . to match newline characters
const pattern5 = /hello/u; // Enables full Unicode support
const pattern6 = /hello/y; // Sticky matching (matches from the last index)
const pattern7 = /hello/d; // Enables ECMAScript 2018 mode
const pattern8 = /hello/x; // Ignores whitespace and allows comments in the pattern
const pattern9 = /hello/A; // Enables the astral mode
const pattern10 = /hello/D; // Enables the dotAll mode
const pattern11 = /hello/U; // Enables the ungreedy mode
const pattern12 = /hello/J; // Enables the freeSpacing mode
const pattern13 = /hello/X; // Enables the extra mode
const pattern14 = /hello/T; // Enables the unicode mode
const pattern15 = /hello/S; // Enables the namedGroups mode
const pattern16 = /hello/R; // Enables the rightContext mode

console.log(pattern1);
```

## Regular Expression Methods

In JavaScript, regular expressions are used with string methods to perform pattern-matching and search-and-replace functions on strings. Some common string methods that use regular expressions are:

- `match()`: Returns an array of matches.
- `search()`: Returns the index of the first match.
- `replace()`: Replaces the matched substring with a new substring.
- `split()`: Splits the string into an array of substrings.
- `test()`: Tests for a match in a string.
- `exec()`: Returns the next match.
- `compile()`: Compiles a regular expression.
- `toString()`: Returns the string representation of a regular expression.
- `valueOf()`: Returns the primitive value of a regular expression. 
- `toSource()`: Returns the source code of a regular expression.
- `toJSON()`: Returns the JSON representation of a regular expression.
- `toLocaleString()`: Returns the localized string representation of a regular expression.
- `hasInstance()`: Tests if a regular expression is an instance of another object.
- `isConcatSpreadable()`: Tests if a regular expression is spreadable.
- `iterator()`: Returns an iterator for a regular expression.
- `matchAll()`: Returns an iterator of matches.
- `species()`: Returns the constructor of a regular expression.
- `unscopables()`: Returns an object of properties to exclude from a regular expression.
- `flags()`: Returns the flags of a regular expression.
- `dotAll()`: Returns the dotAll flag of a regular expression.
- `sticky()`: Returns the sticky flag of a regular expression.
- `unicode()`: Returns the unicode flag of a regular expression.
- `hasIndices()`: Returns the hasIndices flag of a regular expression.
- `ignoreCase()`: Returns the ignoreCase flag of a regular expression.

### Using the `match()` Method

The `match()` method is used to match a string against a regular expression. It returns an array of matches if the pattern is found, or `null` if the pattern is not found.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = str.match(pattern); 

console.log(result); // [ 'lo', index: 3, input: 'Hello, World!', groups: undefined ]
```

In this example, we have used the `match()` method to match the string `"Hello, World!"` against the regular expression `/lo/`. The `match()` method returns an array of matches `['lo']`.

### Using the `search()` Method

The `search()` method is used to search for a pattern in a string. It returns the index of the first match if the pattern is found, or `-1` if the pattern is not found.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = str.search(pattern);

console.log(result); // 3
```

In this example, we have used the `search()` method to search for the pattern `/lo/` in the string `"Hello, World!"`. The `search()` method returns the index `3` where the pattern is found.

### Using the `replace()` Method

The `replace()` method is used to replace a pattern in a string with a new substring.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = str.replace(pattern, "123");

console.log(result); // He123, World!
```

In this example, we have used the `replace()` method to replace the pattern `/lo/` in the string `"Hello, World!"` with the new substring `"123"`.

### Using the `split()` Method

The `split()` method is used to split a string into an array of substrings using a regular expression or a specified separator.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = str.split(pattern);

console.log(result); // [ 'He', ', World!' ]
```

In this example, we have used the `split()` method to split the string `"Hello, World!"` into an array of substrings using the regular expression `/lo/`.

### Using the `test()` Method

The `test()` method is used to test for a match in a string. It returns `true` if the pattern is found, or `false` if the pattern is not found.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = pattern.test(str);

console.log(result); // true
```

In this example, we have used the `test()` method to test for the pattern `/lo/` in the string `"Hello, World!"`. The `test()` method returns `true` because the pattern is found.

### Using the `exec()` Method

The `exec()` method is used to return the next match in a string. It returns an array of matches if the pattern is found, or `null` if the pattern is not found.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = pattern.exec(str);

console.log(result); // [ 'lo', index: 3, input: 'Hello, World!', groups: undefined ]
```

In this example, we have used the `exec()` method to return the next match of the pattern `/lo/` in the string `"Hello, World!"`. The `exec()` method returns an array of matches `['lo']`.

## Regular Expression Properties

A regular expression object has several properties that provide information about the regular expression.

- `source`: Returns the source text of the regular expression.
- `flags`: Returns the flags of the regular expression.
- `global`: Returns `true` if the `g` flag is set, otherwise `false`.
- `ignoreCase`: Returns `true` if the `i` flag is set, otherwise `false`.
- `multiline`: Returns `true` if the `m` flag is set, otherwise `false`.
- `dotAll`: Returns `true` if the `s` flag is set, otherwise `false`.
- `unicode`: Returns `true` if the `u` flag is set, otherwise `false`.
- `sticky`: Returns `true` if the `y` flag is set, otherwise `false`.
- `hasIndices`: Returns `true` if the `d` flag is set, otherwise `false`.

**Example for all properties with their description or usage.**

```js title="app.js"
const pattern = /hello/gi;

console.log(pattern.source); // hello
console.log(pattern.flags); // gi
console.log(pattern.global); // true
console.log(pattern.ignoreCase); // true
console.log(pattern.multiline); // false
console.log(pattern.dotAll); // false
console.log(pattern.unicode); // false
console.log(pattern.sticky); // false
console.log(pattern.hasIndices); // false
```

In this example, we have created a regular expression `/hello/gi` and accessed its properties using the `source`, `flags`, `global`, `ignoreCase`, `multiline`, `dotAll`, `unicode`, `sticky`, and `hasIndices` properties.

## Regular Expression Examples

### Matching a Pattern

You can use regular expressions to match a pattern in a string.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = pattern.test(str);

console.log(result); // true
```

In this example, we have used a regular expression to match the pattern `/lo/` in the string `"Hello, World!"`. The `test()` method returns `true` because the pattern is found.

### Searching for a Pattern

You can use regular expressions to search for a pattern in a string.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = str.search(pattern);

console.log(result); // 3
```

In this example, we have used a regular expression to search for the pattern `/lo/` in the string `"Hello, World!"`. The `search()` method returns the index `3` where the pattern is found.

### Replacing a Pattern

You can use regular expressions to replace a pattern in a string with a new substring.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = str.replace(pattern, "123");

console.log(result); // He123, World!
```

In this example, we have used a regular expression to replace the pattern `/lo/` in the string `"Hello, World!"` with the new substring `"123"`.

### Splitting a String

You can use regular expressions to split a string into an array of substrings.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/;
const result = str.split(pattern);

console.log(result); // [ 'He', ', World!' ]
```

In this example, we have used a regular expression to split the string `"Hello, World!"` into an array of substrings using the pattern `/lo/`.

### Matching Multiple Patterns

You can use regular expressions to match multiple patterns in a string.

```js title="app.js"
const str = "Hello, World!";
const pattern = /lo/g;
const result = str.match(pattern);

console.log(result); // [ 'lo' ]
```

In this example, we have used a regular expression to match the pattern `/lo/g` in the string `"Hello, World!"`. The `match()` method returns an array of matches `['lo']`.

:::tip 📝 Note
Regular expressions are a powerful tool for working with strings and text data in JavaScript. They are widely used in web development for tasks such as form validation, data extraction, and text processing.

Regular expressions are a complex topic, and there are many advanced features and techniques that you can learn to become proficient in using regular expressions in JavaScript.

In this tutorial, we have covered the basics of regular expressions in JavaScript and how to create and use regular expressions to match, search, replace, and split strings. We have also covered regular expression patterns, flags, methods, and properties.

You can learn more about regular expressions by reading the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) and practicing with regular expressions in your own projects.
:::

## Conclusion

In this tutorial, you learned about regular expressions in JavaScript and how to create and use regular expressions to match, search, replace, and split strings. You also learned about regular expression patterns, flags, methods, and properties. Regular expressions are a powerful tool for working with strings and text data in JavaScript, and they are widely used in web development for tasks such as form validation, data extraction, and text processing. Regular expressions are a complex topic, and there are many advanced features and techniques that you can learn to become proficient in using regular expressions in JavaScript.