---
id: strobogrammatic-number
title: Strobogrammatic Number
sidebar_label: 0246-Strobogrammatic Number
tags: [Hash Map, Two Pointers]
description: Solution to finding the Strobogrammatic Number in an array of strings.
---

### Description


A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

### Example:


**Example 1:**

```bash
Input:  "69"
Output: true
```

**Example 2:**
```bash
Input:  "88"
Output: true
```

**Example 3:**
```bash
Input:  "962"
Output: false
```

### Solution

#### Approach

1. Create a dictionary to map each digit to its strobogrammatic counterpart.
2. Iterate over the number from both ends towards the center.
3. For each pair of digits, check if they are valid strobogrammatic pairs using the dictionary.
4. Return true if all pairs are valid, otherwise return false.


#### Codes in Different Languages
<Tabs>
<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@sivaprasath"/>


```javascript
function isStrobogrammatic(num) {
    const strobogrammaticMap = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };
    let left = 0, right = num.length - 1;
    while (left <= right) {
        if (!(num[left] in strobogrammaticMap) || strobogrammaticMap[num[left]] !== num[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage:
console.log(isStrobogrammatic("69"));  // Output: true
console.log(isStrobogrammatic("88"));  // Output: true
console.log(isStrobogrammatic("962")); // Output: false
```

</TabItem>

<TabItem value="typescript" label="TypeScript">
<SolutionAuthor name="@sivaprasath"/>

```typescript
function isStrobogrammatic(num: string): boolean {
    const strobogrammaticMap: { [key: string]: string } = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };
    let left = 0, right = num.length - 1;
    while (left <= right) {
        if (!(num[left] in strobogrammaticMap) || strobogrammaticMap[num[left]] !== num[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage:
console.log(isStrobogrammatic("69"));  // Output: true
console.log(isStrobogrammatic("88"));  // Output: true
console.log(isStrobogrammatic("962")); // Output: false
```

</TabItem>

<TabItem value="python" label="Python"> 
<SolutionAuthor name="@sivaprasath"/>

```python
def isStrobogrammatic(num):
    strobogrammatic_map = {'0': '0', '1': '1', '6': '9', '8': '8', '9': '6'}
    left, right = 0, len(num) - 1
    while left <= right:
        if num[left] not in strobogrammatic_map or strobogrammatic_map[num[left]] != num[right]:
            return False
        left += 1
        right -= 1
    return True

# Example usage:
print(isStrobogrammatic("69"))  # Output: true
print(isStrobogrammatic("88"))  # Output: true
print(isStrobogrammatic("962")) # Output: false
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@sivaprasath"/>


```java
import java.util.HashMap;
import java.util.Map;

