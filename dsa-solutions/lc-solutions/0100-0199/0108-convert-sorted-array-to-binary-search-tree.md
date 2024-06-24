---
id: convert-sorted-array-to-binary-search-tree
title: Convert Sorted Array to Binary Search Tree
sidebar_label: 0108-convert-sorted-array-to-binary-search-tree
tags:
  - Array
  - Binary search tree
  - Divide and Conquer
  - Tree
  - Binary Tree
description: "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree."
---


### Problem Description

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 
### Examples

#### Example 1

- **Input:** ` nums = [-10,-3,0,5,9]`
- **Output:** `[0,-3,9,-10,null,5]`

#### Example 2

- **Input:** ` nums = [1,3]`
- **Output:** `[3,1]`

### Constraints

- $1 \leq \text{nums.length} \leq 10^4$
- $-10^4 \leq \text{nums}[i] \leq 10^4$
- nums is sorted in a strictly increasing order

### Solution Code

#### Python

```python
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        total_nums = len(nums)
        if not total_nums:
            return None

        mid_node = total_nums // 2
        return TreeNode(
            nums[mid_node], 
            self.sortedArrayToBST(nums[:mid_node]), self.sortedArrayToBST(nums[mid_node + 1 :])
        )
```

#### Java

```java
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        int n=nums.length;
        if (n ==0) return null;
        if (n ==1) {
            TreeNode head = new TreeNode(nums[0]);
            return head;
        }

        TreeNode head = buildBST(nums,0,n-1);
        return head;
    }
    private TreeNode buildBST (int [] nums, int low, int high){
        if(low>high) return null;

        int mid =low+(high-low)/2;
        TreeNode node = new TreeNode(nums[mid]);
        node.left =buildBST(nums,low,mid-1);
        node.right =buildBST(nums,mid+1,high);
        return node;
    }
}
```

#### C++

```cpp
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return constructBSTRecursive(nums, 0, nums.size() - 1);
    }

    TreeNode* constructBSTRecursive(vector<int>& nums, int left, int right) {
        if(left > right)
            return NULL;
        int mid = left + (right - left) / 2;
        TreeNode* node = new TreeNode(nums[mid]);
        node->left = constructBSTRecursive(nums, left, mid - 1);
        node->right = constructBSTRecursive(nums, mid + 1, right);
        return node;
    }
};
```
#### Javascript

```javascript
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};
```