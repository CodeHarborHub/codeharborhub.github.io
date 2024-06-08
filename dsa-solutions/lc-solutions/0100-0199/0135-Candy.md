---
id: candy
title: Candy
sidebar_label: 0135 Candy
tags:
  - Greedy
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Candy problem on LeetCode."
---

## Problem Description

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

### Examples

**Example 1:**

```
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

```

**Example 2:**

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

### Constraints

- $n == ratings.length$
- $1 <= n <= 2 * 10^4$
- $0 <= ratings[i] <= 2 * 10^4$

---

## Solution for Candy Distribution Problem

### Intuition And Approach

To solve this problem, we can use a greedy approach. We can start by assigning each child 1 candy. Then, we iterate over the ratings array twice, once from left to right and once from right to left, adjusting the number of candies as needed to satisfy the given conditions.



#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@YourName"/>
   ```java
public class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        int[] candies = new int[n];

        // Initialize all candies to 1
        for (int i = 0; i < n; i++) {
            candies[i] = 1;
        }

        // Left to right pass
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }

        // Right to left pass
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
                candies[i] = candies[i + 1] + 1;
            }
        }

        int totalCandies = 0;
        for (int candy : candies) {
            totalCandies += candy;
        }

        return totalCandies;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] ratings1 = {1, 0, 2};
        int[] ratings2 = {1, 2, 2};

        System.out.println(solution.candy(ratings1));  // Output: 5
        System.out.println(solution.candy(ratings2));  // Output: 4
    }
}
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@YourName"/>
   ```python
class Solution(object):
    def candy(self, ratings):
        """
        :type ratings: List[int]
        :rtype: int
        """
        n = len(ratings)
        candies = [1] * n

        # Left to right pass
        for i in range(1, n):
            if ratings[i] > ratings[i - 1]:
                candies[i] = candies[i - 1] + 1

        # Right to left pass
        for i in range(n - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                candies[i] = max(candies[i], candies[i + 1] + 1)

        return sum(candies)
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        vector<int> candies(n, 1);

        // Left to right pass
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }

        // Right to left pass
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = max(candies[i], candies[i + 1] + 1);
            }
        }

        // Sum up all candies
        int totalCandies = 0;
        for (int candy : candies) {
            totalCandies += candy;
        }

        return totalCandies;
    }
};
    ```
  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$ where n is the number of children (length of the ratings array).
- Space Complexity: $O(n)$ for storing the candies array.

## References

- **LeetCode Problem:** [Candy Problem](https://leetcode.com/problems/candy/)
- **Solution Link:** [Candy Solution on LeetCode](https://leetcode.com/problems/candy/solutions/5273312/candy-solution)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
