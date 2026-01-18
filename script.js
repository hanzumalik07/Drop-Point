const products = [
    { name: "Banarasi Silk Saree", price: "₹4,999" },
    { name: "Maheshwari Cotton Saree", price: "₹2,499" },
    { name: "Ready To Wear Saree", price: "₹3,299" }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="orderNow('${product.name}')">Buy on WhatsApp</button>
    `;

    productList.appendChild(div);
});

function orderNow(productName) {
    const phone = "91XXXXXXXXXX"; // اپنا نمبر بعد میں ڈالنا
    const message = `Hello, I want to order ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
