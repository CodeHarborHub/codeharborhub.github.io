---
id: 3sum-with-multiplicity
title: Three Sum With Multiplicity
sidebar_label: 3Sum-with-multiplicity
tags: 
    - Array
    - Hash Map
    - Combinatorics
    - Two Pointers
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [3sum-with-multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/description/) | [3sum-with-multiplicity Solution on LeetCode](https://leetcode.com/problems/3sum-with-multiplicity/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |
## Problem Description

Given an integer array `arr`, and an integer `target`, return the number of tuples `i, j, k` such that `i < j < k` and `arr[i] + arr[j] + arr[k] == target`.

As the answer can be very large, return it modulo 10^9 + 7.

### Example 1:
**Input:** `arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8`
**Output:** `20`
**Explanation:** 
`Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.`

### Example 2:
**Input:** `arr = [1, 1, 2, 2, 2, 2], target = 5`
**Output:** `12`
**Explanation:** 
`arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.`

### Example 3:
**Input:** `arr = [2, 1, 3], target = 6`
**Output:** `1`
**Explanation:** `(1, 2, 3) occurred one time in the array so we return 1.`

### Constraints:
- `3 <= arr.length <= 3000`
- `0 <= arr[i] <= 100`
- `0 <= target <= 300`

## Approach

To solve this problem, we can use a combination of counting and two-pointer techniques. Here is a step-by-step approach:

1. **Count the Occurrences**: Use a hashmap to count the occurrences of each element in the array.
2. **Find Triplets**: Iterate over each pair of elements and check if the third element needed to reach the target exists in the hashmap.
3. **Handle Different Cases**: Depending on the values of the three elements, handle different counting cases (all three equal, two equal, all different).
4. **Modulo Operation**: Use modulo 10^9 + 7 to ensure the result doesn't overflow.

## Solution

### Python
```python
from collections import Counter

class Solution:
    def threeSumMulti(self, arr, target):
        MOD = 10**9 + 7
        count = Counter(arr)
        keys = sorted(count)
        result = 0
        
        for i, x in enumerate(keys):
            T = target - x
            j, k = i, len(keys) - 1
            while j <= k:
                y, z = keys[j], keys[k]
                if y + z < T:
                    j += 1
                elif y + z > T:
                    k -= 1
                else:
                    if i < j < k:
                        result += count[x] * count[y] * count[z]
                    elif i == j < k:
                        result += count[x] * (count[x] - 1) // 2 * count[z]
                    elif i < j == k:
                        result += count[x] * count[y] * (count[y] - 1) // 2
                    else: # i == j == k
                        result += count[x] * (count[x] - 1) * (count[x] - 2) // 6
                    result %= MOD
                    j += 1
                    k -= 1
        
        return result
```

### Java
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int threeSumMulti(int[] arr, int target) {
        int MOD = 1_000_000_007;
        Map<Integer, Long> count = new HashMap<>();
        
        for (int num : arr) {
            count.put(num, count.getOrDefault(num, 0L) + 1);
        }
        
        long result = 0;
        
        for (int i : count.keySet()) {
            for (int j : count.keySet()) {
                int k = target - i - j;
                if (count.containsKey(k)) {
                    long ci = count.get(i);
                    long cj = count.get(j);
                    long ck = count.get(k);
                    
                    if (i == j && j == k) {
                        result += ci * (ci - 1) * (ci - 2) / 6; // C(ci, 3)
                    } else if (i == j && j != k) {
                        result += ci * (ci - 1) / 2 * ck; // C(ci, 2) * ck
                    } else if (i < j && j < k) {
                        result += ci * cj * ck; // ci * cj * ck
                    }
                }
            }
        }
        
        return (int)(result % MOD);
    }
}
```

### C++
```cpp
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int threeSumMulti(vector<int>& arr, int target) {
        const int MOD = 1'000'000'007;
        unordered_map<int, long> count;
        
        for (int num : arr) {
            count[num]++;
        }
        
        long result = 0;
        
        for (auto i : count) {
            for (auto j : count) {
                int k = target - i.first - j.first;
                if (count.find(k) != count.end()) {
                    long ci = i.second;
                    long cj = j.second;
                    long ck = count[k];
                    
                    if (i.first == j.first && j.first == k) {
                        result += ci * (ci - 1) * (ci - 2) / 6;
                    } else if (i.first == j.first && j.first != k) {
                        result += ci * (ci - 1) / 2 * ck;
                    } else if (i.first < j.first && j.first < k) {
                        result += ci * cj * ck;
                    }
                }
            }
        }
        
        return result % MOD;
    }
};
```

### C
```c
#include <stdio.h>
#include <stdlib.h>

