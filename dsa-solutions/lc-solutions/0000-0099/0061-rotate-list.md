---
id: rotate-list
title: Rotate List (LeetCode)
sidebar_label: 0061-rotate-list
tags:
    - Linked List
    - Two Pointers
description: "The rotate list is the problem to rotate the list to the right by k places."
---

### Problem Description

Given the `head` of a linked list, rotate the list to the right by `k` places.

### Examples

#### Example 1

```plaintext
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```

#### Example 2

```plaintext
Input: head = [0,1,2], k = 4
Output: [2,0,1]
```

### Constraints

- The number of nodes in the list is in the range `[0, 500]`.
- `-100 <= Node.val <= 100`
- `0 <= k <= 2 * 109`

### Approach

Brute Force Approach : We have to move the last element to first for each k.
For each k, find the last element from the list. Move it to the first.

Let’s take an example. 

head = [1,2,3,4,5] k = 2000000000

If we see a brute force approach, it will take O(5*2000000000) which is not a good time complexity when we can optimize it.

We can see that for every k which is multiple of the length of the list, we get back the original list. Try to operate brute force on any linked list for k as a multiple of the length of the list.

This gives us a hint that for k greater than the length of the list, we have to rotate the list for k%length of the list. This reduces our time complexity.

Steps to the algorithm:-

1. Calculate the length of the list.
2. Connect the last node to the first node, converting it to a circular linked list.
3. Iterate to cut the link of the last node and start a node of k%length of the list rotated list.

### Solution Code

#### Python

```
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

# utility function to insert node at the end of the linked list
def insertNode(head, val):
    newNode = Node(val)
    if head == None:
        head = newNode
        return head
    temp = head
    while temp.next != None:
        temp = temp.next
    temp.next = newNode
    return head

# utility function to rotate list by k times
def rotateRight(head, k):
    if head == None or head.next == None or k == 0:
        return head
    # calculating length
    temp = head
    length = 1
    while temp.next != None:
        length += 1
        temp = temp.next
    # link last node to first node
    temp.next = head
    k = k % length  # when k is more than length of list
    end = length - k  # to get end of the list
    while end:
        temp = temp.next
        end -= 1
    # breaking last node link and pointing to NULL
    head = temp.next
    temp.next = None

    return head

# utility function to print list
def printList(head):
    while head.next != None:
        print(head.val, end='->')
        head = head.next
    print(head.val)
    return

if __name__ == '__main__':
    head = None
    # inserting Node
    head = insertNode(head, 1)
    head = insertNode(head, 2)
    head = insertNode(head, 3)
    head = insertNode(head, 4)
    head = insertNode(head, 5)

    print("Original list: ", end='')
    printList(head)

    k = 2
    # calling function for rotating right of the nodes by k times
    newHead = rotateRight(head, k)

    print("After", k, "iterations: ", end='')
    printList(newHead)  # list after rotating nodes
```

#### Java
```
//utility function to insert node at the end of the list
static Node insertNode(Node head,int val) {
    Node newNode = new Node(val);
    if(head == null) {
        head = newNode;
        return head;
    }
    Node temp = head;
    while(temp.next != null) temp = temp.next;
    
    temp.next = newNode;
    return head;
}
//utility function to rotate list by k times
static Node rotateRight(Node head,int k) {
    if(head == null||head.next == null||k == 0) return head;
    //calculating length
    Node temp = head;
    int length = 1;
    while(temp.next != null) {
        ++length;
        temp = temp.next;
    }
    //link last node to first node
    temp.next = head;
    k = k%length; //when k is more than length of list
    int end = length-k; //to get end of the list
    while(end--!=0) temp = temp.next;
    //breaking last node link and pointing to NULL
    head = temp.next;
    temp.next = null;
        
    return head;
}

//utility function to print list
static void printList(Node head) {
    while(head.next != null) {
        System.out.print(head.num+"->");
        head = head.next;
    } 
    System.out.println(head.num);
    
}
```

#### C++
```
//utility function to insert node at the end of the list
void insertNode(node* &head,int val) {
    node* newNode = new node(val);
    if(head == NULL) {
        head = newNode;
        return;
    }
    node* temp = head;
    while(temp->next != NULL) temp = temp->next;
    
    temp->next = newNode;
    return;
}
//utility function to rotate list by k times
node* rotateRight(node* head,int k) {
    if(head == NULL||head->next == NULL||k == 0) return head;
    //calculating length
    node* temp = head;
    int length = 1;
    while(temp->next != NULL) {
        ++length;
        temp = temp->next;
    }
    //link last node to first node
    temp->next = head;
    k = k%length; //when k is more than length of list
    int end = length-k; //to get end of the list
    while(end--) temp = temp->next;
    //breaking last node link and pointing to NULL
    head = temp->next;
    temp->next = NULL;
        
    return head;
}

//utility function to print list
void printList(node* head) {
    while(head->next != NULL) {
        cout<<head->num<<"->";
        head = head->next;
    } 
    cout<<head->num<<endl;
    return;
}
```

## Complexity Analysis :

- Time complexity: O(length of list) + O(length of list - (length of list%k))

- Space complexity: O(1)
