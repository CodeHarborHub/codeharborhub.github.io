---
id: Booking-concert-tickets-in-groups
title: Booking Concert Tickets in Groups
sidebar_label: 2286 Booking Concert Tickets in Groups
tags:
  - Java
  - Binary Search
  - Design
  - Segmnent Tree
  - Binary Indexed Tree
description: "This document provides a solution where we need to design a ticketing system that can allocate seats."
---

## Problem

A concert hall has $n$ rows numbered from $0$ to $n - 1$, each with $m$ seats, numbered from $0$ to $m - 1$. You need to design a ticketing system that can allocate seats in the following cases:

- If a group of $k$ spectators can sit **together** in a row.
- If **every** member of a group of $k$ spectators can get a seat. They may or **may not** sit together.

Note that the spectators are very picky. Hence:

- They will book seats only if each member of their group can get a seat with row number **less than or equal** to $maxRow$. $maxRow$ can vary from group to group.
- In case there are multiple rows to choose from, the row with the **smallest** number is chosen. If there are multiple seats to choose in the same row, the seat with the **smallest** number is chosen.

Implement the $BookMyShow$ class:

- $BookMyShow(int n, int m)$ Initializes the object with $n$ as number of rows and $m$ as number of seats per row.
- $int[] gather(int k, int maxRow)$ Returns an array of length $2$ denoting the row and seat number (respectively) of the **first seat** being allocated to the $k$ members of the group, who must sit **together**. In other words, it returns the smallest possible $r$ and $c$ such that all $[c, c + k - 1]$ seats are valid and empty in row $r$, and $r <= maxRow$. Returns $[]$ in case it is **not possible** to allocate seats to the group.

- $boolean scatter(int k, int maxRow)$ Returns $true$ if all $k$ members of the group can be allocated seats in rows $0$ to $maxRow$, who may or **may not** sit together. If the seats can be allocated, it allocates $k$ seats to the group with the **smallest** row numbers, and the smallest possible seat numbers in each row. Otherwise, returns $false$.

### Examples

**Example 1:**

```
Input: ["BookMyShow", "gather", "gather", "scatter", "scatter"]
[[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]]

Output: [null, [0, 0], [], true, false]

Explanation:

BookMyShow bms = new BookMyShow(2, 5); // There are 2 rows with 5 seats each
bms.gather(4, 0); // return [0, 0]
                  // The group books seats [0, 3] of row 0.

bms.gather(2, 0); // return []
                  // There is only 1 seat left in row 0,
                  // so it is not possible to book 2 consecutive seats.

bms.scatter(5, 1); // return True
                   // The group books seat 4 of row 0 and seats [0, 3] of row 1.

bms.scatter(5, 1); // return False
                   // There is only one seat left in the hall.
```

### Constraints

- $1 <= n <= 5 * 10^4$
- $1 <= m, k <= 10^9$
- $0 <= maxRow <= n - 1$
- At most $5 * 10^4$ calls in total will be made to $gather$ and $scatter$.

---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Segment Tree**:

   - **Build**: Construct the segment tree with initial values, where each node stores the sum and maximum number of seats in the range it represents.
   - **Update**: Update the segment tree when seats are booked, modifying the relevant nodes to reflect the new seat counts.

   - **Queries**:

     - **Gather Query**: Find a row with at least **'k'** seats available within the first **'maxRow'** rows.

     - **Sum Query**: Compute the total number of seats available within the first **'maxRow'** rows.

2. **BookMyShow Class**:

   - **Constructor**: Initialize the segment tree and an array to keep track of seats available in each row.
   - **Gather**: Check if there is a row with at least **'k'** seats and update the tree and row seat count accordingly.
   - **Scatter**: Allocate **'k'**

## Solution for Booking Concert Tickets in Groups

- The problem revolves around efficiently managing and querying seat allocations in a theater. The segment tree is used to handle range queries and updates swiftly, ensuring that operations like finding available seats or updating seat counts are performed in logarithmic time.

#### Code in Java

