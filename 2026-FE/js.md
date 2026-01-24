# JavaScript Interview Question and Answers

## 1. What is the difference between var, let, and const in JavaScript?

- **`var`** is function-scoped and can be re-declared and re-assigned. It is hoisted and initialized with `undefined`, which can cause unexpected bugs.

- **`let`** is block-scoped and can be re-assigned but not re-declared in the same scope. It is hoisted but not initialized (temporal dead zone).

- **`const`** is also block-scoped but cannot be re-assigned or re-declared. It must be initialized at declaration. Objects and arrays declared with `const` can still be mutated.

## 2. What is Temporal Dead Zone (TDZ)?

The **Temporal Dead Zone (TDZ)** is the time between when a variable is **hoisted** and when it is **declared** in the code.

- Applies to variables declared with **`let`** and **`const`**
- Accessing the variable in this zone causes a **ReferenceError**
- Prevents using variables before they are properly declared

### Example

```js
console.log(a); // ❌ ReferenceError (TDZ)
let a = 10;
```

## 3. How does the JavaScript event loop work?

JavaScript uses a **single-threaded** model, meaning it can execute only one task at a time. The **event loop** allows JavaScript to handle asynchronous operations without blocking the main thread.

### How it works step by step:

1. **Call Stack** executes synchronous code first.
2. **Web APIs** (like `setTimeout`, DOM events, fetch) handle async tasks.
3. When async tasks complete, their callbacks go to the **Callback Queue** or **Microtask Queue**.
4. The **Event Loop** continuously checks:
   - If the Call Stack is empty
   - Then pushes tasks from queues to the Call Stack

### Queue Priority

- **Microtask Queue** (higher priority)
  - `Promise.then`
  - `async/await`
- **Callback Queue** (lower priority)
  - `setTimeout`
  - `setInterval`
  - DOM events

### Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
/*
OUTPUT
Start;
End;
Promise;
Timeout;
*/
```

## 4. Explain closures in JavaScript with an example?

A **closure** is created when a function **remembers and accesses variables from its outer scope**, even after the outer function has finished executing.

### Why Closures are Useful

- Data encapsulation
- Maintaining state
- Creating private variables

### Example

```js
function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    return count;
  };
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3
```

## 5. What are promises, and how do they differ from async/await?

A **Promise** is an object that represents the **eventual completion or failure** of an asynchronous operation.

### Promise States

- **Pending** – initial state
- **Fulfilled** – operation completed successfully
- **Rejected** – operation failed

### Example using Promises

```js
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

`async/await` is syntactic sugar built on top of Promises that makes asynchronous code easier to read and write.

```js
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## 6. What is the difference between shallow and deep copying in JavaScript?

The difference between **shallow copy** and **deep copy** lies in how **nested objects** are copied.

### Shallow Copy

A **shallow copy** creates a new object, but **nested objects are still referenced** from the original object.

#### Example

```js
const original = {
  name: "John",
  address: {
    city: "NY",
  },
};

const shallowCopy = { ...original };

shallowCopy.address.city = "LA";

console.log(original.address.city); // "LA"
```

### Deep Copy

A deep copy creates a new object and recursively copies all nested objects, so no references are shared.

```js
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Chicago";

console.log(original.address.city); // "NY"
```

# 7. Explain the difference between == and === in JavaScript?

The difference between `==` and `===` is **type coercion**.

### `==` (Loose Equality)

- Compares **values only**
- Performs **type conversion** if types are different
- Can lead to unexpected results

#### Example

```js
5 == "5"; // true
0 == false; // true
null == undefined; // true
```

### `===` (Strict Equality)

- Compares both value and type
- No type conversion
- Safer and more predictable

```js
5 === "5"; // false
0 === false; // false
null === undefined; // false
```
