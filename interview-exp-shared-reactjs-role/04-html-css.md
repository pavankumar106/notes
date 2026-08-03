# 1. explain different postion values in css

There are 5 main position values:

1. static
2. relative
3. absolute
4. fixed
5. sticky

## 1. position: static (Default)

- Every HTML element is static by default.
- Follows the normal document flow.
- top, left, right, bottom, and z-index have no effect.

## 2. position: relative

- The element remains in the normal document flow, but you can move it relative to its original position.
- The original space is still reserved.

## 3. position: absolute

- The element is removed from the normal document flow.
- It is positioned relative to: the nearest ancestor with position: relative, absolute, fixed, or sticky otherwise, the viewport (initial containing block)

## 4. position: fixed

- The element is positioned relative to the browser viewport.
- It stays in the same place even when the page scrolls.

## 5. position: sticky

- sticky behaves like relative until a scroll threshold is reached, then behaves like fixed.

| Position   | In Normal Flow? | Reference Point                       | Scroll Behavior                 |
| ---------- | --------------- | ------------------------------------- | ------------------------------- |
| `static`   | ✅ Yes          | Normal flow                           | Scrolls normally                |
| `relative` | ✅ Yes          | Its original position                 | Scrolls normally                |
| `absolute` | ❌ No           | Nearest positioned ancestor           | Scrolls with page               |
| `fixed`    | ❌ No           | Viewport                              | Stays fixed                     |
| `sticky`   | ✅ Initially    | Parent until threshold, then viewport | Sticks after reaching threshold |

# 2. What are Semantic Elements?

Semantic HTML elements are elements whose names clearly describe their purpose and the type of content they contain.

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <aside>
            <footer></footer>
          </aside>
        </article>
      </section>
    </main>
  </nav>
</header>
```

| Element        | Purpose                                                          |
| -------------- | ---------------------------------------------------------------- |
| `<header>`     | Introductory content, logo, title                                |
| `<nav>`        | Navigation links                                                 |
| `<main>`       | Main content of the page (should generally appear once per page) |
| `<section>`    | A thematic section of content                                    |
| `<article>`    | Self-contained content (blog post, news article, forum post)     |
| `<aside>`      | Sidebar or related content                                       |
| `<footer>`     | Footer information                                               |
| `<figure>`     | Images, diagrams, charts                                         |
| `<figcaption>` | Caption for a figure                                             |
| `<address>`    | Contact information                                              |
| `<time>`       | Dates and times in a machine-readable way                        |

## Why are Semantic Elements Important?

1. Better Readability
2. Better SEO
3. Accessibility (Most Important)
4. Easier Maintenance
