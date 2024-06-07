---
id: url-processing
title: URL Processing
sidebar_label: URL Processing
sidebar_position: 3
tags: [python, urllib, url processing, networking, parsing, request, error handling]
description: In this tutorial, you will learn about URL processing in Python using the urllib package. We will cover parsing URLs, handling URL requests, managing errors, and more.
---

# Python - URL Processing

In the world of the Internet, different resources are identified by URLs (Uniform Resource Locators). The `urllib` package, bundled with Python's standard library, provides several utilities to handle URLs. It has the following modules:

- `urllib.parse`: Used for parsing a URL into its parts.
- `urllib.request`: Contains functions for opening and reading URLs.
- `urllib.error`: Defines the exceptions raised by `urllib.request`.
- `urllib.robotparser`: Parses the `robots.txt` files.

## The `urllib.parse` Module

This module serves as a standard interface to obtain various parts from a URL string. The module contains the following functions:

### `urlparse(urlstring)`

Parse a URL into six components, returning a 6-item named tuple. Each tuple item is a string corresponding to the following attributes:

| Attribute | Index | Value                          |
|-----------|-------|--------------------------------|
| scheme    | 0     | URL scheme specifier           |
| netloc    | 1     | Network location part          |
| path      | 2     | Hierarchical path              |
| params    | 3     | Parameters for the last path element |
| query     | 4     | Query component                |
| fragment  | 5     | Fragment identifier            |
| username  | -     | User name                      |
| password  | -     | Password                       |
| hostname  | -     | Host name (lower case)         |
| port      | -     | Port number as integer, if present |

#### Example

```python
from urllib.parse import urlparse

url = "https://example.com/employees/name/?salary>=25000"
parsed_url = urlparse(url)
print(type(parsed_url))
print("Scheme:", parsed_url.scheme)
print("Netloc:", parsed_url.netloc)
print("Path:", parsed_url.path)
print("Params:", parsed_url.params)
print("Query string:", parsed_url.query)
print("Fragment:", parsed_url.fragment)
```

Output:

```
<class 'urllib.parse.ParseResult'>
Scheme: https
Netloc: example.com
Path: /employees/name/
Params: 
Query string: salary>=25000
Fragment: 
```

### `parse_qs(qs)`

This function parses a query string given as a string argument. Data is returned as a dictionary where the keys are unique query variable names and the values are lists of values for each name.

#### Example

```python
from urllib.parse import urlparse, parse_qs

url = "https://example.com/employees?name=Anand&salary=25000"
parsed_url = urlparse(url)
dct = parse_qs(parsed_url.query)
print("Query parameters:", dct)
```

Output:

```
Query parameters: {'name': ['Anand'], 'salary': ['25000']}
```

### `urlsplit(urlstring)`

This is similar to `urlparse()`, but does not split the params from the URL. This should generally be used instead of `urlparse()` if the more recent URL syntax allowing parameters to be applied to each segment of the path portion of the URL is wanted.

### `urlunparse(parts)`

This function is the opposite of `urlparse()`. It constructs a URL from a tuple as returned by `urlparse()`. The parts argument can be any six-item iterable, returning an equivalent URL.

#### Example

```python
from urllib.parse import urlunparse

parts = ['https', 'example.com', '/employees/name/', '', 'salary>=25000', '']
new_url = urlunparse(parts)
print("URL:", new_url)
```

Output:

```
URL: https://example.com/employees/name/?salary>=25000
```

### `urlunsplit(parts)`

Combine the elements of a tuple as returned by `urlsplit()` into a complete URL as a string. The parts argument can be any five-item iterable.

## The `urllib.request` Module

This module defines functions and classes which help in opening URLs.

### `urlopen()`

This function opens the given URL, which can be either a string or a `Request` object. The optional `timeout` parameter specifies a timeout in seconds for blocking operations. This function works for HTTP, HTTPS, and FTP connections.

It returns an object that can work as a context manager and has the properties `url`, `headers`, and `status`.

For HTTP and HTTPS URLs, this function returns an `http.client.HTTPResponse` object, slightly modified.

#### Example

The following code uses `urlopen()` function to read the binary data from an image file and writes it to a local file. You can open the image file on your computer using any image viewer.

```python
from urllib.request import urlopen

obj = urlopen("https://www.tutorialspoint.com/static/images/simply-easy-learning.jpg")
data = obj.read()
with open("img.jpg", "wb") as img:
    img.write(data)
```

### The `Request` Object

The `urllib.request` module includes the `Request` class. This class is an abstraction of a URL request. The constructor requires a mandatory string argument, a valid URL.

#### Syntax

```python
urllib.request.Request(url, data=None, headers={}, origin_req_host=None, method=None)
```

#### Parameters

- `url`: A string that is a valid URL.
- `data`: An object specifying additional data to send to the server. This parameter can only be used with HTTP requests. Data may be bytes, file-like objects, and iterables of bytes-like objects.
- `headers`: Should be a dictionary of headers and their associated values.
- `origin_req_host`: Should be the request-host of the origin transaction.
- `method`: Should be a string that indicates the HTTP request method. One of GET, POST, PUT, DELETE, and other HTTP verbs. Default is GET.

#### Example

```python
from urllib.request import Request, urlopen

obj = Request("https://www.tutorialspoint.com/")
resp = urlopen(obj)
data = resp.read()
print(data)
```

### Sending Data

If you define the `data` argument to the `Request` constructor, a POST request will be sent to the server. The data should be any object represented in bytes.

#### Example

```python
from urllib.request import Request, urlopen
from urllib.parse import urlencode

values = {'name': 'Madhu', 'location': 'India', 'language': 'Hindi'}
data = urlencode(values).encode('utf-8')
obj = Request("https://example.com", data)
resp = urlopen(obj)
```

### Sending Headers

The `Request` constructor also accepts a `headers` argument to push header information into the request. It should be in a dictionary object.

#### Example

```python
headers = {'User-Agent': 'Mozilla/5.0'}
obj = Request("https://example.com", headers=headers)
```

## The `urllib.error` Module

Following exceptions are defined in `urllib.error` module:

### `URLError`

`URLError` is raised because there is no network connection (no route to the specified server), or the specified server doesn't exist. In this case, the exception raised will have a 'reason' attribute.

#### Example

```python
from urllib.request import Request, urlopen
import urllib.error as err

obj = Request("http://www.nosuchserver.com")
try:
    urlopen(obj)
except err.URLError as e:
    print(e.reason)
```

Output:

```
[Errno 11001] getaddrinfo failed
```

### `HTTPError`

Every time the server sends an HTTP response, it is associated with a numeric "status code". This code indicates why the server is unable to fulfill the request. The default handlers will handle some of these responses for you. For those it can't handle, `urlopen()` function raises an `HTTPError`. Typical examples of `HTTPErrors` are '404' (page not found), '403' (request forbidden), and '401' (authentication required).

#### Example

```python
from urllib.request import Request, urlopen
import urllib.error as err

obj = Request("http://www.python.org/fish.html")
try:
    urlopen(obj)
except err.HTTPError as e:
    print(e.code)
```

Output:

```
404
```

---

This concludes the comprehensive guide on URL processing in Python using the `urllib` module.