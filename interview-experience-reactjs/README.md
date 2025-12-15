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
