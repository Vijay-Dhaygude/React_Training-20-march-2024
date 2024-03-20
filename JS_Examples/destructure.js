const arr = [10, 20, 30, 40, 50, 60];
//const [num1, num2, num3] = arr;
const [num1, , num2, num3] = arr;
console.log(num1, num2, num3);

const person = {
  name: "Sid",
  place: "Bangalore",
  worksfor: "Accenture",
};

// let { worksfor, place, name } = person;
// console.log(worksfor, place, name);

function dispay({ worksfor, place, name }) {
  console.log(name, place, worksfor);
}
dispay(person);
