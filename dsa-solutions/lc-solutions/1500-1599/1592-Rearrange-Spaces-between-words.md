---

id: rearrange-spaces-between-words
title: Rearrange Spaces Between Words
sidebar_label: 1592-Rearrange-Spaces-Between-Words
tags:
  - String
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Rearrange Spaces Between Words problem on LeetCode."

---

In this page, we will solve the Rearrange Spaces Between Words problem using different approaches. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

You are given a string `text` of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that `text` contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot distribute all the spaces equally, place the extra spaces at the end, including between the last word and the end of the string.

### Examples

**Example 1:**

```plaintext
Input: text = "  this   is  a sentence "
Output: "this   is   a   sentence"
```

**Example 2:**

```plaintext
Input: text = " practice   makes   perfect"
Output: "practice   makes   perfect "
```

### Constraints

- $1 <= text.length <= 100$
- `text` consists of lowercase English letters and spaces.
- `text` contains at least one word.

---

## Solution for Rearrange Spaces Between Words

### Intuition and Approach

To solve this problem, we can follow these steps:

1. Count the total number of spaces in the input string.
2. Split the input string into words.
3. Calculate the number of spaces that should be placed between words and the number of remaining spaces.
4. Construct the result string by joining the words with the calculated spaces and appending the remaining spaces at the end if needed.

<Tabs>
 <tabItem value="Splitting and Joining" label="Splitting and Joining">

### Approach 1: Splitting and Joining

We first split the text into words and count the spaces. Then, we calculate the spaces to distribute between words and the remaining spaces. Finally, we join the words with the calculated spaces and add the remaining spaces at the end if necessary.

#### Implementation