#define MOD 1000000007

typedef struct {
    int key;
    long value;
} HashMap;

int compare(const void *a, const void *b) {
    return ((HashMap *)a)->key - ((HashMap *)b)->key;
}

int threeSumMulti(int* arr, int arrSize, int target) {
    HashMap count[101] = {0};
    int countSize = 0;
    
    for (int i = 0; i < arrSize; i++) {
        count[arr[i]].key = arr[i];
        count[arr[i]].value++;
    }
    
    for (int i = 0; i <= 100; i++) {
        if (count[i].value > 0) {
            count[countSize++] = count[i];
        }
    }
    
    qsort(count, countSize, sizeof(HashMap), compare);
    
    long result = 0;
    
    for (int i = 0; i < countSize; i++) {
        for (int j = i; j < countSize; j++) {
            int k = target - count[i].key - count[j].key;
            if (k < 0 || k > 100 || count[k].value == 0) continue;
            
            if (count[i].key == count[j].key && count[j].key == k) {
                result += count[i].value * (count[i].value - 1) * (count[i].value - 2) / 6;
            } else if (count[i].key == count[j].key && count[j].key != k) {
                result += count[i].value * (count[i].value - 1) / 2 * count[k].value;
            } else if (count[i].key < count[j].key && count[j].key < k) {
                result += count[i].value * count[j].value * count[k].value;
            }
            
            result %= MOD;
        }
    }
    
    return result;
}
```

### JavaScript
```javascript
var threeSumMulti = function(arr, target) {
    const MOD = 1e9 + 7;
    let count = new Map();
    
    for (let num of arr) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    let keys = Array.from(count.keys()).sort((a, b) => a - b);
    let result = 0;
    
    for (let i = 0; i < keys.length; i++) {
        let x = keys[i];
        let T = target - x;
        let j = i, k = keys.length - 1;
        
        while (j <= k) {
            let y = keys[j], z = keys[k];
            if (

y + z < T) {
                j++;
            } else if (y + z > T) {
                k--;
            } else {
                if (i < j && j < k) {
                    result += count.get(x) * count.get(y) * count.get(z);
                } else if (i === j && j < k) {
                    result += count.get(x) * (count.get(x) - 1) / 2 * count.get(z);
                } else if (i < j && j === k) {
                    result += count.get(x) * count.get(y) * (count.get(y) - 1) / 2;
                } else { // i === j === k
                    result += count.get(x) * (count.get(x) - 1) * (count.get(x) - 2) / 6;
                }
                result %= MOD;
                j++;
                k--;
            }
        }
    }
    
    return result;
};
```

## Step by Step Algorithm

1. **Initialize Variables**: Create a hashmap to count the occurrences of each element in the array.
2. **Count Elements**: Iterate through the array and populate the hashmap with the count of each element.
3. **Sort Keys**: Sort the unique keys from the hashmap.
4. **Iterate Over Pairs**: Use a nested loop to iterate over each pair of elements `(i, j)` and calculate the third element `k` needed to reach the target sum.
5. **Check Existence of k**: Verify if `k` exists in the hashmap.
6. **Count Triplets**: Depending on the values of `i`, `j`, and `k`, count the valid triplets using combinatorics:
   - All three elements are the same: Use combination formula `C(count, 3)`.
   - Two elements are the same: Use combination formula `C(count, 2) * count`.
   - All three elements are different: Multiply their counts directly.
7. **Modulo Operation**: Take the result modulo `10^9 + 7` to avoid overflow.
8. **Return Result**: Return the final count of valid triplets.

## Conclusion

This problem can be efficiently solved using a combination of counting, sorting, and combinatorics. By carefully handling different cases for the triplet elements and using the modulo operation to prevent overflow, we can count the number of valid triplets that sum to the target.