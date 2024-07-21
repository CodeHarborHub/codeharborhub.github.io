---
id: strong-password-checker
title: Strong Password Checker
sidebar_label: 0420 - Strong Password Checker
tags:
  - Greedy
  - Dynamic Programming
  - Heap
description: "This is a solution to the Strong Password Checker problem on LeetCode."
---

## Problem Description

A password is considered strong if the below conditions are all met:

- It has at least 6 characters and at most 20 characters.
- It contains at least **one lowercase letter**, at least **one uppercase** letter, and at least **one digit**.
- It does not contain three repeating characters in a row (i.e., `"Baaabb0"` is weak, but `"Baaba0"` is strong).

Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.

In one step, you can:

- Insert one character to password,
- Delete one character from password, or
- Replace one character of password with another character.

### Examples

**Example 1:**

```
Input: password = "a"
Output: 5
Explanation: The password needs additional characters, an uppercase letter, and a digit to meet the criteria.
```

**Example 2:**

```
Input: password = "aA1"
Output: 3
Explanation: The password needs more characters to reach the minimum length of 6.
```

### Constraints

- `1 <= password.length <= 50`
- `password` consists of letters, digits, dot `'.'` or exclamation mark `'!'`.

## Solution for Strong Password Checker

### Approach

- A strong password should contain at least one lowercase letter, one uppercase letter, and one number.
- It should avoid having the same character repeated three times consecutively and be between 6 and 20 characters long.

The code achieves this by following these steps:

1. Utilizes a “requirements” checklist to keep track of the first three criteria (initially unchecked).
2. Maintains a record of character repetitions.
3. Examines each character in the text:
    - If different from the previous character, checks off requirements if not met.
    - If the same as the previous character, counts consecutive repetitions.
4. Sorts the repeated characters list by the number of repetitions.
5. Adjusts the text:
    - For text longer than 20 characters, removes one repeated character in sequences of three or more.
    - For texts without such sequences, removes one character from the repeated character list.
    - Continues until the text is 20 characters or less.
6. Calculates the number of characters needed to make the text at least 6 characters long (if it’s shorter).
7. Totals all the changes made to meet the rules, providing the minimum number of changes required to create a strong password.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int strongPasswordChecker(string s) {
        bitset<3> requirements{111}; 
        list<int> repeats;
        auto it = s.begin();
        auto it2 = s.end();
        while (it != s.end()) {
            if (*it != *it2) {
                if (requirements.test(0) && islower(*it))
                    requirements.reset(0);
                if (requirements.test(1) && isupper(*it))
                    requirements.reset(1);
                if (requirements.test(2) && isdigit(*it))
                    requirements.reset(2);
            } else {
                while (it != s.end() && *it == *it2)
                    ++it;
                if (distance(it2, it) != 2)
                    repeats.push_back(distance(it2, it));
                if (it != s.end())
                    continue;
                else
                    break;
            }
            it2 = it;
            ++it;
        }
        repeats.sort([](const int &lhs, const int &rhs) { return (lhs % 3) < (rhs % 3); });
        int ans{0}, len{static_cast<int>(s.size())};
        while (len > 20) {
            if (!repeats.empty()) {
                if (repeats.front() == 3) {
                    repeats.pop_front();
                }
                else {
                    --repeats.front();
                    repeats.sort([](const int &lhs, const int &rhs) { return (lhs % 3) < (rhs % 3); });
                }
                ++ans;
                --len;
            }
            else {
                ans += len - 20;
                len = 20;
            }
        }
        int rep_ins{0};
        while (!repeats.empty()) {
            rep_ins += repeats.front() / 3;
            repeats.pop_front();
        }
        if ((len + rep_ins) < 6) {
            rep_ins += 6 - len - rep_ins;
        }
        ans += max(static_cast<int>(requirements.count()), rep_ins);
        return ans;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int strongPasswordChecker(String s) {
        int res = 0, a = 1, A = 1, d = 1;
        char[] carr = s.toCharArray();
        int[] arr = new int[carr.length];
        for (int i = 0; i < arr.length;) {
            if (Character.isLowerCase(carr[i])) a = 0;
            if (Character.isUpperCase(carr[i])) A = 0;
            if (Character.isDigit(carr[i])) d = 0;
            int j = i;
            while (i < carr.length && carr[i] == carr[j]) i++;
            arr[j] = i - j;
        }

        int total_missing = (a + A + d);
        if (arr.length < 6) {
            res += total_missing + Math.max(0, 6 - (arr.length + total_missing));
        } else {
            int over_len = Math.max(arr.length - 20, 0), left_over = 0;
            res += over_len;
            for (int k = 1; k < 3; k++) {
                for (int i = 0; i < arr.length && over_len > 0; i++) {
                    if (arr[i] < 3 || arr[i] % 3 != (k - 1)) continue;
                    arr[i] -= Math.min(over_len, k);
                    over_len -= k;
                }
            }
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] >= 3 && over_len > 0) {
                    int need = arr[i] - 2;
                    arr[i] -= over_len;
                    over_len -= need;
                }
                if (arr[i] >= 3) left_over += arr[i] / 3;
            }
            res += Math.max(total_missing, left_over);
        }
        return res;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def strongPasswordChecker(self, s):
        missing_type = 3
        if any('a' <= c <= 'z' for c in s): missing_type -= 1
        if any('A' <= c <= 'Z' for c in s): missing_type -= 1
        if any(c.isdigit() for c in s): missing_type -= 1
        
        change = 0
        one = 0
        two = 0
        p = 2
        while p < len(s):
            if s[p] == s[p-1] == s[p-2]:
                length = 2
                while p < len(s) and s[p] == s[p-1]:
                    length += 1
                    p += 1
                change += length // 3
                if length % 3 == 0: one += 1
                elif length % 3 == 1: two += 1
            else:
                p += 1
        
        if len(s) < 6:
            return max(missing_type, 6 - len(s))
        elif len(s) <= 20:
            return max(missing_type, change)
        else:
            delete = len(s) - 20
            change -= min(delete, one)
            change -= min(max(delete - one, 0), two * 2) // 2
            change -= max(delete - one - 2 * two, 0) // 3
            return delete + max(missing_type, change)

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**: The code iterates through the input string once and performs various operations such as checking character types, counting repeated characters, and maintaining a list of repeats.

### Space Complexity: $O(N)$

> **Reason**: The space complexity is linear because the size of the repeats list is proportional to the length of the input 

## References

- **LeetCode Problem**: [Strong Password Checker](https://leetcode.com/problems/strong-password-checker/description/)

- **Solution Link**: [Strong Password Checker](https://leetcode.com/problems/strong-password-checker/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>

