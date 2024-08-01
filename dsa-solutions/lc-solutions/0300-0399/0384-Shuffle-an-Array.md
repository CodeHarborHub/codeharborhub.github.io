---
id: shuffle-an-array
title: Shuffle-an-Array
sidebar_label: 0384-Shuffle an Array
tags:
  - Leet code
description: "Solution to leetocde 384"
---

### Problem Description

Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

- `Solution(int[] nums)` Initializes the object with the integer array nums.
- `int[] reset()` Resets the array to its original configuration and returns it.
- `int[] shuffle()` Returns a random shuffling of the array.

Example 1:

```
Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
```

### Constraints:

- `1 <= nums.length <= 50`
- `-10^6 <= nums[i] <= 10^6`

### Motive

Our motive in this question is to find a random permutation of an array on demand. Now this random permutation should be trully random with a uniform probability distribution.
In other words, for any call to shuffle(), all permutations of the array should have equal probability of being returned.

Let's try doing it by hand. We take the elements of the array in a bag and shuffle them, then for each position in the shuffled array, we draw one element from the bag, and put that element in that position, and so on, until the bag is empty.
We can simulate this exact process in our code by maintaining a copy of the original array and generating a random index of the array to put at each index.

But the problem arises in the exclusion of the selected elements from the bag. We could do a normal array delete `(or shift)` and that would cost us `O(n)` in the worst case, making our time complexity $O(n^2)$, but we can do better.


### Code Implementation

**Python:**

```python
class Solution(object):
    def __init__(self, nums):
        self.reset = lambda: nums
        self.shuffle = lambda: random.sample(nums, len(nums))
```

**C++:**

```c++
class Solution {
	vector<int> original;
	int n;
public:

	Solution(vector<int>& nums) {
		original = nums;
		n = original.size();
	}
	
	vector<int> reset() {
		return original;
	}
	
	vector<int> shuffle() {
			//make a copy of the original
			vector<int> shuffled = original;
			
			int leftSize = n;
			for(int i = n-1; i>=0; i--) {
				//draw from the bag
				int j = rand()%leftSize;
				
				//put this element at current position
				//and put the original element in the bag
				swap(shuffled[i], shuffled[j]);
				leftSize--;
			}
			return shuffled;
	}
	
};
```

**Java:**

```java
import java.util.Random;

public class Solution {
    private int[] nums;
    private Random random;

    public Solution(int[] nums) {
        this.nums = nums;
        random = new Random();
    }
    
    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        return nums;
    }
    
    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        if(nums == null) return null;
        int[] a = nums.clone();
        for(int j = 1; j < a.length; j++) {
            int i = random.nextInt(j + 1);
            swap(a, i, j);
        }
        return a;
    }
    
    private void swap(int[] a, int i, int j) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
}
```

