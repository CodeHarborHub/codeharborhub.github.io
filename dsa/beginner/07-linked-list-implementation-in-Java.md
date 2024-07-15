---
id: 07-linked-lists-in-Java
title: Linked List implementation in Java
sidebar_label: Linked Lists in Java
tags:
  - dsa
  - data-structures
  - linked-lists
  - beginner
  - java
  - programming
  - tutorial
sidebar_position: 7
---

## Introduction: 
In this tutorial, we will learn how to implement Linked List data structure in Java without using built-in data structures. We will cover operations such as creation, insertion, deletion and display.

## Arrays v/s Linked List
Why do we need linked list, even though we can use arrays?

- Arrays are contiguous in memory (elements are stored sequentially) whereas linked lists are not.
- Arrays are static data structure i.e. they have a fixed size. Linked lists, on the other hand are dynamic in nature; they can grow and shrink, making them memory efficient. 
- Arrays are preffered for operations such as searching as they allow direct access to elements. 
- Linked list are preffered for operations like insertion and deletion and when memory is a concern. 

## Uses of Linked List
- Music playlist.
- Web Browsers.
- For implementing other data structures.

## Implementation: 

Now, we'll implement a singly linked list in Java from scratch.<br /> You may wonder, why should we implement it from scratch instead of using the in built data structure? Well,this way we can customise the data structure! We can add new operations to suit our specific requirements.It also helps us to develop a deeper understanding of how the data structure works.

## **Code:**

```java
package ll;
import java.util.*;

class node{
	
int data;
node next;

node(int data){
this.data=data;
next=null;
}
}

class linkedlist{
	Scanner sc=new Scanner(System.in);
	node head;
	node ptr;
	
	linkedlist(){
		//initially linked list is null
		head=null;
	}
	
	public void add_nodes() {
		//adds 'n' number of nodes
		int flag=0;
		do{
		System.out.println("Enter data: ");
		int data=sc.nextInt();
		node newnode=new node(data);
		if(head==null) {
			head=newnode;
		}
		else {
			ptr=head;
			while(ptr.next!=null) {
				ptr=ptr.next;
			}
			ptr.next=newnode;
		}
		int temp=0;
			do {
				System.out.println("Do you want to add another node?\n 1.Yes\n 2.No");
				int ans=sc.nextInt();
				if(ans!=1 && ans!=2) {
					System.out.println("Enter valid option!");
				}
				else {
					if(ans==2) {
						flag=1;
					}
				    temp=1;
				}
			}while(temp==0);
		}while(flag==0);
		}
	
	public void display() {
		//displays the content of linked list
		if(head==null) {
			System.out.println("Linked List is empty !");
			return;
		}
		ptr=head;
		while(ptr!=null) {
			if(ptr==head) {
				System.out.print(ptr.data);
			}
			else {
			System.out.print(" -> "+ptr.data);
			}
			ptr=ptr.next;
		}
		
	}

	int calculate_length() {
		//returns length of linked list
		int count=0;
		if(head==null) {
			return count;
		}
		ptr=head;
		while(ptr!=null) {
			ptr=ptr.next;
			count++;
		}
		return count;
	}
	
	
	public void insert() {
		//accept data for new node
		System.out.println("Enter data: ");
		int data=sc.nextInt();
		node newnode=new node(data);
		
		//accept position to insert new node
		System.out.println("Enter position to insert the new node:");
		int pos=sc.nextInt();
		int len=calculate_length();
		if(pos<1 || pos>(len+1)) {
			//negative index or position greater that size of linked list
			//if pos==(len+1), attach to end of linkedlist
			System.out.println("Cannot insert at position "+pos);
			return;
		}
		
		if(head==null && pos==1) {
			//1st node
			head=newnode;
			System.out.println("Inserted node sucessfully!");
			return;
		}
		
		if(pos==(len+1)) {
			//insert at last node
			ptr=head;
			while(ptr.next!=null) {
				ptr=ptr.next;
			}
			ptr.next=newnode;
			System.out.println("Inserted node sucessfully!");
			return;
		}
		
		ptr=head;
		node prev=ptr;
		for(int i=1;i<pos;i++) {
			prev=ptr;
			ptr=ptr.next;
		}
		prev.next=newnode;
		newnode.next=ptr;
		System.out.println("Inserted node sucessfully!");
	}

	public void delete() {
		System.out.println("Enter data to be deleted");
		int target=sc.nextInt();
		if(head==null) {
			System.out.println("Linked list is Empty!");
			return;
		}
		ptr=head;
		node prev=ptr;
		while(ptr!=null) {
			if(ptr.data==target) {
				if(ptr==head) {
					head=head.next;
				}
				else {
				prev.next=ptr.next;
				System.out.println("Deleted node successfully!");
				}
				return;
			}
			prev=ptr;
			ptr=ptr.next;
		}
		System.out.println("Data not found!");
	}
}
public class Main {
public static void main(String args[]) {
	Scanner sc=new Scanner(System.in);
	linkedlist ll=new linkedlist();
	int z=0;
	do {
		System.out.println("\nEnter option:\n 1.Add nodes\n 2.Display Linked List\n 3.Insert node\n 4.Delete node\n 5.Exit");
		int choice=sc.nextInt();
		switch(choice) {
		case 1:{
			ll.add_nodes();
			break;
		}
		case 2:{
			ll.display();
			break;
		}
		case 3:{
			ll.insert();
			break;
		}
		case 4:{
			ll.delete();
			break;
		}
		case 5:{
			System.exit(0);
		}
		default:{
			System.out.println("Enter valid option!");
		}
		}
	}while(z==0);
	
}
}

```

## **Sample output:**

```java
Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
2
Linked List is empty !

Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
1
Enter data: 
1
Do you want to add another node?
 1.Yes
 2.No
5
Enter valid option!
Do you want to add another node?
 1.Yes
 2.No
1
Enter data: 
2
Do you want to add another node?
 1.Yes
 2.No
1
Enter data: 
3
Do you want to add another node?
 1.Yes
 2.No
2

Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
2
1 -> 2 -> 3
Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
3
Enter data: 
5
Enter position to insert the new node:
4
Inserted node sucessfully!

Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
3
Enter data: 
4
Enter position to insert the new node:
4
Inserted node sucessfully!

Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
2
1 -> 2 -> 3 -> 4 -> 5
Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
4
Enter data to be deleted
25
Data not found!

Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
4
Enter data to be deleted
4
Deleted node successfully!

Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
2
1 -> 2 -> 3 -> 5
Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
8
Enter valid option!

Enter option:
 1.Add nodes
 2.Display Linked List
 3.Insert node
 4.Delete node
 5.Exit
5
```
## Conclusion:
In this tutorial, we learnt about the use of the linked list data structure.We also learnt how to implement it from scratch in Java programming language and how doing so can be beneficial. 

