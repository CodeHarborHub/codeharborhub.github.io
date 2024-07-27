---
id: Count-Number-of-Texts
title: Count Number of Texts
sidebar_label: 2266-Count Number of Texts
tags: 
  - Hash table
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Count Number of Texts problem on LeetCode."
sidebar_position: 67
---

## Problem Statement 
In this tutorial, we will solve the Count Number of Texts problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

Alice is texting Bob using her phone. The mapping of digits to letters is shown in the figure below.


In order to add a letter, Alice has to press the key of the corresponding digit i times, where i is the position of the letter in the key.

For example, to add the letter 's', Alice has to press '7' four times. Similarly, to add the letter 'k', Alice has to press '5' twice.
Note that the digits '0' and '1' do not map to any letters, so Alice does not use them.
However, due to an error in transmission, Bob did not receive Alice's text message but received a string of pressed keys instead.

For example, when Alice sent the message "bob", Bob received the string "2266622".
Given a string pressedKeys representing the string received by Bob, return the total number of possible text messages Alice could have sent.

Since the answer may be very large, return it modulo 109 + 7.

 
### Examples

**Example 1:**
Input: pressedKeys = "22233"
Output: 8
Explanation:
The possible text messages Alice could have sent are:
"aaadd", "abdd", "badd", "cdd", "aaae", "abe", "bae", and "ce".
Since there are 8 possible messages, we return 8.
**Example 2:**
Input: pressedKeys = "222222222222222222222222222222222222"
Output: 82876089
Explanation:
There are 2082876103 possible text messages Alice could have sent.
Since we need to return the answer modulo 109 + 7, we return 2082876103 % (109 + 7) = 82876089.
### Constraints
- `1 <= pressedKeys.length <= 105`
- `pressedKeys only consists of digits from '2' - '9'.`
## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


In the brute force approach, we will generate all possible combinations of letters for the given string of pressed keys and count the valid messages. However, due to the constraints, this approach is impractical for large inputs.

#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

const int MOD = 1e9 + 7;
vector<string> mappings = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

void generateCombinations(const string &keys, int index, string current, vector<string> &results) {
    if (index == keys.size()) {
        results.push_back(current);
        return;
    }
    int digit = keys[index] - '2';
    for (char c : mappings[digit]) {
        generateCombinations(keys, index + 1, current + c, results);
    }
}

int bruteForce(const string &pressedKeys) {
    vector<string> results;
    generateCombinations(pressedKeys, 0, "", results);
    return results.size();
}

