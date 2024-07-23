---
id: lfu-cache
title: LFU Cache
sidebar_label: 0460 - LFU Cache
tags:
- Hash Table
- Linked List
- Ordered Set
description: "This is a solution to the LFU Cache problem on LeetCode."
---

## Problem Description
Design and implement a data structure for a Least Frequently Used (LFU) cache.

Implement the `LFUCache` class:

- `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.
- `int get(int key)` Gets the value of the `key` if the key exists in the cache. Otherwise, returns -1.
- `void put(int key, int value)` Update the value of the key if present, or inserts the `key` if not already present. When the cache reaches its `capacity`, it should invalidate and remove the **least frequently used** key before inserting a new item. For this problem, when there is a **tie** (i.e., two or more keys with the same frequency), **the least recently used** `key` would be invalidated.

To determine the least frequently used key, a **use counter** is maintained for each key in the cache. The key with the smallest **use counter** is the least frequently used key.

When a key is first inserted into the cache, its **use counter** is set to `1` (due to the `put` operation). The **use counter** for a key in the cache is incremented either a `get` or `put` operation is called on it.

The functions `get` and `put` must each run in O(1) average time complexity.

 
### Examples

**Example 1:**

```
Input-["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output-[null, null, null, 1, null, -1, 3, null, -1, 3, 4]
Explanation: 
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3
```


### Constraints
- `1 <= capacity <= 104`
- `0 <= key <= 105`
- `0 <= value <= 109`
- At most `2 * 105` calls will be made to `get` and `put`.

## Solution for LFU Cache
  
### Approach
#### HashMap and LinkedHashSet:
##### Intuition
We need to maintain all the keys, values and frequencies. Without invalidation (removing from the data structure when it reaches capacity), they can be maintained by a HashMap `<Integer, Pair<Integer, Integer>>`, keyed by the original `key` and valued by the `frequency`-`value` pair.

With the invalidation, we need to maintain the current minimum frequency and delete particular keys. Hence, we can group the keys with the same frequency together and maintain another HashMap`<Integer, Set>`, keyed by the frequency and valued by the set of `keys` that have the same frequency. This way, if we know the minimum frequency, we can access the potential keys to be deleted.

Also note that in the case of a tie, we're required to find the least recently used key and invalidate it, hence we need to keep the frequencies ordered in the Set. Instead of using a TreeSet which adds an extra O(log(N)) time complexity, we can maintain the keys using a LinkedList so that it supports finding both an arbitrary key and the least recently used key in constant time. Fortunately, LinkedHashSet can do the job. Once a key is inserted/updated, we put it to the end of the LinkedHashSet so that we can invalidate the first key in the LinkedHashSet corresponding to the minimum frequency.

The original operations can be transformed into operations on the 2 HashMaps, keeping them in sync and maintaining the minimum frequency.

Since C++ lacks LinkedHashSet, we have to use a workaround like maintaining a list of key and value pairs instead of the LinkedHashSet and keeping the iterator with the frequency in another unordered_map to keep this connection. The idea is similar but a little bit complicated. Another workaround would be to implement your own LRU cache with a doubly linked list.

##### Algorithm
To make things simpler, assume we have 4 member variables:

1. HashMap`<Integer, Pair<Integer, Integer>>` cache, keyed by the original key and valued by the frequency-value pair.
2. HashMap`<Integer, LinkedListHashSet<Integer>>` frequencies, keyed by frequency and valued by the set of keys that have the same frequency.
3. `int minf`, which is the minimum frequency at any given time.
4. `int capacity`, which is the `capacity` given in the input.

It's also convenient to have a private utility function insert to insert a key-value pair with a given frequency.

##### void insert(int key, int frequency, int value)

1. Insert frequency-value pair into cache with the given key.
2. Get the LinkedHashSet corresponding to the given frequency (default to empty Set) and insert the given key.

##### int get(int key)

1. If the given key is not in the cache, return -1, otherwise go to step 2.
2. Get the frequency and value from the cache.
3. Get the LinkedHashSet associated with frequency from frequencies and remove the given key from it, since the usage of the current key is increased by this function call.
4. If minf == frequency and the above LinkedHashSet is empty, that means there are no more elements used minf times, so increase minf by 1. To save some space, we can also delete the entry frequency from the frequencies hash map.
5. Call insert(key, frequency + 1, value), since the current key's usage has increased from this function call.
6. Return value

##### void put(int key, int value)
1. If capacity < = 0, exit.
2. If the given key exists in cache, update the value in the original frequency-value (don't call insert here), and then increment the frequency by using get(key). Exit the function.
3. If cache.size() == capacity, get the first (least recently used) value in the LinkedHashSet corresponding to minf in frequencies, and remove it from cache and the LinkedHashSet.
4. If we didn't exit the function in step 2, it means that this element is a new one, so the minimum frequency cannot possibly be greater than one. Set minf to 1.
5. Call insert(key, 1, value)


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class LFUCache {
    // key: frequency, value: list of original key-value pairs that have the same frequency.
    unordered_map<int, list<pair<int, int>>> frequencies;
    // key: original key, value: pair of frequency and the iterator corresponding key int the
    // frequencies map's list.
    unordered_map<int, pair<int, list<pair<int, int>>::iterator>> cache;
    int capacity;
    int minf;

    void insert(int key, int frequency, int value) {
        frequencies[frequency].push_back({key, value});
        cache[key] = {frequency, --frequencies[frequency].end()};
    }

public:
    LFUCache(int capacity) : capacity(capacity), minf(0) {}

    int get(int key) {
        const auto it = cache.find(key);
        if (it == cache.end()) {
            return -1;
        }
        const int f = it->second.first;
        const auto iter = it->second.second;
        const pair<int, int> kv = *iter;
        frequencies[f].erase(iter);
        if (frequencies[f].empty()){
            frequencies.erase(f);

            if(minf == f) {
                ++minf;
            }
        }
        
        insert(key, f + 1, kv.second);
        return kv.second;
    }

    void put(int key, int value) {
        if (capacity <= 0) {
            return;
        }
        const auto it = cache.find(key);
        if (it != cache.end()) {
            it->second.second->second = value;
            get(key);
            return;
        }
        if (capacity == cache.size()) {
            cache.erase(frequencies[minf].front().first);
            frequencies[minf].pop_front();

            if(frequencies[minf].empty()) {
                frequencies.erase(minf);
            }
        }

        minf = 1;
        insert(key, 1, value);
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class LFUCache {
    // key: original key, value: frequency and original value.
    private Map<Integer, Pair<Integer, Integer>> cache;
    // key: frequency, value: All keys that have the same frequency.
    private Map<Integer, LinkedHashSet<Integer>> frequencies;
    private int minf;
    private int capacity;
    
    private void insert(int key, int frequency, int value) {
        cache.put(key, new Pair<>(frequency, value));
        frequencies.putIfAbsent(frequency, new LinkedHashSet<>());
        frequencies.get(frequency).add(key);
    }

    public LFUCache(int capacity) {
        cache = new HashMap<>();
        frequencies = new HashMap<>();
        minf = 0;
        this.capacity = capacity;
    }
    
    public int get(int key) {
        Pair<Integer, Integer> frequencyAndValue = cache.get(key);
        if (frequencyAndValue == null) {
            return -1;
        }
        final int frequency = frequencyAndValue.getKey();
        final Set<Integer> keys = frequencies.get(frequency);
        keys.remove(key);
        if (keys.isEmpty()) {
            frequencies.remove(frequency);
            
            if (minf == frequency) {
                ++minf;
            }
        }
        final int value = frequencyAndValue.getValue();
        insert(key, frequency + 1, value);   
        return value;
    }
    
    public void put(int key, int value) {
        if (capacity <= 0) {
            return;
        }
        Pair<Integer, Integer> frequencyAndValue = cache.get(key);
        if (frequencyAndValue != null) {
            cache.put(key, new Pair<>(frequencyAndValue.getKey(), value));
            get(key);
            return;
        }
        if (capacity == cache.size()) {
            final Set<Integer> keys = frequencies.get(minf);
            final int keyToDelete = keys.iterator().next();
            cache.remove(keyToDelete);
            keys.remove(keyToDelete);
            if (keys.isEmpty()) {
                frequencies.remove(minf);
            }
        }
        minf = 1;
        insert(key, 1, value);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
import collections

class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.freq = 1
        self.prev = self.next = None

class DLinkedList:

    def __init__(self):
        self._sentinel = Node(None, None) # dummy node
        self._sentinel.next = self._sentinel.prev = self._sentinel
        self._size = 0
    
    def __len__(self):
        return self._size
    
    def append(self, node):
        node.next = self._sentinel.next
        node.prev = self._sentinel
        node.next.prev = node
        self._sentinel.next = node
        self._size += 1
    
    def pop(self, node=None):
        if self._size == 0:
            return
        
        if not node:
            node = self._sentinel.prev

        node.prev.next = node.next
        node.next.prev = node.prev
        self._size -= 1
        
        return node
        
class LFUCache:
    def __init__(self, capacity):
        self._size = 0
        self._capacity = capacity
        
        self._node = dict() # key: Node
        self._freq = collections.defaultdict(DLinkedList)
        self._minfreq = 0
        
        
    def _update(self, node):

        freq = node.freq
        
        self._freq[freq].pop(node)
        if self._minfreq == freq and not self._freq[freq]:
            self._minfreq += 1
        
        node.freq += 1
        freq = node.freq
        self._freq[freq].append(node)
    
    def get(self, key):
        if key not in self._node:
            return -1
        
        node = self._node[key]
        self._update(node)
        return node.val

    def put(self, key, value):

        if self._capacity == 0:
            return
        
        if key in self._node:
            node = self._node[key]
            self._update(node)
            node.val = value
        else:
            if self._size == self._capacity:
                node = self._freq[self._minfreq].pop()
                del self._node[node.key]
                self._size -= 1
                
            node = Node(key, value)
            self._node[key] = node
            self._freq[1].append(node)
            self._minfreq = 1
            self._size += 1
```
</TabItem>
</Tabs>

## Complexity Analysis
 ### Time Complexity: $O(1)$
 > **Reason:** We only have basic HashMap/(Linked)HashSet operations
 ### Space Complexity: $O(N)$
 > **Reason:** We save all the key-value pairs as well as all the keys with frequencies in the 2 HashMaps (plus a LinkedHashSet), so there are at most $min(N, capacity) keys and values at any given time.

## References

- **LeetCode Problem**: [LFU Cache](https://leetcode.com/problems/lfu-cache/description/)

- **Solution Link**: [LFU Cache](https://leetcode.com/problems/lfu-cache/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>
