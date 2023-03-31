interface Product {
    name: string;
    price: number;
    quantity: number;
  }
  
  export class Inventory {
    products: Product[];
  
    constructor(products: Product[]) {
      this.products = products;
    }
  
    getProducts(): Product[] {
      return this.products;
    }
  
    updateProductQuantity(name: string, quantity: number): void {
      const product = this.products.find((p) => p.name === name);
      if (product) {
        product.quantity = quantity;
        if (product.quantity < 5) {
          console.log(`Reorder request for ${product.name}`);
        }
      }
    }
  }
  