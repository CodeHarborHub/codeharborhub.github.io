---
id: number-of-pairs-of-interchangeable-rectangles
title: Number of Pairs of Interchangeable Rectangles
sidebar_label: 2001 Number of Pairs of Interchangeable Rectangles
tags:
  - Array
  - Hash Table
  - Math
  - LeetCode
  - C++
description: "This is a solution to the Number of Pairs of Interchangeable Rectangles problem on LeetCode."
sidebar_position: 2001
---

## Problem Description

You are given `n` rectangles represented by a 0-indexed 2D integer array `rectangles`, where `rectangles[i] = [widthi, heighti]` denotes the width and height of the ith rectangle.

Two rectangles `i` and `j` (i &lt; j) are considered interchangeable if they have the same width-to-height ratio. More formally, two rectangles are interchangeable if `widthi/heighti == widthj/heightj` (using decimal division, not integer division).

Return the number of pairs of interchangeable rectangles in `rectangles`.

### Examples

**Example 1:**

```
Input: rectangles = [[4,8],[3,6],[10,20],[15,30]]
Output: 6

Explanation: The following are the interchangeable pairs of rectangles by index (0-indexed):

Rectangle 0 with rectangle 1: 4/8 == 3/6.
Rectangle 0 with rectangle 2: 4/8 == 10/20.
Rectangle 0 with rectangle 3: 4/8 == 15/30.
Rectangle 1 with rectangle 2: 3/6 == 10/20.
Rectangle 1 with rectangle 3: 3/6 == 15/30.
Rectangle 2 with rectangle 3: 10/20 == 15/30.
```

**Example 2:**

```
Input: rectangles = [[4,5],[7,8]]
Output: 0

Explanation: There are no interchangeable pairs of rectangles.
```


### Constraints
- `n == rectangles.length`
- `1 <= n <= 10^5`
- `rectangles[i].length == 2`
- `1 <= widthi, heighti <= 10^5`

### Approach

To solve this problem, we can use a hash map to keep track of the frequency of each unique width-to-height ratio. We iterate through the array of rectangles, calculate the ratio for each rectangle, and use the hash map to count the pairs that have the same ratio.

### Complexity

- **Time complexity**: $O(n)$, where `n` is the number of rectangles. This is because we are iterating through the array once.
- **Space complexity**: $O(n)$, for storing the ratios in the hash map.

#### C++ 

```cpp
class Solution {
public:
    long long interchangeableRectangles(vector<vector<int>>& rectangles) {
        // Store the counts of each width-to-height ratio
        unordered_map<double, long long> ratio_counts;
        long long res = 0;

        for (const auto& rectangle: rectangles){
            // Calculate the ratio of current rectangle
            double ratio = static_cast<double>(rectangle.front()) / rectangle.back();

            // Add the current count of this ratio to the result, as all rectangles
            // with the same ratio encountered so far are interchangeable with this one
            res += ratio_counts[ratio]++;
        }
        
        return res;
    }
};
```

#### Java

```java
class Solution {
    public long interchangeableRectangles(int[][] rectangles) {
        Map<Double,Long> mp = new HashMap<Double,Long>();
        long anss = 0;
         for(int i=0;i<rectangles.length;i++){
          //ratio.push_back(((double)rectangles[i][0]/rectangles[i][1]));
          double ans = (double)rectangles[i][0]/rectangles[i][1];
          mp.put(ans,mp.get(ans)==null?1:mp.get(ans)+1);
        } 
     //   System.out.println(mp);
        for(Map.Entry<Double,Long> mpp:mp.entrySet()){
         // System.out.println(mpp.getValue());
          long temp = (long)(mpp.getValue())-1;
          anss+= (temp*(temp+1))/2;
        }
        return anss;

    }
}
```
