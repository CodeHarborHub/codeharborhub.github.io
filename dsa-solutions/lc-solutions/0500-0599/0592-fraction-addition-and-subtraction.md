---
id: fraction-addition-and-subtraction
title: Fraction Addition and Subtraction
sidebar_label: 0592 - Fraction Addition and Subtraction
tags:
  - Math
  - Simulation
  - String
description: "This is a solution to the Fraction Addition and Subtraction problem on LeetCode."
---

## Problem Description

Given a string `expression` representing an expression of fraction addition and subtraction, return the calculation result in string format.

The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator `1`. So in this case, `2` should be converted to `2/1`.

### Examples
**Example 1:**

```
Input: expression = "-1/2+1/2"
Output: "0/1"
```

**Example 2:**

```
Input: expression = "-1/2+1/2+1/3"
Output: "1/3
```

### Constraints

- The input string only contains `'0'` to `'9'`, `'/'`, `'+'` and `'-'`. So does the output.
- Each fraction (input and output) has the format `±numerator/denominator`. If the first input fraction or the output is positive, then `'+'` will be omitted.
- The input only contains valid **irreducible** fractions, where the **numerator** and **denominator** of each fraction will always be in the range `[1, 10]`. If the denominator is `1`, it means this fraction is actually an integer in a fraction format defined above.
- The number of given fractions will be in the range `[1, 10]`.
- The numerator and denominator of the **final result** are guaranteed to be valid and in the range of **32-bit** int.

## Solution for Fraction Addition and Subtraction

### Approach 1: Using LCM
The first obvious step to be undertaken is to split the given string into individual fractions. We split the string based on `+` and `-` sign. We store the signs in the order in which they appear in the string in sign array. Further, after getting the individual fractions, we further split the fractions based on `/` sign. Thus, we obtain the individual numerator and denominator parts. We store the same in num and den arrays respectively.

Now, we've got the data ready to be worked upon. In order to see the method we've used in this implementation, we'll take an example and understand the way we work on it.

Let's say, the given fraction is:

$$\frac{3}{2}+\frac{5}{3}-\frac{7}{6}$$

We need to equalize all the denominators so as to be able to add and subtract the numerators easily. The nearest value the denominators can be scaled upto is the LCM of all the denominators. Thus, we need to find the LCM of all the denominators and then multiply all the denominators with appropriate integer factors to make them equal to the LCM. But, in order to keep the individual fraction values unchanged, we need to multiply the individual numerators also with the same factors.
In order to find the LCM, we can go as follows. We use the method lcm(a,b,c)=lcm(lcm(a,b),c). Thus, if we can compute the lcm of two denominators, we can keep on repeating the process iteratively over the denominators to get the overall lcm. To find the lcm of two numbers a and b, we use lcm(a,b)=(a∗b)/gcd(a,b). For the above example, the lcm turns out to be 6.
Thus, we scale up the denominators to 6 as follows:

$$\frac{3*3}{2*3}+\frac{5*2}{3*2}-\frac{7}{6}$$

Thus, we can observe that, the scaling factor for a fraction $$\frac{num}{den}$$ is given by: $num∗x/den*x$, where x is the corresponding scaling factor. Note that, $den∗x=lcm$. Thus, $x=lcm/denx$. Thus, we find out the corresponding scaling factor $x_i$ for each fraction.

After this, we can directly add or subtract the new scaled numerators.

In the current example, we obtain $$\frac{12}{6}$$ as the result. Now, we need to convert this into an irreducible fraction. Thus, if we obtain $$\frac{num_i}{den_i}$$ as the final result, we need to find a largest factor y, which divides both $num_i$ and $den_i$. Such a number, as we know, is the gcd of $num_i$ and $den_i$.

Thus, to convert the result $$\frac{num_i}{den_i}$$ we divide both the numerator and denominator by the gcd of the two numbers y to obtain the final irreducible $$\frac{num_i/y}{den_i/y}$$

Note: A problem with this approach is that we find the lcm of all the denominators in a single go and then reduce the overall fraction at the end. Thus, the lcm value could become very large and could lead to an overflow. But, this solution suffices for the current range of numbers.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>

