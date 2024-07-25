---
id: minimum-consecutive-cards-to-pick-up
title:   Minimum Consecutive Cards to Pick Up
sidebar_label: 2260. Minimum Consecutive Cards to Pick Up
tags:
- Array
- Hash Table
- Sliding Window
description: "This is a solution to the 2260. Minimum Consecutive Cards to Pick Up problem on LeetCode."
---

## Problem Description
You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

 

### Examples

**Example 1:**

```
Input: cards = [3,4,2,3,4,7]
Output: 4
Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.
```

**Example 2:**
```
Input: cards = [1,0,5,3]
Output: -1
Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.
```

### Constraints

- `1 <= cards.length <= 10^5`

## Solution for 2260. Minimum Consecutive Cards to Pick Up Substring
### Approach 
1. **Initialize Variables**:
    - `ans` to store the minimum length of the subarray. Initially set to infinity (`INT_MAX` or `float('inf')`).
    - `mp` to store the most recent index of each card value encountered.

2. **Iterate Through the Cards**:
    - For each card in the array `cards`, check if the card value is already in the map `mp`.
    - If it is, calculate the length of the subarray from the previous occurrence to the current index. Update `ans` with the minimum value between the current `ans` and the calculated length.
    - Update the map `mp` with the current index of the card.

3. **Return the Result**:
    - After iterating through the cards, check if `ans` is still infinity. If it is, return -1, indicating no such pair exists.
    - Otherwise, return `ans`.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      class Solution {
    function minimumCardPickup(cards) {
        let ans = Infinity;
        let mp = new Map();
        for (let i = 0; i < cards.length; i++) {
            if (mp.has(cards[i])) {
                let len = i - mp.get(cards[i]) + 1;
                ans = Math.min(ans, len);
            }
            mp.set(cards[i], i);
        }
        return ans === Infinity ? -1 : ans;
    }
}

      const input =[3,4,2,3,4,7]

      const output = minimumCardPickup(input)
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

    - Time Complexity: $ O(nlogn) $ 
    - Space Complexity: $ O(n) $ 

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
  class Solution {
    minimumCardPickup(cards) {
        let ans = Infinity;
        let mp = new Map();
        for (let i = 0; i < cards.length; i++) {
            if (mp.has(cards[i])) {
                let len = i - mp.get(cards[i]) + 1;
                ans = Math.min(ans, len);
            }
            mp.set(cards[i], i);
        }
        return ans === Infinity ? -1 : ans;
    }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
 class Solution {
    minimumCardPickup(cards: number[]): number {
        let ans = Infinity;
        let mp = new Map<number, number>();
        for (let i = 0; i < cards.length; i++) {
            if (mp.has(cards[i])) {
                let len = i - mp.get(cards[i])! + 1;
                ans = Math.min(ans, len);
            }
            mp.set(cards[i], i);
        }
        return ans === Infinity ? -1 : ans;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        ans = float('inf')
        mp = {}
        for i, card in enumerate(cards):
            if card in mp:
                len_ = i - mp[card] + 1
                ans = min(ans, len_)
            mp[card] = i
        
        return -1 if ans == float('inf') else ans

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
  import java.util.HashMap;
import java.util.Map;

class Solution {
    public int minimumCardPickup(int[] cards) {
        int ans = Integer.MAX_VALUE;
        Map<Integer, Integer> mp = new HashMap<>();
        for (int i = 0; i < cards.length; i++) {
            if (mp.containsKey(cards[i])) {
                int len = i - mp.get(cards[i]) + 1;
                ans = Math.min(ans, len);
            }
            mp.put(cards[i], i);
        }
        
        return ans == Integer.MAX_VALUE ? -1 : ans;
    }
}


    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
  class Solution {
public:
    int minimumCardPickup(vector<int>& cards) {
        int ans=INT_MAX;
        map<int,int>mp;
        for(int i=0;i<cards.size();i++)
        {
            if(mp.find(cards[i])!=mp.end())
            {
                int len =  i-mp[cards[i]]+1;
                ans=min(ans , len);
            }
            mp[cards[i]]=i;
        }

        if(ans==INT_MAX)
        {
            return -1;
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

- **LeetCode Problem**: [Minimum Consecutive Cards to Pick Up](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/description/)


