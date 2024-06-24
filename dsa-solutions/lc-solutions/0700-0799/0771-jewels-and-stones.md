---
id: jewels-and-stones
title: Jewels and Stones
sidebar_label: 771 Jewels and Stones
tags:
- HashTable
- String
description: "This is a solution to the Jewels and Stones on leetcode"
---

## Problem Description

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

 
### Examples

**Example 1:**
```
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
```

**Example 2:**
```
Input: jewels = "z", stones = "ZZ"
Output: 0

```



### Constraints
- `1 <= jewels.length, stones.length <= 50`
- `jewels and stones consist of only English letters.`
- `All the characters of jewels are unique.`


## Solution for Koko Eating Bananas
### Intuition
The problem requires us to determine how many characters from the jewels string are present in the stones string. Each character in jewels represents a type of jewel, and each character in stones represents a stone that may contain one of these jewels. The goal is to count how many stones are jewels.

### Approach
We use a hash-based data structure (an unordered_set in C++ or a HashSet in Java) to store characters from the jewels string. This allows for average $O(1)$ time complexity for membership checks.and we iterate to each character in stones string if that character is present in jewel we increment the count and we return count.


#### Complexity Analysis

 - Time Complexity: $O(J+S)$, where J is the length of jewels and S is the length of stones.
 - Space Complexity: $O(J)$ , where J is no of distinct characters in jewels.

## Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ImmidiSivani" />

   ```java
    import java.util.*;
    class Solution {
        public int numJewelsInStones(String jewels, String stones) {
            HashSet<Character> jewelSet = new HashSet<>();
            for (char jewel : jewels.toCharArray()) {
                jewelSet.add(jewel);
            }
            
            int count = 0;
            for (char stone : stones.toCharArray()) {
                if (jewelSet.contains(stone)) {
                    count++;
                }
            }
            return count;
        }}       
  
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ImmidiSivani" /> 

   ```python
    class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewels1=list(jewels)
        stones1=list(stones)
        c=0
        for  i in stones1:
            if i in jewels:
                c+=1
        return c

   ```
  </TabItem>
  <TabItem value="cpp" label="c++">
  <SolutionAuthor name="@ImmidiSivani" />

   ```cpp
    #include <iostream>
    #include <unordered_set>

    class Solution {
    public:
        int numJewelsInStones(std::string jewels, std::string stones) {
            std::unordered_set<char> jewelSet(jewels.begin(), jewels.end());
            int count = 0;
            for (char stone : stones) {
                if (jewelSet.find(stone) != jewelSet.end()) {
                    count++;
                }
            }
            return count;
        }
    };
   
    ```
  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/solutions/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/jewels-and-stones/post-solution/?submissionId=1279731526) 
