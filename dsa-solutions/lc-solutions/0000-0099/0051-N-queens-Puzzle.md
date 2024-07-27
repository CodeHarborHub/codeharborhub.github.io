---
id: n-queens-uzzle
title: N-Queens Puzzle
sidebar_label: N-Queens Puzzle
tags: 
    - Backtracking 
    - Recursion 
    - Algorithm
description: The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [n-queens-puzzle](https://leetcode.com/problems/N-Queens-Puzzle/description/) | [N-Queens-Puzzle Solution on LeetCode](https://leetcode.com/problems/N-Queens-Puzzle/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description:

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

### Example 1

- **Input:** `n = 4`
- **Output:** `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`
- **Explanation:** `There exist two distinct solutions to the 4-queens puzzle as shown above`

### Example 2

- **Input:** `n = 1`
- **Output:** `[["Q"]]`

### Constraints

- $1 \leq n \leq 9$

### Approach
The problem can be solved using a backtracking approach. The idea is to place queens one by one on the board and check if the current placement is safe. If it is, we proceed to place the next queen. If it is not, we backtrack and try the next possible position.

### Solution in different languages

### Solution in Python
```python
def solveNQueens(n):
    def is_not_under_attack(row, col):
        return not (cols[col] or hills[row - col] or dales[row + col])

    def place_queen(row, col):
        queens.add((row, col))
        cols[col] = 1
        hills[row - col] = 1
        dales[row + col] = 1

    def remove_queen(row, col):
        queens.remove((row, col))
        cols[col] = 0
        hills[row - col] = 0
        dales[row + col] = 0

    def add_solution():
        solution = []
        for _, col in sorted(queens):
            solution.append('.' * col + 'Q' + '.' * (n - col - 1))
        solutions.append(solution)

    def backtrack(row = 0):
        for col in range(n):
            if is_not_under_attack(row, col):
                place_queen(row, col)
                if row + 1 == n:
                    add_solution()
                else:
                    backtrack(row + 1)
                remove_queen(row, col)

    solutions = []
    queens = set()
    cols = [0] * n
    hills = [0] * (2 * n - 1)
    dales = [0] * (2 * n - 1)
    backtrack()
    return solutions
```

### Solution in Java
```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> solutions = new ArrayList<>();
        Set<Integer> cols = new HashSet<>();
        Set<Integer> hills = new HashSet<>();
        Set<Integer> dales = new HashSet<>();
        backtrack(solutions, new ArrayList<>(), cols, hills, dales, n, 0);
        return solutions;
    }

    private void backtrack(List<List<String>> solutions, List<Integer> queens, Set<Integer> cols, Set<Integer> hills, Set<Integer> dales, int n, int row) {
        if (row == n) {
            solutions.add(createBoard(queens, n));
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols.contains(col) || hills.contains(row - col) || dales.contains(row + col)) {
                continue;
            }
            queens.add(col);
            cols.add(col);
            hills.add(row - col);
            dales.add(row + col);
            backtrack(solutions, queens, cols, hills, dales, n, row + 1);
            queens.remove(queens.size() - 1);
            cols.remove(col);
            hills.remove(row - col);
            dales.remove(row + col);
        }
    }

    private List<String> createBoard(List<Integer> queens, int n) {
        List<String> board = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            char[] row = new char[n];
            for (int j = 0; j < n; j++) {
                row[j] = '.';
            }
            row[queens.get(i)] = 'Q';
            board.add(new String(row));
        }
        return board;
    }
}
```

### Solution in C++
```cpp
class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> solutions;
        vector<int> queens(n, -1);
        vector<int> cols(n, 0), hills(2 * n - 1, 0), dales(2 * n - 1, 0);
        backtrack(solutions, queens, n, 0, cols, hills, dales);
        return solutions;
    }

private:
    void backtrack(vector<vector<string>>& solutions, vector<int>& queens, int n, int row, vector<int>& cols, vector<int>& hills, vector<int>& dales) {
        if (row == n) {
            solutions.push_back(createBoard(queens, n));
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols[col] || hills[row - col + n - 1] || dales[row + col]) {
                continue;
            }
            queens[row] = col;
            cols[col] = hills[row - col + n - 1] = dales[row + col] = 1;
            backtrack(solutions, queens, n, row + 1, cols, hills, dales);
            cols[col] = hills[row - col + n - 1] = dales[row + col] = 0;
        }
    }

    vector<string> createBoard(vector<int>& queens, int n) {
        vector<string> board;
        for (int i = 0; i < n; i++) {
            string row(n, '.');
            row[queens[i]] = 'Q';
            board.push_back(row);
        }
        return board;
    }
};
```

### Solution in C
```c
#include <stdio.h>
#include <stdlib.h>

void addSolution(int **solutions, int *queens, int n, int *returnSize) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            solutions[*returnSize][i * n + j] = (queens[i] == j) ? 'Q' : '.';
        }
    }
    (*returnSize)++;
}

void backtrack(int **solutions, int *queens, int *cols, int *hills, int *dales, int n, int row, int *returnSize) {
    if (row == n) {
        addSolution(solutions, queens, n, returnSize);
        return;
    }
    for (int col = 0; col < n; col++) {
        if (cols[col] || hills[row - col + n - 1] || dales[row + col]) {
            continue;
        }
        queens[row] = col;
        cols[col] = hills[row - col + n - 1] = dales[row + col] = 1;
        backtrack(solutions, queens, cols, hills, dales, n, row + 1, returnSize);
        cols[col] = hills[row - col + n - 1] = dales[row + col] = 0;
    }
}

char*** solveNQueens(int n, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    int totalSolutions = 1;
    for (int i = 1; i <= n; i++) totalSolutions *= i;

    char ***solutions = (char ***)malloc(totalSolutions * sizeof(char **));
    *returnColumnSizes = (int *)malloc(totalSolutions * sizeof(int));

    for (int i = 0; i < totalSolutions; i++) {
        solutions[i] = (char **)malloc(n * sizeof(char *));
        for (int j = 0; j < n; j++) {
            solutions[i][j] = (char *)malloc((n + 1) * sizeof(char));
        }
        (*returnColumnSizes)[i] = n;
    }

    int *queens = (int *)malloc(n * sizeof(int));
    int *cols = (int *)malloc(n * sizeof(int));
    int *hills = (int *)malloc((2 * n - 1) * sizeof(int));
    int *dales = (int *)malloc((2 * n - 1) * sizeof(int));
    for (int i = 0; i < n; i++) cols[i] = 0;
    for (int i = 0; i < 2 * n - 1; i++) hills[i] = dales[i] = 0;

    backtrack(solutions, queens, cols, hills, dales, n, 0, returnSize);

    return solutions;
}
```

### Solution in JavaScript
```js
var solveNQueens = function(n) {
    const solutions = [];
    const queens = [];
    const cols = new Set();
    const hills = new Set();
    const dales = new Set();

    const backtrack = (row = 0) => {
        if (row === n) {
            solutions.push(createBoard(queens, n));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || hills.has(row - col) || dales.has(row + col)) {
                continue;
            }
            queens.push(col);
            cols.add(col);
            hills.add(row - col);
            dales.add(row + col);
            backtrack(row + 1);
            queens.pop();
            cols.delete(col);
            hills.delete(row - col);
            dales.delete(row + col);
        }
    };

    const createBoard = (queens, n) => {
        const board = [];
        for (let i = 0; i < n; i++) {
            let row = '.'.repeat(n).split('');
            row[queens[i]] = 'Q';
            board.push(row.join(''));
        }
        return board;
    };

    backtrack();
    return solutions;
};
```

### Step-by-step Algorithm

1. Initialize Data Structures:
- Create a list to store the solutions.
- Create sets to keep track of columns, hills (main diagonals), and dales (anti-diagonals) that are under attack.

2. Backtracking Function:
- Try placing a queen in each column of the current row.
- Check if the current column, hill, or dale is under attack using the sets.
- If placing a queen is safe, add the column to the list of queens and mark the column, hill, and dale as occupied.
- Recursively call the backtracking function for the next row.
- If a valid solution is found (when row equals n), add the solution to the list of solutions.
- Backtrack by removing the queen and unmarking the column, hill, and dale.
3. Create Board Representation:
- Convert the list of queen positions into the board representation as a list of strings.

### Conclusion
The n-queens puzzle, solved using backtracking, ensures no two queens attack each other on an n x n chessboard. Solutions are efficiently implemented in Python, Java, C++, C, and JavaScript.
