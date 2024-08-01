---
id:  Count-Days-Spent-Together
title:  Count Days Spent Together
sidebar_label: 2409-Count Days Spent Together
tags: [dsa, leetcode]
description: Problem solution of  Count Days Spent Together
---

## Problem Statement 

### Problem Description

Alice and Bob are traveling to Rome for separate business meetings.

You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in the city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city from the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the format "MM-DD", corresponding to the month and day of the date.

Return the total number of days that Alice and Bob are in Rome together.

You can assume that all dates occur in the same calendar year, which is not a leap year. 
 
### Examples

#### Example 1
```
Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
Output: 3
Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.
```

### Example 2
```
Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
Output: 0
Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.
```

### Constraints

- `All dates are provided in the format "MM-DD".`
- `Alice and Bob's arrival dates are earlier than or equal to their leaving dates.`
- `The given dates are valid dates of a non-leap year.`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: Check each day in the range of Alice’s stay and see if it falls within Bob’s stay.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <string>
#include <sstream>
#include <iomanip>
#include <ctime>

int countOverlapBruteForce(std::string arriveAlice, std::string leaveAlice, std::string arriveBob, std::string leaveBob) {
    auto date_to_tm = [](const std::string& date_str) {
        std::tm t = {};
        std::stringstream ss(date_str);
        ss >> std::get_time(&t, "%m-%d");
        t.tm_year = 2024 - 1900; // Assume the year 2024
        return t;
    };

    auto startAlice = date_to_tm(arriveAlice);
    auto endAlice = date_to_tm(leaveAlice);
    auto startBob = date_to_tm(arriveBob);
    auto endBob = date_to_tm(leaveBob);

    std::tm currentDay = startAlice;
    int count = 0;

    while (std::mktime(&currentDay) <= std::mktime(&endAlice)) {
        if (std::mktime(&currentDay) >= std::mktime(&startBob) && std::mktime(&currentDay) <= std::mktime(&endBob)) {
            count++;
        }
        currentDay.tm_mday++;
        std::mktime(&currentDay);
    }

    return count;
}

int main() {
    std::cout << countOverlapBruteForce("08-15", "08-18", "08-16", "08-19") << std::endl; // Output: 3
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class Main {
    public static int countOverlapBruteForce(String arriveAlice, String leaveAlice, String arriveBob, String leaveBob) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd");
        LocalDate startAlice = LocalDate.parse(arriveAlice, formatter);
        LocalDate endAlice = LocalDate.parse(leaveAlice, formatter);
        LocalDate startBob = LocalDate.parse(arriveBob, formatter);
        LocalDate endBob = LocalDate.parse(leaveBob, formatter);

        int count = 0;
        LocalDate currentDay = startAlice;
        
        while (!currentDay.isAfter(endAlice)) {
            if (!currentDay.isBefore(startBob) && !currentDay.isAfter(endBob)) {
                count++;
            }
            currentDay = currentDay.plusDays(1);
        }
        
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countOverlapBruteForce("08-15", "08-18", "08-16", "08-19"));  // Output: 3
    }
}


 


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
from datetime import datetime, timedelta

def count_overlap_brute_force(arriveAlice, leaveAlice, arriveBob, leaveBob):
    def date_from_str(date_str):
        return datetime.strptime(date_str, "%m-%d")
    
    start_alice = date_from_str(arriveAlice)
    end_alice = date_from_str(leaveAlice)
    start_bob = date_from_str(arriveBob)
    end_bob = date_from_str(leaveBob)
    
    count = 0
    current_day = start_alice
    
    while current_day <= end_alice:
        if start_bob <= current_day <= end_bob:
            count += 1
        current_day += timedelta(days=1)
    
    return count

# Example usage
print(count_overlap_brute_force("08-15", "08-18", "08-16", "08-19"))  # Output: 3

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n)$
-  where n is the number of days in Alice’s stay (or Bob’s, whichever is longer). This is because we check each day individually.
- Space Complexity: $O(1)$
-   as we only need a constant amount of extra space to store dates and counters.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: Calculate the overlapping period directly by finding the intersection of the two date ranges.
#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <string>
#include <sstream>
#include <iomanip>
#include <ctime>

int countOverlapOptimized(std::string arriveAlice, std::string leaveAlice, std::string arriveBob, std::string leaveBob) {
    auto date_to_tm = [](const std::string& date_str) {
        std::tm t = {};
        std::stringstream ss(date_str);
        ss >> std::get_time(&t, "%m-%d");
        t.tm_year = 2024 - 1900; // Assume the year 2024
        return t;
    };

    auto startAlice = date_to_tm(arriveAlice);
    auto endAlice = date_to_tm(leaveAlice);
    auto startBob = date_to_tm(arriveBob);
    auto endBob = date_to_tm(leaveBob);

    std::tm startOverlap = (std::mktime(&startAlice) > std::mktime(&startBob)) ? startAlice : startBob;
    std::tm endOverlap = (std::mktime(&endAlice) < std::mktime(&endBob)) ? endAlice : endBob;
    
    if (std::mktime(&startOverlap) > std::mktime(&endOverlap)) {
        return 0;
    }

    double days = std::difftime(std::mktime(&endOverlap), std::mktime(&startOverlap)) / (60 * 60 * 24) + 1;
    return static_cast<int>(days);
}

int main() {
    std::cout << countOverlapOptimized("08-15", "08-18", "08-16", "08-19") << std::endl; // Output: 3
}




```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Main {
    public static int countOverlapOptimized(String arriveAlice, String leaveAlice, String arriveBob, String leaveBob) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd");
        LocalDate startAlice = LocalDate.parse(arriveAlice, formatter);
        LocalDate endAlice = LocalDate.parse(leaveAlice, formatter);
        LocalDate startBob = LocalDate.parse(arriveBob, formatter);
        LocalDate endBob = LocalDate.parse(leaveBob, formatter);

        LocalDate startOverlap = startAlice.isAfter(startBob) ? startAlice : startBob;
        LocalDate endOverlap = endAlice.isBefore(endBob) ? endAlice : endBob;
        
        if (startOverlap.isAfter(endOverlap)) {
            return 0;
        }

        return (int) (endOverlap.toEpochDay() - startOverlap.toEpochDay() + 1);
    }

    public static void main(String[] args) {
        System.out.println(countOverlapOptimized("08-15", "08-18", "08-16", "08-19"));  // Output: 3
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
from datetime import datetime

def count_overlap_optimized(arriveAlice, leaveAlice, arriveBob, leaveBob):
    def date_from_str(date_str):
        return datetime.strptime(date_str, "%m-%d")
    
    start_alice = date_from_str(arriveAlice)
    end_alice = date_from_str(leaveAlice)
    start_bob = date_from_str(arriveBob)
    end_bob = date_from_str(leaveBob)
    
    # Calculate the overlapping period
    start_overlap = max(start_alice, start_bob)
    end_overlap = min(end_alice, end_bob)
    
    if start_overlap > end_overlap:
        return 0
    
    return (end_overlap - start_overlap).days + 1

# Example usage
print(count_overlap_optimized("08-15", "08-18", "08-16", "08-19"))  # Output: 3

```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(1)$
- since the overlap calculation involves a constant number of operations regardless of the date range.
- Space Complexity: $O(1)$
-  as it only requires a fixed amount of additional space for date comparisons and calculations.

</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="D12AShvqNfE"
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

