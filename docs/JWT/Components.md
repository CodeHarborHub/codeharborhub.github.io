---
id: jwt-components
title: JWT Components
sidebar_label: Components
sidebar_position: 2
tags: [JWT, web development, Security]
description: JWT Components.
---  

#### Header

**Structure and Format**:
The header of a JWT is a JSON object that contains two main pieces of information: the type of the token and the signing algorithm being used.

**Common Fields**:
- **alg**: Specifies the algorithm used to sign the token, such as HMAC SHA256 (HS256) or RSA (RS256).
- **typ**: Specifies the type of the token, which is usually set to "JWT".

Example Header:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
This JSON object is then base64Url encoded to form the first part of the JWT.

#### Payload

The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims:

**Registered Claims**:
These are a set of predefined claims which are not mandatory but recommended to provide a set of useful, interoperable claims:
:::important
- **iss (issuer)**: Identifies the principal that issued the JWT.
- **sub (subject)**: Identifies the principal that is the subject of the JWT.
- **aud (audience)**: Identifies the recipients that the JWT is intended for.
- **exp (expiration time)**: Identifies the expiration time on or after which the JWT must not be accepted for processing.
- **nbf (not before)**: Identifies the time before which the JWT must not be accepted for processing.
- **iat (issued at)**: Identifies the time at which the JWT was issued.
- **jti (JWT ID)**: Provides a unique identifier for the JWT.
:::

Example Payload with Registered Claims:
```json
{
  "iss": "example.com",
  "sub": "user123",
  "aud": "example.com",
  "exp": 1618704000,
  "nbf": 1618700400,
  "iat": 1618700400,
  "jti": "unique-id-123"
}
```

**Public Claims**:
These claims can be defined at will by those using JWTs but should be defined in the IANA JSON Web Token Registry to avoid collisions.

Example Public Claims:
```json
{
  "role": "admin",
  "username": "johndoe"
}
```

**Private Claims**:
These are custom claims created to share information between parties that agree on using them. These claims are not registered or public, thus avoiding collisions in usage.

Example Private Claims:
```json
{
  "customClaim": "customValue"
}
```

This JSON object is then base64Url encoded to form the second part of the JWT.

#### Signature

**How It's Created**:
To create the signature part, you have to take the encoded header, the encoded payload, a secret key, and the algorithm specified in the header, and sign that.

For example, if you use the HMAC SHA256 algorithm, the signature will be created in the following way:
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

**Purpose and Importance**:
The signature is used to verify that the sender of the JWT is who it says it is (authentication) and to ensure that the message wasn't changed along the way (integrity). When the recipient receives the token, they can decode the header and payload, but they must verify the signature using the secret key to ensure that the token is valid and has not been tampered with.

Example JWT Signature:
```json
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```
 