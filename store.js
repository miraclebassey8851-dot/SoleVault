const STORE_PRODUCTS = [
  {
    id: "sv001",
    name: "Crimson Motion",
    brand: "Street Series",
    category: "Sneakers",
    gender: "Men",
    price: 145,
    oldPrice: 165,
    tag: "BESTSELLER",
    colors: ["Red / Black", "Triple Black", "White"],
    sizes: [40, 41, 42, 43, 44, 45],
    stock: 12,
    rating: 4.9,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A bold everyday sneaker with a cushioned feel, durable construction, and a colourway built to stand out.",
    featured: true,
  },
  {
    id: "sv002",
    name: "Shadow Runner",
    brand: "Performance",
    category: "Running",
    gender: "Unisex",
    price: 120,
    tag: "JUST DROPPED",
    colors: ["Black / Red", "Grey", "White"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    stock: 9,
    rating: 4.7,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Light-on-foot styling with a supportive fit for busy days, casual training, and everyday movement.",
    featured: true,
  },
  {
    id: "sv003",
    name: "Court Classic",
    brand: "Everyday Icons",
    category: "Casual",
    gender: "Unisex",
    price: 98,
    tag: "VAULT PICK",
    colors: ["White / Orange", "All White", "Black"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    stock: 18,
    rating: 4.8,
    reviews: 91,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A clean, versatile low-top that pairs easily with relaxed denim, tailored trousers, and weekend fits.",
    featured: true,
  },
  {
    id: "sv004",
    name: "Cloudform Low",
    brand: "Daily Essentials",
    category: "Casual",
    gender: "Women",
    price: 110,
    tag: "FAN FAVOURITE",
    colors: ["Blue Print", "Cream", "Black"],
    sizes: [36, 37, 38, 39, 40, 41],
    stock: 7,
    rating: 4.6,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A fashion-forward everyday pair with a comfortable fit and a playful finish for standout outfits.",
    featured: true,
  },
  {
    id: "sv005",
    name: "Midnight Pace",
    brand: "Performance",
    category: "Running",
    gender: "Men",
    price: 135,
    tag: "LIGHTWEIGHT",
    colors: ["Charcoal", "Black / White", "Olive"],
    sizes: [40, 41, 42, 43, 44, 45],
    stock: 14,
    rating: 4.7,
    reviews: 48,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A dark, understated runner for long days, with a sporty profile and a cushioned everyday ride.",
    featured: false,
  },
  {
    id: "sv006",
    name: "Studio White",
    brand: "Everyday Icons",
    category: "Casual",
    gender: "Women",
    price: 105,
    tag: "CLEAN LOOK",
    colors: ["White", "Cream", "White / Green"],
    sizes: [36, 37, 38, 39, 40, 41],
    stock: 11,
    rating: 4.8,
    reviews: 77,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A crisp, minimal sneaker that makes daily styling easy and keeps your rotation looking fresh.",
    featured: false,
  },
  {
    id: "sv007",
    name: "Retro Track",
    brand: "Heritage",
    category: "Sneakers",
    gender: "Unisex",
    price: 115,
    tag: "RETRO",
    colors: ["Tan / Black", "Navy", "Cream"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    stock: 5,
    rating: 4.6,
    reviews: 39,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Retro-inspired lines meet modern everyday comfort in a shoe made for effortless street style.",
    featured: false,
  },
  {
    id: "sv008",
    name: "Redline High",
    brand: "Street Series",
    category: "Basketball",
    gender: "Men",
    price: 155,
    tag: "LIMITED FEEL",
    colors: ["Red / Black", "Black / White", "White"],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    stock: 4,
    rating: 4.9,
    reviews: 103,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A high-top silhouette with a confident profile, built for bold streetwear and all-day looks.",
    featured: false,
  },
  {
    id: "sv009",
    name: "Softstep Slides",
    brand: "Off-Duty",
    category: "Slides",
    gender: "Unisex",
    price: 28,
    tag: "EASY DAYS",
    colors: ["Black", "Stone", "Olive"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    stock: 24,
    rating: 4.5,
    reviews: 42,
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "An easy slip-on for laid-back days, quick errands, and relaxed weekends.",
    featured: false,
  },
  {
    id: "sv010",
    name: "Coast Flip-Flops",
    brand: "Off-Duty",
    category: "Flip-Flops",
    gender: "Unisex",
    price: 16,
    tag: "DAILY ESSENTIAL",
    colors: ["Black", "Blue", "Red"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    stock: 30,
    rating: 4.4,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Simple, lightweight warm-weather footwear for home, holidays, and easy everyday wear.",
    featured: false,
  },
  {
    id: "sv011",
    name: "Amber Street Low",
    brand: "Street Series",
    category: "Casual",
    gender: "Women",
    price: 92,
    tag: "NEW SEASON",
    colors: ["Tan", "White", "Black"],
    sizes: [36, 37, 38, 39, 40, 41],
    stock: 10,
    rating: 4.6,
    reviews: 33,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A warm-toned casual shoe that brings a little vintage character to everyday outfits.",
    featured: false,
  },
  {
    id: "sv012",
    name: "Court Ace",
    brand: "Everyday Icons",
    category: "Formal",
    gender: "Men",
    price: 88,
    tag: "SMART CASUAL",
    colors: ["Black", "Brown", "White"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    stock: 6,
    rating: 4.5,
    reviews: 25,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "A neat, understated pair for smart-casual outfits and days when you want a cleaner finish.",
    featured: false,
  },
];
const SV_CART_KEY = "solevault:cart:v1";
const svMoney = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
const svGetCart = () => {
  try {
    return JSON.parse(localStorage.getItem(SV_CART_KEY)) || [];
  } catch {
    return [];
  }
};
const svSaveCart = (cart) => {
  localStorage.setItem(SV_CART_KEY, JSON.stringify(cart));
  svUpdateCartCount();
};
const svUpdateCartCount = () => {
  const count = svGetCart().reduce((sum, item) => sum + item.quantity, 0);
  document
    .querySelectorAll("[data-cart-count]")
    .forEach((el) => (el.textContent = count));
};
const svGetProduct = (id) =>
  STORE_PRODUCTS.find((product) => product.id === id);
const svAddToCart = (id, size, color, quantity = 1) => {
  const product = svGetProduct(id);
  if (!product) return false;
  const cart = svGetCart();
  const existing = cart.find(
    (item) =>
      item.id === id && item.size === Number(size) && item.color === color,
  );
  if (existing) existing.quantity += quantity;
  else cart.push({ id, size: Number(size), color, quantity });
  svSaveCart(cart);
  return true;
};
const svCard = (product) =>
  `<article class="product-card shop-card"><a class="product-open" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}"><div class="product-photo"><span class="product-tag">${product.tag}</span><img loading="lazy" src="${product.image}" alt="${product.name}" onerror="this.closest('.product-photo').classList.add('image-fallback');this.remove()"></div><div class="product-meta"><div><p class="product-brand">${product.brand} · ${product.category}</p><h3>${product.name}</h3></div><strong>${svMoney(product.price)}</strong></div></a><div class="product-foot"><span class="stars">★★★★★</span><span>${product.rating} (${product.reviews})</span></div></article>`;
document.addEventListener("DOMContentLoaded", () => {
  svUpdateCartCount();
  document
    .querySelectorAll('.header-actions button[aria-label="Shopping bag"]')
    .forEach((btn) =>
      btn.addEventListener("click", () => (location.href = "cart.html")),
    );
});
