const readLine = require('readline-sync');


let database = [];

function runLogin() {
  while(true) {
  var accountQuestion = readLine.question(' Enter (1) If you would like to create an account. (2) if you would like to login. (3) To exit.')
    if(accountQuestion === '1') {
    	createAccount()
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
		console.log(productList);
	}
}
	

function login(){
	let inputLogin = readLine.question('What is your username?')
	let inputPassword = readLine.question('What is your password?')	
	for(let index in database){
		let userLogin = database[index]
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
		this.products[product.ID] = product;
	}

	populateWithDummyData() {
		this.addProduct(new Product(this.seed++, "Cereal", "Cookoo for Coco Puffs", 3.99));
		this.addProduct(new Product(this.seed++, "Chips", "flamin hot Cheetos", 1.99))
	}

	getProduct(id) {
		return this.products[id];
	}
}

class Product {
	constructor(id, name, description, price) {
		this.ID = id;
		this.name = name;
		this.description = description;
		this.price = price || 0;
	}
}

let productList = new ProductList();
productList.populateWithDummyData();
for (let i in productList.products) {
	let product = productList.products[i];
	console.log(product.name, ": ", product.description);
}

 runLogin();

