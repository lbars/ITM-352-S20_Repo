//The following shows code for all the products. I got the products and prices through research online. The images were found online as well. 
//Author - Sharon Diep 
//Referenced from Smartphoneproducts labs and WODs
//This page will be referenced in the products_page.html in order to be able to display the products. This page defines the products variable at the end. 

var products = 
[
    {
        "model": "'Legend' - Bob Marley and the Wailers",
        "price": 30.00,
        "image": "Legend.png"
    },
    {
        "model": "'Hotel California' - The Eagles",
        "price": 20.00,
        "image": "HotelCalifornia.png"
    },
    {
        "model": "'Let It Bleed' - The Rolling Stones",
        "price": 24.00,
        "image": "LetItBleed.png"
    },
    {
        "model": "'Revolver' - The Beatles",
        "price": 19.00,
        "image": "Revolver.png"
    },
]
if(typeof module != 'undefined') {
    module.exports.products = products;
  }
