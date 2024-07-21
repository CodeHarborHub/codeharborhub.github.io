---
id: 0273-Integer-to-English-Words
title: 0273 Integer to English Words
sidebar_label: 0273 - Integer to English Words
tags:
  - Integer to English Words
  - Hash Table
  - LeetCode
  - JavaScript
  - C++
  - Java
  - Python
description: "This is a solution to the Integer to English Words problem on LeetCode."
sidebar_position: 273
---

In this tutorial, we will solve the Integer to English Words problem. We will provide the implementation of the solution in JavaScript, Python, Java, C++, and more.

## Problem Description

Convert a non-negative integer `num` to its English words representation.

### Examples

**Example 1:**

```plaintext
Input: num = 123
Output: "One Hundred Twenty Three"
```

**Example 2:**

```plaintext
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
```

**Example 3:**

```plaintext
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

### Constraints

- <code>$0 \leq \text{num} \leq 2^31 - 1$</code>

---

## Solution for Two Sum Problem

### Intuition and Approach

Understanding the structure and pattern of English numbers is essential to translating numbers into their representation in language. By taking into account the following, we may divide the issue into manageable chunks:

1. We build a list for the unique names of numbers 1 through 19, which do not follow any particular pattern (lt20).
2. We list the tens from 20 to 90 because they have unique names as well.
3. Generally speaking, complex numbers are sums of smaller numbers. For instance, 345 can be interpreted as "Three Hundred Forty-Five," which is the result of adding the smaller number "Forty-Five" to the word "Three Hundred".
4. The way that numbers higher than 99 are named in English is by adding a scale word, such as "Thousand," "Million," or "Billion," and then saying the name of the next number that comes after.

In light of this, we tackle the issue by developing a recursive function transfer that is capable of handling values smaller than a thousand. Subsequently, we employ an iterative process to apply this function to segments of the input number, gradually decreasing from billions to units, attaching suitable scale terms, and concatenating these segments to generate the complete representation of English words.

We keep an array thousands, which is made up of scale words divided by a factor of ten, and an adjusted counter to work on fractions of the number, in order to track units of thousand. The number can be divided into segments that can be handled by transfer before the matching scale term (if any) is attached by using division and modulo operations.

The method begins with the largest unit that can be used, billions, then gradually removes portions of the number until the whole amount has been converted. After that, we combine the created segments and eliminate any remaining spaces to obtain the final representation of the English words.

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>

```javascript
const map = new Map();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");
map.set(4, "Four");
map.set(5, "Five");
map.set(6, "Six");
map.set(7, "Seven");
map.set(8, "Eight");
map.set(9, "Nine");
map.set(10, "Ten");
map.set(11, "Eleven");
map.set(12, "Twelve");
map.set(13, "Thirteen");
map.set(14, "Fourteen");
map.set(15, "Fifteen");
map.set(16, "Sixteen");
map.set(17, "Seventeen");
map.set(18, "Eighteen");
map.set(19, "Nineteen");
map.set(20, "Twenty");
map.set(30, "Thirty");
map.set(40, "Forty");
map.set(50, "Fifty");
map.set(60, "Sixty");
map.set(70, "Seventy");
map.set(80, "Eighty");
map.set(90, "Ninety");
map.set(100, "Hundred");
map.set(1000, "Thousand");
map.set(1000000, "Million");
map.set(1000000000, "Billion");

function numberToWords(num) {
  if (num === 0) {
    return "Zero";
  }
  let result = "";
  for (let i = 1000000000; i >= 1000; i /= 1000) {
    if (num >= i) {
      result += get3Digits(Math.floor(num / i)) + " " + map.get(i) + " ";
      num %= i;
    }
  }
  if (num > 0) {
    result += get3Digits(num);
  }
  return result.trim();
}

