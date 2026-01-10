function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let meals = [
    { name: "Jollof Rice & Chicken", category: "Lunch", price: 2500 },
    { name: "Shawarma", category: "Snack", price: 1500 },
    { name: "Fried Rice", category: "Lunch", price: 2300 },
    { name: "Beef Burger", category: "Fast Food", price: 2000 },
    { name: "Spaghetti Bolognese", category: "Lunch", price: 2600 },
    { name: "chinese rice and chicken", category:"Lunch", price: 3000 },
  ];

  const tableBody = document.querySelector("#mealTable tbody");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  // Render Table
  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(meal => {
      tableBody.innerHTML += `
        <tr>
          <td>${meal.name}</td>
          <td>${meal.category}</td>
          <td>${meal.price}</td>
        </tr>
      `;
    });
  }

  // Search Function
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = meals.filter(meal =>
      meal.name.toLowerCase().includes(value) ||
      meal.category.toLowerCase().includes(value)
    );
    renderTable(filtered);
  });

  // Sorting Function
  sortSelect.addEventListener("change", () => {
    const option = sortSelect.value;

    if (option === "name-asc") {
      meals.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "name-desc") {
      meals.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === "price-asc") {
      meals.sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      meals.sort((a, b) => b.price - a.price);
    }
    renderTable(meals);
  });

  // Initial Load
  renderTable(meals);