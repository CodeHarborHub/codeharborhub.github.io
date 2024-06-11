The Knapsack problem is an example of the combinational optimization problem. This problem is also commonly known as the “Rucksack Problem“. The name of the problem is defined from the maximization problem as mentioned below:

Given a bag with maximum weight capacity of W and a set of items, each having a weight and a value associated with it. Decide the number of each item to take in a collection such that the total weight is less than the capacity and the total value is maximized.

## Types of Knapsack Problem:

### The knapsack problem can be classified into the following types:

Fractional Knapsack Problem
0/1 Knapsack Problem
Bounded Knapsack Problem
Unbounded Knapsack Problem

The 0/1 Knapsack problem can be defined as follows:

We are given N items where each item has some weight (wi) and value (vi) associated with it. We are also given a bag with capacity W. The target is to put the items into the bag such that the sum of values associated with them is the maximum possible.

Note that here we can either put an item completely into the bag or cannot put it at all.

## Examples:

Input: N = 3, W = 4, profit[] = {1, 2, 3}, weight[] = {4, 5, 1}
Output: 3

Explanation: There are two items which have weight less than or equal to 4. If we select the item with weight 4, the possible profit is 1. And if we select the item with weight 1, the possible profit is 3. So the maximum possible profit is 3. Note that we cannot put both the items with weight 4 and 1 together as the capacity of the bag is 4.

Input: N = 3, W = 3, profit[] = {1, 2, 3}, weight[] = {4, 5, 6}
Output: 0

## Java Implementation

```java
class Knapsack {

    // A utility function that returns
    // maximum of two integers
    static int max(int a, int b) { return (a > b) ? a : b; }

    // Returns the maximum value that
    // can be put in a knapsack of
    // capacity W
    static int knapSack(int W, int wt[], int val[], int n)
    {
        // Base Case
        if (n == 0 || W == 0)
            return 0;

        // If weight of the nth item is
        // more than Knapsack capacity W,
        // then this item cannot be included
        // in the optimal solution
        if (wt[n - 1] > W)
            return knapSack(W, wt, val, n - 1);

        // Return the maximum of two cases:
        // (1) nth item included
        // (2) not included
        else
            return max(val[n - 1]
                           + knapSack(W - wt[n - 1], wt,
                                      val, n - 1),
                       knapSack(W, wt, val, n - 1));
    }

    // Driver code
    public static void main(String args[])
    {
        int profit[] = new int[] { 60, 100, 120 };
        int weight[] = new int[] { 10, 20, 30 };
        int W = 50;
        int n = profit.length;
        System.out.println(knapSack(W, weight, profit, n));
    }
}
```

### Time Complexity: $O(2N)$
### Auxiliary Space: $O(N)$, Stack space required for recursion
