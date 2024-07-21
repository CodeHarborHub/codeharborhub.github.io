---
id: Maximum-White-Tiles-Covered-by-a-Carpet
title: Maximum White Tiles Covered by a Carpet
sidebar_label: 2271-Maximum White Tiles Covered by a Carpet
tags: 
  - Arrays
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Maximum White Tiles Covered by a Carpet problem on LeetCode."
sidebar_position: 72
---

## Problem Statement 
In this tutorial, we will solve the Maximum White Tiles Covered by a Carpet problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

You are given a 2D integer array tiles where tiles[i] = [li, ri] represents that every tile j in the range `li <= j <= ri` is colored white.

You are also given an integer carpetLen, the length of a single carpet that can be placed anywhere.

Return the maximum number of white tiles that can be covered by the carpet.
 
### Examples

**Example 1:**
Input: tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
Output: 9
Explanation: Place the carpet starting on tile 10. 
It covers 9 white tiles, so we return 9.
Note that there may be other places where the carpet covers 9 white tiles.
It can be shown that the carpet cannot cover more than 9 white tiles.
**Example 2:**
Input: tiles = [[10,11],[1,1]], carpetLen = 2
Output: 2
Explanation: Place the carpet starting on tile 10. 
It covers 2 white tiles, so we return 2.
### Constraints
- `1 <= tiles.length <= 5 * 104`
- `tiles[i].length == 2`
- `1 <= li <= ri <= 109`
- `1 <= carpetLen <= 109`
- `The tiles are non-overlapping.`
## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: In the brute force approach, we try placing the carpet starting at every possible position and calculate the number of tiles it covers. This approach is inefficient, especially for large inputs, but it provides a straightforward way to understand the problem.

#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int maxWhiteTilesBruteForce(std::vector<std::vector<int>>& tiles, int carpetLen) {
    std::sort(tiles.begin(), tiles.end());
    int maxCovered = 0;

    for (const auto& tile : tiles) {
        int start = tile[0];
        int end = start + carpetLen - 1;
        int covered = 0;

        for (const auto& t : tiles) {
            if (t[1] < start) continue;
            if (t[0] > end) break;
            covered += std::min(t[1], end) - std::max(t[0], start) + 1;
        }
        maxCovered = std::max(maxCovered, covered);
    }
    return maxCovered;
}

int main() {
    std::vector<std::vector<int>> tiles = {{1, 5}, {10, 11}, {12, 18}, {20, 25}, {30, 32}};
    int carpetLen = 10;
    std::cout << "Maximum white tiles covered: " << maxWhiteTilesBruteForce(tiles, carpetLen) << std::endl;
    return 0;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class Main {
    public static int maxWhiteTilesBruteForce(int[][] tiles, int carpetLen) {
        Arrays.sort(tiles, Comparator.comparingInt(a -> a[0]));
        int maxCovered = 0;

        for (int[] tile : tiles) {
            int start = tile[0];
            int end = start + carpetLen - 1;
            int covered = 0;

            for (int[] t : tiles) {
                if (t[1] < start) continue;
                if (t[0] > end) break;
                covered += Math.min(t[1], end) - Math.max(t[0], start) + 1;
            }
            maxCovered = Math.max(maxCovered, covered);
        }
        return maxCovered;
    }

    public static void main(String[] args) {
        int[][] tiles = {{1, 5}, {10, 11}, {12, 18}, {20, 25}, {30, 32}};
        int carpetLen = 10;
        System.out.println("Maximum white tiles covered: " + maxWhiteTilesBruteForce(tiles, carpetLen));
    }
}



```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def max_white_tiles_brute_force(tiles, carpet_len):
    tiles.sort()
    max_covered = 0

    for start, _ in tiles:
        end = start + carpet_len - 1
        covered = 0

        for l, r in tiles:
            if r < start:
                continue
            if l > end:
                break
            covered += min(r, end) - max(l, start) + 1

        max_covered = max(max_covered, covered)
    return max_covered

tiles = [[1, 5], [10, 11], [12, 18], [20, 25], [30, 32]]
carpet_len = 10
print("Maximum white tiles covered:", max_white_tiles_brute_force(tiles, carpet_len))


```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n^2)$
- because we iterate through all possible start points and check each tile range for each starting point.
- Space Complexity: $O(1)$
-  as we only use a few extra variables for counting.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: The optimized approach uses a sliding window technique to find the maximum number of tiles covered by the carpet. This approach takes advantage of the sorted order of the tiles and moves the start of the carpet incrementally, updating the number of covered tiles using a two-pointer method.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int maxWhiteTilesOptimized(std::vector<std::vector<int>>& tiles, int carpetLen) {
    std::sort(tiles.begin(), tiles.end());
    int n = tiles.size();
    int maxCovered = 0;
    int currentCovered = 0;
    int j = 0;

    for (int i = 0; i < n; ++i) {
        while (j < n && tiles[j][1] < tiles[i][0] + carpetLen) {
            currentCovered += tiles[j][1] - tiles[j][0] + 1;
            ++j;
        }
        if (j < n) {
            maxCovered = std::max(maxCovered, currentCovered + std::max(0, tiles[i][0] + carpetLen - tiles[j][0]));
        } else {
            maxCovered = std::max(maxCovered, currentCovered);
        }
        currentCovered -= tiles[i][1] - tiles[i][0] + 1;
    }

    return maxCovered;
}

