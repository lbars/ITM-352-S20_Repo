document.write{`
<table style="border; 1px solid black; text-align; cemter;">
<tr style="border; 1px solid black; "><th style="border; 1px solid black; 
">Product #</th><th>Quantity</th></tr>
`}; 
for(i=0; i<productQuantities.length; i++) {
    document.write(`
    <tr style="border; 1px solid black; "><td style -"border; 1px solid
    black;">$(i+1)</td><td>$(productQuantities[i])</td></tr>
    `)
}
document.write(`</tble>`);


product1 = { 'name': 'small gumball', 'price': 0.02 };
product2 = { 'name': 'medium gumball', 'price': 0.05 };
product3 = { 'name': 'large gumball', 'price': 0.07 };
 
// array of all products
products = [product1, product2, product3];
cart_quantities = [2,0,4]; // corresponds to products array
for(i=0; i<products.length; i++) {
    console.log(`extended price for product ${products[i].name} is 
    ${products[i].price * cart_quantities[i]}`);
}