---
id: Z Algorithm
title: Z Algorithm 
sidebar_label: Z-Algorithm
tags:
  - Intermediate
  - String Matching Algorithms
  - CPP
  - Python
  - Java
  - DSA
description: "This is a solution for the string matching in linear time using Z algorithm."
---

## 1. What is the Z Algorithm?

This algorithm finds all occurrences of a pattern in a text in linear time. Let length of text be n and of pattern be m, then total time taken is `O(m + n)` with linear space complexity. Now we can see that both time and space complexity is same as KMP algorithm but this algorithm is Simpler to understand.
In this algorithm, we construct a Z array.

## 2. What is Z Array?

For a string `str[0..n-1]`, Z array is of same length as string. An element Z[i] of Z array stores length of the longest substring starting from `str[i]` which is also a prefix of `str[0..n-1]`. The first entry of Z array is meaning less as complete string is always prefix of itself. 

#### Examples
```
Index            0   1   2   3   4   5   6   7   8   9  10  11 
Text             a   a   b   c   a   a   b   x   a   a   a   z
Z values         X   1   0   0   3   1   0   0   2   2   1   0 
```
## 3. How to construct Z array? 

A Simple Solution is to run two nested loops, the outer loop goes to every index and the inner loop finds length of the longest prefix that matches the substring starting at the current index. The time complexity of this solution is $O(n2)$.
      We can construct Z array in linear time.

```
The idea is to maintain an interval [L, R] which is the interval with max R
such that [L,R] is prefix substring (substring which is also prefix). 

Steps for maintaining this interval are as follows – 

1) If i > R then there is no prefix substring that starts before i and 
   ends after i, so we reset L and R and compute new [L,R] by comparing 
   str[0..] to str[i..] and get Z[i] (= R-L+1).

2) If i <= R then let K = i-L,  now Z[i] >= min(Z[K], R-i+1)  because 
   str[i..] matches with str[K..] for atleast R-i+1 characters (they are in
   [L,R] interval which we know is a prefix substring).     
   Now two sub cases arise – 
      a) If Z[K] < R-i+1  then there is no prefix substring starting at 
         str[i] (otherwise Z[K] would be larger)  so  Z[i] = Z[K]  and 
         interval [L,R] remains same.
      b) If Z[K] >= R-i+1 then it is possible to extend the [L,R] interval
         thus we will set L as i and start matching from str[R]  onwards  and
         get new R then we will update interval [L,R] and calculate Z[i] (=R-L+1).

```




## 4. Problem Description

Given a text string and a pattern string, implement the Z algorithm to find all occurrences of the pattern in the text.

## 5. Examples

**Example 1:**
```
Input: text = "GEEKS FOR GEEKS", pattern = "GEEK"
Output: Pattern found at index 0, Pattern found at index 10
```

**Example 2:**
```
Input: text = "ABABDABACDABABCABAB", pattern = "ABAB"
Output: Pattern found at index 0, Pattern found at index 10, Pattern found at index 12
```

**Explanation of Example 1:**
- The pattern "GEEK" is found in the text "GEEKS FOR GEEKS" starting from index 0 and index 10.

## 6. Constraints

- $The text and pattern can contain any number of characters.$
- $All characters are ASCII characters.$

## 7. Implementation

<Tabs>
  <TabItem value="Pyhon" label="Python" default>
  ```python
  def getZarr(string, z):
    n = len(string)
 
    # [L,R] make a window which matches
    # with prefix of s
    l, r, k = 0, 0, 0
    for i in range(1, n):
 
        # if i>R nothing matches so we will calculate.
        # Z[i] using naive way.
        if i > r:
            l, r = i, i
 
            # R-L = 0 in starting, so it will start
            # checking from 0'th index. For example,
            # for "ababab" and i = 1, the value of R
            # remains 0 and Z[i] becomes 0. For string
            # "aaaaaa" and i = 1, Z[i] and R become 5
            while r < n and string[r - l] == string[r]:
                r += 1
            z[i] = r - l
            r -= 1
        else:
 
            # k = i-L so k corresponds to number which
            # matches in [L,R] interval.
            k = i - l
 
            # if Z[k] is less than remaining interval
            # then Z[i] will be equal to Z[k].
            # For example, str = "ababab", i = 3, R = 5
            # and L = 2
            if z[k] < r - i + 1:
                z[i] = z[k]
 
            # For example str = "aaaaaa" and i = 2, 
            # R is 5, L is 0
            else:
 
                # else start from R and check manually
                l = i
                while r < n and string[r - l] == string[r]:
                    r += 1
                z[i] = r - l
                r -= 1
 
# prints all occurrences of pattern 
# in text using Z algo
def search(text, pattern):
 
    # Create concatenated string "P$T"
    concat = pattern + "$" + text
    l = len(concat)
 
    # Construct Z array
    z = [0] * l
    getZarr(concat, z)
 
    # now looping through Z array for matching condition
    for i in range(l):
 
        # if Z[i] (matched region) is equal to pattern
        # length we got the pattern
        if z[i] == len(pattern):
            print("Pattern found at index", 
                      i - len(pattern) - 1)
 

 if __name__ == "__main__":
    text = "GEEKS FOR GEEKS"
    pattern = "GEEK"
    search(text, pattern)


```
</TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
#include<iostream>
using namespace std;

