document.addEventListener("DOMContentLoaded", function () {
  const cart = [];
  const cartElement = document.getElementById("cart");

  function updateCart() {
    cartElement.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.name + " - $" + item.price;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        removeFromCart(item.id);
      });
      li.appendChild(removeButton);
      cartElement.appendChild(li);
    });
  }

  function addToCart(id, name, price) {
    cart.push({ id, name, price });
    alert("Added to cart");
    updateCart();
  }

  function removeFromCart(id) {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
    }
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");
      const id = product.dataset.id;
      const name = product.querySelector("h2").textContent;
      const price = parseFloat(
        product.querySelector("p").textContent.replace("$", "")
      );
      addToCart(id, name, price);
    });
  });
});
