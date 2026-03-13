// Load all products
let allProducts = products;

// Render
function renderProducts(list) {
    const box = document.getElementById("product-list");
    box.innerHTML = "";

    list.forEach(p => {
        box.innerHTML += `
            <div class="product-card">
                <img src="images/${p.images[0]}">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>
        `;
    });
}

// Filter function
function filterProducts(category, btn) {
    document.querySelectorAll(".filter-bar button")
        .forEach(b => b.classList.remove("active"));
    
    btn.classList.add("active");

    if (category === "all") {
        renderProducts(allProducts);
        return;
    }

    const filtered = allProducts.filter(p => p.category === category);
    renderProducts(filtered);
}

// Load all at start
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(allProducts);
});