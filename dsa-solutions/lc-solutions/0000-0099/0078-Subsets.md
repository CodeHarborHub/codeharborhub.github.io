---
id: subsets
title: Subsets Solution
sidebar_label: 0078 - Subsets
tags:
  - Subsets
  - Bit Manipulation
  - Backtracking
  - Array
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Subsets problem on LeetCode."
---

In this page, we will solve the Subsets problem using three different approaches: brute force, hash table, and two-pointer technique. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given an integer array `nums` of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**Example 2:**

```plaintext
Input: nums = [0]
Output: [[],[0]]
```

### Constraints

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- All the numbers of `nums` are unique.

---

## Solution for Subsets Problem

### Intuition and Approach

The Subsets problem asks us to generate all possible subsets of a given set of unique integers. This involves considering every possible combination of elements, including the empty set and the set itself. The total number of subsets for a set with 𝑛 elements is $$2^n$$.

<Tabs>
 <tabItem value="Brute Force" label="Brute Force">
  
### Approach 1: Brute Force (Naive)

 The brute force approach to solve the Subsets problem involves generating all possible combinations of the elements in the input array. This can be done by iterating through every possible subset size, from 0 to the size of the array, and using combinations to generate the subsets of each size.

#### Implementation

```jsx live
function SubsetsGenerator() {
  const nums = [1, 2, 3];
  
  const generateSubsets = (nums) => {
    const result = [[]];
    for (let i = 0; i < nums.length; i++) {
      const len = result.length;
      for (let j = 0; j < len; j++) {
        result.push([...result[j], nums[i]]);
      }
    }
    return result;
  };

  const result = generateSubsets(nums);

  return (
    <div>
      <p>
        <b>Input:</b> nums = [{nums.join(", ")}]
      </p>
      <p>
        <b>Output:</b> [
        {result.map((subset, index) => (
          <span key={index}>
            [{subset.join(", ")}]
            {index < result.length - 1 ? ', ' : ''}
          </span>
        ))}
        ]
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
   ```javascript
     var subsets = function(nums) {
    let result = [[]];
    for (let i = 0; i < nums.length; i++) {
        const len = result.length;
        for (let j = 0; j < len; j++) {
            result.push([...result[j], nums[i]]);
        }
    }
    return result;
};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@ajay-dhangar"/> 
   ```typescript
    function subsets(nums: number[]): number[][] {
    let result: number[][] = [[]];
    for (let i = 0; i < nums.length; i++) {
        const len = result.length;
        for (let j = 0; j < len; j++) {
            result.push([...result[j], nums[i]]);
        }
    }
    return result;
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@ajay-dhangar"/>
   ```python
    class Solution:
   def subsets(nums):
    result = [[]]
    for num in nums:
        for subset in result[:]:
            result.append(subset + [num])
    return result
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```java
    class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<>());
        for (int num : nums) {
            int size = result.size();
            for (int i = 0; i < size; i++) {
                List<Integer> subset = new ArrayList<>(result.get(i));
                subset.add(num);
                result.add(subset);
            }
        }
        return result;
    }
   }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```cpp
  class Solution {
  public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result = {{}};
        for (int num : nums) {
            int size = result.size();
            for (int i = 0; i < size; i++) {
                vector<int> subset = result[i];
                subset.push_back(num);
                result.push_back(subset);
            }
        }
        return result;
    }
};
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^2)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the input array `nums`.
- The time complexity is $$O(n^2)$$ because we are iterating through the array twice.
- The space complexity is $$O(1)$$ because we are not using any extra space.
- This approach is not efficient and is not recommended for large inputs.

</tabItem>
<tabItem value="Bit Manipulation" label="Bit Manipulation">

### Approach 2: Using Bit Manipulation

To generate all subsets of a given array `nums` using bit manipulation, follow this approach:

Calculate the total number of subsets as $$2^n$$, where `n` is the length of the array. Iterate through all numbers from $$0$$ to $$2^n -1$$, each representing a unique subset. For each number, use bit manipulation to determine which elements are included in the subset by checking each bit position. If a bit is set, include the corresponding element from `nums` in the subset. Construct the subset and add it to the list of all subsets. This efficiently generates all possible subsets by leveraging the binary representation of numbers.

