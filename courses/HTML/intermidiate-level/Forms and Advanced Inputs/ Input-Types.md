---
id: lesson-1
title: "New Input Types in HTML5"
sidebar_label: New Input Types in HTML5
sidebar_position: 1
description: "Learn to New Input Types in HTML5"
tags: [courses,intermediate-level,Introduction to HTML5,Introduction]
---   

HTML5 introduced several new input types that enhance the functionality of web forms. These new types provide built-in validation and specialized input controls, improving user experience and data accuracy.

**Email Input:**
The `type="email"` input ensures the entered data follows the standard email format.

**Example:**
```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <input type="submit" value="Submit">
</form>
```
In this example, the email input field requires a valid email address and includes built-in validation.

**Date Input:**
The `type="date"` input provides a date picker, allowing users to select a date from a calendar.

**Example:**
```html
<form>
  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" required>
  <input type="submit" value="Submit">
</form>
```
In this example, the date input field allows users to select a date and includes built-in validation for date format.

**Range Input:**
The `type="range"` input provides a slider control for selecting a numerical value within a specified range.

**Example:**
```html
<form>
  <label for="volume">Volume:</label>
  <input type="range" id="volume" name="volume" min="0" max="100">
  <input type="submit" value="Submit">
</form>
```
In this example, the range input field allows users to select a value between 0 and 100 using a slider.

**Other New Input Types:**
- `type="tel"`: Input for telephone numbers.
- `type="url"`: Input for URLs.
- `type="number"`: Input for numerical values with optional attributes like `min`, `max`, and `step`.
- `type="search"`: Input for search terms.
- `type="color"`: Input for color selection using a color picker.
- `type="datetime-local"`: Input for date and time without a time zone.
- `type="month"`: Input for selecting a month and year.
- `type="week"`: Input for selecting a week and year.
- `type="time"`: Input for selecting a time (hours and minutes).

**Example with Multiple Input Types:**
```html
<form>
  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" required>
  <br>
  <label for="website">Website:</label>
  <input type="url" id="website" name="website">
  <br>
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="0" max="120">
  <br>
  <label for="color">Favorite Color:</label>
  <input type="color" id="color" name="color">
  <br>
  <label for="datetime">Appointment Date and Time:</label>
  <input type="datetime-local" id="datetime" name="datetime">
  <br>
  <input type="submit" value="Submit">
</form>
```
In this example, various new input types are demonstrated, each providing specific validation and user interface controls.
