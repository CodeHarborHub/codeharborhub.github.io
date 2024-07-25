---
id: check-if-array-pairs-are-divisible-by-k
title:   Check If Array Pairs Are Divisible by k
sidebar_label: 1497. Check If Array Pairs Are Divisible by k

tags:
- Array
- Sliding Window
- Hashmap

description: "This is a solution to the Check If Array Pairs Are Divisible by k problem on LeetCode."
---

## Problem Description
Given an array of integers arr of even length n and an integer k.
We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.
Return true If you can find a way to do that or false otherwise.

### Examples

**Example 1:**
```
Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
Output: true
Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
```

**Example 2:**
```
Input: arr = [1,2,3,4,5,6], k = 7
Output: true
Explanation: Pairs are (1,6),(2,5) and(3,4).
```

**Example 3:**
```
Input: arr = [1,2,3,4,5,6], k = 10
Output: false
Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.
```
### Constraints
- `arr.length == n`
- `1 <= n <= 10^5`
- n is even.
- `-10^9 <= arr[i] <= 10^9`
- `1 <= k <= 10^5`

## Solution for Subarray Sums Divisible by K Problem
### Approach 
#### Calculate Remainders:

- For each number in the array, calculate its remainder when divided by  k.
- Adjust the remainder to be non-negative using the formula ((num % k) + k) % k.
#### Count Remainders:

- Use a hash map (or dictionary) to count the frequency of each remainder.
#### Check Pairs:

- For each unique remainder, check if there exists a complement remainder such that their sums are divisible by k.

#### Special Cases:
- If the remainder is 0, there must be an even number of such elements because each must pair with another 0 to be divisible by k.
- For other remainders, ensure that the count of the remainder is equal to the count of its complement (k - remainder).
#### Return the Result:
- If all conditions are satisfied, return true. Otherwise, return false.
<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
        var canArrange = function(arr, k) {
        const mp = new Map();
        for (let num of arr) {
            let remainder = ((num % k) + k) % k;
            mp.set(remainder, (mp.get(remainder) || 0) + 1);
        }

        for (let [remainder, count] of mp.entries()) {
            if (remainder === 0) {
                if (count % 2 !== 0) return false;
            } else {
                let complement = k - remainder;
                if (mp.get(remainder) !== mp.get(complement)) {
                    return false;
                }
            }
        }
        return true;
    };

      const input = [1,2,3,4,5,10,6,7,8,9]
      const k = 5
      const output = canArrange(input , k)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(n) $ 
    - Space Complexity: $ O(k)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   var canArrange = function(arr, k) {
    const mp = new Map();
    for (let num of arr) {
        let remainder = ((num % k) + k) % k;
        mp.set(remainder, (mp.get(remainder) || 0) + 1);
    }

    for (let [remainder, count] of mp.entries()) {
        if (remainder === 0) {
            if (count % 2 !== 0) return false;
        } else {
            let complement = k - remainder;
            if (mp.get(remainder) !== mp.get(complement)) {
                return false;
            }
        }
    }
    return true;
};

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function canArrange(arr: number[], k: number): boolean {
    const mp: Map<number, number> = new Map();
    for (let num of arr) {
        let remainder = ((num % k) + k) % k;
        mp.set(remainder, (mp.get(remainder) || 0) + 1);
    }

    for (let [remainder, count] of mp.entries()) {
        if (remainder === 0) {
            if (count % 2 !== 0) return false;
        } else {
            let complement = k - remainder;
            if (mp.get(remainder) !== mp.get(complement)) {
                return false;
            }
        }
    }
    return true;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   from collections import defaultdict

class Solution:
    def canArrange(self, arr, k):
        mp = defaultdict(int)
        for num in arr:
            remainder = ((num % k) + k) % k
            mp[remainder] += 1

        for remainder, count in mp.items():
            if remainder == 0:
                if count % 2 != 0:
                    return False
            else:
                complement = k - remainder
                if mp[remainder] != mp[complement]:
                    return False
        return True

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean canArrange(int[] arr, int k) {
        Map<Integer, Integer> mp = new HashMap<>();
        for (int num : arr) {
            int remainder = ((num % k) + k) % k;
            mp.put(remainder, mp.getOrDefault(remainder, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : mp.entrySet()) {
            int remainder = entry.getKey();
            int count = entry.getValue();
            if (remainder == 0) {
                if (count % 2 != 0) return false;
            } else {
                int complement = k - remainder;
                if (!mp.get(remainder).equals(mp.get(complement))) {
                    return false;
                }
            }
        }
        return true;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    bool canArrange(vector<int>& arr, int k) {
        map<int, int> mp;
        for (auto num : arr) {
            int remainder = ((num % k) + k) % k; 
            mp[remainder]++;
        }

        for (auto [remainder, count] : mp) {
            if (remainder == 0) {
                if (count % 2 != 0) return false;
            } else {
                int complement = k - remainder; 
                if (mp[remainder] != mp[complement]) {
                    return false;
                }
            }
        }
        return true;
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Check If Array Pairs Are Divisible by k](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions)

