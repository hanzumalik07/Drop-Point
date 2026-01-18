const whatsappNumber = "919999999999"; 
// 👆 yahan apna WhatsApp number likho (91 ke sath)

const products = [
  {
    name: "Banarasi Silk Saree",
    price: "₹4,999",
    img: "images/saree1.jpg"
  },
  {
    name: "Maheshwari Cotton Saree",
    price: "₹2,499",
    img: "images/saree2.jpg"
  },
  {
    name: "Ready To Wear Saree",
    price: "₹3,299",
    img: "images/saree3.jpg"
  }
];

const productList = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button onclick="order('${p.name}','${p.price}')">
      Buy on WhatsApp
    </button>
  `;

  productList.appendChild(card);
});

function order(name, price) {
  const msg = `Hello Drop Point,%0AProduct: ${name}%0APrice: ${price}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
}
