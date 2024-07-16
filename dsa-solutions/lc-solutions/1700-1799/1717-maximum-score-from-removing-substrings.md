---
id: maximum-score-from-removing-substrings
title: 1717. Maximum Score From Removing Substrings
sidebar_label:  1717. Maximum Score From Removing Substrings
tags:
- String 
- Stack

description: "This is a solution to the 1717. Maximum Score From Removing Substrings problem on LeetCode."
---

## Problem Description
You are given a string s and two integers x and y. You can perform two types of operations any number of times.

Remove substring "ab" and gain x points.
For example, when removing "ab" from "cabxbae" it becomes "cxbae".
Remove substring "ba" and gain y points.
For example, when removing "ba" from "cabxbae" it becomes "cabxe".
Return the maximum points you can gain after applying the above operations on s.
 ### Examples
**Example 1:**
```
Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
```

### Constraints
- `1 <= s.length <= 10^5`
- `1 <= x, y <= 10^4`
- `s consists of lowercase English letters.`
## Solution for 1717. Maximum Score From Removing Substrings

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
     var maximumGain = function(s, x, y) {
    let gt = x > y;
    let pts = 0;
    let st = [];
    
    if (gt) {
        let i = s.length - 1;
        // ab
        while (i >= 0) {
            if (st.length && s[i] === 'a') {
                if (st[st.length - 1] === 'b') {
                    st.pop();
                    pts += x;
                } else {
                    st.push(s[i]);
                }
            } else {
                st.push(s[i]);
            }
            i--;
        }

        let rem = '';
        while (st.length) {
            rem += st.pop();
        }

        let j = rem.length - 1;
        // ba
        while (j >= 0) {
            if (st.length && rem[j] === 'b') {
                if (st[st.length - 1] === 'a') {
                    st.pop();
                    pts += y;
                } else {
                    st.push(rem[j]);
                }
            } else {
                st.push(rem[j]);
            }
            j--;
        }
    } else {
        let i = s.length - 1;
        // ba
        while (i >= 0) {
            if (st.length && s[i] === 'b') {
                if (st[st.length - 1] === 'a') {
                    st.pop();
                    pts += y;
                } else {
                    st.push(s[i]);
                }
            } else {
                st.push(s[i]);
            }
            i--;
        }

        let rem = '';
        while (st.length) {
            rem += st.pop();
        }

        let j = rem.length - 1;
        // ab
        while (j >= 0) {
            if (st.length && rem[j] === 'a') {
                if (st[st.length - 1] === 'b') {
                    st.pop();
                    pts += x;
                } else {
                    st.push(rem[j]);
                }
            } else {
                st.push(rem[j]);
            }
            j--;
        }
    }

    return pts;
};


      const input = "cdbcbbaaabab", x = 4, y = 5
      const output = maximumGain(input ,x,y)
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

    - Time Complexity: $O(n^2) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        gt = x > y
        pts = 0
        
        if gt:
            st = []
            i = len(s) - 1
            # ab
            while i >= 0:
                if st and s[i] == 'a':
                    if st[-1] == 'b':
                        st.pop()
                        pts += x
                    else:
                        st.append(s[i])
                else:
                    st.append(s[i])
                i -= 1

            rem = []
            while st:
                rem.append(st.pop())

            j = len(rem) - 1
            # ba
            while j >= 0:
                if st and rem[j] == 'b':
                    if st[-1] == 'a':
                        st.pop()
                        pts += y
                    else:
                        st.append(rem[j])
                else:
                    st.append(rem[j])
                j -= 1

        else:
            st = []
            i = len(s) - 1
            # ba
            while i >= 0:
                if st and s[i] == 'b':
                    if st[-1] == 'a':
                        st.pop()
                        pts += y
                    else:
                        st.append(s[i])
                else:
                    st.append(s[i])
                i -= 1

            rem = []
            while st:
                rem.append(st.pop())

            j = len(rem) - 1
            # ab
            while j >= 0:
                if st and rem[j] == 'a':
                    if st[-1] == 'b':
                        st.pop()
                        pts += x
                    else:
                        st.append(rem[j])
                else:
                    st.append(rem[j])
                j -= 1

        return pts

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.Stack;

