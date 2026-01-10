function searchFood() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".food-card");

  cards.forEach(card => {
    const foodName = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = foodName.includes(input) ? "block" : "none";
  });
}

// Cart functionality
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("cartModal");
  const foodNameSpan = document.getElementById("modalFoodName");
  const foodPriceSpan = document.getElementById("modalFoodPrice");
  const closeBtn = document.querySelector(".close-btn");
  const paymentMethod = document.getElementById("paymentMethod");
  const otherBank = document.getElementById("otherBank");

  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
      foodNameSpan.textContent = button.dataset.name;
      foodPriceSpan.textContent = button.dataset.price;
      modal.style.display = "flex";
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  paymentMethod.onchange = () => {
    otherBank.style.display =
      paymentMethod.value === "Other" ? "block" : "none";
  };

  
  document.getElementById("confirmOrder").onclick = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: document.getElementById("modalFoodName").textContent,
    price: basePrice * qty,
    quantity: qty
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
  document.getElementById("cartModal").style.display = "none";
};


});

// Quantity adjustment
let qty = 1;
let basePrice = 0;

const qtySpan = document.getElementById("quantity");
const priceSpan = document.getElementById("modalFoodPrice");

document.querySelectorAll(".add-to-cart-btn").forEach(button => {
  button.addEventListener("click", () => {
    qty = 1;
    qtySpan.textContent = qty;

    basePrice = Number(button.dataset.price);
    priceSpan.textContent = basePrice;

    document.getElementById("modalFoodName").textContent = button.dataset.name;
    document.getElementById("cartModal").style.display = "flex";
  });
});

document.getElementById("increaseQty").onclick = () => {
  qty++;
  updatePrice();
};

document.getElementById("decreaseQty").onclick = () => {
  if (qty > 1) {
    qty--;
    updatePrice();
  }
};

function updatePrice() {
  qtySpan.textContent = qty;
  priceSpan.textContent = basePrice * qty;
}

// total cart calculation

document.addEventListener("DOMContentLoaded", () => {

  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotalSpan = document.getElementById("cartTotal");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  cart.forEach(item => {
    cartItemsDiv.innerHTML += `
      <p>${item.name} × ${item.quantity} — ₦${item.price}</p>
    `;
    total += Number(item.price);
  });

  cartTotalSpan.textContent = total;

});
