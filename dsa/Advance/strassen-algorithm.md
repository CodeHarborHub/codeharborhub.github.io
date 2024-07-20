---
id: strassens-algorithm
title: Strassen's Algorithm for Matrix Multiplication
sidebar_label: 0008 - Strassen's Algorithm
tags: [Strassen's Algorithm, Matrix Multiplication, Algorithm, C++, Problem Solving]
description: This is a solution for implementing Strassen's Algorithm for efficient matrix multiplication.
---

## Problem Statement 

### Problem Description

Strassen's Algorithm is an efficient matrix multiplication algorithm that reduces the time complexity compared to the conventional matrix multiplication approach. It is particularly useful for large matrices, providing significant performance improvements.

### Examples

**Example 1:**

```plaintext
Input: 
Matrix1: 
1 2
3 4

Matrix2:
5 6
7 8

Output: 
19 22
43 50
Explanation: The product of the two matrices is computed using Strassen's Algorithm.

```

### Constraints

- The matrices should be square matrices of size 2^n * 2^n.

## Solution of Given Problem

### Intuition and Approach

Strassen's Algorithm breaks down matrix multiplication into smaller matrix multiplications and additions, reducing the overall number of multiplications required. It divides each matrix into four submatrices and recursively applies the same algorithm to these submatrices.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;

vector<vector<int>> add(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    int n = A.size();
    vector<vector<int>> C(n, vector<int>(n));
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j)
            C[i][j] = A[i][j] + B[i][j];
    return C;
}

vector<vector<int>> subtract(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    int n = A.size();
    vector<vector<int>> C(n, vector<int>(n));
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j)
            C[i][j] = A[i][j] - B[i][j];
    return C;
}

vector<vector<int>> strassen(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    int n = A.size();
    if (n == 1) {
        return {{A[0][0] * B[0][0]}};
    }

    int newSize = n / 2;
    vector<vector<int>> a11(newSize, vector<int>(newSize));
    vector<vector<int>> a12(newSize, vector<int>(newSize));
    vector<vector<int>> a21(newSize, vector<int>(newSize));
    vector<vector<int>> a22(newSize, vector<int>(newSize));
    vector<vector<int>> b11(newSize, vector<int>(newSize));
    vector<vector<int>> b12(newSize, vector<int>(newSize));
    vector<vector<int>> b21(newSize, vector<int>(newSize));
    vector<vector<int>> b22(newSize, vector<int>(newSize));

    for (int i = 0; i < newSize; ++i) {
        for (int j = 0; j < newSize; ++j) {
            a11[i][j] = A[i][j];
            a12[i][j] = A[i][j + newSize];
            a21[i][j] = A[i + newSize][j];
            a22[i][j] = A[i + newSize][j + newSize];
            b11[i][j] = B[i][j];
            b12[i][j] = B[i][j + newSize];
            b21[i][j] = B[i + newSize][j];
            b22[i][j] = B[i + newSize][j + newSize];
        }
    }

    auto m1 = strassen(add(a11, a22), add(b11, b22));
    auto m2 = strassen(add(a21, a22), b11);
    auto m3 = strassen(a11, subtract(b12, b22));
    auto m4 = strassen(a22, subtract(b21, b11));
    auto m5 = strassen(add(a11, a12), b22);
    auto m6 = strassen(subtract(a21, a11), add(b11, b12));
    auto m7 = strassen(subtract(a12, a22), add(b21, b22));

    vector<vector<int>> c11 = add(subtract(add(m1, m4), m5), m7);
    vector<vector<int>> c12 = add(m3, m5);
    vector<vector<int>> c21 = add(m2, m4);
    vector<vector<int>> c22 = add(subtract(add(m1, m3), m2), m6);

    vector<vector<int>> C(n, vector<int>(n));
    for (int i = 0; i < newSize; ++i) {
        for (int j = 0; j < newSize; ++j) {
            C[i][j] = c11[i][j];
            C[i][j + newSize] = c12[i][j];
            C[i + newSize][j] = c21[i][j];
            C[i + newSize][j + newSize] = c22[i][j];
        }
    }

    return C;
}

int main() {
    int n;
    cout << "Enter the size of the matrices (must be a power of 2): ";
    cin >> n;

    vector<vector<int>> A(n, vector<int>(n));
    vector<vector<int>> B(n, vector<int>(n));

    cout << "Enter elements of matrix A:\n";
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j)
            cin >> A[i][j];

    cout << "Enter elements of matrix B:\n";
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < n; ++j)
            cin >> B[i][j];

    vector<vector<int>> C = strassen(A, B);

    cout << "Resultant matrix C after multiplication:\n";
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j)
            cout << C[i][j] << " ";
        cout << "\n";
    }

    return 0;
}
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** \(O(n^{\log_2 7}) \approx O(n^{2.81})\)
- **Space Complexity:** \(O(n^2)\)

The time complexity is significantly reduced compared to the traditional \(O(n^3)\) matrix multiplication. The space complexity is determined by the storage requirements of the matrices.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="2Hj0XV-a7hI"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />
---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sjain1909'].map(username => (
 <Author key={username} username={username} />
))}
</div>
