# Dynamic Post Explorer
**WAD 1 — Week 7 Activity | Fetch API & Asynchronous Data**

---

## 📌 Overview
**Dynamic Post Explorer** is a client-side web application developed for Web Application Development (WAD) 1. It dynamically retrieves and renders blog post data from an external REST API without requiring full page reloads. The application features a custom dark purple aesthetic (`#130b24` body, `#21133b` card containers) paired with elegant typography (*Playfair Display* for headings and *Poppins* for UI text).

---

## 🎯 Key Requirements & Features

- **Asynchronous Data Retrieval:** Fetches posts dynamically on demand using native `async/await` and the `Fetch API`.
- **Top 5 Items Constraint:** Filters and renders strictly the first 5 records using `.slice(0, 5)`.
- **UI State Management:** Displays and toggles loading (`#loading-box`) and error (`#error-box`) feedback banners using class-based visibility toggles (`.hidden`).
- **Safe DOM Rendering:** Dynamically constructs `<article>`, `<h3>`, and `<p>` elements using `.textContent` to prevent Cross-Site Scripting (XSS) vulnerabilities.
- **Resilient Error Interception:** Validates HTTP responses via `response.ok` and captures network drops, keeping the load button active for retry attempts.

---

## 🎨 Design System & Technical Stack

### Tech Stack
- **HTML5:** Semantic structure using `<main>`, `<header>`, and `<section>` containers.
- **CSS3:** Custom layout styled with Google Fonts (`@import`), Flexbox centering, and class-driven state indicators.
- **JavaScript (ES6+):** Vanilla JS implementing `document.querySelector`, `async/await`, `try...catch...finally`, and DOM element creation.

### Design System
| Component | Style Specification | Value |
| :--- | :--- | :--- |
| Main Page Background | CSS Background | `#130b24` |
| Card Containers | CSS Background | `#21133b` |
| Borders & Accents | CSS Border Color | `#2e1b4e` |
| Primary Heading Font | Google Font | `'Playfair Display', serif` |
| Body & UI Font | Google Font | `'Poppins', sans-serif` |

---

## 🛠️ Implementation Breakdown

### DOM Variable Mapping
The application maintains explicit references to 4 core DOM elements using `document.querySelector`:
1. `fetchBtn` (`#btn-load-data`) – Controls user trigger and disabled state.
2. `postList` (`#post-list`) – Target feed container for rendered post cards.
3. `loadingBox` (`#loading-box`) – Displays active network request status.
4. `errorBox` (`#error-box`) – Displays network failure or HTTP exception feedback.

### Execution Logic (`loadPosts`)
1. **State Reset:** Clears previous posts (`postList.innerHTML = ''`), hides existing errors, reveals `#loading-box`, and disables `#btn-load-data`.
2. **Data Fetching:** Sends an asynchronous `GET` request to `https://jsonplaceholder.typicode.com/posts`.
3. **HTTP Validation:** Checks `response.ok`. If false, throws an explicit HTTP error status.
4. **Data Slicing & Injection:** Parses JSON data, trims array to 5 items, and calls `renderPosts()`.
5. **DOM Construction:** Loops through items using `for...of`, creates `<article class="post-card">` containers, and populates `<h3>` (title) and `<p>` (body) via `textContent`.
6. **Error Handling:** Intercepts exceptions in the `catch` block and updates `#error-box` with contextual error messages.
7. **Cleanup:** Executes the `finally` block to hide `#loading-box` and restore `#btn-load-data` interaction.

---

## 📁 Project Structure

```text
├── index.html
├── style.css
├── app.js
├── README.md
└── screenshots/
     ├── Success state #1.png
     ├── Success state #2.png
     └── Loading state.png
     └── Error state.png
     
# Author 

**Krizel Jasmine Santiago**
BSIS 2 | WAD 1 
