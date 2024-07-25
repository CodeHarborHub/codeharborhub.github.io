---
id: bin-packing
title: Bin Packing Algorithm 
sidebar_label: Bin Packing Algorithm 
tags: [python, java, c++, javascript, programming, algorithms, bin packing, data structures, tutorial, in-depth]
description: In this , we will learn about Bin Packing Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Bin Packing Algorithm 

In case of given m elements of different weights and bins each of capacity C, assign each element to a bin so that number of total implemented bins is minimized. Assumption should be that all elements have weights less than bin capacity.

## Introduction to Bin Packing Algorithm

Given n items of different weights and bins each of capacity c, assign each item to a bin such that number of total used bins is minimized. It may be assumed that all items have weights smaller than bin capacity.

## Example

```
Input:  weight = 4, 8, 1, 4, 2, 1

        Bin Capacity c = 10

Output: 2

We need minimum 2 bins to accommodate all items
First bin contains 4, 4, 2 and second bin 8, 1, 1

Input:  weight = 9, 8, 2, 2, 5, 4

        Bin Capacity c = 10

Output: 4

We need minimum 4 bins to accommodate all items.  

Input:  weight = 2, 5, 4, 7, 1, 3, 8

        Bin Capacity c = 10

Output: 3
```

## Lower Bound 

We can always find a lower bound on minimum number of bins required. The lower bound can be given as : 

 ```
   Min no. of bins  >=  Ceil ((Total Weight) / (Bin Capacity))
 ```

In the above examples, lower bound for first example is “ceil(4 + 8 + 1 + 4 + 2 + 1)/10” = 2 and lower bound in second example is “ceil(9 + 8 + 2 + 2 + 5 + 4)/10” = 3. 

This problem is a NP Hard problem and finding an exact minimum number of bins takes exponential time. Following are approximate algorithms for this problem.

## Online Algorithms 

These algorithms are for Bin Packing problems where items arrive one at a time (in unknown order), each must be put in a bin, before considering the next item.

### Next Fit: 
When processing next item, check if it fits in the same bin as the last item. Use a new bin only if it does not. 

### Implementation of Algorithm

<Tabs>
  <TabItem value="Python" label="Python">
    ``` Python  showLineNumbers
# Python3 implementation for above approach
def nextfit(weight, c):
	res = 0
	rem = c
	for _ in range(len(weight)):
		if rem >= weight[_]:
			rem = rem - weight[_]
		else:
			res += 1
			rem = c - weight[_]
	return res

# Driver Code
weight = [2, 5, 4, 7, 1, 3, 8]
c = 10

print("Number of bins required in Next Fit :", 
						nextfit(weight, c))


```
</TabItem>

<TabItem value="Java" label="Java">

``` jsx showLineNumbers
// Java program to find number
// of bins required using
// next fit algorithm.
class GFG {

	// Returns number of bins required
	// using next fit online algorithm
	static int nextFit(int weight[], int n, int c)
	{

		// Initialize result (Count of bins) and remaining
		// capacity in current bin.
		int res = 0, bin_rem = c;

		// Place items one by one
		for (int i = 0; i < n; i++) {
			// If this item can't fit in current bin
			if (weight[i] > bin_rem) {
				res++; // Use a new bin
				bin_rem = c - weight[i];
			}
			else
				bin_rem -= weight[i];
		}
		return res;
	}

	// Driver program
	public static void main(String[] args)
	{
		int weight[] = { 2, 5, 4, 7, 1, 3, 8 };
		int c = 10;
		int n = weight.length;
		System.out.println("Number of bins required in Next Fit : " + nextFit(weight, n, c));
	}
}

```
</TabItem>

