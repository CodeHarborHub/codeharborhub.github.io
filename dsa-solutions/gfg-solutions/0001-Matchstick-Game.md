---

id: matchsticks-game
title: Matchsticks Game
sidebar_label: 0001-Matchsticks Game
tags:
  - Game Theory
  - Mathematics
  - Strategy
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the problem of determining the number of matchsticks the first player should pick to guarantee a win in the matchsticks game."

---

In this page, we will solve the problem of determining the number of matchsticks the first player should pick to guarantee a win in the matchsticks game using different approaches. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

Two friends, A and B, are playing the game of matchsticks. In this game, a group of N matchsticks is placed on the table. The players can pick any number of matchsticks from 1 to 4 (both inclusive) during their chance. The player who takes the last matchstick wins the game. If A starts first, how many matchsticks should he pick on his first turn such that he is guaranteed to win the game, or determine if it's impossible for him to win. Return -1 if it's impossible for A to win the game, else return the number of matchsticks he should pick on his first turn to guarantee a win. Note: Consider both A and B play the game optimally.

### Examples

**Example 1:**

```plaintext
Input:
N = 48
Output:
3
Explanation:
Player A is guaranteed a win if he picks 3 matchsticks first.
```

**Example 2:**

```plaintext
Input:
N = 15
Output:
-1
Explanation:
Player A is guaranteed a loss no matter how many matches he picks at first.
```

### Constraints

- `1 <= N <= 10^18`

---

## Solution for Matchsticks Game Problem

### Intuition and Approach

The problem can be solved using game theory and mathematical analysis. The key insight is to notice the pattern based on the modulo operation.

When A starts the game, he needs to ensure that after his turn, the number of matchsticks left is such that B cannot force a win. This means A needs to leave B with a number of matchsticks that is a multiple of 5, because if $( N \% 5 = 0 )$, B will always have the advantage. Therefore, A's winning strategy is based on the remainder when $( N )$ is divided by 5.

- If $( N \% 5 = 0 )$, then no matter how many matchsticks A picks (1 to 4), B can always pick a number of matchsticks to maintain the advantage and eventually win. Hence, it's impossible for A to guarantee a win, and the answer is -1.
- If $( N \% 5 \neq 0 )$, A should pick $( N \% 5 )$ matchsticks to leave B with a multiple of 5 matchsticks, ensuring A's winning position.


<Tabs>
 <tabItem value="Game Theory" label="Game Theory">

### Approach: Game Theory

The key observation is that if the number of matchsticks \( N \) modulo 5 is 0, then player A will lose if both players play optimally. Otherwise, player A can always pick \( N \% 5 \) matchsticks to ensure a win.

#### Implementation

```jsx live
function matchGame() {
  const N = 48;

  const matchGame = (N) => {
    return N % 5 === 0 ? -1 : N % 5;
  };

  const result = matchGame(N);
  return (
    <div>
      <p>
        <b>Input:</b> N = {N}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function matchGame(N) {
      return N % 5 === 0 ? -1 : N % 5;
    }

  
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function matchGame(N: number): number {
      return N % 5 === 0 ? -1 : N % 5;
    }

    
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    def matchGame(N):
        return -1 if N % 5 == 0 else N % 5

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    public class Solution {
        public int matchGame(long N) {
            return N % 5 == 0 ? -1 : (int)(N % 5);
        }

       
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <iostream>

    using namespace std;

    int matchGame(long long N) {
        return N % 5 == 0 ? -1 : N % 5;
    }

    
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(1)$$
- Space Complexity: $$O(1)$$

</tabItem>
</Tabs>

:::tip
The key insight is recognizing the modulo operation's role in determining the game's outcome.
:::

## References

- **GeeksforGeeks Problem:** [GeeksforGeeks Problem](https://www.geeksforgeeks.org/problems/-matchsticks-game4906/0)
- **GeeksforGeeks Problem:** [GeeksforGeeks solution](https://www.geeksforgeeks.org/problems/-matchsticks-game4906/0)
- **Solution Author:** [Manish Kumar Gupta](https://www.geeksforgeeks.org/user/manishd5hla)

---

