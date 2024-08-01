---
id: get-watched-videos-by-your-friends
title: Get Watched Videos by Your Friends
sidebar_label: Get Watched Videos by Your Friends
tags: [Graph, BFS, C++, Python, Java]
description: Find the list of videos watched by friends up to a certain level, ordered by their frequencies.
---

## Problem Statement

### Problem Description

There are `n` people, each person has a unique id between `0` and `n-1`. Given the arrays `watchedVideos` and `friends`, where `watchedVideos[i]` and `friends[i]` contain the list of watched videos and the list of friends respectively for the person with id `i`.

Level 1 of videos are all watched videos by your friends, level 2 of videos are all watched videos by the friends of your friends and so on. In general, the level `k` of videos are all watched videos by people with the shortest path exactly equal to `k` with you. Given your `id` and the `level` of videos, return the list of videos ordered by their frequencies (increasing). For videos with the same frequency, order them alphabetically from least to greatest.

### Example

**Example 1:**

```
Input: watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1
Output: ["B","C"]
```
**Explanation:**
You have id = 0 (green color in the figure) and your friends are (yellow color in the figure):
Person with id = 1 -> watchedVideos = ["C"]
Person with id = 2 -> watchedVideos = ["B","C"]
The frequencies of watchedVideos by your friends are:
B -> 1
C -> 2


### Constraints

- `n == watchedVideos.length == friends.length`
- `2 <= n <= 100`
- `1 <= watchedVideos[i].length <= 100`
- `1 <= watchedVideos[i][j].length <= 8`
- `0 <= friends[i].length < n`
- `0 <= friends[i][j] < n`
- `0 <= id < n`
- `1 <= level < n`
- If `friends[i]` contains `j`, then `friends[j]` contains `i`

## Solution

### Intuition

To solve this problem, we use a Breadth-First Search (BFS) approach to explore all friends up to the specified level. We start from the given `id` and use a queue to perform BFS. At each level, we gather the videos watched by the friends and keep track of the frequencies. We then sort the videos by frequency and alphabetically for those with the same frequency.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: The time complexity is $O(n \cdot m \cdot \log m)$, where `n` is the number of people and `m` is the maximum number of videos watched by any person. This is due to the BFS traversal and the sorting of the video frequencies.
- **Space Complexity**: The space complexity is $O(n \cdot m)$ due to the space needed for the BFS queue and the frequency map.

### Code

#### Python
```python
from collections import deque, Counter

class Solution:
    def watchedVideosByFriends(self, watchedVideos: List[List[str]], friends: List[List[int]], id: int, level: int) -> List[str]:
        video_frequency = Counter()
        visited = [False] * len(friends)
        q = deque([id])
        visited[id] = True
        current_level = 0

        while q:
            size = len(q)
            if current_level == level:
                break
            for _ in range(size):
                person = q.popleft()
                for friend in friends[person]:
                    if not visited[friend]:
                        visited[friend] = True
                        q.append(friend)
            current_level += 1

        while q:
            person = q.popleft()
            video_frequency.update(watchedVideos[person])

        return sorted(video_frequency.keys(), key=lambda x: (video_frequency[x], x))
```

#### C++

```cpp
#include <vector>
#include <string>
#include <unordered_map>
#include <queue>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<string> watchedVideosByFriends(vector<vector<string>>& watchedVideos, vector<vector<int>>& friends, int id, int level) {
        vector<string> result;
        unordered_map<string, int> videoFrequency;
        vector<bool> visited(friends.size(), false);
        queue<int> q;
        q.push(id);
        visited[id] = true;
        int currentLevel = 0;

        while (!q.empty()) {
            int size = q.size();
            if (currentLevel == level) break;

            while (size--) {
                int person = q.front();
                q.pop();
                for (int friendId : friends[person]) {
                    if (!visited[friendId]) {
                        visited[friendId] = true;
                        q.push(friendId);
                    }
                }
            }
            currentLevel++;
        }

        while (!q.empty()) {
            int person = q.front();
            q.pop();
            for (const string& video : watchedVideos[person]) {
                videoFrequency[video]++;
            }
        }

        vector<pair<string, int>> videoList(videoFrequency.begin(), videoFrequency.end());
        sort(videoList.begin(), videoList.end(), [](const pair<string, int>& a, const pair<string, int>& b) {
            if (a.second == b.second) return a.first &lt; b.first;
            return a.second &lt; b.second;
        });

        for (const auto& [video, freq] : videoList) {
            result.push_back(video);
        }

        return result;
    }
};
```
#### Java
```java
import java.util.*;

class Solution {
    public List<String> watchedVideosByFriends(List<List<String>> watchedVideos, List<List<Integer>> friends, int id, int level) {
        Map<String, Integer> videoFrequency = new HashMap<>();
        boolean[] visited = new boolean[friends.size()];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(id);
        visited[id] = true;
        int currentLevel = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();
            if (currentLevel == level) break;

            for (int i = 0; i &lt; size; i++) {
                int person = queue.poll();
                for (int friend : friends.get(person)) {
                    if (!visited[friend]) {
                        visited[friend] = true;
                        queue.add(friend);
                    }
                }
            }
            currentLevel++;
        }

        while (!queue.isEmpty()) {
            int person = queue.poll();
            for (String video : watchedVideos.get(person)) {
                videoFrequency.put(video, videoFrequency.getOrDefault(video, 0) + 1);
            }
        }

        List<Map.Entry<String, Integer>> videoList = new ArrayList<>(videoFrequency.entrySet());
        videoList.sort((a, b) -> {
            if (a.getValue().equals(b.getValue())) return a.getKey().compareTo(b.getKey());
            return Integer.compare(a.getValue(), b.getValue());
        });

        List<String> result = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : videoList) {
            result.add(entry.getKey());
        }

        return result;
    }
}
```
