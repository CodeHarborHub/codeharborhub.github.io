---
id: longest-happy-string
title: Longest Happy String
sidebar_label: 1405 - Longest Happy String
tags:
  - String
  - Greedy
  - Heap
description: "This is a solution to the Longest Happy String problem on LeetCode."
---

## Problem Description

A string s is called happy if it satisfies the following conditions:

- s only contains the letters `'a'`, `'b'`, and `'c'`.
- s does not contain any of `"aaa"`, `"bbb"`, or `"ccc"` as a substring.
- s contains at most `a` occurrences of the letter `'a'`.
- s contains at most `b` occurrences of the letter `'b'`.
- s contains at most `c` occurrences of the letter `'c'`.
Given three integers `a`, `b`, and `c`, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.

### Examples

**Example 1:**

```
Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
```
**Example 2:**
```
Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.
```
### Constraints

- `0 <= a, b, c <= 100`
- `a + b + c > 0`

## Solution for Longest Happy String

### Approach 

this is almost identical to `984. String Without AAA or BBB`. We just need to ignore the smallest count in each round. Aassuming `a >= b >= c`: always try to add `'aa'`. If `a - 2 >= b`, add `'b'` (if not, the next round will add 'bb'). Repeat recursivelly for the remaining counts.

In other words, we are greedily use two characters from the largest pile. We cusion these two characters with a character from the medium pile. For `[11,5,3]`, as an example, we first generate 'aabaabaab', and our piles become `[5,2,3]`. At this time, c becomes the medium pile, and we generate `'..aac'` `([3,2,2])`. After we add one more `'..aa'`, c becomes the largest pile and we pull two characters from it `'..cc' ``([1,2,0])`. We add the rest `'..bba'`, and the resulting string is `'aabaabaabaacaaccbba'`.

This algorithm can be esilly proved to be correct by a contradiction (and counter-examples).

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```cpp
string longestDiverseString(int a, int b, int c, char aa = 'a', char bb = 'b', char cc = 'c') {
    if (a < b)
        return longestDiverseString(b, a, c, bb, aa, cc);
    if (b < c)
        return longestDiverseString(a, c, b, aa, cc, bb);
    if (b == 0)
        return string(min(2, a), aa);
    auto use_a = min(2, a), use_b = a - use_a >= b ? 1 : 0; 
    return string(use_a, aa) +  string(use_b, bb) + 
		longestDiverseString(a - use_a, b - use_b, c, aa, bb, cc);
}
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
```java
String generate(int a, int b, int c, String aa, String bb, String cc) {
    if (a < b)
        return generate(b, a, c, bb, aa, cc);
    if (b < c)
        return generate(a, c, b, aa, cc, bb);
    if (b == 0)
        return aa.repeat(Math.min(2, a));
    int use_a = Math.min(2, a), use_b = a - use_a >= b ? 1 : 0; 
    return aa.repeat(use_a) + bb.repeat(use_b) +
        generate(a - use_a, b - use_b, c, aa, bb, cc);    
}
public String longestDiverseString(int a, int b, int c) {
    return generate(a, b, c, "a", "b", "c");
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```python
from collections import Counter
class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        result = [] # list of characters forming the happy string
        remaining = Counter({'a':a,'b':b,'c':c,}) # freq dict of remaining characters

        # In each loop we update remaining and recompute 
        (fence, _), (wedge, _) = remaining.most_common(2) # initial group
        while remaining[fence] > 0 and remaining[wedge] > 0: # loop till no new groups could be formed
            # add first fence
            result.append(fence)
            remaining[fence] -= 1

            # (Optional) add second fence, if it wouldn't form triplet with first fence and last wedge
            if len(result) >= 2 and result[-2] == fence:
                pass
            elif remaining[fence] > 0: # add second fence if any remaining
                result.append(fence)
                remaining[fence] -= 1

            # add wedge
            result.append(wedge)
            remaining[wedge] -= 1

            # recompute the fence and wedge char for next group
            (fence, _), (wedge, _) = remaining.most_common(2)

        # has remaining characters not consumed by loop, can append two maximum fences
        if remaining[fence] > 0:
            result.append(fence)
            remaining[fence] -= 1
            if remaining[fence] > 0:
                result.append(fence)

        return ''.join(result)
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(a+b+c)$

### Space Complexity: $O(a+b+c)$

## References

- **LeetCode Problem**: [Longest Happy String](https://leetcode.com/problems/longest-happy-string/description/)

- **Solution Link**: [Longest Happy String](https://leetcode.com/problems/longest-happy-string/solutions/)