int main() {
    std::vector<std::vector<int>> tiles = {{1, 5}, {10, 11}, {12, 18}, {20, 25}, {30, 32}};
    int carpetLen = 10;
    std::cout << "Maximum white tiles covered: " << maxWhiteTilesOptimized(tiles, carpetLen) << std::endl;
    return 0;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class Main {
    public static int maxWhiteTilesOptimized(int[][] tiles, int carpetLen) {
        Arrays.sort(tiles, Comparator.comparingInt(a -> a[0]));
        int n = tiles.length;
        int maxCovered = 0;
        int currentCovered = 0;
        int j = 0;

        for (int i = 0; i < n; ++i) {
            while (j < n && tiles[j][1] < tiles[i][0] + carpetLen) {
                currentCovered += tiles[j][1] - tiles[j][0] + 1;
                ++j;
            }
            if (j < n) {
                maxCovered = Math.max(maxCovered, currentCovered + Math.max(0, tiles[i][0] + carpetLen - tiles[j][0]));
            } else {
                maxCovered = Math.max(maxCovered, currentCovered);
            }
            currentCovered -= tiles[i][1] - tiles[i][0] + 1;
        }

        return maxCovered;
    }

    public static void main(String[] args) {
        int[][] tiles = {{1, 5}, {10, 11}, {12, 18}, {20, 25}, {30, 32}};
        int carpetLen = 10;
        System.out.println("Maximum white tiles covered: " + maxWhiteTilesOptimized(tiles, carpetLen));
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def max_white_tiles_optimized(tiles, carpet_len):
    tiles.sort()
    max_covered = 0
    current_covered = 0
    j = 0

    for i in range(len(tiles)):
        while j < len(tiles) and tiles[j][1] < tiles[i][0] + carpet_len:
            current_covered += tiles[j][1] - tiles[j][0] + 1
            j += 1

        if j < len(tiles):
            max_covered = max(max_covered, current_covered + max(0, tiles[i][0] + carpet_len - tiles[j][0]))
        else:
            max_covered = max(max_covered, current_covered)

        current_covered -= tiles[i][1] - tiles[i][0] + 1

    return max_covered

tiles = [[1, 5], [10, 11], [12, 18], [20, 25], [30, 32]]
carpet_len = 10
print("Maximum white tiles covered:", max_white_tiles_optimized(tiles, carpet_len))



```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n*logn+n)$
- because of sorting the tiles, followed by a linear scan with a sliding window.
- Space Complexity: $O(1)$
- as we only use a few extra variables for counting.
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
