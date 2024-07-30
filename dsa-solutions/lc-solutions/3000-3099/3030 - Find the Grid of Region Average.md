---
id: find-the-grid-of-region-average
title: Find the Grid of Region Average
sidebar_label: Find the Grid of Region Average
tags: [Array, Matrix, Graph, BFS, DFS, Python, C++, Java]
description: Calculate the m x n grid result, where result[i][j] is the average intensity of the regions to which image[i][j] belongs, rounded down to the nearest integer.
---

## Problem Statement

### Problem Description

You are given an $m \times n$ grid `image` which represents a grayscale image, where `image[i][j]` represents a pixel with intensity in the range $[0, 255]$. You are also given a non-negative integer `threshold`.

Two pixels are adjacent if they share an edge.

A region is a $3 \times 3$ subgrid where the absolute difference in intensity between any two adjacent pixels is less than or equal to `threshold`.

All pixels in a region belong to that region; note that a pixel can belong to multiple regions.

You need to calculate an $m \times n$ grid `result`, where `result[i][j]` is the average intensity of the regions to which `image[i][j]` belongs, rounded down to the nearest integer. If `image[i][j]` belongs to multiple regions, `result[i][j]` is the average of the rounded-down average intensities of these regions, rounded down to the nearest integer. If `image[i][j]` does not belong to any region, `result[i][j]` is equal to `image[i][j]`.

Return the grid `result`.

### Examples

**Example 1:**
```
Input: image = [[5,6,7,10],[8,9,10,10],[11,12,13,10]], threshold = 3
Output: [[9,9,9,9],[9,9,9,9],[9,9,9,9]]
```
**Explanation:**

There are two regions as illustrated above. The average intensity of the first region is 9, while the average intensity of the second region is 9.67 which is rounded down to 9. The average intensity of both of the regions is (9 + 9) / 2 = 9. As all the pixels belong to either region 1, region 2, or both of them, the intensity of every pixel in the result is 9.


### Constraints

- $3 \leq n, m \leq 500$
- $0 \leq image[i][j] \leq 255$
- $0 \leq threshold \leq 255$

## Solution

### Intuition

To solve this problem, we need to identify all valid $3 \times 3$ regions, calculate their average intensities, and then determine the regions to which each pixel belongs. For each pixel, we then compute the required average intensity based on the regions it belongs to.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: $O(m \times n)$, where $m$ and $n$ are the dimensions of the grid. This complexity arises from the need to process each pixel and its regions.
- **Space Complexity**: $O(m \times n)$, required to store the resulting grid and any auxiliary data structures.

### Code

#### Python

```python
def findRegionAverages(image, threshold):
    m, n = len(image), len(image[0])
    result = [[image[i][j] for j in range(n)] for i in range(m)]
    
    def is_valid_region(i, j):
        region = []
        for x in range(i, i+3):
            for y in range(j, j+3):
                region.append(image[x][y])
        for x in range(i, i+3):
            for y in range(j, j+3):
                if x > i and abs(image[x][y] - image[x-1][y]) > threshold:
                    return False
                if y > j and abs(image[x][y] - image[x][y-1]) > threshold:
                    return False
        return region
    
    for i in range(m-2):
        for j in range(n-2):
            region = is_valid_region(i, j)
            if region:
                avg = sum(region) // 9
                for x in range(i, i+3):
                    for y in range(j, j+3):
                        if result[x][y] == image[x][y]:
                            result[x][y] = avg
                        else:
                            result[x][y] = (result[x][y] + avg) // 2
    
    return result
```

#### C++
```cpp
#include <vector>
#include <cmath>

using namespace std;

vector<vector<int>> findRegionAverages(vector<vector<int>>& image, int threshold) {
    int m = image.size();
    int n = image[0].size();
    vector<vector<int>> result(m, vector<int>(n, 0));
    
    auto is_valid_region = [&](int i, int j) -> bool {
        vector<int> region;
        for (int x = i; x < i + 3; ++x) {
            for (int y = j; y < j + 3; ++y) {
                region.push_back(image[x][y]);
            }
        }
        for (int x = i; x < i + 3; ++x) {
            for (int y = j; y < j + 3; ++y) {
                if (x > i && abs(image[x][y] - image[x-1][y]) > threshold) {
                    return false;
                }
                if (y > j && abs(image[x][y] - image[x][y-1]) > threshold) {
                    return false;
                }
            }
        }
        return true;
    };
    
    for (int i = 0; i < m - 2; ++i) {
        for (int j = 0; j < n - 2; ++j) {
            if (is_valid_region(i, j)) {
                int sum = 0;
                for (int x = i; x < i + 3; ++x) {
                    for (int y = j; y < j + 3; ++y) {
                        sum += image[x][y];
                    }
                }
                int avg = sum / 9;
                for (int x = i; x < i + 3; ++x) {
                    for (int y = j; y < j + 3; ++y) {
                        result[x][y] = (result[x][y] == 0) ? avg : (result[x][y] + avg) / 2;
                    }
                }
            }
        }
    }
    
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (result[i][j] == 0) {
                result[i][j] = image[i][j];
            }
        }
    }
    
    return result;
}
```
