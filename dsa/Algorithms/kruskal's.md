---
id: kruskal's
title: Kruskal's Graph Algorithm
sidebar_label: Kruskal's Algorithm
tags:
  - dsa
  - data-structures
  - graph
  - graph-traversal
  - algorithm
  - javascript
  - python
  - c++
  - java
  - Minimum Spanning Tree
  - programming
  - tutorial
sidebar_position: 3
---
Kruskal's algorithm is a popular method used to find the minimum spanning tree (MST) of a connected, undirected graph. A minimum spanning tree is a subset of the edges in a graph that connects all the vertices together, wihout any cycles, and with minimum possible total edge weight.
### Key Concepts:
* Edge Selection: The algorithm picks the smallest weight edge first and uses a greedy approach to ensure the overall minimum weight for the spanning tree.
* Cycle Detection: To check efficiently if adding a new edge forms a cycle, the algorithm uses union-find (Disjoint set union) function for that.
### To find MST using Kruskal's algorithm
Following steps are used to find the MST:
1. Sort the edges in ascending order of their weight.
2. Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far. If the cycle is not formed, include this edge. Else, discard it. 
3. Repeat step 2 until there are (V-1) edges in the spanning tree. 
### Implementation:
![image](https://wat-images.s3.ap-south-1.amazonaws.com/images/ps/minimum-spanning-tree-using-kruskals-algorithm.svg)

Program for the Kruskal's algorithm:

<Tabs>
  <TabItem value="C++" label="C++">
    ```Cpp  showLineNumbers
    //kruskals algorithm 
#include<iostream>
#include<vector>
#define I INT32_MAX
using namespace std;
void Union(int u, int v,vector<int>&s)// here u and v are the head of two sets
{
    // the one with more child will become the ultimate head
    if (s[u]<s[v])//s is the array where sets are stored
    {
        s[u]=s[u]+s[v];
        s[v]=u;
    }
    else
    {
        s[v]=s[u]+s[v];
        s[u]=v;
    }
     
}
// write a find function to find the parent of any node
int find(int u,vector<int>&s)// u is the element whose parent we need to find
{
    int x=u;
    int v=0;
    while(s[x]>0)
    {
        x=s[x];
    }
    
    return x;
}
vector<vector<int>> kruskals_algo(vector<vector<int>>&G,int n,int a)
{
    vector<int>set(a,-1);
    vector<int>included(n,0);
    vector<vector<int>>sol(2,vector<int>(a-1));
    int i=0,j,k,min,u,v;
    while(i<a-1)
    {
        min=I;
        for (j=0;j<n;j++)
        {
            if (included[j]==0 && G[2][j]<min)
            {
                min=G[2][j];
                k=j;
                u=G[0][j];
                v=G[1][j];
            }
        }
        //cout<<"out"<<endl;
        int x=find(u,set),y=find(v,set);
        if (x!=y)
        {
            sol[0][i]=u;
            sol[1][i]=v;
            Union(x,y,set);
            i++;
        }
        included[k]=1;
   // cout<<"worked"<<endl;
    }
    //cout<<"worked"<<endl;
    return sol;
}
int main()
{
    int n,a;
    cout<<"Enter the number of edges: ";
    cin>>n;
    cout<<"Enter the number of vertexes: ";
    cin>>a;
    vector<vector<int>>G(3,vector<int>(n));
    for (int i=0;i<3;i++)
    {
        for (int j=0;j<n;j++)
            cin>>G[i][j];
    }
    vector<vector<int>>res=kruskals_algo(G,n,a);
    cout<<"Kruskals path is: "<<endl;
    for (int i=0;i<2;i++)
    {
        for (int j=0;j<a-1;j++)
            cout<<res[i][j]<<" ";
        cout<<endl;
    }
    return 0;
}
 ```
</TabItem>

<TabItem value="Python" label="Python">
```Python showLineNumbers
import sys

def union(u, v, s):
    if s[u] < s[v]:
        s[u] += s[v]
        s[v] = u
    else:
        s[v] += s[u]
        s[u] = v

def find(u, s):
    x = u
    while s[x] > 0:
        x = s[x]
    return x

def kruskals_algo(G, n, a):
    set = [-1] * a
    included = [0] * n
    sol = [[0] * (a - 1) for _ in range(2)]
    i = 0
    while i < a - 1:
        min = sys.maxsize
        for j in range(n):
            if included[j] == 0 and G[2][j] < min:
                min = G[2][j]
                k = j
                u = G[0][j]
                v = G[1][j]
        x = find(u, set)
        y = find(v, set)
        if x != y:
            sol[0][i] = u
            sol[1][i] = v
            union(x, y, set)
            i += 1
        included[k] = 1
    return sol

if __name__ == "__main__":
    n = int(input("Enter the number of edges: "))
    a = int(input("Enter the number of vertices: "))
    G = [list(map(int, input().split())) for _ in range(3)]
    res = kruskals_algo(G, n, a)
    print("Kruskal's path is: ")
    for i in range(2):
        print(" ".join(map(str, res[i])))

```
</TabItem>

<TabItem value="Java" label="Java">
``` jsx showLineNumbers
import java.util.*;

public class KruskalsAlgorithm {
    static void union(int u, int v, int[] s) {
        if (s[u] < s[v]) {
            s[u] += s[v];
            s[v] = u;
        } else {
            s[v] += s[u];
            s[u] = v;
        }
    }

    static int find(int u, int[] s) {
        int x = u;
        while (s[x] > 0) {
            x = s[x];
        }
        return x;
    }

    static int[][] kruskals_algo(int[][] G, int n, int a) {
        int[] set = new int[a];
        Arrays.fill(set, -1);
        int[] included = new int[n];
        int[][] sol = new int[2][a - 1];
        int i = 0;
        while (i < a - 1) {
            int min = Integer.MAX_VALUE;
            int u = 0, v = 0, k = 0;
            for (int j = 0; j < n; j++) {
                if (included[j] == 0 && G[2][j] < min) {
                    min = G[2][j];
                    k = j;
                    u = G[0][j];
                    v = G[1][j];
                }
            }
            int x = find(u, set);
            int y = find(v, set);
            if (x != y) {
                sol[0][i] = u;
                sol[1][i] = v;
                union(x, y, set);
                i++;
            }
            included[k] = 1;
        }
        return sol;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of edges: ");
        int n = scanner.nextInt();
        System.out.print("Enter the number of vertices: ");
        int a = scanner.nextInt();
        int[][] G = new int[3][n];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < n; j++) {
                G[i][j] = scanner.nextInt();
            }
        }
        int[][] res = kruskals_algo(G, n, a);
        System.out.println("Kruskal's path is: ");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < a - 1; j++) {
                System.out.print(res[i][j] + " ");
            }
            System.out.println();
        }
        scanner.close();
    }
}
```
</TabItem>

<TabItem value="JavaScript" label="JavaScript">
``` jsx showLineNumbers
function union(u, v, s) {
    if (s[u] < s[v]) {
        s[u] += s[v];
        s[v] = u;
    } else {
        s[v] += s[u];
        s[u] = v;
    }
}

function find(u, s) {
    let x = u;
    while (s[x] > 0) {
        x = s[x];
    }
    return x;
}

function kruskalsAlgo(G, n, a) {
    let set = new Array(a).fill(-1);
    let included = new Array(n).fill(0);
    let sol = [new Array(a - 1), new Array(a - 1)];
    let i = 0;
    while (i < a - 1) {
        let min = Number.MAX_SAFE_INTEGER;
        let u, v, k;
        for (let j = 0; j < n; j++) {
            if (included[j] === 0 && G[2][j] < min) {
                min = G[2][j];
                k = j;
                u = G[0][j];
                v = G[1][j];
            }
        }
        let x = find(u, set);
        let y = find(v, set);
        if (x !== y) {
            sol[0][i] = u;
            sol[1][i] = v;
            union(x, y, set);
            i++;
        }
        included[k] = 1;
    }
    return sol;
}

function main() {
    const n = parseInt(prompt("Enter the number of edges: "));
    const a = parseInt(prompt("Enter the number of vertices: "));
    let G = [];
    for (let i = 0; i < 3; i++) {
        G.push(prompt(`Enter row ${i} of graph:`).split(' ').map(Number));
    }
    let res = kruskalsAlgo(G, n, a);
    console.log("Kruskal's path is: ");
    for (let i = 0; i < 2; i++) {
        console.log(res[i].join(' '));
    }
}

main();
```
</TabItem>
</Tabs>

Output:<br />

```
/*input is in the format row one u, row two v and row three weight between u and v*/
Enter the number of edges: 8
Enter the number of vertexes: 7
0 0 0 1 1 3 6 4
1 3 6 2 4 4 4 5
2 3 4 3 2 5 6 7
Kruskals path is: 
0 1 0 1 0 4 
1 4 3 2 6 5 

```
### Time and Space Complexity:
* Time complexity: The time complexity of kruskal's algorithm depends on two operations i.e. sorting of all edges and union-find operation.Thus, the overall time complexity is: $O(ElogV)$
* Space complexity: The space complexity of kruskal's algorithm includes storage for edges, union-find data structure and storage for the MST. Thus the overall space complexity is: $O(E+V)$
