---
id: meeting-room-allocation-problem
title: Meeting Room Allocation Problem
sidebar_label: 2402-Meeting Room
tags: [dsa, leetcode]
description: Problem solution of Meeting Room Allocation Problem
---

## Problem Statement 

### Problem Description

You are given an integer `n`, representing the number of rooms numbered from `0` to `n - 1`.

You are also given a 2D integer array `meetings` where `meetings[i] = [starti, endi]` means that a meeting will be held during the half-closed time interval `[starti, endi)`. All the values of `starti` are unique.

Meetings are allocated to rooms in the following manner:
- Each meeting will occur in the unused room with the lowest number.
- If there are no available rooms, the meeting will be delayed until a room becomes free. The delayed meeting should have the same duration as the original meeting.
- When a room becomes unused, meetings with an earlier original start time should be given the room.

Return the number of the room that held the most meetings. If there are multiple rooms, return the room with the lowest number.

A half-closed interval `[a, b)` is the interval between `a` and `b` including `a` and not `b`.

### Examples

#### Example 1
```
Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
Output: 0
Explanation:
- At time 0, both rooms are not being used. The first meeting starts in room 0.
- At time 1, only room 1 is not being used. The second meeting starts in room 1.
- At time 2, both rooms are being used. The third meeting is delayed.
- At time 3, both rooms are being used. The fourth meeting is delayed.
- At time 5, the meeting in room 1 finishes. The third meeting starts in room 1 for the time period [5,10).
- At time 10, the meetings in both rooms finish. The fourth meeting starts in room 0 for the time period [10,11).
Both rooms 0 and 1 held 2 meetings, so we return 0.
```

### Constraints

- `1 <= n <= 100`
- `1 <= meetings.length <= 10^4`
- `meetings[i].length == 2`
- `0 <= starti < endi <= 5 * 10^5`
- All the values of `starti` are unique.

## Solution of Given Problem

### Intuition and Approach

The goal is to efficiently schedule meetings in available rooms and identify the room with the most bookings. The approach involves the following steps:

1. **Initialize Data Structures**:
   - `ans`: A vector to keep track of the number of meetings booked for each room.
   - `q`: A priority queue to store ongoing meetings sorted by their end times.
   - `freeRooms`: A priority queue to store available rooms sorted by their room numbers.

2. **Sort Meetings by Start Time**:
   - Sort the `meetings` array based on the start time of each meeting.

3. **Iterate Through Meetings**:
   - For each meeting in the sorted `meetings` array:
     - Check if any ongoing meetings have ended by comparing their end times with the start time of the current meeting.
     - If there are such meetings, free up the corresponding rooms and update the end times of ongoing meetings.
     - If there are no available rooms, dequeue the meeting that ends earliest from `q`, calculate the end time of the next meeting, increment the count of meetings for the corresponding room, and enqueue the next meeting.
     - If there are available rooms, assign the current meeting to an available room, increment the count of meetings for the corresponding room, and dequeue the room from `freeRooms`.

4. **Find Room with Maximum Bookings**:
   - After processing all meetings, iterate through the `ans` vector to find the room with the maximum number of bookings.
   - Return the room number with the maximum bookings.
   - Handle tiebreakers by returning the room with the lowest number in case of multiple rooms with the same maximum number of bookings.

