---

id: water-bottles
title: Water Bottles Solution
sidebar_label: 1518-Water-Bottles
tags:
  - Greedy
  - Simulation
  - LeetCode
  - Python
  - Java
  - C++
  - JavaScript
description: "This is a solution to the Water Bottles problem on LeetCode."

---

In this page, we will solve the Water Bottles problem using different approaches: iterative simulation and a more optimized approach. We will provide the implementation of the solution in Python, Java, C++, JavaScript, and more.

## Problem Description

There are `numBottles` water bottles that are initially full of water. You can exchange `numExchange` empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers `numBottles` and `numExchange`, return the maximum number of water bottles you can drink.

### Examples

**Example 1:**

```plaintext
Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.
```

**Example 2:**

```plaintext
Input: numBottles = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
Number of water bottles you can drink: 15 + 3 + 1 = 19.
```

### Constraints

- $1 <= numBottles <= 100$
- $2 <= numExchange <= 100$

---

## Solution for Water Bottles Problem

### Intuition and Approach

The problem can be solved by simulating the process of drinking water bottles and exchanging empty ones for full ones until no more exchanges can be made.

<Tabs>
 <tabItem value="Iterative Simulation" label="Iterative Simulation">

### Approach 1: Iterative Simulation

We iteratively drink the water bottles and exchange the empty ones until no more exchanges are possible.

#### Implementation

```jsx live
function maxBottles() {
  const numBottles = 9;
  const numExchange = 3;

  const maxWaterBottles = function(numBottles, numExchange) {
    let totalDrank = numBottles;
    let emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
      const newBottles = Math.floor(emptyBottles / numExchange);
      totalDrank += newBottles;
      emptyBottles = emptyBottles % numExchange + newBottles;
    }

    return totalDrank;
  };

  const result = maxWaterBottles(numBottles, numExchange);
  return (
    <div>
      <p>
        <b>Input:</b> numBottles = {numBottles}, numExchange = {numExchange}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function maxWaterBottles(numBottles, numExchange) {
      let totalDrank = numBottles;
      let emptyBottles = numBottles;

      while (emptyBottles >= numExchange) {
        const newBottles = Math.floor(emptyBottles / numExchange);
        totalDrank += newBottles;
        emptyBottles = emptyBottles % numExchange + newBottles;
      }

      return totalDrank;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function maxWaterBottles(numBottles: number, numExchange: number): number {
      let totalDrank: number = numBottles;
      let emptyBottles: number = numBottles;

      while (emptyBottles >= numExchange) {
        const newBottles: number = Math.floor(emptyBottles / numExchange);
        totalDrank += newBottles;
        emptyBottles = emptyBottles % numExchange + newBottles;
      }

      return totalDrank;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
            total_drank = numBottles
            empty_bottles = numBottles

            while empty_bottles >= numExchange:
                new_bottles = empty_bottles // numExchange
                total_drank += new_bottles
                empty_bottles = empty_bottles % numExchange + new_bottles

            return total_drank
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int numWaterBottles(int numBottles, int numExchange) {
            int totalDrank = numBottles;
            int emptyBottles = numBottles;

            while (emptyBottles >= numExchange) {
                int newBottles = emptyBottles / numExchange;
                totalDrank += newBottles;
                emptyBottles = emptyBottles % numExchange + newBottles;
            }

            return totalDrank;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int numWaterBottles(int numBottles, int numExchange) {
            int totalDrank = numBottles;
            int emptyBottles = numBottles;

            while (emptyBottles >= numExchange) {
                int newBottles = emptyBottles / numExchange;
                totalDrank += newBottles;
                emptyBottles = emptyBottles % numExchange + newBottles;
            }

            return totalDrank;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(\log n)$$, where `n` is the initial number of bottles, due to the iterative division.
- Space Complexity: $$O(1)$$, as we are using a constant amount of extra space.

</tabItem>

<tabItem value="Optimized Approach" label="Optimized Approach">

### Approach 2: Optimized Approach

We can derive a mathematical formula to calculate the total number of water bottles drank based on the initial number of bottles and the exchange rate.

#### Implementation

```jsx live
function maxBottles() {
  const numBottles = 9;
  const numExchange = 3;

  const maxWaterBottles = function(numBottles, numExchange) {
    return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
  };

  const result = maxWaterBottles(numBottles, numExchange);
  return (
    <div>
      <p>
        <b>Input:</b> numBottles = {numBottles}, numExchange = {numExchange}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function maxWaterBottles(numBottles, numExchange) {
      return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function maxWaterBottles(numBottles: number, numExchange: number): number {
      return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
            return numBottles + (numBottles - 1) // (numExchange - 1)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int numWaterBottles(int numBottles, int numExchange) {
            return numBottles + (num

Bottles - 1) / (numExchange - 1);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int numWaterBottles(int numBottles, int numExchange) {
            return numBottles + (numBottles - 1) / (numExchange - 1);
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(1)$$, as we directly calculate the result using a formula.
- Space Complexity: $$O(1)$$, as we are using a constant amount of extra space.

</tabItem>
</Tabs>

:::tip Note

By using both iterative simulation and an optimized mathematical approach, we can efficiently solve the Water Bottles problem. The choice between the two approaches depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Water Bottles](https://leetcode.com/problems/water-bottles/)
- **Solution Link:** [Water Bottles Solution on LeetCode](https://leetcode.com/problems/water-bottles/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

