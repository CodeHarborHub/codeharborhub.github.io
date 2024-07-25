---
id: next-greater-element-I
title: Next Greater Element I
sidebar_label: 0496-next-greater-element-I
tags:
  - Array
  - Hash Table
  - Stack
  - Monotonic Stack
description: "This is a solution to the next greater element I problem on LeetCode."
---

## Problem Description

The next greater element of some element `x` in an array is the first greater element that is to the right of `x` in the same array.

You are given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.

For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the next greater element of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is `-1`.

Return an array `ans` of length `nums1.length` such that `ans[i]` is the next greater element as described above.

### Examples

**Example 1:**

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
```

**Example 2:**

```
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
```

### Constraints

- `1 <= nums1.length <= nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 104`
- All integers in `nums1` and `nums2` are unique.
- All the integers of `nums1` also appear in `nums2`.


## Solution for Assign Cookies

### Approach:
The intuitive approach to solve this problem is by using a stack. First, we will iterate through nums2 because this is the array where we're finding the next greater elements. As we want to find the next greater element that occurs after the given element, the stack allows us to keep track of the elements we've seen but haven't yet found a greater element for.

Here is the step-by-step intuition behind the solution:

1. We will create a dictionary called m to map each element in nums2 to its next greater element. This will help in quickly looking up the result for each element in nums1.

2. We will also create an empty stack, stk, to maintain the elements for which we have to find the next greater element.

3. We go through each element v in nums2. For every element v, we do the following:

If the stack is not empty, we check the last element in the stack. If the last element in the stack is less than v, it means that v is the next greater element for that stack's top element. So we pop the top from the stack and record v as the next greater element in our dictionary m.
We continue to compare v with the new top of the stack and do the above step until the stack is empty or the top of the stack is no longer less than v.
We push v onto the stack because we need to find the next greater element for it.

4. Once we have completely processed nums2 in the above way, we have our m dictionary with the next greater elements for all elements in nums2 where they exist.

5. Finally, for each element v in nums1, we look up our dictionary m. If v is in the dictionary, we put m[v] in the result array; otherwise, we put -1.

This approach effectively tracks the elements that are yet to find their next greater element and finds the valid greater elements for them in a single pass through nums2 due to the stack's LIFO property.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@tanyagupta01"/>

```cpp
class Solution {
 public:
  vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
    vector<int> ans;
    unordered_map<int, int> numToNextGreater;
    stack<int> stack;  // a decreasing stack

    for (const int num : nums2) {
      while (!stack.empty() && stack.top() < num)
        numToNextGreater[stack.top()] = num, stack.pop();
      stack.push(num);
    }

    for (const int num : nums1)
      if (const auto it = numToNextGreater.find(num);
          it != numToNextGreater.cend())
        ans.push_back(it->second);
      else
        ans.push_back(-1);

    return ans;
  }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@tanyagupta01"/>

```java
class Solution {
  public int[] nextGreaterElement(int[] nums1, int[] nums2) {
    List<Integer> ans = new ArrayList<>();
    Map<Integer, Integer> numToNextGreater = new HashMap<>();
    Deque<Integer> stack = new ArrayDeque<>(); // a decreasing stack

    for (final int num : nums2) {
      while (!stack.isEmpty() && stack.peek() < num)
        numToNextGreater.put(stack.pop(), num);
      stack.push(num);
    }

    for (final int num : nums1)
      if (numToNextGreater.containsKey(num))
        ans.add(numToNextGreater.get(num));
      else
        ans.add(-1);

    return ans.stream().mapToInt(Integer::intValue).toArray();
  }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@tanyagupta01"/>

```python
class Solution:
  def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
    numToNextGreater = {}
    stack = []  # a decreasing stack

    for num in nums2:
      while stack and stack[-1] < num:
        numToNextGreater[stack.pop()] = num
      stack.append(num)

    return [numToNextGreater.get(num, -1) for num in nums1]
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: O(n)

### Space Complexity: O(n)

## References

- **LeetCode Problem**: [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/description/)

- **Solution Link**: [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/solutions/)
