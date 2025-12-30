# Frontend Questions and Answers

## 1. What is Event Delegation in JavaScript?

Event delegation is handling events on child elements by attaching a single event listener to their parent using event bubbling.

## 2. What is event bubbling?

Event bubbling is when an event triggered on an element propagates upward through its parent elements in the DOM.

## 3. Mutable and immutable objects?

- Mutable objects can be changed after they are created.
- Immutable values cannot be changed once created; any “change” creates a new value.

## 4. What are async and defer?

Both `async` and `defer` are attributes used with the `<script>` tag to control how external JavaScript files are loaded and executed, improving page performance.

#### Async

- Script is downloaded in parallel with HTML parsing
- Script executes as soon as it finishes downloading
- HTML parsing pauses during execution

#### Defer

- Script is downloaded in parallel
- Script execution is deferred until HTML parsing is complete
- Scripts execute in order

| Async                                                             | Defer                                                                                    |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Script is downloaded in parallel with HTML parsing                | Script is downloaded in parallel                                                         |
| Script executes as soon as it finishes downloading                | Script execution is deferred until HTML parsing is complete                              |
| HTML parsing pauses during execution                              | Scripts execute in order                                                                 |
| Best for <br/> Independent scripts,Analytics,ads,Tracking scripts | Best for <br/> DOM manipulation,Main application logic,Scripts that depend on each other |
