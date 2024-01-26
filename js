document.addEventListener("DOMContentLoaded", function () {
    // Sample product data
    const products = [
        {
            name: "Product 1",
            image: "product1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 19.99
        },
        {
            name: "Product 2",
            image: "product2.jpg",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            price: 29.99
        },
        {
            name: "Product 3",
            image: "product3.jpg",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 39.99
        }
    ];

    const productContainer = document.getElementById("product-list");

    // Loop through products and create product elements
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("product-description");
        descriptionElement.textContent = product.description;

        const priceElement = document.createElement("p");
        priceElement.classList.add("product-price");
        priceElement.textContent = `$${product.price.toFixed(2)}`;

        productElement.appendChild(imageElement);
        productElement.appendChild(descriptionElement);
        productElement.appendChild(priceElement);

        productContainer.appendChild(productElement);
    });
});
