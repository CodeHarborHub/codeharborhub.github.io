---
id: Max-Consecutive-Ones
title: Max Consecutive Ones
sidebar_label: 0485-Max-Consecutive-Ones
tags:
   - Array
description: "Given a binary array nums, return the maximum number of consecutive 1's in the array."

---



## Problem Statement

Given a binary array nums, return the maximum number of consecutive 1's in the array.


### Examples

**Example 1:**

```plaintext
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
```

**Example 2:**

```plaintext
Input: nums = [1,0,1,1,0,1]
Output: 2
```

### Constraints

- `1 <= nums.length <= 105`
- nums[i] is either 0 or 1.
  

## Solution

We maintain a variable count that keeps a track of the number of consecutive 1’s while traversing the array. 
The other variable max_count maintains the maximum number of 1’s, in other words, it maintains the answer.

### Approach 

#### Algorithm
We start traversing from the beginning of the array. Since we can encounter either a 1 or 0 there can be two situations:-
  - If  the value at the current index is equal to 1 we increase the value of count by one.
    After updating  the count variable if it becomes more than the max_count, update the max_count.
  - If the value at the current index is equal to zero we make the variable count as 0 since there are no more consecutive ones.

#### Solution

### Java Solution

```Java
import java.util.*;
public class Main {
    static int findMaxConsecutiveOnes(int nums[]) {
        int cnt = 0;
        int maxi = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                cnt++;
            } else {
                cnt = 0;
            }

            maxi = Math.max(maxi, cnt);
        }
        return maxi;
    }
    public static void main(String args[]) {
        int nums[] = { 1, 1, 0, 1, 1, 1 };
        int ans = findMaxConsecutiveOnes(nums);
        System.out.println("The maximum  consecutive 1's are " + ans);
    }
}

```

### C++ Solution

```cpp
#include <bits/stdc++.h>

using namespace std;
class Solution {
  public:
    int findMaxConsecutiveOnes(vector < int > & nums) {
      int cnt = 0;
      int maxi = 0;
      for (int i = 0; i < nums.size(); i++) {
        if (nums[i] == 1) {
          cnt++;
        } else {
          cnt = 0;
        }

        maxi = max(maxi, cnt);
      }
      return maxi;
    }
};

int main() {
  vector < int > nums = { 1, 1, 0, 1, 1, 1 };
  Solution obj;
  int ans = obj.findMaxConsecutiveOnes(nums);
  cout << "The maximum  consecutive 1's are " << ans;
  return 0;
}
```

### Python Solution

```python

from typing import List
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        cnt = 0
        maxi = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                cnt += 1
            else:
                cnt = 0
            maxi = max(maxi, cnt)
        return maxi


if __name__ == "__main__":
    nums = [1, 1, 0, 1, 1, 1]
    obj = Solution()
    ans = obj.findMaxConsecutiveOnes(nums)
    print("The maximum  consecutive 1's are", ans)
```

### Complexity Analysis

- **Time complexity**: $O(N)$, since the solution involves only a single pass.
- **Space complexity**: $O(1)$, because no extra space is used.
