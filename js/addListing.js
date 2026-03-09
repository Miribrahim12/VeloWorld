import { products } from "./products.js";

document.getElementById("addListingForm").addEventListener("submit", e => {
    e.preventDefault();

    let newProduct = {
        id: "user-" + Date.now(),
        name: name.value,
        category: category.value,
        price: price.value + " AZN",
        desc: desc.value,
        userType: "user",
        postedBy: postedBy.value,
        images: [],
    };

    const files = images.files;
    for (let f of files) {
        newProduct.images.push(URL.createObjectURL(f));
    }

    products.push(newProduct);

    alert("Elan uğurla əlavə edildi!");
    window.location.href = "magaza.html";
});