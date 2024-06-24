---
id: permutations-ll
title: Permutation-2
sidebar_label: 0047-Permutations 2
tags:
  - Array
  - Backtracking
  - String
description: "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order."
---

## Problem Description

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.


### Examples

**Example 1:**

```
Input
nums = [1,1,2]
Output
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```
**Example 2:**

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### Constraints

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`


## Solution for Letter combination of phone number

### Intuition
As the name of the problem suggests, this problem is an extension of the Permutation problem.
The problem is different from the previous permutation problem on the condition that the input array can contain duplicates.

The key to solve the problem is still the backtracking algorithm.
However, we need some adaptation to ensure that the enumerated solutions generated from our backtracking exploration do not have any duplicates.




### Complexity Analysis

1. Time Complexity: 
- n! is the number of permutations.
- n is the time to construct each permutation.

2. Space Complexity:
-    - We need space to store the frequency counter, the recursion stack, and the current permutation. Each of these requires \(O(n)\) space.


 


## Approach

###  Backtracking with Groups of Numbers

#### Intuition

First of all, let us review the general idea of permutation with an example.

Given the input array [1, 1, 2], to generate a permutation of the array, we could follow the Depth-First Search (DFS) approach, or more precisely the backtracking technique as one will see later.

Let us walk through the example with paper and pencil, as follows:

- Given the input of [1, 1, 2], at the first stage, we have 2 choices to pick a number as the first number in the final permutation, i.e. 1 and 2.
- Suppose that we pick the number 1, now the remaining numbers would become [1, 2].
Note: The reason that we have only 2 choices instead of 3, is that there is a duplicate in the given input.
- Picking any of the duplicate numbers as the first number of the permutation would lead us to the same permutation at the end.
- Should the numbers in the array be all unique, we would then have the same number of choices as the length of the array.

- At the second stage, we now then have again 2 choices, i.e. [1, 2].
Let us pick again the number 1, which leaves us the only remaining number 2.

- Now at the third stage, we have only one candidate number left, i.e. [2]. We then pick the last remaining number, which leads to a final permutation sequence of [1, 1, 2].

- Moreover, we need to revisit each of the above stages, and make a different choice in order to try out all possibilities.
- The reversion of the choices is what we call backtracking.

- We illustrate all potential exploration in the following graph where each node represents a choice at a specific stage:


### Algorithm

Given the above insight, in order to find out all the unique numbers at each stage, we can build a hash table (denoted as counter), with each unique number as the key and its occurrence as the corresponding value.

To implement the algorithm, first we define a function called backtrack(comb, counter) which generates all permutations, starting from the current combination (comb) and the remaining numbers (counter).

Once the function is implemented, it suffices to invoke the function with the initial empty combination and the hash table we built out of the input array, to solve the problem.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name=""/>

```cpp
class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<vector<int>> results;
        unordered_map<int, int> counter;
        for (int num : nums) counter[num]++;
        vector<int> comb;
        backtrack(counter, comb, nums.size(), results);
        return results;
    }
    void backtrack(unordered_map<int, int>& counter, vector<int>& comb, int N,
                   vector<vector<int>>& results) {
        if (comb.size() == N) {
            results.push_back(comb);
            return;
        }
        for (auto& item : counter) {
            int num = item.first;
            int count = item.second;
            if (count == 0) continue;
            comb.push_back(num);
            counter[num]--;
            backtrack(counter, comb, N, results);
            comb.pop_back();
            counter[num]++;
        }
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name=""/>

```java
class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> results = new ArrayList<>();

        HashMap<Integer, Integer> counter = new HashMap<>();
        for (int num : nums) {
            if (!counter.containsKey(num)) counter.put(num, 0);
            counter.put(num, counter.get(num) + 1);
        }

        LinkedList<Integer> comb = new LinkedList<>();
        this.backtrack(comb, nums.length, counter, results);
        return results;
    }

    protected void backtrack(
        LinkedList<Integer> comb,
        Integer N,
        HashMap<Integer, Integer> counter,
        List<List<Integer>> results
    ) {
        if (comb.size() == N) {
            results.add(new ArrayList<Integer>(comb));
            return;
        }

        for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {
            Integer num = entry.getKey();
            Integer count = entry.getValue();
            if (count == 0) continue;
            comb.addLast(num);
            counter.put(num, count - 1);

            backtrack(comb, N, counter, results);

            comb.removeLast();
            counter.put(num, count);
        }
    }
}
```

</TabItem>
<TabItem value="python3" label="Python3">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        results = []

        def backtrack(comb, counter):
            if len(comb) == len(nums):
                # make a deep copy of the resulting permutation,
                # since the permutation would be backtracked later.
                results.append(list(comb))
                return

            for num in counter:
                if counter[num] > 0:
                    comb.append(num)
                    counter[num] -= 1
                    backtrack(comb, counter)
                    comb.pop()
                    counter[num] += 1

        backtrack([], Counter(nums))

        return results
```
</TabItem>
</Tabs>



## Conclusion
This solution ensures that all unique permutations are generated by carefully tracking and using the frequency of each element in the input array. The use of a counter helps to manage duplicates effectively, and the backtracking approach explores all possible permutations while maintaining the uniqueness constraint.


## References

- **LeetCode Problem**: [Letter combinatino of Phone number](https://leetcode.com/problems/permutations-ii/description/)

- **Solution Link**: [letter combination of phone number](https://leetcode.com/problems/permutations-ii/editorial/)