---
id: reverse-string
title:   Reverse String
sidebar_label: 344. Reverse String

tags:
- Strings
- C++
- Reverse String

description: "This is a solution to the Reverse String problem on LeetCode."
---

## Problem Description
Write a function that reverses a string. The input string is given as an array of characters `s`.
You must do this by modifying the input array *in-place* with `O(1)` extra memory.

### Examples

**Example 1:**
```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**
```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```


### Constraints
- `1 <= s.length <= 105`
- `s[i]` is a printable ascii character.


## Solution for Reverse String
### Approach 
#### Brute Force 
- Create a new array `reversed` of the same length as `s`.
- Iterate over the input array `s` from the end to the beginning and copy each character to the `reversed` array.
- Copy the contents of the `reversed` array back to `s`.

**Implementation:**
```javascript
var reverseStringBruteForce = function(s) {
    const n = s.length;
    const reversed = new Array(n);

    for (let i = 0; i < n; i++) {
        reversed[i] = s[n - 1 - i];
    }

    for (let i = 0; i < n; i++) {
        s[i] = reversed[i];
    }
};
```

**Complexity:**
- Time Complexity: `O(n)`, where n is the length of the array `s`, as we need to iterate through the array twice.
- Space Complexity: `O(n)` as we use an additional array of the same length as `s`.

**Corner Cases:**
- An empty array: `[]`.
- An array with one character: `['a']`
- An array with repeated characters: `['a', 'a', 'a']`

#### Optimized Approach 
- **Two-pointer Technique**: Use two pointers: one starting from the beginning `(left)` and one from the end `(right)` of the array.
- **Swapping**: Swap the characters at these two pointers.
- **Continue Until Pointers Meet**: Move the pointers towards the center until they meet.

**Implementation:**

```javascript
var reverseStringOptimized = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]; // Swap characters
        left++;
        right--;
    }
};
```

**Complexity:**
- Time Complexity: `O(n)` where n is the length of the array `s`, as we only iterate through half of the array.
- Space Complexity: `O(1)` as we do not use any extra space apart from the input array.

**Corner Cases:**
- An empty array: `[]`.
- An array with one character: `['a']`
- An array with repeated characters: `['a', 'a', 'a']`


<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

    ```jsx live
    function Solution(arr) {
      var reversedString = function(s) {
        let left = 0
        let right = s.length - 1

        while(left < right){
            // Swap characters
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }
      };

      const input = ['h', 'e', 'l', 'l', 'o']
      const originalInput = [...input]
      reversedString(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(originalInput)}
          </p>
          <p>
            <b>Output:</b> {JSON.stringify(input)}
          </p>
        </div>
      );
    }
    ```

#### Complexity Analysis

 - Time Complexity: $O(n)$ 
 - Space Complexity: $O(1)$ 

  ## Code in Different Languages

   <Tabs>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@vansh-codes" />

   ```javascript
    var reverseString = function(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]]; // Swap characters
            left++;
            right--;
        }
    };
    ```

  </TabItem>

  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@vansh-codes" /> 

   ```typescript
    function reverseString(s: string[]): void {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]]; // Swap characters
            left++;
            right--;
        }
    };
    ```

  </TabItem>

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@vansh-codes" />

   ```python
    class Solution:
        def reverseString(self, s: List[str]) -> None:
            """
            Do not return anything, modify s in-place instead.
            """
            left, right = 0, len(s) - 1

            while left < right:
                s[left], s[right] = s[right], s[left] # Swap characters
                left += 1
                right -= 1
    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@vansh-codes" />

   ```java
   class Solution {
        public void reverseString(char[] s) {
            int left = 0, right = s.length - 1;

            while (left < right) {
                char temp = s[left];
                s[left] = s[right];
                s[right] = temp;
                left++;
                right--;
            }
        }
    }
    ```

  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@vansh-codes" />

   ```cpp
   class Solution {
    public:
        void reverseString(vector<char>& s) {
            int left = 0, right = s.size() - 1;

            while (left < right) {
                swap(s[left], s[right]); // Swap characters
                left++;
                right--;
            }
        }
    };

    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Reverse String](https://leetcode.com/problems/reverse-string/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/reverse-string/solutions/)  