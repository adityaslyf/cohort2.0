/*function sum(num1, num2, hue) {
  let result = num1 + num2;
  hue(result);
}

function printResult(data) {
//printResult is a callback function
  console.log(data);
}

const result = sum(1, 2, printResult);

//setout function

function greet() {
  console.log("Hello");
}

// setTimeout(greet, 5000);

// setInterval(greet, 1000);

*/

//asyn function

/*function sum(num1,num2){
  return num1+num2;
}


function sumAll(){
  let result =sum(1,2);
  console.log(result);
}

setTimeout(sumAll, 2000);
console.log("Hello");*/

//file system

/*const fs = require("fs"); //fs is a module
//filesystem  module
fs.readFile("a.txt", "utf8", (err, data) => {
  //utf8 is a encoding
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("Hello"); //this will print first  as it is syncronous and above is asyncronous

let a = 0;
for (let i = 0; i < 1000000000; i++) {
  a++;
}
console.log(a); // this print after Hello as it is syncronous and after that data is printed as it is asyncronous
//use latentflip website to see the difference between syncronous and asyncronous and see your code in action, section like call stack, event loop, callback queue, web api, heap, etc.
*/

const fs = require("fs");

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("Hello");
let a = 0;
for (let i = 0; i < 1000000000; i++) {
  a++;
}
console.log(a);
