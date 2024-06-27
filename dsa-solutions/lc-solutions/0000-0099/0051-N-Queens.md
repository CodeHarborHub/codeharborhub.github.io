---
id: n-queens
title: N-Queens (LeetCode)
sidebar_label: 0051-N-Queens
tags:
    - Array
    - Backtracking
description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other."
---

## Problem Description

| Problem Statement                                                                                           | Solution Link                                                                                                                               | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [N-Queen](https://leetcode.com/problems/n-queens/)                                         | [N-Queen](https://leetcode.com/problems/n-queens/) | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

### Problem Description

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


### Examples

#### Example 1

- **Input:** `n = 4`
- **Output:** `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`
- **Explanation:** There exist two distinct solutions to the 4-queens puzzle as shown above.

#### Example 2

- **Input:** `n = 1`
- **Output:** `[["Q"]]`
- **Explanation:** Here the number of rows and column is one thatswhy queen is placed in row 1 and column 1.

 

### Constraints

- `1 <= n <= 9`

### Approach

To solve the problem, we can use the Backtracking technique technique. Here is the step-by-step approach:

1. **Initialize :**
    -Start in the leftmost column
    -If all queens are placed return true
    -Try all rows in the current column. Do the following for every row.
2. **Iterate Through the Array:**
   - Try all rows in the current column. Do the following for every row.
    -If the queen can be placed safely in this row
    -Then mark this [row, column] as part of the solution and recursively check if placing queen here leads to a solution.
    -If placing the queen in [row, column] leads to a solution then return true.
    -If placing queen doesn’t lead to a solution then unmark this [row, column] then backtrack and try other rows.

3. **Return Result:**
    -If all rows have been tried and valid solution is not found return false to trigger backtracking.

### Solution Code

#### Python

```
# Python3 program to solve N Queen
# Problem using backtracking
 
global N
N = 4
 
 
def printSolution(board):
    for i in range(N):
        for j in range(N):
            if board[i][j] == 1:
                print("Q",end=" ")
            else:
                print(".",end=" ")
        print()
 
 
# A utility function to check if a queen can
# be placed on board[row][col]. Note that this
# function is called when "col" queens are
# already placed in columns from 0 to col -1.
# So we need to check only left side for
# attacking queens
def isSafe(board, row, col):
 
    # Check this row on left side
    for i in range(col):
        if board[row][i] == 1:
            return False
 
    # Check upper diagonal on left side
    for i, j in zip(range(row, -1, -1),
                    range(col, -1, -1)):
        if board[i][j] == 1:
            return False
 
    # Check lower diagonal on left side
    for i, j in zip(range(row, N, 1),
                    range(col, -1, -1)):
        if board[i][j] == 1:
            return False
 
    return True
 
 
def solveNQUtil(board, col):
 
    # Base case: If all queens are placed
    # then return true
    if col >= N:
        return True
 
    # Consider this column and try placing
    # this queen in all rows one by one
    for i in range(N):
 
        if isSafe(board, i, col):
 
            # Place this queen in board[i][col]
            board[i][col] = 1
 
            # Recur to place rest of the queens
            if solveNQUtil(board, col + 1) == True:
                return True
 
            # If placing queen in board[i][col
            # doesn't lead to a solution, then
            # queen from board[i][col]
            board[i][col] = 0
 
    # If the queen can not be placed in any row in
    # this column col then return false
    return False
 
 
# This function solves the N Queen problem using
# Backtracking. It mainly uses solveNQUtil() to
# solve the problem. It returns false if queens
# cannot be placed, otherwise return true and
# placement of queens in the form of 1s.
# note that there may be more than one
# solutions, this function prints one of the
# feasible solutions.
def solveNQ():
    board = [[0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]]
 
    if solveNQUtil(board, 0) == False:
        print("Solution does not exist")
        return False
 
    printSolution(board)
    return True
 

```

#### Java
```

public class Solution {
	final int N = 4;

	// A utility function to print solution
	void printSolution(int board[][])
	{
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				if (board[i][j] == 1)
					System.out.print("Q ");
				else
					System.out.print(". ");
			}
			System.out.println();
		}
	}

	// A utility function to check if a queen can
	// be placed on board[row][col]. Note that this
	// function is called when "col" queens are already
	// placeed in columns from 0 to col -1. So we need
	// to check only left side for attacking queens
	boolean isSafe(int board[][], int row, int col)
	{
		int i, j;

		// Check this row on left side
		for (i = 0; i < col; i++)
			if (board[row][i] == 1)
				return false;

		// Check upper diagonal on left side
		for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
			if (board[i][j] == 1)
				return false;

		// Check lower diagonal on left side
		for (i = row, j = col; j >= 0 && i < N; i++, j--)
			if (board[i][j] == 1)
				return false;

		return true;
	}

	// A recursive utility function to solve N
	// Queen problem
	boolean solveNQUtil(int board[][], int col)
	{
		// Base case: If all queens are placed
		// then return true
		if (col >= N)
			return true;

		// Consider this column and try placing
		// this queen in all rows one by one
		for (int i = 0; i < N; i++) {
			
			// Check if the queen can be placed on
			// board[i][col]
			if (isSafe(board, i, col)) {
				
				// Place this queen in board[i][col]
				board[i][col] = 1;

				// Recur to place rest of the queens
				if (solveNQUtil(board, col + 1) == true)
					return true;

				// If placing queen in board[i][col]
				// doesn't lead to a solution then
				// remove queen from board[i][col]
				board[i][col] = 0; // BACKTRACK
			}
		}

		// If the queen can not be placed in any row in
		// this column col, then return false
		return false;
	}

	// This function solves the N Queen problem using
	// Backtracking. It mainly uses solveNQUtil () to
	// solve the problem. It returns false if queens
	// cannot be placed, otherwise, return true and
	// prints placement of queens in the form of 1s.
	// Please note that there may be more than one
	// solutions, this function prints one of the
	// feasible solutions.
	boolean Solution()
	{
		int board[][] = { { 0, 0, 0, 0 },
						{ 0, 0, 0, 0 },
						{ 0, 0, 0, 0 },
						{ 0, 0, 0, 0 } };

		if (solveNQUtil(board, 0) == false) {
			System.out.print("Solution does not exist");
			return false;
		}

		printSolution(board);
		return true;
	}
}

```

#### C++
```

#include <bits/stdc++.h>
#define N 4
using namespace std;

// A utility function to print solution
void printSolution(int board[N][N])
{
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++)
		if(board[i][j])
			cout << "Q ";
		else cout<<". ";
		printf("\n");
	}
}

// A utility function to check if a queen can
// be placed on board[row][col]. Note that this
// function is called when "col" queens are
// already placed in columns from 0 to col -1.
// So we need to check only left side for
// attacking queens
bool isSafe(int board[N][N], int row, int col)
{
	int i, j;

	// Check this row on left side
	for (i = 0; i < col; i++)
		if (board[row][i])
			return false;

	// Check upper diagonal on left side
	for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
		if (board[i][j])
			return false;

	// Check lower diagonal on left side
	for (i = row, j = col; j >= 0 && i < N; i++, j--)
		if (board[i][j])
			return false;

	return true;
}

// A recursive utility function to solve N
// Queen problem
bool solveNQUtil(int board[N][N], int col)
{
	// base case: If all queens are placed
	// then return true
	if (col >= N)
		return true;

	// Consider this column and try placing
	// this queen in all rows one by one
	for (int i = 0; i < N; i++) {
		
		// Check if the queen can be placed on
		// board[i][col]
		if (isSafe(board, i, col)) {
			
			// Place this queen in board[i][col]
			board[i][col] = 1;

			// recur to place rest of the queens
			if (solveNQUtil(board, col + 1))
				return true;

			// If placing queen in board[i][col]
			// doesn't lead to a solution, then
			// remove queen from board[i][col]
			board[i][col] = 0; // BACKTRACK
		}
	}

	// If the queen cannot be placed in any row in
	// this column col then return false
	return false;
}

// This function solves the N Queen problem using
// Backtracking. It mainly uses solveNQUtil() to
// solve the problem. It returns false if queens
// cannot be placed, otherwise, return true and
// prints placement of queens in the form of 1s.
// Please note that there may be more than one
// solutions, this function prints one of the
// feasible solutions.
bool Solution()
{
	int board[N][N] = { { 0, 0, 0, 0 },
						{ 0, 0, 0, 0 },
						{ 0, 0, 0, 0 },
						{ 0, 0, 0, 0 } };

	if (solveNQUtil(board, 0) == false) {
		cout << "Solution does not exist";
		return false;
	}

	printSolution(board);
	return true;
}
```

### Conclusion

The N-Queens problem is a classic example of a combinatorial optimization problem that has been extensively studied in the field of computer science, particularly within the realms of algorithms and artificial intelligence. The problem is defined as placing N queens on an N×N chessboard in such a way that no two queens can attack each other. This means that no two queens can be placed in the same row, column, or diagonal.