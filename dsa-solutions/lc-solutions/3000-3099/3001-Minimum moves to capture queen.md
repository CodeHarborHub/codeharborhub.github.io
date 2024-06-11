---
id: Minimum-Moves-to-Capture-The-Queen
title: Minimum Moves to Capture The Queen
sidebar_label: 3001 - Minimum Moves to Capture The Queen
tags:
  - Array
description: "This is a solution to the Minimum Moves to Capture The Queen problem on LeetCode."
---

## Problem Description

There is a 1-indexed 8 x 8 chessboard containing 3 pieces.

You are given 6 integers a, b, c, d, e, and f where:

(a, b) denotes the position of the white rook.
(c, d) denotes the position of the white bishop.
(e, f) denotes the position of the black queen.
Given that you can only move the white pieces, return the minimum number of moves required to capture the black queen.

Note that:

Rooks can move any number of squares either vertically or horizontally, but cannot jump over other pieces.
Bishops can move any number of squares diagonally, but cannot jump over other pieces.
A rook or a bishop can capture the queen if it is located in a square that they can move to.
The queen does not move.

### Examples

**Example 1:**

```
Input: a = 1, b = 1, c = 8, d = 8, e = 2, f = 3
Output: 2
Explanation: We can capture the black queen in two moves by moving the white rook to (1, 3) then to (2, 3).
It is impossible to capture the black queen in less than two moves since it is not being attacked by any of the pieces at the beginning.

```

**Example 2:**

```
Input: a = 5, b = 3, c = 3, d = 4, e = 5, f = 2
Output: 1
Explanation: We can capture the black queen in a single move by doing one of the following:
- Move the white rook to (5, 2).
- Move the white bishop to (5, 2).

```

### Constraints

- `1 <= a, b, c, d, e, f <= 8`
- `No two pieces are on the same square.`

## Solution for Minimum Moves to Capture The Queen Problem

### Intuition

Same Row or Column:
If the queen is in the same row (a == e) or the same column (b == f), it means it can be captured in one move.

Same Diagonal:
If the absolute difference between the columns (abs(c - e)) is equal to the absolute difference between the rows (abs(d - f)), it means the queen is on the same diagonal and can be captured in one move.

Otherwise:
If none of the above conditions are met, it implies that the queen cannot be captured in one move.

Pieces in Between
For suppose a rook is standing in the way of bishop and vice-versa the min no of moves is two , to check whether the piece in between i have used the manhattan distance.

### Approach

Check for Same Row, Column, or Diagonal:
If the queen is in the same row, column, or diagonal as the starting point, calculate the Manhattan distance.

Check for Obstacles:
While calculating the Manhattan distance, inspect the squares between the starting point and the queen's position.
If any square along the path contains another piece, consider it an obstacle.

Minimum Moves Calculation:
Assess the minimum number of moves based on the presence of obstacles.
If no obstacles are present, it's likely a direct capture in one move.
If obstacles are encountered, it might require at least two moves to maneuver around them.

Handle Piece-Specific Scenarios:
Adjust the approach based on the specific pieces involved.
For a rook, obstacles in the same row or column are significant.
For a bishop, obstacles along diagonals need consideration.

Return Minimum Moves:
Return the calculated minimum number of moves.

### Solution Code

#### Python

```py
class Solution:
    def minMovesToCaptureTheQueen(self, a: int, b: int, c: int, d: int, e: int, f: int) -> int:
        # rock and queen in the same row or col
        if a == e: # same row
            if a == c and (d - b) * (d - f) < 0: # bishop on the same row and between rock and queen
                return 2
            else:
                return 1
        elif b == f: # same col
            if b == d and (c - a) * (c - e) < 0:
                return 2
            else:
                return 1
        # bishop and queen in the same diagonal
        elif c - e == d - f: # \ diagonal
            if a - e == b - f and (a - c) * (a - e) < 0:
                return 2
            else:
                return 1
        elif c - e == f - d: # / diagonal
            if a - e == f - b and (a - c) * (a - e) < 0:
                return 2
            else:
                return 1
        return 2



```

#### Java

```java
=public int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
	// ----- Rook -----
	if(a==e){
		if(a==c && ((b<d && d<f) || (f<d && d<b))) {
			return 2;
		}else return 1;

	}else if(b==f) {
		if(b==d && ((a<c && c<e) || (e<c && c<a))){
			return 2;
		}else return 1;
	}


	// ----- Bishop -----
	// flag -> true means rook is between bishop and queen - so we need to move rook
	boolean flag = false;
	for(int i=c, j=d; i>0&&j>0; i--, j--){
		if(i==a && j==b) flag = true;
		else if(i==e && j==f) {
			if(flag) return 2;
			else return 1;
		}
	}

	flag =false;
	for(int i=c, j=d; i>0&&j<9; i--, j++){
		if(i==a && j==b) flag = true;
		else if(i==e && j==f) {
			if(flag) return 2;
			else return 1;
		}
	}

	flag = false;
	for(int i=c, j=d; i<9&&j<9; i++, j++){
		if(i==a && j==b) flag = true;
		else if(i==e && j==f) {
			if(flag) return 2;
			else return 1;
		}
	}

	flag = false;
	for(int i=c, j=d; i<9&&j>0; i++, j--){
		if(i==a && j==b) flag = true;
		else if(i==e && j==f) {
			if(flag) return 2;
			else return 1;
		}
	}

	// for every condition Rook can capture the queen in 2 steps
	return 2;
}

```

#### C++

```cpp
class Solution {
public:
    int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
        if(a == e){
            if(c == e){
                int d0 = abs(b-f) ;
                int d1 = abs(b-d) ;
                int d2 = abs(d-f);
                if(d0 == d1+d2)
                    return 2;
                else
                    return 1;
            }
            else
                return 1;
        }
        else if(b == f){
            if(d == f){
                int d0 = abs(a-e) ;
                int d1 = abs(a-c);
                int d2 = abs(c-e) ;
                if(d0 == d1+d2)
                    return 2;
                else
                    return 1;
            }
            else
                return 1;

        }
        else if(abs(c-e) == abs(d - f)){
            if(abs(a-c) == abs(b-d)) {
                int d0 = abs(c-e) + abs(d-f);
                int d1 = abs(a-c) + abs(b-d);
                int d2 = abs(e-a) + abs(f-b);
                if(d0 == d1+d2)
                    return 2;
                else
                    return 1;
            }
            else
                return 1;
        }
        else
            return 2;

    }
};
```

### Conclusion

THis code efficectively calculates the minimum number of moves using constant space and constant time

- **LeetCode Problem**: [Minimum Moves to Capture The Queen](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4577719/beats-100-time-complexity-o-1)
