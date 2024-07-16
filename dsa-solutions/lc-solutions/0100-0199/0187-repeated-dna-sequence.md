---
id: repeated-dna-sequence
title: Repeated DNA Sequences
sidebar_label: 0187-Repeated DNA Sequences
tags:
- strings
description: "leetcode solution of problem 187"
---

## Problem Description
The DNA sequence is composed of a series of nucleotides abbreviated as `'A', 'C', 'G', and 'T'`.

For example, `"ACGAATTCCG"` is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the `10`-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.



### Examples

**Example 1:**
```
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

```

***Example:2***
```
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
```


#### Constraints
- `1 <= s.length <= 105`
- `s[i]` is either `'A', 'C', 'G', or 'T'`.


### Approach 

1. **Initialize Sets**: Use two hash sets—`seen` to track all 10-letter-long substrings encountered, and `ans` to store substrings that appear more than once.

2. **Iterate Through String**: Loop through the string, extracting each 10-letter-long substring.

3. **Check and Record**: For each substring, check if it is already in `seen`. If it is, add it to `ans`. Regardless, add the substring to `seen`.

4. **Return Results**: Convert the `ans` set to a vector and return it as the result.

### Solution

#### C++

```cpp
class Solution {
 public:
  vector<string> findRepeatedDnaSequences(string s) {
    unordered_set<string> ans;
    unordered_set<string_view> seen;
    const string_view sv(s);

    for (int i = 0; i + 10 <= s.length(); ++i) {
      if (seen.count(sv.substr(i, 10)))
        ans.insert(s.substr(i, 10));
      seen.insert(sv.substr(i, 10));
    }

    return {ans.begin(), ans.end()};
  }
};
```

#### PYthon
```python
class Solution:
  def findRepeatedDnaSequences(self, s: str) -> List[str]:
    ans = set()
    seen = set()

    for i in range(len(s) - 9):
      seq = s[i:i + 10]
      if seq in seen:
        ans.add(seq)
      seen.add(seq)

    return list(ans)
```

#### Java
```Java
class Solution {
  public List<String> findRepeatedDnaSequences(String s) {
    Set<String> ans = new HashSet<>();
    Set<String> seen = new HashSet<>();

    for (int i = 0; i + 10 <= s.length(); ++i) {
      final String seq = s.substring(i, i + 10);
      if (seen.contains(seq))
        ans.add(seq);
      seen.add(seq);
    }

    return new ArrayList<>(ans);
  }
}
```


### Complexity analysis
- Time Complexity: $𝑂(n)$
- Space Complexity: $O(n)$
