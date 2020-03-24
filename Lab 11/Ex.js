

for (i=0; 1 < parts.length; i++) {
    console.log(`${parts[i]} isNotNeigInt ${isNotNegInt(parts[i])}`);
}
console.log(parts.join(theSeperator))
function isNotNegInt(q) {
    errors = [];// assume no errors at first 
    if(Number(q)!= q) errors.push('Not a number!'); //Check if string is a number value 
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}
console.log(isNotNegInt(3));

parts.forEach(function(item,index) {
    console.log( (typeof item == 'string' && item.length > 0) ? true:false);
}
//}
function printIt(item, index){
    console.log(`${item} isNotNegInt ${isNotNegInt(item,true)}`);
}

