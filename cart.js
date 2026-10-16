const cartItems = document.querySelector("#cart-items");
const subtotalNode = document.querySelector("#cart-subtotal");
const totalNode = document.querySelector("#cart-total");
function renderCart() {
  const cart = svGetCart();
  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-cart"><i class="ph ph-shopping-bag-open"></i><h2>Your bag is taking it easy.</h2><p>Nothing in here yet. Let's find you a pair.</p><a class="store-button primary" style="display:inline-flex;align-items:center" href="shop.html">EXPLORE THE VAULT <i class="ph ph-arrow-right"></i></a></div>`;
    document.querySelector("#cart-summary").style.display = "none";
    subtotalNode.textContent = svMoney(0);
    totalNode.textContent = svMoney(0);
    return;
  }
  document.querySelector("#cart-summary").style.display = "block";
  cartItems.innerHTML = cart
    .map((item) => {
      const p = svGetProduct(item.id);
      if (!p) return "";
      return `<article class="cart-item" data-cart-key="${item.id}-${item.size}-${item.color}"><a href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a><div><p class="product-brand">${p.brand}</p><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><p>Colour: ${item.color} · EU size ${item.size}</p><div class="cart-item-actions"><div class="quantity-control"><button type="button" data-action="minus" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}" aria-label="Decrease quantity">−</button><output>${item.quantity}</output><button type="button" data-action="plus" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}" aria-label="Increase quantity">+</button></div><button class="remove-item" data-action="remove" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">Remove</button></div></div><strong class="item-price">${svMoney(p.price * item.quantity)}</strong></article>`;
    })
    .join("");
  const subtotal = cart.reduce(
    (sum, item) => sum + (svGetProduct(item.id)?.price || 0) * item.quantity,
    0,
  );
  subtotalNode.textContent = svMoney(subtotal);
  totalNode.textContent = svMoney(subtotal);
  cartItems.querySelectorAll("[data-action]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const cart = svGetCart();
      const index = cart.findIndex(
        (item) =>
          item.id === btn.dataset.id &&
          item.size === Number(btn.dataset.size) &&
          item.color === btn.dataset.color,
      );
      if (index < 0) return;
      if (btn.dataset.action === "remove") cart.splice(index, 1);
      if (btn.dataset.action === "minus")
        cart[index].quantity = Math.max(1, cart[index].quantity - 1);
      if (btn.dataset.action === "plus") {
        const p = svGetProduct(cart[index].id);
        if (cart[index].quantity < p.stock) cart[index].quantity += 1;
      }
      svSaveCart(cart);
      renderCart();
    }),
  );
}
document
  .querySelector("#checkout-button")
  .addEventListener("click", () =>
    alert(
      "Checkout is not connected in this demo yet. Your bag is saved on this device.",
    ),
  );
document.querySelector("#year").textContent = new Date().getFullYear();
document
  .querySelector(".menu-toggle")
  .addEventListener("click", () =>
    document.querySelector(".desktop-nav").classList.toggle("nav-open"),
  );
renderCart();
