// cartscript.js

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    const checkoutButton = document.getElementById('checkoutBtn');
    
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(cartItem);
            totalAmount += item.price;
        });

        totalAmountElement.textContent = `Total: $${totalAmount}`;
    }

    function addToCart(product) {
        const productId = product.dataset.id;
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p:nth-of-type(2)').textContent.substring(1));

        const cartItem = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cart.push(cartItem);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            addToCart(product);
        });
    });

    checkoutButton.addEventListener('click', function() {
        alert('Proceeding to checkout. Total: ' + totalAmountElement.textContent);
        sessionStorage.removeItem('cart');
        cart = [];
        renderCart();
    });

    renderCart();
});
