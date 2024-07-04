---
id: sliding-subarray-beauty
title: 2653. Sliding Subarray Beauty
sidebar_label: 2653. Sliding Subarray Beauty


tags:
- Array
- Sliding Window
- Hash Table

description: "This is a solution to the 2653. Sliding Subarray Beauty
 problem on LeetCode."
---

## Problem Description
Given an integer array nums containing n integers, find the beauty of each subarray of size k.

The beauty of a subarray is the xth smallest integer in the subarray if it is negative, or 0 if there are fewer than x negative integers.

Return an integer array containing n - k + 1 integers, which denote the beauty of the subarrays in order from the first index in the array.

A subarray is a contiguous non-empty sequence of elements within an array.
### Examples
**Example 1:**

```
Input: nums = [1,-1,-3,-2,3], k = 3, x = 2
Output: [-1,-2,-2]
Explanation: There are 3 subarrays with size k = 3. 
The first subarray is [1, -1, -3] and the 2nd smallest negative integer is -1. 
The second subarray is [-1, -3, -2] and the 2nd smallest negative integer is -2. 
The third subarray is [-3, -2, 3] and the 2nd smallest negative integer is -2.
```

**Example 2:**
```
Input: nums = [-1,-2,-3,-4,-5], k = 2, x = 2
Output: [-1,-2,-3,-4]
Explanation: There are 4 subarrays with size k = 2.
For [-1, -2], the 2nd smallest negative integer is -1.
For [-2, -3], the 2nd smallest negative integer is -2.
For [-3, -4], the 2nd smallest negative integer is -3.
For [-4, -5], the 2nd smallest negative integer is -4. 
```

### Constraints
- `n == nums.length` 
- `1 <= n <= 10^5`
- `1 <= k <= n`
- `1 <= x <= k` 
- `-50 <= nums[i] <= 50` 
## Solution for2653. Sliding Subarray Beauty
1. **Initialize Data Structures:**
    - A list `ans` to store the results.
    - A map `mp` to keep track of the frequency of negative numbers in the current window.
    - Two pointers `i` and `j` to define the sliding window.

2. **Sliding Window Technique:**
    - Iterate through the array using the `j` pointer to expand the window.
    - If `nums[j]` is negative, increment its count in the map `mp`.
    - Check the window size:
        - If the window size is less than `k`, simply expand the window by incrementing `j`.
        - If the window size is equal to `k`, calculate the beauty:
            - Initialize a counter `cnt`.
            - Iterate through the map `mp`:
                - If the current key is negative, increment `cnt` by the frequency of the key.
                - If `cnt` is greater than or equal to `x`, append the current key to `ans` and break the loop.
            - If `cnt` is less than `x`, append `0` to `ans`.
            - Expand the window by incrementing `j`.
        - If the window size exceeds `k`, shrink the window from the left:
            - If `nums[i]` is negative, decrement its count in the map `mp`.
            - If the count of `nums[i]` becomes `0`, remove it from the map.
            - Increment `i` to shrink the window.
            - If the window size becomes equal to `k`, repeat the process of calculating the beauty.

