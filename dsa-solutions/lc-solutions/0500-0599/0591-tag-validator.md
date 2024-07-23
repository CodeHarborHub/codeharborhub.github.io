---
id: tag-validator
title: Tag Validator
sidebar_label: 0591 - Tag Validator
tags:
  - Iterator
  - Stack
  - String
description: "This is a solution to the Tag Validator problem on LeetCode."
---

## Problem Description

Given a string representing a code snippet, implement a tag validator to parse the code and return whether it is valid.

A code snippet is valid if all the following rules hold:

1. The code must be wrapped in a **valid closed tag**. Otherwise, the code is invalid.
2. A **closed tag** (not necessarily valid) has exactly the following format : `<TAG_NAME>TAG_CONTENT</TAG_NAME>`. Among them, `<TAG_NAME>` is the start tag, and `</TAG_NAME>` is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is **valid** if and only if the TAG_NAME and TAG_CONTENT are valid.
3. A **valid** `TAG_NAME` only contain **upper-case letters**, and has length in range [1,9]. Otherwise, the `TAG_NAME` is **invalid**.
4. A **valid** `TAG_CONTENT` may contain other **valid closed tags, cdata** and any characters (see note1) **EXCEPT** unmatched `<`, unmatched start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the `TAG_CONTENT` is **invalid**.
5. A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.
6. A `<` is unmatched if you cannot find a subsequent `>`. And when you find a `<` or `</`, all the subsequent characters until the next `>` should be parsed as TAG_NAME (not necessarily valid).
7. The cdata has the following format : `<![CDATA[CDATA_CONTENT]]>`. The range of `CDATA_CONTENT` is defined as the characters between `<![CDATA[ and the first subsequent ]]>`.
8. `CDATA_CONTENT` may contain **any characters**. The function of cdata is to forbid the validator to parse `CDATA_CONTENT`, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as **regular characters**.

### Examples
**Example 1:**

```
Input: code = "<DIV>This is the first line <![CDATA[<div>]]></DIV>"
Output: true
Explanation: 
The code is wrapped in a closed tag : <DIV> and </DIV>. 
The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. 
Although CDATA_CONTENT has an unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as a tag.
So TAG_CONTENT is valid, and then the code is valid. Thus return true.
```

**Example 2:**

```
Input: code = "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"
Output: true
Explanation:
We first separate the code into : start_tag|tag_content|end_tag.
start_tag -> "<DIV>"
end_tag -> "</DIV>"
tag_content could also be separated into : text1|cdata|text2.
text1 -> ">>  ![cdata[]] "
cdata -> "<![CDATA[<div>]>]]>", where the CDATA_CONTENT is "<div>]>"
text2 -> "]]>>]"
The reason why start_tag is NOT "<DIV>>>" is because of the rule 6.
The reason why cdata is NOT "<![CDATA[<div>]>]]>]]>" is because of the rule 7.
```

### Constraints

- `1 <= code.length <= 500`
- `code` consists of English letters, digits, `'<'`, `'>'`, `'/'`, `'!'`, `'['`, `']'`, `'.'`, and `' '`.

## Solution for Tag Validator

### Approach: Stack
Summarizing the given problem, we can say that we need to determine whether a tag is valid or not, by checking the following properties.

1. The code should be wrapped in a valid closed tag.

2. The `TAG_NAME` should be valid.

3. The `TAG_CONTENT` should be valid.

4. The cdata should be valid.

5. All the tags should be closed. i.e. each start-tag should have a corresponding end-tag and vice-versa and the order of the tags should be correct as well.

In order to check the validity of all these, firstly, we need to identify which parts of the given code string act as which part from the above-mentioned categories. To understand how it's done, we'll go through the implementation and the reasoning behind it step by step.

We iterate over the given code string. Whenever a `<` is encountered(unless we are currently inside `<![CDATA[...]]>`), it indicates the beginning of either a `TAG_NAME`(start tag or end tag) or the beginning of cdata as per the conditions given in the problem statement.

