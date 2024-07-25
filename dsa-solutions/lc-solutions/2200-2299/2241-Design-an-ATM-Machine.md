---
id:  Design-an-ATM-Machine
title:  Design an ATM Machine
sidebar_label: 2241-Design an ATM Machine
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

There is an ATM machine that stores banknotes of 5 denominations: 20, 50, 100, 200, and 500 dollars. Initially the ATM is empty. The user can use the machine to deposit or withdraw any amount of money.

When withdrawing, the machine prioritizes using banknotes of larger values.

For example, if you want to withdraw $300 and there are 2 $50 banknotes, 1 $100 banknote, and 1 $200 banknote, then the machine will use the $100 and $200 banknotes.
However, if you try to withdraw $600 and there are 3 $200 banknotes and 1 $500 banknote, then the withdraw request will be rejected because the machine will first try to use the $500 banknote and then be unable to use banknotes to complete the remaining $100. Note that the machine is not allowed to use the $200 banknotes instead of the $500 banknote.
Implement the ATM class:

ATM() Initializes the ATM object.
void deposit(int[] banknotesCount) Deposits new banknotes in the order $20, $50, $100, $200, and $500.
int[] withdraw(int amount) Returns an array of length 5 of the number of banknotes that will be handed to the user in the order $20, $50, $100, $200, and $500, and update the number of banknotes in the ATM after withdrawing. Returns [-1] if it is not possible (do not withdraw any banknotes in this case).

### Examples

**Example 1:**

Input
["ATM", "deposit", "withdraw", "deposit", "withdraw", "withdraw"]
[[], [[0,0,1,2,1]], [600], [[0,1,0,1,1]], [600], [550]]
Output
[null, null, [0,0,1,0,1], null, [-1], [0,1,0,0,1]]

Explanation
ATM atm = new ATM();
atm.deposit([0,0,1,2,1]); // Deposits 1 $100 banknote, 2 $200 banknotes,
                          // and 1 $500 banknote.
atm.withdraw(600);        // Returns [0,0,1,0,1]. The machine uses 1 $100 banknote
                          // and 1 $500 banknote. The banknotes left over in the
                          // machine are [0,0,0,2,0].
atm.deposit([0,1,0,1,1]); // Deposits 1 $50, $200, and $500 banknote.
                          // The banknotes in the machine are now [0,1,0,3,1].
atm.withdraw(600);        // Returns [-1]. The machine will try to use a $500 banknote
                          // and then be unable to complete the remaining $100,
                          // so the withdraw request will be rejected.
                          // Since the request is rejected, the number of banknotes
                          // in the machine is not modified.
atm.withdraw(550);        // Returns [0,1,0,0,1]. The machine uses 1 $50 banknote
                          // and 1 $500 banknote.
### Constraints

- `banknotesCount.length == 5`
- `0 <= banknotesCount[i] <= 109`
- `1 <= amount <= 109`
- `At most 5000 calls in total will be made to withdraw and deposit.`
- `At least one call will be made to each function withdraw and deposit.`
- `Sum of banknotesCount[i] in all deposits doesn't exceed 109`

### Approach

The ATM class manages banknotes of denominations $20, $50, $100, $200, and $500. It allows depositing and withdrawing money according to specified rules:

Deposit Operation: Accepts an array of counts for each banknote denomination and updates the ATM's inventory.
Withdraw Operation: Attempts to withdraw a specified amount using the fewest possible banknotes, prioritizing higher denominations first.
### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <vector>
#include <deque>
#include <algorithm>
using namespace std;

class ATM {
private:
    deque<int> banknotes;

public:
    ATM() : banknotes(5, 0) {}

    void deposit(vector<int>& banknotesCount) {
        for (int i = 0; i < 5; ++i) {
            banknotes[i] += banknotesCount[i];
        }
    }

