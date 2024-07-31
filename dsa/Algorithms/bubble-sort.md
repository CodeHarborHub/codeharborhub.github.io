# Bubble Sort Algorithm

Bubble Sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing adjacent items and swapping them if they are in the wrong order. The process is repeated until the list is sorted.

## Algorithm Description

1. Start at the beginning of the list.
2. Compare the first two elements. If the first element is greater than the second, swap them.
3. Move to the next pair of elements and repeat the comparison and swap if necessary.
4. Continue this process for each pair of adjacent elements to the end of the list. This completes one pass.
5. Repeat the above steps for all elements, reducing the range of comparison each time by one as the last elements will already be sorted.
6. The algorithm stops when no swaps are needed on a new pass, indicating that the list is sorted.

## Time Complexity

- **Best Case:** O(n) when the list is already sorted.
- **Average Case:** O(n^2).
- **Worst Case:** O(n^2) when the list is sorted in reverse order.

## Python Implementation

Here is a Python implementation of the Bubble Sort algorithm:

```python
def bubble_sort(arr):
    """
    Function to perform Bubble Sort on a list.

    :param arr: List of elements to be sorted.
    """
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # If no elements were swapped in the inner loop, break
        if not swapped:
            break
```
# Example usage
if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", arr)
    bubble_sort(arr)
    print("Sorted array:", arr)

## Explanation
The bubble_sort function takes a list arr as input and sorts it in ascending order using the Bubble Sort algorithm.
The outer loop runs n times, where n is the length of the list.
The inner loop performs the comparison and swapping of adjacent elements.
The swapped flag is used to optimize the algorithm by stopping early if the list is already sorted.
The example usage demonstrates how to use the function and print the original and sorted arrays.

## Conclusion
Bubble Sort is an easy-to-understand sorting algorithm that is suitable for small datasets or educational purposes. However, due to its O(n^2) time complexity, it is inefficient for large datasets compared to more advanced sorting algorithms like Quick Sort or Merge Sort.

