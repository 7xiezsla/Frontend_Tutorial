// This page is description about javascript's flow control
// The usage shows as below

// for loop
// let index = 0;
// const array = [0, 1, 2, 3, 4, 5, 6, 7];
// for (index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }
// console.log("index: ", index);

// const array = [0, 1, 2, 3, 4, 5, 6, 7];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }
// console.log("index: ", index);
// const array = [0, 1, 2, 3, 4, 5, 6, 7];
// array.forEach((d, i) => {
//     console.log(`陣列的第${i}個元素是${d}`);
// });

// while loop
// const array = [0, 1, 2, 3, 4, 5, 6, 7];
// while (array.length > 0) {
//     if (array[array.length - 1] === 4) continue;
//     console.log(array.pop());
// }
// console.log(array);

// while(true) {
//     //......
// }

// let httpStatusCode = 403;
// switch (httpStatusCode) {
//     case 200:
//         console.log("Request OK!!!");
//         break;
//     case 404:
//         console.log("Not Found!!!");
//         break;
//     case 500:
//         console.log("Internal Server Error!!!");
//         break;
//     default:
//         console.log("this is default log");
// }

// let myValue = 2.545827;
// const carryWay = "無條件進位";

// switch (carryWay) {
//     case "無條件捨去":
//         console.log(Math.floor(myValue));
//         break;
//     case "無條件進位":
//         console.log(Math.ceil(myValue));
//         break;
//     default:
//         console.log(Math.round(myValue));
//         break;
// }

// try catch
try {
    const myValue = 10;
    myValue = 11;
    console.log(myValue);
} catch (error) {
    console.log("something error");
    console.log(error);
} finally {
    console.log("this is finally log");
}
// const myValue = 10;
// myValue = 11;
// console.log(myValue);
console.log("程式還活著");
