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
they are moved out of the JavaScript runtime environment and executed separately.
Once they complete, they are placed in the callback queue.

* Event Loops:
The event loop continuously monitors the call stack and the callback queue.
When the call stack is empty, and there are callbacks in the callback queue,
the event loop moves the callbacks from the callback queue to the call stack for execution.
This process ensures that asynchronous tasks are executed in the order they were completed and
prevents blocking the main thread.

```

3. What are semantic tags and why do we use them
```
Semantic tags are HTML elements that convey meaning about the content they enclose,
beyond just presentation or appearance. They provide structural information to web browsers,
search engines, and assistive technologies, helping them understand the purpose and context of
the content within a webpage. These tags contribute to improved accessibility,
search engine optimization (SEO), and overall organization of the document.

Some commonly used semantic tags include:

<header>: Defines a header for a section or a document.
<nav>: Represents a section of navigation links.
<main>: Defines the main content of a document.
<article>: Represents an independent piece of content that can stand alone.
<section>: Defines a thematic grouping of content, typically with a heading.
<aside>: Represents content tangentially related to the content around it.
<footer>: Defines a footer for a section or a document.

Semantic tags are beneficial for several reasons:

Accessibility: Assistive technologies like screen readers rely on semantic markup to
interpret and present content to users with disabilities. Properly structured documents
using semantic tags make it easier for such users to navigate and understand the content.

SEO: Search engines utilize semantic markup to better understand the context and relevance
of the content on web pages. Semantic tags help search engine crawlers index content more accurately,
potentially leading to better search engine rankings.

Code Organization: Semantic tags improve the overall organization and readability of HTML code,
making it easier for developers to understand and maintain the structure of a webpage.

Future-Proofing: Semantic tags provide a standardized way to structure content,
making it more adaptable to future changes in web technologies and devices.
```
4.Explain CSS specificity
```
Specificity in CSS determines which styles are applied to an element when multiple
conflicting CSS rules target the same element. It's essentially a set of rules that
the browser follows to decide which style declarations to apply when there are conflicting rules.

Specificity is calculated based on the selectors used in CSS rules. Generally,
the more specific a selector is, the higher its specificity, and the more likely it is to override styles with lower specificity.

Inline Styles: Styles applied directly to an HTML element via the style attribute have the highest specificity.
They are considered the most specific and will override any other styles.

ID Selectors: Selectors that target HTML elements by their ID have a higher specificity than other types of selectors.
For example, #myElement is more specific than .myClass.

Class, Attribute, and Pseudo-Class Selectors: Selectors targeting classes, attributes, or pseudo-classes have medium specificity.
For example, .myClass, [type="text"], :hover.

Element Type Selectors: Selectors targeting HTML elements by their tag name (e.g., div, p, a) have the lowest specificity.

Universal Selector (*): The universal selector has a specificity of 0,0,0,0, meaning it is less specific than any other selector.
```
