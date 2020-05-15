//The following shows code for all the products. I got the products and prices through research online. The images were found online as well. 
//Author - Sharon Diep 
//Referenced from Smartphoneproducts labs and WODs
//This page will be referenced in the products_page.html in order to be able to display the products. This page defines the products variable at the end. 
var products =
{
    "All_Records": [
        {
            "model": "'Legend' - Bob Marley and the Wailers",
            "price": 30.00,
            "image": "Legend.png"
        },
        {
            "model": "'Please Please Me' - The Beatles",
            "price": 21.00,
            "image": "PleasePleaseMe.png"
        },
        {
            "model": "'Hotel California' - The Eagles",
            "price": 20.00,
            "image": "HotelCalifornia.png"
        },
        {
            "model": "'Ramones' - Ramones",
            "price": 30.00,
            "image": "Ramones.png"
        },
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
            "model": "'Let It Bleed' - The Rolling Stones",
            "price": 24.00,
            "image": "LetItBleed.png"
        },
        {
            "model": "'Revolver' - The Beatles",
            "price": 19.00,
            "image": "Revolver.png"
        },
        {
            "model": "'Highway 61 Revisited' - Bob Dylan",
            "price": 23.00,
            "image": "Highway61Revisited.png"
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
    ],
    "Best_Sellers": [
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
        }
    ],
    "Limited_Deals": [
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
        }
    ],
    "New_Arrivals": [
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
    ],
    "The_Classics": [
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
        }
    ]
};

if (typeof module != 'undefined') {
    module.exports.products = products;
}
