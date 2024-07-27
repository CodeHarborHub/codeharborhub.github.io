# Serialization and Deserialization in Python

Serialization in Python is the process of converting a Python object into a byte stream, which can then be easily stored or transmitted.

 Deserialization is the reverse process, where the byte stream is converted back into a Python object. 

 In python, `pickle` module is used for this.

 - Serialization (Pickling): Converts Python objects (like lists, dictionaries, or custom objects) into a byte stream.
 - Deserialization (Unpickling): Converts the byte stream back into the original Python object.


Some of the `pickle` module functions :

- `pickle.dump(obj, file, protocol=None, *, fix_imports=True, buffer_callback=None)` : Serializes `obj` and writes it to the open file object `file`.
- `pickle.dumps(obj, protocol=None, *, fix_imports=True, buffer_callback=None)` : Serializes `obj` to a byte stream and returns it.
- `pickle.loads(bytes_object, *, fix_imports=True, encoding="ASCII", errors="strict", buffers=None)` : Deserializes `bytes_object` (a byte stream) to a Python object.


#### Serializing and writing to file
```python
import pickle


data = {'key': 'value', 'number': 42}
with open('data.pkl', 'wb') as file:
    pickle.dump(data, file)
```

#### Reading and Deserializing from a File
```python
import pickle

with open('data.pkl', 'rb') as file:
    loaded_data = pickle.load(file)
print(loaded_data)
```
