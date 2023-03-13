const card = document.getElementById("card");

const add_to_cart = document.querySelectorAll(".add-to-cart");

add_to_cart.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.dataset.productId;
    console.log(productId);

    let cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      cartItems = [];
    } else {
      cartItems = JSON.parse("cartItems");
    }

    cartItems.push({
      id: productId,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });
});
