app.get("/register", function (request, response) {
// Give a simple register form
str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
   `;
   response.send(str);
});
 
app.post("/register", function (request, response) {
   // process a simple register form
 
   // validate registration data
 
   //all good, save new user
   
// Check if username is valid
if (typeof users_reg_data[username] != 'undefined') {
   errors.push("Username is Already Taken. Please Enter a Different Username.");
   console.log(errors, users_reg_data);
} else {
   users_reg_data[username] = {}; 
}

if (errors.length == 0); {
   users_reg_data[username] = {};
   users_reg_data[username].username = request.body.username;
   users_reg_data[username].password = request.body.password;
   users_reg_data[username].email = request.body.email;

   fs.writeFileSync(filename, JSON.stringify(users_reg_data));
   response.send(`${username} registered!`);
} 
    
});
 
app.listen(8085, () => console.log(`listening on port 8085`));