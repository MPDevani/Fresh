

const readLine = require('readline-sync');

const Products = require("./mods/products.js").Products;
const Product = require("./mods/products.js").Product;
const ShoppingCart = require("./mods/shoppingCart.js").ShoppingCart;

const cart = new ShoppingCart();

let database = [];




(function() {
  while(true) {
    var accountQuestion = readLine.question(' Enter (1) If you would like to create an account. (2) if you would like to login. (3) To exit. (4) Test Some Code')
    if(accountQuestion === '1') {

    } else if (accountQuestion === '2') {

    } else if (accountQuestion === '3') {
      console.log('goodbye');
      break;
    } else if (accountQuestion === '4') {
      let p = new Product(0, "Milk", "Moo", 2.00, 1);
      console.log(p);
      let products = new Products();
      products.add(p);
      cart.products.items.push(products);

      console.log(cart);
    }
  }
})();
