---
id: Maximum-Consecutive-Floors-Without-Special-Floors
title: Maximum Consecutive Floors Without Special Floors
sidebar_label: 2274-Maximum Consecutive Floors Without Special Floors
tags: 
  - Arrays
  - Sorting
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Maximum Consecutive Floors Without Special Floors problem on LeetCode."
sidebar_position: 75
---

## Problem Statement 
In this tutorial, we will solve the Maximum Consecutive Floors Without Special Floors problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description
Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be special floors, used for relaxation only.

You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive). You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.

Return the maximum number of consecutive floors without a special floor.
 
### Examples

**Example 1:**
Input: bottom = 2, top = 9, special = [4,6]
Output: 3
Explanation: The following are the ranges (inclusive) of consecutive floors without a special floor:
- (2, 3) with a total amount of 2 floors.
- (5, 5) with a total amount of 1 floor.
- (7, 9) with a total amount of 3 floors.
Therefore, we return the maximum number which is 3 floors.
**Example 2:**
Input: bottom = 6, top = 8, special = [7,6,8]
Output: 0
Explanation: Every floor rented is a special floor, so we return 0.
 
### Constraints
- `1 <= special.length <= 105`
- `1 <= bottom <= special[i] <= top <= 109`
- `All the values of special are unique.`
## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: Generate all possible ranges between bottom and top.
Check each range to see if it contains any special floors.
Track the length of the longest range that does not contain any special floors.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>

int maxConsecutiveBruteForce(int bottom, int top, std::vector<int>& special) {
    int max_consecutive = 0;
    for (int start = bottom; start <= top; ++start) {
        for (int end = start; end <= top; ++end) {
            bool is_special = false;
            for (int floor = start; floor <= end; ++floor) {
                if (std::find(special.begin(), special.end(), floor) != special.end()) {
                    is_special = true;
                    break;
                }
            }
            if (!is_special) {
                max_consecutive = std::max(max_consecutive, end - start + 1);
            }
        }
    }
    return max_consecutive;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class MaxConsecutiveBruteForce {
    public int maxConsecutive(int bottom, int top, int[] special) {
        int max_consecutive = 0;
        for (int start = bottom; start <= top; ++start) {
            for (int end = start; end <= top; ++end) {
                boolean is_special = false;
                for (int floor = start; floor <= end; ++floor) {
                    if (Arrays.binarySearch(special, floor) >= 0) {
                        is_special = true;
                        break;
                    }
                }
                if (!is_special) {
                    max_consecutive = Math.max(max_consecutive, end - start + 1);
                }
            }
        }
        return max_consecutive;
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def max_consecutive_brute_force(bottom, top, special):
    max_consecutive = 0
    for start in range(bottom, top + 1):
        for end in range(start, top + 1):
            is_special = False
            for floor in range(start, end + 1):
                if floor in special:
                    is_special = True
                    break
            if not is_special:
                max_consecutive = max(max_consecutive, end - start + 1)
    return max_consecutive


```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n*m)$
-  where n is (top-bottom) , m is len(special) , it generates all possible floor ranges and checks each floor within those ranges against the special floors, resulting in a very high computational cost.
- Space Complexity: $O(1)$
-  It uses a constant amount of extra space regardless of the input size, as it only keeps track of the maximum consecutive floors.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: Sort the special floors.
Compute the gaps between consecutive special floors.
Consider the floors before the first special floor and after the last special floor.
Track the length of the longest gap.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>

int maxConsecutiveOptimized(int bottom, int top, std::vector<int>& special) {
    std::sort(special.begin(), special.end());
    int max_consecutive = 0;
    
    // Consider the gap before the first special floor
    max_consecutive = special[0] - bottom;
    
    // Consider the gaps between consecutive special floors
    for (int i = 1; i < special.size(); ++i) {
        max_consecutive = std::max(max_consecutive, special[i] - special[i - 1] - 1);
    }
    
    // Consider the gap after the last special floor
    max_consecutive = std::max(max_consecutive, top - special.back());
    
    return max_consecutive;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class MaxConsecutiveOptimized {
    public int maxConsecutive(int bottom, int top, int[] special) {
        Arrays.sort(special);
        int max_consecutive = 0;
        
        // Consider the gap before the first special floor
        max_consecutive = special[0] - bottom;
        
        // Consider the gaps between consecutive special floors
        for (int i = 1; i < special.length; ++i) {
            max_consecutive = Math.max(max_consecutive, special[i] - special[i - 1] - 1);
        }
        
        // Consider the gap after the last special floor
        max_consecutive = Math.max(max_consecutive, top - special[special.length - 1]);
        
        return max_consecutive;
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def max_consecutive_optimized(bottom, top, special):
    special.sort()
    max_consecutive = 0
    
    # Consider the gap before the first special floor
    max_consecutive = special[0] - bottom
    
    # Consider the gaps between consecutive special floors
    for i in range(1, len(special)):
        max_consecutive = max(max_consecutive, special[i] - special[i - 1] - 1)
    
    # Consider the gap after the last special floor
    max_consecutive = max(max_consecutive, top - special[-1])
    
    return max_consecutive


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n*logn)$
- Sorting the special floors takes O(n log n) time, and finding the gaps between them is O(n), leading to an efficient overall complexity.
- Space Complexity: $O(1)$
- The extra space used is constant, as the sorting operation is in-place and only a few additional variables are used to track the maximum gap.
</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
