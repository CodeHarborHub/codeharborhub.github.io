---
id: jwt-implement
title: Implementing JWT
sidebar_label: Implementation
sidebar_position: 4
tags: [JWT, web development, Security]
description: Implementing of the project in JWT.
---  

#### Server-Side Implementation

**Libraries and Tools**:
- **Node.js**: `jsonwebtoken` library
- **Python**: `PyJWT` library
- **Java**: `jjwt` library
- **Ruby**: `jwt` gem

**Example Code Snippets**
<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>

**Creating a Token (Node.js using `jsonwebtoken`)**:
1. **Install the library**:
   ```bash
   npm install jsonwebtoken
   ```

2. **Code to create a token**:
   ```javascript
   const jwt = require('jsonwebtoken');

   const payload = {
     sub: "1234567890",
     name: "John Doe",
     admin: true
   };

   const secret = "your-256-bit-secret";

   const token = jwt.sign(payload, secret, { expiresIn: '1h' });

   console.log(token);
   ```

**Verifying a Token (Node.js using `jsonwebtoken`)**:
1. **Code to verify a token**:
   ```javascript
   const jwt = require('jsonwebtoken');

   const token = "your.jwt.token.here";
   const secret = "your-256-bit-secret";

   try {
     const decoded = jwt.verify(token, secret);
     console.log(decoded);
   } catch (err) {
     console.error('Token verification failed:', err);
   }
   ```
  </TabItem>
  <TabItem value="python" label="Python">
### Installation

First, you need to install the PyJWT library if you haven't already:

```bash
pip install pyjwt
```

### Creating (Encoding) a Token

To create a JWT, you need a payload (data) and a secret key. The payload typically contains claims about the user and any additional metadata.

```python
import jwt
import datetime

# Define the payload
payload = {
    'user_id': 123,
    'username': 'example_user',
    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)  # Token expiration time
}

# Define the secret key
secret_key = 'your_secret_key'

# Create the token
token = jwt.encode(payload, secret_key, algorithm='HS256')

print(f"Generated Token: {token}")
```

### Verifying (Decoding) a Token

To verify a JWT, you need the token and the same secret key that was used to create the token. If the token is valid and has not expired, you can decode it to retrieve the payload.

```python
# Define the token you received
received_token = token

# Decode the token
try:
    decoded_payload = jwt.decode(received_token, secret_key, algorithms=['HS256'])
    print(f"Decoded Payload: {decoded_payload}")
except jwt.ExpiredSignatureError:
    print("Token has expired")
except jwt.InvalidTokenError:
    print("Invalid token")
```

  </TabItem>
  <TabItem value="java" label="Java">

### Setup

First, add the `jjwt` library to your project. If you're using Maven, add the following dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version> <!-- Check for the latest version -->
</dependency>
```

If you're using Gradle, add the following to your `build.gradle`:

```groovy
implementation 'io.jsonwebtoken:jjwt:0.9.1' // Check for the latest version
```

### Creating (Encoding) a Token

Here’s how to create a JWT using `jjwt`:

```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

public class JwtExample {

    private static final String SECRET_KEY = "your_secret_key";

    public static String createToken(String userId, String username) {
        return Jwts.builder()
                .setSubject(userId)
                .claim("username", username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 30 * 60 * 1000)) // 30 minutes expiration
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes())
                .compact();
    }

    public static void main(String[] args) {
        String token = createToken("123", "example_user");
        System.out.println("Generated Token: " + token);
    }
}
```

### Verifying (Decoding) a Token

To verify and decode a JWT, use the following code:

```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;

public class JwtExample {

    private static final String SECRET_KEY = "your_secret_key";

    public static Claims decodeToken(String token) {
        try {
            return Jwts.parser()
                    .setSigningKey(SECRET_KEY.getBytes())
                    .parseClaimsJws(token)
                    .getBody();
        } catch (ExpiredJwtException e) {
            System.out.println("Token has expired");
        } catch (SignatureException e) {
            System.out.println("Invalid token");
        }
        return null;
    }

    public static void main(String[] args) {
        String token = createToken("123", "example_user");
        System.out.println("Generated Token: " + token);

        Claims claims = decodeToken(token);
        if (claims != null) {
            System.out.println("Decoded Claims: " + claims);
        }
    }
}
```
  </TabItem>
  <TabItem value="ruby" label="Ruby"> 

### Installation

First, add the `jwt` gem to your Gemfile:

```ruby
gem 'jwt'
```

Then run:

```bash
bundle install
```

Alternatively, you can install it directly using:

```bash
gem install jwt
```

### Creating (Encoding) a Token

To create a JWT, you need a payload (data) and a secret key. The payload can contain any data you need to include in the token, such as user information or claims.

```ruby
require 'jwt'