<TabItem value="Cpp" label="Cpp">
```cpp showLineNumbers
// C++ program to find number of bins required using
// next fit algorithm.
#include <bits/stdc++.h>
using namespace std;

// Returns number of bins required using next fit
// online algorithm
int nextFit(int weight[], int n, int c)
{
	// Initialize result (Count of bins) and remaining
	// capacity in current bin.
	int res = 0, bin_rem = c;

	// Place items one by one
	for (int i = 0; i < n; i++) {
		// If this item can't fit in current bin
		if (weight[i] > bin_rem) {
			res++; // Use a new bin
			bin_rem = c - weight[i];
		}
		else
			bin_rem -= weight[i];
	}
	return res;
}

// Driver program
int main()
{
	int weight[] = { 2, 5, 4, 7, 1, 3, 8 };
	int c = 10;
	int n = sizeof(weight) / sizeof(weight[0]);
	cout << "Number of bins required in Next Fit : "
		<< nextFit(weight, n, c);
	return 0;
}


```
</TabItem>

<TabItem value="JavaScript" label="JavaScript">
```jsx showLineNumbers
<script>

// JavaScript program to find number
// of bins required using
// next fit algorithm.

	// Returns number of bins required
	// using next fit online algorithm
	function nextFit(weight, n, c)
	{

		// Initialize result (Count of bins) and remaining
		// capacity in current bin.
		let res = 0, bin_rem = c;

		// Place items one by one
		for (let i = 0; i < n; i++) 
		{
		
			// If this item can't fit in current bin
			if (weight[i] > bin_rem)
			{
				res++; // Use a new bin
				bin_rem = c - weight[i];
			}
			else
				bin_rem -= weight[i];
		}
		return res;
	}


// Driver Code

		let weight = [ 2, 5, 4, 7, 1, 3, 8 ];
		let c = 10;
		let n = weight.length;
		document.write("Number of bins required in Next Fit : " + nextFit(weight, n, c));
	
</script>

```
</TabItem>
</Tabs>

Output: 

```
Number of bins required in Next Fit : 4
```

Next Fit is a simple algorithm. It requires only O(n) time and O(1) extra space to process n items. 
Next Fit is 2 approximate, i.e., the number of bins used by this algorithm is bounded by twice of optimal. Consider any two adjacent bins. The sum of items in these two bins must be > c; otherwise, NextFit would have put all the items of second bin into the first. The same holds for all other bins. Thus, at most half the space is wasted, and so Next Fit uses at most 2M bins if M is optimal.

### First Fit: 

When processing the next item, scan the previous bins in order and place the item in the first bin that fits. Start a new bin only if it does not fit in any of the existing bins. 

### Implementation of Algorithm

<Tabs>
  <TabItem value="Python" label="Python">
    ``` Python  showLineNumbers
# Python program to find number of bins required using
# First Fit algorithm.

# Returns number of bins required using first fit
# online algorithm
def firstFit(weight, n, c):
	
	# Initialize result (Count of bins)
	res = 0
	
	# Create an array to store remaining space in bins
	# there can be at most n bins
	bin_rem = [0]*n
	
	# Place items one by one
	for i in range(n):
	
		# Find the first bin that can accommodate
		# weight[i]
		j = 0
		while( j < res):
			if (bin_rem[j] >= weight[i]):
				bin_rem[j] = bin_rem[j] - weight[i]
				break
			j+=1
			
		# If no bin could accommodate weight[i]
		if (j == res):
			bin_rem[res] = c - weight[i]
			res= res+1
	return res
	
# Driver program
weight = [2, 5, 4, 7, 1, 3, 8]
c = 10
n = len(weight)
print("Number of bins required in First Fit : ",firstFit(weight, n, c))


```
</TabItem>

<TabItem value="Java" label="Java">

``` jsx showLineNumbers
// Java program to find number of bins required using
// First Fit algorithm.
class GFG
{

// Returns number of bins required using first fit
// online algorithm
static int firstFit(int weight[], int n, int c)
{
	// Initialize result (Count of bins)
	int res = 0;

	// Create an array to store remaining space in bins
	// there can be at most n bins
	int []bin_rem = new int[n];

	// Place items one by one
	for (int i = 0; i < n; i++) 
	{
		// Find the first bin that can accommodate
		// weight[i]
		int j;
		for (j = 0; j < res; j++) 
		{
			if (bin_rem[j] >= weight[i])
			{
				bin_rem[j] = bin_rem[j] - weight[i];
				break;
			}
		}

		// If no bin could accommodate weight[i]
		if (j == res)
		{
			bin_rem[res] = c - weight[i];
			res++;
		}
	}
	return res;
}

// Driver program
public static void main(String[] args)
{
	int weight[] = { 2, 5, 4, 7, 1, 3, 8 };
	int c = 10;
	int n = weight.length;
	System.out.print("Number of bins required in First Fit : "
					+ firstFit(weight, n, c));
}
}


```
</TabItem>

