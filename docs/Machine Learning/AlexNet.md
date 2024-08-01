# AlexNet

AlexNet is a deep learning model that was introduced by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton in 2012. It won the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) in 2012 with a top-5 error of 15.3%, more than 10.8% lower than that of the runner up. This success demonstrated the effectiveness of deep convolutional neural networks (CNNs) in image recognition tasks, leading to widespread adoption of deep learning techniques.

AlexNet consists of 8 layer - 5 convolutional layers and 3 fully connected layers. Additonally it employs ReLU activation function, max-pooling layers and dropout to enhance its efficiency.

## Architecture

### Input layer
It accepts an image of size 227x227x3 (height, width, RGB channels).

### 1st Convolutional Layer
It applies 96 filters of size 11x11 with a stride length of 4. This layer extracts low-level features such as edges and textures. It outputs a feature map of size 55x55x96.

**Example:**
Suppose:
- Image size = 224x224x3
- Filter size = 11x11
- Stride = 4

Hence, output feature map size = $\dfrac{227-11}{4}+1$ = $\dfrac{216}{4}+1$ = $55$ = 55x55x96

### 1st Max-pooling Layer
It performs max-pooling with 96, 3x3 filters and a stride length of 2. It reduces the spatial dimensions to 27x27x96, retaining the most prominent features while reducing computational load.

**Example:**
Suppose:
- Input feature map size = 55x55x96
- Filter size = 3x3
- Stride = 2

Hence, output feature map size = $\dfrac{55-3}{2}+1$ = $\dfrac{52}{2}+1$ = $27$ = 27x27x96

### 2nd Convolutional Layer
It applies 256 filters of size 5x5 with a stride length of 1 and padding of 2. This layer extracts more complex patterns and outputs a feature map of size 27x27x256.

**Example:**
Suppose:
- Input feature map size = 27x27x96
- Filter size = 5x5
- Stride = 1
- Padding = 2

Hence, output feature map size = $\dfrac{27-5+2*2}{1}+1$ = $\dfrac{26}{1}+1$ = $27$ = 27x27x256

### 2nd Max-Pooling Layer
It performs max-pooling with 256, 3x3 filters and a stride of 2 and reduces spatial dimensions to 13x13x256.

**Example:**
Suppose:
- Input feature map size = 27x27x256
- Filter size = 3x3
- Stride = 2

Hence, output feature map size = $\dfrac{27-3}{2}+1$ = $\dfrac{12}{2}+1$ = $13$ = 13x13x256

### 3rd Convolutional Layer
This layer applies 384 filters of size 3x3 with a stride of 1 and padding of 1. It captures finer details in the features and outputs a feature map of size 13x13x384.

**Example:**
Suppose:
- Input feature map size = 13x13x256
- Filter size = 3x3
- Stride = 1
- Padding = 1

Hence, output feature map size = $\dfrac{13-3+2*1}{1}+1$ = $\dfrac{12}{1}+1$ = $13$ = 13x13x384

### 4th Convolutional Layer
It applies 384 filters of size 3x3 with a stride of 1 and padding of 1. It further refines the features and outputs a feature map of size 13x13x384.

**Example:**
Suppose:
- Input feature map size = 13x13x256
- Filter size = 3x3
- Stride = 1
- Padding = 1

Hence, output feature map size = $\dfrac{13-3+2*1}{1}+1$ = $\dfrac{12}{1}+1$ = $13$ = 13x13x384

### 5th Convolutional Layer
It applies 256 filters of size 3x3 with a stride of 1 and padding of 1. This is the final convolutional layer before the fully connected layers. It outputs a feature map of size 13x13x256.

**Example:**
Suppose:
- Input feature map size = 13x13x384
- Filter size = 3x3
- Stride = 1
- Padding = 1

Hence, output feature map size = $\dfrac{13-3+2*1}{1}+1$ = $\dfrac{12}{1}+1$ = $13$ = 13x13x256

### 3rd Max-Pooling Layer
This layer performs max-pooling with 256, 3x3 filter and a stride of 2. It reduces spatial dimensions to 6x6x256.

**Example:**
Suppose:
- Input feature map size = 13x13x256
- Filter size = 3x3
- Stride = 2

Hence, output feature map size = $\dfrac{13-3}{2}+1$ = $\dfrac{10}{2}+1$ = $6$ = 6x6x256

### 1st Fully Connected Layer
It flattens the feature maps and applies a dense layer with 4096 neurons. It introduces a dropout rate of 0.5 to prevent overfitting and uses ReLU activation function.

**Example:**
Suppose, the input is of size 6x6x256

- The input feature map of size 6x6x256 is flattened to a vector of length 9216.
- After flattening, assume that the input feature vector (x) is [0.5, -0.2,..., 0.1] and is of length 9216. 
- Weights ($W_1$) and biases ($b_1$) are two vectors of length 9216 whose values are initialized randomly.
- The pre-activation vector, $z_1$ is calculated using the formula: $z_1 = W_1⋅x+b_1$. $z_1$ is a vector of length 4096. Assume that it has the values [1.2,-0.5,...,2.3].
- ReLU activation function is applied to $z_1$ using the formula: $ReLU(x)$ = $max(0,x)$. Hence, all the negative values will be replaced by 0.
- The post-activation vector, $a_1$ will be of length 4096 and will have the values [1.2,0,...3.3].
- In the dropout layer, a binary mask $m_1$ is generated. Assume $m_1$ is [1,0,1,..1].
- The binary mask $m_1$ is multiplied with each element of $a_1$. Hence, the final vector, $a_1'$ wil be [1.2,0,...,3.3] and will be of length 4096.

