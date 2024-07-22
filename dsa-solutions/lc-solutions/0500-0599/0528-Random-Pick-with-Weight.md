---
id: random-pick-with-weight
title: Random Pick With Weight
sidebar_label: 0528-Random-Pick-with-Weight
tags:
- Array
- Math
- Binary Search
- Prefix Sum
description: solution to the leetcode problem Random Pick With Weight.
---

## Problem

You are given a 0-indexed array of positive integers `w` where `w[i]` describes the weight of the `i`th index.

You need to implement the function `pickIndex()`, which randomly picks an index in the range `[0, w.length - 1]` (inclusive) and returns it. The probability of picking an index `i` is `w[i] / sum(w)`.

For example, if `w = [1, 3]`, the probability of picking index `0` is `1 / (1 + 3) = 0.25` (i.e., 25%), and the probability of picking index `1` is `3 / (1 + 3) = 0.75` (i.e., 75%).

Sure, here is the markdown with input, output, and explanation all in one go:

### Examples

**Example 1:**

Input:
```
["Solution","pickIndex"]
[[[1]],[]]
```
Output:
```
[null,0]
```
Explanation:
```
Solution solution = new Solution([1]);
solution.pickIndex(); // return 0. The only option is to return 0 since there is only one element in w.
```

**Example 2:**

Input:
```
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
```
Output:
```
[null,1,1,1,1,0]
```
Explanation:
```
Solution solution = new Solution([1, 3]);
solution.pickIndex(); // return 1. It is returning the second element (index = 1) that has a probability of 3/4.
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 0. It is returning the first element (index = 0) that has a probability of 1/4.
```

Since this is a randomization problem, multiple answers are allowed.  
All of the following outputs can be considered correct:
```
[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
```
and so on.

### Constraints

- $1 <= w.length <= 10^4$
- $1 <= w[i] <= 10^5$
- `pickIndex` will be called at most `10^4` times.
```


## Solution

```cpp
class Solution {
  public:
    Solution(vector<int>& w) {
      int last = 0;
      for (auto const& len : w) {
        range.push_back({last, last + len});
        last += len;
      }
      srand(time(nullptr)); 
    }

    int pickIndex() {
      int logical_index = std::rand() % range.back().second; 
      int lo = 0, hi = range.size() - 1;
      while (lo <= hi) {
        int mid = (lo + hi)/2;

        if (logical_index >= range[mid].first && logical_index < range[mid].second) {
          return mid;
        } else if (logical_index < range[mid].first) {
          hi = mid - 1;
        } else {
          lo = mid + 1;
        }
      }
      return -1;
    }
  private:
    vector<pair<int, int>> range;
};
```

```java
class Solution {

    Random random;
    int[] wSums;
    
    public Solution(int[] w) {
        this.random = new Random();
        for(int i=1; i<w.length; ++i)
            w[i] += w[i-1];
        this.wSums = w;
    }
    
    public int pickIndex() {
        int len = wSums.length;
        int idx = random.nextInt(wSums[len-1]) + 1;
        int left = 0, right = len - 1;
        // search position 
        while(left < right){
            int mid = left + (right-left)/2;
            if(wSums[mid] == idx)
                return mid;
            else if(wSums[mid] < idx)
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
}
```

### Complexity Analysis

- **Time Complexity:** $O(\log N)$
- **Space Complexity:** $O(N)$
