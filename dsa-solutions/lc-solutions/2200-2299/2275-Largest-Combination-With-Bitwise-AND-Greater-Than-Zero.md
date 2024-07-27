---
id: Largest-Combination-With-Bitwise-AND-Greater-Than-Zero
title: Largest Combination With Bitwise AND Greater Than Zero
sidebar_label: 2275-Largest Combination With Bitwise AND Greater Than Zero
  - Arrays
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Largest Combination With Bitwise AND Greater Than Zero problem on LeetCode."
sidebar_position: 76
---

## Problem Statement 
In this tutorial, we will solve the Largest Combination With Bitwise AND Greater Than Zero problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

The bitwise AND of an array nums is the bitwise AND of all integers in nums.

For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1.
Also, for nums = [7], the bitwise AND is 7.
You are given an array of positive integers candidates. Evaluate the bitwise AND of every combination of numbers of candidates. Each number in candidates may only be used once in each combination.

Return the size of the largest combination of candidates with a bitwise AND greater than 0.

 
### Examples

**Example 1:**
Input: candidates = [16,17,71,62,12,24,14]
Output: 4
Explanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.
The size of the combination is 4.
It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
Note that more than one combination may have the largest size.
For example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0.
**Example 2:**
Input: candidates = [8,8]
Output: 2
Explanation: The largest combination [8,8] has a bitwise AND of 8 & 8 = 8 > 0.
The size of the combination is 2, so we return 2.
 
### Constraints
- `1 <= candidates.length <= 105`
- `1 <= candidates[i] <= 107`
## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: The brute force approach would involve evaluating the bitwise AND for every possible combination of the given candidates. However, given the constraints, this approach is impractical due to its high computational complexity.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>

int largestCombinationBruteForce(std::vector<int>& candidates) {
    int n = candidates.size();
    int max_size = 0;

    // Iterate over all possible combinations of candidates
    for (int mask = 1; mask < (1 << n); ++mask) {
        int bitwise_and = -1; // Initialize with all bits set
        int count = 0;

        for (int i = 0; i < n; ++i) {
            if (mask & (1 << i)) {
                if (bitwise_and == -1) {
                    bitwise_and = candidates[i];
                } else {
                    bitwise_and &= candidates[i];
                }
                ++count;
            }
        }

        if (bitwise_and > 0) {
            max_size = std::max(max_size, count);
        }
    }

    return max_size;
}



```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class BruteForceSolution {
    public int largestCombinationBruteForce(int[] candidates) {
        int n = candidates.length;
        int max_size = 0;

        // Iterate over all possible combinations of candidates
        for (int mask = 1; mask < (1 << n); ++mask) {
            int bitwiseAnd = -1; // Initialize with all bits set
            int count = 0;

            for (int i = 0; i < n; ++i) {
                if ((mask & (1 << i)) != 0) {
                    if (bitwiseAnd == -1) {
                        bitwiseAnd = candidates[i];
                    } else {
                        bitwiseAnd &= candidates[i];
                    }
                    ++count;
                }
            }

            if (bitwiseAnd > 0) {
                max_size = Math.max(max_size, count);
            }
        }

        return max_size;
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
import java.util.*;

public class BruteForceSolution {
    public int largestCombinationBruteForce(int[] candidates) {
        int n = candidates.length;
        int max_size = 0;

        // Iterate over all possible combinations of candidates
        for (int mask = 1; mask < (1 << n); ++mask) {
            int bitwiseAnd = -1; // Initialize with all bits set
            int count = 0;

            for (int i = 0; i < n; ++i) {
                if ((mask & (1 << i)) != 0) {
                    if (bitwiseAnd == -1) {
                        bitwiseAnd = candidates[i];
                    } else {
                        bitwiseAnd &= candidates[i];
                    }
                    ++count;
                }
            }

            if (bitwiseAnd > 0) {
                max_size = Math.max(max_size, count);
            }
        }

        return max_size;
    }
}


```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(2^n*n)$
-  Evaluates all possible subsets (2^n) and performs bitwise AND operations on each subset.
- Space Complexity: $O(1)$
-  Uses a constant amount of extra space.


</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: We can use bitwise manipulation to efficiently determine the largest combination of candidates with a bitwise AND greater than 0. The key idea is to examine each bit position independently and count how many numbers have that bit set. The maximum number of such numbers for any bit position gives the size of the largest combination with a bitwise AND greater than 0.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>

int largestCombinationOptimized(const std::vector<int>& candidates) {
    int max_count = 0;

    // Iterate over each bit position
    for (int bit = 0; bit < 31; ++bit) {
        int count = 0;
        int bit_mask = 1 << bit;

        for (int num : candidates) {
            if (num & bit_mask) {
                ++count;
            }
        }

        max_count = std::max(max_count, count);
    }

    return max_count;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class OptimizedSolution {
    public int largestCombinationOptimized(int[] candidates) {
        int maxCount = 0;

        // Iterate over each bit position
        for (int bit = 0; bit < 31; ++bit) {
            int count = 0;
            int bitMask = 1 << bit;

            for (int num : candidates) {
                if ((num & bitMask) != 0) {
                    ++count;
                }
            }

            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def largest_combination_optimized(candidates):
    max_count = 0

    # Iterate over each bit position
    for bit in range(31):
        bit_mask = 1 << bit
        count = sum(1 for num in candidates if num & bit_mask)

        max_count = max(max_count, count)

    return max_count



```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Iterates over each of the 31 possible bit positions and counts how many candidates have that bit set.
- Space Complexity: $O(1)$
- Uses only a few extra variables for counting and tracking the maximum size.
- This approach is efficient and straightforward.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
