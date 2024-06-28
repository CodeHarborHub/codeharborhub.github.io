---
id: dictionary-julia
title: Dictionary
sidebar_label: Julia Dictionary
sidebar_position: 8
tags: [Julia,Dictionary]

---
Dictionary is a built-in data structure that allows you to associate keys with corresponding values. It is similar to a hash table or hash map in other programming languages. Dictionaries are particularly useful when you need to store and retrieve data quickly based on some unique identifier (the key).

### Creating a Dictionary

You can create a dictionary in Julia using curly braces `{}` and specifying key-value pairs separated by `=>` (called a pair constructor). Here’s how you can create a dictionary:

```julia
# Creating a dictionary with city names as keys and their populations as values
city_populations = Dict("New York" => 8336817, "Los Angeles" => 3979576, "Chicago" => 2693976)
```
Certainly! Here's an additional important note about dictionaries in Julia:

###  Dictionary Keys and Types

In Julia, keys in a dictionary must be of a type that is both **hashable** and **immutable**. This requirement ensures that dictionaries can efficiently manage and retrieve values based on their keys. 

#### Hashable and Immutable Keys:

1. **Hashable**: This means that the type of the key must have a stable and consistent way to compute its hash value. Most built-in types in Julia, such as `Int`, `String`, `Symbol`, and `Tuple` (if their elements are hashable), are hashable by default.

   Example of hashable types:
   - `Int`
   - `String`
   - `Symbol`
   - `Tuple` (if elements are hashable)

2. **Immutable**: Once a key is placed in a dictionary, its value should not be able to change. This ensures that the hash value remains consistent. Immutable types in Julia include basic types like `Int`, `Float64`, `String`, and `Tuple`.

   Example of immutable types:
   - `Int`
   - `Float64`
   - `String`
   - `Tuple`

#### Example 

Some types in Julia are mutable or do not have a stable hash computation, making them unsuitable as dictionary keys:

- `Array`: Arrays are mutable and can change their contents, so they cannot be used as dictionary keys.
- `Dict`: Dictionaries themselves cannot be keys in other dictionaries due to mutability.
- Custom mutable types: If you define a custom type that is mutable, you need to ensure it implements proper hashing methods (`hash()` function) for it to be used as a dictionary key.

#### Example 

Here’s an example illustrating the use of types as dictionary keys:

```julia
# Valid keys
dict_valid = Dict(1 => "One", "two" => 2.0, (3, "three") => "Tuple key")

# Invalid keys (will throw an error)
dict_invalid = Dict([1, 2, 3] => "Array key")
```

In this example:
- `1`, `"two"`, and `(3, "three")` are valid keys because they are of types that are hashable and immutable.
- `[1, 2, 3]` is an invalid key because arrays are mutable in Julia.

### Accessing Values in a Dictionary

To access a value in the dictionary, you use square brackets `[]` with the key:

```julia
println(city_populations["New York"])  # Output: 8336817
```

If the key doesn't exist in the dictionary, Julia will throw a `KeyError`.

### Adding and Modifying Entries

You can add new entries or modify existing ones in a dictionary using the same square bracket notation:

```julia
city_populations["Houston"] = 2320268  # Adding a new entry
city_populations["Chicago"] = 2716000  # Modifying an existing entry
```

### Removing Entries

To remove an entry from a dictionary, use the `delete!()` function:

```julia
delete!(city_populations, "Los Angeles")
```

### Checking Key Existence

You can check if a key exists in a dictionary using the `haskey()` function:

```julia
if haskey(city_populations, "New York")
    println("New York is in the dictionary.")
end
```

### Iterating Over a Dictionary

You can iterate over all key-value pairs in a dictionary using a `for` loop:

```julia
for (city, population) in city_populations
    println("$city has a population of $population")
end
```

### Dictionary Methods

Julia provides several useful functions to work with dictionaries:

- `keys(dict)`: Returns an iterator over the keys of the dictionary.
- `values(dict)`: Returns an iterator over the values of the dictionary.
- `isempty(dict)`: Returns `true` if the dictionary is empty, `false` otherwise.
- `merge!(dict1, dict2)`: Merges `dict2` into `dict1`, modifying `dict1`.

### Example Code and Output

Here’s a complete example demonstrating the use of dictionaries in Julia:

```julia
# Creating a dictionary
city_populations = Dict("New York" => 8336817, "Los Angeles" => 3979576, "Chicago" => 2693976)

# Accessing a value
println(city_populations["New York"])  # Output: 8336817

# Adding a new entry
city_populations["Houston"] = 2320268

# Modifying an existing entry
city_populations["Chicago"] = 2716000

# Removing an entry
delete!(city_populations, "Los Angeles")

# Iterating over the dictionary
for (city, population) in city_populations
    println("$city has a population of $population")
end

# Checking key existence
if haskey(city_populations, "New York")
    println("New York is in the dictionary.")
end
```

#### Output:
```
New York has a population of 8336817
Chicago has a population of 2716000
Houston has a population of 2320268
New York is in the dictionary.
```

### Conclusion 
 Dictionary data structure in Julia offers a powerful mechanism for associating keys with corresponding values, akin to hash maps or associative arrays in other languages. It allows for efficient storage and retrieval of data pairs, accommodating keys of any immutable type and values of any type. Operations like insertion, deletion, and updating of entries are straightforward and optimized for performance. Iteration over keys and values, along with methods for checking existence and merging dictionaries, further enhance its utility. Overall, Dictionary in Julia is indispensable for managing and manipulating structured data, providing flexibility and efficiency in various programming contexts. Its versatility makes it well-suited for tasks ranging from simple data mappings to complex data aggregation and manipulation operations.