---
id: word-ladder-II
title: Word ladder II solution
sidebar_label: 0126 Word ladder II
tags:
  - String
  - BFS (Breadth-First Search)
  - Backtracking
  - Graph
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the word ladder II problem on LeetCode."
---

## Problem Description

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord $s1 -> s2 -> ... -> sk$ such that:

Every adjacent pair of words differs by a single letter.
Every si for $1 <= i <= k$ is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

### Examples

**Example 1:**

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
Explanation: There are 2 shortest transformation sequences:
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
```

**Example 2:**

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: []
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```

### Constraints

- $1 <= beginWord.length <= 5$
- $endWord.length == beginWord.length$
- $1 <= wordList.length <= 500$
- $wordList[i].length == beginWord.length$
- beginWord, endWord, and wordList[i] consist of lowercase English letters.
- beginWord != endWord
- All the words in wordList are unique.
- The sum of all shortest transformation sequences does not exceed 105.

## Solution for Word Ladder II Problem

<Tabs>
  <TabItem value="Python 3" label="Python 3">
  
### Approach :

#### Intuition

Define a helper function neighbors(word) that generates all the possible words by changing a single character in the given word.
Initialize a variable words as a dictionary with beginWord as the key and a lambda function returning [[beginWord]] as the value. This dictionary will keep track of all possible transformation sequences.
Initialize a set unvisited containing all words in wordList except beginWord.
Perform BFS:
While there are words in words and endWord is not yet found in words:
Increment a counter i.
Initialize a new dictionary new_words to store the next layer of words.
Iterate through each word s in words:
Generate all possible neighbors ss of s.
If ss is in unvisited, create a lambda function get_seqs that appends ss to each sequence of words ending with s, and add ss and get_seqs to new_words.
Update words to new_words.
Remove the keys of new_words from unvisited.
Return the transformation sequences ending with endWord.


#### Code in Different Languages

