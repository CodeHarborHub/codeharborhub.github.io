---
id:   Average-Value-of-Even-Numbers-That-Are-Divisible-by-Three
title:   Average Value of Even Numbers That Are Divisible by Three
sidebar_label: 2455-Average Value of Even Numbers That Are Divisible by Three
tags: [dsa, leetcode]
description: Problem solution of   Average Value of Even Numbers That Are Divisible by Three
---

## Problem Statement 

### Problem Description

Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
### Examples

#### Example 1
```
Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
```

### Example 2
```
Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.
```



### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: 
Iterate through the nums array.
For each number, check if it is even and divisible by 3.
If it meets both conditions, add it to a running sum and increment a count.
If the count is greater than 0, calculate the average as the integer division of the sum by the count; otherwise, return 0.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>

int averageValue(std::vector<int>& nums) {
    int sum = 0, count = 0;
    
    for (int num : nums) {
        if (num % 6 == 0) { // Even and divisible by 3 means divisible by 6
            sum += num;
            count++;
        }
    }
    
    return count > 0 ? sum / count : 0;
}

int main() {
    std::vector<int> nums = {1, 3, 6, 10, 12, 15};
    std::cout << averageValue(nums) << std::endl;  // Output: 9
    return 0;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
public class AverageValue {
    public static int averageValue(int[] nums) {
        int sum = 0, count = 0;

        for (int num : nums) {
            if (num % 6 == 0) { // Even and divisible by 3 means divisible by 6
                sum += num;
                count++;
            }
        }
        
        return count > 0 ? sum / count : 0;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, 6, 10, 12, 15};
        System.out.println(averageValue(nums));  // Output: 9
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def average_value(nums):
    total_sum = 0
    count = 0

    for num in nums:
        if num % 6 == 0:  # Even and divisible by 3 means divisible by 6
            total_sum += num
            count += 1
    
    return total_sum // count if count > 0 else 0

nums = [1, 3, 6, 10, 12, 15]
print(average_value(nums))  # Output: 9


```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n)$
-  where n is the number of elements in nums.
- Space Complexity: $O(1)$
-   since we are only using a few extra variables.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: 
The brute force approach is already optimal with a time complexity of O(n). The logic can be further simplified by directly checking if the number is divisible by 6, which implicitly checks for both evenness and divisibility by 3.
#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>

int averageValue(std::vector<int>& nums) {
    int sum = 0, count = 0;
    
    for (int num : nums) {
        if (num % 6 == 0) { // Divisible by 6 implies both even and divisible by 3
            sum += num;
            count++;
        }
    }
    
    return count > 0 ? sum / count : 0;
}

int main() {
    std::vector<int> nums = {1, 3, 6, 10, 12, 15};
    std::cout << averageValue(nums) << std::endl;  // Output: 9
    return 0;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
public class AverageValue {
    public static int averageValue(int[] nums) {
        int sum = 0, count = 0;

        for (int num : nums) {
            if (num % 6 == 0) { // Divisible by 6 implies both even and divisible by 3
                sum += num;
                count++;
            }
        }
        
        return count > 0 ? sum / count : 0;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, 6, 10, 12, 15};
        System.out.println(averageValue(nums));  // Output: 9
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
public class AverageValue {
    public static int averageValue(int[] nums) {
        int sum = 0, count = 0;

        for (int num : nums) {
            if (num % 6 == 0) { // Divisible by 6 implies both even and divisible by 3
                sum += num;
                count++;
            }
        }
        
        return count > 0 ? sum / count : 0;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, 6, 10, 12, 15};
        System.out.println(averageValue(nums));  // Output: 9
    }
}

```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$

- Space Complexity: $O(1)$

</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="H4rC6caBr44"
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

