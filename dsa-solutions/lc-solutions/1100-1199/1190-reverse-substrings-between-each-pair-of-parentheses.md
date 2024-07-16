---
id: reverse-substrings-between-each-pair-of-parentheses
title: 1190. Reverse Substrings Between Each Pair of Parentheses
sidebar_label:  1190. Reverse Substrings Between Each Pair of Parentheses
tags:
- String 
- Stack

description: "This is a solution to the 1190. Reverse Substrings Between Each Pair of Parentheses problem on LeetCode."
---

## Problem Description
You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 ### Examples
**Example 1:**
```
Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
```

### Constraints
- `1 <= s.length <= 2000`
- `s only contains lower case English characters and parentheses.`
- `It is guaranteed that all parentheses are balanced.`
## Solution for 1190. Reverse Substrings Between Each Pair of Parentheses

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
        var reverseParentheses = function(s) {
        let st = [];
        let arr = s.split('');
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '(') {
                st.push(i);
            } else if (arr[i] === ')') {
                let top = st.pop();
                reverse(arr, top + 1, i - 1);
            }
        }
        
        let ans = '';
        for (let c of arr) {
            if (/[a-z]/.test(c)) {
                ans += c;
            }
        }
        return ans;
    };

    function reverse(arr, left, right) {
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

      const input = "(u(love)i)"
      const output = reverseParentheses(input)
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
    def reverseParentheses(self, s: str) -> str:
        st = []
        s = list(s)
        
        for i in range(len(s)):
            if s[i] == '(':
                st.append(i)
            elif s[i] == ')':
                top = st.pop()
                s[top + 1:i] = s[top + 1:i][::-1]
        
        return ''.join(c for c in s if c.isalpha())

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
  import java.util.Stack;

public class Solution {
    public String reverseParentheses(String s) {
        Stack<Integer> st = new Stack<>();
        char[] charArray = s.toCharArray();
        
        for (int i = 0; i < charArray.length; i++) {
            if (charArray[i] == '(') {
                st.push(i);
            } else if (charArray[i] == ')') {
                int top = st.pop();
                reverse(charArray, top + 1, i - 1);
            }
        }
        
        StringBuilder ans = new StringBuilder();
        for (char c : charArray) {
            if (Character.isLetter(c)) {
                ans.append(c);
            }
        }
        return ans.toString();
    }
    
    private void reverse(char[] array, int left, int right) {
        while (left < right) {
            char temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
}

    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
  class Solution {
public:
    string reverseParentheses(string s) {
        stack<int>st;
        for(int i=0;i<s.size();i++)
        {
            if(s[i]=='(')
            {
                st.push(i);
            }
            else if(s[i]==')')
            {
                int top = st.top();
                st.pop();
                reverse(s.begin()+top , s.begin()+i);
            }
        }

        string ans="";
        for(int i=0;i<s.size();i++)
        {
            if(s[i]>='a' && s[i]<='z')
            {
                ans+=s[i];
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

- **LeetCode Problem**: [ 1190. Reverse Substrings Between Each Pair of Parentheses](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)

