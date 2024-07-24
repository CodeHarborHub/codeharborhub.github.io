---
id: design-a-food-rating-system
title: Design a Food Rating System
sidebar_label: 2353 - Design a Food Rating System
tags:
- Hash Table
- Ordered Set
- Heap (Priority Queue)
description: "This is a solution to the Design a Food Rating System problem on LeetCode."
---

## Problem Description

Design a food rating system that can do the following:

- **Modify** the rating of a food item listed in the system.
- Return the highest-rated food item for a type of cuisine in the system.

Implement the `FoodRatings` class:

- `FoodRatings(String[] foods, String[] cuisines, int[] ratings)` Initializes the system. The food items are described by `foods`, `cuisines` and `ratings`, all of which have a length of `n`.
    - `foods[i]` is the name of the `ith` food,
    - `cuisines[i]` is the type of cuisine of the `ith` food, and
    - `ratings[i]` is the initial rating of the `ith` food.
- `void changeRating(String food, int newRating)` Changes the rating of the food item with the name food.
- `String highestRated(String cuisine)` Returns the name of the food item that has the highest rating for the given type of `cuisine`. If there is a tie, return the item with the **lexicographically smaller** name.
Note that a string `x` is lexicographically smaller than string `y` if `x` comes before y in dictionary order, that is, either `x` is a prefix of `y`, or if `i` is the first position such that `x[i] != y[i]`, then `x[i]` comes before `y[i]` in alphabetic order.

 

### Examples

**Example 1:**

```
Input
["FoodRatings", "highestRated", "highestRated", "changeRating", "highestRated", "changeRating", "highestRated"]
[[["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]], ["korean"], ["japanese"], ["sushi", 16], ["japanese"], ["ramen", 16], ["japanese"]]
Output
[null, "kimchi", "ramen", null, "sushi", null, "ramen"]
Explanation
FoodRatings foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);
foodRatings.highestRated("korean"); // return "kimchi"
                                    // "kimchi" is the highest rated korean food with a rating of 9.
foodRatings.highestRated("japanese"); // return "ramen"
                                      // "ramen" is the highest rated japanese food with a rating of 14.
foodRatings.changeRating("sushi", 16); // "sushi" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "sushi"
                                      // "sushi" is the highest rated japanese food with a rating of 16.
foodRatings.changeRating("ramen", 16); // "ramen" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "ramen"
                                      // Both "sushi" and "ramen" have a rating of 16.
                                      // However, "ramen" is lexicographically smaller than "sushi".
```

### Constraints

- $1 \leq n \leq 2 * 10^4$
- `n == foods.length == cuisines.length == ratings.length`
- `1 <= foods[i].length, cuisines[i].length <= 10`
- `foods[i], cuisines[i]` consist of lowercase English letters.
- $1 \leq ratings[i] \leq 10^8$
- All the strings in `foods` are **distinct**.
- `food` will be the name of a food item in the system across all calls to changeRating.
- `cuisine` will be a type of cuisine of **at least one** food item in the system across all calls to highestRated.
- At most $2 * 10^4$ calls in total will be made to `changeRating` and `highestRated`.

## Solution for Design a Food Rating System

### Approach : Hash Maps and Priority Queue

#### Intuition
We are given three arrays:
`foods`, containing food's names,
`cuisines`, containing the name of the cuisine of the food at the respective index in the foods array, and
`ratings`, containing the rating of the food at respective index in the `foods` array.


We have to update the food's ratings in the method `changeRating(food, newRating)`.

One way is to search for the `food` in the `foods` array and then update the rating at the respective index in the `ratings` array. However, searching for `food` in the `foods` array for every update will not be efficient.
Instead, we should keep the food names mapped with their ratings, we can use a hash map (named `foodRatingMap`) and this hash map will enable quick retrieval and modification of the respective food's rating.

To change the rating of any `food`, we simply update the rating stored in this `foodRatingMap`

