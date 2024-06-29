---
id: find-and-replace-pattern
title: Find and Replace Pattern
sidebar_label: 890-  Find and Replace Pattern
tags:
  - Array
  - String
  - Two pointer
description: Given a list of strings words and a string pattern, return words that match pattern where each unique character in pattern maps uniquely to characters in the word.
sidebar_position: 0890
---

## Problem Description

Given a list of strings words and a string pattern, return a list of `words[i]` that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with `p(x)`, we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

### Example 1

- **Input:** `words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"`
- **Output:** `["mee","aqq"]`
- **Explanation:** `"mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.`

### Constraints

- `1 <= pattern.length <= 20`
- `1 <= words.length <= 50`

## Approach

This solution uses a HashMap (hp1) to map characters from the pattern and each word to unique integers based on their first occurrence order. It constructs a transformed string (res) for the pattern by assigning unique integers to each character based on their first appearance. Then, it checks each word (str) against this transformed pattern (res). If a word matches the pattern transformation, it is added to the result list (al).

#### Java

```Java
class Solution {
    public List<String> findAndReplacePattern(String[] words, String pattern) {
        List<String> al = new ArrayList();
        int count1=0;
        HashMap<Character,Integer> hp1 = new HashMap();
        String res="";
        for(int i=0;i<pattern.length();i++){
            if(hp1.containsKey(pattern.charAt(i))){
                    res += ""+hp1.get(pattern.charAt(i));
                }else{
                    count1++;
                    hp1.put(pattern.charAt(i),count1);
                }
                res += ""+hp1.get(pattern.charAt(i));
        }
        for(String str : words){
            String temp1 = "";
            hp1.clear();
            count1=0;
            for(int i=0;i<str.length();i++){
                if(hp1.containsKey(str.charAt(i))){
                    temp1 += ""+hp1.get(str.charAt(i));
                }else{
                    count1++;
                    hp1.put(str.charAt(i),count1);
                }
                temp1 += ""+hp1.get(str.charAt(i));
            }
            if(res.equals(temp1)) al.add(str);
            temp1="";
        }
        return al;
    }
}
```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(1)$.
