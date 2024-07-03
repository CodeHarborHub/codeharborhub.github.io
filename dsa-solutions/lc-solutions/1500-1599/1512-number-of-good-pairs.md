---
id: number-of-good-pairs
title:  1512 Number of Good Pairs
sidebar_label: 1512-number-of-good-paris
tags:
- Array
- Hash Table
- Counting

description: "This is a solution to the Number of Good Pairs problem on LeetCode."
---

## Problem Description
Given an array of integers `nums`, return the number of **good pairs**.

A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i < j`.

### Examples

**Example 1:**
```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```

**Example 2:**

```
Input: nums = [1,1,1,1]
Output: 6
Explination: Each pair in the array are good.
```

**Example 3:**

```
Input: nums = [1,2,3]
Output: 0
```


### Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
## Solution for 1512. Number of Good Pairs Problem
### Approach 

#### Use a Hash Map to Track Frequencies:

- Use a hash map (or dictionary) to keep track of the frequency of each element in the array as you iterate through it.
- For each element, before incrementing its frequency in the hash map, add the current frequency of that element to the count of good pairs. This is because each occurrence of an element forms good pairs with all previous occurrences of the same element.

#### Iterate Through the Array:

- As you iterate through the array, update the count of good pairs based on the frequency of the current element in the hash map.
- Update the frequency of the current element in the hash map.

#### Return the Total Count of Good Pairs:

- After processing all elements, the count of good pairs will be stored in a variable.

#### Steps to Solve the Problem

#### 1. Initialize Variables:

- Create a hash map to store the frequency of each element.
- Initialize a variable to count the number of good pairs.

#### 2. Iterate Through the Array:

- For each element in the array, do the following:
- Check the current frequency of the element in the hash map.
- Add the current frequency to the count of good pairs.
- Increment the frequency of the element in the hash map.

#### 3. Return the Result:

- After the loop, the count variable will hold the number of good pairs.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function numIdenticalPairs(nums) {
    const countMap = new Map();
    let goodPairs = 0;

    nums.forEach((num) => {
      if (countMap.has(num)) {
        goodPairs += countMap.get(num);
      }
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    return goodPairs;
  }

  const input = nums;
  const output = numIdenticalPairs(input);

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
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(N^2) $ 
    - Space Complexity: $ O(N)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  
   ```javascript
    var numIdenticalPairs = function(nums) {
     const countMap = new Map();
    let goodPairs = 0;

    nums.forEach((num) => {
        if (countMap.has(num)) {
            goodPairs += countMap.get(num);
        }
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    return goodPairs;
};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  
   ```typescript
   class Solution {
    function numIdenticalPairs(nums: number[]): number {
    const countMap = new Map<number, number>();
    let goodPairs = 0;

    nums.forEach((num) => {
        if (countMap.has(num)) {
            goodPairs += countMap.get(num) as number;
        }
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    return goodPairs;
}
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  
   ```python
   class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count_map = {}
        good_pairs = 0

        for num in nums:
            if num in count_map:
                good_pairs += count_map[num]
            count_map[num] = count_map.get(num, 0) + 1

        return good_pairs

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
   ```java
   import java.util.HashMap;

class Solution {
        public int numIdenticalPairs(int[] nums) {
        int[] count = new int[101];
        int goodPairs = 0;

        for (int num : nums) {
            goodPairs += count[num];
            count[num]++;
        }

        return goodPairs;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
   ```cpp
  
class Solution {
public:
    int numIdenticalPairs(std::vector<int>& nums) {
        std::unordered_map<int, int> countMap;
        int goodPairs = 0;

        for (int num : nums) {
            goodPairs += countMap[num]++;
        }

        return goodPairs;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/number-of-good-pairs/description/)

