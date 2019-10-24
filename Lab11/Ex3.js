//Exercise 3: Return Values
var attributes = "Daniel;20;20.5;-19.5";
var theSeparator = ';';
var parts = attributes.split(theSeparator);

for (i = 0; i < parts.length; i++) {
    console.log(typeof parts[i]);
}
console.log(parts.join(theSeparator));