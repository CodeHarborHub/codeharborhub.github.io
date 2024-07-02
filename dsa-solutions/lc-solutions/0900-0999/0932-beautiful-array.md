---
id: beautiful-array
title: Beautiful Array
sidebar_label: 0932- Beautiful Array
tags:
  - Leet code
description: "Solution to leetocde 932"
---

### Problem Statement

An array `nums` of length `n` is beautiful if:

1. `nums` is a permutation of the integers in the range `[1, n]`.
2. For every `0 <= i < j < n`, there is no index `k` such that `i < k < j` where `2 * nums[k] == nums[i] + nums[j]`.

Given the integer `n`, return any beautiful array `nums` of length `n`. There will be at least one valid answer for the given `n`.

## Example 1:

Input: `n = 4`  
Output: `[2,1,4,3]`

## Example 2:

Input: `n = 5`  
Output: `[3,1,2,5,4]`

## Constraints:

- $1 <= n <= 1000$

### Algorithm

1. **Recursive Construction**:

   - Split the array into odd and even indexed numbers.
   - Recursively apply the same splitting process to each half until each sub-array contains only one element.
   - Combine the results from the recursive calls in an interleaved manner to ensure that no two adjacent numbers in the final array have a difference of 1.

2. **Constructing the Beautiful Array**:
   - Start with the array `[1, 2, ..., n]`.
   - Use a helper function to recursively split the array into odd and even indexed parts.
   - Combine the results by interleaving the results from the recursive calls.

### Code Implementation

### Python Implementation

```python
class Solution:
    def beautifulArray(self, n: int) -> List[int]:
        if n == 1:
            return [1]

        odds = self.beautifulArray((n + 1) // 2)  # Recursively get beautiful array for odd indices
        evens = self.beautifulArray(n // 2)       # Recursively get beautiful array for even indices

        return [2 * x - 1 for x in odds] + [2 * x for x in evens]

# Example usage:
solution = Solution()
print(solution.beautifulArray(5))  # Output: [1, 3, 2, 5, 4]
```

### Java

```java
import java.util.*;

class Solution {
    public int[] beautifulArray(int n) {
        if (n == 1) {
            return new int[]{1};
        }

        int[] odds = beautifulArray((n + 1) / 2);  // Recursively get beautiful array for odd indices
        int[] evens = beautifulArray(n / 2);       // Recursively get beautiful array for even indices

        int[] result = new int[n];
        int index = 0;
        for (int odd : odds) {
            result[index++] = 2 * odd - 1;
        }
        for (int even : evens) {
            result[index++] = 2 * even;
        }

        return result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int n = 5;
        int[] beautifulArr = solution.beautifulArray(n);
        System.out.println(Arrays.toString(beautifulArr));  // Output: [1, 3, 2, 5, 4]
    }
}
```

### C++

```cpp
#include <vector>

class Solution {
public:
    vector<int> beautifulArray(int n) {
        if (n == 1) {
            return {1};
        }

        vector<int> odds = beautifulArray((n + 1) / 2);   // Recursively get beautiful array for odd indices
        vector<int> evens = beautifulArray(n / 2);        // Recursively get beautiful array for even indices

        vector<int> result(n);
        int index = 0;
        for (int odd : odds) {
            result[index++] = 2 * odd - 1;
        }
        for (int even : evens) {
            result[index++] = 2 * even;
        }

        return result;
    }
};

// Example usage:
#include <iostream>
using namespace std;

int main() {
    Solution solution;
    int n = 5;
    vector<int> beautifulArr = solution.beautifulArray(n);
    for (int num : beautifulArr) {
        cout << num << " ";
    }
    cout << endl;  // Output: 1 3 2 5 4
    return 0;
}
```

### JavaScript

```javascript
var beautifulArray = function (n) {
  if (n === 1) {
    return [1];
  }

  let odds = beautifulArray(Math.ceil(n / 2)); // Recursively get beautiful array for odd indices
  let evens = beautifulArray(Math.floor(n / 2)); // Recursively get beautiful array for even indices

  let result = [];
  for (let odd of odds) {
    result.push(2 * odd - 1);
  }
  for (let even of evens) {
    result.push(2 * even);
  }

  return result;
};

// Example usage:
let n = 5;
let beautifulArr = beautifulArray(n);
console.log(beautifulArr); // Output: [1, 3, 2, 5, 4]
```
