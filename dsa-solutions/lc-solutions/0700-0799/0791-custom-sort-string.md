---
id: custom-sort-string
title: Custom Sort String
sidebar_label: 0791 - Custom Sort String
tags:
  - String
  - Hash Table
  - Sorting
description: "This is a solution to the Custom Sort String problem on LeetCode."
---

## Problem Description

You are given two strings `order` and `s`. All the characters of `order` are **unique** and were sorted in some custom order previously.

Permute the characters of `s` so that they match the order that `order` was sorted. More specifically, if a character `x` occurs before a character `y` in order, then `x` should occur before `y` in the permuted string.

Return any permutation of `s` that satisfies this property.

### Examples

**Example 1:**

```
Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
```

**Example 1:**

```
Input: order = "bcafg", s = "abcd"
Output: "bcad"
Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.
Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.
```

### Constraints

- `1 <= order.length <= 26`
- `1 <= s.length <= 200`
- order and `s` consist of lowercase English letters.
- All the characters of order are **unique**.

## Solution for Custom Sort String

## Approach 1: Custom Comparator
### Intuition

A comparator is a tool used to define (or redefine) an order between two items of the same class or data type. Most languages allow for the use of a custom comparator. This means that we can define a rule that determines how an array is sorted, and leverage built-in sort functions for custom sort.

Recall that a comparator takes two values `c1` and `c2` as parameters and returns the following:

1. If c1 comes before c2, return a negative integer.
2. If c1 comes after c2, return a positive integer.
3. If c1 and c2 are equal, return 000.
Letter `c1` should come before `c2` in the sorted order of `s` if and only if the index of `c1` in the order string is less than the index of `c2`. By evaluating `c1` and `c2` as integer indices, we can use subtraction to achieve a return value that abides by the three rules described above.

Let's consider the following example: let `s = "bdadeec"` and `order = "edcba"`. Letter "e" is at index 0 in `order`, whereas letter "b" is at index 3. Because $0 < 3$, "e" should come before "b" in the result string. Therefore, the return result is $0 - 3 = -3$, a negative number that adheres to the first rule listed above.

Taking into account all possible relationships between pairs of letters, the result string is "eeddcba".

