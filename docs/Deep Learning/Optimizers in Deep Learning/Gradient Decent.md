
# Gradient Descent in Deep Learning Optimizers

This repository contains an in-depth explanation and implementation of Gradient Descent, a fundamental optimization algorithm used in deep learning. Gradient Descent is used to minimize the loss function of a model by iteratively updating its parameters.

## Table of Contents
- [Introduction](#introduction)
- [Mathematical Explanation](#mathematical-explanation)
  - [Gradient in Gradient Descent](#gradient-in-gradient-descent)
  - [Basic Gradient Descent](#basic-gradient-descent)
  - [Stochastic Gradient Descent (SGD)](#stochastic-gradient-descent-sgd)
  - [Mini-Batch Gradient Descent](#mini-batch-gradient-descent)
  - [Comparison](#comparison)
- [Implementation in Keras](#implementation-in-keras)
- [Usage](#usage)
- [Limation of Gradient Descent](#problems-with-gradient-descent-as-a-deep-learning-optimizer)
- [Results](#results)


## Introduction

Gradient Descent is an optimization algorithm used for minimizing the loss function in machine learning and deep learning models. It works by iteratively adjusting the model parameters in the opposite direction of the gradient of the loss function with respect to the parameters.

## Mathematical Explanation

### Gradient in Gradient Descent

The gradient of a function measures the steepness and direction of the function at a given point. In the context of Gradient Descent, the gradient of the loss function with respect to the parameters indicates how the loss function will change if the parameters are changed.

Mathematically, the gradient is a vector of partial derivatives:

$$∇J(θ)=[∂J(θ)∂θ1​,∂J(θ)∂θ2​,…,∂J(θ)∂θn​]$$

### Basic Gradient Descent

The update rule for the parameters $θ$ in basic gradient descent is:

$$θ = θ - η∇J(θ)$$

where:
- $θ$ are the model parameters
- $η$ is the learning rate, a small positive number
- $∇J(θ)$ is the gradient of the loss function with respect to the parameters

### Stochastic Gradient Descent (SGD)

In Stochastic Gradient Descent, the parameters are updated for each training example rather than after calculating the gradient over the entire dataset.

$$θ = θ - η∇J(θ; x^(i); y^(i))$$

where $x^(i); y^(i)$ represents the $i$-th training example.

### Mini-Batch Gradient Descent

Mini-Batch Gradient Descent is a compromise between Batch Gradient Descent and Stochastic Gradient Descent. It updates the parameters after computing the gradient on a mini-batch of the training data.

$$θ = θ - η∇J(θ; x^mini-batch; y^mini-batch)$$

### Comparison

| Method                    | Description                                                  | Update Frequency            | Pros                            | Cons                                 |
|---------------------------|--------------------------------------------------------------|-----------------------------|----------------------------------|--------------------------------------|
| Batch Gradient Descent    | Computes gradient over entire dataset                        | Once per epoch              | Stable convergence               | Slow for large datasets              |
| Stochastic Gradient Descent (SGD) | Computes gradient for each training example                  | Once per training example   | Faster updates, can escape local minima | Noisy updates, may not converge      |
| Mini-Batch Gradient Descent | Computes gradient over small batches of the dataset        | Once per mini-batch         | Balance between speed and stability | Requires tuning of mini-batch size   |

## Implementation in Keras

Here is a simple implementation of Gradient Descent using Keras:

```python
import numpy as np
from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import SGD

# load data
X_train = np.random.rand(1000, 20)
y_train = np.random.randint(2, size=(1000, 1))

# Define model
model = Sequential()
model.add(Dense(64, activation='relu', input_dim=20))
model.add(Dense(1, activation='sigmoid'))

# Stochastic Gradient Descent (SGD)
optimizer = SGD(learning_rate=0.01)
model.compile(optimizer=optimizer, loss='binary_crossentropy', metrics=['accuracy'])

# finally Train the model
model.fit(X_train, y_train, epochs=50, batch_size=32)
```

In this example:
- We generate some dummy data for training.
- We define a simple neural network model with one hidden layer.
- We compile the model using the SGD optimizer with a learning rate of 0.01.
- We train the model for 50 epochs with a batch size of 32.

## Usage

To use this implementation, ensure you have the required dependencies installed:

```bash
pip install numpy keras
```

Then, you can run the provided script to train a model using Gradient Descent.

## Problems with Gradient Descent as a Deep Learning Optimizer

Gradient descent, while a fundamental optimization algorithm, faces several challenges in the context of deep learning:

### 1. Vanishing and Exploding Gradients
* **Problem:** In deep neural networks, gradients can become extremely small (vanishing) or large (exploding) as they propagate through multiple layers.
* **Impact:** This hinders the training process, making it difficult for the network to learn from earlier layers.

### 2. Saddle Points and Local Minima
* **Problem:** The optimization landscape of deep neural networks often contains numerous saddle points (points where the gradient is zero but not a minimum or maximum) and local minima.
* **Impact:** Gradient descent can easily get stuck at these points, preventing it from finding the global minimum.

### 3. Slow Convergence
* **Problem:** Gradient descent can be slow to converge, especially for large datasets and complex models.
* **Impact:** This increases training time and computational costs.

To address these issues, various optimization algorithms have been developed, such as Adam, and Adagrad, which incorporate techniques like momentum Which we'll see in next section .
 

## Results

The results of the training process, including the loss and accuracy, will be displayed after each epoch. You can adjust the learning rate and other hyperparameters to see how they affect the training process.
