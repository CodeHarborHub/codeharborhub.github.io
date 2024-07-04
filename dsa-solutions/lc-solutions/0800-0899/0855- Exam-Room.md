---
id: exam-room
title: Exam Room
sidebar_label: 855-  Exam Room
tags:
  - Design
  - Heap
  - Ordered set
description: Design a class ExamRoom that simulates an exam room where students sit to maximize their distance from others, and includes methods for a student to take the optimal seat and to leave a specified seat.
sidebar_position: 0855
---

## Problem Description

There is an exam room with n seats in a single row labeled from `0` to `n - 1`.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person. If there are multiple such seats, they sit in the seat with the lowest number. If no one is in the room, then the student sits at seat number 0.

Design a class that simulates the mentioned exam room.

Implement the `ExamRoom` class:

`ExamRoom(int n)` Initializes the object of the exam room with the number of the seats n.
`int seat()` Returns the label of the seat at which the next student will set.
`void leave(int p)` Indicates that the student sitting at seat p will leave the room. It is guaranteed that there will be a student sitting at seat p.

### Example 1

- **Input:** `["ExamRoom", "seat", "seat", "seat", "seat", "leave", "seat"]
[[10], [], [], [], [], [4], []]`
- **Output:** `[null, 0, 9, 4, 2, null, 5]`
- **Explanation:** `ExamRoom examRoom = new ExamRoom(10);
examRoom.seat(); // return 0, no one is in the room, then the student sits at seat number 0.
examRoom.seat(); // return 9, the student sits at the last seat number 9.
examRoom.seat(); // return 4, the student sits at the last seat number 4.
examRoom.seat(); // return 2, the student sits at the last seat number 2.
examRoom.leave(4);
examRoom.seat(); // return 5, the student sits at the last seat number 5.`

### Constraints

- `1 <= n <= 109`
- `It is guaranteed that there is a student sitting at seat p`

## Approach

The ExamRoom class uses two TreeSets: available to store available intervals of seats and taken to store occupied seats. When a student takes a seat, the seat that maximizes the distance to the closest student is chosen, and the interval is updated. When a student leaves, the intervals are adjusted to reflect the newly available seat. The TreeSet is used to efficiently manage and retrieve the intervals and seats.
#### Java

```Java
class ExamRoom {
    
    private final int max;
    private final TreeSet<Interval> available;
    private final TreeSet<Integer> taken;
    
    public ExamRoom(int n) {
        this.max = n - 1;
        this.available = new TreeSet<>((a, b) -> {
            var distA = getMinDistance(a);
            var distB = getMinDistance(b);
            return distA == distB ? a.s - b.s : distB - distA;
        });
        this.available.add(new Interval(0, max));
        this.taken = new TreeSet<>();
    }
    
    public int seat() {
        var inter = available.pollFirst();
        var idx = getInsertPosition(inter);
        taken.add(idx);
        if ((idx - 1) - inter.s >= 0)
            available.add(new Interval(inter.s, idx - 1));
        if (inter.e - (idx + 1) >= 0)
            available.add(new Interval(idx + 1, inter.e));
        return idx;
    }
    
    public void leave(int p) {
        taken.remove(p);
        var lo = taken.lower(p);
        if (lo == null)
            lo = -1;
        var hi = taken.higher(p);
        if (hi == null)
            hi = max + 1;
        available.remove(new Interval(lo + 1, p - 1));
        available.remove(new Interval(p + 1, hi - 1));
        available.add(new Interval(lo + 1, hi - 1));
    }
                          
    private int getInsertPosition(Interval inter) {
        if (inter.s == 0)
            return 0;
        else if (inter.e == max)
            return max;
        else
            return inter.s + (inter.e - inter.s) / 2;
    }
    
    private int getMinDistance(Interval in) {
        return in.s == 0 || in.e == max ? in.e - in.s : (in.e - in.s) / 2;
    }
    
    private final class Interval {
        private final int s;
        private final int e;
        
        Interval(int s, int e) {
            this.s = s;
            this.e = e;
        }
        
        @Override
        public String toString() {
            return "[" + s + "," + e + "]";
        }
    }
}

```

- Time Complexity
  The time complexity is $O(logN)$.

- Space Complexity
  The space complexity is $O(1)$.
