---
id: loud-and-rich
title: Loud and Rich
sidebar_label: 851-  Loud and Rich
tags:
  - Array
  - Graph
  - Depth-First Search
description: Return an integer array answer where answer[x] = y indicates that y is the person with the least quietness among all individuals who have equal to or more money than person x.
sidebar_position: 0851
---

## Problem Description

There is a group of n people labeled from `0` to `n - 1` where each person has a different amount of money and a different level of quietness.

You are given an array richer where `richer[i] = [ai, bi]` indicates that ai has more money than bi and an integer array quiet where `quiet[i]` is the quietness of the ith person. All the given data in richer are logically correct (i.e., the data will not lead you to a situation where x is richer than y and y is richer than x at the same time).

Return an integer array answer where `answer[x] = y` if y is the least quiet person (that is, the person y with the smallest value of `quiet[y]`) among all people who definitely have equal to or more money than the person x.

### Example 1

- **Input:** `richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]`
- **Output:** `[5,5,2,5,4,5,6,7]`
- **Explanation:** `answer[0] = 5.
Person 5 has more money than 3, which has more money than 1, which has more money than 0.
The only person who is quieter (has lower quiet[x]) is person 7, but it is not clear if they have more money than person 0.
answer[7] = 7.
Among all people that definitely have equal to or more money than person 7 (which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x]) is person 7.
The other answers can be filled out with similar reasoning.`

### Constraints

- `n == quiet.length`
- `0 <= quiet[i] < n`
- `0 <= richer.length <= n * (n - 1) / 2`

## Approach

The approach uses breadth-first search (BFS) to find all people richer than each person, then constructs an updated adjacency list updated_adj to store these relationships. For each person, it identifies the least quiet person among those richer or equally wealthy by comparing quietness values and returns the corresponding indices in the result array.

#### Java

```Java
class Solution {
    Map<Integer, Set<Integer>> updated_adj;
    public int[] loudAndRich(int[][] richer, int[] quiet) {
        int n=quiet.length;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for(int i =0;i<n;i++)
        {
        adj.add(new ArrayList<>());
        adj.get(i).add(i);
        }

        for(int [] arr: richer)
        {
            int src = arr[0];
            int dst = arr[1];
            adj.get(dst).add(src);
        }
        updated_adj = new HashMap<>();
        for (int i = 0; i < n; i++) {
            updated_adj.put(i, new HashSet<>());
            updated_adj.get(i).add(i);
        }
        // Map<Integer,ArrayList<Integer>> updated_adj = new ArrayList<>();
        for(int i=0;i<n;i++)
        {
            bfs(adj,updated_adj,i);
        }
        int[] result = new int[n];
        for(int i =0;i<n;i++)
        {
            Set<Integer> hs=updated_adj.get(i);
            System.out.println(hs);
            ArrayList<Integer> al = new ArrayList<>();
            for(int ele : hs)
            {
                al.add(quiet[ele]);
            }
            System.out.println(al);
            Collections.sort(al);
            System.out.println(al);
            
            int check=al.get(0);
            int index = getIndex(check,quiet);
            System.out.println(index);
            result[i]=index;
            System.out.println();
        }
        
        return result;

    }
    public static void bfs(ArrayList<ArrayList<Integer>> adj,Map<Integer,Set<Integer>> updated_adj,int start)
    {
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        while(!q.isEmpty())
        {
            int node = q.poll();
            for(int neigh : adj.get(node))
            {
                if(!updated_adj.get(start).contains(neigh))
                {
                    updated_adj.get(start).add(neigh);
                    q.add(neigh);
                }
            }


        }
    }
    public static int getIndex(int ele,int[] quiet)
    {
        for(int i=0;i<quiet.length;i++)
        {
            if(quiet[i]==ele)
            return i;
        }
        return 0;
    }
}
```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(1)$.
