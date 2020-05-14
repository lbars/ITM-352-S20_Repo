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
 var myParser = require("body-parser"); //code for server
 var products = require("./public/product_data.js").products; //accessing data from javascript file
 var fs = require('fs'); //pulls data from product_data.js
 var qstr = {};
 var app = express();
 app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
 });
 
app.use(myParser.urlencoded({ extended: true }));

app.post("/process_page", function (request, response) {
    //check for valid quantities
    //look up request.query
    console.log(request.body); 
    var params = request.body;
    if (typeof params['purchase_submit'] != 'undefined') {
       has_errors = false; // assume that quantity values are valid
       total_qty = 0; // check if there are values in the first place, so see if total > 0
       for (i = 0; i < products.length; i++) {
          console.log(i, params[`quantity${i}`]);
          if (typeof params[`quantity${i}`] != 'undefined') {
             a_qty = params[`quantity${i}`];
             total_qty += a_qty;
             if (!isNonNegInt(a_qty)) {
                has_errors = true; // see if there is invalid data
             }
          }
       }
       qstr = querystring.stringify(request.body);
       // redirect to invoice if quantity data is valid or respond to invalid data
       if (has_errors || total_qty == 0) {
          //redirect to products page if quantity data is invalid
          response.redirect("products_page.html?" + qstr);
       } else { //the quantity data is okay for the invoice
          response.redirect("invoice.html?" + qstr);
          return;
       }
    }
 });
 
 app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
 });
 
 app.use(express.static('./public'));
 app.listen(8080, () => console.log(`listening on port 8080`));
 
 //Sources: Lab13