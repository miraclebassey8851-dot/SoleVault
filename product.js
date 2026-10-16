const productId = new URLSearchParams(location.search).get("id") || "sv001";
const product = svGetProduct(productId) || STORE_PRODUCTS[0];
let chosenColor = product.colors[0];
let chosenSize = null;
let quantity = 1;
const mainImage = document.querySelector("#main-product-image");
const message = document.querySelector("#detail-message");
function updateQuantity() {
  document.querySelector("#quantity-value").textContent = quantity;
  document.querySelector("#button-price").textContent = svMoney(
    product.price * quantity,
  );
  document.querySelector("#quantity-minus").disabled = quantity <= 1;
  document.querySelector("#quantity-plus").disabled = quantity >= product.stock;
}
function renderSizes() {
  document.querySelector("#size-grid").innerHTML = product.sizes
    .map(
      (size) =>
        `<button class="size-button ${chosenSize === size ? "selected" : ""}" type="button" data-size="${size}">${size}</button>`,
    )
    .join("");
  document.querySelectorAll("[data-size]").forEach((btn) =>
    btn.addEventListener("click", () => {
      chosenSize = Number(btn.dataset.size);
      renderSizes();
      message.textContent = "";
    }),
  );
}
function renderColors() {
  document.querySelector("#detail-colors").innerHTML = product.colors
    .map(
      (color, index) =>
        `<button type="button" class="detail-color ${color === chosenColor ? "selected" : ""}" data-color="${color}">${color}</button>`,
    )
    .join("");
  document.querySelector("#selected-color-label").textContent = chosenColor;
  document.querySelectorAll("[data-color]").forEach((btn) =>
    btn.addEventListener("click", () => {
      chosenColor = btn.dataset.color;
      renderColors();
      const colorIndex = product.colors.indexOf(chosenColor);
      mainImage.src =
        product.images[colorIndex % product.images.length] || product.image;
      document
        .querySelectorAll(".product-thumb")
        .forEach((thumb, i) =>
          thumb.classList.toggle(
            "active",
            i === colorIndex % product.images.length,
          ),
        );
    }),
  );
}
function renderGallery() {
  const images = product.images?.length ? product.images : [product.image];
  document.querySelector("#thumbnail-list").innerHTML = images
    .map(
      (image, i) =>
        `<button type="button" class="product-thumb ${i === 0 ? "active" : ""}" data-image="${image}" aria-label="View product image ${i + 1}"><img src="${image}" alt="${product.name} view ${i + 1}"></button>`,
    )
    .join("");
  mainImage.src = images[0];
  mainImage.alt = product.name;
  document.querySelectorAll("[data-image]").forEach((btn) =>
    btn.addEventListener("click", () => {
      mainImage.src = btn.dataset.image;
      document
        .querySelectorAll(".product-thumb")
        .forEach((t) => t.classList.toggle("active", t === btn));
    }),
  );
}
document.querySelector("#detail-brand").textContent =
  `${product.brand} · ${product.category}`;
document.querySelector("#detail-name").textContent = product.name;
document.querySelector("#crumb-product").textContent = product.name;
document.title = `${product.name} — SOLEVAULT`;
document.querySelector("#detail-rating").textContent =
  `${product.rating} (${product.reviews} reviews)`;
document.querySelector("#detail-price").textContent = svMoney(product.price);
document.querySelector("#detail-description").textContent = product.description;
document.querySelector("#stock-note").textContent =
  `${product.stock} available`;
document.querySelector("#product-specs").textContent =
  `Brand: ${product.brand}. Category: ${product.category}. Fit: everyday fit. Available colours: ${product.colors.join(", ")}. Available EU sizes: ${product.sizes.join(", ")}.`;
renderGallery();
renderColors();
renderSizes();
updateQuantity();
document.querySelector("#quantity-minus").addEventListener("click", () => {
  quantity = Math.max(1, quantity - 1);
  updateQuantity();
});
document.querySelector("#quantity-plus").addEventListener("click", () => {
  quantity = Math.min(product.stock, quantity + 1);
  updateQuantity();
});
function addSelected(goToCart = false) {
  if (!chosenSize) {
    message.textContent =
      "Choose your size first, then add your pair to the bag.";
    document
      .querySelector("#size-grid")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  svAddToCart(product.id, chosenSize, chosenColor, quantity);
  message.textContent = `Added ${quantity} × ${product.name} (EU ${chosenSize}) to your bag.`;
  if (goToCart) location.href = "cart.html";
}
document
  .querySelector("#add-to-cart")
  .addEventListener("click", () => addSelected());
document
  .querySelector("#buy-now")
  .addEventListener("click", () => addSelected(true));
const related = STORE_PRODUCTS.filter(
  (p) =>
    p.id !== product.id &&
    (p.category === product.category || p.gender === product.gender),
).slice(0, 4);
const relatedProducts = [
  ...related,
  ...STORE_PRODUCTS.filter((p) => p.id !== product.id && !related.includes(p)),
].slice(0, 4);
document.querySelector("#related-grid").innerHTML = relatedProducts
  .map(svCard)
  .join("");
document.querySelector("#year").textContent = new Date().getFullYear();
document
  .querySelector(".menu-toggle")
  .addEventListener("click", () =>
    document.querySelector(".desktop-nav").classList.toggle("nav-open"),
  );
