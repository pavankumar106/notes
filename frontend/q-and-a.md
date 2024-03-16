## frontend developer interview questions and answers
1. Explain the data types in javascript
```
premitive
--Number
--String
--Boolean
--Undefined
--Null
--Symbol

Composite
--Object
```

2. Explain event loops in javascript
```
The event loop is a fundamental concept in JavaScript's concurrency model,
which allows asynchronous code to be executed efficiently without blocking the execution of other code.
Understanding the event loop is crucial for writing asynchronous JavaScript code.

* JavaScript Runtime:
JavaScript is single-threaded, meaning it can only execute one piece of code at a time.
This single thread is responsible for executing JavaScript code, handling events, and managing asynchronous tasks.

*Call Stack:
When a script starts executing, it enters the call stack,
which is a data structure that keeps track of function calls in the current execution context.
Functions are added to the stack when they are invoked and removed from the stack when they complete execution.

*Web APIs and Callback Queue:
JavaScript runtime environments (like browsers or Node.js) provide Web APIs (such as setTimeout, XMLHttpRequest, fetch)
that allow asynchronous operations to be performed. When these asynchronous operations are initiated,
they are moved out of the JavaScript runtime environment and executed separately. Once they complete, they are placed in the callback queue.

* Event Loops:
The event loop continuously monitors the call stack and the callback queue. When the call stack is empty,
and there are callbacks in the callback queue, the event loop moves the callbacks from the callback queue to the call stack for execution.
This process ensures that asynchronous tasks are executed in the order they were completed and prevents blocking the main thread.

```
