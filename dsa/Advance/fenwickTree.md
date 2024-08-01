# Fenwick Tree (Binary Indexed Tree)

A Fenwick Tree, also known as a Binary Indexed Tree (BIT), is a data structure that provides efficient methods for calculation and manipulation of the prefix sums of a table of values.

## Key Features

- **Space Complexity:** O(n)
- **Time Complexity for Updates:** O(log n)
- **Time Complexity for Queries:** O(log n)

## Algorithm Description

A Fenwick Tree is used to efficiently compute prefix sums and update elements. It is particularly useful in situations where there are frequent updates and prefix sum queries.

### Operations

1. **Initialization:** Create a tree of size n initialized to 0.
2. **Update:** Add a value to an element and propagate the change through the tree.
3. **Prefix Sum Query:** Calculate the sum of elements from the start of the array to a given index.

## Python Implementation

Here is a Python implementation of a Fenwick Tree:

```python
class FenwickTree:
    def __init__(self, size):
        self.size = size
        self.tree = [0] * (size + 1)

    def update(self, index, value):
        """
        Adds `value` to the element at `index` in the Fenwick Tree.
        """
        index += 1  # Fenwick Tree is 1-indexed
        while index <= self.size:
            self.tree[index] += value
            index += index & -index

    def prefix_sum(self, index):
        """
        Returns the sum of elements from the start to `index` in the Fenwick Tree.
        """
        index += 1  # Fenwick Tree is 1-indexed
        result = 0
        while index > 0:
            result += self.tree[index]
            index -= index & -index
        return result

    def range_sum(self, left, right):
        """
        Returns the sum of elements from `left` to `right` in the Fenwick Tree.
        """
        return self.prefix_sum(right) - self.prefix_sum(left - 1)
```
# Example usage
if __name__ == "__main__":
    arr = [1, 7, 3, 0, 7, 8, 3, 2, 6, 2]
    fenwick_tree = FenwickTree(len(arr))

    # Build the Fenwick Tree
    for i, val in enumerate(arr):
        fenwick_tree.update(i, val)

    print("Prefix sum up to index 5:", fenwick_tree.prefix_sum(5))
    print("Range sum from index 2 to 6:", fenwick_tree.range_sum(2, 6))
    fenwick_tree.update(3, 5)  # Update index 3 with +5
    print("Prefix sum up to index 5 after update:", fenwick_tree.prefix_sum(5))
    print("Range sum from index 2 to 6 after update:", fenwick_tree.range_sum(2, 6))


# Explanation
The FenwickTree class initializes the tree with a given size and provides methods for updating elements and querying prefix sums.
The update method adds a value to an element at a given index and updates the tree accordingly.
The prefix_sum method calculates the sum of elements from the start to a given index.
The range_sum method calculates the sum of elements within a specified range by using the prefix sums.

## Conclusion
Fenwick Trees are powerful and efficient data structures for handling prefix sums and updates in logarithmic time. They are particularly useful in scenarios involving frequent updates and queries, such as in competitive programming and real-time data analysis.


