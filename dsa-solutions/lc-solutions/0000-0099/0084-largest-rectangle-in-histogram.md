---
id: largest-rectangle-in-histogram
title: Largest Rectangle in Histogram (Leetcode)
sidebar_label: 0084-Largest Rectangle In Histogram
description: Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Largest Rectangle in Histogram ](https://leetcode.com/problems/largest-rectangle-in-histogram/description/) | [Largest Rectangle in Histogram Solution on LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

### Examples

#### Example 1

- **Input:** $heights = [2,1,5,6,2,3]$
- **Output:** $10$
- **Explanation:** The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an $area = 10$ units.


#### Example 2

- **Input:** $heights = [2,4]$
- **Output:** $4$

### Constraints


- $1 <= heights.length <= 105$
- $0 <= heights[i] <= 104$


### Intuition


The code uses stacks to find the next smaller and previous smaller elements for each height in a histogram. It then computes the area of the largest rectangle that can be formed using each height as the base, considering the width as the difference between the indices of the next smaller and previous smaller elements. The maximum area among all rectangles is returned as the result, representing the largest rectangle area in the histogram.


### Approach

1. **Next Smaller Element Calculation:**

    - Use a stack to find the indices of the next smaller elements for each height in the histogram, iterating from right to left.

2. **Previous Smaller Element Calculation:**

    - Similarly, use a stack to find the indices of the previous smaller elements for each height, iterating from left to right.

3. **Largest Rectangle Area Calculation:**

    - Calculate the largest rectangle area in the histogram using the indices of next and previous smaller elements obtained from the previous steps.
    - Determine the width of each rectangle as the difference between these indices.
    - Compute the area for each rectangle and track the maximum area found.

### Solution Code

#### Python

```py
class Solution:
    def next_smaller_element(self, arr, n):
        ans = [-1] * n
        stack = [-1]

        for i in range(n - 1, -1, -1):
            curr = arr[i]
            while stack[-1] != -1 and arr[stack[-1]] >= curr:
                stack.pop()
            ans[i] = stack[-1]
            stack.append(i)
        return ans

    def prev_smaller_element(self, arr, n):
        ans = [-1] * n
        stack = [-1]

        for i in range(n):
            curr = arr[i]
            while stack[-1] != -1 and arr[stack[-1]] >= curr:
                stack.pop()
            ans[i] = stack[-1]
            stack.append(i)
        return ans

    def largestRectangleArea(self, heights):
        n = len(heights)

        next_smaller = self.next_smaller_element(heights, n)
        prev_smaller = self.prev_smaller_element(heights, n)

        area = float("-inf")

        for i in range(n):
            l = heights[i]
            if next_smaller[i] == -1:
                next_smaller[i] = n
            b = next_smaller[i] - prev_smaller[i] - 1
            new_area = l * b
            area = max(area, new_area)

        return area
```

#### Java

```java 

import java.util.*;

class Solution {
    private int[] nextSmallerElement(int[] arr, int n) {
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);

        for (int i = n - 1; i >= 0; i--) {
            int curr = arr[i];
            while (stack.peek() != -1 && arr[stack.peek()] >= curr) {
                stack.pop();
            }
            ans[i] = stack.peek();
            stack.push(i);
        }
        return ans;
    }

    private int[] prevSmallerElement(int[] arr, int n) {
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);

        for (int i = 0; i < n; i++) {
            int curr = arr[i];
            while (stack.peek() != -1 && arr[stack.peek()] >= curr) {
                stack.pop();
            }
            ans[i] = stack.peek();
            stack.push(i);
        }
        return ans;
    }

    public int largestRectangleArea(int[] heights) {
        int n = heights.length;

        int[] next = nextSmallerElement(heights, n);
        int[] prev = prevSmallerElement(heights, n);

        int area = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            int l = heights[i];
            if (next[i] == -1) {
                next[i] = n;
            }
            int b = next[i] - prev[i] - 1;
            int newArea = l * b;
            area = Math.max(area, newArea);
        }

        return area;
    }
}
```

#### C++

```cpp
#include<stack>

#include <vector>
#include <stack>
#include <algorithm> // for max function
#include <climits>   // for INT_MIN

class Solution {
private:
    vector<int> next_smaller_element(vector<int> arr, int n) {
        vector<int> ans(n);
        stack<int> s;
        s.push(-1);

        for (int i = n - 1; i >= 0; i--) 
        {
           int curr = arr[i] ;
            while (s.top() != -1 && arr[s.top()] >= curr) 
            {
              s.pop();
            }
            ans[i] = s.top();
            s.push(i); 
        }
        return ans;
    }

    vector<int> prev_smaller_element(vector<int> arr, int n) {
        vector<int> ans(n);
        stack<int> s;
        s.push(-1);

        for (int i = 0; i < n; i++) 
        {
          int curr = arr[i];
            while (s.top() != -1 && arr[s.top()] >= curr) 
            {
              s.pop();
            }
            ans[i] = s.top();
            s.push(i);
        }
        return ans;
    }

public:
    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();

        vector<int> next(n);
        next = next_smaller_element(heights, n);

        vector<int> prev(n);
        prev = prev_smaller_element(heights, n);

        int area = INT_MIN;

        for (int i = 0; i < n; i++) {
            int l = heights[i];
            if (next[i] == -1) 
            {
                next[i] = n;
            }
            int b = next[i] - prev[i] - 1;
            int newarea = l * b;
            area = max(area, newarea);
        }
        return area;
    }
};
```

### Conclusion

The provided code efficiently calculates the largest rectangle area in a histogram using stack-based techniques. It implements functions to find the next smaller and previous smaller elements for each height in the histogram, which are crucial for computing the area of the largest rectangle. The code has a time complexity of $O(n)$ and a space complexity of $O(n)$, where n is the number of elements in the input array representing the histogram. Overall, this code offers an effective approach to solving the largest rectangle area problem in a histogram.removal in a sorted linked list.