If the character immediately following this `<` is an `!`, the characters following this `<` can't be a part of a valid `TAG_NAME`, since only upper-case letters(in case of a start tag) or `/` followed by upper-case letters(in the case of an end tag). Thus, the choice now narrows down to only **cdata**. Thus, we need to check if the current bunch of characters following `<!`(including it) constitute a valid **cdata**. To do this, firstly we find out the first matching `]]>` following the current `<!` to mark the ending of **cdata**. If no such matching `]]>` exists, the code string is considered as invalid. Apart from this, the `<!` should also be immediately followed by `CDATA[` for the **cdata** to be valid. The characters lying inside the `<![CDATA[` and `]]>` do not have any constraints on them.

If the character immediately following the `<` encountered isn't an `!`, this `<` can only mark the beginning of `TAG_NAME`. Now, since a valid start tag can't contain anything except upper-case letters if a `/` is found after `<`, the `</` pair indicates the beginning of an end tag. Now, when a `<` refers to the beginning of a `TAG_NAME`(either start-tag or end-tag), we find out the first closing `>` following the `<` to find out the substring(say s), that constitutes the `TAG_NAME`. This s should satisfy all the criteria to constitute a valid `TAG_NAME`. Thus, for every such s, we check if it contains all upper-case letters and also check its length(It should be between 1 to 9). If any of the criteria isn't fulfilled, s doesn't constitute a valid `TAG_NAME`. Hence, the code string turns out to be invalid as well.

Apart from checking the validity of the `TAG_NAME`, we also need to ensure that the tags always exist in pairs. i.e. for every start-tag, a corresponding end-tag should always exist. Further, we can note that in case of multiple `TAG_NAME`'s, the `TAG_NAME` whose start-tag comes later than the other ones, should have its end-tag appearing before the end-tags of those other `TAG_NAME`'s. i.e. the tag that starts later should end first.

From this, we get the intuition that we can make use of a stack to check the existence of matching start and end-tags. Thus, whenever we find out a valid start-tag, as mentioned above, we push its `TAG_NAME` string onto a stack. Now, whenever an end-tag is found, we compare its `TAG_NAME` with the `TAG_NAME` at the top of the stack and remove this element from the stack. If the two don't match, this implies that either the current end-tag has no corresponding start-tag or there is a problem with the ordering of the tags. The two need to match for the tag-pair to be valid since there can't exist an end-tag without a corresponding start-tag and vice-versa. Thus, if a match isn't found, we can conclude that the given code string is invalid.

Now, after the complete code string has been traversed, the stack should be empty if all the start-tags have their corresponding end-tags as well. If the stack isn't empty, this implies that some start-tag doesn't have the corresponding end-tag, violating the closed-tag's validity condition.

Further, we also need to ensure that the given code is completely enclosed within closed tags. For this, we need to ensure that the first **cdata** found is also inside the closed tags. Thus, when we find a possibility of the presence of **cdata**, we proceed further only if we've already found a start tag, indicated by a non-empty stack. Further, to ensure that no data lies after the last end-tag, we need to ensure that the stack doesn't become empty before we reach the end of the given code string since an empty stack indicates that the last end-tag has been encountered.
## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <stack>
#include <string>

class Solution {
private:
    std::stack<std::string> stack;
    bool contains_tag = false;

    bool isValidTagName(std::string s, bool ending) {
        if (s.length() < 1 || s.length() > 9)
            return false;
        for (int i = 0; i < s.length(); i++) {
            if (!isupper(s[i]))
                return false;
        }
        if (ending) {
            if (!stack.empty() && stack.top() == s)
                stack.pop();
            else
                return false;
        } else {
            contains_tag = true;
            stack.push(s);
        }
        return true;
    }

