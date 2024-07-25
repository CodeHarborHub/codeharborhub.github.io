---
id: optimal-division
title: Optimal Division
sidebar_label: 0553 - Optimal Division
tags:
  - Dynamic Programming
  - Math
  - String
description: "This is a solution to the Optimal Division problem on LeetCode."
---

## Problem Description

You are given an integer array `nums`. The adjacent integers in `nums` will perform the float division.

For example, for `nums = [2,3,4]`, we will evaluate the expression `"2/3/4"`.
However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum.

Return the corresponding expression that has the maximum value in string format.

**Note:** your expression should not contain redundant parenthesis.

### Examples

**Example 1:**

```
Input: nums = [1000,100,10,2]
Output: "1000/(100/10/2)"
Explanation: 1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/((100/10)/2)" are redundant since they do not influence the operation priority.
So you should return "1000/(100/10/2)".
Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2
```

**Example 2:**

```
Input: nums = [2,3,4]
Output: "2/(3/4)"
Explanation: (2/(3/4)) = 8/3 = 2.667
It can be shown that after trying all possibilities, we cannot get an expression with evaluation greater than 2.667
```

### Constraints

- `1 <= nums.length <= 10`
- `2 <= nums[i] <= 1000`
- There is only one optimal division for the given input.

## Solution for Optimal Division

### Approach #1 Brute Force
Brute force of this problem is to divide the list into two parts left and right and call function for these two parts. We will iterate i from start to end so that left=(start,i) and right=(i+1,end).

left and right parts return their maximum and minimum value and corresponding strings.

Minimum value can be found by dividing minimum of left by maximum of right i.e. minVal=left.min/right.max.

Similarly,Maximum value can be found by dividing maximum of left value by minimum of right value. i.e. maxVal=left.max/right.min.

Now, how to add parenthesis? As associativity of division operator is from left to right i.e. by default left most divide should be done first, we need not have to add paranthesis to the left part, but we must add parenthesis to the right part.

eg- "2/(3/4)" will be formed as leftPart+"/"+"("+rightPart+")", assuming leftPart is "2" and rightPart is"3/4".

One more point, we also don't require parenthesis to right part when it contains single digit.

eg- "2/3", here left part is "2" and right part is "3" (contains single digit) . 2/(3) is not valid.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <climits>
#include <cfloat>

class Solution {
public:
    std::string optimalDivision(std::vector<int>& nums) {
        T t = optimal(nums, 0, nums.size() - 1);
        return t.max_str;
    }

private:
    struct T {
        float max_val, min_val;
        std::string min_str, max_str;
    };

