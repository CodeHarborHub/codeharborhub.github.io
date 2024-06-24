---
id: check-if-the-sentence-is-pangram
title:   Check if the sentence is Pangram
sidebar_label: 1832. Check if the sentence is Pangram

tags:
- vector
- string
- pangram

description: "This is a solution to the Check if the sentence is Pangram problem on LeetCode."
---

## Problem Description
A **pangram** is a sentence where every letter of the English alphabet appears at least once.
Given a string `sentence` containing only lowercase English letters, return `true` *if `sentence` is a **pangram**, or `false` otherwise*.
### Examples

**Example 1:**

```
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
```

**Example 2:**
```
Input: sentence = "leetcode"
Output: false
```


### Constraints
- `1 <= sentence.length <= 1000`
- `sentence` consists of lowercase English letters.


## Solution for Check if the sentence is Pangram
### Approach 
#### Brute Force 
- Create a set of all 26 letters of the English alphabet.
- Iterate through each character in the sentence.
- Remove each character from the set if it exists in the set.
- After processing the entire sentence, check if the set is empty. If it is empty, it means every letter was found at least once in the sentence.

**Complexity**
- **Time Complexity:** O(n), where n is the length of the sentence. This is because we need to iterate through each character of the sentence once.
- **Space Complexity:** O(1), since the size of the alphabet set is fixed (26 letters).

**Corner Cases:**
- An empty string should immediately return `false`.
- A string shorter than 26 characters cannot be a pangram.
- Strings with all letters but mixed with additional characters should still return `true`.

**Recursive function:**
```python
def is_pangram_brute_force(sentence):
    # Define the set of all alphabet letters
    alphabet_set = set("abcdefghijklmnopqrstuvwxyz")
    
    # Iterate through each character in the sentence
    for char in sentence:
        # Remove the character from the alphabet set
        alphabet_set.discard(char)
        # If the set is empty, we found all the letters
        if not alphabet_set:
            return True
    
    # Check if the alphabet set is empty
    return len(alphabet_set) == 0

# Test cases
print(is_pangram_brute_force("thequickbrownfoxjumpsoverthelazydog"))  # Output: True
print(is_pangram_brute_force("leetcode"))  # Output: False
```

#### Optimized Approach 
- Use a set to keep track of unique characters in the sentence.
- Iterate through each character in the sentence and add it to the set.
- After processing the entire sentence, check if the set contains 26 unique characters.

**Complexity:**
- Time Complexity: `O(n)`, where n is the length of the sentence. This is because we need to iterate through each character of the sentence once.
- Space Complexity: `O(1)`, since the maximum size of the set is 26 (the number of unique letters in the English alphabet).

**Corner Cases:**
- Similar to the brute force approach: an empty string, a string shorter than 26 characters, and strings with all letters plus additional characters should be handled correctly.

**Optimized Solution:**

```python
def is_pangram_optimized(sentence):
    # Use a set to store unique characters
    seen_characters = set()
    
    # Iterate through each character in the sentence
    for char in sentence:
        # Add the character to the set
        seen_characters.add(char)
        # If the set size is 26, it means we have seen all letters
        if len(seen_characters) == 26:
            return True
    
    # Check if we have 26 unique characters
    return len(seen_characters) == 26

# Test cases
print(is_pangram_optimized("thequickbrownfoxjumpsoverthelazydog"))  # Output: True
print(is_pangram_optimized("leetcode"))  # Output: False
```

<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

    ```jsx live
    function Solution(string) {
      var checkIfPangram = function(sentence) {
        // Use a set to store unique characters
        const seenCharacters = new Set();
    
        // Iterate through each character in the sentence
        for (const char of sentence) {
        // Add the character to the set
            seenCharacters.add(char);
            // If the set size is 26, it means we have seen all letters
            if (seenCharacters.size === 26) {
                return true;
            }
        }
    
    // Check if we have 26 unique characters
        return seenCharacters.size === 26;
      };

      const input = "thequickbrownfoxjumpsoverthelazydog";
      const output = checkIfPangram(input);
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

  ## Code in Different Languages

   <Tabs>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@vansh-codes" />

   ```javascript
    /**
     * @param {string} sentence
     * @return {boolean}
     */
    var checkIfPangram = function(sentence) {
        const seenCharacters = new Set();
        
        for (const char of sentence) {
            seenCharacters.add(char);
            if (seenCharacters.size === 26) {
                return true;
            }
        }
        
        return seenCharacters.size === 26;
    };
    ```

  </TabItem>

  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@vansh-codes" /> 

   ```typescript
    function checkIfPangram(sentence: string): boolean {
        const seenCharacters: Set<string> = new Set();
        
        for (const char of sentence) {
            seenCharacters.add(char);
            if (seenCharacters.size === 26) {
                return true;
            }
        }
        
        return seenCharacters.size === 26;
    };
    ```

  </TabItem>

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@vansh-codes" />

   ```python
    class Solution(object):
        def checkIfPangram(self, sentence):
            """
            :type sentence: str
            :rtype: bool
            """
            seen_characters = set()
        
            for char in sentence:
                seen_characters.add(char)
                if len(seen_characters) == 26:
                    return True
            
            return len(seen_characters) == 26
    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@vansh-codes" />

   ```java
    class Solution {
        public boolean checkIfPangram(String sentence) {
            Set<Character> seenCharacters = new HashSet<>();
            
            for (char c : sentence.toCharArray()) {
                seenCharacters.add(c);
                if (seenCharacters.size() == 26) {
                    return true;
                }
            }
            
            return seenCharacters.size() == 26;
        }
    }
    ```

  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@vansh-codes" />

   ```cpp
   class Solution {
        public:
            bool checkIfPangram(string sentence) {
                unordered_set<char> seenCharacters;
            
                for (char c : sentence) {
                    seenCharacters.insert(c);
                    if (seenCharacters.size() == 26) {
                        return true;
                    }
                }
                
                return seenCharacters.size() == 26;
            }
    };
    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Check if the sentence is Pangram](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/)