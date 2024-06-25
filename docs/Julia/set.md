---
id: set-julia
title: Set
sidebar_label: Julia Set
sidebar_position: 7
tags: [Julia, Set, Methods of Set]
---

In Julia, a `Set` is a collection of unique elements where each element can only appear once within the set. Sets are useful when you need to store a collection of items without duplicates and perform operations such as membership testing and set operations (like union, intersection, etc.).

### Creating Sets

You can create a set in Julia using curly braces `{}` and separating elements with commas. Let's create a set with some integers and strings:

```julia
# Creating a set of integers
int_set = Set([1, 2, 3, 4, 5, 2, 3])  # Duplicate elements are automatically removed
println("Integer Set: ", int_set)

# Creating a set of strings
str_set = Set(["apple", "banana", "orange", "banana"])  # Duplicate "banana" is removed
println("String Set: ", str_set)
```

**Output:**
```julia
Integer Set: Set([4, 2, 3, 5, 1])
String Set: Set(["orange", "apple", "banana"])
```

### Operations on Sets

#### Membership Testing
You can check if an element is present in a set using the `in` operator:

```julia
fruit_set = Set(["apple", "banana", "orange"])

println("Is 'apple' in fruit_set? ", "apple" in fruit_set)
println("Is 'grape' in fruit_set? ", "grape" in fruit_set)
```

**Output:**
```julia
Is 'apple' in fruit_set? true
Is 'grape' in fruit_set? false
```


In Julia, a `Set` is a collection type that stores unique elements, where each element can only appear once within the set. Sets are useful when you need to ensure uniqueness of elements and perform operations like membership testing, union, intersection, and difference efficiently.

### Methods and Functions for Sets in Julia

#### 1. **Adding and Removing Elements**

Sets in Julia are mutable, which means you can modify them by adding or removing elements.

- **Adding elements**: Use the `push!()` function to add an element to a set.

```julia
fruits = Set(["apple", "banana", "orange"])
push!(fruits, "grape")
```

- **Removing elements**: Use the `pop!()` function to remove an element from a set.

```julia
pop!(fruits, "banana")
```

#### 2. **Set Operations**

Julia provides various functions for set operations. These functions can be called directly on sets or by using the infix operators `∪`, `∩`, and `-`.

- **Union**: Combines elements from two sets, removing duplicates.

```julia
set1 = Set([1, 2, 3])
set2 = Set([3, 4, 5])

union_set = union(set1, set2)
```

Alternatively, using infix operator:

```julia
union_set = set1 ∪ set2
```

- **Intersection**: Finds common elements between two sets.

```julia
intersection_set = intersect(set1, set2)
```

Alternatively, using infix operator:

```julia
intersection_set = set1 ∩ set2
```

- **Difference**: Finds elements in one set but not in another.

```julia
difference_set = setdiff(set1, set2)
```

#### 3. **Membership Testing**

You can check if an element is present in a set using the `in` keyword or the `in()` function.

```julia
fruits = Set(["apple", "banana", "orange"])

if "apple" in fruits
    println("Apple is in the set!")
end
```

#### 4. **Set Comparisons**

You can compare sets using `==` and `isequal()` functions to check if two sets contain the same elements.

```julia
set1 = Set([1, 2, 3])
set2 = Set([3, 2, 1])

println(set1 == set2)  # true
println(isequal(set1, set2))  # true
```

#### 5. **Set Size and Emptiness**

You can get the number of elements in a set using `length()` function and check if a set is empty using `isempty()` function.

```julia
println(length(set1))
println(isempty(set1))
```

### Example

```julia
set1 = Set([1, 2, 3, 4])
set2 = Set([3, 4, 5, 6])

println("Set 1: ", set1)
println("Set 2: ", set2)

union_set = set1 ∪ set2
println("Union: ", union_set)

intersection_set = set1 ∩ set2
println("Intersection: ", intersection_set)

difference_set = setdiff(set1, set2)
println("Difference (Set 1 - Set 2): ", difference_set)

push!(set1, 5)
println("After adding 5 to Set 1: ", set1)

pop!(set2, 4)
println("After removing 4 from Set 2: ", set2)

println("Is 3 in Set 1? ", 3 in set1)
println("Is 7 in Set 2? ", 7 in set2)

println("Length of Set 1: ", length(set1))
println("Is Set 2 empty? ", isempty(set2))
```

**Output:**
```julia
Set 1: Set([4, 2, 3, 1])
Set 2: Set([4, 3, 5, 6])
Union: Set([4, 2, 3, 5, 6, 1])
Intersection: Set([4, 3])
Difference (Set 1 - Set 2): Set([2, 1])
After adding 5 to Set 1: Set([4, 2, 3, 5, 1])
After removing 4 from Set 2: Set([3, 5, 6])
Is 3 in Set 1? true
Is 7 in Set 2? false
Length of Set 1: 5
Is Set 2 empty? false
```


### Conclusion

Sets in Julia are versatile data structures for managing unique collections of elements. They offer efficient membership testing and set operations, making them suitable for various computational tasks where uniqueness and set operations are key requirements.