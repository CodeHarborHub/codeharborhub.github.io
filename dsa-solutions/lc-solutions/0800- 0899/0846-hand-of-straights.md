---
id: hand-of-straights
title: 846. Hand of Straights
sidebar_label: 846. Hand of Straights
tags:
- Array
- Hash Table
- Greedy
- Sorting

description: "This is a solution to the 846. Hand of Straights."
---

## Problem Description
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

 ### Examples
**Example 1:**
```
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3

Output: true

Explanation:
Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
```

**Example 2:**
```
Input: [1,2,3,4,5], groupSize = 4

Output: false

Explanation:
Alice's hand can not be rearranged into groups of 4.
```

### Constraints
- `1 <= hand.length <= 10^4`
- `0 <= hand[i] <= 10^9`
- `1 <= groupSize <= hand.length`
## Solution for 846. Hand of Straights

The problem is about arranging cards into groups of consecutive sequences. The key observation is that, to form valid groups, each smallest number in the group should lead to groupSize - 1 consecutive numbers following it. If we can always find such sequences starting from the smallest number, then it is possible to arrange the cards into the desired groups.

## Approach

1. **Sort the Cards**: The first step is to sort the cards. Sorting helps us to easily identify and form consecutive sequences.

2. **Find Successors**: For each number in the sorted array, if it hasn't already been used in a group (indicated by a value of -1), try to form a group starting with that number. Use a helper function findSuccessors to check if it is possible to form a valid group starting from the current number.

3. **Mark Used Cards**: Once a card is used in a group, mark it as `-1` to indicate it has been processed.

4. **Check Group Formation**: For each number, use the helper function to see if a group of groupSize consecutive numbers can be formed. If at any point, it is not possible to form such a group, return false.

5. **Completion Check**: If all numbers can be grouped correctly, return true.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@nagalakshmi08"/>

```cpp
class Solution {
public:
   bool findSuccessors(vector<int>& hand, int groupSize, int i, int n) {
        int next = hand[i] + 1;
        hand[i] = -1;  // Mark as used
        int count = 1;
        i += 1;
        while (i < n && count < groupSize) {
            if (hand[i] == next) {
                next = hand[i] + 1;
                hand[i] = -1;
                count++;
            }
            i++;
        }
        return count == groupSize;
    }

    bool isNStraightHand(vector<int>& hand, int groupSize) {
        int n = hand.size();
        if (n % groupSize != 0) return false;
        std::sort(hand.begin(), hand.end());
        for (int i = 0; i < n; i++) {
            if (hand[i] >= 0) {
                if (!findSuccessors(hand, groupSize, i, n)) return false;
            }
        }
        return true;
    }
};
```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@nagalakshmi08"/>
```java
class Solution {
    public boolean findsucessors(int[] hand, int groupSize, int i, int n) {
        int f = hand[i] + 1;
        hand[i] = -1;
        int count = 1;
        i += 1;
        while (i < n && count < groupSize) {
            if (hand[i] == f) {
                f = hand[i] + 1;
                hand[i] = -1;
                count++;
            }
            i++;
        }
        if (count != groupSize)
            return false;
        else
            return true;
    }

    public boolean isNStraightHand(int[] hand, int groupSize) {
        int n = hand.length;
        if (n % groupSize != 0)
            return false;
        Arrays.sort(hand);
        int i = 0;
        for (; i < n; i++) {
            if (hand[i] >= 0) {
                if (!findsucessors(hand, groupSize, i, n))
                    return false;
            }
        }
        return true;
    }
}
```

</TabItem>

<TabItem value="Python" label="Python">
<SolutionAuthor name="@nagalakshmi08"/>

```python
class Solution(object):
    def find_successors(self, hand, groupSize, i, n):
        next_val = hand[i] + 1
        hand[i] = -1  # Mark as used
        count = 1
        i += 1
        while i < n and count < groupSize:
            if hand[i] == next_val:
                next_val = hand[i] + 1
                hand[i] = -1
                count += 1
            i += 1
        return count == groupSize

    def isNStraightHand(self, hand, groupSize):
        n = len(hand)
        if n % groupSize != 0:
            return False
        hand.sort()
        for i in range(n):
            if hand[i] >= 0:
                if not self.find_successors(hand, groupSize, i, n):
                    return False
        return True
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: Sorting the array takes $(O(n \log n))$. The subsequent grouping operation in the worst case can take $(O(n \times groupSize))$, leading to an overall time complexity of $(O(n \log n + n \times groupSize))$.
- **Space Complexity**: IThe space complexity is $(O(1))$ for the in-place operations (aside from the input array).

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['nagalakshmi08'].map(username => (
 <Author key={username} username={username} />
))}
</div>
