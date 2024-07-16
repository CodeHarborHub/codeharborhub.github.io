---
id: missing-range
title: Missing Range
sidebar_label: 0163-Missing Range
tags: [Dynamic Programming, Matrix]
description: Solution to the Missing range problem of leetcode
---

### Problem Description
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.




***Example 1:***
```
Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
```


### Approach
1. If the input vector `nums` is empty, return a single range from `lower` to `upper`.
2. Initialize an empty vector `ans` to store the missing ranges.
3. Check if the first element of `nums` is greater than `lower`. If so, add a range from `lower` to `nums.front() - 1` to `ans`.
4. Iterate through the rest of the elements in `nums`. Whenever there's a gap between adjacent elements (i.e., `nums[i] > nums[i - 1] + 1`), add the range from `nums[i - 1] + 1` to `nums[i] - 1` to `ans`.
5. Finally, if the last element of `nums` is less than `upper`, add a range from `nums.back() + 1` to `upper` to `ans`.

The `getRange` function constructs a string representation of a range given its lower and upper bounds. If the bounds are equal, it returns a single value; otherwise, it returns a range in the format "lo->hi".



### Code Implementation

### C++

```cpp
class Solution {
 public:
  vector<string> findMissingRanges(vector<int>& nums, int lower, int upper) {
    if (nums.empty())
      return {getRange(lower, upper)};

    vector<string> ans;

    if (nums.front() > lower)
      ans.push_back(getRange(lower, nums.front() - 1));

    for (int i = 1; i < nums.size(); ++i)
      if (nums[i] > nums[i - 1] + 1)
        ans.push_back(getRange(nums[i - 1] + 1, nums[i] - 1));

    if (nums.back() < upper)
      ans.push_back(getRange(nums.back() + 1, upper));

    return ans;
  }

 private:
  string getRange(int lo, int hi) {
    if (lo == hi)
      return to_string(lo);
    return to_string(lo) + "->" + to_string(hi);
  }
};
```

### Python

```python
class Solution:
  def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
    def getRange(lo: int, hi: int) -> str:
      if lo == hi:
        return str(lo)
      return str(lo) + '->' + str(hi)

    if not nums:
      return [getRange(lower, upper)]

    ans = []

    if nums[0] > lower:
      ans.append(getRange(lower, nums[0] - 1))

    for prev, curr in zip(nums, nums[1:]):
      if curr > prev + 1:
        ans.append(getRange(prev + 1, curr - 1))

    if nums[-1] < upper:
      ans.append(getRange(nums[-1] + 1, upper))

    return ans
```



### Java

```Java
class Solution {
  public List<String> findMissingRanges(int[] nums, int lower, int upper) {
    if (nums.length == 0)
      return new ArrayList<>(Arrays.asList(getRange(lower, upper)));

    List<String> ans = new ArrayList<>();

    if (nums[0] > lower)
      ans.add(getRange(lower, nums[0] - 1));

    for (int i = 1; i < nums.length; ++i)
      if (nums[i] > nums[i - 1] + 1)
        ans.add(getRange(nums[i - 1] + 1, nums[i] - 1));

    if (nums[nums.length - 1] < upper)
      ans.add(getRange(nums[nums.length - 1] + 1, upper));

    return ans;
  }

  private String getRange(int lo, int hi) {
    if (lo == hi)
      return String.valueOf(lo);
    return lo + "->" + hi;
  }
}
```

### Complexity 
- time complexity : $O(n)$
- Space complexity : $O(n)$