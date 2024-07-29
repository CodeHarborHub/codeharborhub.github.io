# Bias and Weight Visualization in Multiple Regression

## Introduction

Multiple regression is a fundamental technique in machine learning used to model the relationship between multiple independent variables and a dependent variable. Visualizing the bias and weights in multiple regression can provide insights into the model's behavior and the importance of different features.

## Multiple Regression Model

In multiple regression, we model the relationship as:

$$ y = \beta_0 + \beta_1x_1 + \beta_2x_2 + ... + \beta_nx_n + \epsilon $$

Where:
- $y$ is the dependent variable
- $x_1, x_2, ..., x_n$ are independent variables
- $\beta_0$ is the bias (intercept)
- $\beta_1, \beta_2, ..., \beta_n$ are the weights (coefficients)
- $\epsilon$ is the error term

## Mathematical Interpretation

### Bias ($\beta_0$)

The bias represents the expected value of $y$ when all $x_i = 0$. It shifts the entire prediction surface up or down.

### Weights ($\beta_i$)

Each weight $\beta_i$ represents the expected change in $y$ for a one-unit increase in $x_i$, holding all other variables constant:

$$\frac{\partial y}{\partial x_i} = \beta_i$$

## Regularization Effects

Regularization techniques like Lasso (L1) and Ridge (L2) affect weight visualization:

### Lasso Regularization

Lasso tends to push some weights to exactly zero, resulting in sparse models:

$$\min_{\beta} \left\{ \sum_{i=1}^n (y_i - \beta_0 - \sum_{j=1}^p \beta_j x_{ij})^2 + \lambda \sum_{j=1}^p |\beta_j| \right\}$$

### Ridge Regularization

Ridge shrinks weights towards zero but rarely sets them exactly to zero:

$$\min_{\beta} \left\{ \sum_{i=1}^n (y_i - \beta_0 - \sum_{j=1}^p \beta_j x_{ij})^2 + \lambda \sum_{j=1}^p \beta_j^2 \right\}$$

Visualizing weights after regularization can show how different features are affected by the regularization process.

## Conclusion

Visualizing bias and weights in multiple regression provides valuable insights into model behavior, feature importance, and the effects of regularization. These visualizations aid in model interpretation, feature selection, and understanding the underlying relationships in the data.

## How to Use This Repository

- Clone this repository to your local machine.

```bash
  git clone https://github.com/CodeHarborHub/codeharborhub.github.io/tree/main/docs/Machine%20Learning/Multiple Regression Visualized
```
- For Python implementations and visualizations:

1. Ensure you have Jupyter Notebook installed 

```bash
  pip install jupyter
```
2. Navigate to the project directory in your terminal.
3. Open weight_bias_multiple_regression.ipynb.