void getZarr(string str, int Z[]);

// prints all occurrences of pattern in text using Z algo
void search(string text, string pattern)
{
	// Create concatenated string "P$T"
	string concat = pattern + "$" + text;
	int l = concat.length();

	// Construct Z array
	int Z[l];
	getZarr(concat, Z);

	// now looping through Z array for matching condition
	for (int i = 0; i < l; ++i)
	{
		// if Z[i] (matched region) is equal to pattern
		// length we got the pattern
		if (Z[i] == pattern.length())
			cout << "Pattern found at index "
				<< i - pattern.length() -1 << endl;
	}
}

// Fills Z array for given string str[]
void getZarr(string str, int Z[])
{
	int n = str.length();
	int L, R, k;

	// [L,R] make a window which matches with prefix of s
	L = R = 0;
	for (int i = 1; i < n; ++i)
	{
		// if i>R nothing matches so we will calculate.
		// Z[i] using naive way.
		if (i > R)
		{
			L = R = i;

			// R-L = 0 in starting, so it will start
			// checking from 0'th index. For example,
			// for "ababab" and i = 1, the value of R
			// remains 0 and Z[i] becomes 0. For string
			// "aaaaaa" and i = 1, Z[i] and R become 5
			while (R<n && str[R-L] == str[R])
				R++;
			Z[i] = R-L;
			R--;
		}
		else
		{
			// k = i-L so k corresponds to number which
			// matches in [L,R] interval.
			k = i-L;

			// if Z[k] is less than remaining interval
			// then Z[i] will be equal to Z[k].
			// For example, str = "ababab", i = 3, R = 5
			// and L = 2
			if (Z[k] < R-i+1)
				Z[i] = Z[k];

			// For example str = "aaaaaa" and i = 2, R is 5,
			// L is 0
			else
			{
				// else start from R and check manually
				L = i;
				while (R<n && str[R-L] == str[R])
					R++;
				Z[i] = R-L;
				R--;
			}
		}
	}
}

// Driver program
int main()
{
	string text = "GEEKS FOR GEEKS";
	string pattern = "GEEK";
	search(text, pattern);
	return 0;
}

  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  ```java

class GFG { 

	// prints all occurrences of pattern in text using
	// Z algo
	public static void search(String text, String pattern)
	{

		// Create concatenated string "P$T"
		String concat = pattern + "$" + text;

		int l = concat.length();

		int Z[] = new int[l];

		// Construct Z array
		getZarr(concat, Z);

		// now looping through Z array for matching condition
		for(int i = 0; i < l; ++i){

			// if Z[i] (matched region) is equal to pattern
			// length we got the pattern

			if(Z[i] == pattern.length()){
				System.out.println("Pattern found at index "
							+ (i - pattern.length() - 1));
			}
		}
	}

	// Fills Z array for given string str[]
	private static void getZarr(String str, int[] Z) {

		int n = str.length();
		
		// [L,R] make a window which matches with 
		// prefix of s
		int L = 0, R = 0;

		for(int i = 1; i < n; ++i) {

			// if i>R nothing matches so we will calculate.
			// Z[i] using naive way.
			if(i > R){

				L = R = i;

				// R-L = 0 in starting, so it will start
				// checking from 0'th index. For example,
				// for "ababab" and i = 1, the value of R
				// remains 0 and Z[i] becomes 0. For string
				// "aaaaaa" and i = 1, Z[i] and R become 5

				while(R < n && str.charAt(R - L) == str.charAt(R))
					R++;
				
				Z[i] = R - L;
				R--;

			}
			else{

				// k = i-L so k corresponds to number which
				// matches in [L,R] interval.
				int k = i - L;

				// if Z[k] is less than remaining interval
				// then Z[i] will be equal to Z[k].
				// For example, str = "ababab", i = 3, R = 5
				// and L = 2
				if(Z[k] < R - i + 1)
					Z[i] = Z[k];

				// For example str = "aaaaaa" and i = 2, R is 5,
				// L is 0
				else{


				// else start from R and check manually
					L = i;
					while(R < n && str.charAt(R - L) == str.charAt(R))
						R++;
					
					Z[i] = R - L;
					R--;
				}
			}
		}
	}
	
	// Driver program
	public static void main(String[] args) 
	{
		String text = "GEEKS FOR GEEKS";
		String pattern = "GEEK";

		search(text, pattern);
	}
}

  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**:
  - Average and Best Case: $O(N + M)$

- **Space Complexity**: $O(N)$ .

## 9. Advantages and Disadvantages

**Advantages:**
- Efficient on average with good hash functions.
- Suitable for multiple pattern searches in a single text.

**Disadvantages

:**
- Hash collisions can degrade performance to $O(N * M)$.
- Requires a good hash function to minimize collisions.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/)
