---
id: Rolling-Hash
title: Rolling Hash Algorithm (Geeks for Geeks)
sidebar_label: Rolling Hash
tags:
  - Advanced
  - String Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Rolling Hash algorithm problem on Geeks for Geeks."
---

## 1. What is the Rolling Hash Algorithm?

The Rolling Hash algorithm is an efficient string searching algorithm used for detecting substring matches in a given text. It is a key component of the Rabin-Karp algorithm. The rolling hash function allows the hash of a substring to be quickly updated as the window slides over the text.

## 2. Algorithm for Rolling Hash

1. Calculate the hash value of the initial substring of the text that has the same length as the pattern.
2. Slide the window over the text one character at a time, updating the hash value using the rolling hash formula.
3. Compare the hash values of the pattern and the current substring of the text. If they match, compare the actual strings to confirm a match.

## 3. How does the Rolling Hash Algorithm work?

- **Initial Hash Calculation**: Compute the hash value for the first substring of the text that matches the length of the pattern.
- **Rolling Hash Update**: Update the hash value for the next substring by subtracting the hash value of the outgoing character, adding the hash value of the incoming character, and applying a modulus operation to avoid overflow.
- **Match Verification**: If the hash values match, compare the actual strings to confirm the match.

## 4. Problem Description

Given a text string and a pattern string, implement the Rolling Hash algorithm to find all occurrences of the pattern in the text.

## 5. Examples

**Example 1:**
```
Input: text = "THIS IS A TEST TEXT", pattern = "TEST"
Output: Pattern found at index 10
```

**Example 2:**
```
Input: text = "AABAACAADAABAABA", pattern = "AABA"
Output: Pattern found at index 0, Pattern found at index 9, Pattern found at index 12
```

**Explanation of Example 1:**
- The pattern "TEST" is found in the text "THIS IS A TEST TEXT" starting from index 10.


## 6. Constraints

- The text and pattern can contain any number of characters.
- All characters are $ASCII$ characters.

## 7. Implementation

<Tabs>
<TabItem value="Python" label="Python" default>
<SolutionAuthor name="@GeeksforGeeks"/>

```python
d = 256  # Number of characters in the input alphabet
q = 101  # A prime number

def search(pattern, text):
    m = len(pattern)
    n = len(text)
    p = 0  # Hash value for pattern
    t = 0  # Hash value for text
    h = 1

    # The value of h would be "pow(d, m-1)%q"
    for i in range(m-1):
        h = (h * d) % q

    # Calculate the hash value of pattern and first window of text
    for i in range(m):
        p = (d * p + ord(pattern[i])) % q
        t = (d * t + ord(text[i])) % q

    # Slide the pattern over text one by one
    for i in range(n - m + 1):
        # Check the hash values of current window of text and pattern
        if p == t:
            # Check for characters one by one
            if text[i:i+m] == pattern:
                print("Pattern found at index " + str(i))

        # Calculate hash value for next window of text
        if i < n - m:
            t = (d * (t - ord(text[i]) * h) + ord(text[i + m])) % q
            if t < 0:
                t = t + q

# Example usage
text = "THIS IS A TEST TEXT"
pattern = "TEST"
search(pattern, text)
```

</TabItem>

<TabItem value="C++" label="C++">
<SolutionAuthor name="@GeeksforGeeks"/>

```cpp
#include <iostream>
#include <string>
using namespace std;

#define d 256
#define q 101

void search(string pattern, string text) {
    int m = pattern.size();
    int n = text.size();
    int p = 0;  // Hash value for pattern
    int t = 0;  // Hash value for text
    int h = 1;

    // The value of h would be "pow(d, m-1)%q"
    for (int i = 0; i < m - 1; i++)
        h = (h * d) % q;

    // Calculate the hash value of pattern and first window of text
    for (int i = 0; i < m; i++) {
        p = (d * p + pattern[i]) % q;
        t = (d * t + text[i]) % q;
    }

    // Slide the pattern over text one by one
    for (int i = 0; i <= n - m; i++) {
        // Check the hash values of current window of text and pattern
        if (p == t) {
            // Check for characters one by one
            if (text.substr(i, m) == pattern)
                cout << "Pattern found at index " << i << endl;
        }

        // Calculate hash value for next window of text
        if (i < n - m) {
            t = (d * (t - text[i] * h) + text[i + m]) % q;
            if (t < 0)
                t = t + q;
        }
    }
}

// Example usage
int main() {
    string text = "THIS IS A TEST TEXT";
    string pattern = "TEST";
    search(pattern, text);
    return 0;
}
```
</TabItem>

<TabItem value="Java" label="Java">
<SolutionAuthor name="@GeeksforGeeks"/>

```java
public class RollingHash {

    static final int d = 256;
    static final int q = 101;

    static void search(String pattern, String text) {
        int m = pattern.length();
        int n = text.length();
        int p = 0; // hash value for pattern
        int t = 0; // hash value for text
        int h = 1;

        for (int i = 0; i < m - 1; i++)
            h = (h * d) % q;

        for (int i = 0; i < m; i++) {
            p = (d * p + pattern.charAt(i)) % q;
            t = (d * t + text.charAt(i)) % q;
        }

        for (int i = 0; i <= n - m; i++) {
            if (p == t) {
                if (text.substring(i, i + m).equals(pattern))
                    System.out.println("Pattern found at index " + i);
            }

            if (i < n - m) {
                t = (d * (t - text.charAt(i) * h) + text.charAt(i + m)) % q;
                if (t < 0)
                    t = (t + q);
            }
        }
    }

    // Example usage
    public static void main(String[] args) {
        String text = "THIS IS A TEST TEXT";
        String pattern = "TEST";
        search(pattern, text);
    }
}
```
</TabItem>

<TabItem value="JavaScript" label="JavaScript">
<SolutionAuthor name="@GeeksforGeeks"/>

```javascript
const d = 256;
const q = 101;

function search(pattern, text) {
    const m = pattern.length;
    const n = text.length;
    let p = 0; // hash value for pattern
    let t = 0; // hash value for text
    let h = 1;

    for (let i = 0; i < m - 1; i++)
        h = (h * d) % q;

    for (let i = 0; i < m; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    for (let i = 0; i <= n - m; i++) {
        if (p === t) {
            if (text.substring(i, i + m) === pattern)
                console.log("Pattern found at index " + i);
        }

        if (i < n - m) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
            if (t < 0)
                t = (t + q);
        }
    }
}

// Example usage
const text = "THIS IS A TEST TEXT";
const pattern = "TEST";
search(pattern, text);
```
</TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**: $O(n + m)$, where $n$ is the length of the text and $m$ is the length of the pattern.
- **Space Complexity**: $O(1)$, since it uses a constant amount

 of extra space.

## 9. Advantages and Disadvantages

**Advantages:**
- Efficient for searching multiple patterns in a text.
- Uses a simple hash function for pattern matching.

**Disadvantages:**
- Hash collisions can lead to false positives.
- Requires preprocessing which increases the space complexity.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/introduction-to-rolling-hash-data-structures-and-algorithms/)
- **Author's Geeks for Geeks Profile:** akashjha2671

