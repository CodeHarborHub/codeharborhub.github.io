---
id: edit-distance
title: Edit Distance using Dynamic Programming
sidebar_label: Edit Distance
tags: [python, java, c++, javascript, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Edit Distance problem and its solution using Dynamic Programming in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Edit Distance using Dynamic Programming

Edit Distance, also known as Levenshtein distance, is a classic problem in computer science that measures the minimum number of operations required to transform one string into another. The allowed operations are insertion, deletion, and substitution.

## Problem Statement

Given two strings, find the minimum number of operations required to transform one string into the other.

### Intuition

The problem can be solved efficiently using dynamic programming by breaking it down into subproblems. The idea is to create a DP table where `dp[i][j]` represents the edit distance between the first `i` characters of the first string and the first `j` characters of the second string.

## Dynamic Programming Approach

Using dynamic programming, we fill the table based on the recurrence relation:
- If the characters are the same, no new operation is needed.
- If the characters are different, consider the minimum cost of the three operations: insertion, deletion, and substitution.

## Pseudocode for Edit Distance using DP

#### Initialize:

```markdown
for i from 0 to m:
    dp[i][0] = i
for j from 0 to n:
    dp[0][j] = j

for i from 1 to m:
    for j from 1 to n:
        if str1[i-1] == str2[j-1]:
            dp[i][j] = dp[i-1][j-1]
        else:
            dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])

return dp[m][n]
```

### Example Output:

Given the strings:
- str1 = "kitten"
- str2 = "sitting"

The minimum edit distance between `str1` and `str2` is `3`.

### Output Explanation:

The edit distance of `3` can be achieved by the following operations:

- Replace 'k' with 's': kitten -> sitten
- Replace 'e' with 'i': sitten -> sittin
- Insert 'g' at the end: sittin -> sitting

Therefore, the output is: `Minimum edit distance is: 3`

## Implementing Edit Distance using DP

### Python Implementation

```python
def edit_distance(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]  # DP table initialization

    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0:
                dp[i][j] = j  # If first string is empty, insert all characters of second string
            elif j == 0:
                dp[i][j] = i  # If second string is empty, remove all characters of first string
            elif str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j],    # Remove
                                   dp[i][j - 1],    # Insert
                                   dp[i - 1][j - 1])  # Replace

    return dp[m][n]

str1 = "kitten"
str2 = "sitting"
print("Minimum edit distance is:", edit_distance(str1, str2))

```

### Java Implementation

```java
public class EditDistance {
    public static int editDistance(String str1, String str2) {
        int m = str1.length();
        int n = str2.length();
        int[][] dp = new int[m + 1][n + 1];  // DP table initialization

        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0) {
                    dp[i][j] = j;  // If first string is empty, insert all characters of second string
                } else if (j == 0) {
                    dp[i][j] = i;  // If second string is empty, remove all characters of first string
                } else if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j],    // Remove
                                            Math.min(dp[i][j - 1],    // Insert
                                                     dp[i - 1][j - 1]));  // Replace
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {
        String str1 = "kitten";
        String str2 = "sitting";
        System.out.println("Minimum edit distance is: " + editDistance(str1, str2));
    }
}

```
### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int editDistance(string str1, string str2) {
    int m = str1.length();
    int n = str2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));  // DP table initialization

    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            if (i == 0) {
                dp[i][j] = j;  // If first string is empty, insert all characters of second string
            } else if (j == 0) {
                dp[i][j] = i;  // If second string is empty, remove all characters of first string
            } else if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min({dp[i - 1][j],    // Remove
                                   dp[i][j - 1],    // Insert
                                   dp[i - 1][j - 1]});  // Replace
            }
        }
    }

    return dp[m][n];
}

int main() {
    string str1 = "kitten";
    string str2 = "sitting";
    cout << "Minimum edit distance is: " << editDistance(str1, str2) << endl;
    return 0;
}

```

### JavaScript Implementation

```javascript
function editDistance(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));  // DP table initialization

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;  // If first string is empty, insert all characters of second string
            } else if (j === 0) {
                dp[i][j] = i;  // If second string is empty, remove all characters of first string
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j],    // Remove
                                        dp[i][j - 1],    // Insert
                                        dp[i - 1][j - 1]);  // Replace
            }
        }
    }

    return dp[m][n];
}

let str1 = "kitten";
let str2 = "sitting";
console.log("Minimum edit distance is:", editDistance(str1, str2));

```

## Complexity Analysis

- Time Complexity: $O(m \times n)$, where m and n are the lengths of the two strings.
- Space Complexity: $O(m \times n)$, for storing the DP table.

## Conclusion

Dynamic programming provides an efficient solution for the Edit Distance problem by breaking it into subproblems and storing intermediate results. This technique can be extended to solve other problems with overlapping subproblems and optimal substructure properties.