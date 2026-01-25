# NodeJS Interview Question and Answer

# 1. What is event-driven architecture in NodeJS?

**Event-driven architecture** is a programming pattern in which the flow of the program is determined by **events** such as user actions, I/O operations, or messages from other programs.

In **Node.js**, this pattern is core because it allows the server to handle multiple requests **asynchronously** without blocking the main thread.

---

### How It Works in Node.js

1. Node.js uses an **event loop** to listen for events.
2. When an event occurs, the corresponding **callback function** or **event listener** is executed.
3. Multiple events can be handled efficiently without creating new threads.

---

### Example

```js
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit an event
myEmitter.emit("greet", "Alice"); // Output: Hello, Alice!
```

### Key Points

- Uses EventEmitter class
- Enables non-blocking I/O
- Scales well for high concurrency
- Core concept behind callbacks, streams, and many Node.js APIs

# 2. How does NodeJS handle asynchronous operations?

Node.js is **single-threaded**, but it can handle multiple asynchronous operations efficiently using the **event-driven, non-blocking I/O model**.

### Key Concepts

1. **Event Loop**
   - Continuously checks the **call stack** and **callback queues**
   - Executes callbacks when the call stack is empty

2. **Non-blocking I/O**
   - I/O operations (file system, network, database) do **not block** the main thread
   - Node.js delegates them to **libuv** (a C++ library) which handles threads in the background

3. **Callback Functions**
   - Functions passed to async operations to execute when the operation completes
   ```js
   const fs = require("fs");
   fs.readFile("file.txt", "utf8", (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   ```
4. **Promises and async/await**
   - Modern way to handle async operations

   ```js
   async function readFile() {
     const data = await fs.promises.readFile("file.txt", "utf8");
     console.log(data);
   }
   readFile();
   ```

### Flow Example

- Node executes synchronous code first.
- Async operations are offloaded to libuv.
- When async operations finish, their callbacks are pushed to the callback queue.
- Event loop picks them up and executes them when the call stack is empty.

## 3. What are middleware functions in ExpressJS?

Middleware functions in ExpressJS are functions that have access to the request (req), response (res), and the next middleware function (next) in the application’s request-response cycle. They are used to perform tasks such as logging, authentication, parsing request bodies, or error handling before sending a response. Middleware can either terminate the request-response cycle by sending a response or pass control to the next middleware by calling next().

Express supports several types of middleware: application-level, router-level, built-in, and third-party middleware. Middleware functions are executed in the order they are defined, making the order important for functionality.

## 4.How does authentication work in NodeJS? Explain JWT vs. OAuth?

**How Authentication Works in NodeJS**

Authentication is the process of verifying the identity of a user or system. In NodeJS, it typically involves these steps:

1. User Login Request
   - The client (browser/app) sends credentials (like username/password) to the server via a POST request.
2. Server Verification
   - The server checks the credentials against a database.
   - If valid, the server creates a token or a session for the user.
3. Token/Session Issuance
   - Session-based: The server stores session info on the server and sends a session ID as a cookie to the client.
   - Token-based (stateless): The server generates a token (usually a JWT) and sends it to the client. The client sends this token in subsequent requests
4. Request Authorization
   - For protected routes, the server checks the session ID or token to verify the user’s identity and permissions.

**JWT (JSON Web Token)**

- JWT is a token-based authentication mechanism.
- It is stateless: the server does not store session info; everything is encoded in the token.
- Structure: `Header.Payload.Signature`
  - Header: Token type & algorithm
  - Payload: User info, claims, expiration
  - Signature: Ensures token integrity

**OAuth (Open Authorization)**

- OAuth is a protocol for authorization, often used for third-party access (like logging in with Google or Facebook).
- It allows users to grant limited access to their resources without sharing passwords.

## 5. What are WebSockets, and when would you use them?

WebSockets are a communication protocol that allows: Persistent, two-way (bi-directional) communication between a client (browser/app) and a server.

Once the connection is established:

- The connection stays open
- Both client and server can send messages at any time

## 6. What is the difference between monolithic and microservices architectures??

A `monolith` is: One single application where everything lives together.

Characteristics

- Single codebase
- Single deployment
- All features run in one process

`Microservices` means:
The system is split into many small, independent services, each responsible for one thing.

Characteristics

- Each service is its own app
- Independent deployments
- Services communicate over network (REST, gRPC, events)

## 7. How does NodeJS handle memory management?

Node.js doesn’t manage memory by itself.
It relies on V8, the JavaScript engine (from Chrome), to do memory management.

So when we say “Node.js memory management”, we really mean:

How V8 allocates memory and garbage-collects it.

Memory is mainly split into:

- Stack
- Heap

**Stack**

- Stores
  - Function calls
  - Local primitive values (number, boolean, etc.)
- Managed automatically
- Very fast
- Small in size

**Heap**

- Stores:
  - Objects
  - Arrays
- Functions
- Larger and dynamic
- This is where most memory issues happen

### Garbage Collection (GC)

Node.js uses automatic garbage collection.

What GC does

- Tracks which objects are still reachable
- Frees memory for objects that are no longer referenced

### How V8 decides what to delete

V8 uses a mark-and-sweep algorithm:

- Mark all reachable objects
- Sweep (delete) everything unmarked
