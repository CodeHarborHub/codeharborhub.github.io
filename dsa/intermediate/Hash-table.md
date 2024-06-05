# Hash Table

A hash table (or hash map) is a fundamental data structure in computer science, used for fast data retrieval. Here’s an in-depth look at hash tables:

## Overview
A hash table is a collection of key-value pairs, where each key is mapped to a value. The key is transformed into an index in an array through a process called hashing. This index is used to quickly locate the value associated with the key.

## Key Concepts
1. *Hash Function:* This function takes an input (the key) and returns an integer (the hash code), which is used as an index to store the corresponding value in the array. A good hash function distributes keys uniformly across the array.
2. *Buckets:* Each index in the array is referred to as a bucket. In cases where multiple keys hash to the same index, these keys are stored in the same bucket.
3. *Collision Handling:* Collisions occur when multiple keys hash to the same index. Common collision handling techniques include:
      - Chaining: Each bucket points to a linked list of entries that map to the same index.
      - Open Addressing: When a collision occurs, the algorithm searches for the next open bucket using a probing sequence (linear probing, quadratic probing, or double hashing).

## Operations
**Insertion:**

Compute the hash code of the key using the hash function.
Map the hash code to an index in the array.
Store the key-value pair in the corresponding bucket. Handle collisions appropriately.

**Search:**

Compute the hash code of the key.
Map the hash code to an index.
Check the corresponding bucket. If using chaining, search the linked list. If using open addressing, follow the probing sequence until the key is found or an empty bucket is reached.

**Deletion:**

Compute the hash code of the key.
Map the hash code to an index.
Locate the key in the bucket and remove the key-value pair. Adjust the structure to maintain efficiency (e.g., rehash elements if necessary).

## Complexity
Average Time Complexity: $O(1)$ for insert, delete, and search operations in a well-implemented hash table with a good hash function and a load factor that avoids excessive collisions.

Worst-Case Time Complexity: $O(n)$ for insert, delete, and search operations if all keys hash to the same index (highly unlikely with a good hash function).

## Load Factor
The load factor $(α)$ is the ratio of the number of entries to the number of buckets in the hash table. A high load factor can lead to more collisions, affecting performance. A common practice is to resize the hash table (rehash) when the load factor exceeds a certain threshold.


$$​Load Factor = No. of entries / No. of Buckets$$
 

**Rehashing**

When the load factor exceeds a threshold, the hash table is resized (usually doubled) and all existing keys are rehashed to the new array. This operation ensures that the hash table maintains efficient performance.

## Practical Considerations
*Choosing a Hash Function:* A good hash function minimizes collisions and uniformly distributes keys. Common hash functions include division-remainder, multiplication, and universal hashing.

*Dynamic Resizing:* To maintain efficient operations, hash tables are dynamically resized (rehashing) when the load factor becomes too high.

*Memory Usage:* Hash tables can be memory-inefficient if they are sparsely populated. A balance between memory usage and performance needs to be struck.

## Applications

1. Database Indexing: Hash tables are used for indexing databases to allow quick retrieval of records.
2. Caches: Hash tables underpin the implementation of caches.
3. Symbol Tables in Compilers: Used for fast lookup of identifiers (variables, functions, etc.) during compilation.
4. Sets: Hash tables can be used to implement set data structures for efficient membership checking.

## Implementation in CPP

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <string>

class HashTable {
private:
    int size;
    std::vector<std::list<std::pair<std::string, std::string>>> table;

    int hashFunction(const std::string& key) const {
        std::hash<std::string> hashFunc;
        return hashFunc(key) % size;
    }

public:
    HashTable(int s) : size(s), table(s) {}

    void insert(const std::string& key, const std::string& value) {
        int index = hashFunction(key);
        for (auto& kvp : table[index]) {
            if (kvp.first == key) {
                kvp.second = value;
                return;
            }
        }
        table[index].emplace_back(key, value);
    }

    std::string search(const std::string& key) const {
        int index = hashFunction(key);
        for (const auto& kvp : table[index]) {
            if (kvp.first == key) {
                return kvp.second;
            }
        }
        return "Not Found";
    }

    bool remove(const std::string& key) {
        int index = hashFunction(key);
        for (auto it = table[index].begin(); it != table[index].end(); ++it) {
            if (it->first == key) {
                table[index].erase(it);
                return true;
            }
        }
        return false;
    }
};

int main() {
    HashTable ht(10);
    ht.insert("key1", "value1");
    ht.insert("key2", "value2");

    std::cout << "Search key1: " << ht.search("key1") << std::endl;  // Output: value1
    std::cout << "Search key2: " << ht.search("key2") << std::endl;  // Output: value2

    ht.remove("key1");
    std::cout << "Search key1: " << ht.search("key1") << std::endl;  // Output: Not Found

    return 0;
}
```
