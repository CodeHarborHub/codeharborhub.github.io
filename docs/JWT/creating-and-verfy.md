---
id: jwt-creating-verifying
title: Creating and Verifying JWTs
sidebar_label: Creating and Verifying
sidebar_position: 3
tags: [JWT, web development, Security]
description: Creating and Verifying JWTs.
--- 

#### Creating JWTs

**Steps to Create a JWT**:
1. **Define the Header**:
   - The header typically consists of two parts: the type of the token (which is JWT) and the signing algorithm being used (e.g., HMAC SHA256 or RSA).

2. **Define the Payload**:
   - The payload contains the claims. These claims can be registered claims (like `iss`, `exp`, etc.), public claims, or private claims.

3. **Encode the Header and Payload**:
   - Both the header and the payload are JSON objects that need to be base64Url encoded.

4. **Create the Signature**:
   - The signature is created by taking the encoded header and payload, a secret key (or private key if using RSA/ECDSA), and the algorithm specified in the header to sign that data.

5. **Combine All Parts**:
   - The final JWT is formed by concatenating the base64Url encoded header, payload, and signature with dots (`.`) in between.

**Encoding the Header and Payload**:
- Header (JSON):
  ```json
  {
    "alg": "HS256",
    "typ": "JWT"
  }
  ```
- Payload (JSON):
  ```json
  {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true,
    "iat": 1516239022
  }
  ```

- Base64Url encoding of header:
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  ```
- Base64Url encoding of payload:
  ```
  eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0
  ```

**Signing the Token**:
- Create the signature by combining the encoded header, payload, and a secret key using the algorithm specified (e.g., HMAC SHA256):
  ```javascript
  HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret
  )
  ```
- Example signature:
  ```
  SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  ```

**Final JWT**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

#### Verifying JWTs

**Steps to Verify a JWT**:
1. **Extract the Components**:
   - Split the JWT into its three parts: header, payload, and signature.

2. **Decode the Header and Payload**:
   - Base64Url decode the header and payload to get the original JSON objects.

3. **Validate the Signature**:
   - Recreate the signature using the same method as when the JWT was created, using the header and payload, and compare it with the received signature.

4. **Check the Claims**:
   - Verify the claims in the payload, such as `exp` (expiration time), `nbf` (not before), and `iat` (issued at).

**Validating the Signature**:
- Recreate the signature using the received encoded header and payload and the secret key:
  ```javascript
  const validSignature = HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret
  );
  if (validSignature !== receivedSignature) {
    throw new Error('Invalid signature');
  }
  ```

**Checking the Claims**:
- Check the expiration time (`exp`):
  ```javascript
  const currentTime = Math.floor(Date.now() / 1000);
  if (payload.exp && currentTime > payload.exp) {
    throw new Error('Token expired');
  }
  ```

- Check the not before (`nbf`) and issued at (`iat`) claims:
  ```javascript
  if (payload.nbf && currentTime < payload.nbf) {
    throw new Error('Token not active yet');
  }
  if (payload.iat && currentTime < payload.iat) {
    throw new Error('Token issued in the future');
  }
  ```
 