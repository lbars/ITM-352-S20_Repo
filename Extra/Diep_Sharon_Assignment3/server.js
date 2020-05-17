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
var products = require("./public/product_data.js"); //accessing data from javascript file
var allProducts = products.allProducts; 
var filename = 'user_data.json' //defines the array as an object 
var fs = require('fs'); //pulls data from product_data.js
var app = express();
var qs = require('querystring'); //for the quantities to be carried over
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(cookieParser()); //to use the cookies 

if (fs.existsSync(filename)) {
   data = fs.readFileSync(filename, 'UTF-8');
   console.log(typeof data);
   users_reg_data = JSON.parse(data);
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
//Referenced from w3schools "Javascript Cookies"
//setting up the function to get the cookies and decoding them 
function getCookie(cname) { 
   var name = cname + "="; //name of users 
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
//Referenced from w3schools "Javascript Cookies"
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
//sets up the session we use to save quantities for the quart 
app.use(session({
   secret: 'itm352-assignment3-dport',//security purposes 
   resave: true, //save session
   saveUninitialized: false,
   httpOnly: true,
   secure: true,
   ephemeral: true // deletes cookie when browser is closed
}));

app.use(myParser.urlencoded({ extended: true }));

/*
app.get("*//*:ptype[.]html", function (request, response, next) {
   if (typeof allProducts[request.params.ptype] == 'undefined')
   {
      next(); 
      return;
   }
   str = '{}'; 
   if (typeof request.session[request.params.ptype] != 'undefined') {
      str = JSON.stringify(request.session[request.params.ptype]);
   }
   var pagestring = fs.readFileSync('./displayproducts.tl', 'utf-8');
   pagestring = `<script> var cart = ${str} </script>` + pagestring; 
   pagestring = `<script> var product_type = '${request.params.ptype}'; </script>` + pagestring; 
   response.send(pagestring); 
});
*/

app.post("/process_page", function (request, response) {
   //check for valid quantities
   //look up request.query
   console.log(request.body); 
   var params = request.body;
   if (typeof params['submitcart'] != 'undefined') {
      has_errors = false; // assume that quantity values are valid
      for (i = 0; i < allProducts[params.product_type].length; i++) {
         console.log(i, params[`quantity${i}`]);
         if (typeof params[`quantity${i}`] != 'undefined') {
            a_qty = params[`quantity${i}`];
            if (!isNonNegInt(a_qty)) {
               has_errors = true; // see if there is invalid data
            }
         }
      }
      qstr = querystring.stringify(request.body);
      // redirect to invoice if quantity data is valid or respond to invalid data
      if (has_errors) {
         //redirect to products page if quantity data is invalid
         console.log("going to products page", has_errors);
         response.redirect(request.headers["referer"] + "?" + qstr);
      } else { //the quantity data is okay for the invoice
         request.session[params.product_type] = params; //requesting the product type in order to list it in the server 
         console.log(request.session); //logs the console
         alert("Added to cart!"); //tells the user their items have been added to the cart
         response.redirect("/shoppingcart.html?" + qstr); //redirects the user to view the shopping cart after selecting their quantities 
      }
   }
});

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
//getting the values from the cartfile from the server and putting it into the cart 
app.get("/shoppingcart.html", function (request, response) { 
   cartfile = `<script> var cart = ${JSON.stringify(request.session)}</script>`;
   cartfile += fs.readFileSync('./shoppingcart.html', 'UTF-8');
   response.send(cartfile);
});

//app.post("/shoppingcart.html"), function (request, response) {
//}

app.post("/check_login", function (request, response) {
   // Process login form POST and redirect to logged in page if ok, back to login page if not
   console.log(request.query, request.body);
   the_username = request.body.username;
   user_email = request.body.email;
   console.log(the_username, "username is", typeof (users_reg_data[the_username]));
   //validate login data
   theQuantQuerystring = qs.stringify(request.query);
   if (typeof users_reg_data[the_username] != 'undefined') {
      //To check if the username exists in the json data
      if (users_reg_data[the_username].password == request.body.password) {
         //make the query string of prod quant needed for invoice
         session.username = the_username;
         var theDate = new Date;
         session.email = user_email;
         session.last_login_time = theDate;
         response.cookie('username', the_username, { maxAge: 5 * 1000 });
         response.cookie('email', user_email, { maxAge: 5 * 1000 });
         response.cookie('last_login_time', theDate, { maxAge: 5 * 1000 });
         console.log(`${the_username} logged in on ${theDate}`);
         response.redirect('/invoice.html?' + theQuantQuerystring + `&username=${the_username}`);
      } else {
         response.redirect('/login.html?' + theQuantQuerystring); // redirects to the login page when login was invalid
      }
   }
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
      response.cookie("username", users_reg_data[username]); //sets username = username in cookie
      response.cookie("name", request.body.name); //remembers name in cookie
      response.cookie("email", request.body.email); //remembers email in cookie
      response.json({}); //give response parsed as json object
   }
   });

app.post('/logout', function(request, response){
   request.session.reset(); 
   response.redirect('./index.html');
})

/*var message = {
   from: 'Nodemailer <sdiep7@hawaii.edu>',
   to: 'Nodemailer <${username.email}>',
   subject: 'Succulent Receipt',
   text: "Thank you for shopping with us! <br> - JK's Vinyl Record Shop ",
   html: '<p>For clients that do not support AMP4EMAIL or amp'
   , headers: {
     'My-Custom-Header': 'header value'
   },
   date: new Date('2000-01-01 00:00:00')
 };
 */

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));

//Resources Used: Lab13 & Lab 14