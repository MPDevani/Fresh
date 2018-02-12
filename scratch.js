

function User() {
  this.userName = null;
  this.password = null;
}




function ShoppingCart() {
  this.products = [];
}



function products() {
  this.products = {};
  this.seed = 0;


  this.addProduct = function(product) {
    this.products[product.id] = product;
  };

  this.populateWithDummyData = function() {
    this.addProduct(new Product(seed++, "Cereal", "Cookoo for Coco Puffs", 3.99));
  };

  this.getProduct = function(id) {
    return this.products[id];
  }
}

function Product(id, name, description, price) {
  this.ID = id;
  this.name = null;
  this.description = null;
  this.price = price || 0;
}



function UserProfile() {
  this.firstName = null;
  this.lastName = null;
  this.email = null;
}