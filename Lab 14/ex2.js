var fs = require('fs');
var filename = 'user_data.json';

if (fs.existsSync(filename)){
    var file_stats = fs.statSync(filename);
    console.log(filename + ' has ' + file_stats.size + ' characters')
    var data = fs.readFileSync(filename, 'utf-8');
    users_reg_data = JSON.parse(data);
  
    username = 'newuser';
    users_reg_data[username] = {};
    users_reg_data[username].password = 'newpass';
    users_reg_data[username].email = 'newuser@user.com';
    fs.writeFileSync(filename, JSON.stringify(users_reg_data));
    console.log(users_reg_data);
    
    }
    else {
       console.log('Hey!' + filename + ' does not exist.');
    }

