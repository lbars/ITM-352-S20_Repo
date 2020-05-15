//The following shows code for all the products. I got the products and prices through research online. The images were found online as well. 
//Author - Sharon Diep 
//Referenced from Smartphoneproducts labs and WODs
//This page will be referenced in the products_page.html in order to be able to display the products. This page defines the products variable at the end. 

var products = 
[
    {
        "model": "'Pet Sounds' - The Beach Boys",
        "price": 22.00,
        "image": "PetSounds.png"
    },
    {
        "model": "'Innervisions' - Stevie Wonders",
        "price": 26.00,
        "image": "Innervisions.png"
    },
    {
        "model": "'Highway 61 Revisited' - Bob Dylan",
        "price": 23.00,
        "image": "Highway61Revisited.png"
    },
]
if(typeof module != 'undefined') {
    module.exports.products = products;
  }
