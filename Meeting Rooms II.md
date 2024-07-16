# Meeting Room Allocation Problem

## Problem Statement

You are given an integer `n`, representing the number of rooms numbered from `0` to `n - 1`.

You are also given a 2D integer array `meetings` where `meetings[i] = [starti, endi]` means that a meeting will be held during the half-closed time interval `[starti, endi)`. All the values of `starti` are unique.

Meetings are allocated to rooms in the following manner:
- Each meeting will take place in the unused room with the lowest number.
- If there are no available rooms, the meeting will be delayed until a room becomes free. The delayed meeting should have the same duration as the original meeting.
- When a room becomes unused, meetings that have an earlier original start time should be given the room.

Return the number of the room that held the most meetings. If there are multiple rooms, return the room with the lowest number.

A half-closed interval `[a, b)` is the interval between `a` and `b` including `a` and not including `b`.

### Example 1

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


## Intuition

The goal is to efficiently schedule meetings in available rooms and identify the room with the most bookings. The approach involves the following steps:

1. **Initialize Data Structures**:
   - `ans`: A vector to keep track of the number of meetings booked for each room.
   - `q`: A priority queue to store ongoing meetings sorted by their end times.
   - `freeRooms`: A priority queue to store available rooms sorted by their room numbers.

2. **Sort Meetings by Start Time**:
   - Sort the `meetings` array based on the start time of each meeting.

3. **Iterate Through Meetings**:
   - For each meeting in the sorted `meetings` array:
     - Check if there are any ongoing meetings that have ended by comparing their end times with the start time of the current meeting.
     - If there are such meetings, free up the corresponding rooms and update the end times of ongoing meetings.
     - If there are no available rooms, dequeue the meeting that ends earliest from `q`, calculate the end time of the next meeting, increment the count of meetings for the corresponding room, and enqueue the next meeting.
     - If there are available rooms, assign the current meeting to an available room, increment the count of meetings for the corresponding room, and dequeue the room from `freeRooms`.

4. **Find Room with Maximum Bookings**:
   - After processing all meetings, iterate through the `ans` vector to find the room with the maximum number of bookings.
   - Return the room number with the maximum bookings.
   - Handle tiebreakers by returning the room with the lowest number in case of multiple rooms with the same maximum number of bookings.

5. **Return Result**:
   - Return the room number with the maximum bookings as the result.

## Complexity

### Time Complexity

- Sorting the `meetings` array: \(O(n log n)\), where \(n\) is the number of meetings.
- Iterating through each meeting: \(O(n)\), where \(n\) is the number of meetings.
- Inside the loop, operations like pushing/popping elements from priority queues have logarithmic time complexity: \(O(\log n)\) per iteration.
- Finding the room with maximum bookings: \(O(n)\), where \(n\) is the number of rooms.

Therefore, the overall time complexity is \(O(n log n) + O(n log n) + O(n) = O(n log n)).

### Space Complexity

- Priority queue `q` to store ongoing meetings: \(O(n)\).
- Priority queue `freeRooms` to store available rooms: \(O(n)\).
- Vector `ans` to keep track of the number of meetings booked for each room: \(O(n)\).

Therefore, the overall space complexity is \(O(n)\).

## Code - C++


      class Solution
              {
                  class comparator
                  {
                  public:
                      bool operator()(pair<int, long long> a, pair<int, long long> b) const
                      {
                          if (a.second == b.second)
                              return a.first > b.first;
                          return a.second > b.second;
                      }
                  };
              
              public:
                  int mostBooked(int n, vector<vector<int>> &meetings)
                  {
                      sort(meetings.begin(), meetings.end(),
                           [](const vector<int> &a, const vector<int> &b)
                           {
                               return a[0] < b[0];
                           });
              
                      priority_queue<pair<int, long long>, vector<pair<int, long long>>, comparator> q;
                      priority_queue<int, vector<int>, greater<int>> freeRooms;
                      vector<int> ans(n);
              
                      for (int i = 0; i < n; i++)
                          freeRooms.push(i);
              
                      for (int i = 0; i < meetings.size(); i++)
                      {
                          while (!q.empty() && q.top().second <= meetings[i][0])
                          {
                              auto p = q.top();
                              q.pop();
                              freeRooms.push(p.first);
                          }
              
                          if (freeRooms.empty())
                          {
                              auto p = q.top();
                              q.pop();
                              long long timeForNextMeet = meetings[i][1] - meetings[i][0];
                              long long endTime = p.second + timeForNextMeet;
                              ans[p.first]++;
                              q.push({p.first, endTime});
                          }
                          else
                          {
                              q.push({freeRooms.top(), meetings[i][1]});
                              ans[freeRooms.top()]++;
                              freeRooms.pop();
                          }
                      }
              
                      int maxi = 0;
                      int index = 0;
                      for (int k = 0; k < n; k++)
                      {
                          cout << ans[k] << " ";
                          if (ans[k] > maxi)
                          {
              
                              maxi = ans[k];
                              index = k;
                          }
                      }
              
                      return index;
                  }
              };
