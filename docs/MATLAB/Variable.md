---
id: MATLAB Variable
title: Variable
sidebar_label: MATLAB Variable
sidebar_position: 3
tags: [MATLAB, Variable]
description: In this tutorial, you will learn about Variable in MATLAB.Variables in MATLAB are used to store data values that can be referenced and manipulated in a program. 
---

#   MATLAB Variables 
Variables in MATLAB are used to store data values that can be referenced and manipulated in a program. 

## Creating Variables
Variables in MATLAB are created by simply assigning a value to a variable name. The assignment operator in MATLAB is the equal sign (=).

```
x = 10;        % Assigning the value 10 to the variable x
y = 3.14;      % Assigning the value 3.14 to the variable y
z = 'Hello';   % Assigning the string 'Hello' to the variable 
```

## Variable Naming Rules
1. **Start with a letter**: Variable names must start with a letter.
2. **Can contain letters, digits, and underscores**: After the first letter, variable names can include letters, digits, and underscores.
3. **Case-sensitive**: MATLAB variable names are case-sensitive (Var and var are different variables).
4. **Reserved keywords**: Avoid using MATLAB keywords as variable names (e.g., if, end, function).

### Multiple Assignments

You can have multiple assignments on the same line. 

Example
```
a = 2; b = 7; c = a * b
Output
```
```
c = 14
```
### Workspace and Managing Variables
The MATLAB workspace stores all variables created during a session. You can manage variables using various commands:

-who: Lists all variables in the workspace
-whos: Provides detailed information about each variable
-clear: Removes variables from the workspace
-clearvars: Removes specific variables from the workspace
```
who          % List all variables
whos         % List all variables with details
clear x      % Clear variable x
clearvars a b  % Clear variables a and b
```

### The format Command
The *format long* command displays 16 digits after decimal.
Example 
```
format long
x = 7 + 10/3 + 5 ^ 1.2
```
Output
```
x = 17.2319816406394
```

The *format short e* command allows displaying in exponential form with four decimal places plus the exponent.
Example 
```
format short e
4.678 * 4.9
```
Output
```
ans = 2.2922e+01
```

The *format rat* command gives the closest rational expression resulting from a calculation
Example 
```
format rat
4.678 * 4.9
```
Output
```
ans = 34177/1491 
```

### Saving and Loading Variables
Variables can be saved to and loaded from .mat files using the save and load commands.

```
save('myfile.mat', 'x', 'y');  % Save variables x and y to myfile.mat
load('myfile.mat');            % Load variables from myfile.mat into the workspace
```

### Conclusion
Understanding how to create, use, and manage variables in MATLAB is essential for effective programming and data manipulation. With this knowledge, you can perform a wide range of tasks, from simple calculations to complex data analysis and visualization.