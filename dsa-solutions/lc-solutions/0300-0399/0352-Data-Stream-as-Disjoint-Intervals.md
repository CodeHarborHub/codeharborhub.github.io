---
id: data-stream-as-disjoint-intervals
title: Data Stream as Disjoint Intervals
sidebar_label: 0352 Data Stream as Disjoint Intervals
tags:
  - Binary Search
  - Design
  - Ordered Set
  - Java
  - Python
  - C++
description: "This is a solution to the Data Stream as Disjoint Intervals problem on LeetCode."
---

## Problem Description

Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.

Implement the SummaryRanges class:

- `SummaryRanges()` Initializes the object with an empty stream.
- void `addNum(int value)` Adds the integer value to the stream.
- `int[][] getIntervals()` Returns a summary of the integers in the stream currently as a list of disjoint intervals `[starti, endi]`. The answer should be sorted by starting.

### Examples

**Example 1:**

```
Input
["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
[[], [1], [], [3], [], [7], [], [2], [], [6], []]
Output
[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]

Explanation
SummaryRanges summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);      // arr = [1]
summaryRanges.getIntervals(); // return [[1, 1]]
summaryRanges.addNum(3);      // arr = [1, 3]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
summaryRanges.addNum(7);      // arr = [1, 3, 7]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]

```


### Constraints

- `0 <= value <= 10^4`
- `At most 3 * 10^4 calls will be made to addNum and getIntervals.`
- `At most 10^2 calls will be made to getIntervals`

---

## Solution for Data Stream as Disjoint Intervals

### Intuition

The intuition behind this implementation is to use a data structure that allows for easy ordering and searching, as well as efficient insertion and deletion of intervals. In this case, a std::map is used to store the disjoint intervals. The key is the start value of the interval and the value is the end value.
By using a data structure like map which implements a balanced binary search tree, we can easily find the correct position of new value and merge it with the existing intervals if necessary, which will help us to maintain the disjoint property of the intervals.

### Approach 
The approach used in this implementation is to use a data structure, in this case a std::map, to store the disjoint intervals. Each interval is stored as a key-value pair in the map, where the key is the start value of the interval and the value is the end value.

When a new value is added to the stream, the `lower_bound()` function is used to find the correct position of the new value in the map, and then the implementation checks if the new value can be added to an existing interval or if it needs to create a new one. It also checks if the new value can merge with the interval before or after it, and merges them if necessary.

The `getIntervals()` function iterates through the map and stores the intervals in a vector of vectors, which is returned.

By using the map's properties of ordering and searching, the implementation can easily find the correct position of the new value in the stream and merge it with the existing intervals if necessary.

This approach is efficient in terms of space and time complexity because it allows for easy ordering and searching, as well as efficient insertion and deletion of intervals, which is important for maintaining the disjoint property of the intervals.

#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@mahek0620"/>
   ```java
    public class SummaryRanges {
    TreeMap<Integer, Interval> tree;

    public SummaryRanges() {
        tree = new TreeMap<>();
    }

    public void addNum(int val) {
        if(tree.containsKey(val)) return;
        Integer l = tree.lowerKey(val);
        Integer h = tree.higherKey(val);
        if(l != null && h != null && tree.get(l).end + 1 == val && h == val + 1) {
            tree.get(l).end = tree.get(h).end;
            tree.remove(h);
        } else if(l != null && tree.get(l).end + 1 >= val) {
            tree.get(l).end = Math.max(tree.get(l).end, val);
        } else if(h != null && h == val + 1) {
            tree.put(val, new Interval(val, tree.get(h).end));
            tree.remove(h);
        } else {
            tree.put(val, new Interval(val, val));
        }
    }

    public List<Interval> getIntervals() {
        return new ArrayList<>(tree.values());
    }
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python
    class DSU:
    def __init__(self):
        self.p = {}
        self.intervals = {}

    def exists(self, x): return x in self.p

    def make_set(self, x):
        self.p[x] = x
        self.intervals[x] = [x,x]
        
    def find(self, x):
        if not self.exists(x): return None
        
        if self.p[x] != x:
            self.p[x] = self.find(self.p[x])

        return self.p[x]

    def union(self, x, y):
        xr = self.find(x)
        yr = self.find(y)
        
        if xr is None or yr is None: return
        
        self.p[xr] = yr
        
        ## interval adjusting logic
        x_interval = self.intervals[xr]
        del self.intervals[xr]
        
        self.intervals[yr] = [min(self.intervals[yr][0], x_interval[0]), max(self.intervals[yr][1], x_interval[1])]
        
class SummaryRanges:    
    def __init__(self):
        self.dsu = DSU()

    def addNum(self, val: int) -> None:
        if self.dsu.exists(val): return
            
        self.dsu.make_set(val)
        
        self.dsu.union(val, val-1)
        self.dsu.union(val, val+1)

    def getIntervals(self) -> List[List[int]]:
        return sorted(self.dsu.intervals.values())

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
    
     class SummaryRanges {
public:
    SummaryRanges() {
        
    }
    
    void addNum(int value) {
        auto it = _map.lower_bound(value);
        bool merged = false;
        if(it != _map.begin()) {
            auto prev = it;
            --prev;
            if(prev->second + 1 >= value) {
                merged = true;
                prev->second = max(prev->second, value);
            }
        }

        if(it != _map.end()) {
            if(it->first - 1 <= value) {
                if(merged) {
                    auto prev = it;
                    --prev;
                    if(prev->second >= it->first - 1) {
                        prev->second = max(prev->second, it->second);
                        _map.erase(it);
                    }
                } else {
                    merged = true;
                    if(it->first != value) {
                        pair<int, int> p = *it;
                        p.first = min(p.first, value);
                        it = _map.insert(it, p);
                        ++it;
                        if(it != _map.end())
                            _map.erase(it);
                    }
                }
            }
        }
        if(!merged)
            _map.insert(it, {value, value});
    }
    
    vector<vector<int>> getIntervals() {
        vector<vector<int>> intervals;
        for(auto const & p : _map)
            intervals.push_back({p.first, p.second});
        return intervals;
    }

    map<int, int> _map;
};

    ```

  </TabItem>
</Tabs>


## References

- **LeetCode Problem:** [Palindrome Pairs Problem](https://leetcode.com/problems/data-stream-as-disjoint-intervals/description/)
---
