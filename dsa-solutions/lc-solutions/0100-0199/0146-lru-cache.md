---
id: lru-cache
title: LRU Cache
sidebar_label: 0146-LRU Cache
tags:
  - Linked list
  - LeetCode
  - Python
  - Hash tree

description: "This is a solution to the LRU Cache on LeetCode."
---


## Problem Description
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the `LRUCache` class:

`LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise `return -1`.
`void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value `pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions `get` and `put` must each run in `O(1)` average time complexity.

 

### Examples

**Example 1:**

```plaintext
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```


### Constraints

- $1 <= capacity <= 3000$
- $0 <= key <= {10^{4}}$
- $0 <= value <= {10^{5}}$
- At most ${2 * 10^{5}}$ calls will be made to `get` and `put`.

---


## Intuition
Track 2 things:

1. Key, value pairs in a cache dictionary.
2. Key, counter (of key use) pairs in a use dictionary.

Automatically track the least used key using a Heap/PriorityQueue.

## Approach

### Put Function:
1. If the key is in our cache dictionary, update its value.
   - We initialize a counter variable that counts the timestamp of our LRU cache calls. We use this counter to update the value of the use dictionary and then increment the counter.

2. If the key is not in the cache, we first check if the cache has reached capacity. If so:
   1. While the heap top element (i.e., the least recently used (lowest counter) key) doesn't match the counter in the use dictionary, we keep popping from the heap and updating its contents. (Note: this is done in 2 calls: `heappop` old counter, `heappush` new counter).
   2. Once the heap is updated, we pop one last time from the heap, as this is the least recently used key, and we delete this from the cache and use dictionaries.
   3. Finally, we add the new (key, value) pair in the cache and (key, counter) in the use dictionaries.

### Get Function:
1. If the key is in the cache, update its counter value in the use dictionary, increment the counter, and return the value stored in the cache.
2. Else, return -1.


### Code in Different languages
#### Code in C++

```c++
class LRUCache {
public:
    class Node{
        public: 
            int key;
            int val;
            Node* prev;
            Node* next;

            Node(int key, int val){
                this->key = key;
                this->val = val;
            }
    };

    Node* head = new Node(-1, -1);
    Node* tail = new Node(-1, -1);

    int cap;
    unordered_map<int, Node*> m;

    LRUCache(int capacity) {
        cap = capacity;
        head -> next = tail;
        tail -> prev = head;
    }

    void addNode(Node* newnode){
        Node* temp = head -> next;

        newnode -> next = temp;
        newnode -> prev = head;

        head -> next = newnode;
        temp -> prev = newnode;
    }

    void deleteNode(Node* delnode){
        Node* prevv = delnode -> prev;
        Node* nextt = delnode -> next;

        prevv -> next = nextt;
        nextt -> prev = prevv;
    }
    
    int get(int key) {
        if(m.find(key) != m.end()){
            Node* resNode = m[key];
            int ans = resNode -> val;

            m.erase(key);
            deleteNode(resNode);
            addNode(resNode);

            m[key] = head -> next;
            return ans;
        }
        return -1;
    }
    
    void put(int key, int value) {
        if(m.find(key) != m.end()){
            Node* curr = m[key];
            m.erase(key);
            deleteNode(curr);
        }

        if(m.size() == cap){
            m.erase(tail -> prev -> key);
            deleteNode(tail -> prev);
        }

        addNode(new Node(key, value));
        m[key] = head -> next;
    }
};
```

#### Java
```java
class LRUCache {
    class Node {
        int key;
        int val;
        Node prev;
        Node next;

        Node(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }

    Node head = new Node(-1, -1);
    Node tail = new Node(-1, -1);
    int cap;
    HashMap<Integer, Node> m = new HashMap<>();

    public LRUCache(int capacity) {
        cap = capacity;
        head.next = tail;
        tail.prev = head;
    }

    private void addNode(Node newnode) {
        Node temp = head.next;

        newnode.next = temp;
        newnode.prev = head;

        head.next = newnode;
        temp.prev = newnode;
    }

    private void deleteNode(Node delnode) {
        Node prevv = delnode.prev;
        Node nextt = delnode.next;

        prevv.next = nextt;
        nextt.prev = prevv;
    }

    public int get(int key) {
        if (m.containsKey(key)) {
            Node resNode = m.get(key);
            int ans = resNode.val;

            m.remove(key);
            deleteNode(resNode);
            addNode(resNode);

            m.put(key, head.next);
            return ans;
        }
        return -1;
    }

    public void put(int key, int value) {
        if (m.containsKey(key)) {
            Node curr = m.get(key);
            m.remove(key);
            deleteNode(curr);
        }

        if (m.size() == cap) {
            m.remove(tail.prev.key);
            deleteNode(tail.prev);
        }

        addNode(new Node(key, value));
        m.put(key, head.next);
    }
}
```


#### Python
```python
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.heap = []
        self.use = defaultdict(int)
        self.counter = 0

    def get(self, key: int) -> int:
        if key in self.cache:
            self.use[key] = self.counter
            self.counter += 1
            return self.cache[key]
            
        return -1

    def put(self, key: int, value: int) -> None:
        
        if key in self.cache:
            self.cache[key] = value
            self.use[key] = self.counter
            self.counter += 1
            return

        if len(self.cache) >= self.capacity:
            while self.heap[0][0] != self.use[self.heap[0][1]]:
                _, k = heappop(self.heap)
                heappush(self.heap, (self.use[k], k))
            _, k = heappop(self.heap)
            del self.cache[k]
            del self.use[k]

        self.cache[key] = value
        self.use[key] = self.counter
        heappush(self.heap, (self.use[key], key))
        self.counter += 1
```




### Complexity
- Time complexity: $O(n)$

- Space complexity: $O(1)$
