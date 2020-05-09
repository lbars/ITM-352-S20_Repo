var fs = require('fs');
var express = require('express');
var app = express();
var myParser = require("body-parser");
var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({secret: "ITM352 rocks!"}));

var user_infor_file = './user_data.json';
var quantity_str;

if (fs.existsSync(user_infor_file)) {
    var file_stats = fs.statSync(user_info_file);
    var data = fs.readFileSync(user_infor_file, 'utf-8');
    var userdata = JSON.parse(data);
    console.log(`${user_infor_file} has ${file_stats.size} characters`);   
} else {
    console.log("hey!" + user_infor_file + "doesn't exist!");
}

app.use(myParser.urlencoded({extended: true}));

//add a route to get a cookie that may have been set here 
app.get('/set_cookie', function (request, response) {
    console.log('In GET /set_cookie');
    var my_name = 'Sharon';
    response.cookie('your_name', my_name, {maxAge:5*1000}).send('cookie set'); // Sets name = express
});

app.get('/use_cookie', function (request, response) {
    console.log('In GET /use_cookie', request.cookies);
    var the_name = request.cookies["your_name"];
    response.send('Welcome to the Use Cookie page' + the_name); // Sets name = express)
});

app.get('/use_session', function (request, response) {
    console.log('In GET /use_session', request.cookies);
    var the_session_id = request.session.id;
    response.send('Welcome, your session ID is' + the_session_id); // Sets name = express)
});

app.get('/login', function (request, response) {
    console.log(request.query); // print out q-str
    quantity_str = request.query; 
    // Give a simple login form 
    str = `
<body>
<hi>${request.query["error"]}</h1>
<form action="/check_login" method ="POST">
<input type="text" name ="username" size="40" placeholder="enter username" value=${request.query}><br/>
<input type="password" name="password" size="40" placeholder="enter password"><br/>
<input type="submit" value="Submit" id=submit">
</form>
<a href="./register"> New user register</a>
</body>
    `;
    response.send(str);
});

app.post("check_login", function (request, response) {
    //Process login form POST and redirect to logged in page if ok, back to login page if not 
    console.log(reuqest.query);
    var err_str = "";
    var login_username = request.body["username"];
    //Check if username exists in regular data. If so, check if password matches 
    if (typeof userdata[login_username] != 'undefined') {
        var user_info = userdata[login_username];
        //check if password stored for username matches what user typed in 
        if (user_info["password"] != request.body["password"]) {
            err_str = 'bad_password';
        } else {
            response.end(`${login_username} is logged in with data ${JSON.stringify[quantity_str]}`);
            return;
        }
    }else {
        err_str = 'bad_username';
    }
    response.redirect(`./login?username=${login_username} &error=${err_str}`);
});

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