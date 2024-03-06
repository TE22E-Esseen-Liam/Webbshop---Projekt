const products = [
    { id: 1, name: "Lifting straps", price: 22.5 },
    { id: 2, name: "Figure 8 Straps", price: 19.9 },
    { id: 3, name: "Creatine", price: 19.9 },
    { id: 4, name: "Protein Powder", price: 29.9 },
    { id: 5, name: "Pre workout", price: 24.9 },
    { id: 6, name: "Lifting Hooks", price: 24.9 }
  ];
  
  function addToCart(product) {
    
    const cart = document.getElementById('cart');
    const item = document.createElement('li');

    const itemName = document.createElement('span');
    const itemPrice = document.createElement('span');
    itemPrice.textContent = '$' + product.price.toFixed(2); //2 = number of decimals
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    cart.appendChild(item);
  }
  
  window.onload = function() {
    const productsList = document.getElementById('products');
    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = product.name + ' - $' + product.price.toFixed(2);
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.onclick = function() {
        addToCart(product);
      };

      listItem.appendChild(addButton); //add item to checkout
      productsList.appendChild(listItem);
    });
  };