---
id: evaluate-reverse-polish-notation
title: Evaluate Reverse Polish Notation
sidebar_label: 150-Evaluate-Reverse-Polish_Notation
tags: 
    - Reverse Polish Notation
    - Stack
    - Evaluation
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Evaluate-Reverse-Polish_Notation](https://leetcode.com/problems/Evaluate-Reverse-Polish_Notation/description/) | [Evaluate-Reverse-Polish_Notation Solution on LeetCode](https://leetcode.com/problems/Evaluate-Reverse-Polish_Notation/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

You are given an array of strings `tokens` that represents an arithmetic expression in Reverse Polish Notation.

Evaluate the expression and return an integer that represents the value of the expression.

Note that:
- The valid operators are '+', '-', '*', and '/'.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in reverse polish notation.
- The answer and all the intermediate calculations can be represented in a 32-bit integer.

### Examples

#### Example 1
**Input**: `tokens = ["2", "1", "+", "3", "*"]`  
**Output**: `9`  
**Explanation**: ((2 + 1) * 3) = 9

#### Example 2
**Input**: `tokens = ["4", "13", "5", "/", "+"]`  
**Output**: `6`  
**Explanation**: (4 + (13 / 5)) = 6

#### Example 3
**Input**: `tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]`  
**Output**: `22`  
**Explanation**: 
((10 * (6 / ((9 + 3) * -11))) + 17) + 5  
= ((10 * (6 / (12 * -11))) + 17) + 5  
= ((10 * (6 / -132)) + 17) + 5  
= ((10 * 0) + 17) + 5  
= (0 + 17) + 5  
= 17 + 5  
= 22

## Constraints

- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"` or `"/"`, or an integer in the range `[-200, 200]`.

## Approach

1. Initialize an empty stack.
2. Iterate over each token in the `tokens` array:
   - If the token is an operand (integer), push it onto the stack.
   - If the token is an operator, pop the necessary number of operands from the stack, apply the operator, and push the result back onto the stack.
3. The final result will be the only element left in the stack.

## Solution in different languages:

### Solution in Python
```python
def evalRPN(tokens):
    stack = []
    for token in tokens:
        if token in "+-*/":
            b = stack.pop()
            a = stack.pop()
            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                stack.append(int(a / b))  # use int() for truncating towards zero
        else:
            stack.append(int(token))
    return stack[0]
```

### Solution in Java
```java
import java.util.Stack;

class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        for (String token : tokens) {
            if ("+-*/".contains(token)) {
                int b = stack.pop();
                int a = stack.pop();
                switch (token) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(a / b);
                        break;
                }
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
        return stack.pop();
    }
}
```

### Solution in C++
```cpp
#include <vector>
#include <string>
#include <stack>

class Solution {
public:
    int evalRPN(std::vector<std::string>& tokens) {
        std::stack<int> stack;
        for (const std::string& token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                int b = stack.top(); stack.pop();
                int a = stack.top(); stack.pop();
                if (token == "+") stack.push(a + b);
                else if (token == "-") stack.push(a - b);
                else if (token == "*") stack.push(a * b);
                else if (token == "/") stack.push(a / b);
            } else {
                stack.push(std::stoi(token));
            }
        }
        return stack.top();
    }
};
```

### Solution in C
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define STACK_SIZE 10000

typedef struct {
    int data[STACK_SIZE];
    int top;
} Stack;

void init(Stack* s) {
    s->top = -1;
}

void push(Stack* s, int value) {
    s->data[++s->top] = value;
}

int pop(Stack* s) {
    return s->data[s->top--];
}

int evalRPN(char ** tokens, int tokensSize){
    Stack stack;
    init(&stack);
    for (int i = 0; i < tokensSize; i++) {
        char *token = tokens[i];
        if (strcmp(token, "+") == 0 || strcmp(token, "-") == 0 || strcmp(token, "*") == 0 || strcmp(token, "/") == 0) {
            int b = pop(&stack);
            int a = pop(&stack);
            if (strcmp(token, "+") == 0) push(&stack, a + b);
            else if (strcmp(token, "-") == 0) push(&stack, a - b);
            else if (strcmp(token, "*") == 0) push(&stack, a * b);
            else if (strcmp(token, "/") == 0) push(&stack, a / b);
        } else {
            push(&stack, atoi(token));
        }
    }
    return pop(&stack);
}
```

### Solution in JavaScript
```js
var evalRPN = function(tokens) {
    const stack = [];
    for (const token of tokens) {
        if ("+-*/".includes(token)) {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};
```

### Step-by-step Algorithm
1. Initialize an empty stack.
2. Iterate through each token in the `tokens` list.
3. If the token is an operand (number), push it onto the stack.
4. If the token is an operator, pop two operands from the stack.
    - Apply the operator on the two operands.
    - Push the result back onto the stack.
5. Continue this process until all tokens are processed.
6. The final result will be the last item remaining in the stack.

### Conclusion
The Reverse Polish Notation evaluation is efficiently handled using a stack. This approach ensures that we can process the expression in a single pass through the tokens, leading to a time complexity of O(n) and a space complexity of O(n) where n is the number of tokens.