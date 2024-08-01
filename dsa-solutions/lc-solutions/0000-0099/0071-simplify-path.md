---
id: simplify-path
title: Simplify Path
sidebar_label: 0071 - Simplify Path

tags:
- stack
- lifo
- queue
- dequeue

description: "This is a solution to the Simplify Path problem on LeetCode."
---

## Problem Description
Given an absolute path for a Unix-style file system, which begins with a slash `'/'`, transform this path into its **simplified canonical path**.

In Unix-style file system context, a single period `'.'` signifies the current directory, a double period `".."` denotes moving up one directory level, and multiple slashes such as `"//"` are interpreted as a single slash. In this problem, treat sequences of periods not covered by the previous rules (like `"..."`) as valid names for files or directories.

The simplified canonical path should adhere to the following rules:
- It must start with a single slash `'/'`.
- Directories within the path should be separated by only one slash `'/'`.
- It should not end with a slash `'/'`, unless it's the root directory.
- It should exclude any single or double periods used to denote current or parent directories.
Return the new path.

### Examples

**Example 1:**

```
Input: path = "/home/"
Output: "/home"
Explanation: The trailing slash should be removed.
```

**Example 2:**
```
Input: "/home//foo/"
Output: "/home/foo"
Explanation:
Multiple consecutive slashes are replaced by a single one.
```

**Example 3:**
```
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
Explanation:
A double period ".." refers to the directory up a level.
```

**Example 4:**
```
Input: path = "/../"
Output: "/"
Explanation:
Going one level up from the root directory is not possible.
```

**Example 5:**
```
Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"
Explanation:
"..." is a valid name for a directory in this problem.
```


### Constraints
- `1 <= path.length <= 3000`
- `path` consists of English letters, digits, period `'.'`, slash `'/'` or `'_'`
- `path` is a valid absolute Unix path


## Solution for Simplify Path
### Approach 
#### Brute Force 
- The brute force approach involves iteratively processing each component of the path to build the simplified canonical path.
    - **Splitting the Path**: Split the input path by '/' to separate out each directory or file name.
    - **Using a Stack:** Utilize a stack to keep track of directories as you iterate through the split components of the path.
        - Push directories onto the stack unless they are "." or an empty string (resulting from consecutive slashes).
        - For "..", pop the top element from the stack if the stack is not empty (handling the parent directory).
    - **Constructing the Result:** After processing all components, construct the simplified path using the elements in the stack.
        - Join elements from the stack with '/' to form the final path string.
    - **Edge Cases:** Handle cases like multiple consecutive slashes, leading and trailing slashes, and paths that move up beyond the root directory.


#### Optimized Approach 
- The optimized approach aims to achieve the same result but with improved efficiency, primarily by avoiding unnecessary string manipulations and ensuring each component is processed only once.
- **Splitting and Processing:** Split the input path by '/' and iterate through each component.
    - Use a deque (double-ended queue) instead of a stack for efficient popping from the front when necessary.
- **Directly Build the Result:** Instead of joining strings multiple times, directly construct the result path during the iteration.
    - Append valid directory names to the result path and handle ".." by moving back in the result path string.
- **Complexity**: Both approaches involve O(n) time complexity, where n is the length of the input path, due to iterating through each component once.
- **Space Complexity:** The optimized approach may have slightly better space complexity due to minimizing the use of additional data structures for storing intermediate results.

##### Example
Consider the path "/a/b/c/.././d/e/f/../../g/h/". The simplified canonical path should be "/a/b/d/e/g/h".

**Corner Cases**
- Paths containing only slashes ("/").
- Paths with consecutive slashes ("/a//b").
- Paths with '.' and '..' in various combinations ("/../", "/a/b/./../c").
- Paths that reduce to the root directory ("/../../").
- Paths that don't reduce at all ("/a/b/c").

**Implementation**
```python
from collections import deque

class Solution:
    def simplifyPath(self, path: str) -> str:
        components = path.split('/')
        stack = deque()
        
        for comp in components:
            if comp == '' or comp == '.':
                continue
            elif comp == '..':
                if stack:
                    stack.pop()
            else:
                stack.append(comp)
        
        # Construct simplified path
        if not stack:
            return '/'
        else:
            return '/' + '/'.join(stack)

# Example usage:
solution = Solution()
path = "/a/b/c/.././d/e/f/../../g/h/"
print(solution.simplifyPath(path))  # Output: "/a/b/d/e/g/h"
```

