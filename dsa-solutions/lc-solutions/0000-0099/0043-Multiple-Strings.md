---
id: Multiple-Strings
title: Multiple-Strings(LeetCode)
sidebar_label: 0043-Multiple-Strings
tags:
  - Array
  - strings
description: Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
sidebar_position: 43
---

## Problem Statement:

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"

Constraints:

- `1 <= num1.length, num2.length <= 200`
- `num1 and num2 consist of digits only.`
- `Both num1 and num2 do not contain any leading zero, except the number 0 itself`

## Solutions:

### Intuition

The intuition behind the solution is based on how we perform multiplication by hand between two numbers. More precisely, when we multiply, say, a three-digit number by a two-digit number, we do it digit by digit and keep track of the carries. This process results in a series of partial products, which are then added together to form the final product.

To implement this in code, we need a data structure to store intermediate results. The approach is to use an array arr to store the digits of the partial products. The length of this array is the sum of the lengths of num1 and num2 because that's the maximum possible length of the result (e.g., 99 \* 99 is 9801, four digits long, which is the sum of the lengths of the numbers being multiplied).

Next, we iterate over each digit of `num1` and `num2` in nested loops, and for each pair of digits, we multiply them and add the result to the corresponding position in arr. The key formula for the index in arr where we should accumulate the product of digits at positions i and j is `arr[i+j+1]`.

After we have all the partial products, we then iterate through the arr array to handle carries at each position, adjusting each digit so that it represents a proper digit in a number (less than 10), and propagating the carry to the next position.

Finally, we need to return the string representation of the number stored in the array, but we skip any leading zeroes, as they don't contribute to the magnitude of the number. We join the remaining digits together to form the resulting product string to be returned.

### Solution Approach

The solution follows these steps:

1. Check for Zero: If either num1 or num2 is "0", the product is "0". We catch this case early to simplify further logic.

2. Initialization: Determine the lengths `m` and `n` of `num1` and `num2`, respectively. Initialize an array arr of length `m + n` to hold the digits of the product.

3. Digit-by-Digit Multiplication:

   - Iterate through the digits of num1 and num2 in descending order using two nested loops, with indices i and j.
   - Convert current digits to integers and multiply them: a \* b.
   - Add the multiplication result to an appropriate position in the array arr: arr[i + j + 1] += a \* b.
   - The position i + j + 1 comes from the fact that when you multiply a digit at position i of num1 with a digit at position j of num2, the result will contribute to the digits at positions i + j and i + j + 1 of the product.

4. Handling Carries:

   - Iterate backwards through arr, starting from the end, to process carries.
   - For each position, if the value is greater than 9, divide by 10 to find the carry and keep the remainder:
   - `arr[i - 1] += arr[i]` // 10: This propagates the carry to the next higher position.
   - `arr[i] %= 10`: This ensures that the current position has only a single digit.

5. Converting Array to String:

   - If the digit at the highest position (arr[0]) is zero, it's a leading zero and should be omitted. Determine the starting index for the conversion (i), which is 0 if there's no leading zero, and 1 otherwise.
   - Join the digits from the arr starting at the right index i to form a string without leading zeros: "".join(str(x) for x in arr[i:]).

