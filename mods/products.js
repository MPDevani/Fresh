
class Product {
  constructor(id, name, description, price, qty) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.qty = qty;
  }
}


class Products {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items[product.id] = product;
  }

  get(id) {
    return this.items[id];
  }
}




module.exports = {
  Products: Products,
  Product: Product
};
