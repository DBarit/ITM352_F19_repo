var fs = require('fs');
var filename = 'user_data.json';

//Returns the contents of the path.
data = fs.readFileSync(filename, 'utf-8');
users_reg_data = JSON.parse(data);

console.log(users_reg_data);

/* Other ways of console logging the users_reg_data:
//console.log(typeof users_reg_data);
//console.log(users_reg_data['itm352']);
//console.log(users_reg_data.itm352.password);
*/