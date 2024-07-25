---
id: find-duplicate-file-in-system
title: Find Duplicate File in System
sidebar_label: 0609 - Find Duplicate File in System
tags:
  - String
  - Hash Table
  - Array
description: "This is a solution to the Find Duplicate File in System problem on LeetCode."
---

## Problem Description

Given a list `paths` of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in **any order**.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

- `"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"`

It means there are `n` files `(f1.txt, f2.txt ... fn.txt)` with content `(f1_content, f2_content ... fn_content)` respectively in the directory `"root/d1/d2/.../dm"`. Note that `n >= 1` and `m >= 0`. If `m = 0`, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

- `"directory_path/file_name.txt"`

### Examples

**Example 1:**

```
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```

**Example 2:**

```
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```

### Constraints

- $1 \leq \text{paths.length} \leq  2 \times 10^4$
- $1 \leq paths[i].length \leq 3000$
- $1 \leq sum(paths[i].length) \leq 5 * 10^5$
- `paths[i]` consist of English letters, digits, `'/'`, `'.'`, `'('`, `')'`, and `' '`.
- You may assume no files or directories share the same name in the same directory.
- You may assume each given directory info represents a unique directory. A single blank space separates the directory path and file info.

## Solution for Find Duplicate File in System

### Approach 1 Brute Force [Time Limit Exceeded]

For the brute force solution, firstly we obtain the directory paths, the filenames and file contents separately by appropriately splitting the elements of the pathspathspaths list. While doing so, we keep on creating a list which contains the full path of every file along with the contents of the file. The list contains data in the form

> [[file_1_full_path,file_1_contents],[file_2_full_path,file_2_contents]...,[file_n_full_path,file_n_contents]]

Once this is done, we iterate over this list. For every element i chosen from the list, we iterate over the whole list to find another element j whose file contents are the same as the $i^{th}$ element. For every such element found, we put the $j^{th}$ element's file path in a temporary list l and we also mark the $j^{th}$ element as visited so that this element isn't considered again in the future. Thus, when we reach the end of the array for every $i^{th}$ element, we obtain a list of file paths in l, which have the same contents as the file corresponding to the $i^{th}$ element. If this list isn't empty, it indicates that there exists content duplicate to the $i^{th}$ element. Thus, we also need to put the $i^{th}$ element's file path in the l.

At the end of each iteration, we put this list l obtained in the resultant list res and reset the list l for finding the duplicates of the next element.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <string>
#include <sstream>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    std::vector<std::vector<std::string>> findDuplicate(std::vector<std::string>& paths) {
        std::vector<std::pair<std::string, std::string>> list;
        for (const auto& path : paths) {
            std::istringstream iss(path);
            std::string dir;
            iss >> dir;
            std::string file;
            while (iss >> file) {
                auto pos = file.find('(');
                std::string fileName = file.substr(0, pos);
                std::string content = file.substr(pos + 1, file.size() - pos - 2);
                list.emplace_back(dir + "/" + fileName, content);
            }
        }

        std::vector<bool> visited(list.size(), false);
        std::vector<std::vector<std::string>> res;
        for (size_t i = 0; i < list.size() - 1; ++i) {
            if (visited[i]) continue;
            std::vector<std::string> l;
            for (size_t j = i + 1; j < list.size(); ++j) {
                if (list[i].second == list[j].second) {
                    l.push_back(list[j].first);
                    visited[j] = true;
                }
            }
            if (!l.empty()) {
                l.push_back(list[i].first);
                res.push_back(l);
            }
        }
        return res;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    public List < List < String >> findDuplicate(String[] paths) {
        List < String[] > list = new ArrayList < > ();
        for (String path: paths) {
            String[] values = path.split(" ");
            for (int i = 1; i < values.length; i++) {
                String[] name_cont = values[i].split("\\(");
                name_cont[1] = name_cont[1].replace(")", "");
                list.add(new String[] {
                    values[0] + "/" + name_cont[0], name_cont[1]
                });
            }
        }
        boolean[] visited = new boolean[list.size()];
        List < List < String >> res = new ArrayList < > ();
        for (int i = 0; i < list.size() - 1; i++) {
            if (visited[i])
                continue;
            List < String > l = new ArrayList < > ();
            for (int j = i + 1; j < list.size(); j++) {
                if (list.get(i)[1].equals(list.get(j)[1])) {
                    l.add(list.get(j)[0]);
                    visited[j] = true;
                }
            }
            if (l.size() > 0) {
                l.add(list.get(i)[0]);
                res.add(l);
            }
        }
        return res;
    }
}

