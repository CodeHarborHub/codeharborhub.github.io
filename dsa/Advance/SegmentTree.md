# Segment Tree

A Segment Tree is a data structure that allows efficient range queries and updates on an array. It is particularly useful for problems where you need to perform multiple range queries and updates on an array.

## Key Features

- **Space Complexity:** O(n)
- **Time Complexity for Updates:** O(log n)
- **Time Complexity for Queries:** O(log n)

## Algorithm Description

A Segment Tree is a binary tree where each node represents an interval or segment of the array. The tree allows efficient querying of aggregate information (such as sum, minimum, or maximum) over any segment of the array, as well as efficient updates to individual elements.

### Operations

1. **Build:** Construct the tree from the given array.
2. **Update:** Update an element in the array and propagate the change through the tree.
3. **Query:** Calculate the aggregate information over a specified range of the array.

## Python Implementation

Here is a Python implementation of a Segment Tree for range sum queries:

```python
class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = [0] * (2 * self.n)
        self.build(data)

    def build(self, data):
        # Initialize leaves in the segment tree
        for i in range(self.n):
            self.tree[self.n + i] = data[i]
        # Build the tree by calculating parents
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[i * 2] + self.tree[i * 2 + 1]

    def update(self, index, value):
        # Update the value at the leaf node
        index += self.n
        self.tree[index] = value
        # Propagate the update up the tree
        while index > 1:
            index //= 2
            self.tree[index] = self.tree[2 * index] + self.tree[2 * index + 1]

    def query(self, left, right):
        # Query the sum in the range [left, right)
        result = 0
        left += self.n
        right += self.n
        while left < right:
            if left % 2:
                result += self.tree[left]
                left += 1
            if right % 2:
                right -= 1
                result += self.tree[right]
            left //= 2
            right //= 2
        return result
```

# Example usage
if __name__ == "__main__":
    data = [1, 3, 5, 7, 9, 11]
    seg_tree = SegmentTree(data)

    print("Initial Segment Tree:", seg_tree.tree)

    # Query the sum of range [1, 5)
    print("Sum of range [1, 5):", seg_tree.query(1, 5))

    # Update index 2 to value 6
    seg_tree.update(2, 6)
    print("Segment Tree after update:", seg_tree.tree)

    # Query again after the update
    print("Sum of range [1, 5) after update:", seg_tree.query(1, 5))
# Explanation
The SegmentTree class initializes the tree and provides methods for building the tree, updating elements, and querying ranges.
The build method constructs the tree by initializing the leaves with the input data and then building the parent nodes.
The update method updates an element at a given index and propagates the change up the tree.
The query method calculates the sum of elements within a specified range by traversing the tree.


## Conclusion
Segment Trees are powerful data structures for handling range queries and updates efficiently. They are widely used in scenarios requiring frequent and dynamic range queries, such as in competitive programming, database indexing, and real-time data analysis.

