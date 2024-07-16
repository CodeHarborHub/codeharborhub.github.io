---
id: flutter-architecture
title: Flutter Architecture
sidebar_label: Flutter Architecture
sidebar_position: 3
tags: [introduction, Flutter, App development]
description: Flutter Architecture
---

In this chapter, we will discuss the architecture of the Flutter framework.

Widgets
The core concept of Flutter is that everything is a widget. Widgets are the building blocks of the user interface in Flutter.

In Flutter, the application itself is a widget. The application is the top-level widget and its UI is created using one or more children widgets. This composability feature allows us to create user interfaces of any complexity.

For example, the widget hierarchy of the hello world application (created in the previous chapter) is as follows:

- MyApp is the user-created widget, built using the Flutter native widget, MaterialApp.
- MaterialApp has a home property that specifies the user interface of the home page, which is another user-created widget, MyHomePage.
- MyHomePage is built using another Flutter native widget, Scaffold.
- Scaffold has two properties - body and appBar.
- The body property is used to specify the main user interface, and the appBar property is used to specify the header user interface.
- The header UI is built using the Flutter native widget, AppBar, and the body UI is built using the Center widget.
- The Center widget has a child property that refers to the actual content, which is built using the Text widget.

Gestures
Flutter widgets support interaction through the GestureDetector widget. GestureDetector is an invisible widget that can capture user interactions such as tapping and dragging. Many native widgets in Flutter support interaction through the use of GestureDetector. We can also add interactive features to existing widgets by composing them with the GestureDetector widget. We will cover gestures in more detail in upcoming chapters.

State Concept
Flutter widgets support state maintenance through the use of the StatefulWidget widget. Widgets need to be derived from the StatefulWidget widget to support state maintenance, and all other widgets should be derived from StatefulWidget. Flutter widgets are reactive, similar to ReactJS, and the StatefulWidget will be automatically re-rendered whenever its internal state changes. The re-rendering process is optimized by only rendering the necessary changes between the old and new widget UI.

Layers
The most important concept in the Flutter framework is that it is organized into layers of decreasing complexity. Each layer is built using the layer immediately below it. The topmost layer is specific to Android and iOS, followed by the Flutter native widgets layer. The next layer is the Rendering layer, which is a low-level renderer component that renders everything in the Flutter app. These layers go down to the core platform-specific code.

Here is a general overview of the layers in Flutter:

- Flutter follows a widget-based architecture, where complex widgets are composed of existing widgets.
- Interactive features can be added using the GestureDetector widget.
- State can be maintained using the StatefulWidget widget.
- Flutter offers a layered design approach, allowing different layers to be programmed based on the complexity of the task.

We will discuss these concepts in more detail in the upcoming chapters.