public class StrobogrammaticNumber {
    public static boolean isStrobogrammatic(String num) {
        Map<Character, Character> strobogrammaticMap = new HashMap<>();
        strobogrammaticMap.put('0', '0');
        strobogrammaticMap.put('1', '1');
        strobogrammaticMap.put('6', '9');
        strobogrammaticMap.put('8', '8');
        strobogrammaticMap.put('9', '6');
        
        int left = 0, right = num.length() - 1;
        while (left <= right) {
            if (!strobogrammaticMap.containsKey(num.charAt(left)) || strobogrammaticMap.get(num.charAt(left)) != num.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isStrobogrammatic("69"));  // Output: true
        System.out.println(isStrobogrammatic("88"));  // Output: true
        System.out.println(isStrobogrammatic("962")); // Output: false
    }
}
```

</TabItem>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sivaprasath"/>

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

bool isStrobogrammatic(string num) {
    unordered_map<char, char> strobogrammaticMap = {
        {'0', '0'},
        {'1', '1'},
        {'6', '9'},
        {'8', '8'},
        {'9', '6'}
    };
    
    int left = 0, right = num.length() - 1;
    while (left <= right) {
        if (strobogrammaticMap.find(num[left]) == strobogrammaticMap.end() || strobogrammaticMap[num[left]] != num[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int main() {
    cout << boolalpha;
    cout << isStrobogrammatic("69") << endl;  // Output: true
    cout << isStrobogrammatic("88") << endl;  // Output: true
    cout << isStrobogrammatic("962") << endl; // Output: false
    return 0;
}
```

</TabItem>
</Tabs>

#### Explanation:
<Tabs>

<TabItem value="javascript" label="Javascript">

1. The `strobogrammaticMap` defines the valid strobogrammatic pairs.
2. Two pointers, `left` and `right`, traverse the string from both ends towards the center.
3. For each pair of digits, we check if they exist in the map and match the required strobogrammatic counterpart.
4. If any pair is invalid, return false; if all pairs are valid, return true.

</TabItem>

<TabItem value="typescript" label="TypeScript">

1. The `strobogrammaticMap` defines the valid strobogrammatic pairs.
2. Two pointers, `left` and `right`, traverse the string from both ends towards the center.
3. For each pair of digits, we check if they exist in the map and match the required strobogrammatic counterpart.
4. If any pair is invalid, return false; if all pairs are valid, return true.

</TabItem>

<TabItem value="python" label="Python"> 

1. The dictionary `strobogrammatic_map` defines the valid strobogrammatic pairs.
2. Two pointers, `left` and `right`, are used to traverse the number from both ends.
3. For each pair of digits, we check if they are in the dictionary and match the required strobogrammatic counterpart.
4. If any pair is invalid, return false; if all pairs are valid, return true.

</TabItem>

<TabItem value="java" label="Java">

1. The `strobogrammaticMap` defines the valid strobogrammatic pairs.
2. Two pointers, `left` and `right`, traverse the string from both ends towards the center.
3. For each pair of digits, we check if they exist in the map and match the required strobogrammatic counterpart.
4. If any pair is invalid, return false; if all pairs are valid, return true.

</TabItem>

<TabItem value="cpp" label="C++">

1. The `strobogrammaticMap` defines the valid strobogrammatic pairs.
2. Two pointers, `left` and `right`, traverse the string from both ends towards the center.
3. For each pair of digits, we check if they exist in the map and match the required strobogrammatic counterpart.
4. If any pair is invalid, return false; if all pairs are valid, return true.

</TabItem>
</Tabs>


#### Complexity:
<Tabs>

<TabItem value="javascript" label="Javascript">

1. **Time complexity**: $O(n)$, where $n$ is the length of the input string, as we only iterate through the string once.
2. **Space complexity**: $O(1)$, as we use a fixed amount of extra space for the map and pointers.
3. This makes the approach efficient and suitable for checking strobogrammatic properties in linear time.

</TabItem>

<TabItem value="typescript" label="TypeScript">

1. **Time complexity**: $O(n)$, where $n$ is the length of the input string, as we only iterate through the string once.
2. **Space complexity**: $O(1)$, as we use a fixed amount of extra space for the map and pointers.
3. This makes the approach efficient and suitable for checking strobogrammatic properties in linear time.

</TabItem>

<TabItem value="python" label="Python"> 

1. Time complexity: $O(n)$, where $n$ is the length of the input string, as we only iterate through the string once.
2. Space complexity: $O(1)$, as we use a fixed amount of extra space for the dictionary and pointers.
3. This makes the approach efficient and suitable for checking strobogrammatic properties in linear time.

</TabItem>

<TabItem value="java" label="Java">

1. **Time complexity**: $O(n)$, where $n$ is the length of the input string, as we only iterate through the string once.
2. **Space complexity**: $O(1)$, as we use a fixed amount of extra space for the map and pointers.
3. This makes the approach efficient and suitable for checking strobogrammatic properties in linear time.

</TabItem>
<TabItem value="cpp" label="C++">

1. **Time complexity**: $O(n)$, where $n$ is the length of the input string, as we only iterate through the string once.
2. **Space complexity**: $O(1)$, as we use a fixed amount of extra space for the map and pointers.
3. This makes the approach efficient and suitable for checking strobogrammatic properties in linear time.

</TabItem>
</Tabs>

## References

- **LeetCode Problem:** [Strobogrammatic Number](https://leetcode.com/problems/strobogrammatic-number/)

<h2>Author:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sivaprasath2004'].map(username => (
 <Author key={username} username={username} />
))}
</div>
