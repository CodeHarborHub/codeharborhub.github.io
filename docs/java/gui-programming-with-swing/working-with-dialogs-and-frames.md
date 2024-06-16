---
id: working-with-dialogs-and-frames
title: Working with Dialogs and Frames in Java Swing
sidebar_label: Working with Dialogs and Frames
sidebar_position: 5
tags: [java, swing, dialogs, frames]
description: In this tutorial, we will learn about working with dialogs and frames in Java Swing. We will learn how to create and use dialog boxes and frames in Swing applications.
---
Working with dialogs and frames in Java Swing allows you to create pop-up windows and additional application windows for various purposes. Here's how you can work with dialogs and frames:

### 1. JOptionPane (Dialog)

```java
import javax.swing.*;

public class JOptionPaneExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("JOptionPane Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton button = new JButton("Click Me");
        button.addActionListener(e -> {
            JOptionPane.showMessageDialog(frame, "Hello, Swing!", "Message", JOptionPane.INFORMATION_MESSAGE);
        });

        frame.add(button);
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}
```

### 2. JDialog (Custom Dialog)

```java
import javax.swing.*;

public class JDialogExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("JDialog Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton button = new JButton("Show Dialog");
        button.addActionListener(e -> {
            JDialog dialog = new JDialog(frame, "Custom Dialog", true);
            dialog.add(new JLabel("This is a custom dialog"));
            dialog.pack();
            dialog.setLocationRelativeTo(frame);
            dialog.setVisible(true);
        });

        frame.add(button);
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}
```

### 3. JFrame (Additional Frame)

```java
import javax.swing.*;

public class AdditionalFrameExample {
    public static void main(String[] args) {
        JFrame frame1 = new JFrame("Frame 1");
        frame1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame1.setSize(300, 200);
        frame1.setLocationRelativeTo(null);
        frame1.setVisible(true);

        JFrame frame2 = new JFrame("Frame 2");
        frame2.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame2.setSize(300, 200);
        frame2.setLocationRelativeTo(null);
        frame2.setVisible(true);
    }
}
```

### 4. Closing Listener for JFrame

```java
import javax.swing.*;
import java.awt.event.*;

public class JFrameClosingListener {
    public static void main(String[] args) {
        JFrame frame = new JFrame("JFrame Closing Listener");
        frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                int option = JOptionPane.showConfirmDialog(frame, "Are you sure you want to exit?", "Confirm Exit", JOptionPane.YES_NO_OPTION);
                if (option == JOptionPane.YES_OPTION) {
                    frame.dispose();
                }
            }
        });
        frame.setSize(300, 200);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}
```

These examples demonstrate how to work with dialogs and frames in Java Swing. By creating and customizing instances of `JOptionPane`, `JDialog`, and `JFrame`, you can add pop-up dialogs and additional windows to your Swing applications.