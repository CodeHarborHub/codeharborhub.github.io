---
id: put-marble-in-bags
title: Put Marbles in Bags
sidebar_label: 2551 Put Marbles in Bags

tags:
    - Greedy
    - Array
    - Sorting
    - Heap (Priority Queue)
description: "This is a solution to the Put Marbles in Bags
 problem on LeetCode."
---

## Problem Description

You have k bags. You are given a 0-indexed integer array weights where weights[i] is the weight of the ith marble. You are also given the integer k.

Divide the marbles into the k bags according to the following rules:

No bag is empty.
If the ith marble and jth marble are in a bag, then all marbles with an index between the ith and jth indices should also be in that same bag.
If a bag consists of all the marbles with an index from i to j inclusively, then the cost of the bag is weights[i] + weights[j].
The score after distributing the marbles is the sum of the costs of all the k bags.

### Examples

**Example 1:**

```

Input: weights = [1,3,5,1], k = 2
Output: 4
Explanation: 
The distribution [1],[3,5,1] results in the minimal score of (1+1) + (3+1) = 6. 
The distribution [1,3],[5,1], results in the maximal score of (1+3) + (5+1) = 10. 
Thus, we return their difference 10 - 6 = 4.

```

**Example 2:**

```
Input: weights = [1, 3], k = 2
Output: 0
Explanation: The only distribution possible is [1],[3]. 
Since both the maximal and minimal score are the same, we return 0.
```


### Constraints

- `1 <= k <= weights.length <= 105`
- `1 <= weights[i] <= 109`
 

### Approach 

We can transform the problem into: dividing the array `weights` into $k$ consecutive subarrays, that is, we need to find $k-1$ splitting points, each splitting point's cost is the sum of the elements on the left and right of the splitting point. The difference between the sum of the costs of the largest $k-1$ splitting points and the smallest $k-1$ splitting points is the answer.

Therefore, we can process the array `weights` and transform it into an array `arr` of length $n-1$, where `arr[i] = weights[i] + weights[i+1]`. Then we sort the array `arr`, and finally calculate the difference between the sum of the costs of the largest $k-1$ splitting points and the smallest $k-1$ splitting points.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(n)$. Where $n$ is the length of the array `weights`.


#### Python3

```python
class Solution:
    def putMarbles(self, weights: List[int], k: int) -> int:
        arr = sorted(a + b for a, b in pairwise(weights))
        return sum(arr[len(arr) - k + 1 :]) - sum(arr[: k - 1])
```

#### Java

```java
class Solution {
    public long putMarbles(int[] weights, int k) {
        int n = weights.length;
        int[] arr = new int[n - 1];
        for (int i = 0; i < n - 1; ++i) {
            arr[i] = weights[i] + weights[i + 1];
        }
        Arrays.sort(arr);
        long ans = 0;
        for (int i = 0; i < k - 1; ++i) {
            ans -= arr[i];
            ans += arr[n - 2 - i];
        }
        return ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    long long putMarbles(vector<int>& weights, int k) {
        int n = weights.size();
        vector<int> arr(n - 1);
        for (int i = 0; i < n - 1; ++i) {
            arr[i] = weights[i] + weights[i + 1];
        }
        sort(arr.begin(), arr.end());
        long long ans = 0;
        for (int i = 0; i < k - 1; ++i) {
            ans -= arr[i];
            ans += arr[n - 2 - i];
        }
        return ans;
    }
};
```

#### Go

```go
func putMarbles(weights []int, k int) (ans int64) {
	n := len(weights)
	arr := make([]int, n-1)
	for i, w := range weights[:n-1] {
		arr[i] = w + weights[i+1]
	}
	sort.Ints(arr)
	for i := 0; i < k-1; i++ {
		ans += int64(arr[n-2-i] - arr[i])
	}
	return
}
```