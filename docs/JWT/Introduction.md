---
id: jwt-turorial
title: What is JWT?
sidebar_label: Introduction
sidebar_position: 1
tags: [JWT, web development, Security]
description: JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object.
--- 

**Definition and Purpose**:
JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with HMAC algorithm) or a public/private key pair using RSA or ECDSA.

**Typical Use Cases**:
- **Authentication**: After a user logs in, the server generates a JWT and sends it to the client. The client then sends this token in subsequent requests, allowing the server to verify the user's identity.
- **Information Exchange**: JWTs can securely transmit information between parties because they can be signed, ensuring the data's integrity and authenticity.

#### JWT Structure

A JWT is composed of three parts, separated by dots (`.`):

1. **Header**
2. **Payload**
3. **Signature**

Each part is base64Url encoded and concatenated with dots.

**Header**:
The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

:::important
Example:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
:::

This JSON is then Base64Url encoded to form the first part of the JWT.

:::important
**Payload**:
The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims:
- **Registered Claims**: These are predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some examples are `iss` (issuer), `exp` (expiration time), `sub` (subject), and `aud` (audience).
- **Public Claims**: These can be defined at will by those using JWTs but should be defined in the IANA JSON Web Token Registry to avoid collisions.
- **Private Claims**: These are custom claims created to share information between parties that agree on using them.
:::
Example:
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

This JSON is then Base64Url encoded to form the second part of the JWT.

**Signature**:
To create the signature part, you have to take the encoded header, the encoded payload, a secret, and the algorithm specified in the header and sign that.

For example, if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

**Putting It All Together**:
The output is three Base64Url strings separated by dots that can be easily passed in HTML and HTTP environments:
```
xxxxx.yyyyy.zzzzz
```

### Example JWT:
A JWT might look like this:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
:::note
- The first part (before the first dot) is the encoded header.
- The second part is the encoded payload.
- The third part is the signature.
:::
 