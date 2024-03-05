function addToCart(product) {
    const cart = document.getElementById('cart');
    const item = document.createElement('li');
    item.innerHTML = `
      <div class="item">
        <span>${product.name}</span>
        <span>$${product.price.toFixed(2)}</span>
      </div>
    `;
    cart.appendChild(item);
}

// Function to handle adding products to the cart
function handleAddToCartClick(product) {
    addToCart(product);
    alert(`Added ${product.name} to the cart!`);
}

// Add products to cart on page load (just for demonstration)
window.onload = function() {
    const products = [
        { id: 1, name: "Lifting straps", price: 225 },
        { id: 2, name: "Figure 8 Straps", price: 199 },
        { id: 3, name: "Creatine", price: 199 },
        { id: 4, name: "Protein Powder", price: 299 },
        { id: 5, name: "Pre workout", price: 249 },
        { id: 6, name: "Lifting Hooks", price: 249 }
    ];

    const productsList = document.getElementById('products');
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.onclick = function() {
            handleAddToCartClick(product);
        };
        listItem.appendChild(addButton);
        productsList.appendChild(listItem);
    });
};