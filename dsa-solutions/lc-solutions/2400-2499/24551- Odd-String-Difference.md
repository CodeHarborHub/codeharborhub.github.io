---
id: Odd-String-Difference
title: Odd String Difference Problem
sidebar_label: 2451-Odd String Difference
tags: [dsa, leetcode]
description: Problem solution of Odd String Difference Problem
---

## Problem Statement 

### Problem Description

You are given an array of equal-length strings words. Assume that the length of each string is n.

Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 &lt;= j &lt;= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
All the strings in words have the same difference integer array, except one. You should find that string.

Return the string in words that has different difference integer array.
### Examples

#### Example 1
```
Input: words = ["aaa","bob","ccc","ddd"]
Output: "bob"
Explanation: All the integer arrays are [0, 0] except for "bob", which corresponds to [13, -13].
```

### Constraints

- `3 <= words.length <= 100`
- `n == words[i].length`
- `2 <= n <= 20`
- `words[i] consists of lowercase English letters.`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: 
Convert each string in the words array to its corresponding difference integer array.
Compare the difference arrays to find the one that is different from the others.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
#include <string>

std::vector<int> getDifferenceArray(const std::string& word) {
    std::vector<int> difference;
    for (int i = 0; i < word.length() - 1; ++i) {
        difference.push_back(word[i + 1] - word[i]);
    }
    return difference;
}

std::string oddStringOut(const std::vector<std::string>& words) {
    std::vector<std::vector<int>> differences;
    for (const auto& word : words) {
        differences.push_back(getDifferenceArray(word));
    }

    for (int i = 0; i < differences.size(); ++i) {
        int count = 0;
        for (int j = 0; j < differences.size(); ++j) {
            if (differences[i] == differences[j]) {
                count++;
            }
        }
        if (count == 1) {
            return words[i];
        }
    }
    return "";
}

int main() {
    std::vector<std::string> words = {"adc", "wzy", "abc"};
    std::cout << oddStringOut(words) << std::endl;  // Output: "abc"
    return 0;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class OddStringOut {
    public static List<Integer> getDifferenceArray(String word) {
        List<Integer> difference = new ArrayList<>();
        for (int i = 0; i < word.length() - 1; i++) {
            difference.add(word.charAt(i + 1) - word.charAt(i));
        }
        return difference;
    }

    public static String oddStringOut(String[] words) {
        List<List<Integer>> differences = new ArrayList<>();
        for (String word : words) {
            differences.add(getDifferenceArray(word));
        }

        for (int i = 0; i < differences.size(); i++) {
            int count = 0;
            for (int j = 0; j < differences.size(); j++) {
                if (differences.get(i).equals(differences.get(j))) {
                    count++;
                }
            }
            if (count == 1) {
                return words[i];
            }
        }
        return "";
    }

    public static void main(String[] args) {
        String[] words = {"adc", "wzy", "abc"};
        System.out.println(oddStringOut(words));  // Output: "abc"
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def get_difference_array(word):
    return [ord(word[i + 1]) - ord(word[i]) for i in range(len(word) - 1)]

def odd_string_out(words):
    differences = [get_difference_array(word) for word in words]
    
    for i in range(len(differences)):
        count = sum(differences[i] == differences[j] for j in range(len(differences)))
        if count == 1:
            return words[i]
    return ""

words = ["adc", "wzy", "abc"]
print(odd_string_out(words))  # Output: "abc"

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(m*n)$
-  where m is the number of strings and n is the length of each string.
- Space Complexity: $O(m * (n-1))$
-   for storing the difference arrays.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: 
Calculate the difference arrays.
Identify the unique one by comparing with the first two arrays and using the majority principle.
Compare the first two difference arrays:
- If they are equal, then the different one must be different from this common difference array.
- If they are not equal, compare the third one to decide which of the first two is different.
Return the corresponding string.
#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
#include <string>

std::vector<int> getDifferenceArray(const std::string& word) {
    std::vector<int> difference;
    for (int i = 0; i < word.length() - 1; ++i) {
        difference.push_back(word[i + 1] - word[i]);
    }
    return difference;
}

std::string oddStringOut(const std::vector<std::string>& words) {
    auto diff1 = getDifferenceArray(words[0]);
    auto diff2 = getDifferenceArray(words[1]);

    if (diff1 == diff2) {
        for (int i = 2; i < words.size(); ++i) {
            if (getDifferenceArray(words[i]) != diff1) {
                return words[i];
            }
        }
    } else {
        auto diff3 = getDifferenceArray(words[2]);
        return (diff3 == diff1) ? words[1] : words[0];
    }
    return "";
}

int main() {
    std::vector<std::string> words = {"adc", "wzy", "abc"};
    std::cout << oddStringOut(words) << std::endl;  // Output: "abc"
    return 0;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class OddStringOut {
    public static List<Integer> getDifferenceArray(String word) {
        List<Integer> difference = new ArrayList<>();
        for (int i = 0; i < word.length() - 1; i++) {
            difference.add(word.charAt(i + 1) - word.charAt(i));
        }
        return difference;
    }

    public static String oddStringOut(String[] words) {
        List<Integer> diff1 = getDifferenceArray(words[0]);
        List<Integer> diff2 = getDifferenceArray(words[1]);

        if (diff1.equals(diff2)) {
            for (int i = 2; i < words.length; i++) {
                if (!getDifferenceArray(words[i]).equals(diff1)) {
                    return words[i];
                }
            }
        } else {
            List<Integer> diff3 = getDifferenceArray(words[2]);
            return diff3.equals(diff1) ? words[1] : words[0];
        }
        return "";
    }

    public static void main(String[] args) {
        String[] words = {"adc", "wzy", "abc"};
        System.out.println(oddStringOut(words));  // Output: "abc"
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def get_difference_array(word):
    return [ord(word[i + 1]) - ord(word[i]) for i in range(len(word) - 1)]

def odd_string_out(words):
    diff1 = get_difference_array(words[0])
    diff2 = get_difference_array(words[1])
    
    if diff1 == diff2:
        for i in range(2, len(words)):
            if get_difference_array(words[i]) != diff1:
                return words[i]
    else:
        diff3 = get_difference_array(words[2])
        return words[1] if diff3 == diff1 else words[0]
    return ""

words = ["adc", "wzy", "abc"]
print(odd_string_out(words))  # Output: "abc"

```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(m*n)$
- where m is the number of strings and n is the length of each string.
- Space Complexity: $O(n)$
-   for storing the difference array temporarily.
</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="uByUrGsnfX0"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>