    vector<int> withdraw(int amount) {
        vector<int> withdrawn(5, 0);
        vector<int> banknotes_values = {500, 200, 100, 50, 20};
        
        for (int i = 0; i < 5; ++i) {
            if (amount <= 0) break;
            int count = min(banknotes[i], amount / banknotes_values[i]);
            withdrawn[i] = count;
            amount -= count * banknotes_values[i];
        }

        if (amount == 0) {
            for (int i = 0; i < 5; ++i) {
                banknotes[i] -= withdrawn[i];
            }
            return withdrawn;
        } else {
            return {-1};
        }
    }
};

// Example usage:
int main() {
    ATM atm;
    atm.deposit({0, 0, 1, 2, 1});
    vector<int> result1 = atm.withdraw(600);  // Result: [0, 0, 1, 0, 1]
    for (int num : result1) {
        cout << num << " ";
    }
    cout << endl;
    
    atm.deposit({0, 1, 0, 1, 1});
    vector<int> result2 = atm.withdraw(600);  // Result: [-1]
    for (int num : result2) {
        cout << num << " ";
    }
    cout << endl;
    
    vector<int> result3 = atm.withdraw(550);  // Result: [0, 1, 0, 0, 1]
    for (int num : result3) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}



```

### Java Solution

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class ATM {
    private Deque<Integer> banknotes;

    public ATM() {
        banknotes = new ArrayDeque<>();
        for (int i = 0; i < 5; i++) {
            banknotes.offerLast(0);
        }
    }

    public void deposit(int[] banknotesCount) {
        for (int i = 0; i < 5; i++) {
            banknotesCount[i] += banknotes.pollFirst();
            banknotes.offerLast(banknotesCount[i]);
        }
    }

    public int[] withdraw(int amount) {
        int[] withdrawn = new int[5];
        int[] banknotes_values = {500, 200, 100, 50, 20};
        
        for (int i = 0; i < 5; i++) {
            if (amount <= 0) break;
            int count = Math.min(banknotes.peekFirst(), amount / banknotes_values[i]);
            withdrawn[i] = count;
            amount -= count * banknotes_values[i];
        }

        if (amount == 0) {
            for (int i = 0; i < 5; i++) {
                banknotes.offerFirst(banknotes.pollFirst() - withdrawn[i]);
            }
            return withdrawn;
        } else {
            return new int[] {-1};
        }
    }

    public static void main(String[] args) {
        ATM atm = new ATM();
        atm.deposit(new int[] {0, 0, 1, 2, 1});
        int[] result1 = atm.withdraw(600);  // Output: [0, 0, 1, 0, 1]
        for (int num : result1) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        atm.deposit(new int[] {0, 1, 0, 1, 1});
        int[] result2 = atm.withdraw(600);  // Output: [-1]
        for (int num : result2) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        int[] result3 = atm.withdraw(550);  // Output: [0, 1, 0, 0, 1]
        for (int num : result3) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}


```

### Python Solution

```python
from collections import deque

class ATM:
    def __init__(self):
        self.banknotes = deque([0] * 5)  # Initialize banknotes counts [20, 50, 100, 200, 500]

    def deposit(self, banknotesCount):
        for i in range(5):
            self.banknotes[i] += banknotesCount[i]

    def withdraw(self, amount):
        withdrawn = [0] * 5
        banknotes_values = [500, 200, 100, 50, 20]
        
        for i, value in enumerate(banknotes_values):
            if amount <= 0:
                break
            count = min(self.banknotes[i], amount // value)
            withdrawn[i] = count
            amount -= count * value
            
        if amount == 0:
            for i in range(5):
                self.banknotes[i] -= withdrawn[i]
            return withdrawn
        else:
            return [-1]

# Example usage:
atm = ATM()
atm.deposit([0, 0, 1, 2, 1])
print(atm.withdraw(600))  # Output: [0, 0, 1, 0, 1]
atm.deposit([0, 1, 0, 1, 1])
print(atm.withdraw(600))  # Output: [-1]
print(atm.withdraw(550))  # Output: [0, 1, 0, 0, 1]


```

### Complexity Analysis

### Time Complexity: $O(1)$

> **Reason**:Both deposit and withdraw operations are $O(1)$, assuming a fixed number of denominations.

### Space Complexity: $O(1)$

> **Reason**: for the fixed-size array or deque used to store banknote counts.


