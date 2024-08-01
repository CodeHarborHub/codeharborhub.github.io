---
id: minimum-moves-to-capture-the-queen
title: Minimum Moves to Capture the Queen (Leetcode)
sidebar_label: 3000-Minimum Moves to Capture the Queen
description: Solution for Minimum Moves to Capture the Queen on a Chessboard
---

## Problem Description

You are given a 1-indexed 8 x 8 chessboard containing 3 pieces.

You are given 6 integers ( a, b, c, d, e, f ) where:
- ((a, b)) denotes the position of the white rook.
- ((c, d)) denotes the position of the white bishop.
- ((e, f)) denotes the position of the black queen.

Given that you can only move the white pieces, return the minimum number of moves required to capture the black queen.

**Note:**
- Rooks can move any number of squares either vertically or horizontally, but cannot jump over other pieces.
- Bishops can move any number of squares diagonally, but cannot jump over other pieces.
- A rook or a bishop can capture the queen if it is located in a square that they can move to.
- The queen does not move.

### Examples

#### Example 1

- **Input:** ( a = 1, b = 1, c = 8, d = 8, e = 2, f = 3 )
- **Output:** 2
- **Explanation:** We can capture the black queen in two moves by moving the white rook to (1, 3) then to (2, 3). It is impossible to capture the black queen in less than two moves since it is not being attacked by any of the pieces at the beginning.

#### Example 2

- **Input:** $a = 5, b = 3, c = 3, d = 4, e = 5, f = 2$
- **Output:** 1
- **Explanation:** We can capture the black queen in a single move by doing one of the following: 
  - Move the white rook to $(5, 2)$.
  - Move the white bishop to $(5, 2)$.

### Constraints

- $1 \leq a, b, c, d, e, f \leq 8$
- No two pieces are on the same square.

## Solution

To solve this problem, we need to determine the minimum number of moves required for either the white rook or the white bishop to capture the black queen on an 8x8 chessboard. We'll use a breadth-first search (BFS) approach to explore the board and find the shortest path to capture the queen.

### Approach

1. **Define the possible moves:**
   - **Rook**: The rook can move vertically or horizontally any number of squares.
   - **Bishop**: The bishop can move diagonally any number of squares.

2. **Breadth-First Search (BFS):**
   - Use BFS to explore the board from the initial positions of the rook and the bishop.
   - Track the positions we've already visited to avoid processing the same position multiple times.

3. **Initial Setup:**
   - Use a queue to store the positions of the rook and the bishop along with the move count.
   - Use a set to track visited positions.

4. **Capture Conditions:**
   - If either the rook or the bishop can move to the queen's position in the current step, return the move count.

### Solution Code

#### Python

```python
from collections import deque

def minMovesToCaptureTheQueen(rookX, rookY, bishopX, bishopY, queenX, queenY):
    rookDirections = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    
    bishopDirections = [(1, 1), (1, -1), (-1, 1), (-1, -1)]
    queue = deque([(rookX, rookY, 0, 0), (bishopX, bishopY, 0, 1)]) 
    
    visited = set()
    visited.add((rookX, rookY, 0))
    visited.add((bishopX, bishopY, 1))
    
    while queue:
        x, y, moves, pieceType = queue.popleft()
        
        if (x, y) == (queenX, queenY):
            return moves

```
#### Java
```Java
import java.util.*;

class Solution {
    public int minMovesToCaptureTheQueen(int rookX, int rookY, int bishopX, int bishopY, int queenX, int queenY) {
        int[][] rookDirections = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        int[][] bishopDirections = {{1, 1}, {1, -1}, {-1, 1}, {-1, -1}};
        
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{rookX, rookY, 0, 0}); 
        queue.offer(new int[]{bishopX, bishopY, 0, 1}); 
        
        Set<String> visited = new HashSet<>();
        visited.add(rookX + "," + rookY + ",0");
        visited.add(bishopX + "," + bishopY + ",1");
        
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0];
            int y = current[1];
            int moves = current[2];
            int pieceType = current[3];
            
            if (x == queenX && y == queenY) {
                return moves;
            }
            
            int[][] directions = pieceType == 0 ? rookDirections : bishopDirections;
            
            for (int[] dir : directions) {
                int newX = x;
                int newY = y;
                
                while (true) {
                    newX += dir[0];
                    newY += dir[1];
                    
                    if (newX < 1 || newX > 8 || newY < 1 || newY > 8) {
                        break;
                    }
                    
                    String newPositionKey = newX + "," + newY + "," + pieceType;
                    
                    if (!visited.contains(newPositionKey)) {
                        queue.offer(new int[]{newX, newY, moves + 1, pieceType});
                        visited.add(newPositionKey);
                    }
                }
            }
        }
        
        return -1;
    }
}

```

### Conclusion

This solution ensures that we find the minimum number of moves needed for either the rook or the bishop to capture the queen using BFS. The approach efficiently explores all possible moves and returns the shortest path to capture the queen