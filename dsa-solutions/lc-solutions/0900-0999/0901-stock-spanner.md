---
id: stock-spanner
title: Stock Spanner
sidebar_label: 0901 - Stock Spanner
tags:
  - intermediate
  - stack
  - monotonic stack
  - algorithms
  - data structures
description: "This is a solution to the Stock Spanner on LeetCode."
---

## Problem Description

Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

**Example:**

If the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.

Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.

Implement the `StockSpanner` class:

- `StockSpanner()`: Initializes the object of the class.
- `int next(int price)`: Returns the span of the stock's price given that today's price is `price`.

### Example

**Example 1:**

```
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation:
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
```

### Constraints

- `1 <= price <= 10^5`
- At most `10^4` calls will be made to `next`.

## Solution Approach

### Intuition:

To efficiently determine the span of stock prices, we can utilize a monotonic stack. The stack will help us keep track of the days with prices less than or equal to the current day's price.

### Algorithm:

1. Use a stack to store pairs of `(price, span)`.
2. For each incoming price, check if the stack's top has a price less than or equal to the current price.
3. If it does, pop the stack and add the span of the popped element to the current span.
4. Push the current price and span onto the stack.
5. Return the span of the current price.

### Complexity:

- Time Complexity: $O(N)$, where N is the number of days.
- Space Complexity: $O(N)$, for storing prices and spans in the stack.

## Solution Implementation

### Code (C++):

```cpp
#include <stack>
using namespace std;

class StockSpanner {
private:
    stack<pair<int, int>> s;

public:
    StockSpanner() {}

    int next(int price) {
        int span = 1;
        while (!s.empty() && s.top().first <= price) {
            span += s.top().second;
            s.pop();
        }
        s.push({price, span});
        return span;
    }
};
```

### Code (Python):

```python
class StockSpanner:
    def __init__(self):
        self.stack = []

    def next(self, price: int) -> int:
        span = 1
        while self.stack and self.stack[-1][0] <= price:
            span += self.stack.pop()[1]
        self.stack.append((price, span))
        return span

# Example usage:
stockSpanner = StockSpanner()
print(stockSpanner.next(100))  # Output: 1
print(stockSpanner.next(80))   # Output: 1
print(stockSpanner.next(60))   # Output: 1
print(stockSpanner.next(70))   # Output: 2
print(stockSpanner.next(60))   # Output: 1
print(stockSpanner.next(75))   # Output: 4
print(stockSpanner.next(85))   # Output: 6
```

### Code (Java):

```java
import java.util.Stack;

class StockSpanner {
    private Stack<int[]> stack;

    public StockSpanner() {
        stack = new Stack<>();
    }

    public int next(int price) {
        int span = 1;
        while (!stack.isEmpty() && stack.peek()[0] <= price) {
            span += stack.pop()[1];
        }
        stack.push(new int[]{price, span});
        return span;
    }

    public static void main(String[] args) {
        StockSpanner stockSpanner = new StockSpanner();
        System.out.println(stockSpanner.next(100)); // Output: 1
        System.out.println(stockSpanner.next(80));  // Output: 1
        System.out.println(stockSpanner.next(60));  // Output: 1
        System.out.println(stockSpanner.next(70));  // Output: 2
        System.out.println(stockSpanner.next(60));  // Output: 1
        System.out.println(stockSpanner.next(75));  // Output: 4
        System.out.println(stockSpanner.next(85));  // Output: 6
    }
}
```

### Code (JavaScript):

```javascript
class StockSpanner {
  constructor() {
    this.stack = [];
  }

  next(price) {
    let span = 1;
    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1][0] <= price
    ) {
      span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
  }
}

// Example usage:
const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // Output: 1
console.log(stockSpanner.next(80)); // Output: 1
console.log(stockSpanner.next(60)); // Output: 1
console.log(stockSpanner.next(70)); // Output: 2
console.log(stockSpanner.next(60)); // Output: 1
console.log(stockSpanner.next(75)); // Output: 4
console.log(stockSpanner.next(85)); // Output: 6
```