3. **Return the Result:**
    - After processing all possible windows, return the list `ans`.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      function getSubarrayBeauty(nums, k, x) {
    const ans = [];
    const mp = {};
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[j] < 0) {
            mp[nums[j]] = (mp[nums[j]] || 0) + 1;
        }
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            let cnt = 0;
            const sortedKeys = Object.keys(mp).map(Number).sort((a, b) => a - b);
            for (let key of sortedKeys) {
                if (key < 0) {
                    cnt += mp[key];
                }
                if (cnt >= x) {
                    ans.push(key);
                    break;
                }
            }
            if (cnt < x) ans.push(0);
            j++;
        } else if (j - i + 1 > k) {
            while (j - i + 1 > k) {
                if (nums[i] < 0) {
                    mp[nums[i]]--;
                    if (mp[nums[i]] === 0) {
                        delete mp[nums[i]];
                    }
                }
                i++;
            }
            if (j - i + 1 === k) {
                let cnt = 0;
                const sortedKeys = Object.keys(mp).map(Number).sort((a, b) => a - b);
                for (let key of sortedKeys) {
                    if (key < 0) {
                        cnt += mp[key];
                    }
                    if (cnt >= x) {
                        ans.push(key);
                        break;
                    }
                }
                if (cnt < x) ans.push(0);
            }
            j++;
        }
    }

    return ans;
}
      const input =nums = [1,-1,-3,-2,3], k = 3, x = 2
      const output = getSubarrayBeauty(input , k , x)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $O(nlogn) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   function getSubarrayBeauty(nums, k, x) {
    const ans = [];
    const mp = {};
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[j] < 0) {
            mp[nums[j]] = (mp[nums[j]] || 0) + 1;
        }
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            let cnt = 0;
            const sortedKeys = Object.keys(mp).map(Number).sort((a, b) => a - b);
            for (let key of sortedKeys) {
                if (key < 0) {
                    cnt += mp[key];
                }
                if (cnt >= x) {
                    ans.push(key);
                    break;
                }
            }
            if (cnt < x) ans.push(0);
            j++;
        } else if (j - i + 1 > k) {
            while (j - i + 1 > k) {
                if (nums[i] < 0) {
                    mp[nums[i]]--;
                    if (mp[nums[i]] === 0) {
                        delete mp[nums[i]];
                    }
                }
                i++;
            }
            if (j - i + 1 === k) {
                let cnt = 0;
                const sortedKeys = Object.keys(mp).map(Number).sort((a, b) => a - b);
                for (let key of sortedKeys) {
                    if (key < 0) {
                        cnt += mp[key];
                    }
                    if (cnt >= x) {
                        ans.push(key);
                        break;
                    }
                }
                if (cnt < x) ans.push(0);
            }
            j++;
        }
    }

    return ans;
}
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
 class Solution {
    getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
        const ans: number[] = [];
        const mp: Map<number, number> = new Map();
        let i = 0;
        let j = 0;

        while (j < nums.length) {
            if (nums[j] < 0) mp.set(nums[j], (mp.get(nums[j]) || 0) + 1);
            if (j - i + 1 < k) {
                j++;
            } else if (j - i + 1 === k) {
                let cnt = 0;
                for (let [key, value] of mp) {
                    if (key < 0) {
                        cnt += value;
                    }
                    if (cnt >= x) {
                        ans.push(key);
                        break;
                    }
                }
                if (cnt < x) ans.push(0);
                j++;
            } else if (j - i + 1 > k) {
                while (j - i + 1 > k) {
                    if (nums[i] < 0) {
                        mp.set(nums[i], mp.get(nums[i]) - 1);
                        if (mp.get(nums[i]) === 0) {
                            mp.delete(nums[i]);
                        }
                    }
                    i++;
                }
                if (j - i + 1 === k) {
                    let cnt = 0;
                    for (let [key, value] of mp) {
                        if (key < 0) {
                            cnt += value;
                        }
                        if (cnt >= x) {
                            ans.push(key);
                            break;
                        }
                    }
                    if (cnt < x) ans.push(0);
                }
                j++;
            }
        }

        return ans;
    }
}
    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  from collections import defaultdict

class Solution:
    def getSubarrayBeauty(self, nums, k, x):
        ans = []
        mp = defaultdict(int)
        i = 0
        j = 0

        while j < len(nums):
            if nums[j] < 0:
                mp[nums[j]] += 1
            if j - i + 1 < k:
                j += 1
            elif j - i + 1 == k:
                cnt = 0
                for key in sorted(mp.keys()):
                    if key < 0:
                        cnt += mp[key]
                    if cnt >= x:
                        ans.append(key)
                        break
                if cnt < x:
                    ans.append(0)
                j += 1
            elif j - i + 1 > k:
                while j - i + 1 > k:
                    if nums[i] < 0:
                        mp[nums[i]] -= 1
                        if mp[nums[i]] == 0:
                            del mp[nums[i]]
                    i += 1
                if j - i + 1 == k:
                    cnt = 0
                    for key in sorted(mp.keys()):
                        if key < 0:
                            cnt += mp[key]
                        if cnt >= x:
                            ans.append(key)
                            break
                    if cnt < x:
                        ans.append(0)
                j += 1

        return ans

