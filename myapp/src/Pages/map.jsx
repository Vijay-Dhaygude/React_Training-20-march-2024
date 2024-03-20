//Calback function

function hello(wel) {
  console.log("Hello");
  wel();
}

// function welcome() {
//   console.log("Welcome to React");
// }

// hello(welcome);

hello(() => console.log("Welcome to React"));

////////////////////////////////////////////////////////////

//map function

const arr = [10, 20, 30, 40, 50, 60];

// const arr_double = arr.map((item) => {
//   return item * 2;
// });
const arr_double = arr.map((item) => item * 2);
console.log(arr_double);

//filter function
let todelete = 50;
const arr_filtered = arr.filter((item) => item !== todelete);
console.log(arr_filtered);

//find function
let tofind = 50;
let found = arr.find((item) => item === tofind);
console.log(found);
