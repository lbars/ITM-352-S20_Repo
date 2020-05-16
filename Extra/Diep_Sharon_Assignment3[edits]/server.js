//Author: Sharon Diep
//The following code is my server page where it tells the computer what to do and where to go. The following should enable the user to go from he home page to products page to login or registration then to the invoice page.--> 
//Referenced from server side processing labs with app.get and app.post examples. 

//isNonNegInt function was drawn from Lab 13
function isNonNegInt(q, returnErrors = false) {
   errors = []; // assume that quantity data is valid 
   if (q == "") { q = 0; } //this means that the blank values will be handle as if they were 0
   if (Number(q) != q) errors.push('<font color="red">This is Not a Number!</font>'); //check if value is a number
   if (q < 0) errors.push('<font color="red">This is a Negative Value!</font>'); //check if value is a positive number
   if (parseInt(q) != q) errors.push('<font color="red">This is Not an Integer!</font>'); //check if value is a whole number
   return returnErrors ? errors : (errors.length == 0);
}

//The following code allows for server side processing.
//Resources Used: Lab 13
const querystring = require('querystring');
var express = require('express'); //code for server
var session = require('express-session');
var myParser = require("body-parser"); //code for server
var cookieParser = require(`cookie-parser`);
var productdata = require("./public/product_data.js").products; //accessing data from javascript file
var products = productdata.products;
var filename = 'user_data.json' //defines the array as an object 
var fs = require('fs'); //pulls data from product_data.js
var app = express();
var qs = require('querystring'); //for the quantities to be carried over
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(cookieParser());

if (fs.existsSync(filename)) {
   stats = fs.statSync(filename) //this gets stats from the filename 
   data = fs.readFileSync(filename, 'UTF-8');
   console.log(typeof data);
   users_reg_data = JSON.parse(data);

   console.log(`${filename} has ${stats.size} characters`);
} else {
   console.log("Hey!" + filename + "doesn't exist!")
}

// add a route to get a cookie that may have been set here
//Referenced from w3schools, "Javascript Cookies"
function setCookie(cname, cvalue, exdays) {
   var visit = new Date();
   visit.setTime(visit.getTime() + (exdays * 24 * 60 * 60 * 1000));
   var expires = "expires=" + visit.toPSTString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=./";
}
function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodedURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for (var i = 0; i < ca.length; i++); {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}
function checkCookie() {
   var username = getCookie("username");
   if (username != "") {
      alert("Welcome again " + username);
   } else {
      username = prompt("Please login");
      if (username != "" && username != null) {
         setCookie("username", username, 365);
      }
   }
}

//sourced: lab 15
app.use(session({
   secret: 'itm352-assignment3-dport',
   resave: true, //save session
   saveUninitialized: false,
   httpOnly: true,
   secure: true,
   ephemeral: true // deletes cookie when browser is closed
}));

function saveRecord(theTextbox) {
   if (isNonNegInt(theTextbox.value) == false) {
      product_selection_form[`quantity${i}`].value = recordQuantity;
      session.user.recordQuantity = recordQuantity;
      document.getElementById(`shoppingcart${i}`).innerHTML = 'Added to Cart!';
   } else {
      document.getElementById(`shoppingcart${i}`).innerHTML = 'Cannot Add Item to Cart. Please Enter Valid Quantity.';
   };
};

app.use(myParser.urlencoded({ extended: true }));

app.post("/process_page", function (request, response) {
   let POST = request.body;
   if (typeof POST['addQuantitytoCart${i}'] != 'undefined') {
      var validQuantity = true;
      var quantity = false;
   }
});

function product_selection_form(POST, response) {
   if (typeof POST['purchase_submit'] != 'undefined'); {
      var qstring = qs.stringify(POST);
      for (i in products) {
         let q = POST[`quantity${i}`];
         if (isNonNegInt(q) == true) {
            response.redirect('shoppingcart.html?' + qstring);
         } else {
            response.redirect('products_page.html?' + qstring);
         }
         var filename = 'userdata.json';
         if (fs.existsSync(filename)) {
            var data = fs.readFileSync(filename, 'UTF-8');
            var users_reg_data = JSON.parse
         }
      }
   }
};

