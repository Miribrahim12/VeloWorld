let selectedImages = [];

// Convert selected images to Base64
document.getElementById("images").addEventListener("change", function (event) {
    selectedImages = [];
    document.getElementById("imagePreview").innerHTML = "";

    Array.from(event.target.files).forEach(file => {
        let reader = new FileReader();

        reader.onload = function (e) {
            selectedImages.push(e.target.result);
            document.getElementById("imagePreview").innerHTML +=
                `<img src="${e.target.result}">`;
        };

        reader.readAsDataURL(file);
    });
});


// Save listing
function saveListing() {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;
    const phone = document.getElementById("phone").value;

    if (!title || !price || !desc || !phone) {
        alert("Please fill all fields.");
        return;
    }

    if (selectedImages.length === 0) {
        alert("Please select at least one image.");
        return;
    }

    const newProduct = {
        id: "user-" + Date.now(),
        name: title,
        price: price + " AZN",
        category: category,
        desc: desc,
        phone: phone,
        images: selectedImages,
        specs: {},
        userType: "user",
        postedBy: "User"
    };

    let saved = JSON.parse(localStorage.getItem("userProducts")) || [];
    saved.push(newProduct);

    localStorage.setItem("userProducts", JSON.stringify(saved));

    alert("Listing published successfully!");
    window.location.href = "shop.html";
}