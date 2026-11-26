# Loopstudios

A React rebuild of two Frontend Mentor challenges in one project:

- **Home page** (`/`): the Loopstudios landing page, with a mobile menu and a gallery of creations.
- **Products and cart** (`/products`, `/cart`): a dessert shop with a cart that is saved in the browser and an order confirmation box.

Live site: https://luminous-empanada-5f80b6.netlify.app/

## Built with

- React 19 and React Router
- Vite
- Plain CSS (one file for the home page, one for the shop, one for shared rules and colours)

## Run it on your computer

You need [Node.js](https://nodejs.org) installed.

```bash
git clone https://github.com/gabrielukaiwe-cpu/vecta-studio.git
cd vecta-studio
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the site with live reload |
| `npm run build` | Makes the production files in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with ESLint |

## Project structure

```
public/            Files served as they are
  images/home/     Landing page images and icons
  images/shop/     Dessert photos and shop icons
  _redirects       Makes page refresh work on Netlify
src/
  components/      home/, shop/ and shared/ components
  context/         CartContext: the cart state and its helpers
  data/            products.js and creations.js
  pages/           Home, Products, Cart
  styles/          global.css, home.css, products.css
```

## Deploying to Netlify

Build command `npm run build`, publish directory `dist`. The `public/_redirects` file sends every route to `index.html` so `/products` and `/cart` still work when the page is refreshed.

## Credits

Challenges by [Frontend Mentor](https://www.frontendmentor.io).
