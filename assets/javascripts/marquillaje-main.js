
import { fetchProductsByType } from './marquillaje-api.js';

const container = document.getElementById('product-list');
const buttons = document.querySelectorAll('.filter-button');

buttons.forEach(button => {
  button.addEventListener('click', async () => {
    const type = button.dataset.type;
    const products = await fetchProductsByType(type);

    container.innerHTML = ''; 

    products.slice(0, 10).forEach(product => {
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
        <img src="${product.image_link}" alt="${product.name}" width="150"/>
        <h2>${product.name}</h2>
        <p>${product.price} €</p>
      `;
      container.appendChild(item);
    });
  });
});