<Tabs>
  <TabItem value="Python3" label="Python3">
  <SolutionAuthor name="@mahek0620"/>
   ```python3
    class Solution:
    def findLadders(
        self, beginWord: str, endWord: str, wordList: List[str]
    ) -> List[List[str]]:
        def neighbors(word):
            for i in range(len(word)):
                for char in "abcdefghijklmnopqrstuvwxyz":
                    yield word[:i] + char + word[i + 1 :]

        i = 1
        words = {beginWord: lambda: [[beginWord]]}
        unvisited = set(wordList)
        while words and endWord not in words:
            i += 1
            new_words = defaultdict(lambda: lambda: [])
            for s in words:
                for ss in neighbors(s):
                    if ss in unvisited:

                        def get_seqs(capture=(ss, new_words[ss], words[s])):
                            ss, ss_get_seqs, s_get_seqs = capture
                            seqs = ss_get_seqs()
                            for seq in s_get_seqs():
                                seq.append(ss)
                                seqs.append(seq)
                            return seqs

                        new_words[ss] = get_seqs
            words = new_words
            unvisited -= words.keys()
        return words[endWord]()

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> ans = new ArrayList<>(); 
        Map<String, Set<String>> reverse = new HashMap<>(); // reverse graph start from endWord
        Set<String> wordSet = new HashSet<>(wordList); // remove the duplicate words
        wordSet.remove(beginWord); // remove the first word to avoid cycle path
        Queue<String> queue = new LinkedList<>(); // store current layer nodes
        queue.add(beginWord); // first layer has only beginWord
        Set<String> nextLevel = new HashSet<>(); // store nextLayer nodes
        boolean findEnd = false; // find endWord flag
        while (!queue.isEmpty()) { // traverse current layer nodes
            String word = queue.remove();
            for (String next : wordSet) {
                if (isLadder(word, next)) { // is ladder words
					// construct the reverse graph from endWord
                    Set<String> reverseLadders = reverse.computeIfAbsent(next, k -> new HashSet<>());
                    reverseLadders.add(word); 
                    if (endWord.equals(next)) {
                        findEnd = true;
                    }
                    nextLevel.add(next); // store next layer nodes
                }
            }
            if (queue.isEmpty()) { // when current layer is all visited
                if (findEnd) break; // if find the endWord, then break the while loop
                queue.addAll(nextLevel); // add next layer nodes to queue
                wordSet.removeAll(nextLevel); // remove all next layer nodes in wordSet
                nextLevel.clear();
            }
        }
        if (!findEnd) return ans; // if can't reach endWord from startWord, then return ans.
        Set<String> path = new LinkedHashSet<>();
        path.add(endWord);
		// traverse reverse graph from endWord to beginWord
        findPath(endWord, beginWord, reverse, ans, path); 
        return ans;
    }


    private void findPath(String endWord, String beginWord, Map<String, Set<String>> graph,
                                 List<List<String>> ans, Set<String> path) {
        Set<String> next = graph.get(endWord);
        if (next == null) return;
        for (String word : next) {
            path.add(word);
            if (beginWord.equals(word)) {
                List<String> shortestPath = new ArrayList<>(path);
                Collections.reverse(shortestPath); // reverse words in shortest path
                ans.add(shortestPath); // add the shortest path to ans.
            } else {
                findPath(word, beginWord, graph, ans, path);
            }
            path.remove(word);
        }
    }

    private boolean isLadder(String s, String t) {
        if (s.length() != t.length()) return false;
        int diffCount = 0;
        int n = s.length();
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) != t.charAt(i)) diffCount++;
            if (diffCount > 1) return false;
        }
        return diffCount == 1;
    }}
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
    class Solution {
public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        int n=wordList.size();

        unordered_set<string> uset;
        for(auto const &it:wordList){
            if(it!=beginWord) uset.insert(it);
        }

        queue<string> q;
        q.push(beginWord);

        vector<pair<string,int>> levels;
        int cnt=0;
        bool flag=false;

        while(!q.empty()){
            int sz=q.size();
        
            for(int i=0;i<sz;i++){
                string node=q.front();
                q.pop();

                levels.push_back({node,cnt});
                
                if(node==endWord){
                    flag=true;
                    break;
                }

                for(int i=0;i<node.length();i++){
                    char original=node[i];
                    for(char j='a';j<='z';j++){
                        if(original==j) continue;
                        
                        node[i]=j;
                        if(uset.find(node)!=uset.end()){
                            q.push(node);
                            uset.erase(node);
                        }
                    }
                    node[i]=original;
                }
            }
            if(flag) break;
            cnt++;
        }
        
        vector<vector<string>> ans;

        if(!flag){
            return ans;
        }

        vector<pair<string,int>>::reverse_iterator it=levels.rbegin();

        vector<string> vec;
        dfs(endWord,levels,ans,vec,it,cnt,beginWord);

        return ans;
    }

private:

    void dfs(string str,vector<pair<string,int>> &levels,vector<vector<string>> &ans,vector<string> &vec,vector<pair<string,int>>::reverse_iterator it,int cnt,string &beginWord){
        if(str==beginWord){
            vec.push_back(str);
            reverse(vec.begin(),vec.end());
            ans.push_back(vec);
            reverse(vec.begin(),vec.end());
            vec.pop_back();

            return;
        }
        
        while(it!=levels.rend() && it->second==cnt){
            it++;
        }

        while(it!=levels.rend() && it->second==cnt-1){
            if(isPossible(str,it->first)){
                vec.push_back(str);
                dfs(it->first,levels,ans,vec,it,cnt-1,beginWord);
                vec.pop_back();
            }
            it++;
        }
    }

    bool isPossible(string str1,string str2){
        int n=str1.length();

        int diff=0;
        for(int i=0;i<n;i++){
            if(str1[i]!=str2[i]){
                diff++;
            }

            if(diff>1) return false;
        }

        return true;
    }
};
    ```

  </TabItem>
</Tabs>


</TabItem>

</Tabs>

## References

- **LeetCode Problem**: [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/word-ladder-ii/solution/)

- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
