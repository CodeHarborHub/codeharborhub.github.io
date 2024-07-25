---
id: jump-game
title: Jump Game
sidebar_label: 0055 - Jump-Game
tags:
  - Array
  - Dynamic programming
  - Greedy
description: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position."
---

## Problem Description

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


### Examples

**Example 1:**

```
Input nums = [2,3,1,1,4]
Output true
```
**Explanation:**
```
Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: nums = [3,2,1,0,4]
Output: false
```
**Explanation :**

```
You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```
### Constraints

- `1 <= nums.length <= 104`
- `0 <= nums[i] <= 105`


### Solution for Jump Game

### Intuition
Move goal position to the left if we meet a simple condition.


## Approach
We have several ways to reach goal(= the last index) or other index from a current position, so my strategy is to move goal to left position if we meet a simple condition.

The condition is

- if current position + maximum jump >= goal
- If we meet the condition we update goal with current index.

- Let's see how it works.

- Input: `nums = [2,3,1,1,4]`
We start at the second position from the last.
```
[2,3,1,1,4]
       i g

i = current position
g = goal 
```

- Let's use the formula above.

```current position + maximum jump >= goal
= 3 + 1 >= 4
= true```

- We can reach the current goal(= index 4) from current position(= index 3), that means if we reach index 3, we are sure that we can definitely reach the goal(= the last index).

- That's why we can move goal to index 3.

Next,
```
[2,3,1,1,4]
     i g
current position + maximum jump >= goal
= 2 + 1 >= 3
= true
```
- If true, we are sure we can reach index 3 from index 2. We know that if we reach index 3, we can reach the last index, so update goal with index 2. In the next time, if we can reach index 2, that means we can reach the last index(= 4)

Next,
```
[2,3,1,1,4]
   i g
I'll speed up.

current position + maximum jump >= goal
= 1 + 3 >= 2
= true
[2,3,1,1,4]
 i g
current position + maximum jump >= goal
= 0 + 2 >= 1
= true
In the end,

[2,3,1,1,4]
 g
 ```
- Now, goal is index 0. That means we can reach the goal because we start from index 0, so before we return true or false, we check this condition.

```if goal == 0
In this case

return true
```

### Complexity Analysis

#### Time Complexity: $O(n)$

#### Space Complexity: $O(1)$



## Step by Step Algorithm

1. ### Initialization:

```goal = len(nums) - 1```
`goal = len(nums) - 1: `
Initialize the variable goal to the last index of the array nums. This represents the goal position we want to reach.

2. ### Main Loop:
```for i in range(len(nums) - 2, -1, -1):```

`for i in range(len(nums) - 2, -1, -1):` Iterate backward through the array nums, starting from the second to last element down to the first element.

3. ### Checking Jumpability:

```if i + nums[i] >= goal:```
`if i + nums[i] >= goal: `Check if the current index i plus the maximum jump length at that position (nums[i]) is greater than or equal to the goal. If it is, it means we can jump from index i to the goal or beyond.

4. ### Updating Goal:

```goal = i```
`goal = i:` If the condition in step 3 is met, update the goal to the current index i. This means we have found a new closer position from which we can reach the previous goal position.

5. ### Return Result:

```return True if goal == 0 else False```
`return True if goal == 0 else False:` If we successfully reach the first index (i.e., `goal == 0`), return True, indicating that it's possible to reach the last index from the first index. Otherwise, return `False`.



### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name=""/>

```cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int goal = nums.size() - 1;

        for (int i = nums.size() - 2; i >= 0; i--) {
            if (i + nums[i] >= goal) {
                goal = i;
            }
        }

        return goal == 0;        
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name=""/>

```java
class Solution {
    public boolean canJump(int[] nums) {
        int goal = nums.length - 1;

        for (int i = nums.length - 2; i >= 0; i--) {
            if (i + nums[i] >= goal) {
                goal = i;
            }
        }

        return goal == 0;        
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name=""/>

```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums) - 1

        for i in range(len(nums) - 2, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        
        return True if goal == 0 else False
```
</TabItem>
<TabItem value="javascript" label="javascript">
  <SolutionAuthor name=""/>

```Javascript
var canJump = function(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;    
};

```
</TabItem>
</Tabs>





## References

- **LeetCode Problem**: [Jump game](https://leetcode.com/problems/jump-game/description/)

- **Solution Link**: [Jump Game](https://leetcode.com/problems/jump-game/solutions/5130181/video-move-goal-position/)