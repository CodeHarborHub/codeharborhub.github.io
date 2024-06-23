---
id: matlab-polynomials
title: Polynomials
sidebar_label: MATLAB Polynomials
sidebar_position: 2
tags: [MATLAB, Polynomials]
description: In this tutorial, you will learn about Polynomials in MATLAB.
---
# MATLAB Polynomials

### Creating Polynomials

1. **Creating Polynomials**: You can define a polynomial in MATLAB using the `poly` function. For instance, let's create a polynomial \( p(x) = 3x^3 - 2x^2 + 5x - 7 \).

```matlab
% Define coefficients of the polynomial
coefficients = [3, -2, 5, -7];

% Create the polynomial using polyval
p = poly2sym(coefficients);

% Display the polynomial
disp('Polynomial p(x):');
disp(p);
```

Output:
```
Polynomial p(x):
 
     3       2
3 x - 2 x + 5 x - 7
```

### Evaluating Polynomials

2. **Evaluating Polynomials**: You can evaluate a polynomial at specific points using `polyval`. Let's evaluate \( p(x) \) at \( x = 2 \).

```matlab
% Evaluate polynomial p(x) at x = 2
x = 2;
p_value = polyval(coefficients, x);

% Display the result
disp(['p(', num2str(x), ') = ', num2str(p_value)]);
```

Output:
```
p(2) = 21
```

### Polynomial Roots

3. **Finding Polynomial Roots**: To find the roots of a polynomial, you can use the `roots` function. Let's find the roots of \( p(x) \).

```matlab
% Find roots of the polynomial
roots_p = roots(coefficients);

% Display the roots
disp('Roots of the polynomial:');
disp(roots_p);
```

Output:
```
Roots of the polynomial:
   1.0000 + 0.0000i
  -1.0000 + 1.4142i
  -1.0000 - 1.4142i
```

### Polynomial Addition and Subtraction

4. **Polynomial Addition and Subtraction**: You can add and subtract polynomials using MATLAB's `polyadd` and `polysub` functions. Let's add two polynomials \( p(x) = 3x^2 + 2x - 1 \) and \( q(x) = 4x^3 - x^2 + 5x + 3 \).

```matlab
% Define coefficients of p(x) and q(x)
coeff_p = [3, 2, -1];
coeff_q = [4, -1, 5, 3];

% Add polynomials p(x) + q(x)
sum_coeffs = polyadd(coeff_p, coeff_q);

% Subtract polynomials p(x) - q(x)
diff_coeffs = polysub(coeff_p, coeff_q);

% Display the results
disp('Sum of polynomials:');
disp(sum_coeffs);

disp('Difference of polynomials:');
disp(diff_coeffs);
```

Output:
```
Sum of polynomials:
     4     1     4     2

Difference of polynomials:
    -4     3    -6    -4     4
```

### Polynomial Multiplication

5. **Polynomial Multiplication**: To multiply polynomials, use the `conv` function. Let's multiply \( p(x) = 3x^2 + 2x - 1 \) and \( q(x) = 4x^3 - x^2 + 5x + 3 \).

```matlab
% Multiply polynomials p(x) and q(x)
prod_coeffs = conv(coeff_p, coeff_q);

% Display the result
disp('Product of polynomials:');
disp(prod_coeffs);
```

Output:
```
Product of polynomials:
    12     5    -7    11   -13    -2    -3
```

### Polynomial Division

6. **Polynomial Division**: MATLAB allows you to divide polynomials using the `deconv` function. Let's divide \( p(x) = 12x^4 + 5x^3 - 7x^2 + 11x - 13 \) by \( q(x) = 4x^3 - x^2 + 5x + 3 \).

```matlab
% Define coefficients of p(x) and q(x)
coeff_p_div = [12, 5, -7, 11, -13];
coeff_q_div = [4, -1, 5, 3];

% Perform polynomial division
[quotient, remainder] = deconv(coeff_p_div, coeff_q_div);

% Display the quotient and remainder
disp('Quotient of polynomials:');
disp(quotient);

disp('Remainder of polynomials:');
disp(remainder);
```

Output:
```
Quotient of polynomials:
     3     4    -4     3

Remainder of polynomials:
     1
```

### Plotting Polynomials

7. **Plotting Polynomials**: You can plot polynomials using `plot` in MATLAB. For instance, let's plot \( p(x) = 3x^3 - 2x^2 + 5x - 7 \) over the interval \([-3, 3]\).

```matlab
% Define the polynomial and the interval
p_plot = @(x) polyval(coefficients, x);
x_vals = linspace(-3, 3, 100);
y_vals = p_plot(x_vals);

% Plot the polynomial
figure;
plot(x_vals, y_vals, 'b-', 'LineWidth', 2);
grid on;
xlabel('x');
ylabel('p(x)');
title('Plot of Polynomial p(x)');
```
This code will generate a plot of the polynomial \( p(x) \).


###  Polynomial Curve Fitting

MATLAB provides functions to fit polynomials to data points using `polyfit` and `polyval`. Here's an example:

```matlab
% Generate some data points
x_data = 1:10;
y_data = sin(x_data) + 0.5*randn(size(x_data));

% Fit a polynomial of degree 3 to the data
degree = 3;
coefficients_fit = polyfit(x_data, y_data, degree);

% Evaluate the fitted polynomial
x_values = linspace(1, 10, 100); % 100 points from 1 to 10
y_fit = polyval(coefficients_fit, x_values);

% Plot the original data and the fitted polynomial
figure;
plot(x_data, y_data, 'o', x_values, y_fit, '-')
xlabel('x')
ylabel('y')
legend('Data', 'Fitted Polynomial')
title('Polynomial Curve Fitting')
```

###  Symbolic Polynomial Manipulation

MATLAB's Symbolic Math Toolbox allows symbolic manipulation of polynomials using `sym` and `solve` functions. Here’s an example:

```matlab
% Symbolic variables
syms x

% Define a symbolic polynomial
p_sym = x^3 - 4*x^2 + 5*x - 2;

% Find the roots symbolically
roots_sym = solve(p_sym == 0, x);

% Display roots
disp('Symbolic roots of the polynomial:')
disp(roots_sym)

% Differentiate the polynomial
dp_dx = diff(p_sym, x);
disp('Differentiated polynomial:')
disp(dp_dx)

% Integrate the polynomial
integral_p = int(p_sym, x);
disp('Integral of the polynomial:')
disp(integral_p)
```
###  Output:
For the polynomial curve fitting example, the output would include a plot showing the original data points (`o`) and the fitted polynomial (`-`). This plot visually demonstrates how well the polynomial fits the data.

### Conclusion

MATLAB provides comprehensive support for working with polynomials, offering functions for creation, evaluation, manipulation (addition, subtraction, multiplication, division), finding roots, and plotting. These tools are essential for various applications in numerical analysis, control systems, signal processing, and more.
