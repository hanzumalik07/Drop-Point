const phone = "919889877763"; // ← अपना WhatsApp नंबर

const products = [
  {
    name: "Banarasi Silk Saree",
    price: "₹4,999",
    image: "saree.jpg" 
   },
    name: "Maheshwari Cotton Saree",
    price: "₹2,499",
    image: "saree2.jpg"
  },
  {
    name: "Ready To Wear Saree",
    price: "₹3,299",
    image: "saree3.jpg"
  }
  {
    name: "Ready To Wear Saree",
    price: "₹3,299",
    image: "saree4.jpg"
  }

];

const list = document.getElementById("product-list");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button onclick="order('${p.name}', '${p.price}')">
      Buy on WhatsApp
    </button>
  `;

  list.appendChild(div);
});

function order(name, price) {
  const msg = `Hello Drop Point, I want to buy:\n${name}\nPrice: ${price}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}
