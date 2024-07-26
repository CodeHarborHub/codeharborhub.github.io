---
id: lucky-number
title: Nth Fibonacci Number
sidebar_label: Nth Fibonacci Number
tags:
  - Easy
  - Dynamic Programming
  - Math
description: "This tutorial covers the solution to the Nth Fibonacci Number problem from the GeeksforGeeks."
---

## Problem Description

Lucky numbers are subset of integers. Rather than going into much theory, let us see the process of arriving at lucky numbers,
Take the set of integers
`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`,……
First, delete every second number, we get following reduced set.
`1`, `3`, `5`, `7`, `9`, `11`, `13`, `15`, `17`, `19`,…………
Now, delete every third number, we get
`1`, `3`, `7`, `9`, `13`, `15`, `19`,….….
Continue this process indefinitely……
Any number that does NOT get deleted due to above process is called “lucky”.

You are given a number N, you need to tell whether the number is lucky or not. If the number is lucky return 1 otherwise 0.

## Examples

**Example 1:**

```
Input:
N = 5
Output: 0
Explanation: 5 is not a lucky number
as it gets deleted in the second
iteration.
```

**Example 2:**

```
Input:
N = 19
Output: 1
Explanation: 19 is a lucky number because
it does not get deleted throughout the process.
```

## Your Task

You don't need to read input or print anything. You only need to complete the function isLucky() that takes N as parameter and returns either False if the N is not lucky else True.

Expected Time Complexity: $O(sqrt(n))$

Expected Auxiliary Space: $O(1)$ for iterative approach.

## Constraints

- `1 ≤ n ≤ 10^5`

## Problem Explanation

Lucky numbers are subset of integers. Rather than going into much theory, let us see the process of arriving at lucky numbers,
Take the set of integers
`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`,……
First, delete every second number, we get following reduced set.
`1`, `3`, `5`, `7`, `9`, `11`, `13`, `15`, `17`, `19`,…………
Now, delete every third number, we get
`1`, `3`, `7`, `9`, `13`, `15`, `19`,….….
Continue this process indefinitely……
Any number that does NOT get deleted due to above process is called “lucky”.

You are given a number N, you need to tell whether the number is lucky or not. If the number is lucky return 1 otherwise 0.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

```py
def is_lucky(N):
  lucky_numbers = list(range(1, N + 1))
  delete_step = 2
  while delete_step <= len(lucky_numbers):
      lucky_numbers = [num for i, num in enumerate(lucky_numbers) if (i + 1) % delete_step != 0]
      delete_step += 1
  return 1 if N in lucky_numbers else 0

```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

```cpp
int isLucky(int N) {
  vector<int> luckyNumbers;
  for (int i = 1; i <= N; i++) {
      luckyNumbers.push_back(i);
  }
  int deleteStep = 2;
  while (deleteStep <= luckyNumbers.size()) {
      for (int i = deleteStep - 1; i < luckyNumbers.size(); i += deleteStep) {
          luckyNumbers.erase(luckyNumbers.begin() + i);
      }
      deleteStep++;
  }
  for (int num : luckyNumbers) {
      if (num == N) {
          return 1;
      }
  }
  return 0;
}

```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

```javascript
function isLucky(N) {
  let luckyNumbers = Array.from({ length: N }, (_, i) => i + 1);
  let deleteStep = 2;
  while (deleteStep <= luckyNumbers.length) {
    luckyNumbers = luckyNumbers.filter((_, i) => (i + 1) % deleteStep !== 0);
    deleteStep++;
  }
  return luckyNumbers.includes(N) ? 1 : 0;
}
```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

```typescript
function isLucky(N) {
  let luckyNumbers = Array.from({ length: N }, (_, i) => i + 1);
  let deleteStep = 2;
  while (deleteStep <= luckyNumbers.length) {
    luckyNumbers = luckyNumbers.filter((_, i) => (i + 1) % deleteStep !== 0);
    deleteStep++;
  }
  return luckyNumbers.includes(N) ? 1 : 0;
}
```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

```java
public int isLucky(int N) {
  List<Integer> luckyNumbers = new ArrayList<>();
  for (int i = 1; i <= N; i++) {
      luckyNumbers.add(i);
  }
  int deleteStep = 2;
  while (deleteStep <= luckyNumbers.size()) {
      for (int i = deleteStep - 1; i < luckyNumbers.size(); i += deleteStep) {
          luckyNumbers.remove(i);
      }
      deleteStep++;
  }
  for (int num : luckyNumbers) {
      if (num == N) {
          return 1;
      }
  }
  return 0;
}


```

  </TabItem>
</Tabs>

## Time Complexity

- The iterative approach has a time complexity of $O(n^2)$.

## Space Complexity

- The space complexity is $O(n)$ since we are using only a fixed amount of extra space.
