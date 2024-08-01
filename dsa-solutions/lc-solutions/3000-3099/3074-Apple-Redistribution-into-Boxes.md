---
id: apple-redistribution-into-boxes
title: Apple Redistribution into Boxes (LeetCode)
sidebar_label: 3074-AppleRedistributionIntoBoxes
tags:
  - Array
  - Greedy
description: Calculate the minimum number of boxes needed to redistribute packs of apples into boxes.
sidebar_position: 3074
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Apple Redistribution into Boxes](https://leetcode.com/problems/apple-redistribution-into-boxes/) | [Apple Redistribution into Boxes Solution on LeetCode](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given an array `apple` of size `n` and an array `capacity` of size `m`.

There are `n` packs where the `i-th` pack contains `apple[i]` apples. There are `m` boxes as well, and the `i-th` box has a capacity of `capacity[i]` apples.

Return the minimum number of boxes you need to select to redistribute these `n` packs of apples into boxes.

Note that apples from the same pack can be distributed into different boxes.

### Example 1

- **Input:** `apple = [1,3,2]`, `capacity = [4,3,1,5,2]`
- **Output:** `2`
- **Explanation:** We will use boxes with capacities `4` and `5`. It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.

### Example 2

- **Input:** `apple = [5,5,5]`, `capacity = [2,4,2,7]`
- **Output:** `4`
- **Explanation:** We will need to use all the boxes.

### Constraints

- `1 <= n == apple.length <= 50`
- `1 <= m == capacity.length <= 50`
- `1 <= apple[i], capacity[i] <= 50`
- The input is generated such that it's possible to redistribute packs of apples into boxes.

## Approach

To solve this problem, follow these steps:

1. Calculate the total number of apples.
2. Sort the `capacity` array in descending order.
3. Select boxes starting from the largest capacity until the total capacity of selected boxes is greater than or equal to the total number of apples.
4. Return the number of boxes selected.

### Solution Code

#### Python

```python
class Solution:
    def minBoxes(self, apple: List[int], capacity: List[int]) -> int:
        total_apples = sum(apple)
        capacity.sort(reverse=True)
        
        current_capacity = 0
        box_count = 0
        
        for cap in capacity:
            current_capacity += cap
            box_count += 1
            if current_capacity >= total_apples:
                break
        
        return box_count
```

#### C++
```c++
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minBoxes(vector<int>& apple, vector<int>& capacity) {
        int total_apples = accumulate(apple.begin(), apple.end(), 0);
        sort(capacity.rbegin(), capacity.rend());
        
        int current_capacity = 0;
        int box_count = 0;
        
        for (int cap : capacity) {
            current_capacity += cap;
            box_count++;
            if (current_capacity >= total_apples) {
                break;
            }
        }
        
        return box_count;
    }
};

```

#### Java
```java
import java.util.Arrays;

class Solution {
    public int minBoxes(int[] apple, int[] capacity) {
        int totalApples = Arrays.stream(apple).sum();
        Arrays.sort(capacity);
        
        int currentCapacity = 0;
        int boxCount = 0;
        
        for (int i = capacity.length - 1; i >= 0; i--) {
            currentCapacity += capacity[i];
            boxCount++;
            if (currentCapacity >= totalApples) {
                break;
            }
        }
        
        return boxCount;
    }
}

```

### Conclusion
The solutions provided demonstrate how to calculate the minimum number of boxes needed to 
redistribute packs of apples into boxes using a greedy algorithm. By selecting boxes with the 
largest capacities first, we can minimize the number of boxes required efficiently.