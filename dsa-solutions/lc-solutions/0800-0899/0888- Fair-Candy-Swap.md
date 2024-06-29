---
id: fair-candy-swap
title: Fair Candy Swap
sidebar_label: 888-  Fair Candy Swap
tags:
  - Array
  - Hash Table
  - Sorting
description: Find one pair of candy boxes, one from Alice and one from Bob, to swap so they both end up with the same total number of candies.
sidebar_position: 0888
---

## Problem Description

Alice and Bob have a different total number of candies. You are given two integer arrays `aliceSizes` and bobSizes where `aliceSizes[i]` is the number of candies of the ith box of candy that Alice has and `bobSizes[j]` is the number of candies of the `jth` box of candy that Bob has.

Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

Return an integer array answer where `answer[0]` is the number of candies in the box that Alice must exchange, and `answer[1]` is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

### Example 1

- **Input:** `aliceSizes = [1,1], bobSizes = [2,2]`
- **Output:** `[1,2]`

### Constraints

- `1 <= aliceSizes.length, bobSizes.length <= 104`
- `1 <= aliceSizes[i], bobSizes[j] <= 105`

## Approach

The solution first calculates the total number of candies each Alice and Bob have. Then, it sorts Bob's candy boxes for efficient searching. It iterates over Alice's candy boxes, checking if swapping a box with Bob can balance their total candies. For each box of Alice, it calculates the required box from Bob and uses binary search to find it in Bob's sorted array. If a valid swap is found, it updates the answer and returns it.

#### Java

```Java
class Solution {
    public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
        Arrays.sort(bobSizes);
        int aliceSum=0;
        int bobSum=0;
        for(int i=0;i<aliceSizes.length;i++){
            aliceSum+=aliceSizes[i];
        }
        for(int i=0;i<bobSizes.length;i++){
            bobSum+=bobSizes[i];
        }
        int [] ans=new int [2];

        for(int i=0;i<aliceSizes.length;i++){
            if((bobSum-aliceSum+(2*aliceSizes[i]))%2!=0){
                break;
            }
            if(Arrays.binarySearch(bobSizes,(bobSum-aliceSum+(2*aliceSizes[i]))/2)>=0){
                ans[0]=aliceSizes[i];
                ans[1]=(bobSum-aliceSum+(2*aliceSizes[i]))/2;
            }
            else if(aliceSizes[i]==(bobSum-aliceSum+(2*aliceSizes[i]))/2){
                ans[0]=aliceSizes[i];
                ans[1]=aliceSizes[i];
            }
        }
        return ans;
    }
}
```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(1)$.
