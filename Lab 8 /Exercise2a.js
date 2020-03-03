var age = 19; 
var count = 0; 
while(count++ < age) {
    console.log(count); 
    if(count > age/2) {
        console.log("I'm Old!"); 
        break;
    }
}