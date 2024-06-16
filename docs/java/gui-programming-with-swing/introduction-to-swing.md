---
id: introduction-to-swing
title: Introduction to Swing
sidebar_label: Introduction to Swing
sidebar_position: 1
tags: [java, swing, gui, programming, java swing]
description: In this tutorial, we will learn about Swing, a GUI toolkit for Java. We will learn about what Swing is, how it is used to create graphical user interfaces in Java, and some of the components provided by Swing.
---


## Introduction to Swing

Swing is a GUI (Graphical User Interface) toolkit for Java. It provides a set of lightweight components that allow developers to create rich, platform-independent graphical user interfaces for Java applications. Swing was introduced as part of the Java Foundation Classes (JFC) in Java 2 (JDK 1.2) and has been the primary GUI toolkit for Java desktop applications since then.

### Features of Swing

1. **Platform Independence:** Swing components are written entirely in Java and are not dependent on the underlying operating system's native GUI components. This allows Swing applications to run on any platform that supports Java without modification.

2. **Rich Set of Components:** Swing provides a wide range of components for building GUIs, including buttons, labels, text fields, checkboxes, radio buttons, list boxes, combo boxes, tables, trees, and more. These components can be customized and combined to create complex user interfaces.

3. **Custom Look and Feel:** Swing supports pluggable look and feel (PLAF), allowing developers to customize the appearance of their applications. Swing applications can have the native look and feel of the underlying operating system or a custom look and feel defined by the developer.

4. **Event-Driven Programming Model:** Swing follows an event-driven programming model, where user interactions (such as mouse clicks, keyboard input, and window events) trigger events that are handled by event listeners. This allows developers to create interactive and responsive user interfaces.

5. **Layout Managers:** Swing provides layout managers that allow developers to arrange components within containers dynamically. Layout managers handle the sizing and positioning of components, ensuring that GUIs adapt to different screen sizes and resolutions.

### Getting Started with Swing

To start developing Swing applications, you need to have the Java Development Kit (JDK) installed on your system. Once you have the JDK installed, you can create Swing applications using any Java IDE (Integrated Development Environment) such as IntelliJ IDEA, Eclipse, or NetBeans, or you can use a simple text editor and the command line.

### Example Swing Application

Here's a simple "Hello, Swing!" application written in Java:

```java
import javax.swing.*;

public class HelloWorldSwing {
    public static void createAndShowGUI() {
        // Create and set up the window
        JFrame frame = new JFrame("HelloWorldSwing");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Add the "Hello, Swing!" label to the window
        JLabel label = new JLabel("Hello, Swing!", SwingConstants.CENTER);
        frame.getContentPane().add(label);

        // Display the window
        frame.pack();
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        // Schedule a job for the event dispatch thread:
        // creating and showing this application's GUI.
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }
}
```

This code creates a simple Swing window with a label that displays "Hello, Swing!". It demonstrates the basic structure of a Swing application, including creating a JFrame window, adding components to the window, and displaying the window on the screen.

### Conclusion

Swing provides a powerful and flexible toolkit for building GUI applications in Java. With its platform independence, rich set of components, and customizability, Swing remains a popular choice for developing desktop applications in Java. Whether you're building a simple calculator or a complex business application, Swing offers the tools you need to create modern, responsive user interfaces.