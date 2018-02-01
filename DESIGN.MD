

#### For all applications

 - Front (**console**, desktop, native, web, etc.) -- until we put a web front on it
 - Back-end (All server stuff **Node.JS**, **Express.JS**
 - Database (**MySql**, PostreSQL, MongoDB)
 
 
 



#### Design

 * Users
    * User creates account
    * User signs in
 * Products / Inventory
    * User browsers inventory
    * Business updates / manages inventory
 * Cart
    * User adds / removes items to cart
    * Cart checkout removes items from inventory
 * Order History
    * User can browse history of orders
    
    
    
#### First Task

 1. Create user sign-in.  (username, password) only
 2. For database, use a javascript object
 3. Or create account
 
 
 ```
    let database = [ ];
    
    class User {
       constructor(username, password) {
          this.username = username;
          this.password = password;
       }
       
       createAccount(...) {
       }
       
       login(...) {
       
       }
    }
    
    somewhere in app.js
    
    ...
    let user = new User("test", "test");
```