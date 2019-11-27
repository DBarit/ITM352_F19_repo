var fs = require('fs');
var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(myParser.urlencoded({ extended: true }));
var filename = 'user_data.json';

//Check to see if the file exist & if it does then parse it
if (fs.existsSync(filename)) {
    data = fs.readFileSync(filename, 'utf-8');
    stats = fs.statSync(filename);
    //Returns the contents of the path.
    console.log(filename + ` has ` + stats.size + ` characters `);

    users_reg_data = JSON.parse(data);
    /*
    username = 'newuser';
    users_reg_data[username] = {};
    users_reg_data[username].password = 'newpass'; 
    users_reg_data[username].email = 'newuser@user.com'; 
    fs.writeFileSync(filename, JSON.stringify(users_reg_data));
    */
    console.log(users_reg_data);

} else { //else if not output a error message
    console.log(filename + ` does not exist `);
}

//Current User Data
app.get("/login", function (request, response) {
    // Give a simple login form
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

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    the_username = request.body.username; //Give me the username from object and assigning it
    if (typeof users_reg_data[the_username] != 'undefined') { //Ask object if it has a property called username, if it does, it wont be udefined. check to see if it exists
        if (users_reg_data[the_username].password == request.body.password) { //If username and password is the same
            response.send(the_username + ' logged in!'); //Passes the username + the string logged in on the page to greet them
        } else {
            response.redirect('/login'); //else if redirect the user to the login page
        }
    }
});


//New User Data
app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="name" size="40" placeholder="enter name" ><br />
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
    
    // all good, so save the new user
    errors = [];    
    username = 'newuser';
    username = request.body.username;

    if (typeof users_reg_data[username] != 'undefined') {
        response.redirect('/login');
    } else if (request.body.repeat_password != request.body.password) {
            response.send(`password does not match`);
    } else {
            users_reg_data[username] = {};
            users_reg_data[username].name = request.body.name;
            users_reg_data[username].password = request.body.password;
            users_reg_data[username].email = request.body.email;
            fs.writeFileSync(filename, JSON.stringify(users_reg_data));
            response.send(`${username} registered!`);
            console.log(request.body);
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));