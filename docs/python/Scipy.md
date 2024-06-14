# Scipy

Scipy is a powerful Python library used for scientific and technical computing. It builds on NumPy and provides a large number of higher-level functions for mathematical operations, including optimization, integration, interpolation, eigenvalue problems, algebraic equations, and more.

**1. Installation:**
```python
python -m pip install scipy
```

**2. Import and Usage:**

```python
import numpy as np
from scipy import linalg, optimize, integrate, interpolate, stats
```

**3. Linear Algebra:**

Scipy has many functions for linear algebra operations

- Solving Linear Equations:
```python
import numpy as np
from scipy import linalg, optimize, integrate, interpolate, stats
# Solving the system of equations Ax = b
A = np.array([[3, 2], [1, 2]])
b = np.array([2, 0])

x = linalg.solve(A, b)
print(x)  # Solution to the system
```

- Eigenvalues and eigenvectors
```python
# Finding eigenvalues and eigenvectors
import numpy as np
from scipy import linalg, optimize, integrate, interpolate, stats

A = np.array([[3, 2], [4, 1]])

eigenvalues, eigenvectors = linalg.eig(A)
print(eigenvalues)    # Eigenvalues
print(eigenvectors)   # Eigenvectors
```

**4. Optimization:**

- Finding minima of a function:
```python
import numpy as np
from scipy import linalg, optimize, integrate, interpolate, stats

# Minimizing a scalar function
def f(x):
    return x**2 + 10*np.sin(x)

result = optimize.minimize(f, x0=0)
print(result.x)  # Minimum value of the function
```

- Root Finding
```python
import numpy as np
from scipy import linalg, optimize, integrate, interpolate, stats

# Finding roots of a function
def f(x):
    return x**2 - 4

root = optimize.root(f, x0=1)
print(root.x)  # Root of the function
```

**5. Interpolation:**

Interpolation can be useful when you want to estimate values between known data points.

```python
import numpy as np
from scipy import linalg, optimize, integrate, interpolate, stats

# Interpolating data
x = np.linspace(0, 10, 10)
y = np.sin(x)

f = interpolate.interp1d(x, y)
x_new = np.linspace(0, 10, 50)
y_new = f(x_new)

print(y_new)  # Interpolated values
```

**6. Statistics:**

Scipy's `stats` module provides a range of statistical functions.

```python
import numpy as np
from scipy import linalg, optimize, integrate, interpolate, stats


# Calculating descriptive statistics
data = np.random.normal(loc=0, scale=1, size=1000)

mean = stats.tmean(data)
std_dev = stats.tstd(data)

print(mean)   # Mean of the data
print(std_dev)  # Standard deviation of the data
```


**7. Signal Processing:**

Scipy's `signal` module is a powerful tool for signal processing tasks in Python. It provides functions for filtering, spectral analysis, interpolation, and other signal-related operations.

- Filtering:

```python
from scipy import signal
import numpy as np
import matplotlib.pyplot as plt

# Generate a noisy signal
np.random.seed(0)
t = np.linspace(0, 1, 1000)
x = np.sin(2 * np.pi * 10 * t) + np.random.normal(0, 1, t.shape)

# Design a low-pass FIR filter
b = signal.firwin(30, 0.05)
x_filtered = signal.lfilter(b, 1, x)

# Plotting
plt.figure(figsize=(10, 4))
plt.plot(t, x, label='Noisy signal')
plt.plot(t, x_filtered, label='Filtered signal')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.legend()
plt.show()
```

Output:

![image](https://github.com/AmrutaJayanti/codeharborhub/assets/142327526/63a9d70a-af17-414b-beb4-563832da68d5)


- Spectral Analysis:

```python
from scipy import signal
import numpy as np
import matplotlib.pyplot as plt


# Compute and plot a spectrogram
f, t, Sxx = signal.spectrogram(x, fs=1000)
plt.figure(figsize=(10, 4))
plt.pcolormesh(t, f, 10 * np.log10(Sxx), shading='gouraud')
plt.ylabel('Frequency [Hz]')
plt.xlabel('Time [sec]')
plt.colorbar(label='Power [dB]')
plt.show()
```

Output:

![image](https://github.com/AmrutaJayanti/codeharborhub/assets/142327526/30e09ff7-3ad0-424e-993d-96825ad44fb1)