    bool isValidCdata(std::string s) {
        return s.find("[CDATA[") == 0;
    }

public:
    bool isValid(std::string code) {
        if (code[0] != '<' || code[code.length() - 1] != '>')
            return false;
        for (int i = 0; i < code.length(); i++) {
            bool ending = false;
            int closeindex;
            if (stack.empty() && contains_tag)
                return false;
            if (code[i] == '<') {
                if (!stack.empty() && code[i + 1] == '!') {
                    closeindex = code.find("]]>", i + 1);
                    if (closeindex < 0 || !isValidCdata(code.substr(i + 2, closeindex - i - 2)))
                        return false;
                } else {
                    if (code[i + 1] == '/') {
                        i++;
                        ending = true;
                    }
                    closeindex = code.find('>', i + 1);
                    if (closeindex < 0 || !isValidTagName(code.substr(i + 1, closeindex - i - 1), ending))
                        return false;
                }
                i = closeindex;
            }
        }
        return stack.empty() && contains_tag;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    Stack < String > stack = new Stack < > ();
    boolean contains_tag = false;
    public boolean isValidTagName(String s, boolean ending) {
        if (s.length() < 1 || s.length() > 9)
            return false;
        for (int i = 0; i < s.length(); i++) {
            if (!Character.isUpperCase(s.charAt(i)))
                return false;
        }
        if (ending) {
            if (!stack.isEmpty() && stack.peek().equals(s))
                stack.pop();
            else
                return false;
        } else {
            contains_tag = true;
            stack.push(s);
        }
        return true;
    }
    public boolean isValidCdata(String s) {
        return s.indexOf("[CDATA[") == 0;
    }
    public boolean isValid(String code) {
        if (code.charAt(0) != '<' || code.charAt(code.length() - 1) != '>')
            return false;
        for (int i = 0; i < code.length(); i++) {
            boolean ending = false;
            int closeindex;
            if(stack.isEmpty() && contains_tag)
                return false;
            if (code.charAt(i) == '<') {
                if (!stack.isEmpty() && code.charAt(i + 1) == '!') {
                    closeindex = code.indexOf("]]>", i + 1);
                    if (closeindex < 0 || !isValidCdata(code.substring(i + 2, closeindex)))
                        return false;
                } else {
                    if (code.charAt(i + 1) == '/') {
                        i++;
                        ending = true;
                    }
                    closeindex = code.indexOf('>', i + 1);
                    if (closeindex < 0 || !isValidTagName(code.substring(i + 1, closeindex), ending))
                        return false;
                }
                i = closeindex;
            }
        }
        return stack.isEmpty() && contains_tag;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def __init__(self):
        self.stack = []
        self.contains_tag = False

    def isValidTagName(self, s, ending):
        if len(s) < 1 or len(s) > 9:
            return False
        if not all(c.isupper() for c in s):
            return False
        if ending:
            if self.stack and self.stack[-1] == s:
                self.stack.pop()
            else:
                return False
        else:
            self.contains_tag = True
            self.stack.append(s)
        return True

    def isValidCdata(self, s):
        return s.startswith("[CDATA[")

    def isValid(self, code):
        if code[0] != '<' or code[-1] != '>':
            return False
        i = 0
        while i < len(code):
            ending = False
            if not self.stack and self.contains_tag:
                return False
            if code[i] == '<':
                if self.stack and code[i + 1] == '!':
                    closeindex = code.find("]]>", i + 1)
                    if closeindex < 0 or not self.isValidCdata(code[i + 2:closeindex]):
                        return False
                else:
                    if code[i + 1] == '/':
                        i += 1
                        ending = True
                    closeindex = code.find('>', i + 1)
                    if closeindex < 0 or not self.isValidTagName(code[i + 1:closeindex], ending):
                        return False
                i = closeindex
            i += 1
        return not self.stack and self.contains_tag


```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**: We traverse over the given code string of length N.

### Space Complexity: $O(N)$

> **Reason**: The stack can grow upto a size of n/3 in the worst case. e.g. In case of `<A><B><C><D>`, N=12 and number of tags = 12/3 = 4.

## References

- **LeetCode Problem**: [Tag Validator](https://leetcode.com/problems/tag-validator/description/)

- **Solution Link**: [Tag Validator](https://leetcode.com/problems/tag-validator/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>