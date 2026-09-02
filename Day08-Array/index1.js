// const { createContext } = require("react");

// function checkAge(age) {
//   if (age >= 18) {
//     return "elegible";
//   } else {
//     return "not elegible";
//   }
// }
// console.log(checkAge(20));

// function big(a, b, c) {
//   if (a > b && a > c) {
//     return "a  is greater";
//   } else if (b > a && b > c) {
//     return "b is greater";
//   } else {
//     return "c is greater";
//   }
// }

// console.log(big(10, 30, 5));

let student = {
  name: "shailesh",
  age: "25",
  course: "b.tech",
};
console.log(student.name);
console.log(student.age);

let student1 = {
  name: "shailesh",
  age: "25",
  course: "b.tech",
};

function introduction(student1) {
  console.log(
    "my name is " + student1.name + " i am " + student1.age + " years old",
  );
}
introduction(student1);
