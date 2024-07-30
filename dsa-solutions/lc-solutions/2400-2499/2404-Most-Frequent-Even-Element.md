---
id:  Most-Frequent-Even-Element
title:  Most Frequent Even Element
sidebar_label: 2404-Most Frequent Even Element
tags: [dsa, leetcode]
description: Problem solution of  Most Frequent Even Element
---

## Problem Statement 

### Problem Description

Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1.

 
### Examples

#### Example 1
```
Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation:
The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
We return the smallest one, which is 2.
```

### Example 2
```
Input: nums = [4,4,4,9,2,4]
Output: 4
Explanation: 4 is the even element appears the most.
```

### Example 3
```
Input: nums = [29,47,21,41,13,37,25,7]
Output: -1
Explanation: There is no even element
```

### Constraints

-` 1 <= nums.length <= 2000`
- `0 <= nums[i] <= 105`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: Iterate through the array and count the frequency of each even number using a dictionary or a similar data structure.
Iterate through the frequency map to find the even number with the highest frequency. In case of a tie, select the smallest even number.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int mostFrequentEven(vector<int>& nums) {
    unordered_map<int, int> freq;
    for (int num : nums) {
        if (num % 2 == 0) {
            freq[num]++;
        }
    }

    int maxFreq = 0;
    int res = -1;
    for (auto& [num, count] : freq) {
        if (count > maxFreq || (count == maxFreq && num < res)) {
            maxFreq = count;
            res = num;
        }
    }

    return res;
}

int main() {
    vector<int> nums = {0, 1, 2, 2, 4, 4, 1};
    cout << mostFrequentEven(nums) << endl; // Output: 2
    return 0;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.HashMap;

public class Main {
    public static int mostFrequentEven(int[] nums) {
        HashMap<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) {
            if (num % 2 == 0) {
                freq.put(num, freq.getOrDefault(num, 0) + 1);
            }
        }

        int maxFreq = 0;
        int res = -1;
        for (int num : freq.keySet()) {
            int count = freq.get(num);
            if (count > maxFreq || (count == maxFreq && num < res)) {
                maxFreq = count;
                res = num;
            }
        }

        return res;
    }

    public static void main(String[] args) {
        int[] nums = {0, 1, 2, 2, 4, 4, 1};
        System.out.println(mostFrequentEven(nums)); // Output: 2
    }
}

 


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
from collections import defaultdict

def most_frequent_even(nums):
    freq = defaultdict(int)
    for num in nums:
        if num % 2 == 0:
            freq[num] += 1

    max_freq = 0
    result = -1
    for num, count in freq.items():
        if count > max_freq or (count == max_freq and num < result):
            max_freq = count
            result = num

    return result

nums = [0, 1, 2, 2, 4, 4, 1]
print(most_frequent_even(nums))  # Output: 2

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n^2)$
-  due to the nested loop for counting frequency and finding the maximum.
- Space Complexity: $O(n)$
-  for storing the frequency of numbers.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: Similar to the brute force method, but the counting and maximum frequency determination are optimized.
Use a single pass to find the most frequent even element and track the maximum frequency simultaneously.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int mostFrequentEven(vector<int>& nums) {
    unordered_map<int, int> freq;
    int maxFreq = 0;
    int res = -1;

    for (int num : nums) {
        if (num % 2 == 0) {
            freq[num]++;
            if (freq[num] > maxFreq || (freq[num] == maxFreq && num < res)) {
                maxFreq = freq[num];
                res = num;
            }
        }
    }

    return res;
}

int main() {
    vector<int> nums = {0, 1, 2, 2, 4, 4, 1};
    cout << mostFrequentEven(nums) << endl; // Output: 2
    return 0;
}



```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.HashMap;

public class Main {
    public static int mostFrequentEven(int[] nums) {
        HashMap<Integer, Integer> freq = new HashMap<>();
        int maxFreq = 0;
        int res = -1;

        for (int num : nums) {
            if (num % 2 == 0) {
                freq.put(num, freq.getOrDefault(num, 0) + 1);
                if (freq.get(num) > maxFreq || (freq.get(num) == maxFreq && num < res)) {
                    maxFreq = freq.get(num);
                    res = num;
                }
            }
        }

        return res;
    }

    public static void main(String[] args) {
        int[] nums = {0, 1, 2, 2, 4, 4, 1};
        System.out.println(mostFrequentEven(nums)); // Output: 2
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
from collections import defaultdict

def most_frequent_even(nums):
    freq = defaultdict(int)
    max_freq = 0
    result = -1

    for num in nums:
        if num % 2 == 0:
            freq[num] += 1
            if freq[num] > max_freq or (freq[num] == max_freq and num < result):
                max_freq = freq[num]
                result = num

    return result

nums = [0, 1, 2, 2, 4, 4, 1]
print(most_frequent_even(nums))  # Output: 2


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- due to a single pass through the array.
- Space Complexity: $O(n)$
-  for storing the frequency map.
- This approach is efficient and straightforward.

</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="5nRxQGWZy0g"
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

