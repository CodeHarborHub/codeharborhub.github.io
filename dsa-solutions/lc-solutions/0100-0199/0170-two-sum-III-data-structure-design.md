---
id: two-sum-III-data-structure-design
title: Two Sum III - Data Structure Design
sidebar_label: 0170-Two Sum III - Data Structure Design
tags: [HashTable, ArrayList, Binary Search]
description: Design and implement a TwoSum class.

---

## Problem Statement

Design and implement a TwoSum class. It should support the following operations: `add` and `find`.

`add` - Add the number to an internal data structure.  
`find` - Find if there exists any pair of numbers which sum is equal to the value.

### Examples

**Example 1:**

```plaintext
add(1); add(3); add(5);
find(4) -> true
find(7) -> false
```

**Example 2:**

```plaintext
add(3); add(1); add(2);
find(3) -> true
find(6) -> false
```

**Example 3:**

```plaintext
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

### Constraints
$$-10^5 \leq \text{number} \leq 10^5 - 1$$

$$-2^{31} \leq \text{number} \leq 2^{31} - 1$$

- At most 104 calls will be made to `add` and `find`.

## Solution

### Approach 

One hashmap for unique numbers, and their count (to tackle multiple duplicate numbers issue).  


#### Algorithm

`HashMap` to hold remainder.

Establish a mapping between each `number` and the number of `occurrences`, and then traverse the HashMap. For each value, first find the difference `t` between this value and the target value, and then you need to look at it in two cases.

- If the current value is `not equal` to the difference t, then return True as long as there is a difference t in the HashMap, or when the difference t is equal to the current value,

- If the number of mapping times of the HashMap is `greater than 1`, it means that there is another number in the HashMap that is `equal` to the current value, and the addition of the two is the target value



#### Implementation

```Java
class TwoSum {
    Map<Integer,Boolean> map;
    List<Integer> list;
    int low = Integer.MAX_VALUE;
    int high = Integer.MIN_VALUE;
    /** Initialize your data structure here. */
    public TwoSum() {
        map = new HashMap<>();
        list = new LinkedList<>();
    }

    /** Add the number to an internal data structure..*/
    public void add(int number) {
        if(map.containsKey(number)){
            map.put(number,true);
        }else{
            map.put(number,false);
            list.add(number);
            low = Math.min(low,number);
            high = Math.max(high,number);
        }
    }

    /** Find if there exists any pair of numbers which sum is equal 
     * to the value. */
    public boolean find(int value) {
        if(value < 2* low || value > 2*high) return false;
        for(int num : list){
            int target = value - num;
            if(map.containsKey(target)){
                if(num != target) return true;
                else if(map.get(target)) return true;
            }
        }
        return false;
    }
}

```

### Complexity Analysis

- **Time complexity**:   
  * $O(N)$ - `find`  
  * $O(1)$ - `add`
    
- **Space complexity**: $O(N)$
    * The HashMap takes the space of $O(N)$
