var fs = require('fs');
express = require('express');
var app = express();
var myParser = require("body-parser");

var filename = 'user_data.json';

if (fs.existsSync(filename)){
    var file_stats = fs.statSync(filename);
    console.log(filename + ' has ' + file_stats.size + ' characters')
    var data = fs.readFileSync(filename, 'utf-8');
    console.log(data['user_data.json']);
    }
    else {
       console.log('Hey!' + filename + ' does not exist.');
    }

app.get("/login", function (request, response) {
    // Give a login form
    str = `
 <body>
 <form action="" method="POST">
 <input type="text" name="username" size="40" placeholder="enter username" ><br />
 <input type="password" name="password" size="40" placeholder="enter password"><br />
 <input type="submit" value="Submit" id="submit">
 </form>
 </body>
    `;
    response.send(str);
 });
  
 app.post("/check_login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, go back to login page if not
    console.log(request.body);
    the_username = request.body.username;
    if (typeof data[the_username] != 'undefined') {
        if (data[the_username].password == request.body.password) {
            response.send(username + ' logged in.');
        }
        else {
            response.redirect('/login');
        }
    }
 });
 app.listen(8085,() => console.log(`listen on port 8085`));