
   //Check if username is valid
   if (typeof users_reg_data[username] != 'undefined') {
    errors.push("Username is Already Taken. Please Enter a Different Username."); // tells us in the terminal the errors
    console.log(errors, users_reg_data); 
 } else {
    users_reg_data[username] = {}; // if there are no errors with username it is now valid 
 } 
 //check if password matches
 if (request["body"]["password"] != request["body"]["password"]) {
    errors.push("Password does not match! Please re-enter correct password.")
 } else {
    users_reg_data[username].password = request["body"]["password"];
 }
 request.query.error = errors;
 theQuantQuerystring = qs.stringify(request.query); // define querystring variable
 console.log(theQuantQuerystring);
 if (errors.length == 0) { // if there are no errors with the followin write the new data in data file
    users_reg_data[username] = {};
    users_reg_data[username].name = request.body.name;
    users_reg_data[username].password = request.body.password;
    users_reg_data[username].email = request.body.email;
 
    fs.writeFileSync(filename, JSON.stringify(users_reg_data));
    console.log(theQuantQuerystring, "going to invoice");
    response.redirect('/invoice.html?' + theQuantQuerystring + `&username=${the_username}`); // redirect the page to invoice if the registration was successful 
    return;
 } else {
    console.log(errors);
    response.redirect(`/registration.html?` + theQuantQuerystring); // reboot the user to registration if not valid and keep the querystring of quantities 
 } 