#### Implementation

```jsx live
function subsets() {
  const SubsetsGenerator = () => {
    const [nums, setNums] = useState([1, 2, 3]);
    const [subsets, setSubsets] = useState([]);

    const generateSubsets = (nums) => {
      const n = nums.length;
      const result = [];
      for (let i = 0; i < (1 << n); i++) {
        const subset = [];
        for (let j = 0; j < n; j++) {
          if (i & (1 << j)) {
            subset.push(nums[j]);
          }
        }
        result.push(subset);
      }
      return result;
    };

    const result = generateSubsets(nums);

    return (
      <div>
        <p>
          <b>Input:</b> nums = [{nums.join(", ")}]
        </p>
        <p>
          <b>Output:</b> [
          {result.map((subset, index) => (
            <span key={index}>
              [{subset.join(", ")}]
              {index < result.length - 1 ? ', ' : ''}
            </span>
          ))}
          ]
        </p>
      </div>
    );
  }

  return (
    <div>
      <SubsetsGenerator />
    </div>
  );
}


```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
   ```javascript
    var subsets = function(nums) {
  const n = nums.length;
  const result = [];
  for (let i = 0; i < (1 << n); i++) {
    const subset = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }
  return result;
};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```typescript
    function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const result: number[][] = [];
  
  for (let i = 0; i < (1 << n); i++) {
    const subset: number[] = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }

