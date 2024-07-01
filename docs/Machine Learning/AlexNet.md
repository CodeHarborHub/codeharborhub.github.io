# AlexNet

AlexNet is a deep learning model that was introduced by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton in 2012. It won the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) in 2012 with a top-5 error of 15.3%, more than 10.8% lower than that of the runner up. This success demonstrated the effectiveness of deep convolutional neural networks (CNNs) in image recognition tasks, leading to widespread adoption of deep learning techniques.

AlexNet consists of 8 layer - 5 convolutional layers and 3 fully connected layers. Additonally it employs ReLU activation function, max-pooling layers and dropout to enhance its efficiency.

## Architecture

### Input layer
It accepts an image of size 227x227x3 (height, width, RGB channels).

### 1st Convolutional Layer
It applies 96 filters of size 11x11 with a stride of 4. This layer extracts low-level features such as edges and textures. It outputs a feature map of size 55x55x96.

**Example:**
Suppose:
- Image size = 224x224x3
- Filter size = 11x11
- Stride = 4

Hence, output feature map size = $\dfrac{Input Dimension-Filter size}{Stride}+1$ = $\dfrac{227-11}{4}+1$ = $\dfrac{216}{4}+1$ = $55$ = 55x55x96

### 1st Max-pooling Layer
It performs max-pooling with a 96, 3x3 filters and a stride length of 2. It reduces the spatial dimensions to 27x27x96, retaining the most prominent features while reducing computational load.

**Example:**
Suppose:
- Output feature map size = 55x55x96
- Filter size = 3x3
- Stride = 2

Hence, output feature map size = $\dfrac{55-3}{2}+1$ = $\dfrac{52}{2}+1$ = $27$ = 27x27x96

### 2nd Convolutional Layer
It applies 256 filters of size 5x5 with a stride of 1 and padding of 2. This layer extracts more complex patterns and outputs a feature map of size 27x27x256.

**Example:**
Suppose:
- Output feature map size = 27x27x96
- Filter size = 5x5
- Stride = 1
- Padding = 2

Hence, output feature map size = $\dfrac{Input Dimension-Filter size+2*Padding}{Stride}+1$ = $\dfrac{27-5+2*2}{1}+1$ = $\dfrac{26}{1}+1$ = $27$ = 27x27x256

### 2nd Max-Pooling Layer
It performs max-pooling with 256, 3x3 filters and a stride of 2 and reduces spatial dimensions to 13x13x256.

**Example:**
Suppose:
- Output feature map size = 27x27x256
- Filter size = 3x3
- Stride = 2

Hence, output feature map size = $\dfrac{27-3}{2}+1$ = $\dfrac{12}{2}+1$ = $13$ = 13x13x256

### 3rd Convolutional Layer
This layer applies 384 filters of size 3x3 with a stride of 1 and padding of 1. It captures finer details in the features and outputs a feature map of size 13x13x384.

**Example:**
Suppose:
- Output feature map size = 13x13x256
- Filter size = 3x3
- Stride = 1
- Padding = 1

Hence, output feature map size = $\dfrac{13-3+2*1}{1}+1$ = $\dfrac{12}{1}+1$ = $13$ = 13x13x384

### 4th Convolutional Layer
It applies 384 filters of size 3x3 with a stride of 1 and padding of 1. It further refines the features and outputs a feature map of size 13x13x384.

**Example:**
Suppose:
- Output feature map size = 13x13x256
- Filter size = 3x3
- Stride = 1
- Padding = 1

Hence, output feature map size = $\dfrac{13-3+2*1}{1}+1$ = $\dfrac{12}{1}+1$ = $13$ = 13x13x384

### 5th Convolutional Layer
It applies 256 filters of size 3x3 with a stride of 1 and padding of 1. This is the final convolutional layer before the fully connected layers. It outputs a feature map of size 13x13x256.

**Example:**
Suppose:
- Output feature map size = 13x13x384
- Filter size = 3x3
- Stride = 1
- Padding = 1

Hence, output feature map size = $\dfrac{13-3+2*1}{1}+1$ = $\dfrac{12}{1}+1$ = $13$ = 13x13256

### 3rd Max-Pooling Layer
This layer performs max-pooling with 256, 3x3 filter and a stride of 2. It reduces spatial dimensions to 6x6x256.

**Example:**
Suppose:
- Output feature map size = 13x13x256
- Filter size = 3x3
- Stride = 2

Hence, output feature map size = $\dfrac{13-3}{2}+1$ = $\dfrac{10}{2}+1$ = $6$ = 6x6x256

### 1st Fully Connected Layer
It flattens the feature maps and applies a dense layer with 4096 neurons. It introduces a dropout rate of 0.5 to prevent overfitting and uses ReLU activation function.

### 2nd Fully Connected Layer
This layer introduces another dense layer with 4096 neurons. It uses dropout and ReLU activation for regularization and non-linearity.

### 3rd Fully Connected Layer
This is the final dense layer with 1000 neurons, corresponding to the number of classes in the ImageNet dataset. It outputs the class probabilities using the softmax activation function.