5. **Return Result**:
   - Return the room number with the maximum bookings as the result.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="sreevidya-16"/>
   ```javascript
    class MeetingRoomAllocator {
      mostBooked(n, meetings) {
        meetings.sort((a, b) => a[0] - b[0]);
        
        const pq = new MinPriorityQueue({ priority: x => x[1] });
        const freeRooms = new MinPriorityQueue({ priority: x => x });
        const ans = Array(n).fill(0);
        
        for (let i = 0; i < n; i++) freeRooms.enqueue(i);
        
        for (const [start, end] of meetings) {
          while (!pq.isEmpty() && pq.front().element[1] <= start) {
            freeRooms.enqueue(pq.dequeue().element[0]);
          }
          
          if (freeRooms.isEmpty()) {
            const [room, endTime] = pq.dequeue().element;
            pq.enqueue([room, endTime + (end - start)]);
            ans[room]++;
          } else {
            const room = freeRooms.dequeue().element;
            pq.enqueue([room, end]);
            ans[room]++;
          }
        }
        
        let maxMeetings = 0;
        let roomWithMaxMeetings = 0;
        
        for (let i = 0; i < n; i++) {
          if (ans[i] > maxMeetings) {
            maxMeetings = ans[i];
            roomWithMaxMeetings = i;
          }
        }
        
        return roomWithMaxMeetings;
      }
    }
    ```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="sreevidya-16"/> 
   ```typescript
    class MeetingRoomAllocator {
      mostBooked(n: number, meetings: number[][]): number {
        meetings.sort((a, b) => a[0] - b[0]);
        
        const pq = new MinPriorityQueue({ priority: (x: [number, number]) => x[1] });
        const freeRooms = new MinPriorityQueue({ priority: (x: number) => x });
        const ans = Array(n).fill(0);
        
        for (let i = 0; i < n; i++) freeRooms.enqueue(i);
        
        for (const [start, end] of meetings) {
          while (!pq.isEmpty() && pq.front().element[1] <= start) {
            freeRooms.enqueue(pq.dequeue().element[0]);
          }
          
          if (freeRooms.isEmpty()) {
            const [room, endTime] = pq.dequeue().element;
            pq.enqueue([room, endTime + (end - start)]);
            ans[room]++;
          } else {
            const room = freeRooms.dequeue().element;
            pq.enqueue([room, end]);
            ans[room]++;
          }
        }
        
        let maxMeetings = 0;
        let roomWithMaxMeetings = 0;
        
        for (let i = 0; i < n; i++) {
          if (ans[i] > maxMeetings) {
            maxMeetings = ans[i];
            roomWithMaxMeetings = i;
          }
        }
        
        return roomWithMaxMeetings;
      }
    }
    ```
  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="sreevidya-16"/>
   ```python
    import heapq

    class MeetingRoomAllocator:
        def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
            meetings.sort()
            free_rooms = list(range(n))
            heapq.heapify(free_rooms)
            pq = []
            ans = [0] * n
            
            for start, end in meetings:
                while pq and pq[0][0] <= start:
                    end_time, room = heapq.heappop(pq)
                    heapq.heappush(free_rooms, room)
                
                if free_rooms:
                    room = heapq.heappop(free_rooms)
                    heapq.heappush(pq, (end, room))
                else:
                    end_time, room = heapq.heappop(pq)
                    heapq.heappush(pq, (end_time + (end - start), room))
                
                ans[room] += 1
            
            max_meetings = max(ans)
            return ans.index(max_meetings)
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="sreevidya-16"/>
   ```java
    import java.util.*;

    class MeetingRoomAllocator {
        public int mostBooked(int n, int[][] meetings) {
            Arrays.sort(meetings, Comparator.comparingInt(a -> a[0]));
            PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
            PriorityQueue<Integer> freeRooms = new PriorityQueue<>();
            int[] ans = new int[n];
            
            for (int i = 0; i < n; i++) freeRooms.add(i);
            
            for (int[] meeting : meetings) {
                int start = meeting[0];
                int end = meeting[1

];
                
                while (!pq.isEmpty() && pq.peek()[1] <= start) {
                    freeRooms.add(pq.poll()[0]);
                }
                
                if (freeRooms.isEmpty()) {
                    int[] nextMeeting = pq.poll();
                    pq.add(new int[]{nextMeeting[0], nextMeeting[1] + (end - start)});
                    ans[nextMeeting[0]]++;
                } else {
                    int room = freeRooms.poll();
                    pq.add(new int[]{room, end});
                    ans[room]++;
                }
            }
            
            int maxMeetings = 0;
            int roomWithMaxMeetings = 0;
            
            for (int i = 0; i < n; i++) {
                if (ans[i] > maxMeetings) {
                    maxMeetings = ans[i];
                    roomWithMaxMeetings = i;
                }
            }
            
            return roomWithMaxMeetings;
        }
    }
    ```
  </TabItem>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sreevidya-16"/>
   ```cpp
    #include <vector>
    #include <queue>
    #include <algorithm>
    using namespace std;

    class Solution {
        class comparator {
        public:
            bool operator()(pair<int, long long> a, pair<int, long long> b) const {
                if (a.second == b.second)
                    return a.first > b.first;
                return a.second > b.second;
            }
        };

    public:
        int mostBooked(int n, vector<vector<int>> &meetings) {
            sort(meetings.begin(), meetings.end(),
                 [](const vector<int> &a, const vector<int> &b) {
                     return a[0] < b[0];
                 });

            priority_queue<pair<int, long long>, vector<pair<int, long long>>, comparator> q;
            priority_queue<int, vector<int>, greater<int>> freeRooms;
            vector<int> ans(n);

            for (int i = 0; i < n; i++)
                freeRooms.push(i);

            for (int i = 0; i < meetings.size(); i++) {
                while (!q.empty() && q.top().second <= meetings[i][0]) {
                    auto p = q.top();
                    q.pop();
                    freeRooms.push(p.first);
                }

                if (freeRooms.empty()) {
                    auto p = q.top();
                    q.pop();
                    long long timeForNextMeet = meetings[i][1] - meetings[i][0];
                    long long endTime = p.second + timeForNextMeet;
                    ans[p.first]++;
                    q.push({p.first, endTime});
                } else {
                    q.push({freeRooms.top(), meetings[i][1]});
                    ans[freeRooms.top()]++;
                    freeRooms.pop();
                }
            }

            int maxi = 0;
            int index = 0;
            for (int k = 0; k < n; k++) {
                if (ans[k] > maxi) {
                    maxi = ans[k];
                    index = k;
                }
            }

            return index;
        }
    };
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

#### Time Complexity

- Sorting the `meetings` array: $O(n \log n)$, where $n$ is the number of meetings.
- Iterating through each meeting: $O(n)$, where $n$ is the number of meetings.
- Inside the loop, operations like pushing/popping elements from priority queues have logarithmic time complexity: \(O(\log n)\) per iteration.
- Finding the room with maximum bookings: $O(n)$, where $n$ is the number of rooms.

Therefore, the overall time complexity is $O(n \log n) + O(n \log n) + O(n) = O(n \log n)$.

#### Space Complexity

- Priority queue `q` to store ongoing meetings: $O(n)$.
- Priority queue `freeRooms` to store available rooms: $O(n)$.
- Vector `ans` to keep track of the number of meetings booked for each room: $(O(n)$.

Therefore, the overall space complexity is $O(n)$.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="aZ_vuZxlB4I"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sreevidya-16'].map(username => (
 <Author key={username} username={username} />
))}
</div>
