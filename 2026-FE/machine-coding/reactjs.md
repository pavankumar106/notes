# ReactJS Interview Question and Answers

## 1. What is the virtual DOM, and how does React use it?

The **Virtual DOM** is a **lightweight JavaScript representation of the real DOM**. It helps improve performance by minimizing direct updates to the actual DOM.

### How React Uses the Virtual DOM

1. React creates a **Virtual DOM tree** from components.
2. When state or props change, React creates a **new Virtual DOM**.
3. React compares the new Virtual DOM with the previous one (**diffing**).
4. Only the **changed parts** are updated in the real DOM (**reconciliation**).

---

### Why Virtual DOM is Faster

- Updating the real DOM is expensive
- Virtual DOM updates are fast (in memory)
- React batches and minimizes DOM changes

---

### Example (Conceptual)

```js
setState({ count: count + 1 });
```

## 2. Explain the purpose of React hooks. How does useEffect work?

### Purpose of React Hooks

**React Hooks** allow developers to:

- Use state and lifecycle features in **functional components**
- Write cleaner and more reusable logic
- Avoid class components

Common hooks include:

- `useState` – manage state
- `useEffect` – handle side effects
- `useContext` – share data
- `useRef` – access DOM elements

---

### What is `useEffect`?

`useEffect` is a hook used to handle **side effects** such as:

- Fetching data
- Subscriptions
- DOM updates
- Timers

---

### How `useEffect` Works

```js
useEffect(() => {
  // side effect code
  return () => {
    // cleanup code
  };
}, [dependencies]);
```

## 3.What is the difference between controlled and uncontrolled components in React?

The difference between **controlled** and **uncontrolled** components lies in **how form data is managed**.

### Controlled Components

- Form data is controlled by **React state**
- Input value is set using `value`
- Changes are handled via `onChange`
- Easier to validate and control

#### Example

```js
function Form() {
  const [name, setName] = React.useState("");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

### Uncontrolled Components

- Form data is controlled by **DOM itself**
- Uses defaultValue instead of value
- Access using ref
- Less code, but less control

```js
function Form() {
  const inputRef = React.useRef();

  return <input ref={inputRef} defaultValue="John" />;
}
```

## 4. What is the significance of key props in React lists?

The **`key` prop** is a special attribute in React used to **uniquely identify elements in a list**. It helps React efficiently update and re-render list items.

### Why `key` is Important

- Helps React identify **which items changed, added, or removed**
- Improves **performance** during re-rendering
- Prevents **UI bugs** caused by incorrect DOM updates

---

### Example

```js
const items = ["Apple", "Banana", "Orange"];

items.map((item, index) => <li key={item}>{item}</li>);
```
