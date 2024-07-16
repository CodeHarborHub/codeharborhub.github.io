---
id: crawler-log-folder
title: 1598. Crawler Log Folder
sidebar_label:  1598. Crawler Log Folder
tags:
- Array
- Union Find
- Graph
- Minimum Spanning Tree
description: "This is a solution to the 1598. Crawler Log Folder problem on LeetCode."
---

## Problem Description
The Leetcode file system keeps a log each time some user performs a change folder operation.

The operations are described below:

"../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
"./" : Remain in the same folder.
"x/" : Move to the child folder named x (This folder is guaranteed to always exist).
You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

The file system starts in the main folder, then the operations in logs are performed.

Return the minimum number of operations needed to go back to the main folder after the change folder operations.
### Examples
**Example 1:**
![image](https://assets.leetcode.com/uploads/2020/09/09/sample_11_1957.png)
```
Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
```

### Constraints
- `1 <= logs.length <= 10^3`
- `2 <= logs[i].length <= 10`
- `logs[i] contains lowercase English letters, digits, '.', and '/'.`
- `logs[i] follows the format described in the statement.`
- `Folder names consist of lowercase English letters and digits.`

## Solution for 1598. Crawler Log Folder

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      var minOperations = function(logs) {
        let cnt = 0;
        for (let log of logs) {
            if (log === "../") {
                if (cnt > 0) {
                    cnt--;
                }
            } else if (log !== "./") {
                cnt++;
            }
        }
        return cnt;
    };

      const input = logs = ["d1/","d2/","../","d21/","./"]
      const output = minOperations(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $O(n) $ 
    - Space Complexity: $ O(1)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function minOperations(logs: string[]): number {
    let cnt = 0;
    for (let log of logs) {
        if (log === "../") {
            if (cnt > 0) {
                cnt--;
            }
        } else if (log !== "./") {
            cnt++;
        }
    }
    return cnt;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   from typing import List

class Solution:
    def minOperations(self, logs: List[str]) -> int:
        cnt = 0
        for log in logs:
            if log == "../":
                if cnt > 0:
                    cnt -= 1
            elif log != "./":
                cnt += 1
        return cnt

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.List;

public class Solution {
    public int minOperations(List<String> logs) {
        int cnt = 0;
        for (String log : logs) {
            if (log.equals("../")) {
                if (cnt > 0) {
                    cnt--;
                }
            } else if (!log.equals("./")) {
                cnt++;
            }
        }
        return cnt;
    }
}

    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int minOperations(vector<string>& logs) {
        int cnt=0;
        for (int i = 0; i < logs.size(); i++) {
            if (logs[i] == "../") {
                if(cnt)
                    cnt--;
                else continue;
            } else if (logs[i] == "./") {
                continue;
            } else{
                cnt++;
            }
        }
        return cnt;
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [ 1598. Crawler Log Folder](https://leetcode.com/problems/crawler-log-folder/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/crawler-log-folder/description/)

