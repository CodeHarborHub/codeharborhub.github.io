---
id: guess-number-higher-or-lower
title: Guess Number Higher or Lower
sidebar_label: 0374-Guess Number Higher or Lower
tags:
  - Binary Search
  - Leet code
description: "Solution to leetocde 374"
---

### Problem Description

We are playing the Guess Game. The game is as follows:

I pick a number from `1` to `n`. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

- `-1`: Your guess is higher than the number I picked $(i.e. num > pick).$
- `1`: Your guess is lower than the number I picked $(i.e. num < pick).$
- `0`: your guess is equal to the number I picked $(i.e. num == pick).$

Return the number that I picked.

### Examples

**Example 1:**

```
Input: n = 10, pick = 6
Output: 6
```

**Example 2:**

```
Input: n = 1, pick = 1
Output: 1
```

**Example 3:**

```
Input: n = 2, pick = 1
Output: 1
```

### Constraints:

- $1 <= n <= 231 - 1$
- $1 <= pick <= n$

### Algorithm

1. **Initialization**:

   - Set `l` (low) to `1` and `h` (high) to `n`. These variables represent the current search range.

2. **Binary Search Loop**:

   - While `l` is less than or equal to `h`, continue searching.
   - Compute the middle point `mid` as `(l + h) / 2`.

3. **Evaluate `guess(mid)`**:

   - Use the `guess` function to determine how to adjust the search range based on the value returned:
     - If `guess(mid)` returns `1`, it means `mid` is too low, so adjust `l` to `mid + 1`.
     - If `guess(mid)` returns `-1`, it means `mid` is too high, so adjust `h` to `mid - 1`.
     - If `guess(mid)` returns `0`, it means `mid` is the target number, so return `mid`.

4. **Completion**:
   - If the loop exits without finding the number (i.e., `l > h`), return `l`. This handles the case where the target number is not exactly in the range but `l` will be the next potential guess.

### Code Implementation

### Python

```python
def guessNumber(n):
    l, h = 1, n

    while l <= h:
        mid = (l + h) // 2

        if guess(mid) == 1:
            l = mid + 1
        elif guess(mid) == -1:
            h = mid - 1
        else:
            return mid

    return l
```

### C++

```cpp
class Solution {
public:
    int guessNumber(int n) {
        long long l = 1;
        long long h = n;

        while (l <= h) {
            int mid = (l + h) / 2;

            if (guess(mid) == 1) {
                l = mid + 1;
            } else if (guess(mid) == -1) {
                h = mid - 1;
            } else {
                return mid;
            }
        }

        return l;
    }
};
```

### Java

```java
public class Solution {
    public int guessNumber(int n) {
        long l = 1;
        long h = n;

        while (l <= h) {
            int mid = (int)((l + h) / 2);

            if (guess(mid) == 1) {
                l = mid + 1;
            } else if (guess(mid) == -1) {
                h = mid - 1;
            } else {
                return mid;
            }
        }

        return (int)l;
    }
}
```

### JavaScript

```javascript
function guessNumber(n) {
  let l = 1;
  let h = n;

  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (guess(mid) === 1) {
      l = mid + 1;
    } else if (guess(mid) === -1) {
      h = mid - 1;
    } else {
      return mid;
    }
  }

  return l;
}
```
