//The following shows code for all the products. I got the products and prices through research online. The images were found online as well. 
//Author - Sharon Diep 
//Referenced from Smartphoneproducts labs and WODs
//This page will be referenced in the products_page.html in order to be able to display the products. This page defines the products variable at the end. 

var products = 
[
    {
        "model": "'Graceland' - Paul Simon<",
        "price": 25.00,
        "image": "Graceland.png"
    },
    {
        "model": "'Dark Side of the Moon' - Pink Floyd",
        "price": 28.00,
        "image": "DarkSideOfTheMoon.jpg"
    },
    {
        "model": " My Time - JK",
        "price": 37.00,
        "image": "MyTime.png"
    }
]
if(typeof module != 'undefined') {
    module.exports.products = products;
  }
