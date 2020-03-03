var age = 19; 
var count = 0; 
while(count++ < age) {
    if((count > age/2)) {
        console.log("Don't ask how old I am."); 
        process.exit();
    }
    console.log(count); 
}