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
	function createAccount(username, password) {
	let usernameInput = readLine.question('What is your new username?')
	let passwordInput = readLine.question('What is your new password?')	
	database.push(new user(usernameInput, passwordInput))
	}

	function login(username, password){
		let inputLogin = readLine.question('What is your username?')
		let inputPassword = readLine.question('What is your password?')	
		for(let index in database){
			let userLogin = database[index]
				if (userLogin.username === inputLogin && userLogin.password === inputPassword){
					console.log('you are logged in')
	
			}
		}

	}

runLogin();

