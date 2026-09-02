// const user = {
//   name: " shailesh",
//   balance: 421,
//   address: {
//     pincode: 246149,
//     city: "kotdwar",
//   },
// };

// const user2 = Object.assign({}, user);
// console.log(user2);
// console.log(user.address.pincode);

// let obj = {
//   name: "shailesh",
//   money: 421,
//   balance: 450,
//   age: 21,
//   adhar: "hdfcasbdh",
// };

// destructuring kar rahe hai
// const { name, balance } = obj;
// console.log(name, balance);

// const { name: full_name, balance: amount, age: umar } = obj;
// const { name, age, ...obj1 } = obj;
// console.log(obj1);
// console.log(full_name, amount, umar);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const [first, second] = arr;
// const [first, second, third] = arr;
// const [first, second, ...third] = arr;
// console.log(third);

// let obj = {
//   name: "shailesh",
//   money: 421,
//   balance: 450,
//   age: 21,
//   arr: [1, 2, 3, 4, 5, 6, 7],
//   adhar: "hdfcasbdh",
//   address: {
//     pincode: 24619, // nested object hai { }
//     city: "Kotdwar",
//   },
// };
// const {
//   arr: [first],
// } = obj;
// //const { name } = obj;
// console.log(first); // address likhunga to pincode,city dono mil jga

// let user = {
//   name: "shailesh",
//   amount: 421,
//   greet: function () {
//     console.log("Hello coder army");
//     // object ke andar fuction bhi call ho ja raha ha,
//   },
// };
// user.greet();
