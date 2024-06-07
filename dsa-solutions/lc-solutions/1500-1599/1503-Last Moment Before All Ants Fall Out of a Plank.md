---

id: last-moment-before-all-ants-fall-out-of-a-plank
title: Last Moment Before All Ants Fall Out of a Plank
sidebar_label: 1503-Last-Moment-Before-All-Ants-Fall-Out-Of-A-Plank
tags:
  - Simulation
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Last Moment Before All Ants Fall Out of a Plank problem on LeetCode."

---

In this page, we will solve the Last Moment Before All Ants Fall Out of a Plank problem using different approaches: a simple maximum calculation for left and right ants. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

We have a wooden plank of the length `n` units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second. Some of the ants move to the left, the others move to the right.

When two ants moving in two different directions meet at some point, they change their directions and continue moving again. Assume changing directions does not take any additional time.

When an ant reaches one end of the plank at a time `t`, it falls out of the plank immediately.

Given an integer `n` and two integer arrays `left` and `right`, the positions of the ants moving to the left and the right, return the moment when the last ant(s) fall out of the plank.

### Examples

**Example 1:**

```plaintext
Input: n = 4, left = [4,3], right = [0,1]
Output: 4
Explanation: 
- The ant at index 0 is named A and going to the right.
- The ant at index 1 is named B and going to the right.
- The ant at index 3 is named C and going to the left.
- The ant at index 4 is named D and going to the left.
The last moment when an ant was on the plank is t = 4 seconds. After that, it falls immediately out of the plank. (i.e., We can say that at t = 4.0000000001, there are no ants on the plank).
```

**Example 2:**

```plaintext
Input: n = 7, left = [], right = [0,1,2,3,4,5,6,7]
Output: 7
Explanation: All ants are going to the right, the ant at index 0 needs 7 seconds to fall.
```

**Example 3:**

```plaintext
Input: n = 7, left = [0,1,2,3,4,5,6,7], right = []
Output: 7
Explanation: All ants are going to the left, the ant at index 7 needs 7 seconds to fall.
```

### Constraints

- $1 <= n <= 10^4$
- $0 <= left.length <= n + 1$
- $0 <= left[i] <= n$
- $0 <= right.length <= n + 1$
- $0 <= right[i] <= n$
- $1 <= left.length + right.length <= n + 1$
- All values of `left` and `right` are unique, and each value can appear only in one of the two arrays.

---

## Solution for Last Moment Before All Ants Fall Out of a Plank

### Intuition and Approach

The key insight is that we can ignore the direction changes of ants when they meet. The last ant to fall off will be either the furthest ant moving to the left or the furthest ant moving to the right. Therefore, we need to find the maximum distance any ant has to travel to fall off the plank.

<Tabs>
 <tabItem value="Maximum Calculation" label="Maximum Calculation">

### Approach 1: Maximum Calculation

We calculate the maximum distance for the ants moving to the left and to the right and return the larger of the two.

#### Implementation