```java
class BookMyShow {
    static class SegTree{
        long sum[]; // store sum of seats in a range
        long segTree[]; // store maximum seats in a range
        int m, n;
        public SegTree(int n, int m) {
            this.m = m;
            this.n = n;
            segTree = new long[4*n];
            sum = new long[4*n];
            build(0, 0, n-1, m);
        }

        private void build(int index, int lo, int hi, long val){
            if(lo == hi){
                segTree[index] = val; // initialize segement tree with initial seat capacity
                sum[index] = val; // initialize "sum" with initial seat capacity of a row
                return;
            }
            int mid = (lo + hi)/2;
            build(2*index +1, lo, mid, val); // build left sub tree
            build(2*index +2, mid+1, hi, val); // build right sub tree
            segTree[index] = Math.max(segTree[2*index + 1], segTree[2*index + 2]); // maximum seats in a row for subtrees
            sum[index] = sum[2*index + 1] + sum[2*index + 2]; // sum of seats in a range
        }

        private void update(int index, int lo, int hi, int pos, int val){
            /**
                Method to update segment tree based on the available seats in a row
            **/
            if(lo == hi){
                segTree[index] = val;
                sum[index] = val;
                return;
            }
            int mid = (lo + hi) / 2;
            if (pos <= mid) {  // position to update is in left
               update(2 * index + 1, lo, mid, pos, val);
            } else { // position to update is in right
                update(2 * index + 2,  mid+1, hi, pos, val);
            }
			// update segment tree and "sum" based on the update in "pos" index
            segTree[index] = Math.max(segTree[2*index + 1] , segTree[2*index + 2]);
            sum[index] = sum[2*index + 1] + sum[2*index + 2];
        }

        public void update(int pos, int val){
            update(0, 0, n - 1 , pos, val);
        }

        public int gatherQuery(int k, int maxRow){
            return gatherQuery(0, 0, n - 1 , k, maxRow);
        }

        private int gatherQuery(int index, int lo, int hi, int k, int maxRow){
            /**
                Method to check if seats are available in a single row
            **/
            if(segTree[index] < k || lo > maxRow)
                return -1;
            if(lo == hi) return lo;
            int mid = (lo + hi) / 2;
            int c = gatherQuery(2*index + 1, lo, mid, k, maxRow);
            if(c == -1){
                c = gatherQuery(2*index + 2, mid +1, hi, k, maxRow);
            }
            return c;
        }

        public long sumQuery(int k, int maxRow){
            return sumQuery(0, 0, n-1, k, maxRow);
        }

        private long sumQuery(int index, int lo, int hi, int l, int r){
            if(lo > r || hi < l ) return 0;  // not in range
            if(lo >= l && hi <= r) return sum[index]; // in range
            int mid = (lo + hi)/2;
            return sumQuery(2*index+1, lo, mid, l, r) + sumQuery(2*index+2, mid+1, hi, l, r);
        }
    }

    SegTree segTree;
    int[] rowSeats; // stores avaiable seats in a row, helps to find the vacant seat in a row

    public BookMyShow(int n, int m) {
        segTree = new SegTree(n, m);
        rowSeats = new int[n];
        Arrays.fill(rowSeats, m);  // initialize vacant seats count to "m" for all the rows
    }


    public int[] gather(int k, int maxRow) {
        int row = segTree.gatherQuery(k, maxRow); // find row which has k seats
        if(row == -1) return new int[]{}; // can't find a row with k seats
        int col = segTree.m - rowSeats[row]; // find column in the row which has k seats
        rowSeats[row] -= k; // reduce the seats
        segTree.update(row, rowSeats[row]); // update the segment tree
        return new int[]{row, col};

    }

    public boolean scatter(int k, int maxRow) {
        long sum = segTree.sumQuery(0, maxRow); // find the sum for the given range [0, maxRow]
        if(sum < k) return false; // can't find k seats in [0, maxRow]

        for(int i=0; i<=maxRow && k !=0 ; i++){
            if(rowSeats[i] > 0){                       // if current row has seats then allocate those seats
                long t = Math.min(rowSeats[i], k);
                rowSeats[i] -= t;
                k -= t;
                segTree.update(i,rowSeats[i]);  // update the segment tree
            }
        }
        return true;
    }
}
```

### Complexity Analysis

#### Time Complexity: $O(logn)$

> **Reason**: Segment tree operations are build: $O(n)$, update: $O(log n)$, gather query: $O(log n)$, sum query: $O(log n)$; BookMyShow operations are constructor: $O(n)$, gather: $O(log n)$, scatter: $O(n log n)$.

#### Space Complexity: $O(n)$

> **Reason**: The space complexity is $O(n)$, The **'rowSeats'** array requires O(n) space to store the seat counts for each row.

# References

- **LeetCode Problem:** [Booking Concert Tickets in Groups](https://leetcode.com/problems/booking-concert-tickets-in-groups/description/)
- **Solution Link:** [Booking Concert Tickets in Groups Solution on LeetCode](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
