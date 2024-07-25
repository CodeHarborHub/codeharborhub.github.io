---
id: remove-colored-pieces-if-both-neighbors-are-the-same-color
title: Remove Colored Pieces if Both Neighbors are the Same Color
sidebar_label:   2038.  Remove Colored Pieces if Both Neighbors are the Same Color

tags:
- 'Array'

description: "This is a solution to the  Remove Colored Pieces if Both Neighbors are the Same Color problem on LeetCode."
---

## Problem Description
There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.

Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.

Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored 'A'. She is not allowed to remove pieces that are colored 'B'.
Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored 'B'. He is not allowed to remove pieces that are colored 'A'.
Alice and Bob cannot remove pieces from the edge of the line.
If a player cannot make a move on their turn, that player loses and the other player wins.
Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.
### Examples
**Example 1:**

```Input: colors = "AAABABB"
Output: true
Explanation:
AAABABB -> AABABB
Alice moves first.
She removes the second 'A' from the left since that is the only 'A' whose neighbors are both 'A'.

Now it's Bob's turn.
Bob cannot make a move on his turn since there are no 'B's whose neighbors are both 'B'.
Thus, Alice wins, so return true.
```

**Example 2:**
```
Input: colors = "ABBBBBBBAAA"
Output: false
Explanation:
ABBBBBBBAAA -> ABBBBBBBAA
Alice moves first.
Her only option is to remove the second to last 'A' from the right.

ABBBBBBBAA -> ABBBBBBAA
Next is Bob's turn.
He has many options for which 'B' piece to remove. He can pick any.

On Alice's second turn, she has no more pieces that she can remove.
Thus, Bob wins, so return false.
```

### Constraints

- `1 <= colors.length <= 10^5`
- `colors consists of only the letters 'A' and 'B'`

## Solution for Remove Colored Pieces if Both Neighbors are the Same Color
### Approach

1. **Initialization**: Start with two counters, `countA` and `countB`, initialized to zero. These will keep track of the number of triplets 'AAA' and 'BBB' found in the string `colors`.

2. **Iteration**: Loop through the string `colors` from the beginning to the third last character (`n - 2`), where `n` is the length of `colors`.

3. **Counting Triplets**:
   - Check for sequences of three consecutive 'A's (`'AAA'`). If found, increment `countA`.
   - Check for sequences of three consecutive 'B's (`'BBB'`). If found, increment `countB`.

4. **Comparison**: After iterating through the string:
   - Compare `countA` and `countB`.
   - Return `true` if `countA` (number of 'AAA' sequences) is greater than `countB` (number of 'BBB' sequences), indicating player 'A' has more winning sequences.
   - Otherwise, return `false`.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
       
      function winnerOfGame(colors) {
    let countA = 0, countB = 0;
    const n = colors.length;
    for (let i = 0; i < n - 2; i++) {
        if (colors[i] === 'A' && colors[i + 1] === 'A' && colors[i + 2] === 'A') {
            countA++;
        }
        if (colors[i] === 'B' && colors[i + 1] === 'B' && colors[i + 2] === 'B') {
            countB++;
        }
    }
    return countA > countB;
}

      const input = "AAABABB"

      const output =winnerOfGame(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $O(n) $ 
    - Space Complexity: $ O(1)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   function winnerOfGame(colors) {
    let countA = 0, countB = 0;
    const n = colors.length;
    for (let i = 0; i < n - 2; i++) {
        if (colors[i] === 'A' && colors[i + 1] === 'A' && colors[i + 2] === 'A') {
            countA++;
        }
        if (colors[i] === 'B' && colors[i + 1] === 'B' && colors[i + 2] === 'B') {
            countB++;
        }
    }
    return countA > countB;
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function winnerOfGame(colors: string): boolean {
    let countA: number = 0, countB: number = 0;
    const n: number = colors.length;
    for (let i: number = 0; i < n - 2; i++) {
        if (colors[i] === 'A' && colors[i + 1] === 'A' && colors[i + 2] === 'A') {
            countA++;
        }
        if (colors[i] === 'B' && colors[i + 1] === 'B' && colors[i + 2] === 'B') {
            countB++;
        }
    }
    return countA > countB;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   def winner_of_game(colors: str) -> bool:
    countA = countB = 0
    n = len(colors)
    for i in range(n - 2):
        if colors[i] == 'A' and colors[i + 1] == 'A' and colors[i + 2] == 'A':
            countA += 1
        if colors[i] == 'B' and colors[i + 1] == 'B' and colors[i + 2] == 'B':
            countB += 1
    return countA > countB

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   public class Solution {
    public boolean winnerOfGame(String colors) {
        int countA = 0, countB = 0;
        int n = colors.length();
        for (int i = 0; i < n - 2; i++) {
            if (colors.charAt(i) == 'A' && colors.charAt(i + 1) == 'A' && colors.charAt(i + 2) == 'A') {
                countA++;
            }
            if (colors.charAt(i) == 'B' && colors.charAt(i + 1) == 'B' && colors.charAt(i + 2) == 'B') {
                countB++;
            }
        }
        return countA > countB;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    bool winnerOfGame(string colors) {
        int countA = 0, countB = 0;
        int n = colors.length();
        for (int i = 0; i < n - 2; i++) {
            if (colors[i] == 'A' && colors[i + 1] == 'A' && colors[i + 2] == 'A') {
                countA++;
            }
            if (colors[i] == 'B' && colors[i + 1] == 'B' && colors[i + 2] == 'B') {
                countB++;
            }
        }
        return countA > countB;
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Remove Colored Pieces if Both Neighbors are the Same Color](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/description/)

