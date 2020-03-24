attributes = "Dan;19; 19.5;-18.5";
var pieces = attributes.split(",");
for(i=0; i<pieces.length; i++) {
    console.log(pieces[i], typeof pieces[i]);
}

var str = "How is quarantine going?"; 
var res = str.split("");

attributes = "Sharon; 19; MIS"
parts = attributes.split(';');
console.log(parts);

parts = ['Sharon',19, 19.5, -18.5]
for(i=0; i< parts.length; i++){
    console.log(typeof parts [i]);
}

theSeperator =';';
parts = attributes.split(theSeperator);
//parts = ['Sharon, 19,19.5,-18.5]
for(i=0; i< parts.length; i++){
    console.log(typeof parts [i]);
}
console.log(parts.join(theSeperator))

