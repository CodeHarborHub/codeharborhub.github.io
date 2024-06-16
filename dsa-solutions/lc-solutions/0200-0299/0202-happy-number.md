---
id: happy-number
title: Happy Number
sidebar_label: 202 Happy Number
tags:
- Hash Table
- Two Pointers
- C++
- Python
- Java
description: "This document provides a solution for Happy Number problem on LeetCode."
---

## Problem

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

### Examples

**Example 1:**

```
Input: n = 19

Output: true

```
**Example 2:**
```
Input: n = 2

Output: false

```

### Constraints

- `1 <= n <= 2^31 - 1`

---

### Intuition
A happy number is defined as a number that, when repeatedly replaced by the sum of the squares of its digits, eventually reaches 1. If the process never reaches 1 and enters into a cycle, then the number is not a happy number.

## Approach

**1. Hash Map:**

This approach uses a hash map to keep track of numbers encountered during the process of computing the "next" number. If a number is encountered again, it indicates a cycle, and the function returns false. If the number 1 is encountered, the function returns true.

- Define a function next(num) to compute the next number based on the rules specified in the problem.

- Start with the given number n and repeatedly compute the next number until either 1 is encountered (indicating happiness) or a cycle is detected.
  
- Use a hash map to keep track of encountered numbers to detect cycles.


#### Code in Java
    
 ```java
import java.util.HashSet;
import java.util.Scanner;

class Solution {
    private int next(int num) {
        int n = 0;
        while (num > 0) {
            int r = num % 10;
            n += (r * r);
            num /= 10;
        }
        return n;
    }

    public boolean isHappy(int n) {
        HashSet<Integer> set = new HashSet<>();
        while (n != 1 && !set.contains(n)) {
            set.add(n);
            n = next(n);
        }
        return n == 1;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = scanner.nextInt();
        if (solution.isHappy(n)) {
            System.out.println(n + " is a happy number.");
        } else {
            System.out.println(n + " is not a happy number.");
        }
        scanner.close();
    }
}

```

#### Code in C++

 ```cpp
#include <iostream>
#include <unordered_map>

class Solution {
private:
    int next(int num){
        int n = 0;
        while(num){
            int r = num % 10;
            n += (r * r);
            num /= 10;
        }
        return n;
    }
public:
    bool isHappy(int n) {
        int num = n;
        std::unordered_map<int, int> mp;
        do {
            num = next(num);
            if(num == 1) return true;
            if(mp.find(num) != mp.end()) return false;
            else mp[num] = 1;
        } while(num != n);
        return false;
    }
};

int main() {
    Solution solution;
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;
    if(solution.isHappy(n)) {
        std::cout << n << " is a happy number." << std::endl;
    } else {
        std::cout << n << " is not a happy number." << std::endl;
    }
    return 0;
}

```

#### Code in Python

 ```py
class Solution:
    def next(self, num):
        n = 0
        while num > 0:
            r = num % 10
            n += (r * r)
            num //= 10
        return n
    
    def isHappy(self, n: int) -> bool:
        visited = set()
        while n != 1 and n not in visited:
            visited.add(n)
            n = self.next(n)
        return n == 1

if __name__ == "__main__":
    solution = Solution()
    n = int(input("Enter a number: "))
    if solution.isHappy(n):
        print(f"{n} is a happy number.")
    else:
        print(f"{n} is not a happy number.")

```

### Complexity Analysis

#### Time Complexity: $O(log n)$

> **Reason**: The primary operation is the sum of the squares of the digits of the number, which involves iterating over the digits. The number of digits in `n` is proportional to log base 10 of `n` i.e., $O(log n)$. Typically, the process of finding whether a number is happy converges quickly to either 1 (happy) or a cycle (not happy)..

#### Space Complexity: $O(log n)$

> **Reason**: The main space requirement is for storing previously seen numbers to detect cycles. The number of unique sums that can be encountered before either converging to 1 or entering a cycle is limited, and in practice, it's bound by a constant. However, in the worst case, the storage grows logarithmically with the size of `n`.

**2. Two Pointers:**

This approach uses Floyd's cycle detection algorithm, also known as the "tortoise and hare" algorithm. It employs two pointers, one slow and one fast, to detect cycles in the sequence of numbers.

- Define a function next(num) to compute the next number based on the rules specified in the problem.
- Use two pointers, slow and fast, initialized to the given number n.
- Advance slow by one step and fast by two steps at each iteration.
   - If a cycle is detected (i.e., slow equals fast), exit the loop.
   - If slow eventually reaches 1, return true; otherwise, return false.


#### Code in Java
    
 ```java

import java.util.Scanner;

class Solution {
    private int next(int num) {
        int n = 0;
        while (num > 0) {
            int r = num % 10;
            n += (r * r);
            num /= 10;
        }
        return n;
    }

    public boolean isHappy(int n) {
        int slow = n, fast = n;
        do {
            slow = next(slow);
            fast = next(next(fast));
        } while (slow != fast);
        return slow == 1;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = scanner.nextInt();
        if (solution.isHappy(n)) {
            System.out.println(n + " is a happy number.");
        } else {
            System.out.println(n + " is not a happy number.");
        }
        scanner.close();
    }
}


```

#### Code in C++

 ```cpp
#include <iostream>

class Solution {
private:
    int next(int num) {
        int n = 0;
        while (num) {
            int r = num % 10;
            n += (r * r);
            num /= 10;
        }
        return n;
    }
public:
    bool isHappy(int n) {
        int slow = n, fast = n;
        do {
            slow = next(slow);
            fast = next(next(fast));
        } while (slow != fast);
        return slow == 1;
    }
};

int main() {
    Solution solution;
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;
    if (solution.isHappy(n)) {
        std::cout << n << " is a happy number." << std::endl;
    } else {
        std::cout << n << " is not a happy number." << std::endl;
    }
    return 0;
}

```

#### Code in Python

 ```py
class Solution:
    def next(self, num):
        n = 0
        while num > 0:
            r = num % 10
            n += (r * r)
            num //= 10
        return n
    
    def isHappy(self, n: int) -> bool:
        slow = n
        fast = n
        while True:
            slow = self.next(slow)
            fast = self.next(self.next(fast))
            if slow == fast:
                break
        return slow == 1

if __name__ == "__main__":
    solution = Solution()
    n = int(input("Enter a number: "))
    if solution.isHappy(n):
        print(f"{n} is a happy number.")
    else:
        print(f"{n} is not a happy number.")


```

### Complexity Analysis

#### Time Complexity: $O(log n)$

> **Reason**: The algorithm uses Floyd's cycle detection (tortoise and hare) which typically converges or detects a cycle quickly, resulting in O(log n) overall time complexity.

#### Space Complexity: $O(1)$

> **Reason**: The space complexity is constant, $O(1)$, since the algorithm only uses a few integer variables (slow, fast) for cycle detection and does not require any additional data structures like a hash set or hash map to store intermediate results.


# References

- **LeetCode Problem:** [Number of Digit One](https://leetcode.com/problems/happy-number/description/)
- **Solution Link:** [Number of Digit One Solution on LeetCode](https://leetcode.com/problems/happy-number/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/sidkul712/)
