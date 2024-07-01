---
id: tuple-with-same-product
title:  Tuple with Same Product
sidebar_label: 1726 - Tuple with Same Product
tags:
- Array
- Hash Table
- Counting

description: "This is a solution to theTuple with Same Product problem on LeetCode."
---

## Problem Description
Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

### Examples

**Example 1:**
```
Input: nums = [2,3,4,6]
Output: 8
Explanation: There are 8 valid tuples:
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)

```

**Example 2:**

```
Input: nums = [1,2,4,5,10]
Output: 16
Explanation: There are 16 valid tuples:
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)
```


### Constraints
- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^4`
- `All elements in nums are distinct.`

## Solution for Path With Minimum Effort Problem
### Approach 
#### Brute Force -
- The first approach that is find all sets of a , b ,c , d  by using 4 nested loop . Time Complexity of this approach is very high $ O(N^4)$ which is not feasible
#### Optimized Approach Using Hashmap

##### Calculate Product Pairs:

- Iterate through each possible pair of elements in the array.
- For each pair (nums[i], nums[j]), calculate their product.
- Store the product in a hash map (mp) where the key is the product and the value is the count of pairs that produce this product.
##### Count Tuples:
- Iterate through the hash map.
- For each unique product that appears n times, the number of ways to choose 2 pairs from n pairs is given by the combination formula C(n, 2) = n * (n - 1) / 2.
- Since each valid tuple of pairs can be permuted in 8 different ways (each pair can be swapped with the other), multiply the result by 8.
##### Return the Result:
- Sum up the counts from all unique products to get the total number of valid tuples and multiply by 8.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
     var tupleSameProduct = function(nums) {
      let mp = new Map();
      
      for (let i = 0; i < nums.length; ++i) {
          for (let j = i + 1; j < nums.length; ++j) {
              let product = nums[i] * nums[j];
              mp.set(product, (mp.get(product) || 0) + 1);
          }
      }

      let ans = 0;
      
      for (let count of mp.values()) {
          ans += (count * (count - 1)) / 2;
      }
      
      return ans * 8;
  };
      const input = [2,3,4,6]
      const output = tupleSameProduct(input)
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

    - Time Complexity: $ O(N^2) $ 
    - Space Complexity: $ O(N^2)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
    var tupleSameProduct = function(nums) {
    let mp = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            let product = nums[i] * nums[j];
            mp.set(product, (mp.get(product) || 0) + 1);
        }
    }

    let ans = 0;
    
    for (let count of mp.values()) {
        ans += (count * (count - 1)) / 2;
    }
    
    return ans * 8;
};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function tupleSameProduct(nums: number[]): number {
    let mp = new Map<number, number>();
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            let product = nums[i] * nums[j];
            mp.set(product, (mp.get(product) || 0) + 1);
        }
    }

    let ans = 0;
    
    for (let count of mp.values()) {
        ans += (count * (count - 1)) / 2;
    }
    
    return ans * 8;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   from collections import defaultdict

class Solution:
    def tupleSameProduct(self, nums: list[int]) -> int:
        mp = defaultdict(int)
        
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                product = nums[i] * nums[j]
                mp[product] += 1

        ans = 0
        
        for count in mp.values():
            ans += (count * (count - 1)) // 2
        
        return ans * 8

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int tupleSameProduct(int[] nums) {
        Map<Integer, Integer> mp = new HashMap<>();
        
        for (int i = 0; i < nums.length; ++i) {
            for (int j = i + 1; j < nums.length; ++j) {
                int product = nums[i] * nums[j];
                mp.put(product, mp.getOrDefault(product, 0) + 1);
            }
        }

        int ans = 0;
        
        for (Map.Entry<Integer, Integer> entry : mp.entrySet()) {
            int n = entry.getValue();
            ans += (n * (n - 1)) / 2;
        }
        
        return ans * 8;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int tupleSameProduct(vector<int>& nums) {
        unordered_map<int, int> mp;
        
        for (int i = 0; i < nums.size(); ++i) {
            for (int j = i + 1; j < nums.size(); ++j) {
                int product = nums[i] * nums[j];
                mp[product]++;
            }
        }

        int ans = 0;
        
        for (auto it = mp.begin(); it != mp.end(); ++it) {
            int n = it->second;
            ans += (n * (n - 1)) / 2; //  total tuples
        }
        
        return ans * 8;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Tuple With Same Product](https://leetcode.com/problems/tuple-with-same-product/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/tuple-with-same-product/solutions)

