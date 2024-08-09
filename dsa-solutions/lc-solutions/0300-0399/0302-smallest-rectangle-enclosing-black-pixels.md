---
id: smallest-rectangle-enclosing-black-pixels
title: Smallest Rectangle Enclosing Black Pixels
sidebar_label: 0302-Smallest-Rectangle-Enclosing-Black-Pixels
tags: [Binary Search, Matrix, Array, Hard]
description: Given an image represented by a binary matrix where 0 is a white pixel and 1 is a black pixel, return the area of the smallest rectangle that encloses all black pixels. The black pixels are connected, and the rectangle must be axis-aligned.

---

## Problem Statement

You are given an `m x n` binary matrix `image` where `0` represents a white pixel and `1` represents a black pixel. The black pixels are connected, i.e., there is only one black region. Pixels are connected horizontally and vertically. 

Given the location `(x, y)` of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.

**You must write an algorithm with less than O(mn) runtime complexity.**

### Examples

**Example 1:**

```plaintext
Input: image = [["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], x = 0, y = 2
Output: 6
```

**Example 2:**

```plaintext
Input: image = [["1"]], x = 0, y = 0
Output: 1
```
### Constraints
- m == image.length
- n == image[i].length
- 1 &lt;= m, n &lt;= 100
- image[i][j] is either '0' or '1'.
- 0 &lt;= x &lt; m
- 0 &lt;= y &lt; n
- image[x][y] == '1'
- The black pixels in the image only form one component.
- At most 10^4 calls will be made to `add` and `find`.


## Solution

### Approach 

We use binary search to find the left, right, top, and bottom edges of the rectangle that encloses all the black pixels.

#### Algorithm

`Binary Search` to hold remainder.

- Horizontal Search: Find the top and bottom boundaries of the rectangle by searching for rows that contain black pixels.
- Vertical Search: Find the left and right boundaries of the rectangle by searching for columns that contain black pixels.

#### Implementation

## (Java)

```Java
public class Smallest_Rectangle_Enclosing_Black_Pixels {

    public class Solution_BinarySearch {
        public int minArea(char[][] image, int x, int y) {
            if (image == null || image.length == 0) {
                return 0;
            }

            int m = image.length;
            int n = image[0].length;

            int up = binarySearch(image, true, 0, x, 0, n, true);
            int down = binarySearch(image, true, x + 1, m, 0, n, false);
            int left = binarySearch(image, false, 0, y, up, down, true);
            int right = binarySearch(image, false, y + 1, n, up, down, false);

            return (right - left) * (down - up);
        }

        int binarySearch(char[][] image, boolean isHorizontal, int i, int j, int low, int high, boolean opt) {
            while (i < j) {
                int k = low;
                int mid = (i + j) / 2;

                while (k < high && (isHorizontal ? image[mid][k] : image[k][mid]) == '0') {
                    ++k;
                }

                if (k < high == opt) {
                    j = mid;
                } else {
                    i = mid + 1;
                }
            }

            return i;
        }
    }

    class Solution_BruteForce {
        public int minArea(char[][] image, int x, int y) {
            int rows = image.length, columns = image[0].length;
            int top = x, bottom = x, left = y, right = y;
            int[][] directions = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };
            image[x][y] = '2';
            Queue<int[]> queue = new LinkedList<>();
            queue.offer(new int[]{x, y});
            while (!queue.isEmpty()) {
                int[] cell = queue.poll();
                int row = cell[0], column = cell[1];
                for (int[] direction : directions) {
                    int newRow = row + direction[0], newColumn = column + direction[1];
                    if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns && image[newRow][newColumn] == '1') {
                        image[newRow][newColumn] = '2';
                        top = Math.min(top, newRow);
                        bottom = Math.max(bottom, newRow);
                        left = Math.min(left, newColumn);
                        right = Math.max(right, newColumn);
                        queue.offer(new int[]{newRow, newColumn});
                    }
                }
            }
            return (bottom - top + 1) * (right - left + 1);
        }
    }
}

```

## (C++) 
``` C++
C++
class TwoSum {
    Map<Integer,Boolean> map;
    List<Integer> list;
    int low = Integer.MAX_VALUE;
    int high = Integer.MIN_VALUE;
    /** Initialize your data structure here. */
    public TwoSum() {
        map = new HashMap<>();
        list = new LinkedList<>();
    }

    /** Add the number to an internal data structure..*/
    public void add(int number) {
        if(map.containsKey(number)){
            map.put(number,true);
        }else{
            map.put(number,false);
            list.add(number);
            low = Math.min(low,number);
            high = Math.max(high,number);
        }
    }

    /** Find if there exists any pair of numbers which sum is equal 
     * to the value. */
    public boolean find(int value) {
        if(value < 2* low || value > 2*high) return false;
        for(int num : list){
            int target = value - num;
            if(map.containsKey(target)){
                if(num != target) return true;
                else if(map.get(target)) return true;
            }
        }
        return false;
    }
}

```

### Complexity Analysis

- **Time Complexity**: $O(\log m \cdot n + \log n \cdot m)$, where $m$ is the number of rows and $n$ is the number of columns.
    
- **Space complexity**: $O(1)$, as we are using a constant amount of extra space for variables and no additional data structures.
