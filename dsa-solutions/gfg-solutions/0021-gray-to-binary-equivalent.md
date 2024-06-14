---
id: gray-to-binary-equivalent
title: Gray to Binary Equivalent
sidebar_label: 0021 Gray to Binary Equivalent
tags:
  - Bit Manipulation
  - Brute Force
  - Optimization
  - Space Complexity
  - Time Complexity
  - JavaScript
  - TypeScript
  - Python
  - Java
  - C++
description: "This document explores different approaches to solving the Gray to Binary Equivalent problem, including brute force, bit manipulation, and optimization techniques, in various programming languages."
---

## Problem

Given an integer number `n`, which is a decimal representation of Gray Code, find the binary equivalent of the Gray Code and return the decimal representation of the binary equivalent.

![table](https://media.geeksforgeeks.org/img-practice/ScreenShot2021-08-27at10-1630039200.png)

### Example

**Example 1:**

```
Input:
n = 4

Output:
7

Explanation:
Given 4, its gray code = 110.
Binary equivalent of the gray code 110 is 100.
Return 7 representing gray code 100.
```

**Example 2:**

```
Input:
n = 15

Output:
10
Explanation:

Given 15 representing gray code 1000.
Binary equivalent of gray code 1000 is 1111.
Return 10 representing gray code 1111 (binary 1010).
```


**Your Task:** You don't need to read input or print anything. Your task is to complete the function `grayToBinary()` which accepts an integer `n` as an input parameter and returns the decimal representation of the binary equivalent of the given gray code.

- Expected Time Complexity: $ O(log (n)) $.
- Expected Auxiliary Space: $O(1)$ . 

### Constraints:
- $ 0 <= n <= 10^9$

## Solutions

<Tabs>
  <tabItem value="brute force" label="Brute Force" default>
    
### Brute Force

    This approach uses brute force by first converting the decimal number to binary and then applying Gray Code logic to find the decimal representation of the binary equivalent.
    
#### Implementation
- Convert decimal to binary.
- Apply Gray Code logic to get binary equivalent.
- Convert binary back to decimal.
    
```jsx live
function GrayToBinaryBruteForce() {
  const decimalInput = 15; // Sample input

  const grayToBinaryBruteForce = function (n) {
    let binary = [];
    while (n) {
      binary.push(n % 2);
      n = Math.floor(n / 2);
    }
    while (binary.length < 32) {
      binary.push(0);
    }
    binary.reverse();

    let grayCode = [];
    let j = 0;
    while (binary[j] === 0) {
      j++;
    }
    grayCode[j] = binary[j];
    for (let i = j + 1; i < 32; i++) {
      grayCode[i] = grayCode[i - 1] ^ binary[i];
    }

    let grayCodeNum = 0;
    for (let i = 31; i >= 0; i--) {
      if (grayCode[i]) {
        grayCodeNum += Math.pow(2, 31 - i);
      }
    }

    return grayCodeNum;
  };

  const result = grayToBinaryBruteForce(decimalInput);

  return (
    <div>
      <p>
        <b>Input:</b> n = {decimalInput}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code Snippets

<Tabs>

<TabItem value="JavaScript" label="JavaScript">

      ```javascript
class Solution {
    decimalToBinary(binary, n) {
        while (n) {
            if (n % 2) binary.push(1);
            else binary.push(0);
            n = Math.floor(n / 2);
        }
        
        while (binary.length < 32) binary.push(0);
        
        binary.reverse();
    }
    
    help(binary) {
        const grayCode = new Array(32).fill(0);
        
        let j = 0;
        while (binary[j] === 0) j++;
        
        grayCode[j] = binary[j];
        for (let i = j + 1; i < 32; i++) {
            grayCode[i] = grayCode[i - 1] ^ binary[i];
        }
        
        let grayCodeNum = 0;
        for (let i = 31; i >= 0; i--) {
            if (grayCode[i]) grayCodeNum += 2 ** (31 - i);
        }
        
        return grayCodeNum;
    }
    
    grayToBinary(n) {
        const binary = [];
        this.decimalToBinary(binary, n);
        return this.help(binary);
    }
}

      ```

</TabItem>
      <TabItem value="TypeScript" label="TypeScript">

      ```typescript
class Solution {
    decimalToBinary(binary: number[], n: number): void {
        while (n) {
            if (n % 2) binary.push(1);
            else binary.push(0);
            n = Math.floor(n / 2);
        }
        
        while (binary.length < 32) binary.push(0);
        
        binary.reverse();
    }
    
    help(binary: number[]): number {
        const grayCode: number[] = new Array(32).fill(0);
        
        let j = 0;
        while (binary[j] === 0) j++;
        
        grayCode[j] = binary[j];
        for (let i = j + 1; i < 32; i++) {
            grayCode[i] = grayCode[i - 1] ^ binary[i];
        }
        
        let grayCodeNum = 0;
        for (let i = 31; i >= 0; i--) {
            if (grayCode[i]) grayCodeNum += 2 ** (31 - i);
        }
        
        return grayCodeNum;
    }
    
    grayToBinary(n: number): number {
        const binary: number[] = [];
        this.decimalToBinary(binary, n);
        return this.help(binary);
    }
}

      ```

</TabItem>
      <TabItem value="cpp" label="C++">

      ```cpp
class Solution{
    public:
    void decimalToBinary(vector<int>& binary,int n)
    {
        while(n)
        {
            if((n%2))
            binary.push_back(1);
            else
            binary.push_back(0);
            
            n/=2;
        }
        
        while(binary.size()<32)
        binary.push_back(0);
        
        reverse(binary.begin(),binary.end());
    }
    int help(vector<int>& binary)
    {
        vector<int> grayCode(32,0);
        
        int j=0;
        while(binary[j]==0)
        j++;
        
        grayCode[j]=binary[j];
        for(int i=j+1;i<32;i++)
        grayCode[i]=grayCode[i-1]^binary[i];
        
        int grayCodeNum=0;
        for(int i=31;i>=0;i--)
        {
            if(grayCode[i])
            grayCodeNum+=pow(2,31-i);
        }
        return grayCodeNum;
    }
    int grayToBinary(int n)
    {
        vector<int> binary;
        decimalToBinary(binary,n);
        return help(binary);
    }
};
      ```

</TabItem>
      <TabItem value="python" label="Python">

      ```python
class Solution:
    def decimalToBinary(self, binary, n):
        while n:
            if n % 2:
                binary.append(1)
            else:
                binary.append(0)
            n //= 2
        
        while len(binary) < 32:
            binary.append(0)
        
        binary.reverse()
    
    def help(self, binary):
        grayCode = [0] * 32
        
        j = 0
        while binary[j] == 0:
            j += 1
        
        grayCode[j] = binary[j]
        for i in range(j + 1, 32):
            grayCode[i] = grayCode[i - 1] ^ binary[i]
        
        grayCodeNum = 0
        for i in range(31, -1, -1):
            if grayCode[i]:
                grayCodeNum += 2 ** (31 - i)
        
        return grayCodeNum
    
    def grayToBinary(self, n):
        binary = []
        self.decimalToBinary(binary, n)
        return self.help(binary)

      ```

</TabItem>
      <TabItem value="java" label="Java">

      ```java
import java.util.*;

class Solution {
    void decimalToBinary(ArrayList<Integer> binary, int n) {
        while (n > 0) {
            if (n % 2 == 1) binary.add(1);
            else binary.add(0);
            n /= 2;
        }
        
        while (binary.size() < 32) binary.add(0);
        
        Collections.reverse(binary);
    }
    
    int help(ArrayList<Integer> binary) {
        int[] grayCode = new int[32];
        
        int j = 0;
        while (binary.get(j) == 0) j++;
        
        grayCode[j] = binary.get(j);
        for (int i = j + 1; i < 32; i++) {
            grayCode[i] = grayCode[i - 1] ^ binary.get(i);
        }
        
        int grayCodeNum = 0;
        for (int i = 31; i >= 0; i--) {
            if (grayCode[i] == 1) grayCodeNum += Math.pow(2, 31 - i);
        }
        
        return grayCodeNum;
    }
    
    int grayToBinary(int n) {
        ArrayList<Integer> binary = new ArrayList<>();
        decimalToBinary(binary, n);
        return help(binary);
    }
}
      ```

</TabItem>
</Tabs>

#### Complexity Analysis
- Time complexity: O(logN)
- Space complexity: O(32) (constant)

</tabItem>
  
  <tabItem value="bit manipulation" label="Bit Manipulation">
    
### Bit Manipulation

    This approach utilizes bit manipulation to directly compute the Gray Code's binary equivalent without converting to binary first.
    
#### Implementation

- Use bit manipulation to apply Gray Code logic directly.
    
```jsx live
function GrayToBinaryBitManipulation() {
  const decimalInput = 15; // Sample input

  const grayToBinaryBitManipulation = function (n) {
    let grayCodeDecimal = 0;
    let mask = 0;
    let i = 0;
    while (n > 0) {
      if (i % 2 === 0) {
        grayCodeDecimal ^= n;
      } else {
        mask ^= n;
      }
      n >>= 1;
      i++;
    }
    grayCodeDecimal ^= mask;
    return grayCodeDecimal;
  };

  const result = grayToBinaryBitManipulation(decimalInput);

  return (
    <div>
      <p>
        <b>Input:</b> n = {decimalInput}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code Snippets

<Tabs>
<TabItem value="JavaScript" label="JavaScript">

      ```javascript
class Solution {
    help(n) {
        const grayCode = new Array(32).fill(0);
        
        let j = 0;
        while (j <= 31 && (n & (1 << (31 - j))) === 0) {
            j++;
        }
        
        grayCode[j] = !!(n & (1 << (31 - j)));
        for (let i = j + 1; i < 32; i++) {
            const bin = !!(n & (1 << (31 - i)));
            const gray = grayCode[i - 1];
            grayCode[i] = bin ^ gray;
        }
        
        let grayCodeDecimal = 0;
        for (let i = 31; i >= 0; i--) {
            if (grayCode[i]) {
                grayCodeDecimal |= (1 << (31 - i));
            }
        }
        
        return grayCodeDecimal;
    }
    
    grayToBinary(n) {
        return this.help(n);
    }
}
      ```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

      ```typescript
class Solution {
    help(n: number): number {
        const grayCode: number[] = new Array(32).fill(0);
        
        let j = 0;
        while (j <= 31 && (n & (1 << (31 - j))) === 0) {
            j++;
        }
        
        grayCode[j] = !!(n & (1 << (31 - j)));
        for (let i = j + 1; i < 32; i++) {
            const bin = !!(n & (1 << (31 - i)));
            const gray = grayCode[i - 1];
            grayCode[i] = bin ^ gray;
        }
        
        let grayCodeDecimal = 0;
        for (let i = 31; i >= 0; i--) {
            if (grayCode[i]) {
                grayCodeDecimal |= (1 << (31 - i));
            }
        }
        
        return grayCodeDecimal;
    }
    
    grayToBinary(n: number): number {
        return this.help(n);
    }
}
      ```

</TabItem>
<TabItem value="cpp" label="C++">

      ```cpp
class Solution{
    public:
    int help(int n)
    {   
        vector<int> grayCode(32,0);
        
        int j=0;
        while(j<=31 and (n&(1<<(31-j)))==0)
        j++;
        
        grayCode[j]=bool(n&(1<<(31-j)));
        for(int i=j+1;i<32;i++)
        {
            int bin=bool(n&(1<<(31-i)));
            int gray=grayCode[i-1];
            grayCode[i]=bin^gray;
        }
        
        int grayCodeDecimal=0;
        for(int i=31;i>=0;i--)
        {
            if(grayCode[i])
            grayCodeDecimal|=(1<<31-i);
        }
        
        return grayCodeDecimal;
    }
    int grayToBinary(int n)
    {
        return help(n);
    }
};
      ```

</TabItem>
<TabItem value="python" label="Python">

      ```python
class Solution:
    def help(self, n):
        grayCode = [0] * 32
        
        j = 0
        while j <= 31 and (n & (1 << (31 - j))) == 0:
            j += 1
        
        grayCode[j] = bool(n & (1 << (31 - j)))
        for i in range(j + 1, 32):
            bin_val = bool(n & (1 << (31 - i)))
            gray_val = grayCode[i - 1]
            grayCode[i] = bin_val ^ gray_val
        
        grayCodeDecimal = 0
        for i in range(31, -1, -1):
            if grayCode[i]:
                grayCodeDecimal |= (1 << (31 - i))
        
        return grayCodeDecimal
    
    def grayToBinary(self, n):
        return self.help(n)
      ```

</TabItem>
<TabItem value="java" label="Java">

      ```java
 import java.util.*;

class Solution {
    int help(int n) {
        int[] grayCode = new int[32];
        
        int j = 0;
        while (j <= 31 && (n & (1 << (31 - j))) == 0) {
            j++;
        }
        
        grayCode[j] = (n & (1 << (31 - j))) == 0 ? 0 : 1;
        for (int i = j + 1; i < 32; i++) {
            int bin = (n & (1 << (31 - i))) == 0 ? 0 : 1;
            int gray = grayCode[i - 1];
            grayCode[i] = bin ^ gray;
        }
        
        int grayCodeDecimal = 0;
        for (int i = 31; i >= 0; i--) {
            if (grayCode[i] == 1) {
                grayCodeDecimal |= (1 << (31 - i));
            }
        }
        
        return grayCodeDecimal;
    }
    
    int grayToBinary(int n) {
        return help(n);
    }
}
      ```

</TabItem>
</Tabs>

#### Complexity Analysis:
- Time complexity: O(32) (constant)
- Space complexity: O(32) (constant)

</tabItem>
  
  <tabItem value="optimized" label="Optimized">
    
### Optimized 

    This approach optimizes the bit manipulation approach by directly calculating the Gray Code's binary equivalent without using extra storage.
    
#### Implementation

- Use bit manipulation without extra storage.

```jsx live
function GrayToBinaryOptimized() {
  const decimalInput = 15; // Sample input

  const grayToBinaryOptimized = function (n) {
    let ans = 0;
    while (n > 0) {
      ans ^= n;
      n >>= 1;
    }
    return ans;
  };

  const result = grayToBinaryOptimized(decimalInput);

  return (
    <div>
      <p>
        <b>Input:</b> n = {decimalInput}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```    


#### Code Snippets

<Tabs>
<TabItem value="JavaScript" label="JavaScript">

      ```javascript
class Solution {
    help(n) {
        const grayCode = new Array(32).fill(0);
        
        let j = 0;
        while (j <= 31 && (n & (1 << (31 - j))) === 0) {
            j++;
        }
        
        grayCode[j] = !!(n & (1 << (31 - j)));
        for (let i = j + 1; i < 32; i++) {
            const bin = !!(n & (1 << (31 - i)));
            const gray = grayCode[i - 1];
            grayCode[i] = bin ^ gray;
        }
        
        let grayCodeDecimal = 0;
        for (let i = 31; i >= 0; i--) {
            if (grayCode[i]) {
                grayCodeDecimal |= (1 << (31 - i));
            }
        }
        
        return grayCodeDecimal;
    }
    
    grayToBinary(n) {
        return this.help(n);
    }
}
      ```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

      ```typescript
class Solution {
    help(n: number): number {
        const grayCode: number[] = new Array(32).fill(0);
        
        let j = 0;
        while (j <= 31 && (n & (1 << (31 - j))) === 0) {
            j++;
        }
        
        grayCode[j] = !!(n & (1 << (31 - j)));
        for (let i = j + 1; i < 32; i++) {
            const bin = !!(n & (1 << (31 - i)));
            const gray = grayCode[i - 1];
            grayCode[i] = bin ^ gray;
        }
        
        let grayCodeDecimal = 0;
        for (let i = 31; i >= 0; i--) {
            if (grayCode[i]) {
                grayCodeDecimal |= (1 << (31 - i));
            }
        }
        
        return grayCodeDecimal;
    }
    
    grayToBinary(n: number): number {
        return this.help(n);
    }
}
      ```

</TabItem>
      <TabItem value="cpp" label="C++">

      ```cpp
class Solution{
    public:
    int help(int n)
    {   
        vector<int> grayCode(32,0);
        
        int j=0;
        while(j<=31 and (n&(1<<(31-j)))==0)
        j++;
        
        grayCode[j]=bool(n&(1<<(31-j)));
        for(int i=j+1;i<32;i++)
        {
            int bin=bool(n&(1<<(31-i)));
            int gray=grayCode[i-1];
            grayCode[i]=bin^gray;
        }
        
        int grayCodeDecimal=0;
        for(int i=31;i>=0;i--)
        {
            if(grayCode[i])
            grayCodeDecimal|=(1<<31-i);
        }
        
        return grayCodeDecimal;
    }
    int grayToBinary(int n)
    {
        return help(n);
    }
};
      ```

</TabItem>
      <TabItem value="python" label="Python">

      ```python
    class Solution:
        def help(self, n):
            grayCode = [0] * 32
            
            j = 0
            while j <= 31 and (n & (1 << (31 - j))) == 0:
                j += 1
            
            grayCode[j] = bool(n & (1 << (31 - j)))
            for i in range(j + 1, 32):
                bin_val = bool(n & (1 << (31 - i)))
                gray_val = grayCode[i - 1]
                grayCode[i] = bin_val ^ gray_val
            
            grayCodeDecimal = 0
            for i in range(31, -1, -1):
                if grayCode[i]:
                    grayCodeDecimal |= (1 << (31 - i))
            
            return grayCodeDecimal
        
        def grayToBinary(self, n):
            return self.help(n)
      ```

</TabItem>
      <TabItem value="java" label="Java">

      ```java
import java.util.*;

class Solution {
    int help(int n) {
        int[] grayCode = new int[32];
        
        int j = 0;
        while (j <= 31 && (n & (1 << (31 - j))) == 0) {
            j++;
        }
        
        grayCode[j] = (n & (1 << (31 - j))) == 0 ? 0 : 1;
        for (int i = j + 1; i < 32; i++) {
            int bin = (n & (1 << (31 - i))) == 0 ? 0 : 1;
            int gray = grayCode[i - 1];
            grayCode[i] = bin ^ gray;
        }
        
        int grayCodeDecimal = 0;
        for (int i = 31; i >= 0; i--) {
            if (grayCode[i] == 1) {
                grayCodeDecimal |= (1 << (31 - i));
            }
        }
        
        return grayCodeDecimal;
    }
    
    int grayToBinary(int n) {
        return help(n);
    }
}
      ```

</TabItem>
    </Tabs>

#### Complexity Analysis

- Time complexity: O(32) (constant)
- Space complexity: O(1) (constant)

</tabItem>
</Tabs>

:::tip Note

To convert Gray code to binary efficiently, consider using bit manipulation techniques. Bitwise operations such as XOR (^) can be particularly useful in simplifying the conversion process, leading to optimized solutions with constant time complexity.

:::

---

## References

- **LeetCode Problem:** [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- **Solution Link:** [Best Time to Buy and Sell Stock Solution on LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://www.geeksforgeeks.org/user/lakumvipwjge/)
