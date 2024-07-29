# Deep Learning Optimizers

This repository contains implementations and explanations of various optimization algorithms used in deep learning. Each optimizer is explained with its mathematical equations and includes a small code example using Keras.

## Table of Contents
- [Introduction](#introduction)
- [Optimizers](#optimizers)
  - [Gradient Descent](#gradient-descent)
  - [Stochastic Gradient Descent (SGD)](#stochastic-gradient-descent-sgd)
  - [Momentum](#momentum)
  - [AdaGrad](#adagrad)
  - [RMSprop](#rmsprop)
  - [Adam](#adam)
- [Usage](#usage)


## Introduction

Optimizers are algorithms or methods used to change the attributes of your neural network such as weights and learning rate to reduce the losses. Optimization algorithms help to minimize (or maximize) an objective function by adjusting the weights of the network.

## Optimizers

### Gradient Descent

Gradient Descent is the most basic but most used optimization algorithm. It is an iterative optimization algorithm to find the minimum of a function. 

**Mathematical Equation:**

$$ \theta = \theta - \eta \nabla J(\theta) $$

**Keras Code:**

```python
from keras.optimizers import SGD

model.compile(optimizer=SGD(learning_rate=0.01), loss='mse')
```

### Stochastic Gradient Descent (SGD)

SGD updates the weights for each training example, rather than at the end of each epoch. 

**Mathematical Equation:**

$$\theta = \theta - \eta \nabla J(\theta; x^{(i)}; y^{(i)})$$

**Keras Code:**

```python
from keras.optimizers import SGD

model.compile(optimizer=SGD(learning_rate=0.01), loss='mse')
```

### Momentum

Momentum helps accelerate gradients vectors in the right directions, thus leading to faster converging.

**Mathematical Equation:**

$$ v_t = \gamma v_{t-1} + \eta \nabla J(\theta) $$
$$ \theta = \theta - v_t $$

**Keras Code:**

```python
from keras.optimizers import SGD

model.compile(optimizer=SGD(learning_rate=0.01, momentum=0.9), loss='mse')
```

### AdaGrad

AdaGrad adapts the learning rate to the parameters, performing larger updates for infrequent and smaller updates for frequent parameters.

**Mathematical Equation:**

$$ \theta = \theta - \frac{\eta}{\sqrt{G_{ii} + \epsilon}} \nabla J(\theta) $$

**Keras Code:**

```python
from keras.optimizers import Adagrad

model.compile(optimizer=Adagrad(learning_rate=0.01), loss='mse')
```

### RMSprop

RMSprop modifies AdaGrad to perform better in the non-convex setting by changing the gradient accumulation into an exponentially weighted moving average.

**Mathematical Equation:**

$$\theta = \theta - \frac{\eta}{\sqrt{E[g^2]_t + \epsilon}} \nabla J(\theta)$$

**Keras Code:**

```python
from keras.optimizers import RMSprop

model.compile(optimizer=RMSprop(learning_rate=0.001), loss='mse')
```

### Adam

Adam combines the advantages of two other extensions of SGD: AdaGrad and RMSprop.

**Mathematical Equation:**

$$ m_t = \beta_1 m_{t-1} + (1 - \beta_1) g_t $$
$$ v_t = \beta_2 v_{t-1} + (1 - \beta_2) g_t^2 $$
$$ \hat{m_t} = \frac{m_t}{1 - \beta_1^t} $$
$$ \hat{v_t} = \frac{v_t}{1 - \beta_2^t} $$
$$ \theta = \theta - \eta \frac{\hat{m_t}}{\sqrt{\hat{v_t}} + \epsilon} $$

**Keras Code:**

```python
from keras.optimizers import Adam

model.compile(optimizer=Adam(learning_rate=0.001), loss='mse')
```

## Usage

To use these optimizers, simply include the relevant Keras code snippet in your model compilation step. For example:

```python
model.compile(optimizer=Adam(learning_rate=0.001), loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))
```

