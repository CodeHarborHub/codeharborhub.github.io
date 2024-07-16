---
id: Two-Furthest-Houses-With-Different-Colors
title:  Two Furthest Houses With Different Colors
sidebar_label: 2278-Two Furthest Houses With Different Colors
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

Return the maximum distance between two houses with different colors.

The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.
### Examples

**Example 1:**

Input: colors = [1,1,1,6,1,1,1]
Output: 3
Explanation: In the above image, color 1 is blue, and color 6 is red.
The furthest two houses with different colors are house 0 and house 3.
House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
Note that houses 3 and 6 can also produce the optimal answer.

**Example 2:**

Input: colors = [1,8,3,8,3]
Output: 4
Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
The furthest two houses with different colors are house 0 and house 4.
House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.

**Example 3"**

Input: colors = [0,1]
Output: 1
Explanation: The furthest two houses with different colors are house 0 and house 1.
House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.


### Constraints

- `n == colors.length`
- `2 <= n <= 100`
- `0 <= colors[i] <= 100`
-` Test data are generated such that at least two houses have different colors.`

### Approach

Identify Extremes:

- Calculate the distance between the first house and the farthest house with a different color.
- Calculate the distance between the last house and the farthest house with a different color.

Maximize Distance:
- Use the distances found in step 1 to determine the maximum distance between houses of different colors.

Return Result:
- Return the maximum of the calculated distances.


### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int maxDistance(vector<int>& colors) {
    int n = colors.size();
    int maxDist = 0;

    for (int i = 0; i < n; ++i) {
        for (int j = n - 1; j > i; --j) {
            if (colors[i] != colors[j]) {
                maxDist = max(maxDist, abs(j - i));
                break;  // since we want the maximum distance, we break here
            }
        }
    }
    return maxDist;
}

int main() {
    vector<int> colors1 = {1, 1, 1, 6, 1, 1, 1};
    vector<int> colors2 = {1, 8, 3, 8, 3};
    vector<int> colors3 = {0, 1};

    cout << maxDistance(colors1) << endl;  // Output: 3
    cout << maxDistance(colors2) << endl;  // Output: 4
    cout << maxDistance(colors3) << endl;  // Output: 1

    return 0;
}



```

### Java Solution

```java
public class MaxDistance {
    public static int maxDistance(int[] colors) {
        int n = colors.length;
        int maxDist = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = n - 1; j > i; --j) {
                if (colors[i] != colors[j]) {
                    maxDist = Math.max(maxDist, Math.abs(j - i));
                    break;  // since we want the maximum distance, we break here
                }
            }
        }
        return maxDist;
    }

    public static void main(String[] args) {
        int[] colors1 = {1, 1, 1, 6, 1, 1, 1};
        int[] colors2 = {1, 8, 3, 8, 3};
        int[] colors3 = {0, 1};

        System.out.println(maxDistance(colors1));  // Output: 3
        System.out.println(maxDistance(colors2));  // Output: 4
        System.out.println(maxDistance(colors3));  // Output: 1
    }
}


```

### Python Solution

```python
def max_distance(colors):
    n = len(colors)
    max_dist = 0

    for i in range(n):
        for j in range(n - 1, i, -1):
            if colors[i] != colors[j]:
                max_dist = max(max_dist, abs(j - i))
                break  # since we want the maximum distance, we break here

    return max_dist

# Example usage:
colors1 = [1, 1, 1, 6, 1, 1, 1]
colors2 = [1, 8, 3, 8, 3]
colors3 = [0, 1]

print(max_distance(colors1))  # Output: 3
print(max_distance(colors2))  # Output: 4
print(max_distance(colors3))  # Output: 1



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:We iterate through the list of houses once to check distances from both ends, resulting in a linear time complexity.

### Space Complexity: $O(1)$

> **Reason**: We use a constant amount of additional space for variables to store distances and the maximum distance, leading to a constant space complexity.

