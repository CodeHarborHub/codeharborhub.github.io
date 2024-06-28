---
id: queries-on-a-permutation-with-key
title: Queries on a Permutation With Key
sidebar_label: 1409 - Queries on a Permutation With Key
tags:
  - Array
  - Binary Indexed Tree
  - Simulation
description: "This is a solution to the Queries on a Permutation With Key problem on LeetCode."
---

## Problem Description

Given the array queries of positive integers between 1 and m, you have to process all `queries[i] ``(from i=0 to i=queries.length-1)` according to the following rules:

- In the beginning, you have the permutation `P=[1,2,3,...,m]`.
- For the current i, find the position of `queries[i]` in the permutation `P (indexing from 0)` and then move this at the beginning of the permutation P. Notice that the position of `queries[i]` in P is the result for `queries[i]`.
Return an array containing the result for the given queries.

### Examples

**Example 1:**

```
Output: [2,1,2,1] 
Explanation: The queries are processed as follow: 
For i=0: queries[i]=3, P=[1,2,3,4,5], position of 3 in P is 2, then we move 3 to the beginning of P resulting in P=[3,1,2,4,5]. 
For i=1: queries[i]=1, P=[3,1,2,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,3,2,4,5]. 
For i=2: queries[i]=2, P=[1,3,2,4,5], position of 2 in P is 2, then we move 2 to the beginning of P resulting in P=[2,1,3,4,5]. 
For i=3: queries[i]=1, P=[2,1,3,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,2,3,4,5]. 
Therefore, the array containing the result is [2,1,2,1].

```
**Example 2:**
```
Input: queries = [4,1,2,2], m = 4
Output: [3,1,2,0]

```
### Constraints

- `1 <= m <= 10^3`
- `1 <= queries.length <= m`
- `1 <= queries[i] <= m`

## Solution for Queries on a Permutation With Key

### Approach 

1. Push_front : takes $O(n)$
2. Find the index of a number :$ O(1)$ if use hashmap
3. Update the index’s of the rest of the elements from index 1 : takes $O(n)$

We can keep the elements in a sorted manner using a treeset/set.
However finding the position of element by looking at the number of elements `< or > element[I] `would take $O(n)$ which brings the time complexity to $O(n^2)$

An efficient Data structure that can find the number of elements `< or > an element[I]` is Fenwick tree.

I use fenwick tree to solve the problem.
The idea is instead of pushing the element to the front i.e assigning an index 0 for every query.
I assign -1 for the first query, -2 for the second query, -3 for the third …
By doing so we can observe that range of index’`s = [-m,m]`
However we know that array index cannot be negative, Hence i encode it such that
-m = 0
-m+1 = 1
-m+2 = 2
.
.
.
m=2m.
Basically right shifting the range to start from 0.
By doing so our new range is `[0,2m]`

Operations we perform:
We initialize our Fenwick tree of size 2m
Set all the values from `[1…m]` i.e `[m..2m] to 1`
For every query
we find its postion by finding the number of set elements `<` the given query.
we set it's postion to 0 in fenwick tree
set its new to `-1,-2,-3` i.e `(m,m-1,m-2)`

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```cpp
class Solution {
public:
    void update(vector<int>& tree,int i,int val) {
        while(i<tree.size()) {
            tree[i]+=val;
            i+=(i&(-i));
        }
    }
    
    int getSum(vector<int>& tree,int i) {
        int s = 0;
        while(i>0) {
            s+=tree[i];
            i-=(i&(-i));
        }
        return s;
    }
    
    vector<int> processQueries(vector<int>& queries, int m) {
        vector<int> res,tree((2*m)+1,0);
        unordered_map<int,int> hmap;
        for(int i=1;i<=m;++i) {
            hmap[i] = i+m;
            update(tree,i+m,1);
        }

        for(int querie : queries) {
            res.push_back(getSum(tree,hmap[querie])-1);
            update(tree,hmap[querie],-1);
            update(tree,m,1);
            hmap[querie] = m;
            m--;
        }  
        return res;     
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
```java
class Solution {    
    public int[] processQueries(int[] queries, int m) {
        int n = queries.length;
        BIT bit = new BIT(n+m+1);
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 1; i <= m; i++) {
            bit.add(n+i, 1);
            map.put(i, n+i);
        }
        
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            int index = map.remove(queries[i]);
            res[i] = bit.prefixSum(index-1);
            
            int new_index = n - i;
            bit.add(index, -1);
            bit.add(new_index, 1);
            map.put(queries[i], new_index);
        }
        return res;
    }
	
    class BIT {
        int[] a;
        
        public BIT(int n) {
            a = new int[n];
        }
        
        public void add(int index, int delta) {
            index++;
            while (index < a.length) {
                a[index] += delta;
                index += index & (-index);
            }
        }
        
        public int prefixSum(int index) {
            index++;
            int res = 0;
            while (index > 0) {
                res += a[index];
                index -= index & (-index);
            }
            return res;
        }
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```python
class Solution:
    def processQueries(self, queries: List[int], m: int) -> List[int]:
        
        tree = [0] * ((2*m) + 1)
        res = []
        
        def update(i,val):
            while i<len(tree):
                tree[i]+=val
                i+=(i&(-i))
    
        def prefixSum(i):
            s=0
            while i>0:
                s+=tree[i]
                i-=(i&(-i))
            return s
        
        hmap = collections.defaultdict(int)
        
        for i in range(1,m+1):
            hmap[i] = i+m
            update(i+m,1)

        for i in queries:
            res.append(prefixSum(hmap[i])-1)
            update(hmap[i],-1)
            update(m,1)
            hmap[i] = m
            m-=1

        return res
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(nlogn)$

### Space Complexity: $O(2m)$

## References

- **LeetCode Problem**: [Queries on a Permutation With Key](https://leetcode.com/problems/queries-on-a-permutation-with-key/description/)

- **Solution Link**: [Queries on a Permutation With Key](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/)