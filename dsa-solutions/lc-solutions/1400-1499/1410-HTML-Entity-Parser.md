---
id: html-entity-parser
title: HTML Entity Parser
sidebar_label: 1410 - HTML Entity Parser
tags:
  - Hash Table
  - String
description: "This is a solution to the HTML Entity Parser problem on LeetCode."
---

## Problem Description

HTML entity parser is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.

The special characters and their entities for HTML are:

- Quotation Mark: the entity is `&quot`; and symbol character is` "`.
- Single Quote Mark: the entity is `&apos`; and symbol character is `'`.
- Ampersand: the entity is `&amp`; and symbol character is `&`.
- Greater Than Sign: the entity is `&gt`; and symbol character is `>`.
- Less Than Sign: the entity is `&lt`; and symbol character is `<`.
- Slash: the entity is `&frasl`; and symbol character is `/`.
Given the input text string to the HTML parser, you have to implement the entity parser.

Return the text after replacing the entities by the special characters.

### Examples

**Example 1:**

```
Input: text = "&amp; is an HTML entity but &ambassador; is not."
Output: "& is an HTML entity but &ambassador; is not."
Explanation: The parser will replace the &amp; entity by &

```
**Example 2:**
```
Input: text = "and I quote: &quot;...&quot;"
Output: "and I quote: \"...\""

```
### Constraints

- `1 <= text.length <= 10^5`
- The string may contain any possible characters out of all the 256 ASCII characters.

## Solution for HTML Entity Parser

### Approach 

We can use two-pointers approach and re-use the input string to store the output:

- Copy the current character `text[p] = text[i]`
- Track the starting position of `'&'`
- When we see `';'`, check for the special character.
For a match, decrease the slow pointer p, and copy the corresponding symbol.
For true $O(n)$ solution, we need to use Trie to do the matching. I feel lazy today so I just broke special characters by size to minimize checks.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```cpp
string entityParser(string text) {    
    vector<pair<string,char>> encoded[8] = {{}, {}, {}, {}, {{"&gt;", '>'}, {"&lt;", '<'}},
        {{"&amp;", '&'}}, {{"&quot;", '"'}, {"&apos;", '\''}}, {{"&frasl;", '/'}}};
    int st = 0, p = 0;
    for (auto i = 0; i < text.size(); ++i, ++p) {
        text[p] = text[i];
        if (text[p] == '&')
            st = p;
        if (text[p] == ';') { 
            auto sz = p - st + 1;
            if (sz >= 4 && sz <= 7)
                for (auto &[enc, dec] : encoded[sz]) {
                    if (text.compare(st, sz, enc) == 0) {
                        p = st;
                        text[p] = dec;
                        break;
                    }
                }
            st = p + 1;
        }
    }
    text.resize(p);
    return text;
}
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
```java
public String entityParser(String text) {
        if (text == null || text.length() == 0) {
            return "";
        }
        Map<String, String> map = 
            Map.of("&quot;", "\"", "&apos;", "'", 
                   "&gt;", ">", 
                   "&lt;", "<", "&frasl;", "/");
        for (String key : map.keySet()) {
            text = text.replaceAll(key, map.get(key));
        }
        return text.replaceAll("&amp;", "&");  // "&" must be put in last;
    }
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```python
class Solution:
    def entityParser(self, text: str) -> str:
        
        html_symbol = [ '&quot;', '&apos;', '&gt;', '&lt;', '&frasl;', '&amp;']
        formal_symbol = [ '"', "'", '>', '<', '/', '&']
                
        for html_sym, formal_sym in zip(html_symbol, formal_symbol):
            text = text.replace( html_sym , formal_sym )
        
        return text
        
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(n)$

### Space Complexity: $O(1)$

## References

- **LeetCode Problem**: [HTML Entity Parser](https://leetcode.com/problems/html-entity-parser/description/)

- **Solution Link**: [HTML Entity Parser](https://leetcode.com/problems/html-entity-parser/solutions/)