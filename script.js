const shoes = [
  {
    name: "Crimson Motion",
    brand: "Street Series",
    price: "$145",
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    alt: "Red athletic sneaker",
  },
  {
    name: "Shadow Runner",
    brand: "Performance",
    price: "$120",
    tag: "JUST DROPPED",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
    alt: "Modern sneaker product photo",
  },
  {
    name: "Court Classic",
    brand: "Everyday Icons",
    price: "$98",
    tag: "VAULT PICK",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",
    alt: "Classic casual sneakers",
  },
  {
    name: "Cloudform Low",
    brand: "Daily Essentials",
    price: "$110",
    tag: "FAN FAVOURITE",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
    alt: "Lifestyle sneaker",
  },
];
/* A separate second collection is also data-driven, so adding a product only requires adding an object. */
const moreShoes = [
  {
    name: "Midnight Pace",
    brand: "Performance",
    price: "$135",
    tag: "LIGHTWEIGHT",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
    alt: "Dark running shoes",
  },
  {
    name: "Studio White",
    brand: "Everyday Icons",
    price: "$105",
    tag: "CLEAN LOOK",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
    alt: "White casual sneaker",
  },
  {
    name: "Retro Track",
    brand: "Heritage",
    price: "$115",
    tag: "RETRO",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
    alt: "Retro sneaker",
  },
  {
    name: "Redline High",
    brand: "Street Series",
    price: "$155",
    tag: "LIMITED FEEL",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
    alt: "High style sneaker",
  },
];
const reviews = [
  {
    name: "Jordan M.",
    initials: "JM",
    date: "Demo review",
    rating: 5,
    title: "Instant favourite",
    text: "The quality surprised me in the best way. They look even better in person and go with almost everything.",
  },
  {
    name: "Amara O.",
    initials: "AO",
    date: "Demo review",
    rating: 5,
    title: "Clean from box to fit",
    text: "Easy browsing, great-looking picks, and the pair feels comfortable enough for a full day out.",
  },
  {
    name: "Daniel K.",
    initials: "DK",
    date: "Demo review",
    rating: 5,
    title: "Worth the rotation",
    text: "Love the style and the attention to detail. Already planning which pair I want next.",
  },
];
const faqs = [
  {
    q: "How do I choose the right size?",
    a: "Check the size guide provided with each product and compare it with a pair you already own. If you're between sizes, check the specific shoe's fit notes before ordering.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery times depend on your location and the seller's dispatch window. Your order confirmation should include the latest estimated delivery details.",
  },
  {
    q: "Can I return or exchange a pair?",
    a: "Items should be unworn and returned with their original packaging. Please contact the store team first to confirm the applicable return window and exchange options.",
  },
  {
    q: "Are the shoes authentic?",
    a: "Product authenticity and sourcing details should be confirmed on each product listing. SOLEVAULT is a concept storefront demo, so connect your real inventory and verification policy before accepting orders.",
  },
];
function productCard(shoe, index) {
  const productIdByName = {
    "Crimson Motion": "sv001", "Shadow Runner": "sv002", "Court Classic": "sv003",
    "Cloudform Low": "sv004", "Midnight Pace": "sv005", "Studio White": "sv006",
    "Retro Track": "sv007", "Redline High": "sv008"
  };
  const productId = productIdByName[shoe.name] || "sv001";
  return `<article class="product-card"><a class="product-open" href="product.html?id=${productId}" aria-label="View ${shoe.name}"><div class="product-photo"><span class="product-tag">${shoe.tag}</span><img loading="lazy" src="${shoe.image}" alt="${shoe.alt}" onerror="this.closest('.product-photo').classList.add('image-fallback');this.remove()"></div><div class="product-meta"><div><p class="product-brand">${shoe.brand}</p><h3>${shoe.name}</h3></div><strong>${shoe.price}</strong></div></a><div class="product-foot"><span class="stars">★★★★★</span><span>New season</span></div><a class="text-link home-product-link" href="product.html?id=${productId}">Choose your size <i class="ph ph-arrow-right"></i></a></article>`;
}
document.querySelector("#featured-products").innerHTML = shoes
  .map(productCard)
  .join("");
document.querySelector("#all-product-grid").innerHTML = moreShoes
  .map(productCard)
  .join("");
document.querySelector("#review-grid").innerHTML = reviews
  .map(
    (r) =>
      `<article class="review-card"><div class="review-top"><div class="review-avatar">${r.initials}</div><div><h3>${r.name}</h3><p>${r.date}</p></div><span class="verified" aria-label="Demo review">DEMO</span></div><div class="stars" aria-label="${r.rating} out of 5 stars">${"★".repeat(r.rating)}</div><h4>${r.title}</h4><p class="review-copy">“${r.text}”</p></article>`,
  )
  .join("");
document.querySelector("#faq-list").innerHTML = faqs
  .map(
    (f, i) =>
      `<details class="faq-item" ${i === 0 ? "open" : ""}><summary>${f.q}<span class="faq-icon"><i class="ph ph-plus"></i></span></summary><p>${f.a}</p></details>`,
  )
  .join("");
document.querySelector("#year").textContent = new Date().getFullYear();
document
  .querySelector(".menu-toggle")
  .addEventListener("click", () =>
    document.querySelector(".desktop-nav").classList.toggle("nav-open"),
  );
document.querySelector("#newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#form-message").textContent =
    "Thanks for joining — this demo form isn't connected to a mailing service yet.";
  e.target.reset();
});
