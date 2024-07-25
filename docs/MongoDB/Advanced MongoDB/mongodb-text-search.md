---
id: mongodb-text-search
title: MongoDB - Text Search
sidebar_label: Text Search
sidebar_position: 10
tags: [mongodb, text search, indexing]
description: Learn how to perform text search in MongoDB using text indexes to search inside string content efficiently.
---

Starting from version 2.4, MongoDB supports text indexes for searching inside string content. Text Search uses stemming techniques to search for specified words in string fields by dropping stemming stop words like "a," "an," "the," etc. MongoDB currently supports around 15 languages for text search.

## Enabling Text Search

Initially, Text Search was an experimental feature, but starting from version 2.6, it is enabled by default in MongoDB configurations.

## Creating Text Index

Consider the following documents in the `posts` collection:

```javascript
db.posts.insert({
   "post_text": "enjoy the mongodb articles on tutorialspoint",
   "tags": ["mongodb", "tutorialspoint"]
})

db.posts.insert({
   "post_text": "writing tutorials on mongodb",
   "tags": ["mongodb", "tutorial"]
})
```

To create a text index on the `post_text` field, enabling text search inside the posts' text:

```javascript
db.posts.createIndex({ post_text: "text" })
```

### Using Text Index

After creating the text index on the `post_text` field, you can search for posts containing specific words using the `$text` operator:

```javascript
db.posts.find({ $text: { $search: "tutorialspoint" } }).pretty()
```

This command retrieves documents that contain the word "tutorialspoint" in their post text.

### Diagram: Text Search Process

```mermaid
graph LR;
    A[Query Collection] --> B(Text Indexing);
    B --> C(Search using $text operator);
    C --> D(Retrieve Matching Documents);
```

::: note: Performance Considerations

When using text search in MongoDB:
- Text indexes can significantly improve search performance for string content.
- Consider the language-specific settings for stemming and stop words.
- Optimize text indexes based on the search requirements.
:::
### Table: Text Search Options

| Option | Description                                      |
|--------|--------------------------------------------------|
| $text  | Operator for text search using text indexes.     |
| $search| Specifies the search term or phrase.             |
| $language| Optional parameter for specifying the language for text search. |

## Deleting Text Index

To delete an existing text index, first, find the name of the index using the `getIndexes` method:

```javascript
db.posts.getIndexes()
```

After obtaining the index name, use the `dropIndex` method to delete the text index:

```javascript
db.posts.dropIndex("post_text_text")
```

This command deletes the text index named "post_text_text" from the `posts` collection.
