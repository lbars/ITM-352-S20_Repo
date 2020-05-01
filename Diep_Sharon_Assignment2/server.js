//The following code allows for server side processing.
//Resources Used: Lab 13
const querystring = require('querystring');
var express = require('express'); //code for server
var myParser = require("body-parser"); //code for server
var products = require("./public/product_data.js"); //accessing data from javascript file
var filename = 'user_data.json' //defines the array as an object 
var app = express();
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
var qs = require('querystring');
var qstr = {};
var recordquantity = {};
});

app.use(myParser.urlencoded({ extended: true }));

//go to invoice if quantity values are good, if not, redirect back to order page 
app.get("/process_page", function (request, response) {
   //check for valid quantities
   //look up request.query
   recordquantity = request.query;
   params = request.query;
   console.log(params);
   if (typeof params['purchase_submit'] != 'undefined') {
      has_errors = false; // assume that quantity values are valid
      total_qty = 0; // check if there are values in the first place, so see if total > 0
      for (i = 0; i < products.length; i++) {
         if (typeof params[`quantity${i}`] != 'undefined') {
            a_qty = params[`quantity${i}`];
            total_qty += a_qty;
            if (!isNonNegInt(a_qty)) {
               has_errors = true; // see if there is invalid data
            }
         }
      }
      qstr = querystring.stringify(request.query);
      // redirect to invoice if quantity data is valid or respond to invalid data
      if (has_errors || total_qty == 0) {
         //redirect to products page if quantity data is invalid
         qstr = querystring.stringify(request.query);
         response.redirect("products_page.html?" + qstr);
      } else { //the quantity data is okay for the invoice
         response.redirect("login.html?" + qstr);
      }
   }
});
//if quantity data valid, send them to the invoice

function isNonNegInt(q, returnErrors = false) {
   errors = []; // assume that quantity data is valid 
   if (q == "") { q = 0; }
   if (Number(q) != q) errors.push('This is Not a Number!'); //check if value is a number
   if (q < 0) errors.push('This is a Negative Value!'); //check if value is a positive number
   if (parseInt(q) != q) errors.push('This is Not an Integer!'); //check if value is a whole number
   return returnErrors ? errors : (errors.length == 0);
}

fs = require('fs'); // uses file system moduel

//open file if it exists, if it doesn't don't open it
if (fs.existsSync(filename)) {
   stats = fs.statSync(filename) //this gets stats from the filename 
   data = fs.readFileSync(filename,'UTF-8');
   console.log(typeof data);
   users_reg_data = JSON.parse(data);
}

//go to login page 
app.get("/login.html", function (request, response) {
   str = `
   <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JK's Vinyl Record Shop Login</title>

    <link href="product_style.css" rel="stylesheet">
</head>

<body>
    <!--the following code is for the navigation bar-->
    <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./product_page.html">Records</a></li>
            <li><a class="active" href="./login.html">Log In</a></li>
    </ul>
    <div style="margin-left:25%;padding:1px 16px;height:1000px;">
        <h1>Jk's Vinyl Record Shop</h1>
        <h2> Log In To Continue Your Purchase!</h2>
        <form name="loginform" method="POST">
            <div>
                <input type="text" name="username" size="40" placeholder="enter username"><br />
                <input type="password" name="password" size="40" placeholder="enter password"><br />
                <input type="submit" value="login" id="submit"> </div>
        </form>
</body>
   
<h2>Don't Have An Account? Create One Below!</h2>

<body>
    <div>
        <form action="./registration.html">
        <input type="submit" class="button" value="Create Account Here" id="regpage" name="register_here">
        </form>
    </div>
    
    </body>

    </html>
`;
   response.send(str);
});

app.post("/login.html", function (request, response) {
   // Process login form POST and redirect to logged in page if ok, back to login page if not
   console.log(recordquantity);
   the_username = request.body.username;
   console.log(the_username, "Username is", typeof (users_reg_data[the_username]));
   //validate login data
   if (typeof users_reg_data[the_username] != 'undefined') {
      //To check if the username exists in the json data
      if (users_reg_data[the_username].password == request.body.password) {
         //make the query string of prod quant needed for invoice
         theQuantQuerystring = qs.stringify(recordquantity);
         response.redirect(theQuantQuerystring + `&username=${the_username}`);
       
      } else {
         response.redirect('./login.html?')
         
      }
   }
});

app.get("/registration.html", function (request, response) {
   // Give a simple registration form

   str = `
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Customer Registration</title>
       <link href = "product_style.css" rel="stylesheet">
       <script>src ="server.js"</script>
   </head>
   <body>
   <!--the following code is for the navigation bar-->
   <ul>
       <li><a href="./index.html">Home</a></li>
       <li><a href="./product_page.html">Records</a></li>
       <li><a href="./login.html">Log In</a></li>
   </ul>

   <div style="margin-left:25%;padding:1px 16px;height:1000px;">
           <div>
                   <form  method="POST" action="" onsubmit=validatePassword() >
                     <input type="text" name="fullname" size="40" pattern="[a-zA-Z]+[ ]+[a-zA-Z]+" maxlength="30" placeholder="Enter First & Last Name"><br />
                     <input type="text" name="username" size="40" pattern=".[a-z0-9]{3,10}" required title="Minimum 4 Characters, Maximum 10 Characters, Numbers/Letters Only" placeholder="Enter Username" ><br />
                     <input type="email" name="email" size="40" placeholder="Enter Email" pattern="[a-z0-9._]+@[a-z0-9]+\.[a-z]{3,}$" required title="Please enter valid email."><br />
                     <input type="password" id="password" name="password"  size="40" pattern=".{8,}" required title="8 Characters Minimum" placeholder="Enter Password"><br />
                     <input type="password" id="repeat_password" name="repeat_password" size="40" pattern=".{8,}" required title="8 Characters Minimum" placeholder="Repeat Password"><br />
                  
                     <input type="submit" value="Submit" id="submit">
                 </form></div>
              
   </body>
   </html>`;
   response.send(str);
});

app.post("/registration.html", function (request, response) {
   // process a simple register form
   console.log(recordquantity);
   the_username = request.body.username;
   console.log(the_username, "Username is", typeof (users_reg_data[the_username]));

   username = request.body.username;//saves new user to file name (users_reg_data)

   errors = [];//checks to see if username already exists

   if (typeof users_reg_data[username] != 'undefined') {
      errors.push("Username is Already Taken. Please Enter a Different Username.");
   }

   console.log(errors, users_reg_data);

   if (errors.length == 0) {
      users_reg_data[username] = {};
      users_reg_data[username].username = request.body.username
      users_reg_data[username].password = request.body.password;
      users_reg_data[username].email = request.body.email;

      theQuantQuerystring = qs.stringify(recordquantity);
      fs.writeFileSync(filename, JSON.stringify(users_reg_data));
      response.redirect(theQuantQuerystring + `&username=${the_username}`);

   }
});

app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));

//Resources Used: Lab13 & Lab 14