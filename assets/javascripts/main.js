import { fetchProducts } from "./api.js";

window.addEventListener("load", async () => {
  const products = await fetchProducts();
  const container = document.getElementById("product-list");

  products.forEach(product => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h2>${product.title}</h2>
      <p>${product.price} €</p>
    `;
    container.appendChild(item);
  });
});
