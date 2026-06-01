Sweet Bakery — React (Phase 2)

A fully responsive React bakery website built with **Vite + React 18 + React Router v6 + Bootstrap 5**.
Includes authentication (localStorage), shopping cart with Context API, protected routes, and a Bootstrap gallery carousel.

 Tech Stack
- React 18 + Vite
- React Router DOM v6
- Bootstrap 5 + Bootstrap Icons
- Context API + localStorage (Auth & Cart)

 Run locally
```bash
npm install
npm run dev
```
Open the URL printed in the terminal (usually http://localhost:5173).

 Build for production
```bash
npm run build
npm run preview

 Project Structure

sweet-bakery/
├── public/
├── src/
│   ├── assets/images/        # ← put all your images here
│   ├── components/           # Navbar, Footer, Layout, ProtectedRoute
│   ├── context/              # AuthContext, CartContext
│   ├── data/                 # menuItems.js
│   ├── pages/                # Landing, Home, Menu, About, Contact, Cart, Login, Register
│   ├── styles/main.css       # full Phase 1 stylesheet
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md


images

| File you place                              | Used in                                  |
|---------------------------------------------|------------------------------------------|
| `logo.png`                                  | `src/components/Navbar.jsx`, `Footer.jsx` |
| `cart-icon.png`                             | `src/components/Navbar.jsx`              |
| `landing-bg.jpeg`                           | `src/pages/Landing.jsx` (background)     |
| `homecake.jpeg`                             | `src/pages/Home.jsx` (hero)              |
| `gallery1.jpeg` … `gallery6.jpeg`           | `src/pages/Home.jsx` (carousel)          |
| `bestseller.jpeg`                           | `src/pages/Home.jsx` (circle)            |
| `cheesecake.jpeg`                           | `src/data/menuItems.js`                  |
| `mousse.jpeg`                               | `src/data/menuItems.js`                  |
| `cinnamon-rolls.jpeg`                       | `src/data/menuItems.js`                  |
| `pave.jpeg`                                 | `src/data/menuItems.js`                  |
| `abt1.jpeg` … `abt4.jpeg`                   | `src/pages/About.jsx` (grid)             |
| `story.jpeg`, `team.jpeg`                   | `src/pages/About.jsx`                    |
| `contact-header.jpeg`                       | `src/pages/Contact.jsx`                  |
| `sweets.jpeg`                               | `src/pages/Cart.jsx` (empty state)       |


/assets/images/cheesecake.jpeg';
 <img src={cheesecake} alt="Cheesecake" />

For `src/data/menuItems.js`, replace `image: null` with the import.

 Features
- Landing → Home → Menu → About → Contact flow
- Login / Register saved to `localStorage`
- Protected routes: `/contact` and Cart "Place Order" require login
- Add-to-cart with topping selection, quantity updates, persistent cart
- Bootstrap responsive navbar with hamburger menu
- Bootstrap Carousel gallery
