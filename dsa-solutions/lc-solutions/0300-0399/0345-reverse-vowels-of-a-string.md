---
id: reverse-vowels-of-a-string
title: Reverse Vowels of a String Solution
sidebar_label: 0345 - Reverse Vowels of a String
tags:
  - Reverse Vowels of a String
  - String
  - Two Pointers
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Reverse Vowels of a String problem on LeetCode."
sidebar_position: 345
---

In this tutorial, we will solve the Reverse Vowels of a String problem using efficient string manipulation techniques. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a', 'e', 'i', 'o', 'u'`, and they can appear in both lower and upper cases, more than once.

### Examples

**Example 1:**

```plaintext
Input: s = "hello"
Output: "holle"
```

**Example 2:**

```plaintext
Input: s = "leetcode"
Output: "leotcede"
```

### Constraints

- `1 <= s.length <= 3 * 10^5`
- `s` consists of printable ASCII characters.

---

## Solution for Reverse Vowels of a String

### Intuition and Approach

To solve this problem, we can use a two-pointer approach to efficiently reverse the vowels in the string. We will place one pointer at the beginning (`left`) and another at the end (`right`) of the string. We will move these pointers towards each other, swapping vowels when both pointers point to a vowel.

<Tabs>
 <tabItem value="Two Pointers" label="Two Pointers">
  
### Approach: Two Pointers

We can use two pointers to efficiently reverse the vowels in the string. This involves traversing the string from both ends and swapping vowels when encountered.

#### Implementation

```jsx live
function reverseVowels(s) {
  const vowels = new Set('aeiouAEIOU');
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
      continue;
    }
    if (!vowels.has(arr[right])) {
      right--;
      continue;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
}

const input = "hello";
const result = reverseVowels(input);

return (
  <div>
    <p>
      <b>Input:</b> {input}
    </p>
    <p>
      <b>Output:</b> {result}
    </p>
  </div>
);
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryansh-patel"/>
   ```javascript
    function reverseVowels(s) {
      const vowels = new Set('aeiouAEIOU');
      const arr = s.split('');
      let left = 0;
      let right = arr.length - 1;

      while (left < right) {
        if (!vowels.has(arr[left])) {
          left++;
          continue;
        }
        if (!vowels.has(arr[right])) {
          right--;
          continue;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }

      return arr.join('');
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryansh-patel"/>
   ```typescript
    function reverseVowels(s: string): string {
      const vowels = new Set('aeiouAEIOU');
      const arr = s.split('');
      let left = 0;
      let right = arr.length - 1;

      while (left < right) {
        if (!vowels.has(arr[left])) {
          left++;
          continue;
        }
        if (!vowels.has(arr[right])) {
          right--;
          continue;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }

      return arr.join('');
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@aryansh-patel"/>
   ```python
    def reverseVowels(s: str) -> str:
      vowels = set('aeiouAEIOU')
      s = list(s)
      left, right = 0, len(s) - 1

      while left < right:
        if s[left] not in vowels:
          left += 1
          continue
        if s[right] not in vowels:
          right -= 1
          continue
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1

      return ''.join(s)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryansh-patel"/>
   ```java
    class Solution {
      public String reverseVowels(String s) {
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'));
        char[] arr = s.toCharArray();
        int left = 0, right = arr.length - 1;

        while (left < right) {
          if (!vowels.contains(arr[left])) {
            left++;
            continue;
          }
          if (!vowels.contains(arr[right])) {
            right--;
            continue;
          }
          char temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
        }

        return new String(arr);
      }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryansh-patel"/>
   ```cpp
    class Solution {
    public:
      string reverseVowels(string s) {
        unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        int left = 0, right = s.size() - 1;

        while (left < right) {
          if (vowels.find(s[left]) == vowels.end()) {
            left++;
            continue;
          }
          if (vowels.find(s[right]) == vowels.end()) {
            right--;
            continue;
          }
          swap(s[left], s[right]);
          left++;
          right--;
        }

        return s;
      }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- **Time Complexity:** $O(n)$, where `n` is the length of the string.
- **Space Complexity:** $O(1)$, as we are not using any additional space.

- The time complexity is linear in terms of the length of the string. Each character is checked and potentially swapped once, leading to a time complexity of $O(n)$.
- The space complexity is constant because we only use a few extra variables regardless of the string size.

</tabItem>
</Tabs>

:::tip Note
This solution efficiently reverses the vowels in the string while maintaining the order of non-vowel characters.
:::

---

## Video Explanation of Reverse Vowels of a String

<Tabs>

  <TabItem value="en" label="English">

  ---
  
    <Tabs>
      <TabItem value="javascript" label="JavaScript">
        <LiteYouTubeEmbed
          id="5mFEAT-CmVw"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Reverse Vowels of a String Problem Explanation | Reverse Vowels of a String Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>

      <TabItem value="python" label="Python">
        <LiteYouTubeEmbed
          id="LzpGyJ4ll64"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Reverse Vowels of a String Problem Explanation | Reverse Vowels of a String Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
      <TabItem value="java" label="Java">
        <LiteYouTubeEmbed
          id="PO4AXFzGEOU"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Reverse Vowels of a String Problem Explanation | Reverse Vowels of a String Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
    </Tabs>

  </TabItem>

  <TabItem value="hi" label="Hindi">
        <LiteYouTubeEmbed
          id="MjIWsEuIqEk"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Reverse Vowels of a String Problem Explanation | Reverse Vowels of a String Solution"
          poster="maxresdefault"
          webp 
        />
  </TabItem>

</Tabs>