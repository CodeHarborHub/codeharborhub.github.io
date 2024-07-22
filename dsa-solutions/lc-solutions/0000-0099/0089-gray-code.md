---
id: gray-code
title: Gray Code (LeetCode)
difficulty: Medium
sidebar_label: 0089-GrayCode
topics:
  - Math
  - Bit Manipulation
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Gray Code](https://leetcode.com/problems/gray-code/) | [Gray Code Solution on LeetCode](https://leetcode.com/problems/gray-code/solutions/) | [YourLeetCodeProfile](https://leetcode.com/your-profile/) |

## Problem Description

The gray code is a binary numeral system where two successive values differ in only one bit.

Given an integer `n`, return an array of gray code sequence for `n` bits.

### Examples

#### Example 1:

- **Input:** `n = 2`
- **Output:** `[0,1,3,2]`
- **Explanation:**
  ```
  00 - 0
  01 - 1
  11 - 3
  10 - 2
  ```

#### Example 2:

- **Input:** `n = 1`
- **Output:** `[0,1]`
- **Explanation:**
  ```
  0 - 0
  1 - 1
  ```

### Constraints

- `1 <= n <= 16`

### Approach

To generate the gray code sequence for `n` bits:
1. Start with the base case for `n = 0`, which is `[0]`.
2. Use a recursive approach or iterative method to generate gray codes for increasing values of `n`.
3. Utilize properties of gray codes where each successive value differs from the previous by only one bit.

### Solution Code

#### Python

```python
class Solution:
    def grayCode(self, n: int) -> List[int]:
        result = [0]
        for i in range(n):
            result += [x + (1 << i) for x in reversed(result)]
        return result
```

#### Java

```java
class Solution {
    public List<Integer> grayCode(int n) {
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < (1 << n); i++) {
            result.add(i ^ (i >> 1));
        }
        return result;
    }
}
```

#### C++

```cpp
class Solution {
public:
    vector<int> grayCode(int n) {
        vector<int> result;
        for (int i = 0; i < (1 << n); i++) {
            result.push_back(i ^ (i >> 1));
        }
        return result;
    }
};
```

### Conclusion

The "Gray Code" problem involves generating a sequence of binary numbers such that each successive number differs by only one bit. The provided solutions in Python, Java, and C++ efficiently generate the gray code sequence based on the given constraints, offering different implementations for handling bit manipulation and sequence generation.