![image](https://assets.leetcode.com/static_assets/media/original_images/2353/Slide1a.jpg)

Another requirement is to return the highest-rated food of a particular cuisine in the method `highestRated(cuisine)`. We are given `cuisines` and `foods` arrays, we can group and store all foods belonging to one cuisine together beforehand, this will help prevent iterating on foods that don't belong to the given cuisine.

For grouping, we can again use a hash map (named `cuisineFoodMap`) that maps cuisine names and arrays of foods belonging to that particular cuisine. This hash map will enable quick retrieval of all foods belonging to a particular cuisine.

![image](https://assets.leetcode.com/static_assets/media/original_images/2353/Slide1b.jpg)

However, retrieving the highest-rated food would require iterating over all the foods of that particular cuisine each time. If we could maintain the food in `cuisineFoodMap` arrays in a sorted order (sorted according to ratings) then it might save us some time.

You might be thinking of sorting the array using the in-built `sort()` method, but if any element of the array changes (i.e. rating of any food changes) we will have to again sort the whole array using the `sort()` method, this will make the algorithm inefficient.

**This hints that we should store the foods of a particular cuisine in a max-heap instead of an array.**

> Max-heap data structure is a complete binary tree, where the parent nodes are always bigger than the corresponding child nodes, in order to keep the maximum-valued element at the root node of the tree. Here, pushing and popping an element are both logarithmic time operations, but getting the maximum-valued element is a constant time operation.

We will use priority queues which are internally implemented using a heap. Each element of the priority queue will be an object of `class Food(integer foodRating, string foodName)`. To keep the appropriate element on the top of the priority queue we will use a custom comparator to define the logic for comparing two elements.

Since the priority queue will keep the elements sorted based on their ratings, you might be thinking: when we modify the rating of food, do we need to remove this food with the old rating from the priority queue to ensure accuracy and then add the food with the new rating?

For example, if we change the rating of food `X` from `10` to `1`, the old data `(10, X)` in the queue might become the highest-rated food, which it shouldn't be. Should we remove it in this case?

![image](https://assets.leetcode.com/static_assets/media/original_images/2353/Slide2.jpg)

First of all, searching for elements in the priority queue is a time-consuming task as in the worst case we would have to iterate over all elements stored in the priority queue.

Secondly, we can avoid the deletion of old rating elements.

If we fetch any element `(foodRating, foodName)` from the priority queue then there are only two cases: either the element has the correct `foodRating` or an old rating.
One food can only have one rating, we can verify the fetched element's `foodRating` with the rating stored in `foodRatingMap` against the key `foodName`. If the values don't match, it means the rating for `foodName` was changed and we can safely discard this fetched element of the priority queue and move on to the next highest rating in the priority queue.

![image](https://assets.leetcode.com/static_assets/media/original_images/2353/Slide3.jpg)

Also remember that while changing the rating, it is necessary to get the cuisine name of that corresponding food to push the new rating element into the appropriate priority queue. To obtain the cuisine name, we must map the food name to its respective cuisine name as well using another hash map (say `foodCuisineMap`).

![image](https://assets.leetcode.com/static_assets/media/original_images/2353/Slide4.jpg)

### Algorithm

1. Create a class `Food` containing foodRating and foodName properties, and overload less than operator method to keep the highest rated or lexicographically smaller named element on the top in the priority queue.

2. Create three hash maps:

    - `foodRatingMap`, to store ratings associated with the respective food.
    - `foodCuisineMap`, to store the cuisine name of the respective food.
    - `cuisineFoodMap`, to store `Food(foodRating, foodName)` elements in a priority queue associated with the respective cuisine.

3. Initialization. Iterate on all indices of the foods array, and for each index i:

    - Store `(foods[i], ratings[i])` and `(foods[i], cuisines[i])` key-value pairs in `foodRatingMap` and `foodCuisineMap` respectively.
    - Insert `Food(ratings[i], foods[i])` element in the priority queue of `cuisines[i]` key of cuisineFoodMap.

4. Implementing `changeRating(food, newRating)` method:

    - Update new rating in `foodRatingMap`.
    - Fetch the cuisine name for `food` from `foodCuisineMap`.
    - Insert the `Food(newRating, food)` element in the priority queue of the cuisine name in `cuisineFoodMap`.

5. Implementing `highestRated(cuisine)` method:

    - Get the top element `(i.e. highestRated)` from the priority queue of `cuisine` in `cuisineFoodMap`.
    - If the rating of the top element and the rating of the corresponding food in foodRatingMap are not the same, i.e. `highestRated.foodRating != foodRatingMap[highestRated.foodName]`, then we discard and remove the current top element and fetch the next top element from the priority queue. Repeat this step until ratings are the same.
    - Return the food name of the top element, i.e. `highestRated.foodName`.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Food {
public:
    // Store the food's rating.
    int foodRating;
    // Store the food's name.
    string foodName;

    Food(int foodRating, string foodName) {
        this->foodRating = foodRating;
        this->foodName = foodName;
    }

    // Overload the less than operator for comparison
    bool operator<(const Food& other) const {
        // If food ratings are the same sort on the basis of their name. (lexicographically smaller name food will be on top)
        if (foodRating == other.foodRating) {
            return foodName > other.foodName;
        }
        // Sort on the basis of food rating. (bigger rating food will be on top)
        return foodRating < other.foodRating;
    }
};

class FoodRatings {
    // Map food with its rating.
    unordered_map<string, int> foodRatingMap;
    // Map food with the cuisine it belongs to.
    unordered_map<string, string> foodCuisineMap;
    
    // Store all food of a cuisine in priority queue (to sort them on ratings/name)
    // Priority queue element -> Food: (foodRating, foodName)
    unordered_map<string, priority_queue<Food>> cuisineFoodMap;

public:
    FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
        for (int i = 0; i < foods.size(); ++i) {
            // Store 'rating' and 'cuisine' of current 'food' in 'foodRatingMap' and 'foodCuisineMap' maps.
            foodRatingMap[foods[i]] = ratings[i];
            foodCuisineMap[foods[i]] = cuisines[i];
            // Insert the '(rating, name)' element in current cuisine's priority queue.
            cuisineFoodMap[cuisines[i]].push(Food(ratings[i], foods[i]));
        }
    } 
    
    void changeRating(string food, int newRating) {
        // Update food's rating in 'foodRating' map.
        foodRatingMap[food] = newRating;
        // Insert the '(new rating, name)' element in respective cuisine's priority queue.
        auto cuisineName = foodCuisineMap[food];
        cuisineFoodMap[cuisineName].push(Food(newRating, food));
    }
    
    string highestRated(string cuisine) {
        // Get the highest rated 'food' of 'cuisine'.
        auto highestRated = cuisineFoodMap[cuisine].top();
        
        // If the latest rating of 'food' doesn't match the 'rating' on which it was sorted in the priority queue,
        // then we discard this element of the priority queue.
        while (foodRatingMap[highestRated.foodName] != highestRated.foodRating) {
            cuisineFoodMap[cuisine].pop();
            highestRated = cuisineFoodMap[cuisine].top();
        }
        // Return name of the highest rated 'food' of 'cuisine'.
        return highestRated.foodName;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Food implements Comparable<Food> {
    // Store the food's rating.
    public int foodRating;
    // Store the food's name.
    public String foodName;

    public Food(int foodRating, String foodName) {
        this.foodRating = foodRating;
        this.foodName = foodName;
    }

    // Implement the compareTo method for comparison
    @Override
    public int compareTo(Food other) {
        // If food ratings are the same, sort based on their names (lexicographically smaller name food will be on top)
        if (foodRating == other.foodRating) {
            return foodName.compareTo(other.foodName);
        }
        // Sort based on food rating (bigger rating food will be on top)
        return -1 * Integer.compare(foodRating, other.foodRating);
    }
}

class FoodRatings {
    // Map food with its rating.
    private Map<String, Integer> foodRatingMap;
    // Map food with the cuisine it belongs to.
    private Map<String, String> foodCuisineMap;
    
    // Store all food of a cuisine in a priority queue (to sort them on ratings/name)
    // Priority queue element -> Food: (foodRating, foodName)
    private Map<String, PriorityQueue<Food>> cuisineFoodMap;

    public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
        foodRatingMap = new HashMap<>();
        foodCuisineMap = new HashMap<>();
        cuisineFoodMap = new HashMap<>();

        for (int i = 0; i < foods.length; ++i) {
            // Store 'rating' and 'cuisine' of the current 'food' in 'foodRatingMap' and 'foodCuisineMap' maps.
            foodRatingMap.put(foods[i], ratings[i]);
            foodCuisineMap.put(foods[i], cuisines[i]);
            // Insert the '(rating, name)' element into the current cuisine's priority queue.
            cuisineFoodMap.computeIfAbsent(cuisines[i], k -> new PriorityQueue<>()).add(new Food(ratings[i], foods[i]));
        }
    } 
    
    public void changeRating(String food, int newRating) {
        // Update food's rating in the 'foodRating' map.
        foodRatingMap.put(food, newRating);
        // Insert the '(new food rating, food name)' element into the respective cuisine's priority queue.
        String cuisineName = foodCuisineMap.get(food);
        cuisineFoodMap.get(cuisineName).add(new Food(newRating, food));
    }
    
    public String highestRated(String cuisine) {
        // Get the highest rated 'food' of 'cuisine'.
        Food highestRated = cuisineFoodMap.get(cuisine).peek();
        
        // If the latest rating of 'food' doesn't match the 'rating' on which it was sorted in the priority queue,
        // then we discard this element from the priority queue.
        while (foodRatingMap.get(highestRated.foodName) != highestRated.foodRating) {
            cuisineFoodMap.get(cuisine).poll();
            highestRated = cuisineFoodMap.get(cuisine).peek();
        }
        
        // Return the name of the highest-rated 'food' of 'cuisine'.
        return highestRated.foodName;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Food:
    def __init__(self, food_rating, food_name):
        # Store the food's rating.
        self.food_rating = food_rating
        # Store the food's name.
        self.food_name = food_name

    def __lt__(self, other):
        # Overload the less-than operator for comparison.
        # If food ratings are the same, sort based on their name (lexicographically smaller name food will be on top).
        if self.food_rating == other.food_rating:
            return self.food_name < other.food_name
        # Sort based on food rating (bigger rating food will be on top).
        return self.food_rating > other.food_rating

class FoodRatings:
    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        # Map food with its rating.
        self.food_rating_map = {}
        # Map food with the cuisine it belongs to.
        self.food_cuisine_map = {}
        # Store all food of cuisine in a priority queue (to sort them on ratings/name).
        # Priority queue element -> Food: (food_rating, food_name)
        self.cuisine_food_map = defaultdict(list)

        for i in range(len(foods)):
            # Store 'rating' and 'cuisine' of the current 'food' in 'food_rating_map' and 'food_cuisine_map' maps.
            self.food_rating_map[foods[i]] = ratings[i]
            self.food_cuisine_map[foods[i]] = cuisines[i]
            # Insert the '(rating, name)' element into the current cuisine's priority queue.
            heapq.heappush(self.cuisine_food_map[cuisines[i]], Food(ratings[i], foods[i]))

    def changeRating(self, food: str, newRating: int) -> None:
        # Update food's rating in 'food_rating' map.
        self.food_rating_map[food] = newRating
        # Insert the '(new rating, name)' element in the respective cuisine's priority queue.
        cuisineName = self.food_cuisine_map[food]
        heapq.heappush(self.cuisine_food_map[cuisineName], Food(newRating, food))

    def highestRated(self, cuisine: str) -> str:
        # Get the highest rated 'food' of 'cuisine'.
        highest_rated = self.cuisine_food_map[cuisine][0]

        # If the latest rating of 'food' doesn't match with the 'rating' on which it was sorted in the priority queue,
        # then we discard this element from the priority queue.
        while self.food_rating_map[highest_rated.food_name] != highest_rated.food_rating:
            heapq.heappop(self.cuisine_food_map[cuisine])
            highest_rated = self.cuisine_food_map[cuisine][0]

        # Return the name of the highest-rated 'food' of 'cuisine'.
        return highest_rated.food_name
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(nlogn+mlog(n+m))$

> **Reason**: Initialization is $O(nlogn)$, and each of the changeRating and highestRated methods take $O(mlog(n+m))$.

### Space Complexity: $O(N)$

> **Reason**:Requires $O(n)$ space for hash maps and $O(n+m)$ space for priority queues.

## References

- **LeetCode Problem**: [Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/description/)

- **Solution Link**: [Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/solutions/)
