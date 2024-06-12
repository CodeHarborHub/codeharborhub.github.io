---
id: sort-colors
title: Sort Colors
sidebar_label: 0075 - Sort Colors
tags:
  - Array
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Two Sum problem on LeetCode."
---

In this page, we will be solve the Sort Colors problem using three different approaches: brute force, 3 Pointer, and Dutch National Flag Algo technique. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

### Examples

**Example 1:**

```plaintext
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Example 2:**

```plaintext
Input: nums = [2,0,1]
Output: [0,1,2]
```

### Constraints

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i] is either 0, 1, or 2.`


**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?

---

## Solution for Sort Colors

### Intuition and Approach

The problem can be solved using a brute force approach by sorting vector, 3 pointers, or the Dutch National Flag Algo. The brute force approach has a time complexity of $$O(nlog(n))$$, while the 3 Pointer and Dutch National Flag Algo techniques have a time complexity of $$O(n)$$. The Dutch National Flag Algo approach is the most efficient and is recommended for large inputs.

<Tabs>
 <tabItem value="Brute Force" label="Brute Force">
  
### Approach 1: Brute Force (Naive)

We can simply Sort the Array and get Answer of it. But the time complexity will be for this goes to O(N*logN).

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryan-1309"/>
   ```javascript
   var sortColors = function(nums) {
    nums.sort((a, b) => a - b);
   };
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryan-1309"/> 
   ```typescript
    function sortColors(nums: number[]): void {
    nums.sort((a, b) => a - b);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@aryan-1309"/>
   ```python
    class Solution:
    def sortColors(self, nums):
        nums.sort()
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
    import java.util.Arrays;

    public class Solution {
        public void sortColors(int[] nums) {
            Arrays.sort(nums);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp
    class Solution {
    public:
        void sortColors(vector<int>& nums) {
            sort(nums.begin(),nums.end());
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n log(n))$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the input array `nums`.

</tabItem>
<tabItem value="Better" label="Better">

### Approach 2: Better

Keeping count of values. There are only 3 distinct values in the array so it's easy to maintain the count of all, Like the count of 0, 1, and 2. 

1. Take 3 variables to maintain the count of 0, 1 and 2.
2. Travel the array once and increment the corresponding counting variables
3. In 2nd traversal of array, we will now over write the first ‘a’ indices / positions in array with ’0’, the next ‘b’ with ‘1’ and the remaining ‘c’ with ‘2’.

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryan-1309"/>
   ```javascript
    var sortColors = function(nums) {
        let zero = 0, one = 0, two = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zero++;
            } else if (nums[i] === 1) {
                one++;
            } else {
                two++;
            }
        }

        let index = 0;

        while (zero > 0) {
            nums[index] = 0;
            index++;
            zero--;
        }

        while (one > 0) {
            nums[index] = 1;
            index++;
            one--;
        }

        while (two > 0) {
            nums[index] = 2;
            index++;
            two--;
        }
    };
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryan-1309"/>
   ```typescript
    function sortColors(nums: number[]): void {
        let zero = 0, one = 0, two = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zero++;
            } else if (nums[i] === 1) {
                one++;
            } else {
                two++;
            }
        }

        let index = 0;

        while (zero > 0) {
            nums[index] = 0;
            index++;
            zero--;
        }

        while (one > 0) {
            nums[index] = 1;
            index++;
            one--;
        }

        while (two > 0) {
            nums[index] = 2;
            index++;
            two--;
        }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@aryan-1309"/>
   ```python
    class Solution(object):
    def sortColors(self, nums):
       
        zero = 0
        one = 0
        two = 0
        
        for num in nums:
            if num == 0:
                zero += 1
            elif num == 1:
                one += 1
            else:
                two += 1
        
        index = 0
        while zero > 0:
            nums[index] = 0
            index += 1
            zero -= 1
        
        while one > 0:
            nums[index] = 1
            index += 1
            one -= 1
        
        while two > 0:
            nums[index] = 2
            index += 1
            two -= 1
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
    class Solution {
        public void sortColors(int[] nums) {
            int zero = 0, one = 0, two = 0;
            for (int i = 0; i < nums.length; i++) {
                if (nums[i] == 0)
                    zero++;
                else if (nums[i] == 1)
                    one++;
                else
                    two++;
            }
            
            int index = 0;
            while (zero-- > 0) {
                nums[index] = 0;
                index++;
            }
            
            while (one-- > 0) {
                nums[index] = 1;
                index++;
            }
            
            while (two-- > 0) {
                nums[index] = 2;
                index++;
            }
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp
   class Solution {
public:
    void sortColors(vector<int>& nums) {
        
        int zero = 0, one = 0, two = 0;
        for(int i=0; i<nums.size() ; i++){
            if(nums[i] == 0)
                zero++;
            else if(nums[i] == 1)
                one++;
            else
                two++;
        }
        int index = 0;
        while(zero--){
            nums[index] = 0;
            index++;
        }

        while(one--){
            nums[index] = 1;
            index++;
        }

        while(two--){
            nums[index] = 2;
            index++;
        }
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the input array `nums`.

</tabItem>
<tabItem value="Optimal" label="Optimal">

### Approach 3: Dutch National Flag Algo

This problem can be further Optimize by Dutch National flag algorithm.

This algorithm contains 3 pointers i.e. low, mid, and high, and 3 main rules.  The rules are the following:

arr[0….low-1] contains 0. [Extreme left part]
arr[low….mid-1] contains 1.
arr[high+1….n-1] contains 2. [Extreme right part], n = size of the array

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryan-1309"/>
   ```javascript
    var sortColors = function(nums) {
        let start = 0;
        let mid = 0;
        let end = nums.length - 1;

        while (mid <= end) {
            if (nums[mid] === 0) {
                [nums[mid], nums[start]] = [nums[start], nums[mid]];
                mid++;
                start++;
            } else if (nums[mid] === 1) {
                mid++;
            } else {
                [nums[mid], nums[end]] = [nums[end], nums[mid]];
                end--;
            }
        }
   };

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryan-1309"/>

   ```ts
    function sortColors(nums: number[]): void {
        let start = 0;
        let mid = 0;
        let end = nums.length - 1;

        while (mid <= end) {
            if (nums[mid] === 0) {
                [nums[mid], nums[start]] = [nums[start], nums[mid]];
                mid++;
                start++;
            } else if (nums[mid] === 1) {
                mid++;
            } else {
                [nums[mid], nums[end]] = [nums[end], nums[mid]];
                end--;
            }
        }
   }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@aryan-1309"/>
   ```py
    class Solution(object):
    def sortColors(self, nums):
    
        start = 0
        mid = 0
        end = len(nums) - 1

        while mid <= end:
            if nums[mid] == 0:
                nums[mid], nums[start] = nums[start], nums[mid]
                mid += 1
                start += 1
            elif nums[mid] == 1:
                mid += 1
            else:
                nums[mid], nums[end] = nums[end], nums[mid]
                end -= 1

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
    class Solution {
    public void sortColors(int[] nums) {
            int start = 0, mid = 0, end = nums.length - 1;

            while (mid <= end) {
                if (nums[mid] == 0) {
                    int temp = nums[mid];
                    nums[mid] = nums[start];
                    nums[start] = temp;
                    mid++;
                    start++;
                } else if (nums[mid] == 1) {
                    mid++;
                } else {
                    int temp = nums[mid];
                    nums[mid] = nums[end];
                    nums[end] = temp;
                    end--;
                }
            }
        }
    }

    ```

  </TabItem>
  <TabItem value="C++" label="C++"> 
  <SolutionAuthor name="@aryan-1309"/>
  
   ```cpp
    class Solution {
    public:
        void sortColors(vector<int>& nums) {
            int start=0, mid=0, end=nums.size()-1;

            while(mid<=end){
                if(nums[mid]==0){
                swap(nums[mid],nums[start]);
                mid++;
                start++;
                }
                else if(nums[mid]==1) mid++;
                else{
                    swap(nums[mid],nums[end]);
                    end--;
                }
            }
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the input array `nums`.

</tabItem>
</Tabs>

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/sort-colors/description/)
- **Solution Link:** [Sort Colors Solution on LeetCode](https://leetcode.com/problems/sort-colors/solutions/2340558/c-brute-better-optimal/)
