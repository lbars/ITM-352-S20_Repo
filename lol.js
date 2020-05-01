function displayPurchase(POST, response) {
    q = POST['quantity_textbox'];
    if (isNonNegInt(POST['quantity_textbox'])) {
       response.send(`Thank you for purchasing ${q} things!`);
    }
    else { response.send(`${q} is not a quantity! Press the back button and try again.`); }
 }

}

function displayPurchase(POST, response) {
   q = POST['quantity_textbox'];
   if (typeof POST['quantity_textbox'] != 'undefined') {
      let q = POST['quantity_textbox'];
      if (isNonNegInt(q)) {
          var contents = fs.readFileSync('./Views/display_quanity_template.view', 'utf8');
          response.send(eval('`' + contents + '`')); // render template string
      } else {
          response.send(`${q} is not a quantity!`);
      }
  }
}

app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
   process_quantity_form(request.body, response)
});
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));
 
function process_quantity_form(POST, response) {
   if (typeof POST['quantity_textbox'] != 'undefined') {
      displayPurchase(POST, response);
   }
}
function isNonNegInt(q, returnErrors = false) {
   errors = []; // assume no errors at first
   if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
   if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
   if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
   return returnErrors ? errors : (errors.length == 0);
}
function displayPurchase(POST, response) {
   q = POST['quantity_textbox'];
   if (typeof POST['quantity_textbox'] != 'undefined') {
      let q = POST['quantity_textbox'];
      if (isNonNegInt(q)) {
         var contents = fs.readFileSync('./Views/display_quanity_template.view', 'utf8');
         response.send(eval('`' + contents + '`')); // render template string
      } else {
         response.send(`${q} is not a quantity!`);
 
      }
   }
}

var data = require('./public/product_data.js');
var products = data.products;
});
app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
   process_quantity_form(request.body, response)
}); 
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));
 
function process_quantity_form(POST, response) {
   if (typeof POST['quantity_textbox'] != 'undefined') {
      displayPurchase(POST, response);
      let model = products[0]['model'];
let model_price = products[0]['price'];
   }
}
var app = express();
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();