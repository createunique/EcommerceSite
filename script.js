document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
});


function fetchProducts() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Flatten the products from all categories into a single array
            allProducts = data.categories.flatMap(category => 
                category.category_products.map(product => ({
                    ...product,
                    category_name: category.category_name
                }))
            );
            filterProducts('men');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
            ${product.badge_text ? `<span class="badge">${product.badge_text}</span>` : ''}
        </div>
        <div class="product-info"> <!-- Add a new div to contain the title and vendor -->
            <h3 title="${product.title}">${product.title}</h3>
            <ul>
                <li><p>${product.vendor}</p></li>
            </ul>
            
        </div>
        <div class="product-info"> <!-- Add a new div to contain the title and vendor -->
            <p>Rs ${parseFloat(product.price).toFixed(2)}</p>
            <p id="product_com"> ${parseFloat(product.compare_at_price).toFixed(2)} </p>
            <p id="discountp">${calculateDiscount(product.price, product.compare_at_price)}% off</p>
        </div>
        
        <button class="add-to-cart">Add to Cart</button> <!-- Add a class to the button -->
    `;
    return card;
}


function calculateDiscount(price, compareAtPrice) {
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return discount.toFixed(2); // Round to two decimal places
}

function filterProducts(category) {
    const filteredProducts = allProducts.filter(product => product.category_name.toLowerCase() === category);
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear the container
    if (products && Array.isArray(products)) {
        products.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    } else {
        console.error('Invalid products data:', products);
    }
}

function toggleButton(button) {
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    filterProducts(button.getAttribute('data-category')); // Add this line
}
