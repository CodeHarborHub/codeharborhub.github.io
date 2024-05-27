# Searching Techniques:

Searching is a technique that which helps to find the place of a given element. Any Search is said to be unsuccessful or successful depending upon whether the element being searched is found or not.

Majorly, Searching techniques are of two types:

 - Linear Search
 - Binary Search

# Linear Search:
Linear search is a very simple search algorithm.In this type of search, a sequential search is made over all elements one by one.Every item is checked and if match is found then it will be returned true otherwise, the search continues till the end of the data.

It has a time complexity of O(N)

## Algorithm:
Linear search(array A, value x)

`>`Step1 : Set an integer i to 1

`>`Step2: If i>n then , go to step7 (where n is the size of array)

`>`Step3: If A[i]==x then go to step6

`>`Step4: Set i to i+1

`>`Step5: go to step2

`>`Step6: Print value found at index i and go to step8

`>`Step7: Print value not found

`>`Step8: Exit

## Program:

```c
void linear_search(int a[],int n, int value){
    int i;
    for(i = 0; i < n; i++) {
      if(a[i] == value) { // compares each element of the array
         printf("The element is found at %d position\n", i+1);
            }
      printf("The element is not present in the array\n");
        }
    }
```

**Example:**
```c

    #include <stdio.h>

    int search(int array[], int n, int x) {
    
    // Going through array sequencially
    for (int i = 0; i < n; i++)
        if (array[i] == x)
        return i;
    return -1;
    }

    int main() {
    int array[] = {2, 4, 0, 1, 9};
    int x = 1;
    int n = sizeof(array) / sizeof(array[0]);

    int result = search(array, n, x);

    (result == -1) ? printf("Element not found") : printf("Element found at index: %d", result);
    }

    Output:
    Element found at index 3

```

## Apllications of Linear Search:

- Unsorted List Search: Linear search is useful when the data is not sorted. It sequentially checks each element in the list until a match is found.
- Simple Database Search: In small databases or unsorted lists, linear search can be used to find specific records.
- Linear Data Structures: Linear search is often used with linear data structures like arrays, linked lists, etc., to find a specific element.
- Debugging: Linear search can be used in debugging scenarios to find a specific value in a collection for troubleshooting purposes.

# Binary Search:

- Binary search is a search algorithm used to find the position of a target value within a sorted array.
- It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty.
- The search interval is halved by comparing the target element with the middle value of the search space.

## Algorithm:

`>`Step1: Divide the searchspace into two halves by finding the middle index
```
where , mid= (low+high)/2
low= starting index of the array
high= last index of the array
```

`>`Step2: Compare the middle element of the search space with the value

`>`Step3: If the key is found at middle element, the process is terminated

`>`Step4: If the key is not found at middle element, choose which half will be used as the next search     space
```
If the key is smaller than the middle element, then the left side is used for next search
If the key is larger than the middle element, then the right side is used for next search
```

`>`Step5: This process is continued until the key is found or the total search space is exhausted.

## Program:
```c
    int binary_search(int arr[], int left, int right, int target) {  
    while (left <= right) {  
        int mid = left + (right - left) / 2;  
  
        if (arr[mid] == target) {  
            return mid;  
        } else if (arr[mid] < target) {  
            left = mid + 1;  
        } else {  
            right = mid - 1;  
        }  
    }  
  
    return -1;  // Target not found  
    }  
```
**Example**
```c
    #include <stdio.h>  
  
    int binary_search(int arr[], int left, int right, int target) {  
        while (left <= right) {  
            int mid = left + (right - left) / 2;  
    
            if (arr[mid] == target) {  
                return mid;  
            } else if (arr[mid] < target) {  
                left = mid + 1;  
            } else {  
                right = mid - 1;  
            }  
        }  
    
        return -1;  // Target not found  
    }  
    
    int main() {  
        int arr[] = {1, 3, 5, 7, 9};  
        int n = sizeof(arr) / sizeof(arr[0]);  
        int target = 5;  
    
        int index = binary_search(arr, 0, n - 1, target);  
    
        if (index == -1) {  
            printf("Target not found\n");  
        } else {  
            printf("Target found at index %d\n", index);  
        }  
    
        return 0;  
    }  


    Output:
    Target found at index 2
```


## Applications of Binary Search:
- Sorted List Search: Binary search is efficient for searching in sorted arrays or lists. It relies on the property that the elements are in sorted order.
- Searching in Databases: Binary search is commonly used in databases for searching indexes or sorted data sets.
- Searching in Trees: Binary search can be applied to binary search trees for efficient searching of elements.
- Performance-Critical Applications: Binary search is preferred in performance-critical applications due to its time complexity of O(log n), where n is the number of elements in the collection.