---
id: find-the-n-th-value-after-k-seconds
title:  Find the N-th Value After K Seconds
sidebar_label: 3179. Find the N-th Value After K Seconds
tags:
- Array
- Math
- Simulation
- Combinatorics
- Prefix Sum
description: "This is a solution to the Find the N-th Value After K Seconds problem on LeetCode."
---

## Problem Description
You are given two integers n and k.

Initially, you start with an array a of n integers where `a[i] = 1 for all 0 <= i <= n - 1`. After each second, you simultaneously update each element to be the sum of all its preceding elements plus the element itself. For example, after one second, a[0] remains the same, a[1] becomes a[0] + a[1], a[2] becomes a[0] + a[1] + a[2], and so on.

Return the value of a[n - 1] after k seconds.

Since the answer may be very large, return it modulo 109 + 7.

### Examples

**Example 1:**

```
Input: n = 4, k = 5

Output: 56

Explanation:

Second	State After
0	 [1,1,1,1]
1	 [1,2,3,4]
2	 [1,3,6,10]
3	 [1,4,10,20]
4	 [1,5,15,35]
5	 [1,6,21,56]


```

**Example 2:**
```
Input: n = 5, k = 3

Output: 35

Explanation:

Second	State After
0	[1,1,1,1,1]
1	[1,2,3,4,5]
2	[1,3,6,10,15]
3	[1,4,10,20,35]

```

### Constraints

- `1 <= n, k <= 1000`

## Solution for Find the N-th Value After K Seconds Problem
### Approach 
The problem essentially involves calculating the prefix sum of an array iteratively over a given number of seconds K. Each element in the array represents a value that is derived from summing up all previous elements in the array (including itself) from the previous iteration. The goal is to determine the value of the N-th element in the array after K seconds.
### Steps
-  Start with an array of size N where all elements are initialized to 1. This represents the array at time t=0.
-  For each second from 1 to K, update the array by calculating the prefix sum for each element. This means that each element at position i (0-indexed) will be updated to the sum of all elements from position 0 to i of the previous iteration.
- After K seconds, return the value of the N-th element in the array.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
       function valueAfterKSeconds(n, k) {
        let arr = new Array(n).fill(1);
        const mod = 1000000007;

        for (let i = 1; i <= k; i++) {
            let prefix = new Array(n).fill(0);
            prefix[0] = arr[0] % mod;
            for (let j = 1; j < n; j++) {
                prefix[j] = (prefix[j - 1] + arr[j]) % mod;
            }
            arr = prefix;
        }
        return arr[n - 1];
    }
      const input = 4;
      const  k = 5
      const output = valueAfterKSeconds(input , k) ;
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

    - Time Complexity: $ O(N*K) $ because of Nested Loops
    - Space Complexity: $ O(N) $  because of prefix array

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
    function valueAfterKSeconds(n, k) {
        let arr = new Array(n).fill(1);
        const mod = 1000000007;

        for (let i = 1; i <= k; i++) {
            let prefix = new Array(n).fill(0);
            prefix[0] = arr[0] % mod;
            for (let j = 1; j < n; j++) {
                prefix[j] = (prefix[j - 1] + arr[j]) % mod;
            }
            arr = prefix;
        }
        return arr[n - 1];
    }
   
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    valueAfterKSeconds(n: number, k: number): number {
        let arr: number[] = new Array(n).fill(1);
        const mod: number = 1000000007;

        for (let i = 1; i <= k; i++) {
            let prefix: number[] = new Array(n).fill(0);
            prefix[0] = arr[0] % mod;
            for (let j = 1; j < n; j++) {
                prefix[j] = (prefix[j - 1] + arr[j]) % mod;
            }
            arr = prefix;
        }
        return arr[n - 1];
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def value_after_k_seconds(self, n: int, k: int) -> int:
        arr = [1] * n
        mod = 10**9 + 7

        for i in range(1, k + 1):
            prefix = [0] * n
            prefix[0] = arr[0] % mod
            for j in range(1, n):
                prefix[j] = (prefix[j - 1] + arr[j]) % mod
            arr = prefix
        
        return arr[n - 1]
   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.Arrays;

public class Solution {
    public int valueAfterKSeconds(int n, int k) {
        int[] arr = new int[n];
        Arrays.fill(arr, 1);
        int mod = 1000000007;

        for (int i = 1; i <= k; i++) {
            int[] prefix = new int[n];
            prefix[0] = arr[0] % mod;
            for (int j = 1; j < n; j++) {
                prefix[j] = (prefix[j - 1] + arr[j]) % mod;
            }
            arr = prefix;
        }
        return arr[n - 1];
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int valueAfterKSeconds(int n, int k) {
        vector<int> arr(n, 1);
        int mod = 1e9 + 7;
        for (int i = 1; i <= k; i++) {
            vector<int> prefix(n, 0);
            prefix[0] = arr[0]%mod;
            for (int j = 1; j < n; j++) {
                prefix[j] = (prefix[j - 1] + arr[j]) % mod;
            }
            arr = prefix;
        }
        return arr[n-1];
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Find the N-th Value After K Seconds](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions)

