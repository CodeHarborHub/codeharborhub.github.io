---
id: event-handling-and-listeners
title: Event Handling and Listeners in Java
sidebar_label: Event Handling and Listeners
sidebar_position: 3
tags: [java, swing, event handling, listeners]
description: In this tutorial, we will learn about event handling and listeners in Java. We will learn about how to handle events in Java Swing applications using event listeners.
---
Event handling in Java Swing involves registering event listeners to respond to user interactions with GUI components. Here's an overview of how to handle events using listeners:

### 1. ActionListener (Button Click)

```java
import javax.swing.*;
import java.awt.event.*;

public class ButtonClickExample extends JFrame implements ActionListener {
    private JButton button;

    public ButtonClickExample() {
        super("Button Click Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        button = new JButton("Click Me");
        button.addActionListener(this); // Register ActionListener
        add(button);

        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == button) {
            JOptionPane.showMessageDialog(this, "Button clicked!");
        }
    }

    public static void main(String[] args) {
        new ButtonClickExample();
    }
}
```

### 2. MouseListener (Mouse Click)

```java
import javax.swing.*;
import java.awt.event.*;

public class MouseClickExample extends JFrame implements MouseListener {
    public MouseClickExample() {
        super("Mouse Click Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton button = new JButton("Click Me");
        button.addMouseListener(this); // Register MouseListener
        add(button);

        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        JOptionPane.showMessageDialog(this, "Mouse clicked!");
    }

    @Override
    public void mousePressed(MouseEvent e) {}

    @Override
    public void mouseReleased(MouseEvent e) {}

    @Override
    public void mouseEntered(MouseEvent e) {}

    @Override
    public void mouseExited(MouseEvent e) {}

    public static void main(String[] args) {
        new MouseClickExample();
    }
}
```

### 3. KeyListener (Keyboard Input)

```java
import javax.swing.*;
import java.awt.event.*;

public class KeyInputExample extends JFrame implements KeyListener {
    public KeyInputExample() {
        super("Key Input Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JTextField textField = new JTextField(20);
        textField.addKeyListener(this); // Register KeyListener
        add(textField);

        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void keyTyped(KeyEvent e) {}

    @Override
    public void keyPressed(KeyEvent e) {
        JOptionPane.showMessageDialog(this, "Key pressed: " + e.getKeyChar());
    }

    @Override
    public void keyReleased(KeyEvent e) {}

    public static void main(String[] args) {
        new KeyInputExample();
    }
}
```

### 4. ItemListener (Checkbox/Radio Button Selection)

```java
import javax.swing.*;
import java.awt.event.*;

public class ItemSelectionExample extends JFrame implements ItemListener {
    public ItemSelectionExample() {
        super("Item Selection Example");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JCheckBox checkBox = new JCheckBox("Check Me");
        checkBox.addItemListener(this); // Register ItemListener
        add(checkBox);

        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void itemStateChanged(ItemEvent e) {
        if (e.getStateChange() == ItemEvent.SELECTED) {
            JOptionPane.showMessageDialog(this, "Item selected!");
        }
    }

    public static void main(String[] args) {
        new ItemSelectionExample();
    }
}
```

These examples demonstrate how to handle various events in Java Swing using event listeners. By implementing and registering listeners, you can respond to user interactions with GUI components and perform appropriate actions in your application.