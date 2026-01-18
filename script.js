const WHATSAPP = "9889877763";

const products = [
  { name: "Banarasi Silk Saree", price: "₹4,999", img: "images/1.jpg" },
  { name: "Designer Party Wear Saree", price: "₹5,499", img: "images/2.jpg" },
  { name: "Maheshwari Cotton Saree", price: "₹2,799", img: "images/3.jpg" },
  { name: "Wedding Special Saree", price: "₹6,999", img: "images/4.jpg" },
  { name: "Ready To Wear Saree", price: "₹3,499", img: "images/5.jpg" },
  { name: "Soft Silk Saree", price: "₹4,299", img: "images/6.jpg" },
  { name: "Traditional Cotton Saree", price: "₹1,999", img: "images/7.jpg" },
  { name: "Festive Special Saree", price: "₹5,999", img: "images/8.jpg" }
];

const productList = document.getElementById("products");

products.forEach(p => {
  const message = encodeURIComponent(
`DROP POINT - New Order

Product:
