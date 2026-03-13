/* ===============================
   1) ID-ni URL-dən oxu
   =============================== */
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

/* ===============================
   2) Məhsulu tap (admin + user)
   =============================== */
let adminProducts = products;
let userProducts = JSON.parse(localStorage.getItem("userProducts")) || [];

let allProducts = [...adminProducts, ...userProducts];

const product = allProducts.find(p => p.id === productId);

/* ===============================
   3) Məhsul tapılmadısa
   =============================== */
if (!product) {
    document.getElementById("product-container").innerHTML =
        "<h2 style='text-align:center;margin-top:50px;color:red;'>Product not found ❌</h2>";
    console.error("Invalid product ID:", productId);
}



/* ===============================
   4) Səhifənin HTML-i
   =============================== */
document.getElementById("product-container").innerHTML = `
    <div class="product-page">

        <div class="product-images">
            <div class="main-image">
                <button class="img-nav left" onclick="prevImg()">&#10094;</button>

                <img id="mainImg" src="${product.images[0].startsWith('data') ? product.images[0] : 'images/' + product.images[0]}" onclick="openLightbox()">

                <button class="img-nav right" onclick="nextImg()">&#10095;</button>
                <button class="main-fullscreen" onclick="openLightbox()">⤢</button>
            </div>

            <div class="thumbs">
                ${product.images.map(img => `
                    <img onclick="changeImg('${img}')" 
                         src="${img.startsWith('data') ? img : 'images/' + img}">
                `).join("")}
            </div>
        </div>

        <div class="product-info">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
            <p>${product.desc}</p>

            ${product.specs ? buildSpecs(product.specs) : ""}

            <div class="seller-box">
                <h4>Seller Information</h4>
                <p><strong>Name:</strong> ${product.postedBy}</p>

                ${product.userType === "user" ? 
                    `<p><strong>Phone:</strong> ${product.phone}</p>` 
                    : 
                    `<p><strong>Posted by:</strong> VeloWorld Store</p>`
                }
            </div>

            <div class="buttons">
                <a class="call-btn" href="tel:${product.phone || ''}">
                    ${product.userType === "user" ? "Show Number" : "Contact Store"}
                </a>

                <a class="msg-btn" href="contact.html">Message</a>
            </div>
        </div>

    </div>
`;


/* ===============================
   5) Specs Table
   =============================== */
function buildSpecs(specs) {
    let rows = Object.entries(specs)
        .map(([key, value]) => `
            <tr>
                <td>${formatSpecName(key)}</td>
                <td>${value}</td>
            </tr>
        `).join("");

    return `
        <h3 class="spec-title">Technical Specifications</h3>
        <table class="spec-table">
            <tbody>${rows}</tbody>
        </table>
    `;
}

function formatSpecName(text) {
    return text.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase());
}


/* ===============================
   6) Image Slider
   =============================== */
let currentIndex = 0;

function updateImage() {
    let img = product.images[currentIndex];
    document.getElementById("mainImg").src =
        img.startsWith("data") ? img : "images/" + img;
}

function changeImg(img) {
    currentIndex = product.images.indexOf(img);
    updateImage();
}

function nextImg() {
    currentIndex = (currentIndex + 1) % product.images.length;
    updateImage();
}

function prevImg() {
    currentIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    updateImage();
}


/* ===============================
   7) LIGHTBOX
   =============================== */
function openLightbox() {
    const lb = document.getElementById("lightbox");
    lb.style.display = "flex";

    let img = product.images[currentIndex];
    document.getElementById("lightboxImg").src =
        img.startsWith("data") ? img : "images/" + img;

    document.getElementById("lightboxThumbs").innerHTML =
        product.images.map((img, index) => `
            <img class="${index === currentIndex ? 'active' : ''}"
                 src="${img.startsWith('data') ? img : 'images/' + img}"
                 onclick="lightboxSelect(${index})">
        `).join("");
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function lightboxSelect(index) {
    currentIndex = index;
    updateImage();
    openLightbox();
}


/* ===============================
   8) Keyboard Controls
   =============================== */
document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox");

    if (lb.style.display === "flex") {
        if (e.key === "ArrowRight") nextImg();
        if (e.key === "ArrowLeft") prevImg();
        if (e.key === "Escape") closeLightbox();
    }
});