    T optimal(const std::vector<int>& nums, int start, int end) {
        T t;
        if (start == end) {
            t.max_val = nums[start];
            t.min_val = nums[start];
            t.min_str = std::to_string(nums[start]);
            t.max_str = std::to_string(nums[start]);
            return t;
        }
        t.min_val = FLT_MAX;
        t.max_val = -FLT_MAX;
        t.min_str = t.max_str = "";
        for (int i = start; i < end; ++i) {
            T left = optimal(nums, start, i);
            T right = optimal(nums, i + 1, end);
            if (t.min_val > left.min_val / right.max_val) {
                t.min_val = left.min_val / right.max_val;
                t.min_str = left.min_str + "/" + (i + 1 != end ? "(" : "") + right.max_str + (i + 1 != end ? ")" : "");
            }
            if (t.max_val < left.max_val / right.min_val) {
                t.max_val = left.max_val / right.min_val;
                t.max_str = left.max_str + "/" + (i + 1 != end ? "(" : "") + right.min_str + (i + 1 != end ? ")" : "");
            }
        }
        return t;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    public String optimalDivision(int[] nums) {
        T t = optimal(nums, 0, nums.length - 1, "");
        return t.max_str;
    }
    class T {
        float max_val, min_val;
        String min_str, max_str;
    }
    public T optimal(int[] nums, int start, int end, String res) {
        T t = new T();
        if (start == end) {
            t.max_val = nums[start];
            t.min_val = nums[start];
            t.min_str = "" + nums[start];
            t.max_str = "" + nums[start];
            return t;
        }
        t.min_val = Float.MAX_VALUE;
        t.max_val = Float.MIN_VALUE;
        t.min_str = t.max_str = "";
        for (int i = start; i < end; i++) {
            T left = optimal(nums, start, i, "");
            T right = optimal(nums, i + 1, end, "");
            if (t.min_val > left.min_val / right.max_val) {
                t.min_val = left.min_val / right.max_val;
                t.min_str = left.min_str + "/" + (i + 1 != end ? "(" : "") + right.max_str + (i + 1 != end ? ")" : "");
            }
            if (t.max_val < left.max_val / right.min_val) {
                t.max_val = left.max_val / right.min_val;
                t.max_str = left.max_str + "/" + (i + 1 != end ? "(" : "") + right.min_str + (i + 1 != end ? ")" : "");
            }
        }
        return t;
    }
}
```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    class T:
        def __init__(self):
            self.max_val = float('-inf')
            self.min_val = float('inf')
            self.min_str = ""
            self.max_str = ""

    def optimalDivision(self, nums):
        t = self.optimal(nums, 0, len(nums) - 1)
        return t.max_str

    def optimal(self, nums, start, end):
        t = self.T()
        if start == end:
            t.max_val = nums[start]
            t.min_val = nums[start]
            t.min_str = str(nums[start])
            t.max_str = str(nums[start])
            return t

        for i in range(start, end):
            left = self.optimal(nums, start, i)
            right = self.optimal(nums, i + 1, end)

            if t.min_val > left.min_val / right.max_val:
                t.min_val = left.min_val / right.max_val
                t.min_str = left.min_str + "/" + ("(" if i + 1 != end else "") + right.max_str + (")" if i + 1 != end else "")

            if t.max_val < left.max_val / right.min_val:
                t.max_val = left.max_val / right.min_val
                t.max_str = left.max_str + "/" + ("(" if i + 1 != end else "") + right.min_str + (")" if i + 1 != end else "")

        return t
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N!)$

> **Reason**:  Number of permutations of expression after applying brackets will be in O(N!) where N is the number of items in the list.

### Space Complexity: $O(N^2)$

> **Reason**: Depth of recursion tree will be O(N) and each node contains string of maximum length O(N).

### Approach 2: Using Memorization
#### Algorithm

In the above approach we called optimal function recursively for ever start and end. We can notice that there are many redundant calls in the above approach, we can reduce these calls by using memorization to store the result of different function calls. Here, memo array is used for this purpose.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <climits>
#include <cfloat>

class Solution {
public:
    std::string optimalDivision(std::vector<int>& nums) {
        int n = nums.size();
        std::vector<std::vector<T*>> memo(n, std::vector<T*>(n, nullptr));
        T* t = optimal(nums, 0, n - 1, memo);
        return t->max_str;
    }

private:
    struct T {
        float max_val, min_val;
        std::string min_str, max_str;
        T() : max_val(-FLT_MAX), min_val(FLT_MAX), min_str(""), max_str("") {}
    };

    T* optimal(const std::vector<int>& nums, int start, int end, std::vector<std::vector<T*>>& memo) {
        if (memo[start][end] != nullptr) {
            return memo[start][end];
        }
        T* t = new T();
        if (start == end) {
            t->max_val = nums[start];
            t->min_val = nums[start];
            t->min_str = std::to_string(nums[start]);
            t->max_str = std::to_string(nums[start]);
            memo[start][end] = t;
            return t;
        }
        
        for (int i = start; i < end; ++i) {
            T* left = optimal(nums, start, i, memo);
            T* right = optimal(nums, i + 1, end, memo);

            if (t->min_val > left->min_val / right->max_val) {
                t->min_val = left->min_val / right->max_val;
                t->min_str = left->min_str + "/" + (i + 1 != end ? "(" : "") + right->max_str + (i + 1 != end ? ")" : "");
            }
            if (t->max_val < left->max_val / right->min_val) {
                t->max_val = left->max_val / right->min_val;
                t->max_str = left->max_str + "/" + (i + 1 != end ? "(" : "") + right->min_str + (i + 1 != end ? ")" : "");
            }
        }
        memo[start][end] = t;
        return t;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    class T {
        float max_val, min_val;
        String min_str, max_str;
    }
    public String optimalDivision(int[] nums) {
        T[][] memo = new T[nums.length][nums.length];
        T t = optimal(nums, 0, nums.length - 1, "", memo);
        return t.max_str;
    }
    public T optimal(int[] nums, int start, int end, String res, T[][] memo) {
        if (memo[start][end] != null)
            return memo[start][end];
        T t = new T();
        if (start == end) {
            t.max_val = nums[start];
            t.min_val = nums[start];
            t.min_str = "" + nums[start];
            t.max_str = "" + nums[start];
            memo[start][end] = t;
            return t;
        }
        t.min_val = Float.MAX_VALUE;
        t.max_val = Float.MIN_VALUE;
        t.min_str = t.max_str = "";
        for (int i = start; i < end; i++) {
            T left = optimal(nums, start, i, "", memo);
            T right = optimal(nums, i + 1, end, "", memo);
            if (t.min_val > left.min_val / right.max_val) {
                t.min_val = left.min_val / right.max_val;
                t.min_str = left.min_str + "/" + (i + 1 != end ? "(" : "") + right.max_str + (i + 1 != end ? ")" : "");
            }
            if (t.max_val < left.max_val / right.min_val) {
                t.max_val = left.max_val / right.min_val;
                t.max_str = left.max_str + "/" + (i + 1 != end ? "(" : "") + right.min_str + (i + 1 != end ? ")" : "");
            }
        }
        memo[start][end] = t;
        return t;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    class T:
        def __init__(self):
            self.max_val = float('-inf')
            self.min_val = float('inf')
            self.min_str = ""
            self.max_str = ""

    def optimalDivision(self, nums):
        n = len(nums)
        memo = [[None] * n for _ in range(n)]
        t = self.optimal(nums, 0, n - 1, memo)
        return t.max_str

    def optimal(self, nums, start, end, memo):
        if memo[start][end] is not None:
            return memo[start][end]
        
        t = self.T()
        if start == end:
            t.max_val = nums[start]
            t.min_val = nums[start]
            t.min_str = str(nums[start])
            t.max_str = str(nums[start])
            memo[start][end] = t
            return t

        for i in range(start, end):
            left = self.optimal(nums, start, i, memo)
            right = self.optimal(nums, i + 1, end, memo)

            if t.min_val > left.min_val / right.max_val:
                t.min_val = left.min_val / right.max_val
                t.min_str = left.min_str + "/" + ("(" if i + 1 != end else "") + right.max_str + (")" if i + 1 != end else "")

            if t.max_val < left.max_val / right.min_val:
                t.max_val = left.max_val / right.min_val
                t.max_str = left.max_str + "/" + ("(" if i + 1 != end else "") + right.min_str + (")" if i + 1 != end else "")

        memo[start][end] = t
        return t                
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N^3)$

> **Reason**:  memo array of size $N^2$ is filled and filling of each cell of the memo array takes O(N) time.

### Space Complexity: $O(N^3)$

> **Reason**:  memo array of size $N^2$ where each cell of array contains string of length O(N).

## References

- **LeetCode Problem**: [Optimal Division](https://leetcode.com/problems/optimal-division/description/)

- **Solution Link**: [Optimal Division](https://leetcode.com/problems/optimal-division/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>