function get3Digits(num) {
  let result = "";
  if (num >= 100) {
    result += " " + map.get(Math.floor(num / 100)) + " " + map.get(100);
    num %= 100;
  }
  if (num > 0) {
    if (num < 20 || num % 10 === 0) {
      result += " " + map.get(num);
    } else {
      result +=
        " " + map.get(Math.floor(num / 10) * 10) + " " + map.get(num % 10);
    }
  }
  return result.trim();
}
```

</TabItem>
<TabItem value="TypeScript" label="TypeScript">

```typescript
const map: Map<number, string> = new Map([
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],
  [5, "Five"],
  [6, "Six"],
  [7, "Seven"],
  [8, "Eight"],
  [9, "Nine"],
  [10, "Ten"],
  [11, "Eleven"],
  [12, "Twelve"],
  [13, "Thirteen"],
  [14, "Fourteen"],
  [15, "Fifteen"],
  [16, "Sixteen"],
  [17, "Seventeen"],
  [18, "Eighteen"],
  [19, "Nineteen"],
  [20, "Twenty"],
  [30, "Thirty"],
  [40, "Forty"],
  [50, "Fifty"],
  [60, "Sixty"],
  [70, "Seventy"],
  [80, "Eighty"],
  [90, "Ninety"],
  [100, "Hundred"],
  [1000, "Thousand"],
  [1000000, "Million"],
  [1000000000, "Billion"],
]);
function numberToWords(num: number): string {
  if (num === 0) {
    return "Zero";
  }

  const sb: string[] = [];
  for (let i = 1000000000; i >= 1000; i /= 1000) {
    if (num >= i) {
      sb.push(get3Digits(Math.floor(num / i)));
      sb.push(map.get(i) as string);
      num %= i;
    }
  }

  if (num > 0) {
    sb.push(get3Digits(num));
  }

  return sb.join(" ").trim();
}

