---
id: baseball-game
title: Baseball Game
sidebar_label: 682-Baseball Game
tags:
  - Array
  - Stack
  - Simulation

description: "This is a solution to baseball game  in leetcode "
---

## Problem Description

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

1. An integer `x`.
Record a new score of x.
2. `+`.
Record a new score that is the sum of the previous two scores.
3. `D`.
Record a new score that is the double of the previous score.
4. `C`.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 


### Examples

**Example 1:**

```
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

```
**Example 2:**
```
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

 ```

**Example 3:**
```
Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.

 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= operations.length <= 1000`
- `operations[i]` is "C", "D", "+", or a string representing an integer in the range `[-3 * 104, 3 * 104]`.
- For operation "+", there will always be at least two previous scores on the record.

### Solution
## Approach
If you are using arrays, the approach is similar but requires managing an array instead of a stack. Here's a concise explanation:

To calculate points using an array, iterate through the operations list while maintaining an array to store the scores. For each operation:
- If it's a number, convert it to an integer and append it to the array.
- If it's "+", sum the last two scores in the array and append the result.
- If it's "C", remove the last score from the array.
- If it's "D", double the last score in the array and append the result.

Finally, sum all the values in the array to get the total score. This method ensures that each operation is processed correctly, and the final score is computed based on the updated array.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp

class Solution {
public:
    int calPoints(std::vector<std::string>& operations) {
        std::vector<int> points;
        int sum = 0;
        
        for (const std::string& op : operations) {
            if (op == "+") {
                int last = points[points.size() - 1];
                int secondLast = points[points.size() - 2];
                points.push_back(last + secondLast);
            } else if (op == "C") {
                points.pop_back();
            } else if (op == "D") {
                points.push_back(2 * points.back());
            } else {
                points.push_back(std::stoi(op));
            }
        }
        
        for (int point : points) {
            sum += point;
        }
        
        return sum;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int calPoints(String[] operations) {
        ArrayList<Integer> a=new ArrayList<>();
        int sum=0;
        for(String ch:operations){
            if(ch.equals("+")){
                sum=a.get(a.size()-1)+a.get(a.size()-2);
                a.add(sum);
            }
            else if(ch.equals("C")){
                a.remove(a.size()-1);
            }
            else if(ch.equals("D")){
                a.add(2*a.get(a.size()-1));
            }else{
                a.add(Integer.parseInt(ch));
            }
        }
        int sum2=0;
        for(int i:a){
            sum2+=i;
        }return sum2;
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def calPoints(self, operations: list[str]) -> int:
        points = []
        
        for op in operations:
            if op == "+":
                points.append(points[-1] + points[-2])
            elif op == "C":
                points.pop()
            elif op == "D":
                points.append(2 * points[-1])
            else:
                points.append(int(op))
        
        return sum(points)

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Baseball Game](https://leetcode.com/problems/baseball-game/description/)

- **Solution Link**: [Baseball Game](https://leetcode.com/problems/baseball-game/post-solution/?submissionId=1270600925)
