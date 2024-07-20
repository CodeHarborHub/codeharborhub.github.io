---
id: assign-cookies
title: Assign Cookies
sidebar_label: 0455 - Assign Cookies
tags:
  - Sorting
  - Greedy
  - Two Pointers
description: "This is a solution to the Assign Cookies problem on LeetCode."
---

## Problem Description

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child `i` will be content. Your goal is to maximize the number of your content children and output the maximum number.

### Examples

**Example 1:**

```
Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
```

**Example 2:**

```
Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.
```

### Constraints

- $1 <= g.length <= 3 * 10^4$
- $0 <= s.length <= 3 * 10^4$
- $1 <= g[i], s[j] <= 2^{31} - 1$

## Solution for Assign Cookies

### Overview

Our objective is to determine the maximum number of content children given cookie sizes and greed factors.

Each index `i` in `g` represents a child whose minimum cookie size is `g[i]`.
Each index `j` in `s` represents a cookie with the size `s[j]`.

A child will be content if their cookie's size `s[j]` meets or exceeds their greed `g[i]`, represented as cookie size `s[j] >= g[i]`

Each child should receive at most one cookie. We must note that we could have many small cookies, but that will not satisfy a greedy child, because they want 1 large cookie. If there are lots of small cookies but no children with small greed, we can't use those cookies.

### Approach: Greedy, Two-Pointer
#### Intuition

Given the test case 2 `g = [1, 2]` and `s = [1, 2, 3]`, we could attempt a naive approach, iterating through both arrays and assigning cookies to the children in order.

Would this approach work for all cases? With the test case `g = [2, 1]` and `s = [1, 2]` we realize we cannot assign cookies in order because the first cookie isn't large enough for the first child, and if we allocate the second cookie to the second child, we satisfy only one child when we could satisfy two.

We need to be able to ensure that each child receives the smallest cookie that meets their greed so that larger cookies can be saved for children with more greed. We also want to make sure there are no leftover cookies that could have satisfied children.

The optimal solution will satisfy these conditions:

    - Every child that receives a cookie receives the smallest cookie that meets their greed so no larger cookies are wasted on children with smaller greed
    - After cookies are assigned, no cookies are remaining that could satisfy the available children's greed

How do we ensure that we don't waste larger cookies on children with smaller greed? We notice that in the first example, both arrays are sorted in ascending order. We need to sort the cookies and children in ascending order so that we can guarantee that for each child, we always try the currently smallest available cookie.

To solve the problem, we will start by sorting both arrays. That way we can ensure the children with the smallest greed and the smallest cookies are at the beginning, and the children with the largest greed and the largest cookies are at the end.

Next, we will use a while loop to iterate through our array of cookies, attempting to assign cookies to children. We will continue while we have more cookies and children. We will create a variable `cookieIndex` that keeps track of which cookies we have assigned or passed. We will store the number of satisfied children in `contentChildren`. If the next cookie meets the current child's greed, we increment `contentChildren` and `cookieIndex` as that cookie is assigned to a child. If the next cookie doesn't meet the current child's greed, we iterate `cookieIndex` to move on to the next cookie, until we find a cookie large enough for the child or we run out of cookies. Finally, we return `contentChildren`.

How can we be sure this provides the optimal solution?

With this approach, each child is offered the smallest available cookie first. Since the cookies are offered in order of ascending size, this ensures every child receives the smallest cookie that meets their greed. While assigning cookies to children, the children are sorted in increasing order of greed, which means that when we offer a cookie that doesn't meet the current child's greed, we also know there are no children less greedy than the current child. This means that any leftover cookies will not satisfy any available children. The approach provides an optimal solution.

This is a greedy approach because the current child always receives the cookie, even if the cookie could have satisfied the next child. This is the locally optimal choice.

#### Algorithm

1. Sort arrays `g` and `s` in ascending order.
2. Initialize variable `contentChildren = 0` to represent the number of children who receive cookies that meet their greed.
3. Initialize variable `cookieIndex = 0` to represent the number of cookies that have been assigned or skipped.
4. while `cookieIndex` is less than the size of `s` and `contentChildren` is less than the size of `g`:
    - If the current cookie's size is greater than or equal to the current child's greed:
        - Increment `contentChildren` to allocate the cookie.
    - Increment `cookieIndex` to move on to the next cookie.
5. Return `contentChildren`.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int findContentChildren(std::vector<int>& g, std::vector<int>& s) {
        std::sort(g.begin(), g.end());
        std::sort(s.begin(), s.end());
        int contentChildren = 0;
        int cookieIndex = 0;
        while (cookieIndex < s.size() && contentChildren < g.size()) {
            if (s[cookieIndex] >= g[contentChildren]) {
                contentChildren++;
            }
            cookieIndex++;
        }
        return contentChildren;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int contentChildren = 0;
        int cookieIndex = 0;
        while (cookieIndex < s.length && contentChildren < g.length) {
            if (s[cookieIndex] >= g[contentChildren]) {
                contentChildren++;
            }
            cookieIndex++;
        }
        return contentChildren;
    }

}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        content_children = 0
        cookie_index = 0
        while cookie_index < len(s) and content_children < len(g):
            if s[cookie_index] >= g[content_children]:
                content_children += 1
            cookie_index += 1
        return content_children    
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N⋅logN+M⋅logM)$

> **Reason**: Sorting an array of length k takes O(k⋅log⁡k), we need to sort two given arrays. The while loop iterates over each cookie and child once, taking O(M+N). To sum up, the overall time complexity is O(N⋅log⁡N+M⋅log⁡M).

### Space Complexity: $O(M+N)$ or $O(logN+logM)$

> **Reason**: 
> Some extra space is used when we sort `s` and `g` in place. The space complexity of the sorting algorithm depends on the programming language.
>   - In Python, the `sort` method sorts a list using the Timesort algorithm which is a combination of Merge Sort and Insertion Sort and has `O(N+M)` additional space.
>   - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of `O(log⁡N+log⁡M)`.
>   - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of `O(log⁡N+log⁡M)` for sorting two arrays.

## References

- **LeetCode Problem**: [Assign Cookies](https://leetcode.com/problems/assign-cookies/description/)

- **Solution Link**: [Assign Cookies](https://leetcode.com/problems/assign-cookies/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>