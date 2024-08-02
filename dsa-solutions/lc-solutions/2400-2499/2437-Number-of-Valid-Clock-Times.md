---
id:  Number-of-Valid-Clock-Times
title:  Number of Valid Clock Times
sidebar_label: 2437-Number of Valid Clock Times
tags: [dsa, leetcode]
description: Problem solution of  Number of Valid Clock Times
---

## Problem Statement 

### Problem Description

You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".

In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.

Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.
 
### Examples

#### Example 1
```
Input: time = "?5:00"
Output: 2
Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.
```

### Example 2
```
Input: time = "0?:0?"
Output: 100
Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.
```

### Example 3
```
Input: time = "??:??"
Output: 1440
Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.

```

### Constraints

- `time is a valid string of length 5 in the format "hh:mm".`
- `"00" <= hh <= "23"`
- `"00" <= mm <= "59"`
- `Some of the digits might be replaced with '?' and need to be replaced with digits from 0 to 9.`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: 
- Generate all possible combinations by replacing each '?' with digits from 0 to 9.
- Check if the generated time string is valid (i.e., hours should be between 00 and 23, and minutes should be between 00 and 59).
- Count the number of valid times.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <string>
#include <vector>

using namespace std;

bool isValidTime(const string& time) {
    int hours = stoi(time.substr(0, 2));
    int minutes = stoi(time.substr(3, 2));
    return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}

int countValidTimesBruteForce(string time) {
    vector<string> times;
    times.push_back(time);
    for (int i = 0; i < 5; ++i) {
        if (time[i] == '?') {
            int n = times.size();
            for (int j = 0; j < n; ++j) {
                string current = times[j];
                for (int d = 0; d <= 9; ++d) {
                    current[i] = '0' + d;
                    times.push_back(current);
                }
            }
            times.erase(times.begin(), times.begin() + n);
        }
    }
    int validCount = 0;
    for (const auto& t : times) {
        if (isValidTime(t)) {
            ++validCount;
        }
    }
    return validCount;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.ArrayList;
import java.util.List;

public class Solution {
    private boolean isValidTime(String time) {
        int hours = Integer.parseInt(time.substring(0, 2));
        int minutes = Integer.parseInt(time.substring(3, 5));
        return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
    }

    public int countValidTimesBruteForce(String time) {
        List<String> times = new ArrayList<>();
        times.add(time);
        for (int i = 0; i < 5; ++i) {
            if (time.charAt(i) == '?') {
                int n = times.size();
                for (int j = 0; j < n; ++j) {
                    String current = times.get(j);
                    for (int d = 0; d <= 9; ++d) {
                        times.add(current.substring(0, i) + d + current.substring(i + 1));
                    }
                }
                times = times.subList(n, times.size());
            }
        }
        int validCount = 0;
        for (String t : times) {
            if (isValidTime(t)) {
                ++validCount;
            }
        }
        return validCount;
    }
}


 


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def is_valid_time(time):
    hours = int(time[:2])
    minutes = int(time[3:])
    return 0 <= hours <= 23 and 0 <= minutes <= 59

def count_valid_times_brute_force(time):
    times = [time]
    for i in range(5):
        if time[i] == '?':
            n = len(times)
            for j in range(n):
                current = times[j]
                for d in range(10):
                    times.append(current[:i] + str(d) + current[i+1:])
            times = times[n:]
    valid_count = sum(1 for t in times if is_valid_time(t))
    return valid_count


```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(10^k)$
-  We generate and check all possible combinations, where k is the number of '?' characters.
- Space Complexity: $O(10^k)$
-   We store all possible combinations generated.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: 
- Analyze each position in the time string.
- Calculate the possible values for each '?' based on the - constraints for hours and minutes.
- Multiply the number of possibilities for each '?' to get the total number of valid times.
#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <string>

using namespace std;

int countValidTimesOptimized(string time) {
    int possibleHours = 1;
    int possibleMinutes = 1;

    if (time[0] == '?') {
        possibleHours *= (time[1] == '?' || time[1] < '4') ? 3 : 2;
    } else if (time[0] == '2') {
        possibleHours *= (time[1] == '?') ? 4 : 1;
    } else {
        possibleHours *= (time[1] == '?') ? 10 : 1;
    }

    if (time[1] == '?') {
        possibleHours *= (time[0] == '2') ? 4 : 10;
    }

    if (time[3] == '?') {
        possibleMinutes *= 6;
    }
    if (time[4] == '?') {
        possibleMinutes *= 10;
    }

    return possibleHours * possibleMinutes;
}



```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
public class Solution {
    public int countValidTimesOptimized(String time) {
        int possibleHours = 1;
        int possibleMinutes = 1;

        if (time.charAt(0) == '?') {
            possibleHours *= (time.charAt(1) == '?' || time.charAt(1) < '4') ? 3 : 2;
        } else if (time.charAt(0) == '2') {
            possibleHours *= (time.charAt(1) == '?') ? 4 : 1;
        } else {
            possibleHours *= (time.charAt(1) == '?') ? 10 : 1;
        }

        if (time.charAt(1) == '?') {
            possibleHours *= (time.charAt(0) == '2') ? 4 : 10;
        }

        if (time.charAt(3) == '?') {
            possibleMinutes *= 6;
        }
        if (time.charAt(4) == '?') {
            possibleMinutes *= 10;
        }

        return possibleHours * possibleMinutes;
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def count_valid_times_optimized(time):
    possible_hours = 1
    possible_minutes = 1

    if time[0] == '?':
        possible_hours *= 3 if time[1] == '?' or time[1] < '4' else 2
    elif time[0] == '2':
        possible_hours *= 4 if time[1] == '?' else 1
    else:
        possible_hours *= 10 if time[1] == '?' else 1

    if time[1] == '?':
        possible_hours *= 4 if time[0] == '2' else 10

    if time[3] == '?':
        possible_minutes *= 6
    if time[4] == '?':
        possible_minutes *= 10

    return possible_hours * possible_minutes


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(1)$
- We perform constant-time calculations based on the positions of '?' in the string.
- Space Complexity: $O(1)$
-  We use a constant amount of extra space for variables.
</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="LDYuUXRGMzE"
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

