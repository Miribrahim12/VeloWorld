// ===================== LOAD ADMIN PRODUCTS ======================
let adminProducts = products; 

// ===================== LOAD USER PRODUCTS FROM LOCALSTORAGE ======================
let userProducts = JSON.parse(localStorage.getItem("userProducts")) || [];

// ===================== MERGE ALL PRODUCTS ======================
let allProducts = [...adminProducts, ...userProducts];

// ===================== RENDER FUNCTION ======================
function renderProducts(list) {
    const container = document.getElementById("product-list");
    if (!container) return; // səhifədə yoxdursa işləməsin

    container.innerHTML = "";

    list.forEach(p => {

        // Admin şəkli → images/qovluğundan
        // User şəkli → Base64 (birbaşa yazılır)
        const imgSrc = p.userType === "user"
            ? p.images[0]
            : "images/" + p.images[0];

        container.innerHTML += `
            <a class="card" href="product.html?id=${p.id}">
                <img src="${imgSrc}">
                <div class="card-body">
                    <h3>${p.name}</h3>
                    <p class="desc">${p.desc.substring(0, 60)}...</p>
                    <div class="price">${p.price}</div>  

                </div>
            </a>
        `;
    });
}

// ===================== FILTER ======================
function filterProducts(category) {
    document.querySelectorAll(".filter-bar button").forEach(btn => {
        btn.classList.remove("active");
    });

    const clicked = [...document.querySelectorAll(".filter-bar button")]
        .find(btn =>
            btn.textContent.toLowerCase() === category.toLowerCase() ||
            (category === "all" && btn.textContent === "All")
        );

    if (clicked) clicked.classList.add("active");

    if (category === "all") {
        renderProducts(allProducts);
    } else {
        renderProducts(allProducts.filter(p => p.category === category));
    }
}

// ===================== SEARCH ======================
function searchProducts() {
    const q = document.getElementById("searchBox").value.toLowerCase();

    renderProducts(
        allProducts.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q)
        )
    );
}

// ===================== INITIAL RENDER ======================
renderProducts(allProducts);