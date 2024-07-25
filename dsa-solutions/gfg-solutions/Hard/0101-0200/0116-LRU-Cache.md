---
id: lru-cache
title:   LRU Cache
sidebar_label: LRU Cache

tags:
- Linked List
- DLL
- Hash
- Queue
- Design Pattern
- Data Structures

description: "This is a solution to the LRU Cache problem on GeeksForGeeks."
---

## Problem Description
Design a data structure that works like a LRU Cache. Here **cap** denotes the capacity of the cache and Q denotes the number of queries. Query can be of two types:
- **SET x y**: sets the value of the key x with value y
- **GET x**: gets the key of x if present else returns -1.

The LRUCache class has two methods get() and set() which are defined as follows.
- **get(key)**: returns the value of the key if it already exists in the cache otherwise returns -1.
- **set(key, value)**: if the key is already present, update its value. If not present, add the key-value pair to the cache. If the cache reaches its capacity it should invalidate the least recently used item before inserting the new item.
- In the constructor of the class the capacity of the cache should be initialized.

### Examples

**Example 1:**
```
Input: 
cap = 2
Q = 2
Queries = SET 1 2 GET 1

Output:
2 

Explanation: 
Cache Size = 2

SET 1 2 GET 1
SET 1 2 : 1 -> 2

GET 1 : Print the value corresponding
to Key 1, ie 2.
```

**Example 2:**
```
Input: 
cap = 2
Q = 8
Queries = SET 1 2 SET 2 3 SET 1 5
SET 4 5 SET 6 7 GET 4 SET 1 2 GET 3

Output: 
5 -1

Explanation:
Cache Size = 2
SET 1 2 : 1 -> 2

SET 2 3 : 1 -> 2, 2 -> 3 (the most recently 
used one is kept at the rightmost position) 

SET 1 5 : 2 -> 3, 1 -> 5

SET 4 5 : 1 -> 5, 4 -> 5 (Cache size is 2, hence 
we delete the least recently used key-value pair)

SET 6 7 : 4 -> 5, 6 -> 7 

GET 4 : Prints 5 (The cache now looks like
6 -> 7, 4->5)

SET 1 2 : 4 -> 5, 1 -> 2 
(Cache size is 2, hence we delete the least 
recently used key-value pair)

GET 3 : No key value pair having 
key = 3. Hence, -1 is printed.
```


### Constraints
- `1 ≤ Cap ≤ 10^3`
- `1 ≤ Q ≤ 10^5`
- `1 ≤ x,y ≤ 10^4`


## Solution for LRU Cache
### Approach 
#### Brute Force 
In the brute force approach, we'll use a list to maintain the order of elements and a dictionary to store key-value pairs. This solution will not meet the requirement of O(1) time complexity for both `get()` and `set()` operations but will help in understanding the mechanism.
- **Initialization**:  Use a dictionary `cache` to store the key-value pairs and a list order to store the keys in the `order` of their usage.
- **GET Operation:** 
  - If the key exists in the cache, move the key to the end of the order list (to mark it as recently used) and return the value.
  - If the key does not exist, return -1.
- **SET Operation:** 
  - If the key already exists, update the value and move the key to the end of the `order` list.
  - If the key does not exist and the cache is not full, add the key-value pair and append the key to the end of the `order` list.
  - If the cache is full, remove the least recently used item (the first item in the `order` list), then add the new key-value pair and append the key to the end of the `order` list.
  

**Implementation:**
```python
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.order = []

    def get(self, key: int) -> int:
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return -1

    def set(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache[key] = value
            self.order.remove(key)
        else:
            if len(self.cache) >= self.capacity:
                lru = self.order.pop(0)
                del self.cache[lru]
            self.cache[key] = value
        self.order.append(key)

# Example usage
lru_cache = LRUCache(2)
lru_cache.set(1, 2)
print(lru_cache.get(1))  # Output: 2
```

#### Complexity Analysis:
- Time Complexity: 
  - `get()`: O(n) due to list removal and append operations.
  - `set()`: O(n) due to list removal and append operations.
- Space Complexity:
  - O(n) where n is the capacity of the cache.


#### Optimized Approach 
 For an optimized solution, we can use an OrderedDict from the collections module in Python, which maintains the order of insertion and provides O(1) time complexity for both get() and set() operations.
- **Steps**: 
  - Initialization: Use an OrderedDict to store the key-value pairs and maintain the order of insertion.
  - GET Operation:
    - If the key exists in the cache, move the key to the end (to mark it as recently used) and return the value.
    - If the key does not exist, return -1.
  - SET Operation:
    - If the key already exists, update the value and move the key to the end.
    - If the key does not exist and the cache is not full, add the key-value pair.
    - If the cache is full, remove the first item (the least recently used item), then add the new key-value pair.

**Implementation:**
```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1

    def set(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

# Example usage
lru_cache = LRUCache(2)
lru_cache.set(1, 2)
print(lru_cache.get(1))  # Output: 2
```

**Complexity:**
- Time Complexity: O(1) for both `get()` and `set()`.
- Space Complexity: O(n) where n is the capacity of the cache.

**Corner Cases:**
- When the cache is empty, `get()` should return -1 for any key.
- When inserting into a full cache, ensure the least recently used item is removed.
- Ensure `set()` updates the value and position if the key already exists.
- Handling of negative and zero capacity should be considered (though usually, capacity will be a positive integer).


## Code in Different Languages

<Tabs>

<TabItem value="Java" label="Java">
<SolutionAuthor name="@vansh-codes" />

   ```java
   import java.util.LinkedHashMap;
    import java.util.Map;

    class LRUCache {
        private final int capacity;
        private final Map<Integer, Integer> cache;

        public LRUCache(int capacity) {
            this.capacity = capacity;
            this.cache = new LinkedHashMap<Integer, Integer>(capacity, 0.75f, true) {
                protected boolean removeEldestEntry(Map.Entry eldest) {
                    return size() > capacity;
                }
            };
        }

        public int get(int key) {
            return cache.getOrDefault(key, -1);
        }

        public void set(int key, int value) {
            cache.put(key, value);
        }

        public static void main(String[] args) {
            LRUCache lruCache = new LRUCache(2);
            lruCache.set(1, 2);
            System.out.println(lruCache.get(1));  // Output: 2
        }
    }

    ```

</TabItem>

<TabItem value="C++" label="C++">
<SolutionAuthor name="@vansh-codes" />

   ```cpp
    #include <iostream>
    #include <unordered_map>
    #include <list>
    using namespace std;

    class LRUCache {
    private:
        int capacity;
        list<pair<int, int>> cache;
        unordered_map<int, list<pair<int, int>>::iterator> map;

    public:
        LRUCache(int capacity) : capacity(capacity) {}

        int get(int key) {
            if (map.find(key) == map.end()) {
                return -1;
            } else {
                cache.splice(cache.begin(), cache, map[key]);
                return map[key]->second;
            }
        }

        void set(int key, int value) {
            if (map.find(key) != map.end()) {
                cache.splice(cache.begin(), cache, map[key]);
                map[key]->second = value;
                return;
            }
            if (cache.size() == capacity) {
                int k = cache.back().first;
                cache.pop_back();
                map.erase(k);
            }
            cache.push_front({key, value});
            map[key] = cache.begin();
        }
    };

    int main() {
        LRUCache lruCache(2);
        lruCache.set(1, 2);
        cout << lruCache.get(1) << endl;  // Output: 2
        return 0;
    }
    ```

</TabItem>
</Tabs>

## References

- **GeekForGeeks Problem**: [LRU Cache](https://www.geeksforgeeks.org/problems/lru-cache/1)