//Exercise 2a: Break
var age = 20;
var num = 0;
while (num < age) {
    console.log(`Are you ${num} years olds?`);
    if (num > age/2) {
        console.log("Im old!");
        break; 
    }
    num++;
}


//Exercise 2b: Continue
var age = 20;
var num = 0;
while (num < age) {
    num++;
    if (num > age/2 && num < (3/4)*age) {
        console.log("No age zone!");
        continue; 
    }
    console.log(`Are you ${num} years olds?`);
}
console.log(`You must be ${num} years old!`);


//Exercise 2c: Terminating
var age = 20;
var num = 0;
while (num < age) {
    num++;
    if (num > age/2) {
        console.log("Don't ask how old I am!");
        process.exit();
    }
    console.log(`Are you ${num} years olds?`);
}
console.log(`You must be ${num} years old!`);