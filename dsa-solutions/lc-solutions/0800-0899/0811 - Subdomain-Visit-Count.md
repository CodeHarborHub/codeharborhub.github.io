---
id: subdomain-visit-count
title: Subdomain Visit Count
sidebar_label: 811- Subdomain Visit Count
tags:
  - Array
  - String
  - Hash Table
description: Given an array of count-paired domains, return an array showing the total visit counts for each subdomain and its parent domains.
sidebar_position: 0811
---

## Problem Description

A website domain `"discuss.leetcode.com"` consists of various subdomains. At the top level, we have `"com"`, at the next level, we have `"leetcode.com"` and at the lowest level, `"discuss.leetcode.com"`. When we visit a domain like `"discuss.leetcode.com"`, we will also visit the parent domains `"leetcode.com"` and `"com"` implicitly.

A count-paired domain is a domain that has one of the two formats `"rep d1.d2.d3"` or `"rep d1.d2"` where `rep` is the number of visits to the domain and d1.d2.d3 is the domain itself.

For example, `"9001 discuss.leetcode.com"` is a count-paired domain that indicates that `discuss.leetcode.com` was visited `9001` times.
Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.

### Example 1

- **Input:** `cpdomains = ["9001 discuss.leetcode.com"]`
- **Output:** `["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]`
- **Explanation:** `We only have one website domain: "discuss.leetcode.com".
As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.`

### Constraints

- `1 <= cpdomain.length <= 100`
- `1 <= cpdomain[i].length <= 100`

## Approach

Just store each & every valid substring in a HashMap with its frequency count.
Update the frequency count whenever the same string is encounterd.
Finally, create a new string using each key-value pair of the HashMap & add that new string to the final list.

### Solution Code

#### Java

```Java
class Solution {
    HashMap<String, Integer> hm= new HashMap<>();

    public List<String> subdomainVisits(String[] cpdomains) {
        List<String> result= new ArrayList<>();

        for(String s: cpdomains){
            addToList(s);
        }

        for(String s: hm.keySet()){
            StringBuilder sb= new StringBuilder( Integer.toString(hm.get(s)) );
            sb.append(" ");
            sb.append( s );
            result.add( sb.toString() );
        }
        return result;
    }

    public void addToList(String s){
        String[] split1= s.split(" ");
        int n= Integer.parseInt(split1[0]);
        String[] split2= split1[1].split("\\.");
        int l= split2.length;

        for(int i=0; i<l; i++){
            StringBuilder sb= new StringBuilder();
            int index= i;

            while(index < l){
                sb.append( split2[index] );

                if(index != l-1)
                    sb.append( "." );
                index++;
            }
            String str= sb.toString();
            hm.put( str, hm.getOrDefault( str, 0 )+n);
        }
    }
}

```

- Time Complexity
  The time complexity is O(N⋅L2).

- Space Complexity
  The space complexity is O(1).
