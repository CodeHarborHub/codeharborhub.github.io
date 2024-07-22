---
id: defuse-the-bomb
title: Defuse the Bomb Solution
sidebar_label: 1652-Defuse the Bomb
tags:
  - Circular Array
  - Sliding Window
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Defuse the Bomb problem on LeetCode."
sidebar_position: 2
---

In this tutorial, we will solve the Defuse the Bomb problem using a circular array and sliding window approach. We will provide the implementation of the solution in C++, Java, and Python.

## Problem Description

You have a bomb to defuse, and your informer will provide you with a circular array `code` of length `n` and a key `k`. To decrypt the code, you must replace every number as follows:

- If `k > 0`, replace the `i-th` number with the sum of the next `k` numbers.
- If `k < 0`, replace the `i-th` number with the sum of the previous `k` numbers.
- If `k == 0`, replace the `i-th` number with 0.

As `code` is circular, the next element of `code[n-1]` is `code[0]`, and the previous element of `code[0]` is `code[n-1]`.

### Examples

**Example 1:**

```
Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
```

**Example 2:**

```
Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0. 
```

**Example 3:**

```
Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.
```

### Constraints

- `n == code.length`
- `1 <= n <= 100`
- `1 <= code[i] <= 100`
- `-(n - 1) <= k <= n - 1`

---

## Solution for Defuse the Bomb Problem

### Intuition and Approach

The problem can be solved using a sliding window approach to handle the circular nature of the array. Depending on the value of `k`, we sum the appropriate elements and use modular arithmetic to handle the circular behavior.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force (Naive)

The brute force approach involves iterating through each element and calculating the sum of the next or previous `k` elements based on the value of `k`.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        vector<int> result(n, 0);
        
        if (k == 0) return result;
        
        for (int i = 0; i < n; ++i) {
            int sum = 0;
            for (int j = 1; j <= abs(k); ++j) {
                if (k > 0) {
                    sum += code[(i + j) % n];
                } else {
                    sum += code[(i - j + n) % n];
                }
            }
            result[i] = sum;
        }
        
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int[] decrypt(int[] code, int k) {
        int n = code.length;
        int[] result = new int[n];
        
        if (k == 0) return result;
        
        for (int i = 0; i < n; ++i) {
            int sum = 0;
            for (int j = 1; j <= Math.abs(k); ++j) {
                if (k > 0) {
                    sum += code[(i + j) % n];
                } else {
                    sum += code[(i - j + n) % n];
                }
            }
            result[i] = sum;
        }
        
        return result;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        result = [0] * n
        
        if k == 0:
            return result
        
        for i in range(n):
            sum_val = 0
            for j in range(1, abs(k) + 1):
                if k > 0:
                    sum_val += code[(i + j) % n]
                else:
                    sum_val += code[(i - j + n) % n]
            result[i] = sum_val
        
        return result
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n \cdot |k|)$ due to nested loops.
- Space Complexity: $O(n)$ for the result array.
- Where `n` is the length of the code array.
- The time complexity is $O(n \cdot |k|)$ because we iterate through each element and calculate the sum of `k` elements.
- The space complexity is $O(n)$ because we store the result in a new array.

</tabItem>
<tabItem value="Optimized" label="Optimized">

### Approach 2: Sliding Window (Optimized)

The sliding window approach uses a more efficient way to calculate the sum by maintaining a running sum and updating it as the window slides over the array.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        vector<int> result(n, 0);
        
        if (k == 0) return result;
        
        int start = k > 0 ? 1 : k;
        int end = k > 0 ? k : -1;
        
        int sum = 0;
        for (int i = start; i != end + 1; ++i) {
            sum += code[(i + n) % n];
        }
        
        for (int i = 0; i < n; ++i) {
            result[i] = sum;
            sum -= code[(start + i + n) % n];
            sum += code[(end + 1 + i + n) % n];
        }
        
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int[] decrypt(int[] code, int k) {
        int n = code.length;
        int[] result = new int[n];
        
        if (k == 0) return result;
        
        int start = k > 0 ? 1 : k;
        int end = k > 0 ? k : -1;
        
        int sum = 0;
        for (int i = start; i != end + 1; ++i) {
            sum += code[(i + n) % n];
        }
        
        for (int i = 0; i < n; ++i) {
            result[i] = sum;
            sum -= code[(start + i + n) % n];
            sum += code[(end + 1 + i + n) % n];
        }
        
        return result;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        result = [0] * n
        
        if k == 0:
            return result
        
        start, end = (1, k) if k > 0 else (k, -1)
        
        sum_val = sum(code[i % n] for i in range(start, end + 1))
        
        for i in range(n):
            result[i] = sum_val
            sum_val -= code[(start + i) % n]
            sum_val += code[(end + 1 + i) % n]
        
        return result
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$ due to the sliding window.
- Space Complexity: $O(n)$ for the result array.
- Where `n` is the length of the code array.
- The time complexity is $O(n

)$ because we iterate through each element once with a running sum.
- The space complexity is $O(n)$ because we store the result in a new array.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