```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from collections import defaultdict

class Solution:
    def findDuplicate(self, paths):
        list_ = []
        for path in paths:
            values = path.split(" ")
            for i in range(1, len(values)):
                name_cont = values[i].split("(")
                name_cont[1] = name_cont[1].replace(")", "")
                list_.append([values[0] + "/" + name_cont[0], name_cont[1]])
        
        visited = [False] * len(list_)
        res = []
        for i in range(len(list_) - 1):
            if visited[i]:
                continue
            l = []
            for j in range(i + 1, len(list_)):
                if list_[i][1] == list_[j][1]:
                    l.append(list_[j][0])
                    visited[j] = True
            if l:
                l.append(list_[i][0])
                res.append(l)
        
        return res
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(n \times x + f^2 \times s)$

> **Reason**: Creation of list will take O(n∗x), where n is the number of directories and x is the average string length. Every file is compared with every other file. Let f files are there with average size of s, then files comparision will take O(f2∗s), equals can take O(s). Here, Worst case will be when all files are unique.

### Space Complexity: $O(n \times x)$

> **Reason**: Size of lists res and list can grow upto n∗x.

### Approach 2 Using HashMap
#### Algorithm

In this approach, firstly we obtain the directory paths, the file names and their contents separately by appropriately splitting each string in the given paths list. In order to find the files with duplicate contents, we make use of a HashMap map, which stores the data in the form (contents,list_of_file_paths_with_this_content). Thus, for every file's contents, we check if the same content already exist in the hashmap. If so, we add the current file's path to the list of files corresponding to the current contents. Otherwise, we create a new entry in the map, with the current contents as the key and the value being a list with only one entry(the current file's path).

At the end, we find out the contents corresponding to which atleast two file paths exist. We obtain the resultant list res, which is a list of lists containing these file paths corresponding to the same contents.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <sstream>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> map;
        for (const string& path : paths) {
            istringstream iss(path);
            vector<string> values((istream_iterator<string>(iss)), istream_iterator<string>());
            for (size_t i = 1; i < values.size(); ++i) {
                size_t pos = values[i].find('(');
                string name = values[i].substr(0, pos);
                string content = values[i].substr(pos + 1, values[i].size() - pos - 2);
                map[content].push_back(values[0] + "/" + name);
            }
        }
        vector<vector<string>> res;
        for (const auto& pair : map) {
            if (pair.second.size() > 1) {
                res.push_back(pair.second);
            }
        }
        return res;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java

public class Solution {
    public List < List < String >> findDuplicate(String[] paths) {
        HashMap < String, List < String >> map = new HashMap < > ();
        for (String path: paths) {
            String[] values = path.split(" ");
            for (int i = 1; i < values.length; i++) {
                String[] name_cont = values[i].split("\\(");
                name_cont[1] = name_cont[1].replace(")", "");
                List < String > list = map.getOrDefault(name_cont[1], new ArrayList < String > ());
                list.add(values[0] + "/" + name_cont[0]);
                map.put(name_cont[1], list);
            }
        }
        List < List < String >> res = new ArrayList < > ();
        for (String key: map.keySet()) {
            if (map.get(key).size() > 1)
                res.add(map.get(key));
        }
        return res;
    }
}

```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from collections import defaultdict

class Solution:
    def findDuplicate(self, paths):
        file_map = defaultdict(list)
        
        for path in paths:
            values = path.split(" ")
            for i in range(1, len(values)):
                name_cont = values[i].split("(")
                name_cont[1] = name_cont[1].replace(")", "")
                file_map[name_cont[1]].append(values[0] + "/" + name_cont[0])
        
        res = []
        for key, value in file_map.items():
            if len(value) > 1:
                res.append(value)
        
        return res

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(n \times x)$

> **Reason**: n strings of average length x is parsed.

### Space Complexity: $O(n \times x)$

> **Reason**: map and res size grows upto n∗x.

## References

- **LeetCode Problem**: [Find Duplicate File in System](https://leetcode.com/problems/find-duplicate-file-in-system/description/)

- **Solution Link**: [Find Duplicate File in System](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>