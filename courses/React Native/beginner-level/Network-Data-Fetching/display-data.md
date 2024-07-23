---
id: lesson-2
title: "Displaying Data in Lists (FlatList, SectionList)"
sidebar_label: Displaying Data in Lists
sidebar_position: 2
description: "Learn Displaying Data in Lists (`FlatList`, `SectionList`)"
tags: [courses,beginner-level,React Native,Introduction]
--- 
   

**Displaying Data with `FlatList`**

```jsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;
```

**Displaying Data with `SectionList`**

`SectionList` is used for displaying grouped data.

```jsx
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, ActivityIndicator } from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const groupedData = json.reduce((sections, item) => {
          const firstLetter = item.title.charAt(0).toUpperCase();
          const section = sections.find(sec => sec.title === firstLetter);
          if (section) {
            section.data.push(item);
          } else {
            sections.push({ title: firstLetter, data: [item] });
          }
          return sections;
        }, []);
        setData(groupedData);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ padding: 10, backgroundColor: '#ddd' }}>
            <Text style={{ fontSize: 22 }}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;
```
 
:::tip
- **Fetching Data**: Use `fetch` for native support or Axios for a feature-rich API.
- **Handling Responses and Errors**: Manage both success and error cases effectively.
- **Displaying Data**: Use `FlatList` for simple lists and `SectionList` for grouped data.
:::