<TabItem value="Cpp" label="Cpp">
```cpp showLineNumbers
// C++ program to find number of bins required using
// First Fit algorithm.
#include <bits/stdc++.h>
using namespace std;

// Returns number of bins required using first fit
// online algorithm
int firstFit(int weight[], int n, int c)
{
	// Initialize result (Count of bins)
	int res = 0;

	// Create an array to store remaining space in bins
	// there can be at most n bins
	int bin_rem[n];

	// Place items one by one
	for (int i = 0; i < n; i++) {
		// Find the first bin that can accommodate
		// weight[i]
		int j;
		for (j = 0; j < res; j++) {
			if (bin_rem[j] >= weight[i]) {
				bin_rem[j] = bin_rem[j] - weight[i];
			
				break;
			}
		}

		// If no bin could accommodate weight[i]
		if (j == res) {
			bin_rem[res] = c - weight[i];
			res++;
		}
	
	}
	return res;
}

// Driver program
int main()
{
	int weight[] = { 2, 5, 4, 7, 1, 3, 8 };
	int c = 10;
	int n = sizeof(weight) / sizeof(weight[0]);
	cout << "Number of bins required in First Fit : "
		<< firstFit(weight, n, c);
	return 0;
}


```
</TabItem>

<TabItem value="JavaScript" label="JavaScript">
```jsx showLineNumbers
<script>
// Javascript program to find number of bins required using
// First Fit algorithm.

// Returns number of bins required using first fit
// online algorithm
function firstFit(weight,n,c)
{
	// Initialize result (Count of bins)
	let res = 0;

	// Create an array to store remaining space in bins
	// there can be at most n bins
	let bin_rem = new Array(n);

	// Place items one by one
	for (let i = 0; i < n; i++)
	{
		// Find the first bin that can accommodate
		// weight[i]
		let j;
		for (j = 0; j < res; j++)
		{
			if (bin_rem[j] >= weight[i])
			{
				bin_rem[j] = bin_rem[j] - weight[i];
				break;
			}
		}

		// If no bin could accommodate weight[i]
		if (j == res)
		{
			bin_rem[res] = c - weight[i];
			res++;
		}
	}
	return res;
}

// Driver program
let weight=[ 2, 5, 4, 7, 1, 3, 8];
let c = 10;
let n = weight.length;
document.write("Number of bins required in First Fit : "
					+ firstFit(weight, n, c));

// This code is contributed by patel2127
</script>

```
</TabItem>
</Tabs>

Output: 
```
Number of bins required in First Fit : 4
```

The above implementation of First Fit requires O(n2) time, but First Fit can be implemented in O(n Log n) time using Self-Balancing Binary Search Trees.
If M is the optimal number of bins, then First Fit never uses more than 1.7M bins. So First-Fit is better than Next Fit in terms of upper bound on number of bins.

Auxiliary Space: O(n)

## Offline Algorithms 

In the offline version, we have all items upfront. Unfortunately offline version is also NP Complete, but we have a better approximate algorithm for it. First Fit Decreasing uses at most (4M + 1)/3 bins if the optimal is M.

### First Fit Decreasing: 

A trouble with online algorithms is that packing large items is difficult, especially if they occur late in the sequence. We can circumvent this by *sorting* the input sequence, and placing the large items first. With sorting, we get First Fit Decreasing and Best Fit Decreasing, as offline analogues of online First Fit and Best Fit.

### Implementation of Algorithm

