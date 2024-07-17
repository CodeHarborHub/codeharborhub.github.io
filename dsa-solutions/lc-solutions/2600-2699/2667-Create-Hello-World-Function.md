---
id: create-hello-world-function
title: Create Hello World Function
sidebar_label: 2667-Create-Hello-World-Function.
tags: 
   - none
description: The problem is 2667. The problem is to Create Hello World Function

sidebar_position: 2667
---

## Problem Statement
Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.



### Examples

**Example 1:**

```
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
```

**Example 2:**

```
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
```




### Constraints

- `0 <= args.length <= 10`



## Solution
#### Codes in Different Languages
<Tabs>

#### JavaScript Implementation
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

```javascript
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
        
    }
};


```
</TabItem>

#### Typescript Implementation

  <TabItem value="Typescript" label="Typescript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 

```typescript
function createHelloWorld(): (...args: any[]) => string {
  return function(...args: any[]) {
    return "Hello World";
  }
}

```
</TabItem>

#### Python Implementation

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 

```python
def create_hello_world():
    def hello_world(*args):
        return "Hello World"
    return hello_world


```
</TabItem>

#### Java Implementation

<TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 

```java
public class HelloWorldFactory {
    public static Callable<String> createHelloWorld() {
        return () -> "Hello World";
    }
}


```
</TabItem>

#### C++ Implementation

<TabItem value="cpp" label="cpp">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 

```cpp

#include <functional>
#include <string>

std::function<std::string()> create_hello_world() {
    return []() { return "Hello World"; };
}

```
</TabItem>

</Tabs>


### Complexity Analysis

- **Time Complexity**: O(1),which means it runs in constant time. This is because the function simply returns a new function, without performing any significant computations or iterations.

- **Space Complexity**: O(1), which means it uses a constant amount of memory. This is because the function only returns a small, fixed-size function, without allocating any additional memory that scales with the input size.
