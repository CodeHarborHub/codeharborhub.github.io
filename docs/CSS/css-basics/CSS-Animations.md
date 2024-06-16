---
id: css-animations
title: CSS Animations
sidebar_label: CSS Animations
tags: [html, introduction, web development, markup language, hyper text, web pages, career opportunities, personal growth, web-development, web design, web pages, websites, career opportunities, contribute to the web, stay relevant, express yourself, learn other technologies, have fun, how to use html, steps to start using html, set up your development environment, create your first html document, learn html syntax and structure, explore html elements and-attributes]
description: In this tutorial you will learn about animations in CSS 
---

## What are CSS Animations?
An animation lets an element gradually change from one style to another.
You can change as many CSS properties you want, as many times as you want.
To use CSS animation, you must first specify some keyframes for the animation.

Keyframes hold what styles the element will have at certain times.

## The `@keyframes` Rule
When you specify CSS styles inside the `@keyframes` rule, the animation will gradually change from the current style to the new style at certain times.
To get an animation to work, you must bind the animation to an element.

```css
/* The animation code */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```
<BrowserWindow url="http://127.0.0.1:5500/index.html">
    <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'red',
      animation: 'myAnimation 4s infinite',
      padding: '5px',
    }}>
      Hello World!
    </div>
    <style>{`
      @keyframes myAnimation {
        from { background-color: red; }
        to { background-color: yellow; }
      }
    `}</style>
  </BrowserWindow>

The `animation-duration` property defines how long an animation should take to complete. If the `animation-duration` property is not specified, no animation will occur, because the default value is 0s (0 seconds). 
In the example above we have specified when the style will change by using the keywords "from" and "to" (which represents `0%` (start) and `100%` (complete)).
It is also possible to use percent. By using percent, you can add as many style changes as you like.

## Delay an Animation
The `animation-delay` property specifies a delay for the start of an animation.

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
```
<BrowserWindow minHeight={400} url="http://127.0.0.1:5500/index.html">
    <div className="Delay-an-Animation" style={{
      width: '100px',
      height: '100px',
      position: 'relative',
      backgroundColor: 'red',
      animationName: 'DelayAnAnimationExample',
      animationDuration: '4s',
      animationDelay: '2s',
      padding: '5px',
    }}>
      Hello World!
    </div>
    <style>{`
      @keyframes DelayAnAnimationExample {
        0%   { background-color: red; left: 0px; top: 0px; }
        25%  { background-color: yellow; left: 200px; top: 0px; }
        50%  { background-color: blue; left: 200px; top: 200px; }
        75%  { background-color: green; left: 0px; top: 200px; }
        100% { background-color: red; left: 0px; top: 0px; }
      }
      .Delay-an-Animation {
        position: absolute;
      }
    `}</style>
  </BrowserWindow>

# Times animation should run
The `animation-iteration-count` property specifies the number of times an animation should run.

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
```

<BrowserWindow minHeight={400} url="http://127.0.0.1:5500/index.html">
    <div style={{
      width: '100px',
      height: '100px',
      position: 'relative',
      backgroundColor: 'red',
      animationName: 'example',
      animationDuration: '4s',
      animationIterationCount: 3,
      padding: '5px',
    }}>
      Hello World!
    </div>
    <style>{`
      @keyframes example {
        0% { background-color: red; left: 0px; top: 0px; }
        25% { background-color: yellow; left: 200px; top: 0px; }
        50% { background-color: blue; left: 200px; top: 200px; }
        75% { background-color: green; left: 0px; top: 200px; }
        100% { background-color: red; left: 0px; top: 0px; }
      }
    `}</style>
  </BrowserWindow>

# Direction of the animation 

The `animation-direction` property specifies whether an animation should be played forwards, backwards or in alternate cycles.

The `animation-direction` property can have the following values:

- `normal` - The animation is played as normal (forwards). This is default
- `reverse` - The animation is played in reverse direction (backwards)
- `alternate` - The animation is played forwards first, then backwards
- `alternate-reverse` - The animation is played backwards first, then forwards

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}
```
<BrowserWindow minHeight={400} url="http://127.0.0.1:5500/index.html">
    <div style={{
      width: '100px',
      height: '100px',
      position: 'relative',
      backgroundColor: 'red',
      animationName: 'example',
      animationDuration: '4s',
      animationDirection: 'reverse',
      padding: '5px',
    }}>
      Hello World!
    </div>
    <style>{`
      @keyframes example {
        0%   { background-color: red; left: 0px; top: 0px; }
        25%  { background-color: yellow; left: 200px; top: 0px; }
        50%  { background-color: blue; left: 200px; top: 200px; }
        75%  { background-color: green; left: 0px; top: 200px; }
        100% { background-color: red; left: 0px; top: 0px; }
      }
    `}</style>
  </BrowserWindow>



