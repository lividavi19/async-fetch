# ASYNC FETCH
Lightweight javascript library to make async requests to a server, it implements the browser's fetch API.
The library contains four utilities functions, each one will help a client make GET, POST, PUT and DELETE requests to a server.

## Table of Contents
[Installation](#a--installation)
[Usage](#b--usage)
[Examples](#c--examples)
[Error Handling](#d--error-handling)
[Response Formats](#e--response-formats)

## A : INSTALLATION
To start making HTTP requests in your project, include the library to your source code as follows;

```<script src="/Path/async-fetch.js"></script>```

Replace "/Path/async-fetch.js" with the actual path to the JS file containing the utility functions (the library).

## B : USAGE
All utility functions in this library have the following in common;

i) URL
Each function requires a URL parameter that specifies the location to which the HTTP request will be made.

ii) Options object
This is an object used to customize the request. This object can include properties such as headers, body, etc.
Sometimes your code may not require to pass headers object, in this case pass an empty object {} as an argument to avoid getting unexpeted results.

iii) Success Callback
A callback function used to handle successful response. It receives an object containing various response formats like JSON, TEXT and BLOB.

iv) Failure Callback
A callback function used to handle errors that may occur during the fetch operation.

## C : EXAMPLES
_This section is being prepared, please come back later!_

## D : ERROR HANDLING
_This section is being prepared, please come back later!_

## E : RESPONSE FORMATS
_This section is being prepared, please come back later!_