import "./style.css";
import { Inventory } from "./inventory";

const inventory = new Inventory([
  { name: "Product 1", price: 10, quantity: 7 },
  { name: "Product 2", price: 15, quantity: 5 },
  { name: "Product 3", price: 20, quantity: 3 },
]);

function updateQuantity(name: string, quantity: number): void {
  inventory.updateProductQuantity(name, quantity);
  renderProducts();
}

function renderProducts(): void {
  const productList = document.getElementById("productList")!;
  productList.innerHTML = "";
  inventory.getProducts().forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("productCard");

    const productName = document.createElement("h2");
    productName.innerText = product.name;

    const productPrice = document.createElement("p");
    productPrice.innerText = `Price: $${product.price}`;

    const productQuantity = document.createElement("p");
    productQuantity.innerText = `Quantity: ${product.quantity}`;

    const quantityControl = document.createElement("div");
    quantityControl.classList.add("quantityControl");

    const minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.addEventListener("click", () => updateQuantity(product.name, product.quantity - 1));

    const plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.addEventListener("click", () => updateQuantity(product.name, product.quantity + 1));

    quantityControl.appendChild(minusButton);
    quantityControl.appendChild(plusButton);

    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productQuantity);
    productCard.appendChild(quantityControl);

    productList.appendChild(productCard);
  });
}

renderProducts();
