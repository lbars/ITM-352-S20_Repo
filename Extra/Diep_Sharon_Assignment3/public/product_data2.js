//The following shows code for all the products. I got the products and prices through research online. The images were found online as well. 
//Author - Sharon Diep 
//Referenced from Smartphoneproducts labs and WODs
//This page will be referenced in the products_page.html in order to be able to display the products. This page defines the products variable at the end. 

var products = 
[
    {
        "model": "'Please Please Me' - The Beatles",
        "price": 21.00,
        "image": "PleasePleaseMe.png"
    },
    {
        "model": "'Ramones' - Ramones",
        "price": 30.00,
        "image": "Ramones.png"
    },
    {
        "model": "'Ziggy Stardust' - David Bowie",
        "price": 21.00,
        "image": "ZiggyStardust.png"
    },
    {
        "model": "'The Sun Sessions' - Elvis Presley",
        "price": 35.00,
        "image": "TheSunSessions.png"
    },
    {
        "model": "'Thriller' - Michael Jackson",
        "price": 23.00,
        "image": "Thriller.png"
    },
]
if(typeof module != 'undefined') {
    module.exports.products = products;
  }
