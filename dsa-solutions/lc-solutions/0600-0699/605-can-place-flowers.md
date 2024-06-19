---
id: can-place-flowers
title: Can Place Flowers (Leetcode)
sidebar_label: 0605-CanPlaceFlowers
description: You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/) | [Can Place Flowers Solution on LeetCode](https://leetcode.com/problems/can-place-flowers/solutions) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing $0$'s and $1$'s, where $0$ means empty and 1 means not empty, and an integer $n$, return true if $n$ new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

### Examples

#### Example 1

- **Input:** $flowerbed = [1,0,0,0,1], n = 1$
- **Output:** $true$


#### Example 2

- **Input:** $flowerbed = [1,0,0,0,1], n = 2$
- **Output:** $false$

### Constraints

- $1 <= flowerbed.length <= 2 * 104$
- $flowerbed[i]$ is 0 or 1.
- There are no two adjacent flowers in $flowerbed$.
- $1 <= k <= 109$


### Intuition

The code aims to determine if it's possible to plant n flowers in a flowerbed without violating the no-adjacent-flowers rule. It iterates through the flowerbed array and checks if a flower can be planted at each position by ensuring the current position and its adjacent positions are empty (or out of bounds). If a flower can be planted, it updates the position and decrements the count of flowers left to plant. The process continues until either all flowers are planted or all positions are checked. If the count of flowers to be planted reaches zero, it returns true, indicating success; otherwise, it returns false.


### Approach

1. **Initialize Variables:**

    - Determine the size of the flowerbed array.

2. **Iterate Through the Flowerbed:**

    - Use a for loop to traverse each position in the flowerbed array.
    - Continue the loop as long as there are positions to check and flowers to plant (n > 0).

3. **Check Conditions for Planting a Flower:**

    - At each position i, check if the current position is empty (flowerbed[i] == 0).
    - Also, check if the previous position (if it exists) is empty or out of bounds (i == 0 || flowerbed[i - 1] == 0).
    - Similarly, check if the next position (if it exists) is empty or out of bounds (i == size - 1 || flowerbed[i + 1] == 0).

4. **Plant the Flower:**

    - If all conditions are met, plant a flower at position i by setting flowerbed[i] = 1.
    - Decrease the count of flowers left to plant (n--).

5. **Check if All Flowers Are Planted:**

    - After the loop, check if the count of flowers left to plant is zero.
    - If n is zero, return true indicating that all flowers have been successfully planted.
    - If n is not zero, return false indicating that it's not possible to plant all n flowers.

### Solution Code

#### Python

```py
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        size = len(flowerbed)
        
        for i in range(size):
            if n == 0:
                return True
            if flowerbed[i] == 0 and (i == 0 or flowerbed[i - 1] == 0) and (i == size - 1 or flowerbed[i + 1] == 0):
                flowerbed[i] = 1  # Place a flower
                n -= 1  # Decrease the remaining flowers to place

        return n == 0
```

#### Java

```java
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int size = flowerbed.length;

        for (int i = 0; i < size && n > 0; i++) {
            if (flowerbed[i] == 0 &&
                (i == 0 || flowerbed[i - 1] == 0) &&
                (i == size - 1 || flowerbed[i + 1] == 0)) {
                flowerbed[i] = 1;  // Place a flower
                n--;  // Decrease the remaining flowers to place
            }
        }

        return n == 0;
    }
}
```

#### C++

```cpp
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int size = flowerbed.size();
        for (int i = 0; i < size && n > 0; i++) {
            if (flowerbed[i] == 0 &&
                (i == 0 || flowerbed[i - 1] == 0) &&
                (i == size - 1 || flowerbed[i + 1] == 0)) {
                flowerbed[i] = 1;  // Place a flower
                n--;  // Decrease the remaining flowers to place
            }
        }
        return n == 0;
    }
};
```

### Conclusion

The provided code effectively determines whether it is possible to plant n flowers in a given flowerbed array without violating the no-adjacent-flowers rule. By iterating through the array and checking each position for the possibility of planting a flower based on the state of the adjacent positions, the code ensures that flowers are planted only where allowed. The solution modifies the array in place and uses a greedy approach to place as many flowers as possible. The time complexity of this approach is $O(n)$, where nn is the length of the flowerbed array, as each position is checked once. The space complexity is $O(1)$ since the solution only uses a constant amount of extra space.