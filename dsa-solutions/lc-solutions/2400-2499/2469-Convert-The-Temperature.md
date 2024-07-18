---
id: convert-the-temperature
title:  Convert The Temperature
sidebar_label: 2469-Convert-The-Temperature
tags:
  - Math
---

## Problem Description
You are given a non-negative floating point number rounded to two decimal places `celsius`, that denotes the temperature in Celsius.

You should convert Celsius into Kelvin and Fahrenheit and return it as an array `ans = [kelvin, fahrenheit]`.

Return the array `ans`. Answers within `10^(-5)` of the actual answer will be accepted.


### Example

**Example 1:**


```
Input: celsius = 36.50
Output: [309.65000,97.70000]
Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
```
**Example 2:**
```
Input: celsius = 122.11
Output: [395.26000,251.79800]
Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.
```
### Constraints

- `0 <= celsius <= 1000`

## Solution Approach

### Intuition:

To efficiently determine the Kelvin and Farenheit temperature.
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  convertTemperature(celsius) {
    const kelvin = celsius + 273.15;
    const farenheit = (celsius * 1.80) + 32.00;
    return [kelvin, farenheit];
  }
}


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  convertTemperature(celsius: number): number[] {
    const kelvin: number = celsius + 273.15;
    const farenheit: number = (celsius * 1.80) + 32.00;
    return [kelvin, farenheit];
  }
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
    def convertTemperature(self, celsius: float) -> list[float]:
        kelvin = celsius + 273.15
        farenheit = (celsius * 1.80) + 32.00
        return [kelvin, farenheit]


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public double[] convertTemperature(double celsius) {
        double kelvin = celsius + 273.15;
        double farenheit = (celsius * 1.80) + 32.00;
        return new double[]{kelvin, farenheit};
    }
}


    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    vector<double> convertTemperature(double celsius) {
         double kelvin = celsius+273.15;
         double farenheit = (celsius*1.80)+32.00;

        return {kelvin, farenheit};
    }
};
```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(1)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(2*n)$$ because the function performs a fixed number of operations, regardless of the input size.
- The space complexity is $$O(1)$$ because we are not using any extra space.