class Solution {
public:
    std::string fractionAddition(std::string expression) {
        std::vector<char> sign;
        for (int i = 1; i < expression.length(); i++) {
            if (expression[i] == '+' || expression[i] == '-')
                sign.push_back(expression[i]);
        }
        std::vector<int> num, den;
        std::istringstream iss(expression);
        std::string sub, subsub;
        while (std::getline(iss, sub, '+')) {
            std::istringstream iss2(sub);
            while (std::getline(iss2, subsub, '-')) {
                if (!subsub.empty()) {
                    std::size_t pos = subsub.find('/');
                    num.push_back(std::stoi(subsub.substr(0, pos)));
                    den.push_back(std::stoi(subsub.substr(pos + 1)));
                }
            }
        }
        if (expression[0] == '-') num[0] = -num[0];
        int lcm = 1;
        for (int x : den) {
            lcm = lcm_(lcm, x);
        }

        int res = lcm / den[0] * num[0];
        for (int i = 1; i < num.size(); i++) {
            if (sign[i - 1] == '+') res += lcm / den[i] * num[i];
            else res -= lcm / den[i] * num[i];
        }
        int g = gcd(std::abs(res), std::abs(lcm));
        return std::to_string(res / g) + "/" + std::to_string(lcm / g);
    }

private:
    int lcm_(int a, int b) {
        return a * b / gcd(a, b);
    }

    int gcd(int a, int b) {
        while (b != 0) {
            int t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
  public String fractionAddition(String expression) {
    List<Character> sign = new ArrayList<>();
    for (int i = 1; i < expression.length(); i++) {
      if (expression.charAt(i) == '+' || expression.charAt(i) == '-')
        sign.add(expression.charAt(i));
    }
    List<Integer> num = new ArrayList<>();
    List<Integer> den = new ArrayList<>();
    for (String sub : expression.split("\\+")) {
      for (String subsub : sub.split("-")) {
        if (subsub.length() > 0) {
          String[] fraction = subsub.split("/");
          num.add(Integer.parseInt(fraction[0]));
          den.add(Integer.parseInt(fraction[1]));
        }
      }
    }
    if (expression.charAt(0) == '-') num.set(0, -num.get(0));
    int lcm = 1;
    for (int x : den) {
      lcm = lcm_(lcm, x);
    }

    int res = lcm / den.get(0) * num.get(0);
    for (int i = 1; i < num.size(); i++) {
      if (sign.get(i - 1) == '+') res += lcm / den.get(i) * num.get(i);
      else res -= lcm / den.get(i) * num.get(i);
    }
    int g = gcd(Math.abs(res), Math.abs(lcm));
    return (res / g) + "/" + (lcm / g);
  }

  public int lcm_(int a, int b) {
    return a * b / gcd(a, b);
  }

  public int gcd(int a, int b) {
    while (b != 0) {
      int t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from typing import List

class Solution:
    def fractionAddition(self, expression: str) -> str:
        sign: List[str] = []
        for i in range(1, len(expression)):
            if expression[i] in ['+', '-']:
                sign.append(expression[i])
        
        num: List[int] = []
        den: List[int] = []
        for sub in expression.split('+'):
            for subsub in sub.split('-'):
                if subsub:
                    fraction = subsub.split('/')
                    num.append(int(fraction[0]))
                    den.append(int(fraction[1]))
        
        if expression[0] == '-':
            num[0] = -num[0]
        
        lcm = 1
        for x in den:
            lcm = self.lcm(lcm, x)
        
        res = lcm // den[0] * num[0]
        for i in range(1, len(num)):
            if sign[i-1] == '+':
                res += lcm // den[i] * num[i]
            else:
                res -= lcm // den[i] * num[i]
        
        g = self.gcd(abs(res), abs(lcm))
        return f"{res // g}/{lcm // g}"
    
    def lcm(self, a: int, b: int) -> int:
        return a * b // self.gcd(a, b)
    
    def gcd(self, a: int, b: int) -> int:
        while b != 0:
            t = b
            b = a % b
            a = t
        return a
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(nlogx)$

> **Reason**: Euclidean GCD algorithm takes O(log⁡(ab)) time for finding gcd of two numbers a and b. Here n refers to the number of fractions in the input string and x is the maximum possible value of denominator.

### Space Complexity: $O(n)$

> **Reason**: Size of num, denand sign list grows upto n.

## References

- **LeetCode Problem**: [Fraction Addition and Subtraction](https://leetcode.com/problems/fraction-addition-and-subtraction/description/)

- **Solution Link**: [Fraction Addition and Subtraction](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>