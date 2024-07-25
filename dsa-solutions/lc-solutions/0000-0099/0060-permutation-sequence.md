---
id: permutation-sequence
title: Permutation Sequence(LeetCode)
sidebar_label: 0060-Permutation Sequence
tags:
  - Math
  - Recursion
description: The set [1, 2, 3, ..., n] contains a total of n! unique permutations. Given n and k, return the kth permutation sequence.
---

## Problem Statement

The set `[1, 2, 3, ..., n]` contains a total of `n!` unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for `n = 3`:

1. `"123"`
2. `"132"`
3. `"213"`
4. `"231"`
5. `"312"`
6. `"321"`
Given `n` and `k`, return the `kth` permutation sequence.

### Examples

**Example 1:**

```plaintext
Input: n = 3, k = 3
Output: "213"
```

**Example 2:**

```plaintext
Input: n = 4, k = 9
Output: "2314"
```

**Example 3:**

```plaintext
Input: n = 3, k = 1
Output: "123"
```

### Constraints

- `1 <= n <= 9`
- `1 <= k <= n!`

## Solution

### Approach

#### Algorithm

1. Initialize Factorial Values:
* Precompute and store the factorial values of integers from 0 to 9 in a vector `factVal` to get factorials in O(1) time.
2. Initialize Array:
* Create a vector `v` containing elements from 1 to `n`.
3. Recursive Function `setPerm`:
* Base Case: If `n == 1`, append the last remaining element in `v` to `ans` and return.
* Calculate the required index using `k / factVal[n-1]`.
* Handle the corner case where if `k` is a multiple of `(n-1)!`, decrement the index by 1.
* Append the element at the calculated index from `v` to `ans`.
* Remove the selected element from `v`.
* Adjust the value of `k` to be the remainder after dividing by `factVal[n-1]`.
* Make a recursive call with updated values of `n`, `k`, `v`, and `ans`.
4. Construct Result:
* Initialize an empty string `ans`.
* Call the recursive function setPerm with initial values of `v`, `ans`, `n`, `k`, and `factVal`.
* Return the result `ans`.

#### Implementation

```C++
class Solution {
public:
    void setPerm(vector<int>& v, string& ans, int n, int k, vector<int>& factVal) {
        if (n == 1) {
            ans += to_string(v.back());
            return;
        }
        
        int index = (k / factVal[n-1]);
        if (k % factVal[n-1] == 0) {
            index--;
        }
        
        ans += to_string(v[index]);
        v.erase(v.begin() + index);
        k -= factVal[n-1] * index;
        setPerm(v, ans, n-1, k, factVal);
    }
    
    string getPermutation(int n, int k) {
        if (n == 1) return "1";
        
        vector<int> factVal = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};
        string ans = "";
        vector<int> v;
        for (int i = 1; i <= n; i++) v.emplace_back(i);
        
        setPerm(v, ans, n, k, factVal);
        return ans;
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(N^2)$
- **Space complexity**: $O(N)$

### Conclusion

This algorithm efficiently finds the k-th permutation of a set of n elements by using a combination of precomputed factorials and recursive selection. The approach ensures that the computation is done in a systematic manner without generating all permutations.
