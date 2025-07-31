# Tailwind CSS Project Documentation

## 📘 Overview

This project demonstrates the use of **Tailwind CSS** to build a responsive and customizable front-end interface. The setup uses Node.js and npm for dependency management and includes a custom Tailwind configuration for easy scalability.

---

## ⚙️ Technologies Used

- **Tailwind CSS** – A utility-first CSS framework for rapid UI development.
- **Node.js & npm** – For installing and managing project dependencies.
- **PostCSS** (if applicable) – To process CSS with Tailwind.

---

## 🚀 Getting Started

### 1. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 2. Build Tailwind CSS

Compile your CSS using the following command:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

> You can adjust the input/output paths based on your project structure.

### 3. Run the Project

Open your HTML file that links to the generated Tailwind CSS (`output.css`) in a browser.

---

## 💡 Example Usage of Tailwind CSS

### Button

```html
<button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

### Card Layout

```html
<div class="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
  <h2 class="text-xl font-semibold text-gray-900">Card Title</h2>
  <p class="text-gray-500">This is a simple card using Tailwind utility classes.</p>
</div>
```

### Responsive Grid

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  <!-- Grid Items -->
</div>
```

---

## 🛠 Example Tailwind Configuration

Here’s a simple `tailwind.config.js` file:

```js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

This tells Tailwind where to look for class names so it can tree-shake unused styles.

---

## 📁 Project Structure 

```
ass3/
├── node_modules/
src/
├── images/                      # Image assets
├── Pages/                       # HTML pages
│   ├── About.html
│   ├── Contact.html
│   ├── Portfolio.html
│   ├── Service.html
├── style/                       # CSS files
│   ├── Global.css
│   ├── output.css               # Generated Tailwind CSS
│   ├── style.css
├── index.html                   # Main entry HTML file
├── package.json                 # Project dependencies
├── package-lock.json
├── tailwind.config.js           # Tailwind CSS configuration

