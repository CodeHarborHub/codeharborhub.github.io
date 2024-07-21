---
id: lesson-4
title: "End-to-End Testing with Protractor"
sidebar_label: End-to-End Testing
sidebar_position: 4
description: "End-to-End Testing with Protractor"
tags: [courses,intermediate-level,End-to-End Testing,Introduction]
---
    

Protractor is an end-to-end test framework for Angular applications. It runs tests against your application in a real browser, simulating user interactions.

1. **Setting Up Protractor**:
   Angular CLI generates a basic Protractor configuration when you create a new Angular project.

   ```bash
   ng e2e
   ```

   This command will start the Protractor test runner and execute the end-to-end tests.

2. **Writing End-to-End Tests**:
   End-to-end tests are written in `e2e/src/app.e2e-spec.ts`.

   ```typescript
   // e2e/src/app.e2e-spec.ts
   import { browser, by, element } from 'protractor';

   describe('workspace-project App', () => {
     it('should display welcome message', () => {
       browser.get(browser.baseUrl);
       expect(element(by.css('app-root h1')).getText()).toEqual('Welcome to my-app!');
     });
   });
   ```

3. **Protractor Configuration**:
   The configuration for Protractor is located in `e2e/protractor.conf.js`.

   ```javascript
   // e2e/protractor.conf.js
   exports.config = {
     allScriptsTimeout: 11000,
     specs: [
       './src/**/*.e2e-spec.ts'
     ],
     capabilities: {
       'browserName': 'chrome'
     },
     directConnect: true,
     baseUrl: 'http://localhost:4200/',
     framework: 'jasmine',
     jasmineNodeOpts: {
       showColors: true,
       defaultTimeoutInterval: 30000,
       print: function() {}
     },
     onPrepare() {
       require('ts-node').register({
         project: require('path').join(__dirname, './tsconfig.json')
       });
     }
   };
   ``` 