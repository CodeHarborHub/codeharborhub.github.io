---
id: group-anagrams
title: Group Anagrams (LeetCode)
sidebar_label: 0049-Group Anagrams
tags:
  - Array
  - Hash Table
  - String
  - Sorting
description: Given an array of strings , group the anagrams together.
sidebar_position: 0049
---

## Problem Description

The task is to write a function that takes an array (list) of strings called strs and groups the anagrams together. An anagram is a word obtained by rearranging the letters of another word to form a new word using all the original characters exactly once. For example, "taste" and "state" are anagrams of each other. The function can return the groups in any order, meaning the sequence of the groups is not important, and within each group, the sequence of strings is not important either.

### Example 1

- **Input:** `strs = ["eat","tea","tan","ate","nat","bat"]`
- **Output:** `[["bat"],["nat","tan"],["ate","eat","tea"]]`
- **Explanation:**
  - ["ate", "eat","tea"](when sorted all these strings are "aet"),
  - ["nat","tan"](when sorted all these strings are "ant"),
  - ["bat"](this string has no other string as anagram so it is appended as only 1)

### Example 2

- **Input:** ` strs = [""]`
- **Output:** `[[""]]`
- **Explanation:** There are no strings so empty vector is returned.

### Example 3

- **Input:** ` strs = ["a"]`
- **Output:** `[["a"]]`
- **Explanation:** There is only one string "a" it is returned.

### Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i] consists of lowercase English letters.`

## Approach
- 1. Create a defaultdict of lists: d = defaultdict(list). This will store our anagrams.

- 2. Iterate through each string in the array:

  - "bat": When sorted, becomes "abt". We append "bat" to d["abt"].
  - "ate": When sorted, becomes "aet". We append "ate" to d["aet"].
  - "eat": When sorted, becomes "aet". We append "eat" to d["aet"].
  - "tea": When sorted, becomes "aet". We append "tea" to d["aet"].
  - "tan": When sorted, becomes "ant". We append "tan" to d["ant"].
  - "nat": When sorted, becomes "ant". We append "nat" to d["ant"].
- 3. Now, d looks like this: `{
       "abt": ["bat" ],
       "aet": ["eat", "tea" , "ate"],
       "ant": ["tan", "nat"]
    }`
  - Each key corresponds to a sorted string, and the values are the original strings that are anagrams.

- 4. Finally, we return the dictionary values as a list of lists:

  - [
       ["bat"],
       ["eat", "tea" , "ate"],
       ["tan", "nat"]
    ]

### Solution Code

#### Python

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)
        for s in strs:
            key = "".join(sorted(s))
            anagrams[key].append(s)
        return list(anagrams.values())
```

#### C++
```c++
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> anagramGroups;
        for (auto& str : strs) {
            string key = str;
            sort(key.begin(), key.end()); 
            anagramGroups[key].emplace_back(str);
        }
          vector<vector<string>> groupedAnagrams;
        for (auto& pair : anagramGroups) {
            groupedAnagrams.emplace_back(pair.second);
        }
        return groupedAnagrams;
    }
};
```

#### Java
```Java
import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagramsMap = new HashMap<>();
        for (String str : strs) {
            char[] charArray = str.toCharArray();
            Arrays.sort(charArray);
            String sortedStr = String.valueOf(charArray);
             anagramsMap.computeIfAbsent(sortedStr, key -> new ArrayList<>()).add(str);
        }
        return new ArrayList<>(anagramsMap.values());
    }
}
            
```




#### Conclusion
- Time Complexity
The time complexity of the code is primarily determined by two operations: the sorting operation for each string and the insertion into the dictionary.

  - 1. Sorting Each String: Assuming the average length of the strings is n and there are m strings to sort, the time complexity of sorting each is O(n log n). Since we need to sort m such strings, the total time complexity for this part is O(m * n log n).

   - 2. Inserting into Dictionary: The insertion of m strings into the dictionary has a time complexity of O(m), since each insertion operation into a dictionary is O(1) on average.

    - The total time complexity as O(m * n log n).

- Space Complexity
The space complexity is due to the storage of m entries in the dictionary and the lists of anagrams.

  - 1. Dictionary Storage (HashMap): The dictionary stores lists of anagrams. In the worst case, all strings are anagrams of each other, requiring O(m * n) space (since each of the m strings of length n can be in the same list).

  - 2. Sorted String Keys: Additionally, for each string, we create a sorted copy to use as a key. Since we sort each string in place and only have m keys at any point in time, the space for the keys would be O(m * n).

   - The total space complexity of the algorithm is O(m * n), 