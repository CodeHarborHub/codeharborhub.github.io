---
id: restore-ip-addresses
title: Restore IP Addresses
difficulty: Medium
sidebar_label: 0093-Restore-IP-Addresses
tags:
  - String
  - Backtracking
  - LeetCode Medium
---

## Problem Description
Given a string `s` containing only digits, return all possible valid IP addresses that can be obtained from `s`. You can return them in any order.

A valid IP address consists of exactly four integers, each integer is between `0` and `255`, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

### Example
**Example 1:**
```plaintext
Input: s = "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
```
**Example 2:**
```plaintext
Input: s = "0000"
Output: ["0.0.0.0"]
```
**Example 3:**
```plaintext
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

### Constraints
- `1 <= s.length <= 20`
- `s` consists of digits only.

## Approach

# Restoring Valid IP Addresses

This solution defines a class `Solution` containing a method `restoreIpAddresses` which generates all possible valid IP addresses from the given string `s` using backtracking.

## Implementation Steps

### Step 1: Define the `Solution` Class

Define a class `Solution` containing a method `restoreIpAddresses` which takes a string `s` as input and returns a list of strings.

### Step 2: Initialize Result List

Initialize an empty list called `result` to store the valid IP addresses.

### Step 3: Define the Backtracking Function

Define a function called `backtrack` which takes three parameters: `start` (the current index in `s`), `path` (the current segments of the IP address being generated), and `dots` (the number of dots used so far).

### Step 4: Base Case Check

Check if `dots` equals 4 and `start` equals the length of `s`. If so, append the `path` to the `result`.

### Step 5: Loop Through the Possible Segments

Loop through each possible segment length (1 to 3):
  - Check if the current segment is valid (length is 1 or the first digit is not '0' and the segment value is less than or equal to 255).
  - If valid, recursively call the `backtrack` function with the next index, updated path, and incremented dots.

### Step 6: Call the Backtrack Function

Initially call the `backtrack` function with `start` set to 0, an empty `path`, and `dots` set to 0.

### Step 7: Return Result

Return the `result` list.

This algorithm generates all possible valid IP addresses by using backtracking to explore different segment lengths and ensuring that each segment is a valid integer between 0 and 255 without leading zeros.

## Code

### C++
```cpp
class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        vector<string> result;
        backtrack(s, 0, "", 0, result);
        return result;
    }

private:
    void backtrack(const string& s, int start, string path, int dots, vector<string>& result) {
        if (dots == 4 && start == s.size()) {
            result.push_back(path.substr(0, path.size() - 1)); // Remove the last dot
            return;
        }
        if (dots > 4) return;

        for (int len = 1; len <= 3 && start + len <= s.size(); ++len) {
            string segment = s.substr(start, len);
            if ((segment.size() > 1 && segment[0] == '0') || stoi(segment) > 255) continue;
            backtrack(s, start + len, path + segment + ".", dots + 1, result);
        }
    }
};
```

### Python
```python
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        def backtrack(start, path, dots):
            if dots == 4 and start == len(s):
                result.append(path[:-1])  # Remove the last dot
                return
            if dots > 4:
                return
            
            for length in range(1, 4):
                if start + length > len(s):
                    break
                segment = s[start:start + length]
                if (length > 1 and segment[0] == '0') or int(segment) > 255:
                    continue
                backtrack(start + length, path + segment + ".", dots + 1)
        
        result = []
        backtrack(0, "", 0)
        return result
```

### Java
```java
class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<>();
        backtrack(s, 0, "", 0, result);
        return result;
    }

    private void backtrack(String s, int start, String path, int dots, List<String> result) {
        if (dots == 4 && start == s.length()) {
            result.add(path.substring(0, path.length() - 1)); // Remove the last dot
            return;
        }
        if (dots > 4) return;

        for (int len = 1; len <= 3 && start + len <= s.length(); ++len) {
            String segment = s.substring(start, start + len);
            if ((segment.length() > 1 && segment.startsWith("0")) || Integer.parseInt(segment) > 255) continue;
            backtrack(s, start + len, path + segment + ".", dots + 1, result);
        }
    }
}
```

## Complexity
- Time complexity: `O(3^4 * n)` where `n` is the length of the string `s`.
- Space complexity: `O(n)`

This solution generates all possible valid IP addresses from a given string `s` by using backtracking to explore different segment lengths and ensuring that each segment is a valid integer between 0 and 255 without leading zeros. The complexity is driven by the number of segments and the length of the string.