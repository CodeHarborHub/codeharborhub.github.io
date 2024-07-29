---
id: pancake-sorting
title: Pancake Sorting
sidebar_label: 969-Pancake Sorting
tags:
  - Sorting
  - Array
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Pancake Sorting problem on LeetCode."
sidebar_position: 13
---

## Problem Description

Given an array of integers `arr`, sort the array by performing a series of pancake flips.

In one pancake flip, we do the following steps:
1. Choose an integer `k` where `1 <= k <= arr.length`.
2. Reverse the sub-array `arr[0...k-1]` (0-indexed).

For example, if `arr = [3,2,1,4]` and we performed a pancake flip choosing `k = 3`, we reverse the sub-array `[3,2,1]`, so `arr = [1,2,3,4]` after the pancake flip at `k = 3`.

Return an array of the `k`-values corresponding to a sequence of pancake flips that sort `arr`. Any valid answer that sorts the array within `10 * arr.length` flips will be judged as correct.

### Examples

**Example 1:**

```
Input: arr = [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: arr = [3, 2, 4, 1]
After 1st flip (k = 4): arr = [1, 4, 2, 3]
After 2nd flip (k = 2): arr = [4, 1, 2, 3]
After 3rd flip (k = 4): arr = [3, 2, 1, 4]
After 4th flip (k = 3): arr = [1, 2, 3, 4], which is sorted.
```

**Example 2:**

```
Input: arr = [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.
```

### Constraints

- `1 <= arr.length <= 100`
- `1 <= arr[i] <= arr.length`
- All integers in `arr` are unique (i.e., `arr` is a permutation of the integers from 1 to `arr.length`).

---

## Solution for Pancake Sorting Problem

To solve this problem, we perform a series of pancake flips to sort the array in ascending order. A pancake flip reverses the sub-array from the start to a chosen index `k`. The goal is to bring the largest unsorted element to its correct position iteratively.

### Approach

1. **Identify Largest Element:** Find the largest unsorted element in the array.
2. **Bring to Front:** If this largest element is not already at the front, flip it to bring it to the front.
3. **Move to Correct Position:** Flip the entire sub-array up to the correct position of the largest element to place it at its sorted position.
4. **Repeat:** Repeat the above steps for the next largest unsorted elements, excluding the already sorted part of the array.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> pancakeSort(vector<int>& arr) {
        vector<int> res;
        int n = arr.size();
        for (int i = n; i > 1; --i) {
            int maxIdx = max_element(arr.begin(), arr.begin() + i) - arr.begin();
            if (maxIdx == i - 1) continue;
            if (maxIdx != 0) {
                res.push_back(maxIdx + 1);
                reverse(arr.begin(), arr.begin() + maxIdx + 1);
            }
            res.push_back(i);
            reverse(arr.begin(), arr.begin() + i);
        }
        return res;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public List<Integer> pancakeSort(int[] arr) {
        List<Integer> res = new ArrayList<>();
        int n = arr.length;
        for (int i = n; i > 1; --i) {
            int maxIdx = findMaxIndex(arr, i);
            if (maxIdx == i - 1) continue;
            if (maxIdx != 0) {
                res.add(maxIdx + 1);
                flip(arr, maxIdx + 1);
            }
            res.add(i);
            flip(arr, i);
        }
        return res;
    }

    private int findMaxIndex(int[] arr, int k) {
        int maxIdx = 0;
        for (int i = 1; i < k; i++) {
            if (arr[i] > arr[maxIdx]) {
                maxIdx = i;
            }
        }
        return maxIdx;
    }

    private void flip(int[] arr, int k) {
        for (int i = 0, j = k - 1; i < j; i++, j--) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def pancakeSort(self, arr: List[int]) -> List[int]:
        res = []
        n = len(arr)
        for i in range(n, 1, -1):
            max_idx = arr.index(max(arr[:i]))
            if max_idx == i - 1:
                continue
            if max_idx != 0:
                res.append(max_idx + 1)
                arr[:max_idx + 1] = arr[:max_idx + 1][::-1]
            res.append(i)
            arr[:i] = arr[:i][::-1]
        return res
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n^2)$, where `n` is the length of the array. Finding the maximum and flipping can each take up to `O(n)`, and we do this for each of the `n` elements.
- **Space Complexity**: $O(1)$, excluding the output list.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
