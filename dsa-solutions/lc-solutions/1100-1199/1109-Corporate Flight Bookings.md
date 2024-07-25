---
id: corporate-flight-bookings
title: Corporate Flight Bookings
sidebar_label: Corporate Flight Bookings
tags: [Array, Prefix Sum, C++, Python, Java]
description: Solve the problem of calculating the total number of seats reserved for each flight using the booking intervals and prefix sum technique.
---

## Problem Statement

### Problem Description

There are `n` flights that are labeled from 1 to `n`.

You are given an array of flight bookings `bookings`, where `bookings[i] = [firsti, lasti, seatsi]` represents a booking for flights `firsti` through `lasti` (inclusive) with `seatsi` seats reserved for each flight in the range.

Return an array `answer` of length `n`, where `answer[i]` is the total number of seats reserved for flight `i`.

### Example

**Example 1:**

```
Input: bookings = [[1, 2, 10], [2, 3, 20], [2, 5, 25]], n = 5
Output: [10, 55, 45, 25, 25]
```
**Explanation:**
Flight labels: 1 2 3 4 5
Booking 1 reserved: 10 10
Booking 2 reserved: 20 20
Booking 3 reserved: 25 25 25 25
Total seats: 10 55 45 25 25
Hence, answer = [10, 55, 45, 25, 25]

**Example 2:**
```
Input: bookings = [[1, 2, 10], [2, 2, 15]], n = 2
Output: [10, 25]
```
**Explanation:**
Flight labels: 1 2
Booking 1 reserved: 10 10
Booking 2 reserved: 15
Total seats: 10 25
Hence, answer = [10, 25]


### Constraints

- 1 &lt;= `n` &lt;= 2 * 10^4
- 1 &lt;= `bookings.length` &lt;= 2 * 10^4
- `bookings[i].length` == 3
- 1 &lt;= `firsti` &lt;= `lasti` &lt;= `n`
- 1 &lt;= `seatsi` &lt;= 10^4

## Solution

### Intuition

To solve this problem efficiently, we use a difference array (also known as a prefix sum array). The idea is to use an auxiliary array to keep track of seat reservations in a way that allows us to compute the final seat count for each flight in a single pass.

1. **Use a Difference Array**: 
   - Create an array `arr` of size `n+1` to track the seat changes.
   - For each booking `[firsti, lasti, seatsi]`, increment `arr[firsti-1]` by `seatsi` and decrement `arr[lasti]` by `seatsi` (if `lasti < n`).

2. **Compute the Prefix Sum**:
   - Traverse the difference array to compute the prefix sum which gives the total number of seats reserved for each flight.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: 
  - The time complexity is $O(m + n)$, where `m` is the number of bookings and `n` is the number of flights. This is due to the single pass required for processing the bookings and computing the prefix sum.

- **Space Complexity**:
  - The space complexity is $O(n)$, which is required to store the difference array and the final answer array.

### Code

#### C++

```cpp
class Solution {
public:
    vector<int> corpFlightBookings(vector<vector<int>>& bookings, int n) {
        vector<int> arr(n + 1, 0);
        for (const auto& booking : bookings) {
            int start = booking[0] - 1;
            int end = booking[1];
            int seats = booking[2];
            arr[start] += seats;
            if (end &lt; n) {
                arr[end] -= seats;
            }
        }
        
        vector<int> answer(n);
        answer[0] = arr[0];
        for (int i = 1; i &lt; n; ++i) {
            answer[i] = answer[i - 1] + arr[i];
        }
        return answer;
    }
};
```
#### Python
```python
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        arr = [0] * (n + 1)
        for start, end, seats in bookings:
            arr[start - 1] += seats
            if end &lt; n:
                arr[end] -= seats
        
        answer = [0] * n
        answer[0] = arr[0]
        for i in range(1, n):
            answer[i] = answer[i - 1] + arr[i]
        
        return answer
```
#### Java
```java
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] arr = new int[n + 1];
        for (int[] booking : bookings) {
            int start = booking[0] - 1;
            int end = booking[1];
            int seats = booking[2];
            arr[start] += seats;
            if (end &lt; n) {
                arr[end] -= seats;
            }
        }
        
        int[] answer = new int[n];
        answer[0] = arr[0];
        for (int i = 1; i &lt; n; i++) {
            answer[i] = answer[i - 1] + arr[i];
        }
        
        return answer;
    }
}
```
