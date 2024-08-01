---
id: Fruits-Into-Baskets
title: Fruits-Into-Baskets
sidebar_label: Fruits-Into-Baskets
tags: 
    - Array
    - Sliding Window
    - Two Baskets
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Fruits-Into-Baskets](https://leetcode.com/problems/fruit-into-baskets/description/) | [Fruits-Into-Baskets Solution on LeetCode](https://leetcode.com/problems/fruit-into-baskets/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array `fruits` where `fruits[i]` is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

- You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
- Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array `fruits`, return the maximum number of fruits you can pick.

## Example 1

**Input:** `fruits = [1, 2, 1]`
**Output:** `3`
**Explanation:** `We can pick from all 3 trees.`

## Example 2

**Input:** `fruits = [0, 1, 2, 2]`
**Output:** `3`
**Explanation:** `We can pick from trees [1, 2, 2]. If we had started at the first tree, we would only pick from trees [0, 1].`

## Example 3

**Input:** `fruits = [1, 2, 3, 2, 2]`
**Output:** `4`
**Explanation:** `We can pick from trees [2, 3, 2, 2]. If we had started at the first tree, we would only pick from trees [1, 2].`

## Constraints

- `1 <= fruits.length <= 10^5`
- `0 <= fruits[i] < fruits.length`

## Approach

We can solve this problem using the sliding window technique. The idea is to maintain a window that contains at most two types of fruits. We move the right end of the window to the right, adding fruits to our baskets. If we encounter a third type of fruit, we move the left end of the window to the right until we have only two types of fruits again.

## Solution

### Python

```python
def totalFruit(fruits):
    basket = {}
    left = 0
    max_fruits = 0

    for right in range(len(fruits)):
        basket[fruits[right]] = basket.get(fruits[right], 0) + 1

        while len(basket) > 2:
            basket[fruits[left]] -= 1
            if basket[fruits[left]] == 0:
                del basket[fruits[left]]
            left += 1

        max_fruits = max(max_fruits, right - left + 1)

    return max_fruits
```

### Java

```java
import java.util.HashMap;

public class MaxFruitPicking {
    public int totalFruit(int[] fruits) {
        HashMap<Integer, Integer> basket = new HashMap<>();
        int left = 0, maxFruits = 0;

        for (int right = 0; right < fruits.length; right++) {
            basket.put(fruits[right], basket.getOrDefault(fruits[right], 0) + 1);

            while (basket.size() > 2) {
                basket.put(fruits[left], basket.get(fruits[left]) - 1);
                if (basket.get(fruits[left]) == 0) {
                    basket.remove(fruits[left]);
                }
                left++;
            }

            maxFruits = Math.max(maxFruits, right - left + 1);
        }

        return maxFruits;
    }
}
```

### C++

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    int totalFruit(std::vector<int>& fruits) {
        std::unordered_map<int, int> basket;
        int left = 0, maxFruits = 0;

        for (int right = 0; right < fruits.size(); right++) {
            basket[fruits[right]]++;

            while (basket.size() > 2) {
                basket[fruits[left]]--;
                if (basket[fruits[left]] == 0) {
                    basket.erase(fruits[left]);
                }
                left++;
            }

            maxFruits = std::max(maxFruits, right - left + 1);
        }

        return maxFruits;
    }
};
```

### C

```c
#include <stdio.h>
#include <stdlib.h>

int totalFruit(int* fruits, int fruitsSize) {
    int* basket = (int*)calloc(fruitsSize, sizeof(int));
    int left = 0, maxFruits = 0, basketCount = 0;

    for (int right = 0; right < fruitsSize; right++) {
        if (basket[fruits[right]]++ == 0) {
            basketCount++;
        }

        while (basketCount > 2) {
            if (--basket[fruits[left]] == 0) {
                basketCount--;
            }
            left++;
        }

        maxFruits = maxFruits > (right - left + 1) ? maxFruits : (right - left + 1);
    }

    free(basket);
    return maxFruits;
}
```

### JavaScript

```javascript
var totalFruit = function(fruits) {
    let basket = new Map();
    let left = 0;
    let maxFruits = 0;

    for (let right = 0; right < fruits.length; right++) {
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

        while (basket.size > 2) {
            basket.set(fruits[left], basket.get(fruits[left]) - 1);
            if (basket.get(fruits[left]) === 0) {
                basket.delete(fruits[left]);
            }
            left++;
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
};
```

## Step-by-Step Algorithm

1. Initialize a dictionary or hashmap to keep track of the count of each type of fruit in the current window.
2. Initialize two pointers, `left` and `right`, both set to the start of the array.
3. Initialize a variable `max_fruits` to store the maximum number of fruits collected.
4. Iterate through the array using the `right` pointer.
5. Add the fruit at the `right` pointer to the dictionary and update its count.
6. If the dictionary contains more than two types of fruits, move the `left` pointer to the right until only two types of fruits are in the dictionary.
7. Update `max_fruits` with the maximum value between `max_fruits` and the current window size (`right - left + 1`).
8. Continue iterating until the end of the array.
9. Return `max_fruits`.

## Conclusion

This problem can be efficiently solved using the sliding window technique. By maintaining a window that contains at most two types of fruits and adjusting the window size as needed, we can find the maximum number of fruits that can be collected. This approach ensures that the solution is optimal and runs in linear time.