---
id: complex-number-multiplication
title: Complex Number Multiplication
sidebar_label: 0537 - Complex Number Multiplication
tags:
  - Math
  - String
  - Simulation
description: "This is a solution to the Complex Number Multiplication problem on LeetCode."
---

## Problem Description

A complex number can be represented as a string on the form `"real+imaginaryi"` where:

- `real` is the real part and is an integer in the range `[-100, 100]`.
- `imaginary` is the imaginary part and is an integer in the range `[-100, 100]`.
- $i^2 == -1$.

Given two complex numbers `num1` and `num2` as strings, return a string of the complex number that represents their multiplications.

 
### Examples

**Example 1:**


```
Input: num1 = "1+1i", num2 = "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
```

**Example 2:**

```
Input: num1 = "1+-1i", num2 = "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
```

### Constraints

- `num1` and `num2` are valid complex numbers.

## Solution for Complex Number Multiplication

### Approach 1: 
#### Algorithm

Multiplication of two complex numbers can be done as:

$(a+ib)×(x+iy)=ax+i^2by+i(bx+ay)=ax−by+i(bx+ay)$

We simply split up the real and the imaginary parts of the given complex strings based on the '+' and the 'i' symbols. We store the real parts of the two strings a and b as x[0] and y[0] respectively and the imaginary parts as x[1] and y[1] respectively. Then, we multiply the real and the imaginary parts as required after converting the extracted parts into integers. Then, we again form the return string in the required format and return the result.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <iostream>
#include <string>
#include <sstream>

class Solution {
public:
    std::string complexNumberMultiply(std::string num1, std::string num2) {
        auto parseComplex = [](const std::string& s) -> std::pair<int, int> {
            std::stringstream ss(s);
            std::string realPart, imagPart;
            getline(ss, realPart, '+');
            getline(ss, imagPart, 'i');
            return {std::stoi(realPart), std::stoi(imagPart)};
        };

        auto [a_real, a_img] = parseComplex(num1);
        auto [b_real, b_img] = parseComplex(num2);

        int real = a_real * b_real - a_img * b_img;
        int img = a_real * b_img + a_img * b_real;

        return std::to_string(real) + "+" + std::to_string(img) + "i";
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java

public class Solution {

    public String complexNumberMultiply(String a, String b) {
        String x[] = a.split("\\+|i");
        String y[] = b.split("\\+|i");
        int a_real = Integer.parseInt(x[0]);
        int a_img = Integer.parseInt(x[1]);
        int b_real = Integer.parseInt(y[0]);
        int b_img = Integer.parseInt(y[1]);
        return (a_real * b_real - a_img * b_img) + "+" + (a_real * b_img + a_img * b_real) + "i";

    }
}

```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def complexNumberMultiply(self, a: str, b: str) -> str:
        def parse_complex(s: str):
            real, imag = s.split('+')
            imag = imag[:-1]  # remove the trailing 'i'
            return int(real), int(imag)

        a_real, a_img = parse_complex(a)
        b_real, b_img = parse_complex(b)

        real = a_real * b_real - a_img * b_img
        img = a_real * b_img + a_img * b_real

        return f"{real}+{img}i"
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(1)$

> **Reason**: Here splitting takes constant time as length of the string is very small `(<20)`.

### Space Complexity: $O(1)$

> **Reason**: Constant extra space is used.

## References

- **LeetCode Problem**: [Complex Number Multiplication](https://leetcode.com/problems/complex-number-multiplication/description/)

- **Solution Link**: [Complex Number Multiplication](https://leetcode.com/problems/complex-number-multiplication/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>