---
id: faithful-numbers
title: Faithful Numbers
sidebar_label: Faithful-Numbers
tags:
  - Array
  - Data Structure
description: "This tutorial covers the solution to the Faithful Numbers problem from the GeeksforGeeks website."
---
## Problem Description

A number is called faithful if you can write it as the sum of distinct powers of 7. 
e.g.,  `2457 = 7 + 72 + 74` . If we order all the faithful numbers, we get the sequence `1 = 70`, `7 = 71`, `8 = 70 + 71`, `49 = 72`, `50 = 70 + 72` . . . and so on.
Given some value of `N`, you have to find the N'th faithful number.

## Examples

**Example 1:**

```
Input:
N = 3
Output:
8
Explanation:
8 is the 3rd Faithful number.
```

**Example 2:**

```
Input:
N = 7
Output:
57
Explanation:
57 is the 7th Faithful number.
```

## Your Task
You don't need to read input or print anything. Your task is to complete the function `nthFaithfulNum()` which takes an Integer N as input and returns the answer.


Expected Time Complexity: $O(log(n))$

Expected Auxiliary Space: $O(log(n))$

## Constraints

* `1 ≤ n ≤ 10^5`

## Problem Explanation
A number is called faithful if you can write it as the sum of distinct powers of 7. 
e.g.,  `2457 = 7 + 72 + 74` . If we order all the faithful numbers, we get the sequence `1 = 70`, `7 = 71`, `8 = 70 + 71`, `49 = 72`, `50 = 70 + 72` . . . and so on.
Given some value of `N`, you have to find the N'th faithful number.


## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```python
  
def get_nth_faithful_number(n):
    faithful_numbers = []
    power = 0
    while len(faithful_numbers) < n:
        num = 7 ** power
        faithful_numbers.append(num)
        for i in range(len(faithful_numbers) - 1):
            faithful_numbers.append(num + faithful_numbers[i])
        power += 1
    return faithful_numbers[n - 1]

n = int(input("Enter the value of N: "))
print("The {}th faithful number is: {}".format(n, get_nth_faithful_number(n)))

  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```cpp
#include <iostream>
#include <vector>
#include <cmath>

int getNthFaithfulNumber(int n) {
    std::vector<int> faithfulNumbers;
    int power = 0;
    while (faithfulNumbers.size() < n) {
        int num = pow(7, power);
        faithfulNumbers.push_back(num);
        for (int i = 0; i < faithfulNumbers.size() - 1; i++) {
            faithfulNumbers.push_back(num + faithfulNumbers[i]);
        }
        power++;
    }
    return faithfulNumbers[n - 1];
}
int main() {
    int n;
    std::cout << "Enter the value of N: ";
    std::cin >> n;
    std::cout << "The " << n << "th faithful number is: " << getNthFaithfulNumber(n) << std::endl;
    return 0;
}

  ```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript
 function getNthFaithfulNumber(n) {
    let faithfulNumbers = [];
    let power = 0;
    while (faithfulNumbers.length < n) {
        let num = Math.pow(7, power);
        faithfulNumbers.push(num);
        for (let i = 0; i < faithfulNumbers.length - 1; i++) {
            faithfulNumbers.push(num + faithfulNumbers[i]);
        }
        power++;
    }
    return faithfulNumbers[n - 1];
}
let n = parseInt(prompt("Enter the value of N:"));
alert("The " + n + "th faithful number is: " + getNthFaithfulNumber(n));


  ```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript

function getNthFaithfulNumber(n: number): number {
    let faithfulNumbers: number[] = [];
    let power: number = 0;
    while (faithfulNumbers.length < n) {
        let num: number = Math.pow(7, power);
        faithfulNumbers.push(num);
        for (let i: number = 0; i < faithfulNumbers.length - 1; i++) {
            faithfulNumbers.push(num + faithfulNumbers[i]);
        }
        power++;
    }
    return faithfulNumbers[n - 1];
}

let n: number = parseInt(prompt("Enter the value of N:"));
alert("The " + n + "th faithful number is: " + getNthFaithfulNumber(n));

                  
  ```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
import java.util.*;

public class Main {
    public static int getNthFaithfulNumber(int n) {
        List<Integer> faithfulNumbers = new ArrayList<>();
        int power = 0;
        while (faithfulNumbers.size() < n) {
            int num = (int) Math.pow(7, power);
            faithfulNumbers.add(num);
            for (int i = 0; i < faithfulNumbers.size() - 1; i++) {
                faithfulNumbers.add(num + faithfulNumbers.get(i));
            }
            power++;
        }
        return faithfulNumbers.get(n - 1);
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the value of N: ");
        int n = scanner.nextInt();
        System.out.println("The " + n + "th faithful number is: " + getNthFaithfulNumber(n));
    }
}


  ```

  </TabItem>
</Tabs>


## Solution Logic:
This solution works by generating faithful numbers on the fly and storing them in a vector. It starts with the smallest faithful number, 1 (which is 7^0), and then generates larger faithful numbers by adding powers of 7 to the previously generated numbers.


## Time Complexity

* The function iterates through the array once, so the time complexity is $O(n log n)$.

## Space Complexity

* The function uses additional space for the result list, so the auxiliary space complexity is $O(n)$.