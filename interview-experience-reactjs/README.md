### 1. How do you make HTML accessible to screen readers

```
We can use role, aria-label, aria attributes, sematic tags
```

### 2. A UL elemet with 10k items. Page is lagging. What can we do without using backend pagination

```
- we can use lazy rendering
- virtualization: render only items that are visible and dont add other elemtns to DOM
-
```

### 3. We have sticky header that should stay on top when scrolling. Sometimes it flickers or overlaps when new elements render? Whats happening here

```
Sticky positioning relies on layout stability. When the DOM changes during scroll—due to re-renders, height changes, or stacking context issues—the browser briefly recalculates the sticky offset, which causes flicker or overlap.

Sticky headers flicker when layout changes during scroll. Fix it by stabilizing height, avoiding overflow/transform on parents, reserving space, and preventing unnecessary re-renders.”
```

### 4. If you have to make a responsive card layout that show 3 cards on desktop, 2 on tablet and 1 on mobile. How do you do it cleanly

```
Use CSS Grid with a mobile-first layout and media queries. Start with one column, switch to two at tablet width, and three at desktop. If flexibility is allowed, use auto-fit with minmax()
```

### 5. How do you center a div without grid or flex

```
Without flex or grid, the most reliable way is using position: absolute with top: 50%, left: 50%, and transform: translate(-50%, -50%).
```

### 6. Whats a difference between structured clone and JOSN.parse(JSON.stringify()) clone

```
structuredClone is a native deep-clone algorithm that preserves complex types and circular references.
JSON.parse(JSON.stringify()) is a lossy serialization trick that drops or converts many values and breaks on circular references
```

### 7. You have a function that returns a promise but sometime it rejects due to network error we just want to retry automatically whenever it fails. How do we do this with exponential backoff.

```
Wrap the async function in a retry loop that doubles the delay after each failure, adds jitter to avoid retry storms, and stops after a max retry count.”

```

```javascript
async function retry(fn, n = 3, delay = 100) {
  try {
    return await fn();
  } catch (e) {
    if (n === 0) throw e;
    await new Promise((r) => setTimeout(r, delay));
    return retry(fn, n - 1, delay * 2);
  }
}
```

### 8. What debouncing an throttle

```
Debouncing:
Debouncing delays function execution until after a specified time has passed since the last event.
“Wait until the user stops doing something.”

Throttling:
Throttling ensures a function runs at most once every specified interval, no matter how often it’s triggered
“Run this at a fixed rate.”
```

### 9. Whats useEffect cleanup and useLayout cleanup

```
Effect cleanup runs before re-running an effect or on unmount.
useEffect cleanup runs after paint and is non-blocking, while useLayoutEffect cleanup runs synchronously before paint to prevent visual inconsistencies.
```
