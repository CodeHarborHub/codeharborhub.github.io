
# Backpropagation in Neural Networks

## Overview

Backpropagation is a fundamental algorithm used for training artificial neural networks. It computes the gradient of the loss function with respect to each weight by the chain rule, efficiently propagating errors backward through the network. This allows for the adjustment of weights to minimize the loss function, ultimately improving the performance of the neural network.




# How Backpropagation Works

## Forward propogation

- Input Layer: The input data is fed into the network.
- Hidden Layers: Each layer performs computations using weights and biases to transform the input data.
- Output Layer: The final transformation produces the output, which is compared to the actual target to calculate the loss.

### Mathematical Formulation

![alt text](image.png)
where f is the activation function, zᵢˡ is the net input of neuron i in layer l, wᵢⱼˡ is the connection weight between neuron j in layer l — 1 and neuron i in layer l, and bᵢˡ is the bias of neuron i in layer l.

## Backward propogation

- Compute Loss: Calculate the error (loss) using a loss function (e.g., Mean Squared Error, Cross-Entropy Loss).
- Error Propagation: Propagate the error backward through the network, layer by layer.
- Gradient Calculation: Compute the gradient of the loss with respect to each weight using the chain rule.
- Weight Update: Adjust the weights by subtracting the gradient multiplied by the learning rate.

### Mathematical Formulation

- The loss function measures how well the neural network's output matches the target values. Common loss functions include: ![alt text](<Screenshot 2024-07-15 193010.png>)



- For each weight 𝑤 in the network, the gradient of the loss L with respect to w is computed as:

  ![alt text](<Screenshot 2024-07-15 193248.png>)

- Weights are updated using the gradient descent algorithm:
![alt text](image-1.png)

# Backpropogation from scratch



```bash
  import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

# Input data
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])

# Initialize weights and biases
np.random.seed(42)
weights_input_hidden = np.random.rand(2, 2)
weights_hidden_output = np.random.rand(2, 1)
bias_hidden = np.random.rand(1, 2)
bias_output = np.random.rand(1, 1)
learning_rate = 0.1

# Training 

for epoch in range(10000):

    # Forward pass
    hidden_input = np.dot(X, weights_input_hidden) + bias_hidden
    hidden_output = sigmoid(hidden_input)
    final_input = np.dot(hidden_output, weights_hidden_output) + bias_output
    final_output = sigmoid(final_input)

    # Error
    error = y - final_output
    d_output = error * sigmoid_derivative(final_output)

    # Backward Propogation ( gradient decent)
    error_hidden = d_output.dot(weights_hidden_output.T)
    d_hidden = error_hidden * sigmoid_derivative(hidden_output)

    # Update weights and biases
    weights_hidden_output += hidden_output.T.dot(d_output) * learning_rate
    bias_output += np.sum(d_output, axis=0, keepdims=True) * learning_rate
    weights_input_hidden += X.T.dot(d_hidden) * learning_rate
    bias_hidden += np.sum(d_hidden, axis=0) * learning_rate

print("Training complete")
print("Output after training:")
print(final_output)

```


## Conclusion

Backpropagation is a powerful technique for training neural networks(ANN), enabling them to learn complex patterns and make accurate predictions. Understanding the mechanics and mathematics behind it is essential to Understand inner woking of an ANN.