---
id: construct-the-rectangle
title: Construct The Rectangle
sidebar_label: 0492 - Construct The Rectangle
tags:
  - Leetcode
---

## Problem Statement

A web developer needs to know how to design a web page's size. Given a specific rectangular web page’s area, your task is to design a rectangular web page with length `L` and width `W` that satisfy the following requirements:

1. The area of the rectangular web page must equal the given target area.
2. The width `W` should not be larger than the length `L`, which means `L >= W`.
3. The difference between length `L` and width `W` should be as small as possible.

Return an array `[L, W]` where `L` and `W` are the length and width of the web page you designed in sequence.

## Examples

### Example 1

- Input: `area = 4`
- Output: `[2,2]`
- Explanation: The target area is 4, and all the possible ways to construct it are `[1,4]`, `[2,2]`, `[4,1]`. But according to requirement 2, `[1,4]` is illegal; according to requirement 3, `[4,1]` is not optimal compared to `[2,2]`. So the length `L` is 2, and the width `W` is 2.

### Example 2

- Input: `area = 37`
- Output: `[37,1]`

### Example 3

- Input: `area = 122122`
- Output: `[427,286]`

## Constraints

- $1 <= area <= 107$

## Algorithm

1. Start by initializing the width W as the integer square root of the given area.
2. Decrement the width W until you find a divisor of the area.
3. The corresponding length L is the quotient of the area divided by the width.
4. Return [L, W].

## Code

### Python

```python
import math

class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        width = int(math.sqrt(area))
        while area % width != 0:
            width -= 1
        length = area // width
        return [length, width]
```

### C++

```cpp
class Solution {
public:
    vector<int> constructRectangle(int area) {
       int width = sqrt(area);
       while (area % width != 0) {
           width--;
       }
       int length = area / width;
       return {length, width};
    }
};
```

### Java

```java
class Solution {
    public int[] constructRectangle(int area) {
        int width = (int) Math.sqrt(area);
        while (area % width != 0) {
            width--;
        }
        int length = area / width;
        return new int[]{length, width};
    }
}
```

### JavaScript

```javascript
var constructRectangle = function (area) {
  let width = Math.floor(Math.sqrt(area));
  while (area % width !== 0) {
    width--;
  }
  let length = Math.floor(area / width);
  return [length, width];
};
```
