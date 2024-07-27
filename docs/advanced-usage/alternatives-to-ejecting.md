---
id: alternatives-to-ejecting 
title: Alternatives to Ejecting
sidebar_label: Alternatives to Ejecting
sidebar_position: 5
tags: [React, Create React App, Advanced Usage]
keywords: [alternatives to ejecting, create react app, react-scripts, craco, custom scripts, package.json, ejectify, custom templates, boilerplates]
description: Learn about alternatives to ejecting from Create React App and how to customize your project without ejecting.
---

## Introduction

Create React App (CRA) is an awesome tool that provides a quick and easy way to set up a React project with no build configuration. However, sometimes you might find yourself needing more control over the build process or wanting to add custom configurations. The traditional way to achieve this is by ejecting from Create React App, but it can be a bit intimidating for beginners and can lead to maintenance headaches. Fear not, for there are some fantastic alternatives that will let you customize your project without the need to eject! 🚀

## 1. **Customize with react-scripts**

Instead of ejecting, you can use the `react-scripts` package that comes with Create React App under the hood. It offers hidden features that you can use to tweak your project's settings without ejecting. Create a file in the root of your project called `.env`, and you can add custom environment variables like this:

```plaintext
REACT_APP_MY_VARIABLE=hello-coders
```

Now you can access this variable in your code using `process.env.REACT_APP_MY_VARIABLE`.

## 2. **CRACO - Create React App Configuration Override**

CRACO is like magic for your Create React App projects. It stands for Create React App Configuration Override and lets you easily modify CRA's configuration without ejecting. You can add custom webpack configurations, Babel plugins, and much more, all from a single configuration file. It's like wielding a powerful wand to control your project's build process! 🧙‍♂️

## 3. **Custom Scripts in `package.json`**

For simpler customizations, you can add your own scripts directly to the `package.json` file. For example, you can create a script to run a pre-build task or automate some setup steps. Just add something like this:

```json
"scripts": {
  "custom-script": "node scripts/customScript.js"
}
```

Then, you can run your custom script using `npm run custom-script`.

## 4. **Ejectify - The Un-Ejecting Tool**

Ejectify is a fun and clever tool that reverses the eject process. Instead of ejecting, you can use Ejectify to "un-eject" your Create React App project. This means you can revert to a state similar to a pre-eject status while keeping all your customizations intact! It's like traveling back in time to undo a decision without any regrets! ⏰

## 5. **Custom Templates and Boilerplates**

If you have specific project requirements, you can create your own custom templates or boilerplates with all the necessary configurations pre-set. Tools like `degit` allow you to easily scaffold a new project based on your custom template, saving you time and effort. It's like having your own personalized React project starter kit! 🎁

## Conclusion

As you can see, there's no need to fear the eject button anymore! With these amazing alternatives, you can confidently customize your Create React App projects without the complexity and drawbacks of ejecting. So go ahead, unleash your creativity, and build incredible React applications while keeping the magic of Create React App alive! Happy coding! 😄🚀
