# SoleVault — Frontend Footwear Store

A responsive HTML, CSS, and JavaScript footwear-store template. It includes a landing page, searchable/filterable shop, product details, and a demo cart.

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Start `index.html` with Live Server, or open it in a browser.

## Main files
- `index.html` — landing page
- `shop.html` / `shop.js` — catalogue, search, filters, and sorting
- `product.html` / `product.js` — product details, image gallery, size/colour selection
- `cart.html` / `cart.js` — front-end shopping cart
- `store.js` — sample product data, USD formatting, and shared cart helpers
- `style.css` — shared styling and responsive layouts
- `assets/` — local image assets

## Customise products
Edit `STORE_PRODUCTS` in `store.js`. Product prices are illustrative USD demo values. Replace sample data with accurate details before using the template for a client. Product photography may load from external Unsplash URLs and therefore requires an internet connection.

## Important limitations
This is a frontend demo only. Cart data is saved in the browser with `localStorage`; there is no backend, real inventory, account system, or payment processing. Ratings/review counts are sample UI data and must not be presented as real customer feedback.

## Assets and licensing
See `ASSETS.md`. Confirm that every image, font, and icon is appropriately licensed before redistributing the template commercially. `LICENSE.txt` is a placeholder and must be replaced with the licence terms you choose before sale.