function get3Digits(num: number): string {
  const sb: string[] = [];
  if (num >= 100) {
    sb.push(map.get(Math.floor(num / 100)) as string);
    sb.push(map.get(100) as string);
    num %= 100;
  }

  if (num > 0) {
    if (num < 20 || num % 10 === 0) {
      sb.push(map.get(num) as string);
    } else {
      sb.push(map.get(Math.floor(num / 10) * 10) as string);
      sb.push(map.get(num % 10) as string);
    }
  }

  return sb.join(" ");
}
```

</TabItem>
<TabItem value="Python" label="Python">

```python
  class Solution:
    def numberToWords(self, num: int) -> str:

        if num == 0:
            return 'Zero'


        less_than_20 = [
            '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
            'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
            'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
        ]


        tens = [
            '', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
        ]


        thousands = ['Billion', 'Million', 'Thousand', '']


        def translate(num):
            if num == 0:
                return ''
            elif num < 20:
                return less_than_20[num] + ' '
            elif num < 100:
                return tens[num // 10] + ' ' + translate(num % 10)
            else:
                return less_than_20[num // 100] + ' Hundred ' + translate(num % 100)

        result = []
        i, j = 1000000000, 0


        while i > 0:
            if num // i != 0:
                result.append(translate(num // i))
                result.append(thousands[j])
                result.append(' ')
                num %= i
            j += 1
            i //= 1000

        return ''.join(result).strip()
```

</TabItem>
<TabItem value="Java" label="Java">

```java
import java.util.HashMap;
import java.util.Map;

public class Solution {

    private static final Map<Integer, String> NUMBER_TO_WORDS_MAP;


    static {
        NUMBER_TO_WORDS_MAP = new HashMap<>();

        NUMBER_TO_WORDS_MAP.put(1, "One");
        NUMBER_TO_WORDS_MAP.put(2, "Two");
        NUMBER_TO_WORDS_MAP.put(3, "Three");
        NUMBER_TO_WORDS_MAP.put(4, "Four");
        NUMBER_TO_WORDS_MAP.put(5, "Five");
        NUMBER_TO_WORDS_MAP.put(6, "Six");
        NUMBER_TO_WORDS_MAP.put(7, "Seven");
        NUMBER_TO_WORDS_MAP.put(8, "Eight");
        NUMBER_TO_WORDS_MAP.put(9, "Nine");

        NUMBER_TO_WORDS_MAP.put(10, "Ten");
        NUMBER_TO_WORDS_MAP.put(11, "Eleven");
        NUMBER_TO_WORDS_MAP.put(12, "Twelve");
        NUMBER_TO_WORDS_MAP.put(13, "Thirteen");
        NUMBER_TO_WORDS_MAP.put(14, "Fourteen");
        NUMBER_TO_WORDS_MAP.put(15, "Fifteen");
        NUMBER_TO_WORDS_MAP.put(16, "Sixteen");
        NUMBER_TO_WORDS_MAP.put(17, "Seventeen");
        NUMBER_TO_WORDS_MAP.put(18, "Eighteen");
        NUMBER_TO_WORDS_MAP.put(19, "Nineteen");

        NUMBER_TO_WORDS_MAP.put(20, "Twenty");
        NUMBER_TO_WORDS_MAP.put(30, "Thirty");
        NUMBER_TO_WORDS_MAP.put(40, "Forty");
        NUMBER_TO_WORDS_MAP.put(50, "Fifty");
        NUMBER_TO_WORDS_MAP.put(60, "Sixty");
        NUMBER_TO_WORDS_MAP.put(70, "Seventy");
        NUMBER_TO_WORDS_MAP.put(80, "Eighty");
        NUMBER_TO_WORDS_MAP.put(90, "Ninety");

        NUMBER_TO_WORDS_MAP.put(100, "Hundred");
        NUMBER_TO_WORDS_MAP.put(1000, "Thousand");
        NUMBER_TO_WORDS_MAP.put(1000000, "Million");
        NUMBER_TO_WORDS_MAP.put(1000000000, "Billion");
    }


    public String numberToWords(int num) {

        if (num == 0) {
            return "Zero";
        }

        StringBuilder wordsBuilder = new StringBuilder();


        for (int i = 1000000000; i >= 1000; i /= 1000) {
            if (num >= i) {
                wordsBuilder.append(processThreeDigits(num / i)).append(" ").append(NUMBER_TO_WORDS_MAP.get(i));
                num %= i;
            }
        }


        if (num > 0) {
            wordsBuilder.append(processThreeDigits(num));
        }


        return wordsBuilder.substring(1);
    }


    private String processThreeDigits(int num) {
        StringBuilder threeDigitsBuilder = new StringBuilder();

        if (num >= 100) {
            threeDigitsBuilder.append(" ")
                             .append(NUMBER_TO_WORDS_MAP.get(num / 100))
                             .append(" ")
                             .append(NUMBER_TO_WORDS_MAP.get(100));
            num %= 100;
        }
        if (num > 0) {

            if (num < 20 || num % 10 == 0) {
                threeDigitsBuilder.append(" ").append(NUMBER_TO_WORDS_MAP.get(num));
            } else {

                threeDigitsBuilder.append(" ")
                                  .append(NUMBER_TO_WORDS_MAP.get(num / 10 * 10))
                                  .append(" ")
                                  .append(NUMBER_TO_WORDS_MAP.get(num % 10));
            }
        }
        return threeDigitsBuilder.toString();
    }
}
```

</TabItem>
<TabItem value="C++" label="C++">

```cpp
 #include <iostream>
#include <string>
#include <unordered_map>

using std::string;
using std::unordered_map;

class Solution {
public:


    string numberToWords(int num) {
        unordered_map<int, string> number_to_words_map = {{1, "One"},
                                                      {2, "Two"},
                                                      {3, "Three"},
                                                      {4, "Four"},
                                                      {5, "Five"},
                                                      {6, "Six"},
                                                      {7, "Seven"},
                                                      {8, "Eight"},
                                                      {9, "Nine"},
                                                      {10, "Ten"},
                                                      {11, "Eleven"},
                                                      {12, "Twelve"},
                                                      {13, "Thirteen"},
                                                      {14, "Fourteen"},
                                                      {15, "Fifteen"},
                                                      {16, "Sixteen"},
                                                      {17, "Seventeen"},
                                                      {18, "Eighteen"},
                                                      {19, "Nineteen"},
                                                      {20, "Twenty"},
                                                      {30, "Thirty"},
                                                      {40, "Forty"},
                                                      {50, "Fifty"},
                                                      {60, "Sixty"},
                                                      {70, "Seventy"},
                                                      {80, "Eighty"},
                                                      {90, "Ninety"},
                                                      {100, "Hundred"},
                                                      {1000, "Thousand"},
                                                      {1000000, "Million"},
                                                      {1000000000, "Billion"}};
        if (num == 0) {
            return "Zero";
        }

        string words = "";

        for (int i = 1000000000; i >= 1000; i /= 1000) {
            if (num >= i) {
                words +=
                    processThreeDigits(num / i, number_to_words_map) + " " + number_to_words_map[i];
                num %= i;
            }
        }

        if (num > 0) {
            words += processThreeDigits(num, number_to_words_map);
        }

        if (!words.empty() && words.front() == ' ') {
            words = words.substr(1);
        }
        return words;
    }

private:
    string processThreeDigits(int num, unordered_map<int, string> number_to_words_map) {
        string result = "";

        if (num >= 100) {
            result += " " + number_to_words_map[num / 100] + " " +
                      number_to_words_map[100];
            num %= 100;
        }
        if (num > 0) {

            if (num < 20 || num % 10 == 0) {
                result += " " + number_to_words_map[num];
            } else {

                result += " " + number_to_words_map[num / 10 * 10] + " " +
                          number_to_words_map[num % 10];
            }
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$
- The time complexity is $O(n)$ where `n` is the number of digits in the input number since each digit or group of digits is processed once
- The space complexity is $O(n)$ due to the storage required for the word representation of the number

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['Avdhut-Pailwan'].map(username => (
<Author key={username} username={username} />
))}
</div>
````
