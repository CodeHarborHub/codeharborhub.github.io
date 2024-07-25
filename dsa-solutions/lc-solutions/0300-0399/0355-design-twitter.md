---
id: twitter-design
title: Design Twitter
sidebar_label: Design Twitter
tags:
  - Design
  - OOP
  - System Design
  - Data Structures
description: Design a simplified version of Twitter with basic functionalities using OOP principles.
---

## Problem Description

Design a simplified version of Twitter where users can post tweets, follow/unfollow other users, and see the 10 most recent tweets in their news feed.

### Functionality Requirements

- **postTweet(userId, tweetId)**: Composes a new tweet with ID `tweetId` by the user `userId`. Each tweet ID is unique.
  
- **getNewsFeed(userId)**: Retrieves the 10 most recent tweet IDs in the user's news feed. The feed includes tweets posted by users who the current user follows and their own tweets. Tweets should be ordered from most recent to least recent.

- **follow(followerId, followeeId)**: The user with ID `followerId` starts following the user with ID `followeeId`.

- **unfollow(followerId, followeeId)**: The user with ID `followerId` stops following the user with ID `followeeId`.

### Examples

**Example 1:**

```
Input
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]

Explanation
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
```

### Constraints

- $1 <= userId, followerId, followeeId <= 500$
- $0 <= tweetId <= 10^4$
- At most 3 * 10^4 calls will be made to postTweet, getNewsFeed, follow, and unfollow.

## Solution for Twitter Design Problem

### Design Approach

To implement the simplified Twitter functionality, we'll use the following classes:

- **User**: Represents a user with a unique `userId`, manages their tweets and follows.
- **Tweet**: Represents a tweet with a unique `tweetId` and a timestamp.
- **Twitter**: Manages users, tweets, and the operations (post tweet, get news feed, follow, unfollow).

#### Code in Different Languages

<Tabs>
  
  <TabItem value="Python" label="Python" default>

  <SolutionAuthor name="@mahek0620"/>
   ```python

    from collections import defaultdict, deque
    import heapq

    class Twitter:
    def __init__(self):
        self.user_tweets = defaultdict(deque)  # Maps userId to a deque of their tweets
        self.user_follows = defaultdict(set)  # Maps userId to a set of users they follow
        self.time_stamp = 0  # Global timestamp to keep track of the order of tweets

    def postTweet(self, userId, tweetId):
        # Add the tweet to the user's deque of tweets
        self.user_tweets[userId].appendleft((self.time_stamp, tweetId))
        self.time_stamp += 1

    def getNewsFeed(self, userId):
        # Create a min-heap to keep track of the 10 most recent tweets
        min_heap = []
        
        # Add user's own tweets
        self.addTweetsToHeap(min_heap, userId)
        
        # Add tweets from the users the given user is following
        for followeeId in self.user_follows[userId]:
            self.addTweetsToHeap(min_heap, followeeId)
        
        # Extract tweet IDs from the heap and return them in reverse order (most recent first)
        return [tweetId for time_stamp, tweetId in sorted(min_heap, reverse=True)]

    def addTweetsToHeap(self, heap, userId):
        # Add up to 10 most recent tweets of a user to the heap
        if userId in self.user_tweets:
            for tweet in list(self.user_tweets[userId])[:10]:
                heapq.heappush(heap, tweet)
                if len(heap) > 10:
                    heapq.heappop(heap)

    def follow(self, followerId, followeeId):
        # A user cannot follow themselves
        if followerId != followeeId:
            self.user_follows[followerId].add(followeeId)

    def unfollow(self, followerId, followeeId):
        # Remove the followeeId from the followerId's set of follows
        if followerId in self.user_follows and followeeId in self.user_follows[followerId]:
            self.user_follows[followerId].remove(followeeId)
    ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java


    import java.util.*;
    class Twitter {
    private static int timeStamp = 0;
    private Map<Integer, User> userMap;

    private class Tweet {
        public int id;
        public int time;
        public Tweet next;

        public Tweet(int id) {
            this.id = id;
            this.time = timeStamp++;
            this.next = null;
        }
    }

    public class User {
        public int id;
        public Set<Integer> followed;
        public Tweet tweetHead;

        public User(int id) {
            this.id = id;
            followed = new HashSet<>();
            follow(id); // follow itself
            tweetHead = null;
        }

        public void follow(int id) {
            followed.add(id);
        }

        public void unfollow(int id) {
            followed.remove(id);
        }

        public void post(int id) {
            Tweet t = new Tweet(id);
            t.next = tweetHead;
            tweetHead = t;
        }
    }

    public Twitter() {
        userMap = new HashMap<>();
    }

    public void postTweet(int userId, int tweetId) {
        if (!userMap.containsKey(userId)) {
            userMap.put(userId, new User(userId));
        }
        userMap.get(userId).post(tweetId);
    }

    public List<Integer> getNewsFeed(int userId) {
        List<Integer> res = new ArrayList<>();
        if (!userMap.containsKey(userId)) return res;

        Set<Integer> users = userMap.get(userId).followed;
        PriorityQueue<Tweet> pq = new PriorityQueue<>(users.size(), (a, b) -> (b.time - a.time));

        for (int user : users) {
            Tweet t = userMap.get(user).tweetHead;
            if (t != null) {
                pq.add(t);
            }
        }
        int n = 0;
        while (!pq.isEmpty() && n < 10) {
            Tweet t = pq.poll();
            res.add(t.id);
            n++;
            if (t.next != null) {
                pq.add(t.next);
            }
        }
        return res;
    }

    public void follow(int followerId, int followeeId) {
        if (!userMap.containsKey(followerId)) {
            userMap.put(followerId, new User(followerId));
        }
        if (!userMap.containsKey(followeeId)) {
            userMap.put(followeeId, new User(followeeId));
        }
        userMap.get(followerId).follow(followeeId);
    }

    public void unfollow(int followerId, int followeeId) {
        if (!userMap.containsKey(followerId)) return;
        if (followerId == followeeId) return;
        userMap.get(followerId).unfollow(followeeId);
    }
    
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp

    class Twitter {
    public:
    Twitter() {
        
    }
    
    void postTweet(int userId, int tweetId) {
        feed.push_back({ userId, tweetId });
    }
    
    vector<int> getNewsFeed(int userId) {
        std::vector<int> ret;
        for (int i = feed.size() - 1; i >= 0; --i) {
            auto& [user, tweet] = feed[i];
            if (userId == user || (following[userId].contains(user))) {
                ret.push_back(tweet);
                if (ret.size() == 10) break;
            }
        }
        return ret;
    }
    
    void follow(int followerId, int followeeId) {
        following[followerId].insert(followeeId);
    }
    
    void unfollow(int followerId, int followeeId) {
        following[followerId].erase(followeeId);
    }

    std::unordered_map<int, std::unordered_set<int>> following;
    std::vector<std::pair<int, int>> feed;
    };
    ```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time complexity**: The time complexity of the solution is $O(N)$, where N is the number of nodes in the binary tree. This is because we visit each node exactly once during the level-order traversal.
- **Space complexity**: The space complexity of the solution is $O(N)$, where N is the number of nodes in the binary tree. This is because the space used by the queue for level-order traversal can be at most N in the worst case.

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/binary-tree-right-side-view/)
- **Solution Link:** [Binary Tree Right Side View Solution on LeetCode](https://leetcode.com/problems/binary-tree-right-side-view/solutions/)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