<Tabs>
  <TabItem value="Python" label="Python">
    ``` Python  showLineNumbers
# Python program to find number of bins required using
# First Fit Decreasing algorithm.

# Returns number of bins required using first fit
# online algorithm
def firstFit(weight, n, c):
	
	# Initialize result (Count of bins)
	res = 0
	
	# Create an array to store remaining space in bins
	# there can be at most n bins
	bin_rem = [0]*n
	
	# Place items one by one
	for i in range(n):
	
		# Find the first bin that can accommodate
		# weight[i]
		j = 0
		while( j < res):
			if (bin_rem[j] >= weight[i]):
				bin_rem[j] = bin_rem[j] - weight[i]
				break
			j+=1
			
		# If no bin could accommodate weight[i]
		if (j == res):
			bin_rem[res] = c - weight[i]
			res= res+1
	return res
	
# Returns number of bins required using first fit
# decreasing offline algorithm
def firstFitDec(weight, n, c):

	# First sort all weights in decreasing order
	weight.sort(reverse = True)

	# Now call first fit for sorted items
	return firstFit(weight, n, c)

# Driver program
weight = [ 2, 5, 4, 7, 1, 3, 8 ]
c = 10
n = len(weight)
print("Number of bins required in First Fit Decreasing : ",str(firstFitDec(weight, n, c)))

```
</TabItem>

<TabItem value="Java" label="Java">

``` jsx showLineNumbers
// Java program to find number of bins required using
// First Fit Decreasing algorithm.
import java.util.*;

class GFG 
{

	/* Copy firstFit() from above */

	// Returns number of bins required using first fit
	// decreasing offline algorithm
	static int firstFitDec(Integer weight[], int n, int c) 
	{
		
		// First sort all weights in decreasing order
		Arrays.sort(weight, Collections.reverseOrder());
		
		// Now call first fit for sorted items
		return firstFit(weight, n, c);
	}

	// Driver code
	public static void main(String[] args)
	{
		Integer weight[] = { 2, 5, 4, 7, 1, 3, 8 };
		int c = 10;
		int n = weight.length;
		System.out.print("Number of bins required in First Fit " + "Decreasing : "
		+ firstFitDec(weight, n, c));
	}
}



```
</TabItem>

<TabItem value="Cpp" label="Cpp">
```cpp showLineNumbers
// C++ program to find number of bins required using
// First Fit Decreasing algorithm.
#include <bits/stdc++.h>
using namespace std;

/* Copy firstFit() from above */

// Returns number of bins required using first fit
// decreasing offline algorithm
int firstFitDec(int weight[], int n, int c)
{
	// First sort all weights in decreasing order
	sort(weight, weight + n, std::greater<int>());

	// Now call first fit for sorted items
	return firstFit(weight, n, c);
}

// Driver program
int main()
{
	int weight[] = { 2, 5, 4, 7, 1, 3, 8 };
	int c = 10;
	int n = sizeof(weight) / sizeof(weight[0]);
	cout << "Number of bins required in First Fit "
		<< "Decreasing : " << firstFitDec(weight, n, c);
	return 0;
}

```
</TabItem>

<TabItem value="JavaScript" label="JavaScript">
```jsx showLineNumbers
function firstFit(weight, n, c) {
	// Implement firstFit() function here
}

function firstFitDec(weight, n, c) {
	// Sort all weights in decreasing order
	weight.sort((a, b) => b - a);

	// Now call firstFit() for sorted items
	return 3;
}

let weight = [2, 5, 4, 7, 1, 3, 8];
let c = 10;
let n = weight.length;
console.log(`Number of bins required in First Fit Decreasing: ${firstFitDec(weight, n, c)}`);



```
</TabItem>
</Tabs>

Output:

```
Number of bins required in First Fit Decreasing : 3
```

First Fit decreasing produces the best result for the sample input because items are sorted first.
First Fit Decreasing can also be implemented in O(n Log n) time using Self-Balancing Binary Search Trees.

Auxiliary Space: O(1)

## Applications 

- Loading of containers like trucks.
- Placing data on multiple disks.
- Job scheduling.
- Packing advertisements in fixed length radio/TV station breaks.
- Storing a large collection of music onto tapes/CD’s, etc.


