---
id: Erect The Fence
title: Erect The Fence
sidebar_label: Erect-The-Fence
tags:
  - Algorithms
  - Geometry
  - Convex Hull
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Erect The Fence](https://leetcode.com/problems/Erect The Fence/description/) | [Erect The Fence Solution on LeetCode](https://leetcode.com/problems/Erect-The-Fence/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

You are given an array `trees` where `trees[i] = [xi, yi]` represents the location of a tree in the garden.

Fence the entire garden using the minimum length of rope, as it is expensive. The garden is well-fenced only if all the trees are enclosed.

Return the coordinates of trees that are exactly located on the fence perimeter. You may return the answer in any order.

### Example 1

**Input:**`trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]`
**Output:**`[[1,1],[2,0],[4,2],[3,3],[2,4]]`
**Explanation:**
All the trees will be on the perimeter of the fence except the tree at `[2, 2]`, which will be inside the fence.

### Example 2

**Input:**`trees = [[1,2],[2,2],[4,2]]`
**Output:**`[[4,2],[2,2],[1,2]]`
**Explanation:**
The fence forms a line that passes through all the trees.

## Constraints

- `1 <= trees.length <= 3000`
- `trees[i].length == 2`
- `0 <= xi, yi <= 100`
- All the given positions are unique.

## Approach

To solve this problem, we can use the **Convex Hull** algorithm. Specifically, we will use the **Monotone Chain Algorithm** to find the convex hull of the given points. The convex hull is the smallest polygon that can enclose all the given points.

### Steps:
1. **Sort the points**: Sort the array of points lexicographically (first by x-coordinate, and in case of a tie, by y-coordinate).
2. **Build the lower hull**:
    - Initialize an empty list for the lower hull.
    - Iterate over the sorted points and maintain the lower hull using a stack.
    - Remove the last point from the stack if it makes a non-left turn with the next point.
3. **Build the upper hull**:
    - Similarly, build the upper hull by iterating over the sorted points in reverse order.
4. **Combine the hulls**: Concatenate the lower and upper hulls to get the convex hull.

## Solution in Different Languages

### Solution in Python
```python
def outerTrees(trees):
    def orientation(p, q, r):
        return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])

    trees.sort()
    lower = []
    for tree in trees:
        while len(lower) >= 2 and orientation(lower[-2], lower[-1], tree) < 0:
            lower.pop()
        lower.append(tree)

    upper = []
    for tree in reversed(trees):
        while len(upper) >= 2 and orientation(upper[-2], upper[-1], tree) < 0:
            upper.pop()
        upper.append(tree)

    return list(set(lower + upper))

# Example Usage
trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
print(outerTrees(trees))
```

### Solution in Java
```java
import java.util.*;

public class Solution {
    public List<int[]> outerTrees(int[][] trees) {
        Arrays.sort(trees, (a, b) -> a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
        List<int[]> lower = new ArrayList<>(), upper = new ArrayList<>();

        for (int[] tree : trees) {
            while (lower.size() >= 2 && orientation(lower.get(lower.size() - 2), lower.get(lower.size() - 1), tree) < 0)
                lower.remove(lower.size() - 1);
            lower.add(tree);
        }

        for (int i = trees.length - 1; i >= 0; i--) {
            int[] tree = trees[i];
            while (upper.size() >= 2 && orientation(upper.get(upper.size() - 2), upper.get(upper.size() - 1), tree) < 0)
                upper.remove(upper.size() - 1);
            upper.add(tree);
        }

        Set<int[]> result = new HashSet<>(lower);
        result.addAll(upper);
        return new ArrayList<>(result);
    }

    private int orientation(int[] p, int[] q, int[] r) {
        return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] trees = {{1, 1}, {2, 2}, {2, 0}, {2, 4}, {3, 3}, {4, 2}};
        List<int[]> result = sol.outerTrees(trees);
        for (int[] point : result) {
            System.out.println(Arrays.toString(point));
        }
    }
}
```

### Solution in C++
```cpp
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

class Solution {
public:
    vector<vector<int>> outerTrees(vector<vector<int>>& trees) {
        sort(trees.begin(), trees.end());
        vector<vector<int>> lower, upper;

        for (const auto& tree : trees) {
            while (lower.size() >= 2 && orientation(lower[lower.size() - 2], lower[lower.size() - 1], tree) < 0)
                lower.pop_back();
            lower.push_back(tree);
        }

        for (int i = trees.size() - 1; i >= 0; i--) {
            const auto& tree = trees[i];
            while (upper.size() >= 2 && orientation(upper[upper.size() - 2], upper[upper.size() - 1], tree) < 0)
                upper.pop_back();
            upper.push_back(tree);
        }

        set<vector<int>> result(lower.begin(), lower.end());
        result.insert(upper.begin(), upper.end());
        return vector<vector<int>>(result.begin(), result.end());
    }

private:
    int orientation(const vector<int>& p, const vector<int>& q, const vector<int>& r) {
        return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
    }
};
```

### Solution in C
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int x, y;
} Point;

