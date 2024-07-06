---
id: car-fleet
title: Car Fleet
sidebar_label: 853-  Car Fleet
tags:
  - Array
  - Stack
  - Sorting
description: Return the number of distinct groups of cars (car fleets) that reach the target mile together, where a fleet is formed when a faster car catches up to a slower car and they travel at the slower car's speed.
sidebar_position: 0853
---

## Problem Description

There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

You are given two integer array position and speed, both of length n, where `position[i]` is the starting mile of the ith car and `speed[i]` is the speed of the ith car in miles per hour.

A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

Return the number of car fleets that will arrive at the destination.

### Example 1

- **Input:** `target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]`
- **Output:** `3`
- **Explanation:** `The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. The fleet forms at target.
The car starting at 0 (speed 1) does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target`

### Constraints

- `n == position.length == speed.length`
- `0 <= position[i] < target`

## Approach

This approach sorts cars by their starting positions in descending order. It then uses a stack to keep track of the time each car (or fleet) takes to reach the target. If a car can catch up to the fleet in front of it (i.e., its time to reach the target is less than or equal to the fleet's time), it joins that fleet. Otherwise, it forms a new fleet. The number of distinct times in the stack represents the number of car fleets.

#### Java

```Java
class Car implements Comparable<Car>{
    int pos; 
    int speed;

    public Car(int pos, int speed){
        this.pos = pos;
        this.speed = speed;
    }

    public int compareTo(Car otherCar){
        return otherCar.pos - this.pos;
    }
}

class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        Car[] cars = new Car[position.length];
        Stack<Double> stack = new Stack<>();
        for(int i = 0; i<position.length; i++){
            cars[i] = new Car(position[i],speed[i]);
        }
        Arrays.sort(cars);
        for(Car car: cars){
            double timeToReachTar = (double)(target - car.pos) / car.speed;
            if(!stack.isEmpty() && timeToReachTar <= stack.peek()){
                continue;
            }
            stack.push(timeToReachTar);
        }
        return stack.size();
    }
}
```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(1)$.
