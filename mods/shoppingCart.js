
var path = require('path');

const Products = require(path.resolve( __dirname, "./products.js")).Products;
const Product = require(path.resolve( __dirname, "./products.js")).Product;


// Filename : "ShoppingCart.js"       holds the code for this module
// Functions or Classes               usually named after the file, not always... is the implementation itself
// Exports:                           Enables access to other parts of the app

// shoppingCart.js
//   holds class ShoppingCart
//   exports the the class ShoppingCart to the rest of the app


/*

app.js (root global)
  has instance of ShoppingCart
     has instance Products()
        has many product contained in items array

  might have an instance of Product()
    -> that will be added to ShoppingCart.Products.items[]

 */

class ShoppingCart {
  constructor() {
    this.products = new Products();
  }
}






module.exports = {
  ShoppingCart: ShoppingCart
};