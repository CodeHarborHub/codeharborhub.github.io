---
id: Fruit-Into-Baskets
title: Fruit Into Baskets
sidebar_label: 0904 - Fruit Into Baskets
tags:
  - intermediate
  - Sliding Window
  - Two Pointers
  - Arrays
  - Fruits
  - Algorithms
---

## Problem Description

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

## Examples

**Example 1:**

```
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
```

**Example 2:**

```
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
```

**Example 3:**

```
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `totalFruit()` which takes an integer array `fruits` as input parameter and returns the maximum number of fruits you can pick.

## Constraints

```
1 <= fruits.length <= 10^5
0 <= fruits[i] <= fruits.length
```

## Solution Approach

### Sliding Window Approach

#### Intuition:

We can use a sliding window approach to keep track of the two types of fruits. We expand the window by adding fruits to the baskets until we encounter a third type of fruit. At that point, we shrink the window from the left until we only have two types of fruits.

#### Implementation:

1. Use a dictionary to count the number of each type of fruit in the current window.
2. Use two pointers to represent the left and right boundaries of the window.
3. Expand the right pointer to include more fruits in the window.
4. When the window contains more than two types of fruits, move the left pointer to reduce the window size until only two types remain.
5. Keep track of the maximum window size encountered.

#### Code (Python):

```python
class Solution:
    def totalFruit(self, fruits):
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

# Example usage:
solution = Solution()
print(solution.totalFruit([1,2,1]))  # Output: 3
```

#### Code (C++):

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        unordered_map<int, int> basket;
        int left = 0, max_fruits = 0;
        for (int right = 0; right < fruits.size(); ++right) {
            basket[fruits[right]]++;
            while (basket.size() > 2) {
                basket[fruits[left]]--;
                if (basket[fruits[left]] == 0) {
                    basket.erase(fruits[left]);
                }
                left++;
            }
            max_fruits = max(max_fruits, right - left + 1);
        }
        return max_fruits;
    }
};

// Example usage:
int main() {
    Solution solution;
    vector<int> fruits = {1, 2, 1};
    int result = solution.totalFruit(fruits);  // Output: 3
    return 0;
}
```

#### Code (Java):

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int totalFruit(int[] fruits) {
        Map<Integer, Integer> basket = new HashMap<>();
        int left = 0, maxFruits = 0;
        for (int right = 0; right < fruits.length; ++right) {
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

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] fruits = {1, 2, 1};
        System.out.println(solution.totalFruit(fruits));  // Output: 3
    }
}
```

#### Code (JavaScript):

```javascript
var totalFruit = function (fruits) {
  let basket = new Map();
  let left = 0,
    maxFruits = 0;
  for (let right = 0; right < fruits.length; ++right) {
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

// Example usage:
console.log(totalFruit([1, 2, 1])); // Output: 3
```

#### Complexity:

- **Time Complexity:** $O(n)$, where $n$ is the length of the input array `fruits`. We traverse the array once with the two pointers.
- **Space Complexity:** $O(1)$, since the dictionary or map will hold at most three keys at any time.
