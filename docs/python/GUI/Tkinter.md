---
id: Tkinter
title: Tkinter in Python
sidebar_label: TKINTER in Python
sidebar_position: 1
tags: [python,GUI,Tkinter,Widget]
description: In this tutorial, you'll learn the basics of GUI programming with Tkinter.Tkinter is the most commonly used library for developing GUI (Graphical User Interface) in Python.
---

# Introduction to GUI
GUI stands for Graphical User Interface, and refers to computer programs that provide a visual means for users to interact with an underlying application or system.<br/>
Python has a variety of libraries, but these four stand out, especially in terms of GUI. <br/>
- Tkinter 
- Kivy 
- Python QT 
- wxPython

## Tkinter Programming
Tkinter is the standard GUI (Graphical User Interface) library for Python. Python, when combined with Tkinter, provides a fast and easy way to create GUI applications.

### Setting Up Tkinter
**Installation**
- Tkinter comes pre-installed with Python.
You can check the installation by running a simple import statement
```python
import tkinter as tk
```
- If not installed, you can install it using:<br/>
```python
sudo apt-get install python3-tk8
```

### Creating a Basic Tkinter Window
**Basic Window Setup88**
- Create a basic window:
```python
import tkinter as tk
root = tk.Tk()
root.title("My Tkinter App")
root.geometry("400x300")
root.mainloop()
```
Explanation:
Tk(): Initializes the Tkinter window. 
title(): Sets the title of the window.
geometry(): Sets the size of the window.
mainloop(): Runs the Tkinter event loop.

### Tkinter Widgets
**Label**: Used to display text or images 
```python 
label = tk.Label(root, text="Hello, Tkinter!")
label.pack()
```

**Button**: Used to perform an action when clicked
```python>
 def on_click():
    *print("Button clicked!")

button = tk.Button(root, text="Click Me", command=on_click)*
*button.pack()
```

 **Entry (Text Field)**: Entry widgets allow the user to input text
```python
entry = tk.Entry(root)
entry.pack()
```

**Text**: Text widgets are multi-line text input fields
```python
text = tk.Text(root, height=10, width=30)
text.pack()
```

**Combobox**: Combobox is a drop-down menu widget.
```python
combobox = ttk.Combobox(root, values=["Option 1", "Option 2", "Option 3"])
combobox.pack()
```

**Scale**- It is used to provide a graphical slider that allows to select any value from that scale
```python
from tkinter import *
master = Tk()
w = Scale(master, from_=0, to=42)
w.pack()
w = Scale(master, from_=0, to=200, orient=HORIZONTAL)
w.pack()
mainloop()
```

**Checkbutton**: Checkbuttons (checkboxes) allow the user to select multiple options.
```python
checkbutton_var = tk.BooleanVar()
checkbutton = tk.Checkbutton(root, text="Check me", variable=checkbutton_var)
checkbutton.pack()
```

 **Radiobutton**: Radiobuttons allow the user to select one option from a set
```python
radiobutton_var = tk.StringVar()
radiobutton1 = tk.Radiobutton(root, text="Option 1", variable=radiobutton_var, value="1")
radiobutton2 = tk.Radiobutton(root, text="Option 2", variable=radiobutton_var, value="2")
radiobutton1.pack()
radiobutton2.pack()
```

### Layout
Widgets need to be placed within the main window using a layout manager.
 Tkinter provides several layout managers:
 
1.**Pack**
The simplest layout manager, which places widgets in blocks before placing them in the parent widget:
```python
 widget.pack()
```

2.**Grid**
The grid layout manager places widgets in a table-like structure:
```python
label.grid(row=0, column=0)
entry.grid(row=0, column=1)
button.grid(row=1, column=0, columnspan=2)
```

3.**Place**
The place layout manager positions widgets at absolute locations:
```python
widget.place(x=50, y=100)
```

### Event Handling
Tkinter supports event handling to make the GUI interactive. Events like button clicks, key presses, or mouse movements can be handled using bindings:
```python
def on_key_press(event):
    print(f"Key pressed: {event.char}")

root.bind("<KeyPress>", on_key_press)
```
### Running the Application
Finally, to run the Tkinter application, you need to start the main event loop:
```python
root.mainloop()
```

### Example
Here's a complete example combining all the elements discussed:
```python
import tkinter as tk
from tkinter import ttk

def on_button_click():
    print("Button clicked!")

def on_key_press(event):
    print(f"Key pressed: {event.char}")

root = tk.Tk()
root.title("My Application")
root.geometry("400x300")

label = tk.Label(root, text="Hello, Tkinter!")
label.pack()

button = tk.Button(root, text="Click Me", command=on_button_click)
button.pack()

entry = tk.Entry(root)
entry.pack()

text = tk.Text(root, height=10, width=30)
text.pack()

combobox = ttk.Combobox(root, values=["Option 1", "Option 2", "Option 3"])
combobox.pack()

checkbutton_var = tk.BooleanVar()
checkbutton = tk.Checkbutton(root, text="Check me", variable=checkbutton_var)
checkbutton.pack()

radiobutton_var = tk.StringVar()
radiobutton1 = tk.Radiobutton(root, text="Option 1", variable=radiobutton_var, value="1")
radiobutton2 = tk.Radiobutton(root, text="Option 2", variable=radiobutton_var, value="2")
radiobutton1.pack()
radiobutton2.pack()

root.bind("<KeyPress>", on_key_press)

root.mainloop()
```

### FAQs
 **What is Tkinter in Python used for?**
>*Tkinter is a built-in library in Python for creating graphical user interfaces (GUIs). You can use it to design desktop applications with familiar elements like buttons, windows, menus, and more. It allows you to build interactive programs that users can navigate visually.*

**How can I customize the appearance of widgets?**
>*Widgets can be customized using various options like bg (background color), fg (foreground color), font, height, width, etc.*
```python
label = tk.Label(root, text="Custom Label", bg="blue", fg="white", font=("Helvetica", 16))
label.pack()
```
 **How do I create a menu in Tkinter?**
> You can create a menu using the Menu widget.
```python
import tkinter as tk

def say_hello():
    print("Hello!")

root = tk.Tk()
menubar = tk.Menu(root)
filemenu = tk.Menu(menubar, tearoff=0)
filemenu.add_command(text="Say Hello", command=say_hello)
filemenu.add_separator()
filemenu.add_command(label="Exit", command=root.quit)
menubar.add_cascade(label="File", menu=filemenu)
root.config(menu=menubar)
root.mainloop()
```

 **Can I use images in Tkinter?**
>*Yes, Tkinter supports images through the PhotoImage class for displaying images in GIF or PGM/PPM formats. For other formats, you can use the Python Imaging Library (PIL).*
```python
from tkinter import PhotoImage

root = tk.Tk()
image = PhotoImage(file="image.gif")
label = tk.Label(root, image=image)
label.pack()
root.mainloop()
```

 **How can I close a Tkinter window programmatically?**
> You can close a Tkinter window by calling the destroy method on the root window.
```python
root.destroy()
```
