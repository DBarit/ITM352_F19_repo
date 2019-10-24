//Exercise 4: Defining a Function
attributes  = "Daniel;20;20.5;-19.5";
theSeparator = ';';
parts = attributes.split(theSeparator);
for(i = 0; i < parts.length; i++){
    console.log(`${parts[i]} isNonNegInt ${isNonNegInt(parts[i], true)}`);
}
console.log(parts.join(theSeparator));

/*Ex4a
function isNonNegInt(q) {
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    //console.log('Hey!' + q);
    return (errors.length == 0);
}
//console.log(isNonNegInt());
*/

//Ex4b
function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    //console.log('Hey!' + q);
    return returnErrors ? errors : (errors.length == 0);
}
//console.log(isNonNegInt())