---
id: Add-to-Array-Form-of-Integer
title: Add to Array-Form of Integer
sidebar_label: 0989 - Add to Array-Form of Integer
tags:
  - easy
  - array
  - math
---

## Problem Description

The array-form of an integer `num` is an array representing its digits in left to right order.

For example, for `num = 1321`, the array form is `[1,3,2,1]`. Given `num`, the array-form of an integer, and an integer `k`, return the array-form of the integer `num + k`.

## Example

### Example 1:

Input: `num = [1,2,0,0]`, `k = 34`  
Output: `[1,2,3,4]`  
Explanation: `1200 + 34 = 1234`

### Example 2:

Input: `num = [2,7,4]`, `k = 181`  
Output: `[4,5,5]`  
Explanation: `274 + 181 = 455`

### Example 3:

Input: `num = [2,1,5]`, `k = 806`  
Output: `[1,0,2,1]`  
Explanation: `215 + 806 = 1021`

## Constraints:

- `1 <= num.length <= 10^4`
- `0 <= num[i] <= 9`
- `num` does not contain any leading zeros except for the zero itself.
- `1 <= k <= 10^4`

## Solution Approach

### Python

```python
def addToArrayForm(num, k):
    num_str = ''.join(map(str, num))
    total = int(num_str) + k
    return list(map(int, str(total)))

# Example usage:
print(addToArrayForm([1, 2, 0, 0], 34))  # Output: [1, 2, 3, 4]
print(addToArrayForm([2, 7, 4], 181))    # Output: [4, 5, 5]
print(addToArrayForm([2, 1, 5], 806))    # Output: [1, 0, 2, 1]
```

### C++

```cpp
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        for (int i = num.size() - 1; i >= 0; --i) {
            num[i] += k;
            k = num[i] / 10;
            num[i] %= 10;
        }
        while (k > 0) {
            num.insert(num.begin(), k % 10);
            k /= 10;
        }
        return num;
    }
};

// Example usage:
int main() {
    Solution solution;
    vector<int> num1 = {1, 2, 0, 0};
    vector<int> result1 = solution.addToArrayForm(num1, 34);
    for (int digit : result1) cout << digit; // Output: 1234
    cout << endl;

    vector<int> num2 = {2, 7, 4};
    vector<int> result2 = solution.addToArrayForm(num2, 181);
    for (int digit : result2) cout << digit; // Output: 455
    cout << endl;

    vector<int> num3 = {2, 1, 5};
    vector<int> result3 = solution.addToArrayForm(num3, 806);
    for (int digit : result3) cout << digit; // Output: 1021
    cout << endl;

    return 0;
}
```

### Java

```java
import java.util.*;

class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        List<Integer> result = new ArrayList<>();
        for (int i = num.length - 1; i >= 0; --i) {
            k += num[i];
            result.add(k % 10);
            k /= 10;
        }
        while (k > 0) {
            result.add(k % 10);
            k /= 10;
        }
        Collections.reverse(result);
        return result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.addToArrayForm(new int[]{1, 2, 0, 0}, 34)); // Output: [1, 2, 3, 4]
        System.out.println(solution.addToArrayForm(new int[]{2, 7, 4}, 181));   // Output: [4, 5, 5]
        System.out.println(solution.addToArrayForm(new int[]{2, 1, 5}, 806));   // Output: [1, 0, 2, 1]
    }
}
```

### JavaScript

```javascript
var addToArrayForm = function (num, k) {
  let carry = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    let sum = num[i] + (k % 10) + carry;
    num[i] = sum % 10;
    carry = Math.floor(sum / 10);
    k = Math.floor(k / 10);
  }
  while (k > 0 || carry > 0) {
    let sum = (k % 10) + carry;
    num.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    k = Math.floor(k / 10);
  }
  return num;
};

// Example usage:
console.log(addToArrayForm([1, 2, 0, 0], 34)); // Output: [1, 2, 3, 4]
console.log(addToArrayForm([2, 7, 4], 181)); // Output: [4, 5, 5]
console.log(addToArrayForm([2, 1, 5], 806)); // Output: [1, 0, 2, 1]
```