### 2nd Fully Connected Layer
This layer introduces another dense layer with 4096 neurons. It uses dropout and ReLU activation for regularization and non-linearity.

**Example:**
The input will be $a_1'$ which is a vector of length 4096.

- The same process is repeated as in the first fully connected layer.
- However, here the weight matrix, $W_2$ is 4096x4096 and the bias matrix, $b_2$ has 4096 elements.
- This layer will give $a_2'$ as output which is a vector of length 4096.

### 3rd Fully Connected Layer
This is the final dense layer with 1000 neurons, corresponding to the number of classes in the ImageNet dataset. It outputs the class probabilities using the softmax activation function. The neurons in the last layer correspond to the number of classes in the dataset. If the dataset has 10 classes, the last layer would also have 10 neurons. 

**Example:**
The input would be $a_2'$ which is a vector of length 4096. 

- Here, the weight matrix will have dimensions 1000x4096 and the bias vector will have 1000 elements.
- Pre-activation is performed in this layer to get the vector $z_3$ which will be of length 1000.
- Softmax activation function is then applied to $z_3$ producing a vector of length 1000.
- This vector consists of the probabilities for each class. The class with the highest probability is given as the output.   


## Layer Summary 

| Layers    | Input Size | No. of Filters | Size of Filters | Stride Length | Padding | Output Feature Map Size |
| :--------: | :--------: | :--------: | :--------: | :--------: | :--------: | :--------: |
| Input Layer  | 224x224x3 |
| 1st Convolutional Layer | 224x224x3 | 96 | 11x11 | 4 | 2 | 55x55x96 |
| 1st Max-Pooling Layer | 55x55x96 | 96 | 3x3 | 2 | - | 27x27x96 |
| 2nd Convolutional Layer | 27x27x96 | 256 | 5x5 | 1 | 2 | 27x27x256 |
| 2nd Max-Pooling Layer | 27x27x256 | 256 | 3x3 | 2 | - | 13x13x256 |
| 3rd Convolutional Layer | 27x27x256 | 384  | 3x3 | 1 | 1 | 13x13x384 |
| 4th Convolutional Layer | 13x13x384 | 384  | 3x3 | 1 | 1 | 13x13x384 |
| 5th Convolutional Layer | 13x13x384 | 256  | 3x3 | 1 | 1 | 13x13x256 |
| 3rd Max-Pooling Layer | 13x13x256 | 256 | 3x3 | 2 | - | 6x6x256 |
| 1st Fully Connected Layer |
| 2nd Fully Connected Layer |
| 3rd Fully Connected Layer |

## Implementation

```python
# Loading the libraries

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Dense, Flatten, Dropout
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.datasets import cifar10
from tensorflow.keras.utils import to_categorical


# Loading and pre-processing the CIFAR-10 dataset

(x_train, y_train), (x_test, y_test) = cifar10.load_data()
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0
y_train = to_categorical(y_train, 10)
y_test = to_categorical(y_test, 10)

# Defining the AlexNet model

def alexnet_model(input_shape=(32, 32, 3), num_classes=10):
    model = Sequential()
    model.add(Conv2D(filters=96, input_shape=input_shape, kernel_size=(11, 11), strides=(4, 4), padding='same', activation='relu'))
    model.add(MaxPooling2D(pool_size=(3, 3), strides=(2, 2), padding='same'))
    model.add(Conv2D(filters=256, kernel_size=(5, 5), strides=(1, 1), padding='same', activation='relu'))
    model.add(MaxPooling2D(pool_size=(3, 3), strides=(2, 2), padding='same'))
    model.add(Conv2D(filters=384, kernel_size=(3, 3), strides=(1, 1), padding='same', activation='relu'))
    model.add(Conv2D(filters=384, kernel_size=(3, 3), strides=(1, 1), padding='same', activation='relu'))
    model.add(Conv2D(filters=256, kernel_size=(3, 3), strides=(1, 1), padding='same', activation='relu'))
    model.add(MaxPooling2D(pool_size=(3, 3), strides=(2, 2), padding='same'))
    model.add(Flatten())
    model.add(Dense(4096, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(4096, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(num_classes, activation='softmax'))
    return model

model = alexnet_model()
model.compile(optimizer=Adam(), loss='categorical_crossentropy', metrics=['accuracy'])


# Training the model

datagen = ImageDataGenerator(
    rotation_range=15,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True,
)
datagen.fit(x_train)

history = model.fit(
    datagen.flow(x_train, y_train, batch_size=64),
    epochs=50,
    validation_data=(x_test, y_test),
    steps_per_epoch=x_train.shape[0] // 64
)

# Test accuracy and loss

score = model.evaluate(x_test, y_test, verbose=0)
print('Test loss:', score[0])
print('Test accuracy:', score[1])
```

**NOTE:** The CIFAR-10 dataset has 10 classes. So, the last layer has 10 neurons in it.
