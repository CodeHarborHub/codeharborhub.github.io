---
id: friends-of-appropriate-ages
title: Friends Of Appropriate Ages
sidebar_label: 825-  Friends Of Appropriate Ages
tags:
  - Array
  - Binary Search
  - Sorting
description: Calculate the total number of friend requests made between persons based on their ages, following specific conditions that determine when a friend request is not sent.
sidebar_position: 0825
---

## Problem Description

There are n persons on a social media website. You are given an integer array ages where `ages[i]` is the age of the ith person.

A Person x will not send a friend request to a person `y (x != y)` if any of the following conditions is true:

`age[y] <= 0.5 * age[x] + 7`
`age[y] > age[x]`
`age[y] > 100 && age[x] < 100`
Otherwise, x will send a friend request to y.

Note that if x sends a request to y, y will not necessarily send a request to x. Also, a person will not send a friend request to themself.

Return the total number of friend requests made.

### Example 1

- **Input:** `ages = [16,16]`
- **Output:** `2`
- **Explanation:** `2 people friend request each other.`

### Constraints

- `n == ages.length`
- `1 <= ages[i] <= 120`

## Approach

This approach first counts the occurrences of each age using a frequency array map. It then computes the cumulative counts to facilitate range queries. For each person, it determines the valid age range for sending friend requests and calculates the total possible friend requests by leveraging the cumulative counts, subtracting the invalid and self-request cases.

#### Java

```Java
class Solution {
    public int numFriendRequests(int[] ages) {
        int map[]=new int[121];
        for(int j=0;j<ages.length;j++){
            map[ages[j]]++;
        }

        for(int i=1;i<=120;i++){
            map[i]+=map[i-1];
        }
        int totalFriend=0;
        for(int i=0;i<ages.length;i++){
            int cond=ages[i]/2+7;
            if(cond>=ages[i]){
                continue;
            }
            totalFriend+=map[ages[i]]-map[cond]-1;
        }
        return totalFriend;
    }
}
```

- Time Complexity
  The time complexity is o(n).

- Space Complexity
  The space complexity is o(1).
  e space complexity is O(1).