public class Solution {
    public int maximumGain(String s, int x, int y) {
        boolean gt = x > y;
        int pts = 0;
        Stack<Character> st = new Stack<>();
        
        if (gt) {
            int i = s.length() - 1;
            // ab
            while (i >= 0) {
                if (!st.isEmpty() && s.charAt(i) == 'a') {
                    if (st.peek() == 'b') {
                        st.pop();
                        pts += x;
                    } else {
                        st.push(s.charAt(i));
                    }
                } else {
                    st.push(s.charAt(i));
                }
                i--;
            }

            StringBuilder rem = new StringBuilder();
            while (!st.isEmpty()) {
                rem.append(st.pop());
            }

            int j = rem.length() - 1;
            // ba
            while (j >= 0) {
                if (!st.isEmpty() && rem.charAt(j) == 'b') {
                    if (st.peek() == 'a') {
                        st.pop();
                        pts += y;
                    } else {
                        st.push(rem.charAt(j));
                    }
                } else {
                    st.push(rem.charAt(j));
                }
                j--;
            }
        } else {
            int i = s.length() - 1;
            // ba
            while (i >= 0) {
                if (!st.isEmpty() && s.charAt(i) == 'b') {
                    if (st.peek() == 'a') {
                        st.pop();
                        pts += y;
                    } else {
                        st.push(s.charAt(i));
                    }
                } else {
                    st.push(s.charAt(i));
                }
                i--;
            }

            StringBuilder rem = new StringBuilder();
            while (!st.isEmpty()) {
                rem.append(st.pop());
            }

            int j = rem.length() - 1;
            // ab
            while (j >= 0) {
                if (!st.isEmpty() && rem.charAt(j) == 'a') {
                    if (st.peek() == 'b') {
                        st.pop();
                        pts += x;
                    } else {
                        st.push(rem.charAt(j));
                    }
                } else {
                    st.push(rem.charAt(j));
                }
                j--;
            }
        }

        return pts;
    }
}

    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
  class Solution {
public:
    int maximumGain(string s, int x, int y) {
        int gt = x > y;
        int pts = 0;
        if (gt) {
            stack<char> st;
            int i = s.size() - 1;
            // ab
            while (i >= 0) {
                if (!st.empty() && s[i] == 'a') {
                    if (st.top() == 'b') {
                        st.pop();
                        pts += x;
                    } else {
                        st.push(s[i]);
                    }
                } else {
                    st.push(s[i]);
                }
                i--;
            }

            string rem = "";
            while (!st.empty()) {
                rem += st.top();
                st.pop();
            }
            int j = rem.size() - 1;

            // ba
            while (j >= 0) {
                if (!st.empty() && rem[j] == 'b') {
                    if (st.top() == 'a') {
                        st.pop();
                        pts += y;
                    } else {
                        st.push(rem[j]);
                    }
                } else {
                    st.push(rem[j]);
                }
                j--;
            }
        } else if (gt == 0) {
            stack<char> st;
            int i = s.size() - 1;
            // ba
            while (i >= 0) {
                if (!st.empty() && s[i] == 'b') {
                    if (st.top() == 'a') {
                        st.pop();
                        pts += y;
                    } else {
                        st.push(s[i]);
                    }
                } else {
                    st.push(s[i]);
                }
                i--;
            }

            // ab
            string rem = "";
            while (!st.empty()) {
                rem += st.top();
                st.pop();
            }
            cout<<rem<<endl;
            int j = rem.size() - 1;
            while (j >= 0) {
                if (!st.empty() && rem[j] == 'a') {
                    if (st.top() == 'b') {
                        st.pop();
                        pts += x;
                    } else {
                        st.push(rem[j]);
                    }
                } else {
                    st.push(rem[j]);
                }
                j--;
            }
        }

        return pts;
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [ 1717. Maximum Score From Removing Substrings](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