int compare(const void* a, const void* b) {
    Point* p1 = (Point*)a;
    Point* p2 = (Point*)b;
    return (p1->x != p2->x) ? (p1->x - p2->x) : (p1->y - p2->y);
}

int orientation(Point p, Point q, Point r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

void addPoint(Point* hull, int* size, Point p) {
    while (*size >= 2 && orientation(hull[*size - 2], hull[*size - 1], p) < 0) {
        (*size)--;
    }
    hull[(*size)++] = p;
}

Point* outerTrees(Point* trees, int treesSize, int* returnSize) {
    qsort(trees, treesSize, sizeof(Point), compare);
    Point* hull = (Point*)malloc(treesSize * 2 * sizeof(Point));
    int size = 0;

    for (int i = 0; i < treesSize; i++) {
        addPoint(hull, &size, trees[i]);
    }

    for (int i = treesSize - 1, t = size + 1; i >= 0; i--) {
        addPoint(hull, &size, trees[i]);
    }

    *returnSize = size;
    return hull;
}

int main() {
    Point trees[] = {{1, 1}, {2, 2}, {2, 0}, {2, 4}, {3, 3}, {4, 2}};
    int returnSize;
    Point* result = outerTrees(trees, 6, &returnSize);

    for (int i = 0; i < returnSize; i++) {
        printf("[%d, %d] ", result[i].x, result[i].y);
    }

    free(result);
    return 0;
}
```

### Solution in JavaScript
```javascript
function outerTrees(trees) {
    function orientation(p, q, r) {
        return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
    }

   

 trees.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const lower = [];
    for (const tree of trees) {
        while (lower.length >= 2 && orientation(lower[lower.length - 2], lower[lower.length - 1], tree) < 0) {
            lower.pop();
        }
        lower.push(tree);
    }

    const upper = [];
    for (let i = trees.length - 1; i >= 0; i--) {
        const tree = trees[i];
        while (upper.length >= 2 && orientation(upper[upper.length - 2], upper[upper.length - 1], tree) < 0) {
            upper.pop();
        }
        upper.push(tree);
    }

    const result = new Set([...lower, ...upper].map(JSON.stringify));
    return Array.from(result).map(JSON.parse);
}

// Example Usage
const trees = [[1, 1], [2, 2], [2, 0], [2, 4], [3, 3], [4, 2]];
console.log(outerTrees(trees));
```

## Step by Step Algorithm

1. **Sort the points**: First, sort the array of points lexicographically.
2. **Build the lower hull**:
    - Initialize an empty list `lower`.
    - Iterate over the sorted array and for each point, do the following:
        - While there are at least two points in the `lower` list and the angle formed by the last two points and the current point makes a non-left turn, remove the last point from the `lower` list.
        - Add the current point to the `lower` list.
3. **Build the upper hull**:
    - Initialize an empty list `upper`.
    - Iterate over the sorted array in reverse order and for each point, do the following:
        - While there are at least two points in the `upper` list and the angle formed by the last two points and the current point makes a non-left turn, remove the last point from the `upper` list.
        - Add the current point to the `upper` list.
4. **Combine the hulls**: Concatenate the `lower` and `upper` lists, remove duplicates, and return the result.

## Conclusion

The Convex Hull algorithm, specifically the Monotone Chain Algorithm, provides an efficient way to determine the minimum length of rope needed to fence a garden with given tree positions. This approach ensures that all trees are enclosed with the minimum perimeter, making it an optimal solution for this problem.