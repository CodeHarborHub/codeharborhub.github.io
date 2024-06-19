---
id: time-complexity
title: Time Complexity
sidebar_label: Time Complexity
sidebar_position: 2
---

<head>
<meta name="description" content="Learn about time complexity in algorithms, including types like constant, logarithmic, linear, and more. Understand Big O notation, common analysis techniques, and practical examples." />
<meta name="keywords" content="Time Complexity, Big O Notation, Algorithm Analysis, Constant Time, Logarithmic Time, Linear Time, Quadratic Time, Exponential Time, Factorial Time, Amortized Analysis, Probabilistic Analysis, Complexity Classes, Algorithm Efficiency" />
<meta name="author" content="ajay-dhangar" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta property="og:title" content="Understanding Time Complexity in Algorithms" />
<meta property="og:description" content="A comprehensive guide to time complexity in algorithms, covering different types, Big O notation, analysis techniques, and practical examples." />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://codeharborhub.github.io/dsa/basic-topics/time-complexity/" />
<meta property="og:image" content="https://codeharborhub.github.io/dsa/assets/images/time-complexity.png" />
<meta property="og:site_name" content="CodeHarborHub" />
<meta property="og:locale" content="en_US" />

</head>


Time complexity is a measure of the amount of time an algorithm takes to run as a function of the length of the input. It is an important concept in computer science and is used to analyze the efficiency of algorithms. Time complexity is typically expressed using Big $O$ notation, which provides an upper bound on the growth rate of an algorithm.

## Types of Time Complexity

There are several types of time complexity that are commonly used to analyze algorithms. Some of the most common types of time complexity include:

1. **Constant Time ($ O(1) $)**: An algorithm is said to have constant time complexity if the time it takes to run is independent of the size of the input. This means that the algorithm takes the same amount of time to run, regardless of the size of the input.
2. **Logarithmic Time ($ O(\log n) $)**: An algorithm is said to have logarithmic time complexity if the time it takes to run grows logarithmically with the size of the input. This means that the algorithm takes less time to run as the size of the input increases.
3. **Linear Time ($ O(n) $)**: An algorithm is said to have linear time complexity if the time it takes to run grows linearly with the size of the input. This means that the algorithm takes more time to run as the size of the input increases.
4. **Quadratic Time ($ O(n^2) $)**: An algorithm is said to have quadratic time complexity if the time it takes to run grows quadratically with the size of the input. This means that the algorithm takes even more time to run as the size of the input increases.
5. **Exponential Time ($ O(2^n) $)**: An algorithm is said to have exponential time complexity if the time it takes to run grows exponentially with the size of the input. This means that the algorithm takes a very long time to run as the size of the input increases.
6. **Cubic Time ($ O(n^3) $)**: An algorithm is said to have cubic time complexity if the time it takes to run grows cubically with the size of the input. This means that the algorithm takes even more time to run as the size of the input increases.
7. **Factorial Time ($ O(n!) $)**: An algorithm is said to have factorial time complexity if the time it takes to run grows factorially with the size of the input. This means that the algorithm takes an extremely long time to run as the size of the input increases.
8. **Linearithmic Time ($ O(n \log n) $)**: An algorithm is said to have linearithmic time complexity if the time it takes to run grows linearithmically with the size of the input. This means that the algorithm takes more time to run as the size of the input increases, but not as much as a quadratic or exponential algorithm.

## Analyzing Time Complexity

There are several techniques that can be used to analyze the time complexity of an algorithm. Some of the most common techniques include:

- **Big $O$ Notation**: Big $O$ notation is used to describe the upper bound on the growth rate of an algorithm. It provides a way to compare the efficiency of different algorithms and determine how the running time of an algorithm grows as the size of the input increases.
- **Big $\Omega$ Notation**: Big $\Omega$ notation is used to describe the lower bound on the growth rate of an algorithm. It provides a way to determine the best-case running time of an algorithm.
- **Big $\Theta$ Notation**: Big $\Theta$ notation is used to describe the tight bound on the growth rate of an algorithm. It provides a way to determine the average-case running time of an algorithm.

## Common Algorithm Analysis Techniques

There are several common algorithm analysis techniques that can be used to analyze the time complexity of an algorithm. Some of the most common techniques include:

1. **Worst-Case Analysis**: Worst-case analysis is used to determine the maximum amount of time an algorithm will take to run on a given input. It provides an upper bound on the running time of an algorithm.
2. **Average-Case Analysis**: Average-case analysis is used to determine the average amount of time an algorithm will take to run on a given input. It provides an estimate of the running time of an algorithm.
3. **Best-Case Analysis**: Best-case analysis is used to determine the minimum amount of time an algorithm will take to run on a given input. It provides a lower bound on the running time of an algorithm.