# Example usage:
solution = Solution()
nums = [1, -1, -3, -2, 3]
k = 3
x = 2
print(solution.getSubarrayBeauty(nums, k, x))  # Output: [-1, -2]

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
 import java.util.*;

class Solution {
    public List<Integer> getSubarrayBeauty(int[] nums, int k, int x) {
        List<Integer> ans = new ArrayList<>();
        TreeMap<Integer, Integer> mp = new TreeMap<>();
        int i = 0;
        int j = 0;

        while (j < nums.length) {
            if (nums[j] < 0) mp.put(nums[j], mp.getOrDefault(nums[j], 0) + 1);
            if (j - i + 1 < k) {
                j++;
            } else if (j - i + 1 == k) {
                int cnt = 0;
                for (Map.Entry<Integer, Integer> entry : mp.entrySet()) {
                    if (entry.getKey() < 0) {
                        cnt += entry.getValue();
                    }
                    if (cnt >= x) {
                        ans.add(entry.getKey());
                        break;
                    }
                }
                if (cnt < x) ans.add(0);
                j++;
            } else if (j - i + 1 > k) {
                while (j - i + 1 > k) {
                    if (nums[i] < 0) {
                        mp.put(nums[i], mp.get(nums[i]) - 1);
                        if (mp.get(nums[i]) == 0) {
                            mp.remove(nums[i]);
                        }
                    }
                    i++;
                }
                if (j - i + 1 == k) {
                    int cnt = 0;
                    for (Map.Entry<Integer, Integer> entry : mp.entrySet()) {
                        if (entry.getKey() < 0) {
                            cnt += entry.getValue();
                        }
                        if (cnt >= x) {
                            ans.add(entry.getKey());
                            break;
                        }
                    }
                    if (cnt < x) ans.add(0);
                }
                j++;
            }
        }

        return ans;
    }
}

// Example usage:
public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {1, -1, -3, -2, 3};
        int k = 3;
        int x = 2;
        System.out.println(solution.getSubarrayBeauty(nums, k, x));  // Output: [-1, -2]
    }
}

 ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
class Solution {
public:
    vector<int> getSubarrayBeauty(vector<int>& nums, int k, int x) {
        vector<int> ans;
        map<int, int> mp; // smallest
        int i = 0;
        int j = 0;
        while (j < nums.size()) {
            if (nums[j] < 0)
                mp[nums[j]]++;
            if (j - i + 1 < k) {
                j++;
            } else if (j - i + 1 == k) {
                int cnt = 0;
                for (auto it : mp) {
                    if (it.first < 0) {
                        cnt += it.second;
                    }
                    if (cnt >= x) {
                        ans.push_back(it.first);
                        break;
                    }
                }
                if (cnt < x)
                    ans.push_back(0);
                j++;
            } else if (j - i + 1 > k) {
                while (j - i + 1 > k) {
                    if (nums[i] < k) {
                        mp[nums[i]]--;
                        if (mp[nums[i]] == 0) {
                            mp.erase(nums[i]);
                        }
                    }
                    i++;
                }
                if (j - i + 1 == k) {
                    int cnt = 0;
                    for (auto it : mp) {
                        if (it.first < 0) {
                            cnt += it.second;
                        }

                        if (cnt >= x) {
                            ans.push_back(it.first);
                            break;
                        }
                    }
                    if (cnt < x)
                        ans.push_back(0);
                }
                j++;
            }
        }
        return ans;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [2348. Number of Zero-Filled Subarrays](https://leetcode.com/problems/sliding-subarray-beauty/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/sliding-subarray-beauty/)

