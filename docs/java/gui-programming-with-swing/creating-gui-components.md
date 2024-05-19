---
id: creating-gui-components
title: Creating GUI Components in Java
sidebar_label: Creating GUI Components
sidebar_position: 2
tags: [java, swing, gui, programming, java swing]
description: In this tutorial, we will learn about creating GUI components in Java using Swing. We will learn about how to create various GUI components such as buttons, labels, text fields, and more.
---
Creating GUI components in Java Swing involves instantiating and configuring various classes provided by the Swing framework. Here's an overview of how to create some common GUI components:

### 1. JFrame (Main Window)

```java
import javax.swing.*;

public class MyFrame extends JFrame {
    public MyFrame() {
        super("My Application"); // Set window title
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Close operation
        setSize(400, 300); // Set window size
        setLocationRelativeTo(null); // Center window
        setVisible(true); // Make window visible
    }

    public static void main(String[] args) {
        new MyFrame(); // Create an instance of MyFrame
    }
}
```

### 2. JPanel (Container)

```java
import javax.swing.*;

public class MyPanel extends JPanel {
    public MyPanel() {
        add(new JButton("Click Me")); // Add a button to the panel
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("My Panel");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new MyPanel()); // Add an instance of MyPanel to the frame
        frame.pack(); // Pack the components
        frame.setLocationRelativeTo(null); // Center window
        frame.setVisible(true); // Make window visible
    }
}
```

### 3. JButton (Button)

```java
import javax.swing.*;

public class MyButton extends JFrame {
    public MyButton() {
        super("Button Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JButton button = new JButton("Click Me");
        button.addActionListener(e -> JOptionPane.showMessageDialog(this, "Button clicked!"));
        add(button);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public static void main(String[] args) {
        new MyButton();
    }
}
```

### 4. JLabel (Label)

```java
import javax.swing.*;

public class MyLabel extends JFrame {
    public MyLabel() {
        super("Label Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JLabel label = new JLabel("Hello, Swing!");
        add(label);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public static void main(String[] args) {
        new MyLabel();
    }
}
```

### 5. JTextField (Text Field)

```java
import javax.swing.*;

public class MyTextField extends JFrame {
    public MyTextField() {
        super("Text Field Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JTextField textField = new JTextField(20); // Set preferred width
        add(textField);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public static void main(String[] args) {
        new MyTextField();
    }
}
```

### 6. JTextArea (Text Area)

```java
import javax.swing.*;

public class MyTextArea extends JFrame {
    public MyTextArea() {
        super("Text Area Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JTextArea textArea = new JTextArea(10, 30); // Set rows and columns
        JScrollPane scrollPane = new JScrollPane(textArea); // Add scroll bars
        add(scrollPane);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public static void main(String[] args) {
        new MyTextArea();
    }
}
```

These examples demonstrate how to create various GUI components in Java Swing. By instantiating and configuring these components, you can build rich and interactive user interfaces for your Java applications.