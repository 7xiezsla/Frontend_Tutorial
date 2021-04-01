// This page is description about javascript's variable.
// Javascript has four kinds of variable declaration.
// The usage shows as below...
temp1 = "1";
var temp2 = "1";
let temp3 = "2";
const temp4 = "3";

temp = 1;
temp = temp + 1;
temp++;
temp += 1;
// console.log(temp); // deprecated output => 4

test = "1";
// console.log("test + 5:", +test + 5);deprecated output => 6
// console.log("5 + test:", 5 + +test);deprecated output => 6

// var my_variable = 1;
// my_variable *= 15;
// var my_variable = my_variable + 200;
// console.log(my_variable);

// let my_variable_let = 1;
// my_variable_let *= 15;
// let my_variable_let = my_variable_let + 200;
// console.log(my_variable_let);

// const my_constant = 1;
// my_constant *= 15;
// // const my_constant = my_constant + 200;
// console.log(my_constant);

// int, float, double, decimal, long, long long => number
let my_number = 15;
// console.log(Math.pow(my_number, 3));
console.log(my_number / 2);
console.log(Math.round(my_number / 2));
console.log(Math.floor(my_number / 2));
console.log(Math.ceil(my_number / 2));
console.log("----------------------------------");
console.log(my_number / 7);
console.log(Math.round(my_number / 7));
console.log(Math.floor(my_number / 7));
console.log(Math.ceil(my_number / 7));

let input = 2.142857142857143;

const showNdecimal = (input, n, maker) => {
    // code here ...
    return maker(input * Math.pow(10, n)) / Math.pow(10, n);
};

console.log(input);
console.log(showNdecimal(input, 5, Math.floor));

// Variable Naming Rules
// add two numbers
// 1. Camel Case => addTwoNumbers
// 2. Snake Case => add_two_numbers
// 3. Pascal Case => AddTwoNumbers
