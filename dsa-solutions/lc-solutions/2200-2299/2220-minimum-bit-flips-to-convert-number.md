---
id: minimum-bit-flips-to-convert-number
title: 2220. Minimum Bit Flips to Convert Number
sidebar_label:  2220. Minimum Bit Flips to Convert Number
tags:
- Bit Manipulation

description: "This is a solution to the 2220. Minimum Bit Flips to Convert Number."
---

## Problem Description
A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.

Given two integers start and goal, return the minimum number of bit flips to convert start to goal.

 ### Examples
**Example 1:**
```
Input: start = 10, goal = 7

Output: 3

Explanation:

The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -> 1011.
- Flip the third bit from the right: 1011 -> 1111.
- Flip the fourth bit from the right: 1111 -> 0111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
```

**Example 2:**
```
Input: start = 3, goal = 4

Output: 3

Explanation:

The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:
- Flip the first bit from the right: 011 -> 010.
- Flip the second bit from the right: 010 -> 000.
- Flip the third bit from the right: 000 -> 100.
It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.
```

### Constraints
- `0 <= start, goal <= 10^9`
## Solution for 2220. Minimum Bit Flips to Convert Number

The problem seems to involve finding the minimum number of bit flips required to transform one integer (start) into another integer (goal).

## Approach

The approach used in the provided code involves XORing the start and goal integers to find the positions where the bits differ. Then, the number of set bits in the result is counted to determine the minimum number of flips needed.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@nagalakshmi08"/>

```cpp
class Solution {
public:
    int minBitFlips(int start, int goal) {
        int res=start^goal; // XOR to find the differing bits
        int count=0;
        while(res){
            count+=res&1; // Count the set bits
            res>>=1; // Right shift to check next bit
        }
        return count;
    }
};
```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@nagalakshmi08"/>
```java
class Solution {
    public int minBitFlips(int start, int goal) {
        int res = start ^ goal; // XOR to find the differing bits
        int count = 0;
        while (res != 0) {
            count += res & 1; // Count the set bits
            res >>= 1; // Right shift to check the next bit
        }
        return count;
    }
}
```

</TabItem>

<TabItem value="Python" label="Python">
<SolutionAuthor name="@nagalakshmi08"/>

```python
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        res = start ^ goal  # XOR to find the differing bits
        count = 0
        while res:
            count += res & 1  # Count the set bits
            res >>= 1  # Right shift to check the next bit
        return count
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: The time complexity of this solution is $O(n)$, where n is the number of bits in the integers.
- **Space Complexity**: The space complexity is $O(1)$ because the algorithm only uses a constant amount of extra space.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['nagalakshmi08'].map(username => (
 <Author key={username} username={username} />
))}
</div>
