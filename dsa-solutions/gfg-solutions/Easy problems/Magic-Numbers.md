---
id: magic-number
title: Magic Number
sidebar_label: Magic-Number
tags:
  - Easy
  - Dynamic Programming
  - Math
description: "This tutorial covers the solution to the Magic Number problem from the GeeksforGeeks."
---
## Problem Description
A magic number is defined as a number that can be expressed as a power of 5 or sum of unique powers of `5`. First few magic numbers are `5`, `25`, `30(5 + 25)`, `125`, `130(125 + 5)`, …
Given the value of `n`, find the `n`'th Magic number modulo `109+7`.

## Examples

**Example 1:**

```
Input: n = 1
Output: 5
Explanation: 1'st Magic number is 5.
```

**Example 2:**

```
Input: n = 2
Output: 25
Explanation: 2'nd Magic number is 25. 
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `nthMagicNo()` which takes n input and returns the answer with modulo `10^9+7`.

Expected Time Complexity: $O(log(n))$

Expected Auxiliary Space: $O(1)$ for iterative approach.

## Constraints

* `1 ≤ n ≤ 10^5`

## Problem Explanation
A magic number is defined as a number that can be expressed as a power of 5 or sum of unique powers of `5`. First few magic numbers are `5`, `25`, `30(5 + 25)`, `125`, `130(125 + 5)`, …
Given the value of `n`, find the `n`'th Magic number modulo `109+7`.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```py
  def get_nth_magic_number(n):
    magic_numbers = []
    power = 0
    while len(magic_numbers) < n:
        num = 5 ** power
        magic_numbers.append(num)
        for i in range(len(magic_numbers) - 1):
            magic_numbers.append(num + magic_numbers[i])
        power += 1
    return magic_numbers[n - 1] % (10**9 + 7)

n = int(input("Enter the value of N: "))
print("The {}th magic number is: {}".format(n, get_nth_magic_number(n)))


  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```cpp
  #include <iostream>
#include <vector>

const int MOD = 1e9 + 7;

int getNthMagicNumber(int n) {
    std::vector<int> magicNumbers;
    int power = 0;
    while (magicNumbers.size() < n) {
        int num = pow(5, power);
        magicNumbers.push_back(num);
        for (int i = 0; i < magicNumbers.size() - 1; i++) {
            magicNumbers.push_back(num + magicNumbers[i]);
        }
        power++;
    }
    return magicNumbers[n - 1] % MOD;
}
int main() {
    int n;
    std::cout << "Enter the value of N: ";
    std::cin >> n;
    std::cout << "The " << n << "th magic number is: " << getNthMagicNumber(n) << std::endl;
    return 0;
}


  ```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript
function getNthMagicNumber(n) {
    let magicNumbers = [];
    let power = 0;
    while (magicNumbers.length < n) {
        let num = Math.pow(5, power);
        magicNumbers.push(num);
        for (let i = 0; i < magicNumbers.length - 1; i++) {
            magicNumbers.push(num + magicNumbers[i]);
        }
        power++;
    }
    return magicNumbers[n - 1] % (10**9 + 7);
}

let n = parseInt(prompt("Enter the value of N:"));
alert("The " + n + "th magic number is: " + getNthMagicNumber(n));


  ```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript
function getNthMagicNumber(n: number): number {
    let magicNumbers: number[] = [];
    let power: number = 0;
    while (magicNumbers.length < n) {
        let num: number = Math.pow(5, power);
        magicNumbers.push(num);
        for (let i: number = 0; i < magicNumbers.length - 1; i++) {
            magicNumbers.push(num + magicNumbers[i]);
        }
        power++;
    }
    return magicNumbers[n - 1] % (10**9 + 7);
}

let n: number = parseInt(prompt("Enter the value of N:"));
alert("The " + n + "th magic number is: " + getNthMagicNumber(n));

  ```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java

import java.util.*;

public class Main {
    public static int getNthMagicNumber(int n) {
        List<Integer> magicNumbers = new ArrayList<>();
        int power = 0;
        while (magicNumbers.size() < n) {
            int num = (int) Math.pow(5, power);
            magicNumbers.add(num);
            for (int i = 0; i < magicNumbers.size() - 1; i++) {
                magicNumbers.add(num + magicNumbers.get(i));
            }
            power++;
        }
        return magicNumbers.get(n - 1) % (int) (1e9 + 7);
    }
   public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the value of N: ");
        int n = scanner.nextInt();
        System.out.println("The " + n + "th magic number is: " + getNthMagicNumber(n));
    }
}


  ```

  </TabItem>
</Tabs>


## Time Complexity

* The iterative approach has a time complexity of $O(n log n)$.

## Space Complexity

* The space complexity is $O(n)$ since we are using only a fixed amount of extra space.