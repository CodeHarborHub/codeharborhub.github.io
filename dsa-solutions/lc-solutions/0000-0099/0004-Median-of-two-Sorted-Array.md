---
id: median-of-two-sorted-arrays
title: Median of Two Sorted Arrays(Leetcode)
sidebar_label: 0004 - Median of Two Sorted Arrays
tags: 
    - Array
    - Binary Search
    - Divide and Conquer0
    - LeetCode
description: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
sidebar_position: 4
---

In this page, we will solve the problem [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/) from LeetCode. We will provide multiple approaches to solve the problem along with the code implementation and the complexity analysis of the code.

## Problem Statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. 

The overall run time complexity should be <code>$O(log (m+n))$</code>.

### Example 1

```plaintext
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2

```plaintext
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Constraints:

- <code>$nums1.length == m$</code>
- <code>$nums2.length == n$</code>
- <code>$0 <= m <= 1000$</code>
- <code>$0 <= n <= 1000$</code>
- <code>$1 <= m + n <= 2000$</code>
- <code>$-10^6 <= nums1[i], nums2[i] <= 10^6$</code>

---

## Solution for Median of Two Sorted Arrays

The **Median of Two Sorted Arrays** is a classic algorithm problem on LeetCode ([Problem 4](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)). It requires finding the median of two sorted arrays. Given two sorted arrays `nums1` and `nums2`, the task is to find the median of the two arrays combined. 

Here is an explanation of the intuition and approaches to solve this problem:

### intuition

The median is the middle value of a dataset. For an even number of elements, it is the average of the two middle values. If we have two sorted arrays, the naive approach would involve merging both arrays and then finding the median, but this approach does not take full advantage of the fact that the arrays are already sorted and is not efficient for large arrays.

Instead, we can use a more advanced approach to find the median in <code>$O(log(min(n, m)))$</code> time, where `n` and `m` are the lengths of the two arrays. This involves using a binary search method. The idea is to partition both arrays into two halves such that the combined left half and right half are both sorted and of equal length (or differing by one).

<Tabs>
 <tabItem value="Binary Search" label="Binary Search">
  
## Approach 1: Binary Search

The binary search approach involves partitioning the two arrays such that the combined left half and right half are both sorted and of equal length (or differing by one). We can then find the median based on these partitions.

### Pseudocode

1. Ensure `nums1` is the smaller array.
2. Initialize `low` and `high` for binary search on `nums1`.
3. While `low <= high`:
    - Calculate `partitionX` and `partitionY`.
    - Set `maxX`, `minX`, `maxY`, `minY`.
    - If `maxX <= minY` and `maxY <= minX`: 
        - If total number of elements is even
          - Return average of `max(maxX, maxY)` and `min(minX, minY)`.
        - Else
          - Return `max(maxX, maxY)`.
    - If `maxX > minY`:
        - Move `high` to `partitionX - 1`.
    - Else:
        - Move `low` to `partitionX + 1`.
4. If no median is found, raise an error.

### Implementation and Code

Here is a live code editor for you to play around with the solution:

```jsx live
function medianOfTwoSortedArraysProblem() {
  const findMedianSortedArrays = (nums1, nums2) => {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
    
    const x = nums1.length;
    const y = nums2.length;
    let low = 0, high = x;
    
    while (low <= high) {
      const partitionX = Math.floor((low + high) / 2);
      const partitionY = Math.floor((x + y + 1) / 2) - partitionX;
      
      const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
      const minX = (partitionX === x) ? Infinity : nums1[partitionX];
      
      const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
      const minY = (partitionY === y) ? Infinity : nums2[partitionY];
      
      if (maxX <= minY && maxY <= minX) {
        if ((x + y) % 2 === 0) {
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else {
          return Math.max(maxX, maxY);
        }
      } else if (maxX > minY) {
        high = partitionX - 1;
      } else {
        low = partitionX + 1;
      }
    }
    
    throw new Error("Input arrays are not sorted.");
  };

  const nums1 = [1, 3];
  const nums2 = [2];
  const result = findMedianSortedArrays(nums1, nums2);

  return (
    <div>
      <p>
        <b>Input:</b> nums1 = {"[" + nums1.join(", ") + "]"}, nums2 = {"[" + nums2.join(", ") + "]"}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

### Code in Different Languages

<Tabs>
    <TabItem value="js" label="JavaScript">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```js
    var findMedianSortedArrays = function(nums1, nums2) {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        let x = nums1.length;
        let y = nums2.length;
        let low = 0, high = x;

        while (low <= high) {
            let partitionX = Math.floor((low + high) / 2);
            let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

            let maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
            let minX = (partitionX === x) ? Infinity : nums1[partitionX];

            let maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
            let minY = (partitionY === y) ? Infinity : nums2[partitionY];

            if (maxX <= minY && maxY <= minX) {
                if ((x + y) % 2 === 0) {
                    return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
                } else {
                    return Math.max(maxX, maxY);
                }
            } else if (maxX > minY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }

        throw new Error("Input arrays are not sorted.");
    };
    ```

    </TabItem>
    <TabItem value="py" label="Python">
    <SolutionAuthor name="@ajay-dhangar"/>    
    ```python
       class Solution:
       def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
            if len(nums1) > len(nums2):
                nums1, nums2 = nums2, nums1
            
            x = len(nums1)
            y = len(nums2)
            low, high = 0, x
            
            while low <= high:
                partitionX = (low + high) // 2
                partitionY = (x + y + 1) // 2 - partitionX
                
                maxX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
                minX = float('inf') if partitionX == x else nums1[partitionX]
                
                maxY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
                minY = float('inf') if partitionY == y else nums2[partitionY]
                
                if maxX <= minY and maxY <= minX:
                    if (x + y) % 2 == 0:
                        return (max(maxX, maxY) + min(minX, minY)) / 2
                    else:
                        return max(maxX, maxY)
                elif maxX > minY:
                    high = partitionX - 1
                else:
                    low = partitionX + 1
            
            raise ValueError("Input arrays are not sorted.")
    ```    
    </TabItem>
    <TabItem value="java" label="Java">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```java
    class Solution {
        public double findMedianSortedArrays(int[] nums1, int[] nums2) {
            if (nums1.length > nums2.length) {
                int[] temp = nums1;
                nums1 = nums2;
                nums2 = temp;
            }

            int x = nums1.length;
            int y = nums2.length;
            int low = 0, high = x;

            while (low <= high) {
                int partitionX = (low + high) / 2;
                int partitionY = (x + y + 1) / 2 - partitionX;

                int maxX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
                int minX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];

                int maxY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
                int minY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];

                if (maxX <= minY && maxY <= minX) {
                    if ((x + y) % 2 == 0) {
                        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2.0;
                    } else {
                        return Math.max(maxX, maxY);
                    }
                } else if (maxX > minY) {
                    high = partitionX - 1;
                } else {
                    low = partitionX + 1;
                }
            }

            throw new IllegalArgumentException("Input arrays are not sorted.");
        }
    }
    ```
    </TabItem>
    <TabItem value="cpp" label="C++">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```cpp
    class Solution {
    public:
        double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
            if (nums1.size() > nums2.size()) {
                swap(nums1, nums2);
            }

            int x = nums1.size();
            int y = nums2.size();
            int low = 0, high = x;

            while (low <= high) {
                int partitionX = (low + high) / 2;
                int partitionY = (x + y + 1) / 2 - partitionX;

                int maxX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
                int minX = (partitionX == x) ? INT_MAX : nums1[partitionX];

                int maxY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
                int minY = (partitionY == y) ? INT_MAX : nums2[partitionY];

                if (maxX <= minY && maxY <= minX) {
                    if ((x + y) % 2 == 0) {
                        return (max(maxX, maxY) + min(minX, minY)) / 2.0;
                    } else {
                        return max(maxX, maxY);
                    }
                } else if (maxX > minY) {
                    high = partitionX - 1;
                } else {
                    low = partitionX + 1;
                }
            }

            throw invalid_argument("Input arrays are not sorted.");
        }
    };
    ```
    </TabItem>
    <TabItem value="c" label="C">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```c
    double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
        if (nums1Size > nums2Size) {
            int* temp = nums1;
            nums1 = nums2;
            nums2 = temp;
            int tempSize = nums1Size;
            nums1Size = nums2Size;
            nums2Size = tempSize;
        }

        int x = nums1Size;
        int y = nums2Size;
        int low = 0, high = x;

        while (low <= high) {
            int partitionX = (low + high) / 2;
            int partitionY = (x + y + 1) / 2 - partitionX;

            int maxX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];
            int minX = (partitionX == x) ? INT_MAX : nums1[partitionX];

            int maxY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];
            int minY = (partitionY == y) ? INT_MAX : nums2[partitionY];

            if (maxX <= minY && maxY <= minX) {
                if ((x + y) % 2 == 0) {
                    return (fmax(maxX, maxY) + fmin(minX, minY)) / 2.0;
                } else {
                    return fmax(maxX, maxY);
                }
            } else if (maxX > minY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }

        return -1;
    }
    ```
    </TabItem>
    <TabItem value="ts" label="TypeScript">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```ts
    function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        let x = nums1.length;
        let y = nums2.length;
        let low = 0, high = x;

        while (low <= high) {
            let partitionX = Math.floor((low + high) / 2);
            let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

            let maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
            let minX = (partitionX === x) ? Infinity : nums1[partitionX];

            let maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
            let minY = (partitionY === y) ? Infinity : nums2[partitionY];

            if (maxX <= minY && maxY <= minX) {
                if ((x + y) % 2 === 0) {
                    return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
                } else {
                    return Math.max(maxX, maxY);
                }
            } else if (maxX > minY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }

        throw new Error("Input arrays are not sorted.");
    }
    ```
    </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity**: The time complexity of this approach is <code>$O(log(min(n, m)))$</code>, where `n` and `m` are the lengths of the two arrays. The binary search approach helps in reducing the search space and finding the median efficiently.
- **Space Complexity**: The space complexity of this approach is <code>$O(1)$</code> as we are using constant extra space.

### Test Cases

Let's test the solution with the sample test cases:

<Tabs>
<TabItem value="TestCase1" label="Case 1">
```plaintext
Input: nums1 = [1, 3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1, 2, 3] and median is 2.
```
</TabItem>
<TabItem value="TestCase2" label="Case 2">
```plaintext
Input: nums1 = [1, 2], nums2 = [3, 4]
Output: 2.50000
Explanation: merged array = [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5.
```
 </TabItem>
</Tabs>
</tabItem>

<tabItem value="Divide and Conquer" label="Divide and Conquer">
  
## Approach 2: Divide and Conquer

The divide and conquer approach finds the median by recursively dividing the problem into smaller subproblems. It merges two sorted arrays by comparing and removing the smallest element from the two arrays until the median is found.

### Pseudocode

1. Ensure `nums1` is the smaller array.
2. If the total length of both arrays is even, find the k-th and (k+1)-th smallest elements and return their average.
3. If the total length is odd, find the k-th smallest element.
4. Define a helper function `getKth` to find the k-th smallest element in the combined array:
    - Base cases:
        - If one array is empty, return the k-th element from the other array.
        - If k is 1, return the minimum of the first elements of both arrays.
    - Recursive case:
        - Divide k by 2, compare the k/2-th elements of both arrays, and discard the smaller half.

### Implementation and Code

Here is a live code editor for you to play around with the solution:

```jsx live
function medianOfTwoSortedArraysProblem() {
  const findMedianSortedArrays = (nums1, nums2) => {
    const getKth = (nums1, nums2, k) => {
      const len1 = nums1.length;
      const len2 = nums2.length;
      
      if (len1 > len2) return getKth(nums2, nums1, k);
      if (len1 === 0) return nums2[k - 1];
      if (k === 1) return Math.min(nums1[0], nums2[0]);

      const i = Math.min(len1, Math.floor(k / 2));
      const j = Math.min(len2, Math.floor(k / 2));

      if (nums1[i - 1] > nums2[j - 1]) {
        return getKth(nums1, nums2.slice(j), k - j);
      } else {
        return getKth(nums1.slice(i), nums2, k - i);
      }
    };

    const len = nums1.length + nums2.length;
    if (len % 2 === 1) {
      return getKth(nums1, nums2, Math.floor(len / 2) + 1);
    } else {
      return (
        (getKth(nums1, nums2, Math.floor(len / 2)) +
          getKth(nums1, nums2, Math.floor(len / 2) + 1)) /
        2
      );
    }
  };

  const nums1 = [1, 3];
  const nums2 = [2];
  const result = findMedianSortedArrays(nums1, nums2);

  return (
    <div>
      <p>
        <b>Input:</b> nums1 = {"[" + nums1.join(", ") + "]"}, nums2 = {"[" + nums2.join(", ") + "]"}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

### Code in Different Languages

<Tabs>
    <TabItem value="js" label="JavaScript">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```js
    var findMedianSortedArrays = function(nums1, nums2) {
        const getKth = (nums1, nums2, k) => {
            const len1 = nums1.length;
            const len2 = nums2.length;

            if (len1 > len2) return getKth(nums2, nums1, k);
            if (len1 === 0) return nums2[k - 1];
            if (k === 1) return Math.min(nums1[0], nums2[0]);

            const i = Math.min(len1, Math.floor(k / 2));
            const j = Math.min(len2, Math.floor(k / 2));

            if (nums1[i - 1] > nums2[j - 1]) {
                return getKth(nums1, nums2.slice(j), k - j);
            } else {
                return getKth(nums1.slice(i), nums2, k - i);
            }
        };

        const len = nums1.length + nums2.length;
        if (len % 2 === 1) {
            return getKth(nums1, nums2, Math.floor(len / 2) + 1);
        } else {
            return (getKth(nums1, nums2, Math.floor(len / 2)) +
                    getKth(nums1, nums2, Math.floor(len / 2) + 1)) / 2;
        }
    };
    ```
    </TabItem>
    <TabItem value="py" label="Python">
    <SolutionAuthor name="@ajay-dhangar"/>    
    ```python
    class Solution:
        def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
            def getKth(nums1, nums2, k):
                if len(nums1) > len(nums2):
                    return getKth(nums2, nums1, k)
                if len(nums1) == 0:
                    return nums2[k - 1]
                if k == 1:
                    return min(nums1[0], nums2[0])

                i = min(len(nums1), k // 2)
                j = min(len(nums2), k // 2)

                if nums1[i - 1] > nums2[j - 1]:
                    return getKth(nums1, nums2[j:], k - j)
                else:
                    return getKth(nums1[i:], nums2, k - i)

            len_combined = len(nums1) + len(nums2)
            if len_combined % 2 == 1:
                return getKth(nums1, nums2, len_combined // 2 + 1)
            else:
                return (getKth(nums1, nums2, len_combined // 2) + 
                        getKth(nums1, nums2, len_combined // 2 + 1)) / 2
    ```    
    </TabItem>
    <TabItem value="java" label="Java">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```java
    class Solution {
        public double findMedianSortedArrays(int[] nums1, int[] nums2) {
            int len1 = nums1.length;
            int len2 = nums2.length;

            if (len1 > len2) {
                return findMedianSortedArrays(nums2, nums1);
            }

            int len = len1 + len2;
            if (len % 2 == 1) {
                return getKth(nums1, nums2, len / 2 + 1);
            } else {
                return (getKth(nums1, nums2, len / 2) + getKth(nums1, nums2, len / 2 + 1)) / 2.0;
            }
        }

        private int getKth(int[] nums1, int[] nums2, int k) {
            int len1 = nums1.length;
            int len2 = nums2.length;

            if (len1 > len2) {
                return getKth(nums2, nums1, k);
            }
            if (len1 == 0) {
                return nums2[k - 1];
            }
            if (k == 1) {
                return Math.min(nums1[0], nums2[0]);
            }

            int i = Math.min(len1, k / 2);
            int j = Math.min(len2, k / 2);

            if (nums1[i - 1] > nums2[j - 1]) {
                return getKth(nums1, Arrays.copyOfRange(nums2, j, len2), k - j);
            } else {
                return getKth(Arrays.copyOfRange(nums1, i, len1), nums2, k - i);
            }
        }
    }
    ```
    </TabItem>
    <TabItem value="cpp" label="C++">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```cpp
    class Solution {
    public:
        double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
            int len1 = nums1.size();
            int len2 = nums2.size();
            
            if (len1 > len2) {
                return findMedianSortedArrays(nums2, nums1);
            }
            
            int len = len1 + len2;
            if (len % 2 == 1) {
                return getKth(nums1, nums2, len / 2 + 1);
            } else {
                return (getKth(nums1, nums2, len / 2) + getKth(nums1, nums2, len / 2 + 1)) / 2.0;
            }
        }

    private:
        int getKth(vector<int>& nums1, vector<int>& nums2, int k) {
            int len1 = nums1.size();
            int len2 = nums2.size();
            
            if (len1 > len2) {
                return getKth(nums2, nums1, k);
            }
            if (len            1 == 0) {
                return nums2[k - 1];
            }
            if (k == 1) {
                return min(nums1[0], nums2[0]);
            }

            int i = min(len1, k / 2);
            int j = min(len2, k / 2);

            if (nums1[i - 1] > nums2[j - 1]) {
                return getKth(nums1, vector<int>(nums2.begin() + j, nums2.end()), k - j);
            } else {
                return getKth(vector<int>(nums1.begin() + i, nums1.end()), nums2, k - i);
            }
        }
    };
    ```
    </TabItem>
    <TabItem value="c" label="C">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```c
    double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
        if (nums1Size > nums2Size) {
            return findMedianSortedArrays(nums2, nums2Size, nums1, nums1Size);
        }

        int len = nums1Size + nums2Size;
        if (len % 2 == 1) {
            return getKth(nums1, nums1Size, nums2, nums2Size, len / 2 + 1);
        } else {
            return (getKth(nums1, nums1Size, nums2, nums2Size, len / 2) + getKth(nums1, nums1Size, nums2, nums2Size, len / 2 + 1)) / 2.0;
        }
    }

    double getKth(int* nums1, int nums1Size, int* nums2, int nums2Size, int k) {
        if (nums1Size > nums2Size) {
            return getKth(nums2, nums2Size, nums1, nums1Size, k);
        }
        if (nums1Size == 0) {
            return nums2[k - 1];
        }
        if (k == 1) {
            return fmin(nums1[0], nums2[0]);
        }

        int i = fmin(nums1Size, k / 2);
        int j = fmin(nums2Size, k / 2);

        if (nums1[i - 1] > nums2[j - 1]) {
            return getKth(nums1, nums1Size, nums2 + j, nums2Size - j, k - j);
        } else {
            return getKth(nums1 + i, nums1Size - i, nums2, nums2Size, k - i);
        }
    }
    ```
    </TabItem>
    <TabItem value="ts" label="TypeScript">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```ts
    function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const getKth = (nums1: number[], nums2: number[], k: number): number => {
            if (nums1.length > nums2.length) return getKth(nums2, nums1, k);
            if (nums1.length === 0) return nums2[k - 1];
            if (k === 1) return Math.min(nums1[0], nums2[0]);

            const i = Math.min(nums1.length, Math.floor(k / 2));
            const j = Math.min(nums2.length, Math.floor(k / 2));

            if (nums1[i - 1] > nums2[j - 1]) {
                return getKth(nums1, nums2.slice(j), k - j);
            } else {
                return getKth(nums1.slice(i), nums2, k - i);
            }
        };

        const len = nums1.length + nums2.length;
        if (len % 2 === 1) {
            return getKth(nums1, nums2, Math.floor(len / 2) + 1);
        } else {
            return (
                (getKth(nums1, nums2, Math.floor(len / 2)) +
                    getKth(nums1, nums2, Math.floor(len / 2) + 1)) /
                2
            );
        }
    }
    ```
    </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity**: The time complexity of this approach is <code>$O(log(min(n, m)))$</code>, where `n` and `m` are the lengths of the two arrays. Each recursive call divides the problem into half.
- **Space Complexity**: The space complexity of this approach is <code>$O(1)$</code> as we are using constant extra space.

### Test Cases

Let's test the solution with the sample test cases:

<Tabs>
<TabItem value="TestCase1" label="Case 1">
```plaintext
Input: nums1 = [1, 3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1, 2, 3] and median is 2.
```
</TabItem>
<TabItem value="TestCase2" label="Case 2">
```plaintext
Input: nums1 = [1, 2], nums2 = [3, 4]
Output: 2.50000
Explanation: merged array = [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5.
```
 </TabItem>
</Tabs>
</tabItem>
</Tabs>

:::info

**Note**: The binary search approach is more efficient than the divide and conquer approach as it has a better time complexity of <code>$O(log(min(n, m)))$</code> compared to the divide and conquer approach. However, both approaches provide a solution to the problem of finding the median of two sorted arrays.

**Which approach is best for you?** 

The binary search approach is more efficient and recommended for solving the problem of finding the median of two sorted arrays. However, the divide and conquer approach is also a valid solution and can be used if needed.

:::

:::tip 
When asked to find the median of two sorted arrays, a direct approach that merges the two arrays and then finds the median will work but isn't optimal. Given the problem's constraints, we can leverage the fact that the arrays are already sorted and use binary search to find the median in $$ O(\log(\min(n, m))) $$ time complexity. 

The key idea is to use binary search to partition the smaller array in such a way that we can easily find the median by comparing elements around the partition.

#### Detailed Explanation

1. **Ensure the Smaller Array is First**: 
   - This step is to make sure we always perform the binary search on the smaller array, which helps us manage the partition logic more easily. Let $$ \text{nums1} $$ be the smaller array and $$ \text{nums2} $$ be the larger array.

2. **Set Up Binary Search**:
   - Initialize $$ \text{low} $$ and $$ \text{high} $$ pointers for the binary search on $$ \text{nums1} $$.
   - We aim to partition $$ \text{nums1} $$ and $$ \text{nums2} $$ such that the left side of the combined arrays contains half of the elements, and the right side contains the other half.

3. **Partitioning the Arrays**:
   - Calculate $$ \text{partitionX} $$ as the midpoint of $$ \text{nums1} $$.
   - Calculate $$ \text{partitionY} $$ such that the left side of the combined arrays has the same number of elements as the right side. This can be achieved by: 
     $$
     \text{partitionY} = \frac{(x + y + 1)}{2} - \text{partitionX}
     $$

     where $$ x $$ and $$ y $$ are the lengths of $$ \text{nums1} $$ and $$ \text{nums2} $$ respectively.

4. **Boundary Conditions**:
   - Handle cases where partitions might go out of bounds. If $$ \text{partitionX} $$ is 0, it means there are no elements on the left side of $$ \text{nums1} $$. If $$ \text{partitionX} $$ is $$ x $$, it means there are no elements on the right side of $$ \text{nums1} $$.

5. **Check Valid Partition**:
   - A valid partition is one where the maximum element on the left side of both partitions is less than or equal to the minimum element on the right side of both partitions:
     $$
     \text{maxX} \leq \text{minY} \quad \text{and} \quad \text{maxY} \leq \text{minX}
     $$
     Here, $$ \text{maxX} $$ is the largest element on the left side of $$ \text{nums1} $$, $$ \text{minX} $$ is the smallest element on the right side of $$ \text{nums1} $$, and similarly for $$ \text{nums2} $$.

6. **Calculate the Median**:
   - If the total number of elements $$ (x + y) $$ is even, the median is the average of the two middle values:
     $$
     \text{median} = \frac{\text{max(maxX, maxY)} + \text{min(minX, minY)}}{2}
     $$
   - If the total number of elements is odd, the median is the maximum element of the left partition:
     $$
     \text{median} = \text{max(maxX, maxY)}
     $$

7. **Adjust Binary Search**:
   - If $$ \text{maxX} > \text{minY} $$, it means we need to move the partition in $$ \text{nums1} $$ to the left, so adjust $$ \text{high} $$.
   - If $$ \text{maxY} > \text{minX} $$, it means we need to move the partition in $$ \text{nums1} $$ to the right, so adjust $$ \text{low} $$.

:::

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ajay-dhangar'].map(username => (
    <Author key={username} username={username} />
))}
</div>