### Algorithm
1. Create a character array of input string `s` to allow modification.
2. Use the built-in sort method and define the comparator function as the difference between the index of `c1` and the index of `c2` in order.
3. Concatenate the character array into a string.
4. Return this resulting string.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    string customSortString(string order, string s) {
    // Define the custom comparator as lambda
        sort(s.begin(), s.end(), [order](char c1, char c2) { 
            return order.find(c1) < order.find(c2);
        });
    return s;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public String customSortString(String order, String s) {
        // Create char array for editing
        int N = s.length();
        Character[] result = new Character[N];
        for (int i = 0; i < N; i++) {
            result[i] = s.charAt(i);
        }

        // Define the custom comparator
        Arrays.sort(result, (c1, c2) -> {
            // The index of the character in order determines the value to be sorted by
            return order.indexOf(c1) - order.indexOf(c2);
        });

        // Return the result
        String resultString = "";
        for (Character c: result) {
            resultString += c;
        }
        return resultString;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from collections import Counter

class Solution:
    def customSortString(self, order: str, s: str) -> str:
        # Create a counter for the characters in s
        char_count = Counter(s)
        
        # Initialize the result string
        result = ""
        
        # Add the characters in the order string to the result
        for char in order:
            if char in char_count:
                result += char * char_count[char]
                del char_count[char]
        
        # Add the remaining characters to the result
        for char, count in char_count.items():
            result += char * count
        
        return result

```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(NlogN)$

> **Reason**: Sorting an array of length N requires $O(Nlog⁡N)$ time, and the indices of `order` have to be retrieved for each distinct letter, which results in an $O(Nlog⁡N+K)$ complexity. K is at most 26, the number of unique English letters, so we can simplify the time complexity to $O(Nlog⁡N)$.

#### Space Complexity: $O(N)$

> **Reason**: 
>The space complexity of the sorting algorithm depends on the programming language.
>   - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm, which has a space complexity of $O(log⁡N)$ for sorting two arrays. The Java solution also uses an auxiliary array of length N. This is the dominating term for the Java solution.
>   - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(log⁡⁡N)$. This is the main space used by the C++ solution.


## Approach 2: Frequency Table and Counting
### Intuition

Because the `order` string already gives us the explicit ordering to sort all the letters, we can generate a sorted version of `s` without calling upon an $O(Nlog⁡N)$ algorithm. Let's create a frequency table where the key equals a character `c`, and the value equals how many times `c` appears in the string `s`. Then, for each character in order, append the number of occurrences of that character in `s` to the resulting string. After iterating through `order`, any remaining characters in `s` can be appended to the end without disrupting the defined sorting order.

### Algorithm
1. Initialize a frequency table (here we use a Hashmap, but a frequency array works too).
2. Populate the frequency table by incrementing `freq[letter]` for each letter in `s`.
3. For each character of `order`, append to `result` the same frequency it appears in `s`.
4. Iterate through the frequency table to find any remaining letters of `s` not in order, and append these letters to `result`.
5. Return the resulting string.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
    public:
    string customSortString(string order, string s) {
        // Create a frequency table
        unordered_map<char, int> freq;

        // Initialize frequencies of letters
        // freq[c] = frequency of char c in s
        for (char letter : s) {
            freq[letter]++;
        }

        // Iterate order string to append to result
        string result = "";
        for (char letter : order) {
            while (freq[letter]-- > 0) {
                result += letter;
            }
        }

        // Iterate through freq and append remaining letters
        // This is necessary because some letters may not appear in `order`
        for (auto & [letter, count] : freq) { 
            while (count-- > 0) {
                result += letter;
            }
        }

        // Return the result
        return result;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public String customSortString(String order, String s) {
        // Create a frequency table
        Map<Character, Integer> freq = new HashMap<>();

        // Initialize frequencies of letters
        // freq[c] = frequency of char c in s
        int N = s.length();
        for (int i = 0; i < N; i++) {
            char letter = s.charAt(i);
            freq.put(letter, freq.getOrDefault(letter, 0) + 1);
        }

        // Iterate order string to append to result
        int K = order.length();
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < K; i++) {
            char letter = order.charAt(i);
            while (freq.getOrDefault(letter, 0) > 0) {
                result.append(letter);
                freq.put(letter, freq.get(letter) - 1);
            }
        }

        // Iterate through freq and append remaining letters
        // This is necessary because some letters may not appear in `order`
        for (char letter : freq.keySet()) {
            int count = freq.get(letter);
            while (count > 0) {
                result.append(letter);
                count--;
            }
        }

        // Return the result
        return result.toString();
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from collections import Counter

class Solution:
    def customSortString(self, order: str, s: str) -> str:
        # Create a frequency table
        freq = Counter(s)

        # Iterate order string to append to result
        result = []
        for letter in order:
            result.extend([letter] * freq.pop(letter, 0))

        # Iterate through freq and append remaining letters
        result.extend([letter * count for letter, count in freq.items()])

        # Return the result
        return ''.join(result)

```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**: It takes $O(N)$ time to populate the frequency table, and all other hashmap operations performed take $O(1)$ time in the average case. Building the result string also takes $O(N)$ time because each letter from `s` is appended to the result in the custom order, making the overall time complexity $O(N)$.

#### Space Complexity: $O(N)$

> **Reason**: A hash map and a `result` string are created, which results in an additional space complexity of $O(N)$.


## Video Solution 

<LiteYouTubeEmbed
    id="rrWsOBDybZE"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="CUSTOM SORT STRING | PYTHON | LEETCODE 791"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Custom Sort String](https://leetcode.com/problems/custom-sort-string/description/)

- **Solution Link**: [Custom Sort String](https://leetcode.com/problems/custom-sort-string/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>