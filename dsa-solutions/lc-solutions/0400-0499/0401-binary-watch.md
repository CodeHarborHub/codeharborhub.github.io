---
id: binary-watch
title: Binary Watch
sidebar_label: 401-Binary Watch
tags:
  - Backtracking
  - Bit Manipulation
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Binary Watch problem on LeetCode."
sidebar_position: 3
---

## Problem Description

A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

Given an integer `turnedOn` which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.

For example, "01:00" is not valid. It should be "1:00".
The minute must consist of two digits and may contain a leading zero.

For example, "10:2" is not valid. It should be "10:02".

### Examples

**Example 1:**

```
Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
```

**Example 2:**

```
Input: turnedOn = 9
Output: []
```

### Constraints

- `0 <= turnedOn <= 10`

---

## Solution for Binary Watch Problem

### Approach: Bit Manipulation and Backtracking

The problem can be solved using bit manipulation and backtracking. We iterate through all possible hour and minute values, count the number of `1`s in their binary representations, and check if it matches the number of LEDs turned on.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
#include <string>
#include <bitset>

class Solution {
public:
    std::vector<std::string> readBinaryWatch(int turnedOn) {
        std::vector<std::string> times;
        for (int h = 0; h < 12; ++h) {
            for (int m = 0; m < 60; ++m) {
                if (std::bitset<10>((h << 6) + m).count() == turnedOn) {
                    times.push_back(std::to_string(h) + (m < 10 ? ":0" : ":") + std::to_string(m));
                }
            }
        }
        return times;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> readBinaryWatch(int turnedOn) {
        List<String> times = new ArrayList<>();
        for (int h = 0; h < 12; h++) {
            for (int m = 0; m < 60; m++) {
                if (Integer.bitCount((h << 6) + m) == turnedOn) {
                    times.add(String.format("%d:%02d", h, m));
                }
            }
        }
        return times;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        times = []
        for h in range(12):
            for m in range(60):
                if bin(h).count('1') + bin(m).count('1') == turnedOn:
                    times.append(f"{h}:{m:02d}")
        return times
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(1)$, since the number of possible combinations (12 hours * 60 minutes) is constant.
- **Space Complexity**: $O(1)$, not counting the space required for the output list.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>