<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

    ```jsx live
    function Solution(arr) {
      var simplifyPath = function(path) {
        const components = path.split('/');
        const stack = [];

        for (let comp of components) {
            if (comp === '' || comp === '.') {
                continue;
            } else if (comp === '..') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(comp);
            }
        }

        // Construct simplified path
        let simplifiedPath = '/' + stack.join('/');

        // Ensure not ending with '/'
        if (simplifiedPath.length > 1 && simplifiedPath.endsWith('/')) {
            simplifiedPath = simplifiedPath.slice(0, -1);
        }


        return simplifiedPath;
      };

      const input = "/home//foo/"
      const output = simplifyPath(input)
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


  ## Code in Different Languages

   <Tabs>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@vansh-codes" />

   ```javascript
    /**
     * @param {string} path
     * @return {string}
     */
    var simplifyPath = function(path) {
        const components = path.split('/');
        const stack = [];

        for (let comp of components) {
            if (comp === '' || comp === '.') {
                continue;
            } else if (comp === '..') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(comp);
            }
        }

        // Construct simplified path
        let simplifiedPath = '/' + stack.join('/');

        // Ensure not ending with '/'
        if (simplifiedPath.length > 1 && simplifiedPath.endsWith('/')) {
            simplifiedPath = simplifiedPath.slice(0, -1);
        }

        return simplifiedPath;
    };
    ```

  </TabItem>

  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@vansh-codes" /> 

   ```typescript
    function simplifyPath(path: string): string {
        const components = path.split('/');
        const stack = [];

        for (let comp of components) {
            if (comp === '' || comp === '.') {
                continue;
            } else if (comp === '..') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(comp);
            }
        }

        // Construct simplified path
        let simplifiedPath = '/' + stack.join('/');

        // Ensure not ending with '/'
        if (simplifiedPath.length > 1 && simplifiedPath.endsWith('/')) {
            simplifiedPath = simplifiedPath.slice(0, -1);
        }

        return simplifiedPath;
    };
    ```

  </TabItem>

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@vansh-codes" />

   ```python
    class Solution(object):
        def simplifyPath(self, path):
            """
            :type path: str
            :rtype: str
            """
            components = path.split('/')
            stack = []

            for comp in components:
                if comp == '' or comp == '.':
                    continue
                elif comp == '..':
                    if stack:
                        stack.pop()
                else:
                    stack.append(comp)

            # Construct simplified path
            simplified_path = '/' + '/'.join(stack)

            # Ensure not ending with '/'
            if len(simplified_path) > 1 and simplified_path.endswith('/'):
                simplified_path = simplified_path[:-1]

            return simplified_path
    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@vansh-codes" />

   ```java
    class Solution {
        public String simplifyPath(String path) {
            String[] components = path.split("/");
            Deque<String> stack = new ArrayDeque<>();

            for (String comp : components) {
                if (comp.equals("") || comp.equals(".")) {
                    continue;
                } else if (comp.equals("..")) {
                    if (!stack.isEmpty()) {
                        stack.pop();
                    }
                } else {
                    stack.push(comp);
                }
            }

            // Construct simplified path
            StringBuilder simplifiedPath = new StringBuilder();
            while (!stack.isEmpty()) {
                simplifiedPath.append("/").append(stack.removeLast());
            }

            // Handle case when simplified path is empty
            if (simplifiedPath.length() == 0) {
                return "/";
            } else {
                return simplifiedPath.toString();
            }
        }
    }
    ```

  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@vansh-codes" />

   ```cpp
   class Solution {
    public:
    string simplifyPath(string path) {
        vector<string> components;
            stringstream ss(path);
            string token;

            while (getline(ss, token, '/')) {
                if (token == "" || token == ".") {
                    continue;
                } else if (token == "..") {
                    if (!components.empty()) {
                        components.pop_back();
                    }
                } else {
                    components.push_back(token);
                }
            }

            // Construct simplified path
            deque<string> stack(components.begin(), components.end());
            stringstream result;

            while (!stack.empty()) {
                result << '/' << stack.front();
                stack.pop_front();
            }

            string simplifiedPath = result.str();

            // Ensure not ending with '/'
            if (simplifiedPath.length() > 1 && simplifiedPath.back() == '/') {
                simplifiedPath.pop_back();
            }

            return simplifiedPath.empty() ? "/" : simplifiedPath;
        }
    };
    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Simplify Path](https://leetcode.com/problems/simplify-path/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/simplify-path/solutions/)