## Practical Examples

Let's look at some practical examples of time complexity in algorithms:

1. **Linear Search**: The time complexity of linear search is $ O(n) $, where $ n $ is the size of the input array. This is because the algorithm has to iterate through each element in the array to find the target element.
    - **Description**: Linear search is a simple search algorithm that searches for a target element in an array by iterating through each element in the array.
    - **Time Complexity**: $ O(n) $
    - **Space Complexity**: $ O(1) $
    - **Best Case**: $ O(1) $ (when the target element is found at the first position)
    - **Worst Case**: $ O(n) $ (when the target element is found at the last position or not found at all)
    - **Average Case**: $ O(n/2) = O(n) $ (when the target element is found in the middle of the array)

2. **Binary Search**: The time complexity of binary search is $ O(\log n) $, where $ n $ is the size of the input array. This is because the algorithm divides the array in half at each step, reducing the search space by half.
    - **Description**: Binary search is a search algorithm that searches for a target element in a sorted array by repeatedly dividing the search interval in half.
    - **Time Complexity**: $ O(\log n) $
    - **Space Complexity**: $ O(1) $
    - **Best Case**: $ O(1) $ (when the target element is found at the middle position)
    - **Worst Case**: $ O(\log n) $ (when the target element is found at the last position or not found at all)
    - **Average Case**: $ O(\log n) $ (when the target element is found at any position)

3. **Bubble Sort**: The time complexity of bubble sort is $ O(n^2) $, where $ n $ is the size of the input array. This is because the algorithm compares adjacent elements and swaps them if they are in the wrong order, resulting in a worst-case time complexity of $ O(n^2) $.
    - **Description**: Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
    - **Time Complexity**: $ O(n^2) $
    - **Space Complexity**: $ O(1) $
    - **Best Case**: $ O(n) $ (when the input array is already sorted)
    - **Worst Case**: $ O(n^2) $ (when the input array is sorted in reverse order)
    - **Average Case**: $ O(n^2) $ (when the input array is randomly sorted)

4. **Merge Sort**: The time complexity of merge sort is $ O(n \log n) $, where $ n $ is the size of the input array. This is because the algorithm divides the array in half at each step and merges the subarrays in sorted order, resulting in a time complexity of $ O(n \log n) $.
    - **Description**: Merge sort is a divide-and-conquer sorting algorithm that divides the input array into two halves, recursively sorts the subarrays, and merges them in sorted order.
    - **Time Complexity**: $ O(n \log n) $
    - **Space Complexity**: $ O(n) $
    - **Best Case**: $ O(n \log n) $ (when the input array is randomly sorted)
    - **Worst Case**: $ O(n \log n) $ (when the input array is sorted in reverse order)
    - **Average Case**: $ O(n \log n) $ (when the input array is randomly sorted)

:::tip Tips for Analyzing Time Complexity

1. **Identify Loops**: Determine the number of times each loop runs.
2. **Recursive Calls**: Analyze the depth and number of recursive calls.
3. **Nested Loops**: Multiply the complexities of nested loops.
4. **Drop Constants**: Ignore constant factors and lower-order terms.
5. **Consider Worst-Case Scenario**: Always analyze the worst-case scenario for practical purposes.

:::

## Advanced Topics

1. **Amortized Analysis:**
    - **Definition:** Analyzing the average time per operation over a sequence of operations.
    - **Example:** Dynamic array resizing.
  
2. **Probabilistic Analysis:**
    - **Definition:** Analyzing the expected time complexity considering the probability distribution of inputs.
    - **Example:** Randomized algorithms like Quick Sort.

3. **Complexity Classes:**

    - **P:** Problems solvable in polynomial time.
    - **NP:** Problems verifiable in polynomial time.
    - **NP-Complete:** Problems to which any NP problem can be reduced in polynomial time.
    - **NP-Hard:** Problems as hard as NP-Complete problems, not necessarily in NP.

## Conclusion

Time complexity is an essential concept in computer science that is used to analyze the efficiency of algorithms. By understanding time complexity, you can determine how the running time of an algorithm grows as the size of the input increases. This knowledge is crucial for designing efficient algorithms and optimizing code for performance. By using Big $O$ notation and common analysis techniques, you can analyze the time complexity of algorithms and make informed decisions about algorithm design and implementation.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ajay-dhangar'].map(username => (
    <Author key={username} username={username} />
))}
</div>
