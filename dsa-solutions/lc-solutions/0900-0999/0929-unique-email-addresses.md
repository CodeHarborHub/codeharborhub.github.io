---
id: Unique-Email-Addresses
title: Unique Email Addresses
sidebar_label: 0929 - Unique Email Addresses
tags:
  - medium
  - Strings
  - Hash Table
---

## Problem Description

Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name. If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address. If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com". It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

## Examples

**Example 1:**

```
Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
```

**Example 2:**

```
Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
```

## Constraints

```
1 <= emails.length <= 100
1 <= emails[i].length <= 100
emails[i] consist of lowercase English letters, '+', '.' and '@'.
Each emails[i] contains exactly one '@' character.
All local and domain names are non-empty.
Local names do not start with a '+' character.
Domain names end with the ".com" suffix.
```

## Solution

### Python

```python
class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        unique_emails = set()
        for email in emails:
            local, domain = email.split('@')
            local = local.split('+')[0].replace('.', '')
            unique_emails.add(local + '@' + domain)
        return len(unique_emails)

# Example usage:
solution = Solution()
print(solution.numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))  # Output: 2
```

### C++

```cpp
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        unordered_set<string> uniqueEmails;
        for (const string& email : emails) {
            string local;
            string domain;
            bool atFound = false;
            bool plusFound = false;
            for (char c : email) {
                if (c == '@') {
                    atFound = true;
                }
                if (atFound) {
                    domain += c;
                } else {
                    if (c == '+') {
                        plusFound = true;
                    }
                    if (!plusFound && c != '.') {
                        local += c;
                    }
                }
            }
            uniqueEmails.insert(local + domain);
        }
        return uniqueEmails.size();
    }
};

// Example usage:
int main() {
    Solution solution;
    vector<string> emails = {"test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"};
    int result = solution.numUniqueEmails(emails);  // Output: 2
    cout << result << endl;
    return 0;
}
```

### Java

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> uniqueEmails = new HashSet<>();
        for (String email : emails) {
            String[] parts = email.split("@");
            String local = parts[0].split("\+")[0].replace(".", "");
            uniqueEmails.add(local + "@" + parts[1]);
        }
        return uniqueEmails.size();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] emails = {"test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"};
        int result = solution.numUniqueEmails(emails);  // Output: 2
        System.out.println(result);
    }
}
```

### JavaScript

```javascript
var numUniqueEmails = function (emails) {
  let uniqueEmails = new Set();
  for (let email of emails) {
    let [local, domain] = email.split("@");
    local = local.split("+")[0].replace(/\./g, "");
    uniqueEmails.add(local + "@" + domain);
  }
  return uniqueEmails.size;
};

// Example usage:
console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
); // Output: 2
```
