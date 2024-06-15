# Logistic Regression


``` python
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=100, n_features=2, n_informative=2, n_redundant=0, n_clusters_per_class=1, random_state=42)
```
Above, is the custom dataset made using `make_classification` from
`sklearn.datasets` .

``` python
import matplotlib.pyplot as plt
plt.scatter(X[:,0],X[:,1])
plt.show()
```
![55558f59d1b98e9a3cc68d08daae54b9b065d057](https://github.com/AmrutaJayanti/codeharborhub/assets/142327526/84578011-0887-43da-b972-9e6f04ae505e)



Logistic Regression is a statistical method used for binary
classification problems. It models the probability that a given input
belongs to a particular category.

Logistic Function (Sigmoid Function): The core of logistic regression is
the logistic function, which is an S-shaped curve that can take any
real-valued number and map it into a value between 0 and 1. The function
is defined as:

$$\sigma(x) = \frac{1}{1 + e^{-x}}$$

where $x$ is the input to the function

Logistic Regression is generally used for linearly separated data.

Logistic Regression cost function :

$J(\beta) = - \frac{1}{m} \sum_{i=1}^{m} \left[ y_i \log(h_\beta(x_i)) + (1 - y_i) \log(1 - h_\beta(x_i)) \right]$

### Applications

-   **Medical Diagnosis**: Predicting whether a patient has a certain
    disease (e.g., diabetes, cancer) based on diagnostic features.
-   **Spam Detection**: Classifying emails as spam or not spam.
-   **Customer Churn**: Predicting whether a customer will leave a
    service.
-   **Credit Scoring**: Assessing whether a loan applicant is likely to
    default on a loan.


``` python
from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)
```

`X`,`y` are split into training and testing data using `train_test_split`

``` python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(x_train,y_train)
y_pred = model.predict(x_test)

from sklearn.metrics import accuracy_score
accuracy_score(y_test,y_pred)

```
Output:
    
    1.0

Our model predicts data accurately. Hence the accuracy score is 1 .

``` python
import numpy as np
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.01),
                     np.arange(y_min, y_max, 0.01))

# Predict the class for each grid point
Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

# Plot decision boundary and data points
plt.figure(figsize=(8, 6))
plt.contourf(xx, yy, Z, alpha=0.8, cmap='viridis')
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis', marker='o', edgecolors='k')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Logistic Regression Decision Boundary')
plt.show()
```

![3709358d7ef950353a7f26d9dfbb2f5f16fc962e](https://github.com/AmrutaJayanti/codeharborhub/assets/142327526/bd7361ac-b710-4975-8fb2-1ad4bf0ebe99)




