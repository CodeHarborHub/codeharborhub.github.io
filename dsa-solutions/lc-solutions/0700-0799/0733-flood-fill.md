---
id: flood-fill
title: Flood Fill
sidebar_label: 0733 - Flood Fill
tags:
  - Depth-First Search
  - Recursion
  - Breadth-First Search
description: "This is a solution to the Flood Fill problem on LeetCode."
---

## Problem Description

An image is represented by an `m x n` integer grid image where `image[i][j]` represents the pixel value of the image.

You are also given three integers `sr`, `sc`, and `color`. You should perform a **flood fill** on the image starting from the pixel `image[sr][sc]`.

To perform a **flood fill**, consider the starting pixel, plus any pixels connected **4-directionally** to the starting pixel of the same color as the starting pixel, plus any pixels connected **4-directionally** to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `color`.

Return the modified image after performing the flood fill.

### Examples

**Example 1:**

![image](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)
```
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
```

**Example 2:**

```
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
```

### Constraints

- $m == image.length$
- $n == image[i].length$
- $1 \leq m, n \leq 50$
- $0 \leq sr < m$
- $0 \leq sc < n$
- $0 \leq image[i][j], color < 2^{16}$

## Solution for Flood Fill

### Approach: Depth-First Search
#### Intuition

We perform the algorithm explained in the problem description: paint the starting pixels, plus adjacent pixels of the same color, and so on.

#### Algorithm

Say `color` is the color of the starting pixel. Let's flood fill the starting pixel: we change the color of that pixel to the new color, then check the 4 neighboring pixels to make sure they are valid pixels of the same `color`, and of the valid ones, we flood fill those, and so on.

We can use a function `dfs` to perform a flood fill on a target pixel.



## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        int color = image[sr][sc];
        if (color != newColor) {
            dfs(image, sr, sc, color, newColor);
        }
        return image;
    }
    
    void dfs(vector<vector<int>>& image, int r, int c, int color, int newColor) {
        if (image[r][c] == color) {
            image[r][c] = newColor;
            if (r >= 1) {
                dfs(image, r - 1, c, color, newColor);
            }
            if (c >= 1) {
                dfs(image, r, c - 1, color, newColor);
            }
            if (r + 1 < image.size()) {
                dfs(image, r + 1, c, color, newColor);
            }
            if (c + 1 < image[0].size()) {
                dfs(image, r, c + 1, color, newColor);
            }
        }
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int color = image[sr][sc];
        if (color != newColor) {
            dfs(image, sr, sc, color, newColor);
        }
        return image;
    }
    public void dfs(int[][] image, int r, int c, int color, int newColor) {
        if (image[r][c] == color) {
            image[r][c] = newColor;
            if (r >= 1) {
                dfs(image, r - 1, c, color, newColor);
            }
            if (c >= 1) {
                dfs(image, r, c - 1, color, newColor);
            }
            if (r + 1 < image.length) {
                dfs(image, r + 1, c, color, newColor);
            }
            if (c + 1 < image[0].length) {
                dfs(image, r, c + 1, color, newColor);
            }
        }
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def floodFill(self, image, sr, sc, newColor):
        R, C = len(image), len(image[0])
        color = image[sr][sc]
        if color == newColor:
            return image
        def dfs(r, c):
            if image[r][c] == color:
                image[r][c] = newColor
                if r >= 1:
                    dfs(r-1, c)
                if r + 1 < R:
                    dfs(r + 1, c)
                if c >= 1:
                    dfs(r, c - 1)
                if c + 1 < C:
                    dfs(r, c + 1)

        dfs(sr, sc)
        return image
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**: where N is the number of pixels in the image. We might process every pixel.

### Space Complexity: $O(N)$

> **Reason**: the size of the implicit call stack when calling `dfs`.

## References

- **LeetCode Problem**: [Flood Fill](https://leetcode.com/problems/flood-fill/description/)

- **Solution Link**: [Flood Fill](https://leetcode.com/problems/flood-fill/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>