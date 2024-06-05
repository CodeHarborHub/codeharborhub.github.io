---
id: lemonade-change
title: Lemonade Change
sidebar_label: 0022 Lemonade Change
tags:
- Greedy Algorithm
- JavaScript
- TypeScript
- Python
- Java
- C++
description: "This document explores different approaches to solving the lemonade change problem, including an easy C++ solution with a greedy algorithm approach."
---

## Problem

You are an owner of lemonade island, each lemonade costs \$5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by given array `bills[]`). Each customer will only buy one lemonade and pay with either a \$5, \$10, or \$20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays \$5.

**Note:** At first, you do not have any bill to provide changes with. You can provide changes from the bills that you get from the previous customers.

Given an integer array bills of size N where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

### Examples

**Example 1:**

```
Input:
N = 5
bills[] = {5, 5, 5, 10, 20}

Output:
True
```

**Explanation:**
From the first 3 customers, we collect three \$5 bills in order.
From the fourth customer, we collect a \$10 bill and give back a \$5.
From the fifth customer, we give a \$10 bill and a \$5 bill.
Since all customers got correct change we return true.

**Example 2:**

```
Input:
N = 5
bills[] = {5, 5, 10, 10, 20}

Output:
False
```

**Explanation:**
From the first two customers in order, we collect two \$5 bills.
For the next two customers in order, we collect a \$10 bill and give back a \$5 bill.
For the last customer, we can not give the change of \$15 back because we only have two \$10 bills.
Since not every customer received the correct change, the answer is false.

### Your Task
You don't need to read input or print anything. Your task is to complete the function `lemonadeChange()` which takes the integer `N` and integer array `bills[]` as parameters and returns true if it is possible to provide change to every customer otherwise false.

**Expected Time Complexity:** $O(N)$  
**Expected Auxiliary Space:** $O(1)$

### Constraints
- $1 ≤ N ≤ 10^5$ 
- $bills[i]$ contains only {5, 10, 20}

## Solution

### Approach

We can solve this problem using a greedy algorithm. Here's a step-by-step approach:

1. Initialize two variables `five` and `ten` to keep count of the number of \$5 and \$10 bills available.
2. Iterate through the bills array using a for loop.
3. For each bill:
   - If the customer pays \$20, we need to return \$15. We first check if we have 1 * \$10 + 1 * \$5. If not, we check for 3 * \$5. If neither combination is available, we return false.
   - If the customer pays \$10, we need to return \$5. We check if we have any \$5 bills. If not, we return false.
   - If the customer pays \$5, we simply increase the count of \$5 bills.
4. Finally, return true if we can provide the correct change for all customers.

### Implementation

<Tabs>
  <TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    bool lemonadeChange(int n, vector<int> &bills) {
        int five = 0, ten = 0;
        for (int i = 0; i < n; i++) {
            if (bills[i] == 20) {
                if (ten && five) {
                    ten--;
                    five--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            } else if (bills[i] == 10) {
                ten++;
                if (five) {
                    five--;
                } else {
                    return false;
                }
            } else {
                five++;
            }
        }
        return true;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
function lemonadeChange(bills) {
    let five = 0, ten = 0;
    for (let bill of bills) {
        if (bill === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        } else if (bill === 10) {
            ten++;
            if (five > 0) {
                five--;
            } else {
                return false;
            }
        } else {
            five++;
        }
    }
    return true;
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
function lemonadeChange(bills: number[]): boolean {
    let five = 0, ten = 0;
    for (let bill of bills) {
        if (bill === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        } else if (bill === 10) {
            ten++;
            if (five > 0) {
                five--;
            } else {
                return false;
            }
        } else {
            five++;
        }
    }
    return true;
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        five, ten = 0, 0
        for bill in bills:
            if bill == 20:
                if ten > 0 and five > 0:
                    ten -= 1
                    five -= 1
                elif five >= 3:
                    five -= 3
                else:
                    return False
            elif bill == 10:
                ten += 1
                if five > 0:
                    five -= 1
                else:
                    return False
            else:
                five += 1
        return True
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Solution {
    public boolean lemonadeChange(int[] bills) {
        int five = 0, ten = 0;
        for (int bill : bills) {
            if (bill == 20) {
                if (ten > 0 && five > 0) {
                    ten--;
                    five--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            } else if (bill == 10) {
                ten++;
                if (five > 0) {
                    five--;
                } else {
                    return false;
                }
            } else {
                five++;
            }
        }
        return true;
    }
}
```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N)$, where N is the length of the bills array. We iterate through the array once.
- **Space Complexity:** $O(1)$, as we only use a constant amount of extra space for variables `five` and `ten`.

---

## References

- **LeetCode Problem:** [Lemonade Change](https://www.geeksforgeeks.org/problems/lemonade-change/0)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://www.geeksforgeeks.org/user/lakumvipwjge/)
