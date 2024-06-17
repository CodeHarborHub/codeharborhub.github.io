---
id: next-greater-element-ii
title: Next Greater Element II
sidebar_label: 0503-Next-Greater-Element-II
tags:
- Array
- Stack
- Monotonic Stack
description: "Given a circular integer array nums (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in nums.."
---

## Problem

Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in nums.

The next greater number of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return `-1` for this number.

### Examples

**Example 1:**
```
Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
```

**Example 2:**

```
Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
```

### Constraints

- `1 <= nums.length <= 10^4`.
- `-10^9 <= nums[i] <= 10^9`

---

## Solution for  Next Greater Element II

<Tabs>
  <TabItem value="Brute Force" label="Brute Force">  
### Brute Force - Recursion

#### Intuition
The idea is to make use of an array doublearr which is formed by concatenating two copies of the given array one after the other. Now, when we need to find out the next greater element for `arr[i]`, we can simply scan all the elements `doublearr[j]`. The first element found satisfying the given condition is the required result for `arr[i]`. If no such element is found, we put a `-1` at the appropriate position in the res array.

#### Implementation
- Create an empty vector to store the next greater element for each element in the input array.
  Duplicate the input array to create a circular array. This is done by appending the original array to itself.
- Start iterating through each element in the original array.
- For each element in the original array, search for the next greater element in the circular array 
  starting from the next position after the current element.
- If a greater element is found, update the corresponding index in the result vector with the value 
  of the greater element. If no greater element is found, keep the index in the result vector as -1.
- Once all elements have been processed, return the result vector containing the next greater 
  element for each element in the input array.

#### Brute Force Solution

#### Implementation

```
class Solution {
  public:
    vector<int> nextGreaterElement(int N, vector<int>& arr) {
        vector<int> res(N, -1);
        vector<int> doublearr(arr.begin(), arr.end());
         doublearr.insert(doublearr.end(), arr.begin(), arr.end());
        for (int i = 0; i < N; i++) {
            for (int j = i + 1; j < doublearr.size(); j++) {
                if (doublearr[j] > doublearr[i]) {
                    res[i] = doublearr[j];
                    break;
                }
            }
        }
        return res;
        // code here
    }
};
```

#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@himanshukumar"/>
   ```python
   class Solution:
    def nextGreaterElement(self, N, arr):
        res = [-1] * len(arr)
        doublearr = arr + arr
        for i in range(len(arr)):
            for j in range(i + 1, len(doublearr)):
                if doublearr[j] > doublearr[i]:
                    res[i] = doublearr[j]
                    break
        return res

    ```

  </TabItem>
 <TabItem value="Java" label="Java">
  <SolutionAuthor name="@himanshukumar"/>

```
class Solution {
    static int[] nextGreaterElement(int N, int arr[]) {
        int[] res = new int[arr.length];
        int[] doublearr = new int[arr.length * 2];
        System.arraycopy(arr, 0, doublearr, 0, arr.length);
        System.arraycopy(arr, 0, doublearr, arr.length, arr.length);
        for (int i = 0; i < arr.length; i++) {
            res[i]=-1;
            for (int j = i + 1; j < doublearr.length; j++) {
                if (doublearr[j] > doublearr[i]) {
                    res[i] = doublearr[j];
                    break;
                }
            }
        }
        return res;
    }
}

```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@himanshukumar"/>
   ```cpp
   class Solution {
  public:
    vector<int> nextGreaterElement(int N, vector<int>& arr) {
        vector<int> res(N, -1);
        vector<int> doublearr(arr.begin(), arr.end());
         doublearr.insert(doublearr.end(), arr.begin(), arr.end());
        for (int i = 0; i < N; i++) {
            for (int j = i + 1; j < doublearr.size(); j++) {
                if (doublearr[j] > doublearr[i]) {
                    res[i] = doublearr[j];
                    break;
                }
            }
        }
        return res;
        // code here
    }
};
    ```

  </TabItem>
  </Tabs>

#### Complexity Analysis

- Time Complexity: $O(N^2)$
   - The function iterates through each element in the input array, resulting in $O(N)$ iterations.
     For each element, it searches for the next greater element in the circular array, which may require iterating through the entire circular array in the worst case, resulting in another $O(N)$ iterations.
  Therefore, the overall time complexity is $O(N^2)$.
- Space Complexity:  $O(N)$
  - The function creates a duplicate circular array of size $2N$ to handle cases where the next     greater element wraps around to the beginning of the array. Therefore, the additional space  required is $O(N)$ to store this duplicate array.
  - Additionally, the result vector to store the next greater element for each element in the input array also requires $O(N)$ space.
Therefore, the overall space complexity is $O(N)$.

</TabItem>
<TabItem value="Optimized Approach " label="Optimized Approach ">

### Optimized Approach 
#### Intuition
This approach relies on the concept of a monotonic stack to efficiently find the next greater element for each element in the input array. It iterates through a concatenated version of the array to simulate a circular structure, ensuring that every element's next greater element is considered

#### Approach
- Create a vector ans of size N, initialized with -1. This vector will store the next greater 
  elements for each element in the input vector arr.
- Create an empty stack st to store indices.
- Iterate through each index i from `0` to `2*N-1` using a for loop.
- Inside the loop, while the stack is not empty and the element at index `arr[st.top()]` is less    than  the current element `arr[i % N]`, update the ans vector at index `st.top()` with the current 
 element `arr[i % N]` and pop the top element from the stack.
- Push the current index `i % N` onto the stack.
  After the loop, return the ans vector containing the next greater elements for each element in the input vector arr.

<Tabs>
 <TabItem value="C++" label="C++">
  <SolutionAuthor name="@himanshukumar"/>
   ```cpp
   
class Solution {
  public:
    vector<int> nextGreaterElement(int N, vector<int>& arr) {
        vector<int> ans(N, -1);
        stack<int> st;
        for (int i = 0; i < 2 * N; i++) {
            while (!st.empty() and arr[st.top()] < arr[i % N]) {
                ans[st.top()] = arr[i % N];
                st.pop();
            }
            st.push(i % N);
        }
        return ans;
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis
- Time Complexity: $ O(N)$
- Space Complexity: $ O(N)$

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/next-greater-element-ii/solutions/)

