---
id: z-algorithm
title: Z-Algorithm
sidebar_label: Z-Algorithm
tags: [python, java, c++, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Z-Algorithm and its implementation in Python, Java, and C++ with detailed explanations and examples.
---

# Z-Algorithm

The Z-Algorithm is a linear time algorithm used for pattern matching within a string. It is commonly used to compute the Z-array, which provides information about the occurrences of a substring within a string. The Z-array for a string `S` is an array where the `i-th` position represents the length of the longest substring starting from `S[i]` that matches a prefix of `S`.

## Problem Statement

Given a string `S` of length `n`, the Z-array of `S` is an array `Z` of length `n` where `Z[i]` is the length of the longest substring starting from `S[i]` which is also a prefix of `S`. 

## Example

For the string `S = "aabcaabxaaaz"`, the Z-array would be `[0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 0]`.

## Algorithm

1. Initialize `L` and `R` to 0. These will define the interval `[L, R]` which is the rightmost segment of `S` that matches the prefix of `S`.
2. Iterate over each character in the string and compute the Z-values based on the interval `[L, R]`.
3. If the current index `i` is outside of `[L, R]`, calculate the Z-value directly.
4. If `i` is within `[L, R]`, use previously computed Z-values to determine the Z-value at `i`.

## Code for Z-Algorithm

## Z-Algorithm

The Z-Algorithm is used for string pattern matching and finding the Z-array, which represents the lengths of the longest substrings starting from each position in a string that match the prefix of the string.

### Python Implementation

```python
def compute_z(s):
    n = len(s)
    z = [0] * n
    l, r, k = 0, 0, 0
    for i in range(1, n):
        if i > r:
            l, r = i, i
            while r < n and s[r] == s[r - l]:
                r += 1
            z[i] = r - l
            r -= 1
        else:
            k = i - l
            if z[k] < r - i + 1:
                z[i] = z[k]
            else:
                l = i
                while r < n and s[r] == s[r - l]:
                    r += 1
                z[i] = r - l
                r -= 1
    return z
s = "aabcaabxaaaz"
print("Z-array:", compute_z(s))
```

### Java Implementation

```java
public class ZAlgorithm {
    public static int[] computeZ(String s) {
        int n = s.length();
        int[] z = new int[n];
        int l = 0, r = 0, k;
        for (int i = 1; i < n; i++) {
            if (i > r) {
                l = r = i;
                while (r < n && s.charAt(r) == s.charAt(r - l)) {
                    r++;
                }
                z[i] = r - l;
                r--;
            } else {
                k = i - l;
                if (z[k] < r - i + 1) {
                    z[i] = z[k];
                } else {
                    l = i;
                    while (r < n && s.charAt(r) == s.charAt(r - l)) {
                        r++;
                    }
                    z[i] = r - l;
                    r--;
                }
            }
        }
        return z;
    }

    public static void main(String[] args) {
        String s = "aabcaabxaaaz";
        int[] z = computeZ(s);
        System.out.print("Z-array: ");
        for (int value : z) {
            System.out.print(value + " ");
        }
    }
}
```

### Cpp Implementation

```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<int> computeZ(const string& s) {
    int n = s.length();
    vector<int> z(n, 0);
    int l = 0, r = 0, k;
    for (int i = 1; i < n; i++) {
        if (i > r) {
            l = r = i;
            while (r < n && s[r] == s[r - l]) {
                r++;
            }
            z[i] = r - l;
            r--;
        } else {
            k = i - l;
            if (z[k] < r - i + 1) {
                z[i] = z[k];
            } else {
                l = i;
                while (r < n && s[r] == s[r - l]) {
                    r++;
                }
                z[i] = r - l;
                r--;
            }
        }
    }
    return z;
}

int main() {
    string s = "aabcaabxaaaz";
    vector<int> z = computeZ(s);
    cout << "Z-array: ";
    for (int value : z) {
        cout << value << " ";
    }
    cout << endl;
    return 0;
}
```

## Output

`Z-array: 0 1 0 3 0 1 0 2 0 1 0 0`


## Time Complexity

The Z-Algorithm runs in $O(n)$ time complexity where `n` is the length of the string. This is due to the linear scan of the string and the efficient handling of previously computed Z-values.

## Space Complexity

The space complexity is $O(n)$ for storing the Z-array.

## Conclusion

The Z-Algorithm is an efficient method for pattern matching and string analysis, providing the Z-array in linear time. This algorithm is widely used in various applications such as substring search and pattern matching.
