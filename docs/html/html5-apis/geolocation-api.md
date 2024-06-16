---
id: geolocation-api
title: Geolocation API in HTML
sidebar_label: Geolocation API
sidebar_position: 1
tags: [html, web-development, geolocation-api]
description: In this tutorial, you will learn how to use the Geolocation API to get the user's current location in a web page.
---

# Geolocation API in HTML

## Introduction
In this tutorial, you will learn how to use the Geolocation API to get the user's current location in a web page. The HTML Geolocation API is crucial for creating location-aware web applications. It allows you to locate a user's position and use this information to provide a more personalized user experience.

## Locating the User's Position
The HTML Geolocation API is used to get the geographical position of a user. Since accessing a user's location can compromise privacy, the API only works if the user grants permission.

### Using HTML Geolocation
The `getCurrentPosition()` method is used to return the user's position. Here's a basic example that displays the latitude and longitude:

```html
<!DOCTYPE html>
<html>
<body>
<h1>HTML Geolocation</h1>
<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<p id="demo"></p>

<script>
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
</script>
</body>
</html>
```

### Example Explained
- Checks if Geolocation is supported by the browser.
- If supported, runs the `getCurrentPosition()` method. If not, displays a message to the user.
- If `getCurrentPosition()` is successful, it returns a coordinates object to the `showPosition` function.
- The `showPosition()` function outputs the Latitude and Longitude.

### Handling Errors and Rejections
Errors are handled by passing a second function to `getCurrentPosition()`, which deals with potential errors:

```javascript
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
```

## Location-specific Information
Geolocation can enhance user experience by providing location-specific information, such as up-to-date local information, points-of-interest near the user, and turn-by-turn navigation.

## The `getCurrentPosition()` Method - Return Data
The method returns an object with various properties, such as latitude, longitude, accuracy, and more, depending on availability.

| Property                  | Returns                                           |
|---------------------------|---------------------------------------------------|
| coords.latitude           | The latitude as a decimal number (always returned)|
| coords.longitude          | The longitude as a decimal number (always returned)|
| coords.accuracy           | The accuracy of position (always returned)        |
| coords.altitude           | The altitude in meters above the mean sea level (if available)|
| coords.altitudeAccuracy   | The altitude accuracy of position (if available)  |
| coords.heading            | The heading as degrees clockwise from North (if available)|
| coords.speed              | The speed in meters per second (if available)     |
| timestamp                 | The date/time of the response (if available)      |

## Conclusion
The HTML Geolocation API is a powerful tool for web developers looking to create location-aware web applications. By understanding how to request and handle a user's location, developers can significantly enhance the user experience by providing personalized content and services based on the user's geographical location. Remember to always respect user privacy and handle location data responsibly.