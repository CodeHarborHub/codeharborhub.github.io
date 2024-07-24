---
id: walking-robot-simulation-ii
title: Walking Robot Simulation II
sidebar_label: 2069 - Walking Robot Simulation II
tags: [Simulation, Grid, Robot, C++]
description: Implement a walking robot simulation on a grid where the robot moves forward, turns, and follows specific instructions.

---

## Problem Statement

### Problem Description

A width x height grid is on an XY-plane with the bottom-left cell at (0, 0) and the top-right cell at (width - 1, height - 1). The grid is aligned with the four cardinal directions ("North", "East", "South", and "West"). A robot is initially at cell (0, 0) facing direction "East".

The robot can be instructed to move for a specific number of steps. For each step, it does the following:
- Attempts to move forward one cell in the direction it is facing.
- If the cell the robot is moving to is out of bounds, the robot instead turns 90 degrees counterclockwise and retries the step.

After the robot finishes moving the number of steps required, it stops and awaits the next instruction.

Implement the `Robot` class:

- `Robot(int width, int height)`: Initializes the width x height grid with the robot at (0, 0) facing "East".
- `void step(int num)`: Instructs the robot to move forward num steps.
- `int[] getPos()`: Returns the current cell the robot is at, as an array of length 2, `[x, y]`.
- `String getDir()`: Returns the current direction of the robot, "North", "East", "South", or "West".

### Example

**Example 1:**

```
Input:
["Robot", "step", "step", "getPos", "getDir", "step", "step", "step", "getPos", "getDir"]
[[6, 3], [2], [2], [], [], [2], [1], [4], [], []]

Output:
[null, null, null, [4, 0], "East", null, null, null, [1, 2], "West"]
```
**Explanation:**

Robot robot = new Robot(6, 3); // Initialize the grid and the robot at (0, 0) facing East.

robot.step(2); // It moves two steps East to (2, 0), and faces East.

robot.step(2); // It moves two steps East to (4, 0), and faces East.

robot.getPos(); // return [4,0]

robot.getDir(); // return "East"

robot.step(2); // It moves one step East to (5, 0), and faces East.

// Moving the next step East would be out of bounds, so it turns and faces North.

// Then, it moves one step North to (5, 1), and faces North.

robot.step(1); // It moves one step North to (5, 2), and faces North (not West).

robot.step(4); // Moving the next step North would be out of bounds, so it turns and faces West.

// Then, it moves four steps West to (1, 2), and faces West.

robot.getPos(); // return [1, 2]

robot.getDir(); // return "West"


### Constraints

- `2 <= width, height <= 100`
- `1 <= num <= 10^5`
- At most `10^4` calls in total will be made to `step`, `getPos`, and `getDir`.

## Solution

### Intuition 

- Calculating perimeter with given height and width.
- Using the modulo operator to quickly compute the position and direction the robot stops.
- Note: if the robot moves, its direction for [0, 0] will be South, while it starts at [0, 0] facing East.


### Time Complexity and Space Complexity Analysis

- **Initialization**:
  - The `Robot` constructor initializes the grid dimensions and sets the starting position and direction of the robot. This involves a few assignments and does not depend on the size of the input grid. Therefore, the time complexity is O(1).

- **Step Method**:
  - The `step` method updates the robot's position and direction based on the given number of steps.
  - The key operation is the modulo operation `count = (count + num) % (2 * (w + h - 2))`. This operation helps in managing large numbers of steps efficiently by reducing the problem to a smaller equivalent number of steps, as the robot will be back to the starting position after every full lap around the grid. The modulo operation is O(1).
  - Depending on the value of `count`, the method calculates the new position and direction using simple arithmetic operations and conditional checks. These calculations do not involve any loops or recursive calls and thus take constant time, O(1).

- **Get Methods**:
  - Both `getPos` and `getDir` methods simply return the current position and direction of the robot, which are stored in instance variables. These operations involve accessing and returning stored values, making them O(1).

- **Overall Time Complexity**:
  - The overall time complexity for each method (`Robot` constructor, `step`, `getPos`, and `getDir`) in the `Robot` class is O(1). This means that the time taken by these methods does not depend on the size of the input grid or the number of steps.

#### Space Complexity Analysis

- **Instance Variables**:
  - The `Robot` class maintains a few instance variables: `w`, `h`, `idx`, `count`, `pos`, `dir`, and `dir_str`. These variables store the dimensions of the grid, the current direction index, the count of steps taken, the current position, and the predefined directions and their string representations.
  - The space required to store these variables is constant and does not depend on the input size. The arrays `dir` and `dir_str` have fixed sizes, and other variables are single integers or arrays of fixed length.

- **Auxiliary Space**:
  - The methods `step`, `getPos`, and `getDir` do not use any additional space that grows with the input size. All computations and storage are done using the instance variables.

- **Overall Space Complexity**:
  - The overall space complexity of the `Robot` class is O(1). This means that the space required by the class does not depend on the size of the input grid or the number of steps.


- **Time Complexity**: O(1) for each method.
- **Space Complexity**: O(1) for the entire class.

### Code

#### C++
```cpp
class Robot {
public:
    vector<vector<int>> dir = {{1,0},{0,1},{-1,0},{0,-1}};
    vector<string> dir_str = {"East","North","West","South"};
    vector<int> pos = {0,0};
    int w, h, idx=0, count=0;

    Robot(int width, int height) {
        w = width;
        h = height;
    }
    
    void step(int num) {
        count = (count + num) % (2 * (w + h - 2));
        
        if (count >= 0 && count < w) {
            pos = {count, 0};
            idx = count == 0 ? 3 : 0;
        } else if (count >= w && count < w + h - 1) {
            pos = {w - 1, count - w + 1};
            idx = 1;
        } else if (count >= w + h - 1 && count < 2 * w + h - 2) {
            pos = {2 * w + h - count - 3, h - 1};
            idx = 2;
        } else {
            pos = {0, 2 * h + 2 * w - count - 4};
            idx = 3;
        }
    }
    
    vector<int> getPos() {
        return pos;
    }
    
    string getDir() {
        return dir_str[idx];
    }
};
```
