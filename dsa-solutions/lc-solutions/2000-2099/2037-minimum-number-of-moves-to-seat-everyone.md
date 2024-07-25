---
id: minimum-number-of-moves-to-seat-everyone
title: Minimum Number of Moves to Seat Everyone
sidebar_label: 2037-Minimum Number of Moves to Seat Everyone
tags:
  - Brute Force
  - Greedy
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to theMinimum Number of Moves to Seat Everyone problem on LeetCode."
sidebar_position: 2
---



## Problem Description

Given `n` available seats and `n` students standing in a room, you are given an array `seats` of length `n`, where `seats[i]` is the position of the `i`-th seat. You are also given the array `students` of length `n`, where `students[j]` is the position of the `j`-th student. You can increase or decrease the position of the `i`-th student by 1 any number of times. Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

### Examples

**Example 1:**

```
Input: seats = [3,1,5], students = [2,7,4]
Output: 4
Explanation: The students are moved as follows:
- The first student is moved from position 2 to position 1 using 1 move.
- The second student is moved from position 7 to position 5 using 2 moves.
- The third student is moved from position 4 to position 3 using 1 move.
In total, 1 + 2 + 1 = 4 moves were used.
```

**Example 2:**

```
Input: seats = [4,1,5,9], students = [1,3,2,6]
Output: 7
Explanation: The students are moved as follows:
- The first student is not moved.
- The second student is moved from position 3 to position 4 using 1 move.
- The third student is moved from position 2 to position 5 using 3 moves.
- The fourth student is moved from position 6 to position 9 using 3 moves.
In total, 0 + 1 + 3 + 3 = 7 moves were used.
```

**Example 3:**

```
Input: seats = [2,2,6,6], students = [1,3,2,6]
Output: 4
Explanation: Note that there are two seats at position 2 and two seats at position 6.
The students are moved as follows:
- The first student is moved from position 1 to position 2 using 1 move.
- The second student is moved from position 3 to position 6 using 3 moves.
- The third student is not moved.
- The fourth student is not moved.
In total, 1 + 3 + 0 + 0 = 4 moves were used.
```

### Constraints

- `n == seats.length == students.length`
- `1 <= n <= 100`
- `1 <= seats[i], students[j] <= 100`

---

## Solution for Minimum Moves to Seat Students Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized greedy approach. The brute force approach examines all possible assignments of students to seats, while the greedy approach sorts the seats and students and pairs them to minimize the total number of moves.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force (Naive)

The brute force approach iterates through each possible permutation of the students and calculates the total number of moves for each permutation to find the minimum.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int minMovesToSeat(std::vector<int>& seats, std::vector<int>& students) {
        int min_moves = INT_MAX;
        std::sort(seats.begin(), seats.end());
        std::sort(students.begin(), students.end());
        do {
            int moves = 0;
            for (int i = 0; i < seats.size(); ++i) {
                moves += abs(seats[i] - students[i]);
            }
            min_moves = std::min(min_moves, moves);
        } while (std::next_permutation(students.begin(), students.end()));
        return min_moves;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
import java.util.Arrays;

class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int minMoves = Integer.MAX_VALUE;

        do {
            int moves = 0;
            for (int i = 0; i < seats.length; i++) {
                moves += Math.abs(seats[i] - students[i]);
            }
            minMoves = Math.min(minMoves, moves);
        } while (nextPermutation(students));

        return minMoves;
    }

    private boolean nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        if (i < 0) {
            return false;
        }
        int j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
        reverse(nums, i + 1, nums.length - 1);
        return true;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
import itertools

class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        min_moves = float('inf')

        for perm in itertools.permutations(students):
            moves = sum(abs(seat - student) for seat, student in zip(seats, perm))
            min_moves = min(min_moves, moves)

        return min_moves
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n!*n)$ due to generating all permutations and calculating moves.
- Space Complexity: $O(n)$ for storing permutations and temporary variables.
- Where `n` is the length of the seats and students arrays.
- The time complexity is $O(n!*n)$ because we generate all permutations.
- The space complexity is $O(n)$ because we store temporary variables and permutations.

</tabItem>
<tabItem value="Greedy" label="Greedy">

### Approach 2: Greedy (Optimized)

The greedy approach involves sorting the seats and students arrays and then pairing each student with the corresponding seat. This ensures that the total number of moves is minimized.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int minMovesToSeat(std::vector<int>& seats, std::vector<int>& students) {
        std::sort(seats.begin(), seats.end());
        std::sort(students.begin(), students.end());
        
        int moves = 0;
        for (int i = 0; i < seats.size(); ++i) {
            moves += abs(seats[i] - students[i]);
        }
        
        return moves;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
import java.util.Arrays;

class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        
        int moves = 0;
        for (int i = 0; i < seats.length; ++i) {
            moves += Math.abs(seats[i] - students[i]);
        }
        
        return moves;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        
        moves = 0
        for seat, student in zip(seats, students):
            moves += abs(seat - student)
        
        return moves
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(nlogn)$ due to sorting.
- Space Complexity: $O(1)$ if sorting in place.
- Where `n` is the length of the seats and

 students arrays.
- The time complexity is $O(nlogn)$ because of the sorting operations.
- The space complexity is $O(1)$ if the sorting is done in place, otherwise $O(n)$.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>