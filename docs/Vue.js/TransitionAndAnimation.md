---
id: vue.js-transition-and-animation
title: Transition and animation in Vue.Js
sidebar_label: Transition and animation
sidebar_position: 9
tags: [Vue.js,JavaScript,Vue.js Introduction,Transition and animation,Framework]
description: Transition and animation in Vue.Js
---
## Transition and animation

Transition and animation are powerful tools in web development that enhance user experience by adding visual cues and smooth interactions to web applications. In the context of Vue.js, transitions and animations can be seamlessly integrated into components using Vue's built-in features and CSS animations.

### Transitions in Vue.js

Transitions in Vue.js allow you to apply smooth effects when elements are inserted, updated, or removed from the DOM. They leverage Vue's transition component (`<transition>`) to automatically add and remove classes for CSS transitions or animations.

#### Basic Usage

The `<transition>` component wraps the element you want to animate and provides hooks for different stages of the transition lifecycle: `before-enter`, `enter`, `after-enter`, `before-leave`, `leave`, and `after-leave`.

```vue
<template>
  <transition name="fade">
    <div v-if="show" key="content">
      <!-- Content to be transitioned -->
      <p>This content will fade in/out</p>
    </div>
  </transition>
  <button @click="toggleShow">Toggle Content</button>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

In this example:
- `v-if="show"` controls the presence of the element in the DOM.
- `transition name="fade"` specifies the CSS class prefix (`fade`) for transition classes.
- CSS classes (`fade-enter`, `fade-enter-active`, `fade-leave`, `fade-leave-active`) define how the transition behaves.

#### CSS Transition Classes

- `.fade-enter-active` and `.fade-leave-active`: Applied during the entire entering or leaving phase.
- `.fade-enter` and `.fade-leave-to`: Applied at the beginning (`enter`) or end (`leave`) of the transition.

### Animations in Vue.js

While transitions are used for simple effects like fading, animations in Vue.js involve more complex and dynamic animations, often requiring CSS keyframes or JavaScript animations.

#### Using Vue's `<transition>` with Animation

```vue
<template>
  <transition name="custom-animation">
    <div v-if="show" key="content">
      <p>This content will animate in/out</p>
    </div>
  </transition>
  <button @click="toggleShow">Toggle Content</button>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.custom-animation-enter-active, .custom-animation-leave-active {
  animation: customAnimation 1s;
}
@keyframes customAnimation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
```

### Conclusion

Transitions and animations play a significant role in enhancing the user interface and user experience of Vue.js applications. Whether using Vue's built-in `<transition>` component for simple transitions or combining it with CSS animations for more complex effects, understanding these concepts allows developers to create engaging and visually appealing interfaces. By leveraging Vue.js's reactivity and component-based architecture alongside CSS animations, developers can achieve smooth and dynamic user interactions that contribute to the overall quality of their applications.