//if quantity data valid, send them to the login page
//isNonNegInt function was drawn from Lab 13
function isNonNegInt(q, returnErrors = false) {
   errors = []; // assume that quantity data is valid 
   if (q == "") { q = 0; } //this means that the blank values will be handle as if they were 0
   if (Number(q) != q) errors.push('This is Not a Number!'); //check if value is a number
   if (q < 0) errors.push('This is a Negative Value!'); //check if value is a positive number
   if (parseInt(q) != q) errors.push('This is Not an Integer!'); //check if value is a whole number
   return returnErrors ? errors : (errors.length == 0);
}

fs = require('fs'); // uses file system moduel

//open file if it exists, if it doesn't don't open it
if (fs.existsSync(filename)) {
   stats = fs.statSync(filename) //this gets stats from the filename 
   data = fs.readFileSync(filename, 'UTF-8');
   console.log(typeof data);
   users_reg_data = JSON.parse(data);
}

function isNonNegInt(q, return_errors = false) {
   errors = [];
   if (q == '') q = 0;
   if (Number(q) != q) errors.push('<font color="red">Please put a number.</font>'); //check if value is a number
   else if (q < 0) errors.push('<font color="red">Please put a positive value.</font>'); //check if value is a positive number
   else if (parseInt(q) != q) errors.push('<font color="red">Please put a whole number.</font>'); //check if value is a whole number
   return return_errors ? errors : (errors.length == 0);
}

app.post("/check_login", function (request, response) {
   // Process login form POST and redirect to logged in page if ok, back to login page if not
   console.log(request.query, request.body);
   the_username = request.body.username;
   console.log(the_username, "username is", typeof (users_reg_data[the_username]));
   //validate login data
   theQuantQuerystring = qs.stringify(request.query);
   if (typeof users_reg_data[the_username] != 'undefined') {
      //To check if the username exists in the json data
      if (users_reg_data[the_username].password == request.body.password) {
         //make the query string of prod quant needed for invoice
         session.username = login_usernme;
         var theDate = Date().now();
         session.last_login_time = theDate;
         response.cookie('username', login_username, { maxAge: 5 * 1000 });
         response.end(`${login_username} is logged in with data ${JSON.stringify(quantity_str)} on ${theDate}`);
         return;
      } else {
         response.redirect('/login.html?' + theQuantQuerystring); // redirects to the login page when login was invalid
      }
   }
   response.send(`${username} registered!`);
   response.redirect('/shoppingcart.html?' + theQuantQuerystring + `&username=${the_username}`); // redirects to the login page when login was invalid
});

app.post("/register_user", function (request, response) {
   // process a simple register form
   console.log(request.query, request.body);
   the_username = request.body.username.toLowerCase();
   console.log(the_username, "username is", typeof (users_reg_data[the_username]));

   username = request.body.username;//saves new username to file name (users_reg_data)

   errors = [];//checks to see if username already exists

   //Check if username is valid
   if (typeof users_reg_data[username] != 'undefined') {
      errors.push("Username is Already Taken. Please Enter a Different Username."); // tells us in the terminal the errors
      console.log(errors, users_reg_data);
   } else {
      users_reg_data[username] = {}; // if there are no errors with username it is now valid 
   }
   //check if password matches
   if (request["body"]["password"] != request["body"]["password"]) {
      errors.push("Password does not match! Please re-enter correct password.")
   } else {
      users_reg_data[username].password = request["body"]["password"];
   }
   request.query.error = errors;
   theQuantQuerystring = qs.stringify(request.query); // define querystring variable
   console.log(theQuantQuerystring);
   if (errors.length == 0) { // if there are no errors with the followin write the new data in data file
      users_reg_data[username] = {};
      users_reg_data[username].name = request.body.name;
      users_reg_data[username].password = request.body.password;
      users_reg_data[username].email = request.body.email;
      fs.writeFileSync(filename, JSON.stringify(users_reg_data));
      response.cookie("username", registered_username); //sets username = registered_username in cookie
      response.cookie("name", registered_name); //remembers name in cookie
      response.cookie("email", request.body.email); //remembers email in cookie
      response.json({}); //give response parsed as json object
   }
   });

app.post('/logout', function(request, response){
   request.session.reset(); 
   response.redirect('./index.jtml');
})

app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));

//Resources Used: Lab13 & Lab 14