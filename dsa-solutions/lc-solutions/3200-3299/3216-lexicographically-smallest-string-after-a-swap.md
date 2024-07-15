---
id: lexicographically-smallest-string-after-a-swap
title: 3216. Lexicographically Smallest String After a Swap
sidebar_label:  3216. Lexicographically Smallest String After a Swap
tags:
- String

description: "This is a solution to the 3216. Lexicographically Smallest String After a Swap problem on LeetCode."
---

## Problem Description
Given a string s containing only digits, return the 
lexicographically smallest string
 that can be obtained after swapping adjacent digits in s with the same parity at most once.

Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.
 ### Examples
**Example 1:**
```
Input: s = "45320"

Output: "43520"

Explanation:

s[1] == '5' and s[2] == '3' both have the same parity, and swapping them results in the lexicographically smallest string.
```

### Constraints
- `1 <= s.length <= 10^5`
## Solution for  3216. Lexicographically Smallest String After a Swap

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
    var getSmallestString = function(s) {
    let ans = s;
    let charArray = s.split('');

    for (let i = 0; i < charArray.length - 1; i++) {
        let a = charArray[i].charCodeAt(0) - '0'.charCodeAt(0);
        let b = charArray[i + 1].charCodeAt(0) - '0'.charCodeAt(0);

        if ((a & 1) === (b & 1)) {
            swap(charArray, i, i + 1);
            let temp = charArray.join('');
            if (temp < ans) {
                ans = temp;
            }
            swap(charArray, i, i + 1);
        }
    }
    return ans;
};

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

      const input = "45320"
      const output = getSmallestString(input)
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

    - Time Complexity: $O(n) $ 
    - Space Complexity: $ O(1)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  class Solution:
    def getSmallestString(self, s: str) -> str:
        ans = s
        s = list(s)

        for i in range(len(s) - 1):
            a = int(s[i])
            b = int(s[i + 1])

            if (a & 1) == (b & 1):
                s[i], s[i + 1] = s[i + 1], s[i]
                temp = ''.join(s)
                if temp < ans:
                    ans = temp
                s[i], s[i + 1] = s[i + 1], s[i]

        return ans

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
public class Solution {
    public String getSmallestString(String s) {
        String ans = s;
        char[] charArray = s.toCharArray();

        for (int i = 0; i < charArray.length - 1; i++) {
            int a = charArray[i] - '0';
            int b = charArray[i + 1] - '0';

            if ((a & 1) == (b & 1)) {
                swap(charArray, i, i + 1);
                String temp = new String(charArray);
                if (temp.compareTo(ans) < 0) {
                    ans = temp;
                }
                swap(charArray, i, i + 1);
            }
        }
        return ans;
    }

    private void swap(char[] array, int i, int j) {
        char temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
public:
    string getSmallestString(string s) {
        string ans = s;
        for (int i = 0; i < s.size() - 1; i++) {
            int a = s[i] - '0';
            int b = s[i + 1] - '0';

            if ((a & 1) == (b & 1)) {
                swap(s[i], s[i + 1]);
                if (s < ans) {
                    ans = s;
                }
                swap(s[i], s[i + 1]);
            }
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

- **LeetCode Problem**: [3216. Lexicographically Smallest String After a Swap](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/)