This implementation doesn't use any special algorithms or data structures—it uses simple arrays and elementary math operations to simulate digit-by-digit multiplication, carefully considering the placement of each partial product and the handling of carries, just like manual multiplication on paper.

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <iostream>
      #include <string>

      using namespace std;

      string multiply(string num1, string num2) {
          string sum(num1.size() + num2.size(), '0');

          for (int i = num1.size() - 1; 0 <= i; --i) {
              int carry = 0;
              for (int j = num2.size() - 1; 0 <= j; --j) {
                  int tmp = (sum[i + j + 1] - '0') + (num1[i] - '0') * (num2[j] - '0') + carry;
                  sum[i + j + 1] = tmp % 10 + '0';
                  carry = tmp / 10;
              }
              sum[i] += carry;
          }

          size_t startpos = sum.find_first_not_of("0");
          if (string::npos != startpos) {
              return sum.substr(startpos);
          }
          return "0";
      }

      // Driver code
      int main() {
          string num1 = "123";
          string num2 = "456";
          cout << multiply(num1, num2) << endl;  // Output: "56088"
          return 0;
      }
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      public class Solution {
          public String multiply(String num1, String num2) {
              int m = num1.length(), n = num2.length();
              int[] pos = new int[m + n];

              for (int i = m - 1; i >= 0; i--) {
                  for (int j = n - 1; j >= 0; j--) {
                      int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
                      int p1 = i + j, p2 = i + j + 1;
                      int sum = mul + pos[p2];

                      pos[p1] += sum / 10;
                      pos[p2] = sum % 10;
                  }
              }

              StringBuilder sb = new StringBuilder();
              for (int p : pos) if (!(sb.length() == 0 && p == 0)) sb.append(p);
              return sb.length() == 0 ? "0" : sb.toString();
          }

          // Driver code
          public static void main(String[] args) {
              Solution sol = new Solution();
              String num1 = "123";
              String num2 = "456";
              System.out.println(sol.multiply(num1, num2));  // Output: "56088"
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      def multiply(num1: str, num2: str) -> str:
          if num1 == "0" or num2 == "0":
              return "0"

          result = [0] * (len(num1) + len(num2))

          for i in range(len(num1) - 1, -1, -1):
              for j in range(len(num2) - 1, -1, -1):
                  mul = (ord(num1[i]) - ord('0')) * (ord(num2[j]) - ord('0'))
                  p1, p2 = i + j, i + j + 1
                  summation = mul + result[p2]

                  result[p1] += summation // 10
                  result[p2] = summation % 10

          for i, num in enumerate(result):
              if num != 0:
                  break

          result = ''.join(map(str, result[i:]))
          return result

      # Driver code
      if __name__ == "__main__":
          num1 = "123"
          num2 = "456"
          print(multiply(num1, num2))  # Output: "56088"
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <string.h>
      #include <stdlib.h>

      char* multiply(char* num1, char* num2) {
          int len1 = strlen(num1);
          int len2 = strlen(num2);
          int* result = (int*)calloc(len1 + len2, sizeof(int));
          char* resStr = (char*)malloc((len1 + len2 + 1) * sizeof(char));
          memset(resStr, '0', len1 + len2);
          resStr[len1 + len2] = '\0';

          for (int i = len1 - 1; i >= 0; i--) {
              for (int j = len2 - 1; j >= 0; j--) {
                  int mul = (num1[i] - '0') * (num2[j] - '0');
                  int p1 = i + j;
                  int p2 = i + j + 1;
                  int sum = mul + result[p2];

                  result[p1] += sum / 10;
                  result[p2] = sum % 10;
              }
          }

          for (int i = 0; i < len1 + len2; i++) {
              resStr[i] = result[i] + '0';
          }

          while (*resStr == '0' && *(resStr + 1) != '\0') {
              resStr++;
          }

          return resStr;
      }

      // Driver code
      int main() {
          char num1[] = "123";
          char num2[] = "456";
          printf("%s\n", multiply(num1, num2));  // Output: "56088"
          return 0;
      }
      ```
    </TabItem>

</Tabs>

## Time and Space Complexity

### Time Complexity:

The time complexity of the given code is $O(m * n)$, where m and n are the lengths of the input strings num1 and num2 respectively. The code involves a double loop where the outer loop runs m times and the inner loop runs n times, leading to `m * n` multiplication operations. Additionally, there is a loop for carrying over the values, which runs in $O(m + n)$ time. However, since $O(m * n)$ dominates $O(m + n)$, the overall time complexity stays $O(m * n)$.

### Space Complexity:

The space complexity is $O(m + n)$, as an additional array arr of size `m + n` is used to store the intermediate results of the multiplication before they are converted to the final string result.
