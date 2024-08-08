---
id: finding-users-active-minutes
title: Finding Users Active Minutes
sidebar_label: 1817-Finding Users Active Minutes
tags:
  - Array
  - HashMap
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Finding Users Active Minutes problem on LeetCode."
sidebar_position: 20
---

## Problem Description

You are given the logs for users' actions on LeetCode, and an integer `k`. The logs are represented by a 2D integer array `logs` where each `logs[i] = [IDi, timei]` indicates that the user with `IDi` performed an action at the minute `timei`.

Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.

The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode. A minute can only be counted once, even if multiple actions occur during it.

You are to calculate a 1-indexed array `answer` of size `k` such that, for each `j` (1 <= j <= k), `answer[j]` is the number of users whose UAM equals `j`.

Return the array `answer` as described above.

### Examples

**Example 1:**

```
Input: logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5
Output: [0,2,0,0,0]
Explanation:
The user with ID=0 performed actions at minutes 5, 2, and 5 again. Hence, they have a UAM of 2 (minute 5 is only counted once).
The user with ID=1 performed actions at minutes 2 and 3. Hence, they have a UAM of 2.
Since both users have a UAM of 2, answer[2] is 2, and the remaining answer[j] values are 0.
```

**Example 2:**

```
Input: logs = [[1,1],[2,2],[2,3]], k = 4
Output: [1,1,0,0]
Explanation:
The user with ID=1 performed a single action at minute 1. Hence, they have a UAM of 1.
The user with ID=2 performed actions at minutes 2 and 3. Hence, they have a UAM of 2.
There is one user with a UAM of 1 and one with a UAM of 2.
Hence, answer[1] = 1, answer[2] = 1, and the remaining values are 0.
```

### Constraints

- `1 <= logs.length <= 10^4`
- `0 <= IDi <= 10^9`
- `1 <= timei <= 10^5`
- `k` is in the range [The maximum UAM for a user, 10^5].

---

## Solution for Finding Users Active Minutes Problem

To solve this problem, we need to calculate the number of unique minutes each user was active and then determine how many users have each possible number of active minutes.

### Approach

1. **Track User Activity**: Use a hash map to keep track of the unique minutes each user was active.
2. **Calculate UAM**: For each user, count the unique minutes of activity and update the UAM counts.
3. **Build Result Array**: Use the UAM counts to construct the final result array where the index represents the UAM and the value represents the number of users with that UAM.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<int> findingUsersActiveMinutes(vector<vector<int>>& logs, int k) {
        unordered_map<int, unordered_set<int>> userMinutes;
        
        for (const auto& log : logs) {
            userMinutes[log[0]].insert(log[1]);
        }
        
        vector<int> uamCount(k, 0);
        for (const auto& [user, minutes] : userMinutes) {
            int uam = minutes.size();
            if (uam <= k) {
                uamCount[uam - 1]++;
            }
        }
        
        return uamCount;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
import java.util.*;

class Solution {
    public int[] findingUsersActiveMinutes(int[][] logs, int k) {
        Map<Integer, Set<Integer>> userMinutes = new HashMap<>();
        
        for (int[] log : logs) {
            userMinutes.computeIfAbsent(log[0], x -> new HashSet<>()).add(log[1]);
        }
        
        int[] uamCount = new int[k];
        for (Set<Integer> minutes : userMinutes.values()) {
            int uam = minutes.size();
            if (uam <= k) {
                uamCount[uam - 1]++;
            }
        }
        
        return uamCount;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def findingUsersActiveMinutes(self, logs: List[List[int]], k: int) -> List[int]:
        from collections import defaultdict
        
        user_minutes = defaultdict(set)
        
        for user_id, minute in logs:
            user_minutes[user_id].add(minute)
        
        uam_count = [0] * k
        for minutes in user_minutes.values():
            uam = len(minutes)
            if uam <= k:
                uam_count[uam - 1] += 1
        
        return uam_count
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n + m)$, where `n` is the number of logs and `m` is the number of users.
- **Space Complexity**: $O(n + u)$, where `u` is the number of unique users.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```