```jsx live
function lastMomentBeforeAllAntsFallOut() {
  const n = 4;
  const left = [4, 3];
  const right = [0, 1];

  const getLastMoment = function(n, left, right) {
    const maxLeft = left.length > 0 ? Math.max(...left) : 0;
    const maxRight = right.length > 0 ? n - Math.min(...right) : 0;
    return Math.max(maxLeft, maxRight);
  };

  const result = getLastMoment(n, left, right);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, left = {JSON.stringify(left)}, right = {JSON.stringify(right)}
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
    function getLastMoment(n, left, right) {
      const maxLeft = left.length > 0 ? Math.max(...left) : 0;
      const maxRight = right.length > 0 ? n - Math.min(...right) : 0;
      return Math.max(maxLeft, maxRight);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function getLastMoment(n: number, left: number[], right: number[]): number {
      const maxLeft = left.length > 0 ? Math.max(...left) : 0;
      const maxRight = right.length > 0 ? n - Math.min(...right) : 0;
      return Math.max(maxLeft, maxRight);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
            max_left = max(left) if left else 0
            max_right = n - min(right) if right else 0
            return max(max_left, max_right)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int getLastMoment(int n, int[] left, int[] right) {
            int maxLeft = left.length > 0 ? Arrays.stream(left).max().getAsInt() : 0;
            int maxRight = right.length > 0 ? n - Arrays.stream(right).min().getAsInt() : 0;
            return Math.max(maxLeft, maxRight);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int getLastMoment(int n, vector<int>& left, vector<int>& right) {
            int maxLeft = left.empty() ? 0 : *max_element(left.begin(), left.end());
            int maxRight = right.empty() ? 0 : n - *min_element(right.begin(), right.end());
            return max(maxLeft, maxRight);
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(L + R)$$, where `L` is the length of the `left` array and `R` is the length of the `right` array.
- Space Complexity: $$O(1)$$, as we are only using a few extra variables.

</tabItem>

<tabItem value="Simulation" label="Simulation">

### Approach 2: Simulation

We can simulate the movement of ants on the plank to observe their behavior and determine the last moment before all ants fall off.

#### Implementation

```jsx live
function lastMomentBeforeAllAntsFallOut() {
  const n = 4;
  const left = [4, 3];
  const right = [0, 1];

  const getLastMoment = function(n, left, right) {
    const positions = Array(n + 1).fill(0);
    for (let pos of left) positions[pos] = 1;
    for (let pos of right) positions[pos] = 2;

    let lastMoment = 0;
    for (let i = 0; i <= n; i++) {
      if (positions[i] === 1) lastMoment = Math.max(lastMoment, i);
      if (positions[i] === 2) lastMoment = Math.max(lastMoment, n - i);
    }
    return lastMoment;
  };

  const result = getLastMoment(n, left, right);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, left = {JSON.stringify(left)}, right = {JSON.stringify(right)}
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
    function get

LastMoment(n, left, right) {
      const positions = Array(n + 1).fill(0);
      for (let pos of left) positions[pos] = 1;
      for (let pos of right) positions[pos] = 2;

      let lastMoment = 0;
      for (let i = 0; i <= n; i++) {
        if (positions[i] === 1) lastMoment = Math.max(lastMoment, i);
        if (positions[i] === 2) lastMoment = Math.max(lastMoment, n - i);
      }
      return lastMoment;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function getLastMoment(n: number, left: number[], right: number[]): number {
      const positions = Array(n + 1).fill(0);
      for (let pos of left) positions[pos] = 1;
      for (let pos of right) positions[pos] = 2;

      let lastMoment = 0;
      for (let i = 0; i <= n; i++) {
        if (positions[i] === 1) lastMoment = Math.max(lastMoment, i);
        if (positions[i] === 2) lastMoment = Math.max(lastMoment, n - i);
      }
      return lastMoment;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
            positions = [0] * (n + 1)
            for pos in left:
                positions[pos] = 1
            for pos in right:
                positions[pos] = 2

            last_moment = 0
            for i in range(n + 1):
                if positions[i] == 1:
                    last_moment = max(last_moment, i)
                if positions[i] == 2:
                    last_moment = max(last_moment, n - i)
            return last_moment
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int getLastMoment(int n, int[] left, int[] right) {
            int[] positions = new int[n + 1];
            for (int pos : left) positions[pos] = 1;
            for (int pos : right) positions[pos] = 2;

            int lastMoment = 0;
            for (int i = 0; i <= n; i++) {
                if (positions[i] == 1) lastMoment = Math.max(lastMoment, i);
                if (positions[i] == 2) lastMoment = Math.max(lastMoment, n - i);
            }
            return lastMoment;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int getLastMoment(int n, vector<int>& left, vector<int>& right) {
            vector<int> positions(n + 1, 0);
            for (int pos : left) positions[pos] = 1;
            for (int pos : right) positions[pos] = 2;

            int lastMoment = 0;
            for (int i = 0; i <= n; i++) {
                if (positions[i] == 1) lastMoment = max(lastMoment, i);
                if (positions[i] == 2) lastMoment = max(lastMoment, n - i);
            }
            return lastMoment;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(L + R)$$, where `L` is the length of the `left` array and `R` is the length of the `right` array.
- Space Complexity: $$O(N)$$, where `N` is the length of the plank.

</tabItem>
</Tabs>

:::tip

By using a simple maximum calculation approach or a simulation approach, we can efficiently solve the Last Moment Before All Ants Fall Out of a Plank problem. The choice of implementation language depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Last Moment Before All Ants Fall Out of a Plank](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/)
- **Solution Link:** [Last Moment Before All Ants Fall Out of a Plank Solution on LeetCode](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