```jsx live
function rearrangeSpacesBetweenWords() {
  const text = "  this   is  a sentence ";

  const rearrangeSpaces = function(text) {
    const totalSpaces = text.split('').filter(c => c === ' ').length;
    const words = text.trim().split(/\s+/);
    const numWords = words.length;

    if (numWords === 1) {
      return words[0] + ' '.repeat(totalSpaces);
    }

    const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
    const remainingSpaces = totalSpaces % (numWords - 1);

    return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
  };

  const result = rearrangeSpaces(text);
  return (
    <div>
      <p>
        <b>Input:</b> text = "{text}"
      </p>
      <p>
        <b>Output:</b> "{result}"
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function rearrangeSpaces(text) {
      const totalSpaces = text.split('').filter(c => c === ' ').length;
      const words = text.trim().split(/\s+/);
      const numWords = words.length;

      if (numWords === 1) {
        return words[0] + ' '.repeat(totalSpaces);
      }

      const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
      const remainingSpaces = totalSpaces % (numWords - 1);

      return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function rearrangeSpaces(text: string): string {
      const totalSpaces = text.split('').filter(c => c === ' ').length;
      const words = text.trim().split(/\s+/);
      const numWords = words.length;

      if (numWords === 1) {
        return words[0] + ' '.repeat(totalSpaces);
      }

      const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
      const remainingSpaces = totalSpaces % (numWords - 1);

      return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def rearrangeSpaces(self, text: str) -> str:
            total_spaces = text.count(' ')
            words = text.split()
            num_words = len(words)

            if num_words == 1:
                return words[0] + ' ' * total_spaces

            spaces_between_words = total_spaces // (num_words - 1)
            remaining_spaces = total_spaces % (num_words - 1)

            return (' ' * spaces_between_words).join(words) + ' ' * remaining_spaces
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public String rearrangeSpaces(String text) {
            int totalSpaces = 0;
            for (char c : text.toCharArray()) {
                if (c == ' ') {
                    totalSpaces++;
                }
            }

            String[] words = text.trim().split("\\s+");
            int numWords = words.length;

            if (numWords == 1) {
                return words[0] + " ".repeat(totalSpaces);
            }

            int spacesBetweenWords = totalSpaces / (numWords - 1);
            int remainingSpaces = totalSpaces % (numWords - 1);

            return String.join(" ".repeat(spacesBetweenWords), words) + " ".repeat(remainingSpaces);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <string>
    #include <sstream>
    #include <algorithm>

    class Solution {
    public:
        std::string rearrangeSpaces(std::string text) {
            int totalSpaces = std::count(text.begin(), text.end(), ' ');
            std::istringstream iss(text);
            std::vector<std::string> words;
            std::string word;
            while (iss >> word) {
                words.push_back(word);
            }
            int numWords = words.size();

            if (numWords == 1) {
                return words[0] + std::string(totalSpaces, ' ');
            }

            int spacesBetweenWords = totalSpaces / (numWords - 1);
            int remainingSpaces = totalSpaces % (numWords - 1);

            std::string result;
            for (int i = 0; i < numWords - 1; ++i) {
                result += words[i] + std::string(spacesBetweenWords, ' ');
            }
            result += words[numWords - 1] + std::string(remainingSpaces, ' ');
            return result;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$ where n is the length of the input string.
- Space Complexity: $$O(n)$$ for storing the words and the result string.

</tabItem>

<tabItem value="Regex Splitting" label="Regex Splitting">

### Approach 2: Regex Splitting

In this approach, we use regular expressions to split the text into words and spaces. This can sometimes provide a more straightforward way to handle the spaces and words.

#### Implementation

```jsx live
function rearrangeSpacesBetweenWords() {
  const text = " practice   makes   perfect";

  const rearrangeSpaces = function(text) {
    const words = text.match(/\b\w+\b/g);
    const totalSpaces = text.length - words.reduce((acc, word) => acc + word.length, 0);
    const numWords = words.length;

    if (numWords === 1) {
      return words[0] + ' '.repeat(totalSpaces);
    }

    const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
    const remainingSpaces = totalSpaces % (numWords - 1);

    return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
  };

  const result = rearrangeSpaces(text);
  return (
    <div>
      <p>
        <b>Input:</b> text = "{text}"
      </p>
      <p>
        <b>Output:</b> "{result}"
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor

 name="@manishh12"/>
   ```javascript
    function rearrangeSpaces(text) {
      const words = text.match(/\b\w+\b/g);
      const totalSpaces = text.length - words.reduce((acc, word) => acc + word.length, 0);
      const numWords = words.length;

      if (numWords === 1) {
        return words[0] + ' '.repeat(totalSpaces);
      }

      const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
      const remainingSpaces = totalSpaces % (numWords - 1);

      return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function rearrangeSpaces(text: string): string {
      const words = text.match(/\b\w+\b/g);
      const totalSpaces = text.length - words.reduce((acc, word) => acc + word.length, 0);
      const numWords = words.length;

      if (numWords === 1) {
        return words[0] + ' '.repeat(totalSpaces);
      }

      const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
      const remainingSpaces = totalSpaces % (numWords - 1);

      return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def rearrangeSpaces(self, text: str) -> str:
            words = re.findall(r'\b\w+\b', text)
            total_spaces = len(text) - sum(len(word) for word in words)
            num_words = len(words)

            if num_words == 1:
                return words[0] + ' ' * total_spaces

            spaces_between_words = total_spaces // (num_words - 1)
            remaining_spaces = total_spaces % (num_words - 1)

            return (' ' * spaces_between_words).join(words) + ' ' * remaining_spaces
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public String rearrangeSpaces(String text) {
            List<String> words = new ArrayList<>();
            Matcher m = Pattern.compile("\\b\\w+\\b").matcher(text);
            while (m.find()) {
                words.add(m.group());
            }
            int totalSpaces = text.length() - words.stream().mapToInt(String::length).sum();
            int numWords = words.size();

            if (numWords == 1) {
                return words.get(0) + " ".repeat(totalSpaces);
            }

            int spacesBetweenWords = totalSpaces / (numWords - 1);
            int remainingSpaces = totalSpaces % (numWords - 1);

            return String.join(" ".repeat(spacesBetweenWords), words) + " ".repeat(remainingSpaces);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <string>
    #include <sstream>
    #include <regex>
    #include <algorithm>

    class Solution {
    public:
        std::string rearrangeSpaces(std::string text) {
            std::regex word_regex("\\b\\w+\\b");
            auto words_begin = std::sregex_iterator(text.begin(), text.end(), word_regex);
            auto words_end = std::sregex_iterator();

            std::vector<std::string> words;
            for (std::sregex_iterator i = words_begin; i != words_end; ++i) {
                words.push_back((*i).str());
            }

            int totalSpaces = text.length() - std::accumulate(words.begin(), words.end(), 0, [](int sum, const std::string& word) { return sum + word.length(); });
            int numWords = words.size();

            if (numWords == 1) {
                return words[0] + std::string(totalSpaces, ' ');
            }

            int spacesBetweenWords = totalSpaces / (numWords - 1);
            int remainingSpaces = totalSpaces % (numWords - 1);

            std::string result;
            for (int i = 0; i < numWords - 1; ++i) {
                result += words[i] + std::string(spacesBetweenWords, ' ');
            }
            result += words[numWords - 1] + std::string(remainingSpaces, ' ');
            return result;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$ where n is the length of the input string.
- Space Complexity: $$O(n)$$ for storing the words and the result string.

</tabItem>

<tabItem value="Counting and Constructing" label="Counting and Constructing">

### Approach 3: Counting and Constructing

In this approach, we manually count the spaces and words, then construct the result string by iterating through the words and adding spaces as needed.

#### Implementation

```jsx live
function rearrangeSpacesBetweenWords() {
  const text = "  hello";

  const rearrangeSpaces = function(text) {
    let totalSpaces = 0;
    let words = [];
    let word = '';

    for (let char of text) {
      if (char === ' ') {
        if (word) {
          words.push(word);
          word = '';
        }
        totalSpaces++;
      } else {
        word += char;
      }
    }
    if (word) {
      words.push(word);
    }

    const numWords = words.length;

    if (numWords === 1) {
      return words[0] + ' '.repeat(totalSpaces);
    }

    const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
    const remainingSpaces = totalSpaces % (numWords - 1);

    return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
  };

  const result = rearrangeSpaces(text);
  return (
    <div>
      <p>
        <b>Input:</b> text = "{text}"
      </p>
      <p>
        <b>Output:</b> "{result}"
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function rearrangeSpaces(text) {
      let totalSpaces = 0;
      let words = [];
      let word = '';

      for (let char of text) {
        if (char === ' ') {
          if (word) {
            words.push(word);
            word = '';
          }
          totalSpaces++;
        } else {
          word += char;
        }
      }
      if (word) {
        words.push(word);
      }

      const numWords = words.length;

      if (numWords === 1) {
        return words[0] + ' '.repeat(totalSpaces);
      }

      const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
      const remainingSpaces = totalSpaces % (numWords - 1);

      return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function rearrangeSpaces(text: string): string {
      let totalSpaces = 0;
      let words: string[] = [];
      let word = '';

      for (let char of text) {
        if (char === ' ') {
          if (word) {
            words.push(word);
            word = '';
          }
          totalSpaces++;
        } else {
          word += char;
        }
      }
      if (word) {
        words.push(word);
      }

      const numWords = words.length;

      if (numWords === 1) {
        return words[0] + ' '.repeat(totalSpaces);
      }

      const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
      const remainingSpaces = totalSpaces % (numWords - 1);

      return words.join(' '.repeat(spacesBetweenWords)) + ' '.repeat(remainingSpaces);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def rearrangeSpaces(self, text: str) -> str:
            total_spaces = 0
            words = []
            word = ''

            for char in text:
                if char == ' ':
                    if word:
                        words.append(word)
                        word = ''
                    total_spaces += 1
                else:
                    word += char
            if word:
                words.append(word)

            num_words = len(words)

            if num_words == 1:
                return words[0] + ' ' * total_spaces

            spaces_between_words = total_spaces // (num_words - 1)
            remaining_spaces = total_spaces % (num_words - 1)

            return (' ' * spaces_between_words).join(words) + ' '

 * remaining_spaces
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public String rearrangeSpaces(String text) {
            int totalSpaces = 0;
            List<String> words = new ArrayList<>();
            StringBuilder word = new StringBuilder();

            for (char c : text.toCharArray()) {
                if (c == ' ') {
                    if (word.length() > 0) {
                        words.add(word.toString());
                        word = new StringBuilder();
                    }
                    totalSpaces++;
                } else {
                    word.append(c);
                }
            }
            if (word.length() > 0) {
                words.add(word.toString());
            }

            int numWords = words.size();

            if (numWords == 1) {
                return words.get(0) + " ".repeat(totalSpaces);
            }

            int spacesBetweenWords = totalSpaces / (numWords - 1);
            int remainingSpaces = totalSpaces % (numWords - 1);

            return String.join(" ".repeat(spacesBetweenWords), words) + " ".repeat(remainingSpaces);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <string>
    #include <numeric>

    class Solution {
    public:
        std::string rearrangeSpaces(std::string text) {
            int totalSpaces = 0;
            std::vector<std::string> words;
            std::string word;

            for (char c : text) {
                if (c == ' ') {
                    if (!word.empty()) {
                        words.push_back(word);
                        word.clear();
                    }
                    totalSpaces++;
                } else {
                    word += c;
                }
            }
            if (!word.empty()) {
                words.push_back(word);
            }

            int numWords = words.size();

            if (numWords == 1) {
                return words[0] + std::string(totalSpaces, ' ');
            }

            int spacesBetweenWords = totalSpaces / (numWords - 1);
            int remainingSpaces = totalSpaces % (numWords - 1);

            std::string result;
            for (int i = 0; i < numWords - 1; ++i) {
                result += words[i] + std::string(spacesBetweenWords, ' ');
            }
            result += words[numWords - 1] + std::string(remainingSpaces, ' ');
            return result;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$ where n is the length of the input string.
- Space Complexity: $$O(n)$$ for storing the words and the result string.

</tabItem>

</Tabs>

---

:::tip

By using the above approach, we can efficiently solve the Rearrange Spaces Between Words problem. The choice of implementation language depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Rearrange Spaces Between Words](https://leetcode.com/problems/rearrange-spaces-between-words/description/)
- **Solution Link:** [Rearrange Spaces Between Words Solution on LeetCode](https://leetcode.com/problems/rearrange-spaces-between-words/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)
