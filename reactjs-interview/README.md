## ReactJS Interview prep
These are from online 
1. [QnA](https://github.com/sudheerj/reactjs-interview-questions)
2. [QnA](https://www.turing.com/interview-questions/react-js)
3. [QnA](https://www.edureka.co/blog/interview-questions/react-interview-questions/)


## Questions
1. What is server side rendering ?
```
Server-side rendering (SSR) is a technique used in web development where a web server processes the request for
a web page and generates the HTML content on the server before sending it to the client's browser.

The server generates the full HTML content of a web page in response to a user's request.
The HTML is sent to the client's browser, and it includes the fully rendered content.
This approach can result in faster initial page loads because users receive a fully formed page from the server.

SSR Pros:
* Faster initial page loads: Users receive a fully rendered page from the server.
* Improved SEO: Search engines can more easily index content since it's present in the initial HTML.
* Better performance on low-powered devices or slow networks for the first page view.

SSR Cons:
* Potentially higher server load: Generating HTML on the server for each request can be resource-intensive.
* May have a slower time-to-interactivity (TTI) compared to CSR.
```
2. What is client side rendering ?
```
client-side rendering (CSR) involves sending a minimal HTML document to the browser and relying on JavaScript to
render the content dynamically on the client side.

The server sends a minimal HTML document to the client, often referred to as a "skeleton" or "shell."
JavaScript is used to dynamically render and update the content in the browser after the initial page load.
CSR can provide a more interactive user experience, as content can be updated without reloading the entire page.

CSR Pros:
* More dynamic and interactive: JavaScript can update content without full page reloads.
* Potentially lower server load for subsequent interactions.

CSR Cons:
* Slower initial page loads: Users may need to wait for JavaScript to download and execute before seeing content.
* SEO challenges: Search engines may have difficulty indexing dynamically rendered content.
```
