---
id: design-hashmap
title: Design HashMap
sidebar_label: 706. Design HashMap
tags:
 - Hash Table
 - Design
 - HashMap
description: "This is a solution to the Design HashMap problem on LeetCode."
---

## Problem Description
Design a HashMap without using any built-in hash table libraries.

Implement the `MyHashMap` class:

- `MyHashMap()` initializes the object with an empty map.
- `void put(int key, int value)` inserts a `(key, value)` pair into the HashMap. If the `key` already exists in the map, update the corresponding `value`.
- `int get(int key)` returns the `value` to which the specified `key` is mapped, or `-1` if this map contains no mapping for the `key`.
- `void remove(int key)` removes the `key` and its corresponding `value` if the map contains the mapping for the `key`.

### Examples

**Example 1:** 

```
Input: 
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output: 
[null, null, null, 1, -1, null, 1, null, -1]

Explanation:
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
```

### Constraints

- `0 <= key, value <= 10^6`
- At most `10^4` calls will be made to `put`, `get`, and `remove`.

## Solution for Design HashMap

### Approach

#### Array-Based Implementation
- **Array Initialization**: Use an array to store the values with a size large enough to accommodate the given constraints.
- **Direct Indexing**: Use the key as an index to store the value in the array.
- **Handling Removal**: Use a special value (like `-1`) to denote the removal of a key.

**Implementation:**

```python
class MyHashMap:

    def __init__(self):
        self.size = 1000001
        self.hashmap = [-1] * self.size

    def put(self, key: int, value: int) -> None:
        self.hashmap[key] = value

    def get(self, key: int) -> int:
        return self.hashmap[key]

    def remove(self, key: int) -> None:
        self.hashmap[key] = -1

# Example usage
myHashMap = MyHashMap()
myHashMap.put(1, 1)
myHashMap.put(2, 2)
print(myHashMap.get(1))    # returns 1
print(myHashMap.get(3))    # returns -1 (not found)
myHashMap.put(2, 1)        # update the existing value
print(myHashMap.get(2))    # returns 1
myHashMap.remove(2)        # remove the mapping for 2
print(myHashMap.get(2))    # returns -1 (not found)
```

**Complexity:**
- Time Complexity: `O(1)` for `put`, `get`, and `remove` operations.
- Space Complexity: `O(n)`, where `n` is the range of keys (1,000,001).

**Corner Cases:**
- Handling updates: Ensure that the value is updated if the key already exists.
- Handling removals: Ensure that the key is marked as removed.

## Code in Different Languages

<Tabs>

<TabItem value="JavaScript" label="JavaScript">
<SolutionAuthor name="@vansh-codes" />

```javascript
var MyHashMap = function() {
    this.size = 1000001;
    this.map = new Array(this.size).fill(-1);
};

MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

MyHashMap.prototype.get = function(key) {
    return this.map[key];
};

MyHashMap.prototype.remove = function(key) {
    this.map[key] = -1;
};
```

</TabItem>

<TabItem value="TypeScript" label="TypeScript">
<SolutionAuthor name="@vansh-codes" /> 

```typescript
class MyHashMap {
    private size: number;
    private map: number[];

    constructor() {
        this.size = 1000001;
        this.map = new Array(this.size).fill(-1);
    }

    put(key: number, value: number): void {
        this.map[key] = value;
    }

    get(key: number): number {
        return this.map[key];
    }

    remove(key: number): void {
        this.map[key] = -1;
    }
}
```

</TabItem>

<TabItem value="Python" label="Python">
<SolutionAuthor name="@vansh-codes" />

```python
class MyHashMap:

    def __init__(self):
        self.size = 1000001
        self.hashmap = [-1] * self.size

    def put(self, key: int, value: int) -> None:
        self.hashmap[key] = value

    def get(self, key: int) -> int:
        return self.hashmap[key]

    def remove(self, key: int) -> None:
        self.hashmap[key] = -1
```

</TabItem>

<TabItem value="Java" label="Java">
<SolutionAuthor name="@vansh-codes" />

```java
class MyHashMap {
    private int size;
    private int[] map;

    public MyHashMap() {
        size = 1000001;
        map = new int[size];
        Arrays.fill(map, -1);
    }

    public void put(int key, int value) {
        map[key] = value;
    }

    public int get(int key) {
        return map[key];
    }

    public void remove(int key) {
        map[key] = -1;
    }
}
```

</TabItem>

<TabItem value="C++" label="C++">
<SolutionAuthor name="@vansh-codes" />

```cpp
class MyHashMap {
public:
    int size;
    vector<int> map;

    MyHashMap() {
        size = 1000001;
        map.resize(size, -1);
    }

    void put(int key, int value) {
        map[key] = value;
    }

    int get(int key) {
        return map[key];
    }

    void remove(int key) {
        map[key] = -1;
    }
};
```

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Design HashMap](https://leetcode.com/problems/design-hashmap/description)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/design-hashmap/solutions)
