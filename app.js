

const readLine = require('readline-sync');


let database = [];
let cart;

//let products = new ProductList();

function runApp() {
  while(true) {
  var accountQuestion = readLine.question(' Enter (1) If you would like to create an account. (2) if you would like to login. (3) To exit.')
    if(accountQuestion === '1') {
    	createAccount()
    	let productList = new ProductList();
    	productList.populateWithDummyData();
		productList.browseProducts();
		cart.checkOut();
    } else if (accountQuestion === '2') {
    	login()
    } else if (accountQuestion === '3') {
    	console.log('goodbye')
    	break;
    }
  }
}

class user {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

function createAccount() {
	let usernameInput = readLine.question('What is your new username?')
	let passwordInput = readLine.question('What is your new password?')	
	database.push(new user(usernameInput, passwordInput))
	if(usernameInput !== null && passwordInput !== null){
		console.log("Your account has been created");
		
	}
}
	

function login() {
	let inputLogin = readLine.question('What is your username?')
	let inputPassword = readLine.question('What is your password?')	
	for(let index in database){
		let userLogin = database[index];
		if (userLogin.username === inputLogin && userLogin.password === inputPassword){
			console.log('you are logged in');
		}
	}
}



class ProductList {
	constructor() {
		this.products = {};
		this.seed = 0;
	}

	addProduct(product) {
		this.products[product.ID] = product; //I don't get this part
	}

	populateWithDummyData() {
		this.addProduct(new Product(this.seed++, "Cereal", "Cookoo for Coco Puffs", 3.99));
		this.addProduct(new Product(this.seed++, "Chips", "flamin hot Cheetos", 1.99))
	}

	getProduct(id) {
		return this.products[id];
	}




	browseProducts() {
		for (let i in this.products) {
			let product = this.products[i];
			//console.log(`(${product.ID})  ${product.name} : ${product.description} : ${product.price} `);
			console.log("(" + product.ID + ")", product.name, ":", product.description, ":", product.price, ":");
		}
		const choice = readLine.question("Choose one: ");
		let p = this.products[choice]; //need this explained better
		cart.addItem(p); //need this explained better
		cart.toString(); //need this explained better
	}


	toString() {
	    for (let i in this.products) {
	      let product = this.products[i];
	      console.log(product.name, ": ", product.description);
	    }
	}
}

class Product {
	constructor(id, name, description, price, quantity) {
		this.ID = id;
		this.name = name;
		this.description = description;
		this.price = price || 0;
		this.quantity = quantity || 0;
	}
}


class ShoppingCart {
	constructor() {
		this.items = {};
	}

	addItem(product) {
		this.items[product.ID] = product  //I don't get this part
	}


	toString() {
		console.log(this.items);
	}

	checkOut() {
		let numItems = readLine.question('how many would you like?')
		for(let i in this.items){
			let newItem = this.items[i]
			console.log(this.items[i].price * Number(numItems))
		}
	}


}

cart = new ShoppingCart();

runApp();