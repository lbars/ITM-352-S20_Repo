import { response } from "express";

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
    users_reg_data = JSON.parse(data);
  
    username = 'newuser';
    users_reg_data[username] = {};
    users_reg_data[username].password = 'newpass';
    users_reg_data[username].email = 'newuser@user.com';
    fs.writeFileSync(filename, JSON.stringify(users_reg_data));
    console.log(users_reg_data);
    
});    

app.listen(8085, () => console.log(`listening on port 8085`));


app.post("/register", function (request, response) {
    // process a simple register form
    console.log(request.body, userdata);
    var login_username = request.body["username"];
    if(typeof userdata[login_username] != `undefnded`) {
        var user_info = userdata[login_username];
        if(user_info["password"] == request.body["password"]) {
            response.end(`${request.body["password"]} is not the right password!`);
        } else {
            response.end(`${login_username} is logged in`);
        }
    } else {
        response.end(`${login_username} does not exist! Please register!`);
    }
});

app.listen(8085, () => console.log(`listening on port 8085`));

