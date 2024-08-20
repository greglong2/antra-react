## What are middleware function in Express?

> Request -> Middleware -> Route Handler -> Response
>
> Middleware allows us to execute code before the router handler. It can be used to perform tasks like authentication, logging, etc.

## How do they work?

> Middleware works by intercepting the request and response objects. It has the ability to modify the request and response objects, end the request-response cycle, call the next middleware function in the stack, or skip the remaining middleware functions in the stack. This is powerful because it allows us to perform tasks like authentication, logging, etc. before the route handler is executed.

## What is JWT and how does it work?

> JWT stands for JSON Web Token. It is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and information exchange in web development.

## How do you securely store JWT on the client side?

> JWTs are typically stored in the browser's session storage or local storage to avoid attacks like Cross-Site Scripting and Cross-Site Request Forgery.

## How does token expiration work in JWT?

> JWTs can have an expiration time, which is specified as a Unix timestamp. When a JWT is created, the expiration time is set in the payload. The client can check the expiration time and decide whether to use the token or request a new one.