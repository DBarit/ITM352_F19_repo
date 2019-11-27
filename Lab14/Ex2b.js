var fs = require('fs');
var filename = 'user_data.json';

//Check to see if the file exist & if it does then parse it
if (fs.statSync(filename)) {

    stats = fs.statSync(filename);
    //Returns the contents of the path.

    data = fs.readFileSync(filename, 'utf-8');
    users_reg_data = JSON.parse(data);
    
    console.log(filename + ` has ` + stats.size + ` characters `);

} else { //else if not output a error message
    console.log(filename + ` does not exist `);
}