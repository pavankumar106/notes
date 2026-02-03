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

## 8. What is Proxy and Reflect in JavaScript?

A `Proxy` is an object that lets you intercept and customize operations performed on another object.

`Reflect` is a built-in object that provides methods for performing default object operations.

========================================

Here are 20 JavaScript questions you should prepare for to break into top product-based companies (PBCs):

𝟭. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗝𝘂𝘀𝘁-𝗜𝗻-𝗧𝗶𝗺𝗲 (𝗝𝗜𝗧) 𝗰𝗼𝗺𝗽𝗶𝗹𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼𝗲𝘀 𝗶𝘁 𝗼𝗽𝘁𝗶𝗺𝗶𝘇𝗲 𝗽𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲?
→ What are baseline vs optimizing compilers, and how does V8 use them?

𝟮. 𝗛𝗼𝘄 𝗱𝗼 𝗵𝗶𝗱𝗱𝗲𝗻 𝗰𝗹𝗮𝘀𝘀𝗲𝘀 𝗮𝗻𝗱 𝗶𝗻𝗹𝗶𝗻𝗲 𝗰𝗮𝗰𝗵𝗶𝗻𝗴 𝗶𝗺𝗽𝗮𝗰𝘁 𝗮𝗽𝗽 𝘀𝗽𝗲𝗲𝗱?
→ How can property access patterns affect engine optimizations?

𝟯. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗲𝘃𝗲𝗻𝘁 𝗹𝗼𝗼𝗽 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼 𝗺𝗶𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀 𝘃𝘀 𝗺𝗮𝗰𝗿𝗼𝘁𝗮𝘀𝗸𝘀 𝗲𝘅𝗲𝗰𝘂𝘁𝗲?
→ Why does Promise.then() run before setTimeout()?

𝟰. 𝗛𝗼𝘄 𝗱𝗼 𝗰𝗹𝗼𝘀𝘂𝗿𝗲𝘀 𝘄𝗼𝗿𝗸 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗰𝗮𝗻 𝘁𝗵𝗲𝘆 𝗹𝗲𝗮𝗸 𝗺𝗲𝗺𝗼𝗿𝘆?
→ What real-world issues have you seen or debugged related to retained scope?

𝟱. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗧𝗲𝗺𝗽𝗼𝗿𝗮𝗹 𝗗𝗲𝗮𝗱 𝗭𝗼𝗻𝗲 (𝗧𝗗𝗭)?
→ Why does let behave differently than var during hoisting?

𝟲. 𝗛𝗼𝘄 𝗱𝗼𝗲𝘀 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗺𝗮𝗻𝗮𝗴𝗲 𝗺𝗲𝗺𝗼𝗿𝘆 𝗶𝗻 𝗵𝗲𝗮𝗽 𝘃𝘀 𝘀𝘁𝗮𝗰𝗸?
→ How do objects, functions, and primitives get allocated and cleaned up?

𝟳. 𝗛𝗼𝘄 𝗱𝗼 𝗪𝗲𝗮𝗸𝗠𝗮𝗽 𝗮𝗻𝗱 𝗪𝗲𝗮𝗸𝗦𝗲𝘁 𝗵𝗲𝗹𝗽 𝗮𝘃𝗼𝗶𝗱 𝗺𝗲𝗺𝗼𝗿𝘆 𝗹𝗲𝗮𝗸𝘀?
→ When would you use them over regular Maps or Sets?

𝟴. 𝗛𝗼𝘄 𝗱𝗼𝗲𝘀 𝘁𝗵𝗲 𝘁𝗵𝗶𝘀 𝗸𝗲𝘆𝘄𝗼𝗿𝗱 𝗯𝗲𝗵𝗮𝘃𝗲 𝗶𝗻 𝗮𝗿𝗿𝗼𝘄 𝘃𝘀 𝗿𝗲𝗴𝘂𝗹𝗮𝗿 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀?
→ What issues does this cause in event handlers or class methods?

𝟵. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝗱𝗲𝗯𝗼𝘂𝗻𝗰𝗲 𝗼𝗿 𝘁𝗵𝗿𝗼𝘁𝘁𝗹𝗲 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗳𝗿𝗼𝗺 𝘀𝗰𝗿𝗮𝘁𝗰𝗵?
→ Where have you applied this in a real-world project?

𝟭𝟬. 𝗪𝗵𝗮𝘁 𝗮𝗿𝗲 𝗧𝘆𝗽𝗲𝗱 𝗔𝗿𝗿𝗮𝘆𝘀 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼 𝘁𝗵𝗲𝘆 𝗲𝗻𝗵𝗮𝗻𝗰𝗲 𝗽𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲?
→ How are they different from normal arrays, and when would you use them?