int main() {
    string pressedKeys = "22233";
    cout << bruteForce(pressedKeys) << endl; // Output: 8
    return 0;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class Main {
    static final int MOD = 1_000_000_007;
    static final String[] mappings = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

    public static void generateCombinations(String keys, int index, String current, List<String> results) {
        if (index == keys.length()) {
            results.add(current);
            return;
        }
        int digit = keys.charAt(index) - '2';
        for (char c : mappings[digit].toCharArray()) {
            generateCombinations(keys, index + 1, current + c, results);
        }
    }

    public static int bruteForce(String pressedKeys) {
        List<String> results = new ArrayList<>();
        generateCombinations(pressedKeys, 0, "", results);
        return results.size();
    }

    public static void main(String[] args) {
        String pressedKeys = "22233";
        System.out.println(bruteForce(pressedKeys)); // Output: 8
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
mappings = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

def generate_combinations(keys, index, current, results):
    if index == len(keys):
        results.append(current)
        return
    digit = int(keys[index]) - 2
    for c in mappings[digit]:
        generate_combinations(keys, index + 1, current + c, results)

def brute_force(pressed_keys):
    results = []
    generate_combinations(pressed_keys, 0, "", results)
    return len(results)

pressed_keys = "22233"
print(brute_force(pressed_keys))  # Output: 8



```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(3^n)$ or $O(4^n)$
- due to generating all possible letter combinations for each key press sequence.
- Space Complexity: $O(3^n)$ or $O(4^n)$
-  because we store all generated combinations.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

The optimized approach uses dynamic programming to efficiently calculate the number of valid messages. We maintain a DP array where dp[i] represents the number of possible messages for the substring pressedKeys[0:i+1].


#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

const int MOD = 1e9 + 7;

int optimizedCount(const string &pressedKeys) {
    int n = pressedKeys.size();
    vector<long> dp(n + 1, 0);
    dp[0] = 1;

    for (int i = 1; i <= n; ++i) {
        dp[i] = dp[i - 1];
        if (i > 1 && pressedKeys[i - 1] == pressedKeys[i - 2])
            dp[i] = (dp[i] + dp[i - 2]) % MOD;
        if (i > 2 && pressedKeys[i - 1] == pressedKeys[i - 2] && pressedKeys[i - 2] == pressedKeys[i - 3])
            dp[i] = (dp[i] + dp[i - 3]) % MOD;
        if (i > 3 && pressedKeys[i - 1] == pressedKeys[i - 2] && pressedKeys[i - 2] == pressedKeys[i - 3] && pressedKeys[i - 3] == pressedKeys[i - 4] && (pressedKeys[i - 1] == '7' || pressedKeys[i - 1] == '9'))
            dp[i] = (dp[i] + dp[i - 4]) % MOD;
    }
    return dp[n];
}

int main() {
    string pressedKeys = "22233";
    cout << optimizedCount(pressedKeys) << endl; // Output: 8
    return 0;
}



```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
public class Main {
    static final int MOD = 1_000_000_007;

    public static int optimizedCount(String pressedKeys) {
        int n = pressedKeys.length();
        long[] dp = new long[n + 1];
        dp[0] = 1;

        for (int i = 1; i <= n; ++i) {
            dp[i] = dp[i - 1];
            if (i > 1 && pressedKeys.charAt(i - 1) == pressedKeys.charAt(i - 2))
                dp[i] = (dp[i] + dp[i - 2]) % MOD;
            if (i > 2 && pressedKeys.charAt(i - 1) == pressedKeys.charAt(i - 2) && pressedKeys.charAt(i - 2) == pressedKeys.charAt(i - 3))
                dp[i] = (dp[i] + dp[i - 3]) % MOD;
            if (i > 3 && pressedKeys.charAt(i - 1) == pressedKeys.charAt(i - 2) && pressedKeys.charAt(i - 2) == pressedKeys.charAt(i - 3) && pressedKeys.charAt(i - 3) == pressedKeys.charAt(i - 4) && (pressedKeys.charAt(i - 1) == '7' || pressedKeys.charAt(i - 1) == '9'))
                dp[i] = (dp[i] + dp[i - 4]) % MOD;
        }
        return (int) dp[n];
    }

    public static void main(String[] args) {
        String pressedKeys = "22233";
        System.out.println(optimizedCount(pressedKeys)); // Output: 8
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
MOD = 1_000_000_007

def optimized_count(pressed_keys):
    n = len(pressed_keys)
    dp = [0] * (n + 1)
    dp[0] = 1

    for i in range(1, n + 1):
        dp[i] = dp[i - 1]
        if i > 1 and pressed_keys[i - 1] == pressed_keys[i - 2]:
            dp[i] = (dp[i] + dp[i - 2]) % MOD
        if i > 2 and pressed_keys[i - 1] == pressed_keys[i - 2] == pressed_keys[i - 3]:
            dp[i] = (dp[i] + dp[i - 3]) % MOD
        if i > 3 and pressed_keys[i - 1] == pressed_keys[i - 2] == pressed_keys[i - 3] == pressed_keys[i - 4] and pressed_keys[i - 1] in '79':
            dp[i] = (dp[i] + dp[i - 4]) % MOD

    return dp[n]

pressed_keys = "22233"
print(optimized_count(pressed_keys))  # Output: 8



```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- as we use a dynamic programming approach with a single pass through the input string.
- Space Complexity: $O(n)$
- for storing the DP array.
</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
