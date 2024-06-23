---
id: matlab-syntax
title: Syntax
sidebar_label: MATLAB Syntax
sidebar_position: 2
tags: [MATLAB, Syntax]
description: In this tutorial, you will learn about Syntax in MATLAB.
---


MATLAB environment behaves like a super-complex calculator. You can enter commands at the >> command prompt.

>7/0		      % Divide by zero

Output
>ans = Inf
warning: division by zero

**NOTES**: MATLAB provides some special expressions for some mathematical symbols, like pi for π, Inf for ∞, i (and j) for √-1 etc. Nan stands for 'not a number'

### Use of Semicolon
Semicolon (;) indicates end of statement. However, if you want to suppress and hide the MATLAB output for an expression, add a semicolon after the expression.

Example
```matlab
x = 3;
y = x + 5
```
Output
```
y =  8
```

### Adding Comments
The percent symbol (%) is used for indicating a comment line.

Example
>x = 9	     % assign the value 9 to x

### Commonly used Operators and Special Characters
MATLAB supports the following commonly used operators and special characters 

| Operator 	|                                       Purpose                                      	|
|:--------:	|:----------------------------------------------------------------------------------:	|
|     +    	| Plus; addition operator.                                                           	|
|     -    	| Minus; subtraction operator.                                                       	|
|     *    	| Scalar and matrix multiplication operator.                                         	|
|    .*    	| Array multiplication operator.                                                     	|
|     ^    	| Scalar and matrix exponentiation operator.                                         	|
|    .^    	| Array exponentiation operator.                                                     	|
|     \    	| Left-division operator.                                                            	|
|     /    	| Right-division operator.                                                           	|
|    .\    	| Array left-division operator.                                                      	|
|    ./    	| Array right-division operator.                                                     	|
|     :    	| Colon; generates regularly spaced elements and represents an entire row or column. 	|
|    ( )   	| Parentheses; encloses function arguments and array indices; overrides precedence.  	|
|    [ ]   	| Brackets; enclosures array elements.                                               	|
|     .    	| Decimal point.                                                                     	|
|     …    	| Ellipsis; line-continuation operator                                               	|
|     ,    	| Comma; separates statements and elements in a row                                  	|
|     ;    	| Semicolon; separates columns and suppresses display.                               	|
|     %    	| Percent sign; designates a comment and specifies formatting.                       	|
|     _    	| Quote sign and transpose operator.                                                 	|
|    ._    	| Nonconjugated transpose operator.                                                  	|
|     =    	| Assignment operator.                                                               	|

### Saving Your Work
The save command is used for saving all the variables in the workspace, as a file with .mat extension, in the current directory.

Example
```matlab
save myfile
```
You can reload the file anytime later using the load command.
```
load myfile
```
