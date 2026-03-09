function saveListing() {
    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value.trim();
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value.trim();
    const image = document.getElementById("image").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!title || !price || !desc || !image || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    const newProduct = {
        id: "user-" + Date.now(),
        name: title,
        price: price + " AZN",
        category: category,
        desc: desc,
        phone: phone,
        images: [image],
        specs: {},
        userType: "user",
        postedBy: "User"
    };

    const saved = JSON.parse(localStorage.getItem("userProducts")) || [];
    saved.push(newProduct);
    localStorage.setItem("userProducts", JSON.stringify(saved));

    alert("Listing published successfully!");
    window.location.href = "shop.html";
}