# Define the payload
payload = {
  user_id: 123,
  username: 'example_user',
  exp: Time.now.to_i + 30 * 60 # Token expiration time (30 minutes from now)
}

# Define the secret key
secret_key = 'your_secret_key'

# Create the token
token = JWT.encode(payload, secret_key, 'HS256')

puts "Generated Token: #{token}"
```

### Verifying (Decoding) a Token

To verify a JWT, use the same secret key that was used to create the token. If the token is valid and has not expired, you can decode it to retrieve the payload.

```ruby
require 'jwt'

# Define the token you received
received_token = token

# Define the secret key
secret_key = 'your_secret_key'

# Decode the token
begin
  decoded_payload = JWT.decode(received_token, secret_key, true, { algorithm: 'HS256' })
  puts "Decoded Payload: #{decoded_payload.first}"
rescue JWT::ExpiredSignature
  puts "Token has expired"
rescue JWT::DecodeError
  puts "Invalid token"
end
```

  </TabItem>
  <TabItem value="output" label="Output">

### How to Created in the Token Backend Basic Example 

<BrowserWindow url="http://localhost:5000/api/token">
     <div>
        <p style={{fontFamily:"monospace"}} id="token"></p>
        <p style={{fontFamily:"monospace",textAlign:"center"}} id="Alert"></p>
        <button onClick={()=>{
          let token=document.getElementById("token")
          let Alert=document.getElementById("Alert")
          let button=document.getElementById("button")
          button.style.display="none"
          token.textContent="SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
         Alert.textContent="Token Created Successfully.."
        }} id="button">Create Token</button>
     </div>
</BrowserWindow>

  </TabItem>
</Tabs>



#### Client-Side Implementation

**Storing the Token Securely**:
- **localStorage**:
  ```javascript
  localStorage.setItem('token', token);
  const token = localStorage.getItem('token');
  ```

- **sessionStorage**:
  ```javascript
  sessionStorage.setItem('token', token);
  const token = sessionStorage.getItem('token');
  ```

- **Cookies** (Using `js-cookie` library):
  1. **Install the library**:
     ```bash
     npm install js-cookie
     ```

  2. **Code to store and retrieve the token**:
     ```javascript
     const Cookies = require('js-cookie');

     // Set a cookie
     Cookies.set('token', token, { expires: 1 }); // 1 day expiration

     // Get a cookie
     const token = Cookies.get('token');
     ```

**Sending the Token in Requests (Authorization Header)**:
1. **Using Fetch API**:
   ```javascript
   const token = localStorage.getItem('token');

   fetch('https://your-api-endpoint.com', {
     method: 'GET',
     headers: {
       'Authorization': `Bearer ${token}`
     }
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Error:', error));
   ```

2. **Using Axios**:
   1. **Install Axios**:
      ```bash
      npm install axios
      ```

   2. **Code to send a request with token**:
      ```javascript
      const axios = require('axios');

      const token = localStorage.getItem('token');

      axios.get('https://your-api-endpoint.com', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
      ```
 ### Example:


 <BrowserWindow>
     <div style={{display:"flex",minHeight:"25rem"}}>
        <div style={{height:"25rem",flex:"0.8",borderRight:"0.1rem solid"}}>
             <h3 >Backend</h3>
             <hr />
             <p style={{fontFamily:"monospace",fontSize:"1rem"}}>backend listen in 5000..</p>
             <div id="terminal" style={{fontFamily:"monospace",fontSize:"0.8rem"}}></div>
        </div>
        <div style={{height:"100%",flex:"1",paddingLeft:"0.3rem"}}>
             <h3>Frontend</h3>
             <hr />
             <p>Get to the data in backend use JWT</p>
             <p id="frontend_alert" style={{fontFamily:"monospace",fontSize:"0.8rem",fontWeight:"700"}}></p>
             <button onClick={()=>{
                let terminal=document.getElementById("terminal")
                let submit=document.getElementById("submit")
                submit.style.display="none"
                let p1=document.createElement("p")
                let p2=document.createElement("p")
                p1.style.color="rgb(41,121,255)"
                p1.textContent="GET Token Checking"
                terminal.appendChild(p1)
                setTimeout(()=>{
                    p2.textContent="Success..."
                    p2.style.marginTop="-1.1rem"
                    p2.style.color="rgb(4,205,90)"
                    terminal.appendChild(p2)
                    let data={id:"1",name:"john",token:true,status:"ok",text:"This is sample,keep learning ..!"}
                    let display_data=document.getElementById("display_data")
                    let frontend_alert=document.getElementById("frontend_alert")
                    frontend_alert.textContent="response data"
                    display_data.textContent=JSON.stringify(data,null,2)
                },1500)
             }} id="submit" style={{cursor:"pointer",padding:"0.5rem 1.3rem"}}>Get the data</button>
             <pre id="display_data"></pre>
        </div>
     </div>
 </BrowserWindow>
 