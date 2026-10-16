const grid = document.querySelector("#shop-grid");
const searchInput = document.querySelector("#product-search");
const sortSelect = document.querySelector("#sort-products");
const resultCount = document.querySelector("#result-count");
const filterPanel = document.querySelector("#filter-panel");
const params = new URLSearchParams(location.search);
let selectedColor = "";
function checked(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(
    (input) => input.value,
  );
}
function renderShop() {
  let items = [...STORE_PRODUCTS];
  const q = searchInput.value.trim().toLowerCase();
  const genders = checked("gender"),
    categories = checked("category"),
    sizes = checked("size").map(Number);
  const min = Number(document.querySelector("#min-price").value) || 0;
  const max = Number(document.querySelector("#max-price").value) || Infinity;
  items = items.filter(
    (p) =>
      (!q ||
        `${p.name} ${p.brand} ${p.category} ${p.gender} ${p.colors.join(" ")}`
          .toLowerCase()
          .includes(q)) &&
      (!genders.length || genders.includes(p.gender)) &&
      (!categories.length || categories.includes(p.category)) &&
      (!sizes.length || sizes.some((size) => p.sizes.includes(size))) &&
      p.price >= min &&
      p.price <= max,
  );
  switch (sortSelect.value) {
    case "newest":
      items.reverse();
      break;
    case "price-low":
      items.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      items.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      items.sort((a, b) => b.rating - a.rating);
      break;
    default:
      items.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
  resultCount.textContent = `Showing ${items.length} of ${STORE_PRODUCTS.length} products`;
  grid.innerHTML = items.length
    ? items.map(svCard).join("")
    : `<div class="no-results"><h3>No shoes found just yet.</h3><p>Try changing your search or clearing a filter.</p><button class="store-button secondary" id="empty-clear">Clear filters</button></div>`;
  document
    .querySelector("#empty-clear")
    ?.addEventListener("click", clearFilters);
}
function clearFilters() {
  document
    .querySelectorAll(".filter-panel input[type=checkbox]")
    .forEach((i) => (i.checked = false));
  document.querySelector("#min-price").value = "";
  document.querySelector("#max-price").value = "";
  searchInput.value = "";
  renderShop();
}
document
  .querySelectorAll(".filter-panel input")
  .forEach((input) => input.addEventListener("change", renderShop));
searchInput.addEventListener("input", renderShop);
sortSelect.addEventListener("change", renderShop);
document.querySelector("#min-price").addEventListener("input", renderShop);
document.querySelector("#max-price").addEventListener("input", renderShop);
document
  .querySelector("#clear-filters")
  .addEventListener("click", clearFilters);
document
  .querySelector("#open-filters")
  .addEventListener("click", () => filterPanel.classList.toggle("filter-open"));
document.querySelectorAll(".category-tile").forEach((tile) => {
  const href = new URL(tile.href);
  if (
    params.get("category") === href.searchParams.get("category") ||
    params.get("gender") === href.searchParams.get("gender")
  )
    tile.classList.add("active");
});
if (params.get("category")) {
  const input = document.querySelector(
    `input[name="category"][value="${CSS.escape(params.get("category"))}"]`,
  );
  if (input) input.checked = true;
}
if (params.get("gender")) {
  const input = document.querySelector(
    `input[name="gender"][value="${CSS.escape(params.get("gender"))}"]`,
  );
  if (input) input.checked = true;
}
if (params.get("sort")) sortSelect.value = params.get("sort");
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector(".menu-toggle").addEventListener("click", () => {
  const nav = document.querySelector(".desktop-nav");
  nav.classList.toggle("nav-open");
});
renderShop();