return result;
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```python
     class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        n = len(nums)
        result = []
        
        for i in range(1 << n):  # 1 << n is 2^n
            subset = []
            for j in range(n):
                if i & (1 << j):
                    subset.append(nums[j])
            result.append(subset)
        
        return result
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```java
    class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        int n = nums.length;
        List<List<Integer>> result = new ArrayList<>();
        
        for (int i = 0; i < (1 << n); i++) {
            List<Integer> subset = new ArrayList<>();
            for (int j = 0; j < n; j++) {
                if ((i & (1 << j)) != 0) {
                    subset.add(nums[j]);
                }
            }
            result.add(subset);
        }
        
        return result;
    }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```cpp
    class Solution {
    public:
    std::vector<std::vector<int>> subsets(std::vector<int>& nums) {
        int n = nums.size();
        std::vector<std::vector<int>> result;
        
        for (int i = 0; i < (1 << n); i++) {
            std::vector<int> subset;
            for (int j = 0; j < n; j++) {
                if (i & (1 << j)) {
                    subset.push_back(nums[j]);
                }
            }
            result.push_back(subset);
        }
        
        return result;
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n.2^n)$$
- Space Complexity: $$O(n.2^n)$$
- Where `n` is the length of the input array `nums`.
- The time complexity is $$O(n.2^n)$$ because we generate all possible subsets, and for each subset, we iterate through the array of length `n`.
- The space complexity is $$O(n.2^n)$$ because we store all the generated subsets, and the average size of each subset is `n/2`.
- This approach is more efficient than naive recursive or iterative approaches and is recommended for generating all subsets efficiently.
- Bit manipulation provides a fast method to generate subsets, with each subset being generated in linear time
- The total time complexity is $$O(n.2^n)$$. and the total space complexity is $$O(n.2^n)$$.

</tabItem>
<tabItem value="Backtracking" label="Backtracking">

### Approach 3: Using Backtracking

We employ backtracking to systematically explore all combinations of elements in the array `nums` of size `n`,starting with an empty subset and recursively including or excluding each element until all possibilities are explored, resulting in a collection of subsets.

#### Implementation

```jsx live
function SubsetsGenerator() {
  const [nums, setNums] = useState([1, 2, 3]);
  const [subsets, setSubsets] = useState([]);

  useEffect(() => {
    generateSubsets(nums);
  }, []);

  const generateSubsets = (nums) => {
    const result = [];

    const backtrack = (subset, index) => {
      result.push(subset.slice());
      for (let i = index; i < nums.length; i++) {
        subset.push(nums[i]);
        backtrack(subset, i + 1);
        subset.pop();
      }
    };

    backtrack([], 0);
    setSubsets(result);
  };

  return (
    <div>
      <p><b>Input:</b> nums = [{nums.join(", ")}]</p>
      <p><b>Output:</b></p>
      <div>
        {[subsets.map((subset, index) => (
          <span key={index}>
            [{subset.join(', ')}] {index < subsets.length - 1 ? ', ' : ''}
          </span>
        ))]}
      </div>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
   ```javascript
    var subsets = function(nums) {
    const result = [];
    
    const backtrack = (subset, index) => {
        result.push(subset.slice());
        for (let i = index; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(subset, i + 1);
            subset.pop();
        }
    };

    backtrack([], 0);
    return result;

};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@ajay-dhangar"/>

   ```ts
 function subsets(nums: number[]): number[][] {
 const result: number[][] = [];

 const backtrack = (subset: number[], index: number): void => {
     result.push(subset.slice());
     for (let i = index; i < nums.length; i++) {
         subset.push(nums[i]);
         backtrack(subset, i + 1);
         subset.pop();
     }
 };

 backtrack([], 0);
 return result;
};
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```py
  class Solution(object):
     def subsets(self, nums):
     result = []

     def backtrack(subset, index):
         result.append(subset[:])
         for i in range(index, len(nums)):
             subset.append(nums[i])
             backtrack(subset, i + 1)
             subset.pop()

     backtrack([], 0)
     return result
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```java
 class Solution {
 public List<List<Integer>> subsets(int[] nums) {
     List<List<Integer>> result = new ArrayList<>();

     backtrack(result, new ArrayList<>(), nums, 0);

     return result;
 }

 private void backtrack(List<List<Integer>> result, List<Integer> subset, int[] nums, int index) {
     result.add(new ArrayList<>(subset));
     for (int i = index; i < nums.length; i++) {
         subset.add(nums[i]);
         backtrack(result, subset, nums, i + 1);
         subset.remove(subset.size() - 1);
     }
 }
}
    ```

  </TabItem>
  <TabItem value="C++" label="C++"> 
  <SolutionAuthor name="@ajay-dhangar"/>
  
   ```cpp
 class Solution {
   public:
      vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> subset;
        backtrack(nums, result, subset, 0);
        return result;
    }

   private:
      void backtrack(vector<int>& nums, vector<vector<int>>& result, vector<int>& subset, int index) {
        result.push_back(subset);
        for (int i = index; i < nums.size(); ++i) {
            subset.push_back(nums[i]);
            backtrack(nums, result, subset, i + 1);
            subset.pop_back();
        }
    }
};
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n.2^n)$$
- Space Complexity: $$O(n.2^n)$$
- Where `n` is the length of the input array `nums`.
- The time complexity is $$O(n.2^n)$$ because we explore all possible combinations of elements to generate subsets. At each step of the recursion, we either include or exclude an element, resulting in a binary tree of height `n`. The number of nodes in this tree is `2^n`, and at each node, we perform a linear operation to copy the current subset, resulting in a total time complexity of $$O(n.2^n)$$.
- The space complexity is $$O(n.2^n)$$ because we store all generated subsets. In the worst case, we have `2^n` subsets, each with an average size of `n`.
- This approach efficiently generates all subsets without the need for sorting, making it suitable for various input sizes.
- The total time complexity is $$O(n.2^n)$$. and the total space complexity is $$O(n.2^n)$$.

</tabItem>
</Tabs>

:::tip Note
**Which is the best approach? and why?**

In general, for small to medium-sized input sets (say, up to 30 or 40 elements), bit manipulation can be more efficient and concise. However, for larger input sets or when you have additional constraints or filtering conditions, backtracking may be a better choice due to its memory efficiency and flexibility.
Ultimately, the decision between bit manipulation and backtracking depends on the specific requirements of your problem, the size of the input set, and any additional constraints or conditions that need to be considered.

:::

## References

- **LeetCode Problem:** [Subsets Problem](https://leetcode.com/problems/subsets/)
- **Solution Link:** [Subsets Solution on LeetCode](https://leetcode.com/problems/subsets/submissions/1147007689/)
- **Authors LeetCode Profile:** [Ajay Dhangar](https://leetcode.com/ajaydhangar49/)