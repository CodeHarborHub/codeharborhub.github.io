---
id: RLE-Iterator
title: RLE Iterator
sidebar_label: RLE Iterator
tags: 
    - RLE
    - Iterator
    - Encoding
    - Array
    - Algorithm
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [RLE-Iterator](https://leetcode.com/problems/RLE-Iterator/description/) | [RLE-Iterator Solution on LeetCode](https://leetcode.com/problems/RLE-Iterator/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

We can use run-length encoding (i.e., RLE) to encode a sequence of integers. In a run-length encoded array of even length encoding (0-indexed), for all even `i`, `encoding[i]` tells us the number of times that the non-negative integer value `encoding[i + 1]` is repeated in the sequence.

For example, the sequence `arr = [8,8,8,5,5]` can be encoded to be `encoding = [3,8,2,5]`. `encoding = [3,8,0,9,2,5]` and `encoding = [2,8,1,8,2,5]` are also valid RLE of `arr`.

Given a run-length encoded array, design an iterator that iterates through it.

Implement the `RLEIterator` class:

- `RLEIterator(int[] encoded)` Initializes the object with the encoded array `encoded`.
- `int next(int n)` Exhausts the next `n` elements and returns the last element exhausted in this way. If there is no element left to exhaust, return `-1` instead.

### Example 1:

**Input**`["RLEIterator", "next", "next", "next", "next"] [[[3, 8, 0, 9, 2, 5]], [2], [1], [1], [2]]`
**Output**`[null, 8, 8, 5, -1]`

### Constraints:

- `2 <= encoding.length <= 1000`
- `encoding.length is even.`
- `0 <= encoding[i] <= 10^9`
- `1 <= n <= 10^9`
- At most `1000` calls will be made to `next`.

## Approach

To solve the problem, we can use a straightforward approach where we maintain a pointer to keep track of the current position in the encoded array. Each call to `next` will decrement the count of the current element by the specified `n`. If the count of the current element is exhausted, we move to the next element in the encoding.

### Steps:
1. Initialize the class with the encoded array.
2. In the `next` method, decrement the count of the current element by `n`.
3. If the count is exhausted, move to the next element.
4. Continue the process until `n` is exhausted or the array is fully traversed.
5. Return the last element exhausted or `-1` if there are no more elements.

## Solution

### Python
```python
class RLEIterator:

    def __init__(self, encoding: List[int]):
        self.encoding = encoding
        self.index = 0

    def next(self, n: int) -> int:
        while self.index < len(self.encoding):
            if self.encoding[self.index] >= n:
                self.encoding[self.index] -= n
                return self.encoding[self.index + 1]
            else:
                n -= self.encoding[self.index]
                self.index += 2
        return -1
```

### Java
```java
class RLEIterator {
    private int[] encoding;
    private int index;

    public RLEIterator(int[] encoding) {
        this.encoding = encoding;
        this.index = 0;
    }

    public int next(int n) {
        while (index < encoding.length) {
            if (encoding[index] >= n) {
                encoding[index] -= n;
                return encoding[index + 1];
            } else {
                n -= encoding[index];
                index += 2;
            }
        }
        return -1;
    }
}
```

### C++
```cpp
class RLEIterator {
public:
    vector<int> encoding;
    int index;

    RLEIterator(vector<int>& encoding) {
        this->encoding = encoding;
        this->index = 0;
    }

    int next(int n) {
        while (index < encoding.size()) {
            if (encoding[index] >= n) {
                encoding[index] -= n;
                return encoding[index + 1];
            } else {
                n -= encoding[index];
                index += 2;
            }
        }
        return -1;
    }
};
```

### C
```c
typedef struct {
    int* encoding;
    int length;
    int index;
} RLEIterator;

RLEIterator* rLEIteratorCreate(int* encoding, int encodingSize) {
    RLEIterator* iter = (RLEIterator*)malloc(sizeof(RLEIterator));
    iter->encoding = encoding;
    iter->length = encodingSize;
    iter->index = 0;
    return iter;
}

int rLEIteratorNext(RLEIterator* obj, int n) {
    while (obj->index < obj->length) {
        if (obj->encoding[obj->index] >= n) {
            obj->encoding[obj->index] -= n;
            return obj->encoding[obj->index + 1];
        } else {
            n -= obj->encoding[obj->index];
            obj->index += 2;
        }
    }
    return -1;
}

void rLEIteratorFree(RLEIterator* obj) {
    free(obj);
}
```

### JavaScript
```javascript
class RLEIterator {
    constructor(encoding) {
        this.encoding = encoding;
        this.index = 0;
    }

    next(n) {
        while (this.index < this.encoding.length) {
            if (this.encoding[this.index] >= n) {
                this.encoding[this.index] -= n;
                return this.encoding[this.index + 1];
            } else {
                n -= this.encoding[this.index];
                this.index += 2;
            }
        }
        return -1;
    }
}
```

## Step by Step Algorithm

1. Initialize the iterator with the encoded array.
2. In the `next` method, check if the current element's count is greater than or equal to `n`.
3. If true, decrement the count by `n` and return the current element.
4. If false, subtract the current count from `n`, move to the next element, and repeat the process.
5. If the end of the array is reached and `n` is still greater than 0, return `-1`.

## Conclusion

This problem demonstrates how to implement an iterator for a run-length encoded array. The solution involves maintaining a pointer to the current position in the encoded array and handling the decrement of counts efficiently. This approach ensures that the `next` method runs in O(1) time for each call, making it suitable for scenarios where frequent queries are made.