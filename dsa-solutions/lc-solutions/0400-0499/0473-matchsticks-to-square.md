---
id: matchsticks-to-square
title: Matchsticks to Square
sidebar_label: 0473 - Matchsticks to Square
tags:
- Recursion
- Backtracking
- Dynamic Programming
description: "This is a solution to the Matchsticks to Square problem on LeetCode."
---

## Problem Description

You are given an integer array `matchsticks` where `matchsticks[i]` is the length of the `ith` matchstick. You want to use **all the matchsticks** to make one square. You **should not break** any stick, but you can link them up, and each matchstick must be used **exactly one time**.

Return `true` if you can make this square and `false` otherwise.

### Examples

**Example 1:**
![image](https://assets.leetcode.com/uploads/2021/04/09/matchsticks1-grid.jpg)
```
Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
```

**Example 2:**

```
Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
```

### Constraints

- $1 \leq matchsticks.length \leq 15$
- $1 \leq matchsticks[i] \leq 10^8$

## Solution for Matchsticks to Square

### Overview

Suppose we have `1,1,1,1,2,2,2,2,3,3,3,3` as our set of matchsticks. In this case a square of side 6 can be formed and we have 4 matchsticks each of 1, 2 and 3 and so we can have each square side formed by `3 + 2 + 1 = 6`.

![image](https://assets.leetcode.com/static_assets/media/original_images/473/473_Matchsticks-In-Square-Diag-1.png)

We can clearly see in the diagram above that the 3 matchsticks of sizes `1`, `2` and `3` combine to give one side of our resulting square.

This problem boils down to splitting an array of integers into 4 subsets where all of these subsets are:
- mutually exclusive i.e. no specific element of the array is shared by any two of these subsets, and
- have the same sum which is equal to the side of our square.

We know that we will have 4 different subsets. The sum of elements of these subsets would be $$\frac{1}{4} \sum \text{arr}$$. If the sum if not divisible by 4, that implies that 4 subsets of equal value are not possible and we don't need to do any further processing on this.

The only question that remains now for us to solve is:
> what subset a particular element belongs to?

If we are able to figure that out, then there's nothing else left to do. But, since we can't say which of the 4 subsets would contain a particular element, we try out all the options.

### Approach 1: Depth First Search

#### Intuition
It is possible that a matchstick **can** be a part of any of the 4 sides of the resulting square, but which one of these choices leads to an actual square is something we don't know.

This means that for every matchstick in our given array, we have 4 different options each representing the side of the square or subset that this matchstick can be a part of.

We try out all of them and keep on doing this recursively until we exhaust all of the possibilities or until we find an arrangement of our matchsticks such that they form the square.

**Algorithm**
1. As discussed previously, we will follow a recursive, depth first approach to solve this problem. So, we have a function that takes the current matchstick index we are to process and also the number of sides of the square that are completely formed till now.

2. If all of the matchsticks have been used up and 4 sides have been completely formed, that implies our square is completely formed. This is the base case for the recursion.

3. For the current matchstick we have 4 different options. This matchstick at index can be a part of any of the sides of the square. We try out the 4 options by recursing on them.

    - If any of these recursive calls returns True, then we return from there, else we return False

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    std::vector<int> nums;
    int sums[4] = {0};
    int possibleSquareSide;

    // Depth First Search function.
    bool dfs(int index) {
        // If we have exhausted all our matchsticks, check if all sides of the square are of equal length
        if (index == nums.size()) {
            return sums[0] == sums[1] && sums[1] == sums[2] && sums[2] == sums[3];
        }

        // Get current matchstick.
        int element = nums[index];

        // Try adding it to each of the 4 sides (if possible)
        for (int i = 0; i < 4; i++) {
            if (sums[i] + element <= possibleSquareSide) {
                sums[i] += element;
                if (dfs(index + 1)) {
                    return true;
                }
                sums[i] -= element;
            }
        }

        return false;
    }

    bool makesquare(std::vector<int>& nums) {
        // Empty matchsticks.
        if (nums.empty()) {
            return false;
        }

        // Find the perimeter of the square (if at all possible)
        int L = nums.size();
        int perimeter = 0;
        for (int i = 0; i < L; i++) {
            perimeter += nums[i];
        }

        possibleSquareSide = perimeter / 4;
        if (possibleSquareSide * 4 != perimeter) {
            return false;
        }

        // Sort the matchsticks in descending order
        std::sort(nums.begin(), nums.end(), std::greater<int>());
        this->nums = nums;
        return dfs(0);
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
import java.util.HashMap;
import java.util.Collections;

class Solution {
    public List<Integer> nums;
    public int[] sums;
    public int possibleSquareSide;

    public Solution() {
        this.sums = new int[4];
    }

    // Depth First Search function.
    public boolean dfs(int index) {

        // If we have exhausted all our matchsticks, check if all sides of the square are of equal length
        if (index == this.nums.size()) {
            return sums[0] == sums[1] && sums[1] == sums[2] && sums[2] == sums[3];
        }

        // Get current matchstick.
        int element = this.nums.get(index);

        // Try adding it to each of the 4 sides (if possible)
        for(int i = 0; i < 4; i++) {
            if (this.sums[i] + element <= this.possibleSquareSide) {
                this.sums[i] += element;
                if (this.dfs(index + 1)) {
                    return true;
                }
                this.sums[i] -= element;
            }
        }

        return false;
    }

    public boolean makesquare(int[] nums) {
        // Empty matchsticks.
        if (nums == null || nums.length == 0) {
            return false;
        }

        // Find the perimeter of the square (if at all possible)
        int L = nums.length;
        int perimeter = 0;
        for(int i = 0; i < L; i++) {
            perimeter += nums[i];
        }

        this.possibleSquareSide =  perimeter / 4;
        if (this.possibleSquareSide * 4 != perimeter) {
            return false;
        }

        // Convert the array of primitive int to ArrayList (for sorting).
        this.nums = Arrays.stream(nums).boxed().collect(Collectors.toList());
        Collections.sort(this.nums, Collections.reverseOrder());
        return this.dfs(0);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
def makesquare(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """

    # If there are no matchsticks, then we can't form any square
    if not nums:
        return False

    # Number of matchsticks we have
    L = len(nums)

    # Perimeter of our square (if one can be formed)
    perimeter = sum(nums)

    # Possible side of our square.
    possible_side =  perimeter // 4

    # If the perimeter can be equally split into 4 parts (and hence 4 sides, then we move on).
    if possible_side * 4 != perimeter:
        return False

    # Reverse sort the matchsticks because we want to consider the biggest one first.
    nums.sort(reverse=True)

    # This array represents the 4 sides and their current lengths
    sums = [0 for _ in range(4)]

    # Our recursive dfs function.
    def dfs(index):

        # If we reach the end of matchsticks array, we check if the square was formed or not
        if index == L:
            # If 3 equal sides were formed, 4th will be the same as these three and answer should be True in that case.
            return sums[0] == sums[1] == sums[2] == possible_side

        # The current matchstick can belong to any of the 4 sides (provided their remaining lenghts are >= the size of the current matchstick)
        for i in range(4):
            # If this matchstick can fir in the space left for the current side
            if sums[i] + nums[index] <= possible_side:
                # Recurse
                sums[i] += nums[index]
                if dfs(index + 1):
                    return True
                # Revert the effects of recursion because we no longer need them for other recursions.
                sums[i] -= nums[index]
        return False        
    return dfs(0)
```
</TabItem>
</Tabs>

This solution is very slow as is. However, we can speed it up considerably by a small trick and that is to `sort our matchsticks sizes in reverse order before processing them recursively`.
The reason for this is that if there is no solution, trying a longer matchstick first will get to negative conclusion earlier.

e.g. [8,4,4,4]. In this case we can have a square of size 5 but the largest side 8 doesn't fit in anywhere i.e. cannot be a part of any of the sides (because we can't break matchsticks according to the question) and hence we can simply return Falsewithout even considering the remaining matchsticks.
## Complexity Analysis

### Time Complexity: $O(4^N)$

> **Reason**: because we have a total of N sticks and for each one of those matchsticks, we have 4 different possibilities for the subsets they might belong to or the side of the square they might be a part of.

### Space Complexity: $O(N)$

> **Reason**: For recursive solutions, the space complexity is the stack space occupied by all the recursive calls. The deepest recursive call here would be of size N and hence the space complexity is O(N). There is no additional space other than the recursion stack in this solution.

### Approach 2: Dynamic Programming

#### Intuition

In any dynamic programming problem, what's important is that our problem must be breakable into smaller subproblems and also, these subproblems show some sort of overlap which we can save upon by caching or memoization.
Suppose we have `3,3,4,4,5,5` as our matchsticks that have been used already to construct some of the sides of our square (**Note:** not all the sides may be completely constructed at all times.)
If the square side is 8, then there are many possibilities for how the sides can be constructed using the matchsticks above. We can have
```
(4, 4), (3, 5), (3, 5) -----------> 3 sides fully constructed.
(3, 4), (3, 5), (4), (5) ---------> 0 sides completely constructed.
(3, 3), (4, 4), (5), (5) ---------> 1 side completely constructed.
```
As we can see above, there are multiple ways to use the same set of matchsticks and land up in completely different recursion states.

This means that if we just keep track of what all matchsticks have been used and which all are remaining, it won't properly define the state of recursion we are in or what subproblem we are solving.

A single set of used matchsticks can represent multiple different unrelated subproblems and that is just not right.

We also need to keep track of number of sides of the square that have been **completely** formed till now.
Also, an important thing to note in the example we just considered was that if the matchsticks being used are [3,3,4,4,5,5] and the side of the square is 8, then we will always consider that arrangement that forms the most number of complete sides over that arrangement that leads to incomplete sides. Hence, the optimal arrangement here is (4,4),(3,5),(3,5) with 3 complete sides of the square.

Let us take a look at the following recursion tree to see if in-fact we can get overlapping subproblems.
![image](https://assets.leetcode.com/static_assets/media/original_images/473/473_Matchsticks-In-Square-Diag-2.png)

**Note:** Not all subproblems have been shown in this figure. The thing we wanted to point out was overlapping subproblems.

We know that the overall sum of these matchsticks can be split equally into 4 halves. The only thing we don't know is if 4 **equal** halves can be carved out of the given set of matchsticks. For that also we need to keep track of the number of sides completely formed at any point in time. **If we end up forming 4 equal sides successfully then naturally we would have used up all of the matchsticks each being used exactly once and we would have formed a square.**

### Algorithm

Let us first look at the pseudo-code for this problem before looking at the exact implementation details for the same.
```
let square_side = sum(matchsticks) / 4
func recurse(matchsticks_used, sides_formed) {
    if sides_formed == 4, then {
        Square Formed!!
    }
    for match in matchsticks available, do {
          add match to matchsticks_used
          let result = recurse(matchsticks_used, sides_formed)
          if result == True, then {
              return True
          }
          remove match from matchsticks_used
    }
    return False
}
```
This is the overall structure of our dynamic programming solution. Of course, a lot of implementation details are missing here that we will address now.

It is very clear from the pseudo-code above that the state of a recursion is defined by two variables `matchsticks_used` and `sides_formed`. Hence, these are the two variables that will be used to **memoize** or cache the results for that specific subproblem.

The question however is how do we actually store all the matchsticks that have been used? We want a memory efficient solution for this.

If we look at the question's constraints, we find that the max number of matchsticks we can have are 15. That's a pretty small number and we can make use of this constraint.

All we need to store is which of the matchsticks from the original list have been used. `We can use a Bit-Map for this`

We will use N number of bits, one for each of the matchsticks (N is at max 15 according to the question's constraints). Initially we will start with a bit mask of `all 1s` and then as we keep on using the matchsticks, we will keep on setting their corresponding bits to `0`.

This way, we just have to hash an integer value which represents our bit-map and the max value for this mask would be $2^{15}$.

**Do we really need to see if all 4 sides have been completely formed ?**

Another implementation trick that helps optimize this solution is that we don't really need to see if 4 sides have been completely formed.

This is because, we already know that the sum of all the matchsticks is divisible by 4. So, if 3 equal sides have been formed by using some of the matchsticks, then the remaining matchsticks would definitely form the remaining side of our square.

Hence, we only need to check if 3 sides of our square can be formed or not.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <unordered_map>
#include <utility>
#include <numeric> // For std::accumulate
#include <algorithm> // For std::sort

// Custom hash function for std::pair<int, int>
struct pair_hash {
    template <class T1, class T2>
    std::size_t operator()(const std::pair<T1, T2>& p) const {
        auto hash1 = std::hash<T1>{}(p.first);
        auto hash2 = std::hash<T2>{}(p.second);
        return hash1 ^ hash2;
    }
};

class Solution {
public:
    // The memoization cache to be used during recursion.
    std::unordered_map<std::pair<int, int>, bool, pair_hash> memo;

    // Array containing our matchsticks.
    std::vector<int> nums;

    // Possible side of our square depending on the total sum of all the matchsticks.
    int possibleSquareSide;

    // Default constructor to initialize our memo cache.
    Solution() : possibleSquareSide(0) {}

    // Main DP function.
    bool recurse(int mask, int sidesDone) {
        int total = 0;
        int L = nums.size();

        // The memo key for this recursion
        std::pair<int, int> memoKey = std::make_pair(mask, sidesDone);

        // Find out the sum of matchsticks used till now.
        for (int i = L - 1; i >= 0; i--) {
            if ((mask & (1 << i)) == 0) {
                total += nums[L - 1 - i];
            }
        }

        // If the sum is divisible by our square's side, then we increment our number of complete sides formed variable.
        if (total > 0 && total % possibleSquareSide == 0) {
            sidesDone++;
        }

        // Base case.
        if (sidesDone == 3) {
            return true;
        }

        // Return precomputed results
        if (memo.find(memoKey) != memo.end()) {
            return memo[memoKey];
        }

        bool ans = false;
        int c = total / possibleSquareSide;

        // Remaining length in the current partially formed side.
        int rem = possibleSquareSide * (c + 1) - total;

        // Try out all remaining options (that are valid)
        for (int i = L - 1; i >= 0; i--) {
            if (nums[L - 1 - i] <= rem && (mask & (1 << i)) > 0) {
                if (recurse(mask ^ (1 << i), sidesDone)) {
                    ans = true;
                    break;
                }
            }
        }

        // Cache the computed results.
        memo[memoKey] = ans;
        return ans;
    }

    bool makesquare(std::vector<int>& matchsticks) {
        // Empty matchsticks.
        if (matchsticks.empty()) {
            return false;
        }

        // Find the perimeter of the square (if at all possible)
        int L = matchsticks.size();
        int perimeter = std::accumulate(matchsticks.begin(), matchsticks.end(), 0);

        possibleSquareSide = perimeter / 4;
        if (possibleSquareSide * 4 != perimeter) {
            return false;
        }

        nums = matchsticks;
        std::sort(nums.rbegin(), nums.rend()); // Sort in descending order

        return recurse((1 << L) - 1, 0);
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
import java.util.HashMap;

class Solution {

    // The memoization cache to be used during recursion.
    public HashMap<Pair<Integer, Integer>, Boolean> memo;

    // Array containing our matchsticks.
    public int[] nums;

    // Possible side of our square depending on the total sum of all the matchsticks. 
    public int possibleSquareSide;

    // Default constructor to initialise our memo cache.
    public Solution() {
        this.memo = new HashMap<Pair<Integer, Integer>, Boolean>();
    }

    // Main DP function.
    public boolean recurse(Integer mask, Integer sidesDone) {
        int total = 0;
        int L = this.nums.length;

        // The memo key for this recursion
        Pair<Integer, Integer> memoKey = new Pair(mask, sidesDone);

        // Find out the sum of matchsticks used till now.
        for(int i = L - 1; i >= 0; i--) {
            if ((mask&(1 << i)) == 0) {
                total += this.nums[L - 1 - i];
            }
        }

        // If the sum if divisible by our square's side, then we increment our number of complete sides formed variable.
        if (total > 0 && total % this.possibleSquareSide == 0) {
            sidesDone++;
        }

        // Base case.
        if (sidesDone == 3) {
            return true;
        }


        // Return precomputed results
        if (this.memo.containsKey(memoKey)) {
            return this.memo.get(memoKey);
        }

        boolean ans = false;
        int c = total / this.possibleSquareSide;

        // Remaining vlength in the current partially formed side.
        int rem = this.possibleSquareSide * (c + 1) - total;

        // Try out all remaining options (that are valid)
        for(int i = L - 1; i >= 0; i--) {
            if (this.nums[L - 1 - i] <= rem && (mask&(1 << i)) > 0) {
                if (this.recurse(mask ^ (1 << i), sidesDone)) {
                    ans = true;
                    break;
                }
            }
        }

        // Cache the computed results.
        this.memo.put(memoKey, ans);
        return ans;
    }

    public boolean makesquare(int[] nums) {

        // Empty matchsticks.
        if (nums == null || nums.length == 0) {
            return false;
        }

        // Find the perimeter of the square (if at all possible)
        int L = nums.length;
        int perimeter = 0;
        for(int i = 0; i < L; i++) {
            perimeter += nums[i];
        }

        int possibleSquareSide =  perimeter / 4;
        if (possibleSquareSide * 4 != perimeter) {
            return false;
        }

        this.nums = nums;
        this.possibleSquareSide = possibleSquareSide;
        return this.recurse((1 << L) - 1, 0);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
def makesquare(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """

    # If there are no matchsticks, then we can't form any square.
    if not nums:
        return False

    # Number of matchsticks
    L = len(nums)

    # Possible perimeter of our square
    perimeter = sum(nums)

    # Possible side of our square from the given matchsticks
    possible_side =  perimeter // 4

    # If the perimeter isn't equally divisible among 4 sides, return False.
    if possible_side * 4 != perimeter:
        return False

    # Memoization cache for the dynamic programming solution.
    memo = {}

    # mask and the sides_done define the state of our recursion.
    def recurse(mask, sides_done):

        # This will calculate the total sum of matchsticks used till now using the bits of the mask.
        total = 0
        for i in range(L - 1, -1, -1):
            if not (mask & (1 << i)):
                total += nums[L - 1 - i]

        # If some of the matchsticks have been used and the sum is divisible by our square's side, then we increment the number of sides completed.
        if total > 0 and total % possible_side == 0:
            sides_done += 1

        # If we were successfully able to form 3 sides, return True
        if sides_done == 3:
            return True

        # If this recursion state has already been calculated, just return the stored value.
        if (mask, sides_done) in memo:
            return memo[(mask, sides_done)]

        # Common variable to store answer from all possible further recursions from this step.
        ans = False

        # rem stores available space in the current side (incomplete).
        c = int(total / possible_side)
        rem = possible_side * (c + 1) - total

        # Iterate over all the matchsticks
        for i in range(L - 1, -1, -1):

            # If the current one can fit in the remaining space of the side and it hasn't already been taken, then try it out
            if nums[L - 1 - i] <= rem and mask&(1 << i):

                # If the recursion after considering this matchstick gives a True result, just break. No need to look any further.
                # mask ^ (1 << i) makes the i^th from the right, 0 making it unavailable in future recursions.
                if recurse(mask ^ (1 << i), sides_done):
                    ans = True
                    break
        # cache the result for the current recursion state.            
        memo[(mask, sides_done)] = ans
        return ans

    # recurse with the initial mask with all matchsticks available.
    return recurse((1 << L) - 1, 0)
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N×2^N)$

> **Reason**:  At max $2^N$ unique bit masks are possible and during every recursive call, we iterate our original matchsticks array to sum up the values of matchsticks used to update the `sides_formed` variable.
### Space Complexity: $O(N+2^N)$

> **Reason**:  because N is the stack space taken up by recursion and $4×2^N= O(2^N)$ is the max possible size of our cache for memoization.

## References

- **LeetCode Problem**: [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/description/)

- **Solution Link**: [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>