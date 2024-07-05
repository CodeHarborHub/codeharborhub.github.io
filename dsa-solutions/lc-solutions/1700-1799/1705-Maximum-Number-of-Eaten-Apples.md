---
id: maximum-number-of-eaten-apples
title: Maximum Number of Eaten Apples
sidebar_label: 1705. Maximum Number of Eaten Apples
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Maximum Number of Eaten Apples problem on LeetCode."
---

## Problem Description

There is a special kind of apple tree that grows apples every day for n days. On the ith day, the tree grows `apples[i]` apples that will rot after `days[i]` days, that is on day `i + days[i]` the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any apples, which are denoted by `apples[i] == 0` and `days[i] == 0`.

You decided to eat at most one apple a day (to keep the doctors away). Note that you can keep eating after the first n days.

Given two integer arrays days and apples of length `n`, return the maximum number of apples you can eat.

### Examples

**Example 1:**

```
Input: apples = [1,2,3,5,2], days = [3,2,1,4,2]
Output: 7
Explanation: You can eat 7 apples:
- On the first day, you eat an apple that grew on the first day.
- On the second day, you eat an apple that grew on the second day.
- On the third day, you eat an apple that grew on the second day. After this day, the apples that grew on the third day rot.
- On the fourth to the seventh days, you eat apples that grew on the fourth day.

```

**Example 2:**

```
Input: apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]
Output: 5
Explanation: You can eat 5 apples:
- On the first to the third day you eat apples that grew on the first day.
- Do nothing on the fouth and fifth days.
- On the sixth and seventh days you eat apples that grew on the sixth day.

```

### Constraints

- `n == apples.length == days.length`
- `1 <= n <= 2 * 10^4`
- `0 <= apples[i], days[i] <= 2 * 10^4`

## Solution for 1705. Maximum Number of Eaten Apples


### Approach 

The first thing to ask your mind is how to eat more & more apples? What is the best strategy for doing it?
Your mind will tell if we eat apples that get rotten fast and eat them as early as possible. It will be the best strategy for sure.

Now see the constraints: We can't implement $O(N^2)$ as this will give time limit exceeded.
We need some data structure to maintain the above possibility and do the work in atmax $O(NLogN)$.
We have min-heap for it.

Now keep building min heap ( We can use priority queue in C++ for the same purpose) and keep eating the maximum no of apples 

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
       from heapq import heappush, heappop
class Solution:
    def eatenApples(self, A: List[int], D: List[int]) -> int:
        ans, i, N = 0, 0, len(A)
        h = []
        while i < N or h:
            # only push to heap when you have a valid i, and the apple has atleast one day to stay fresh.
            if i<N and A[i] > 0:
                heappush(h, [i+D[i], A[i]])
            # remove the rotten apples batches and the batches with no apples left (which might have got consumed).
            while h and (h[0][0] <= i or h[0][1] <= 0):
                heappop(h)
            # only if there is batch in heap after removing all the rotten ones, you can eat. else wait for the subsequent days for new apple batch by incrementing i.
            if h:
                h[0][1]-=1
                ans+=1
            i+=1
        return ans 
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
       class Solution {
    public int eatenApples(int[] apples, int[] days) {
        PriorityQueue<int[]> appleStorage = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int appleCount = 0;
        
        for(int i = 0; i < apples.length || !appleStorage.isEmpty(); i++) {
            if(i < apples.length) {
                appleStorage.add(new int[]{ i + days[i], apples[i] });
            }
            
            while(!appleStorage.isEmpty() && (appleStorage.peek()[0] <= i || appleStorage.peek()[1] <= 0)) {
                appleStorage.poll();
            }
            
            if(!appleStorage.isEmpty()) {
                appleCount++;
                appleStorage.peek()[1]--;
            }
        }
        
        return appleCount;
    }
}
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
      typedef pair<int,int> pii;
class Solution {
public:
    int eatenApples(vector<int>& apples, vector<int>& days) {
        //Make a priority queue --> pq (pair - {rotten day , no of apples} ) and sort according to increasing rotten day
        priority_queue<pii, vector<pii>, greater<pii> >pq;
        int n = apples.size();
        int eatenApples = 0;
        //Process apples which are not processed or until we still have good apples in the queue
        for(int i = 0; i<n || !pq.empty(); i++)
        {
            //Push condition in the queue
            if(i < n && apples[i])
              pq.push(make_pair(i+days[i],apples[i]));
              
            //Remove already rotten apples which are still present in the queue
            while(!pq.empty() && i >= pq.top().first)
              pq.pop();
           
           //If we have good apples then we have to eat it to keep the dr away
             if(!pq.empty())
             {
                     auto p = pq.top(); 
                     pq.pop();
                     
                    // Not reached the nth day yet (Note : we are trying to eat atmost 1 apple a day here)
                    if(i < n )  
                    {
                        eatenApples ++ ;   //eat the good apple
                        p.second--;        //one apple consumed 
                        // If still good apples remains push it in our good apple queue
                        if(p.second > 0)
                        pq.push(p);
                    }
                    else
                    {
                         // Note - we are eating in the greedy fashion so as to consume max no of apples, i.e first eating those
                         // apples which get rotten earlier
                         // Add minimum of days left or no of good apples left for the current pair
                         int add = min(p.first - i, p.second);
                         eatenApples += add;
                         // set the day upto which we have already eaten so as to check for the comming days
                         i += add - 1;
                         
                    }
             }
           
        }
       
        return eatenApples;
    }
};
    ```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(NlogN) $
- Space Complexity: $ O(N)$

## References

- **LeetCode Problem**: [Maximum Number of Eaten Apples](https://leetcode.com/problems/maximum-number-of-eaten-apples/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/)
