---
id: sliding-window-maximum
title: Sliding Window Maximum
sidebar_label: 239 -Sliding Window Maximum
tags:
- Array
- Queue
- Sliding Window
- Heap (Priority Queue)
- Monotonic Queue

description: "This is a solution to the Sliding Window Maximum problem on LeetCode."
---

## Problem Description
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

### Examples

**Example 1:**

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**Example 2:**
```
Input: nums = [1], k = 1
Output: [1]
```

### Constraints
- `1 <= nums.length <= 10^5`
- `10^4 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

## Solution for Sliding Window Maximum Problem
### Approach 
##### Sliding Window Approach:
- The sliding window technique involves maintaining a window of fixed size (k) as it slides from the beginning to the end of the array.
This allows us to efficiently compute the desired result for each window without redundant computations.
##### HashMap Usage:
- A hashmap (or hash table) is utilized to keep track of elements within the current window and their frequencies (or counts).
The hashmap helps in quickly determining the maximum element within the current window without having to scan the entire window repeatedly.
##### Initialization:
-Initialize two pointers, left and right, to define the current window. Initially, set both pointers to the beginning of the array.
##### Building the Initial Window:
- Extend the right pointer to expand the window until its size reaches k. During this expansion:
Update the hashmap to include the frequency of each element in the current window.
#####  Maintaining the Hashmap:
- As you slide the window (right pointer moves one step to the right), update the hashmap:
- Increment the count of the element pointed by right.
- Adjust the hashmap to ensure it reflects the elements and their counts within the current window.
##### Finding the Maximum:

- Once the window size equals k, retrieve the maximum value from the hashmap. Depending on the requirement (maximum or minimum), this can be determined efficiently:
- For maximum: Iterate through the hashmap (or use additional data structures like max heap) to find the maximum element.
- For minimum: Similarly, find the minimum element within the hashmap.
##### Adjusting the Window:

- Slide the window to the right (left pointer moves one step to the right):
- Decrement the count of the element pointed by left.
- Remove elements from the hashmap if their count drops to zero to maintain accuracy in the calculation.
##### Output the Result:
- Store or directly process the result for each window (e.g., store the maximum value found for each window).

- Repeat Until Completion:
- Continue this process until the right pointer has traversed the entire array.
<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
    var maxSlidingWindow = function(nums, k) {
    let maxQueue = [];
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements from maxQueue that are out of the current window
        while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < nums[i]) {
            maxQueue.pop();
        }
        
        // Add current element to maxQueue
        maxQueue.push(nums[i]);
        
        // Remove elements from maxQueue that are out of the current window range
        if (i >= k - 1) {
            result.push(maxQueue[0]);
            if (nums[i - k + 1] === maxQueue[0]) {
                maxQueue.shift();
            }
        }
    }
    
    return result;
};

      const input = [1,3,-1,-3,5,3,6,7]
      const  k = 3
      const output =maxSlidingWindow(input , k)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(n) $ because of traversing
    - Space Complexity: $ O(n) $ because of hashmap

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   var maxSlidingWindow = function(nums, k) {
    let maxQueue = [];
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements from maxQueue that are out of the current window
        while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < nums[i]) {
            maxQueue.pop();
        }
        
        // Add current element to maxQueue
        maxQueue.push(nums[i]);
        
        // Remove elements from maxQueue that are out of the current window range
        if (i >= k - 1) {
            result.push(maxQueue[0]);
            if (nums[i - k + 1] === maxQueue[0]) {
                maxQueue.shift();
            }
        }
    }
    
    return result;
};

       ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function maxSlidingWindow(nums: number[], k: number): number[] {
    let maxQueue: number[] = [];
    let result: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements from maxQueue that are out of the current window
        while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < nums[i]) {
            maxQueue.pop();
        }
        
        // Add current element to maxQueue
        maxQueue.push(nums[i]);
        
        // Remove elements from maxQueue that are out of the current window range
        if (i >= k - 1) {
            result.push(maxQueue[0]);
            if (nums[i - k + 1] === maxQueue[0]) {
                maxQueue.shift();
            }
        }
    }
    
    return result;
}
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   function maxSlidingWindow(nums: number[], k: number): number[] {
    let maxQueue: number[] = [];
    let result: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements from maxQueue that are out of the current window
        while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < nums[i]) {
            maxQueue.pop();
        }
        
        // Add current element to maxQueue
        maxQueue.push(nums[i]);
        
        // Remove elements from maxQueue that are out of the current window range
        if (i >= k - 1) {
            result.push(maxQueue[0]);
            if (nums[i - k + 1] === maxQueue[0]) {
                maxQueue.shift();
            }
        }
    }
    
    return result;
}

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.*;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> maxQueue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < nums.length; i++) {
            // Remove elements from maxQueue that are out of the current window
            while (!maxQueue.isEmpty() && nums[maxQueue.peekLast()] < nums[i]) {
                maxQueue.pollLast();
            }
            
            // Add current element to maxQueue
            maxQueue.offer(i);
            
            // Remove elements from maxQueue that are out of the current window range
            if (i >= k - 1) {
                result.add(nums[maxQueue.peekFirst()]);
                if (maxQueue.peekFirst() == i - k + 1) {
                    maxQueue.pollFirst();
                }
            }
        }
        
        // Convert List<Integer> to int[]
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
      map<int,int>mp;

       int i=0;
       int j=0;
    vector<int>ans;
       while(j<nums.size())
       {
           mp[nums[j]]++;
           if(j-i+1<k)
                j++;
            else if(j-i+1==k)
            {
                auto it =mp.rbegin();
                ans.push_back(it->first);
                j++;
            }
            else if(j-i+1>k)
            {
                while(j-i+1>k)
                {
                    mp[nums[i]]--;

                    if(mp[nums[i]]==0)mp.erase(nums[i]);

                    i++;
                }

                if(j-i+1==k)
                {
                   auto it =mp.rbegin();
                    ans.push_back(it->first);
                }

                j++;                                                                                                                    

            }
       }

       return ans;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Sliding Window Problem](https://leetcode.com/problems/sliding-window-maximum/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/sliding-window-maximum/solutions)

