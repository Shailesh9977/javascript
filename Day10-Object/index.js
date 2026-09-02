// let obj = { name: "shailesh", id: "123" };
// console.log(obj);

// class people {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
// let per1 = new people("shailesh ", 20, "male");
// let per2 = new people(" ravi", 25, "male");
// let per3 = new people("yash", 30, "male");
// console.log(per1, per2, per3);

let obj = {
  name: "shailesh",
  age: 20,
  account_balance: 421,
  gender: "male",
};

//const arr = Object.keys(obj);
const arr = Object.values(obj);
//console.log(arr);

// keys ,values dono chahiye
const arr2 = Object.entries(obj);
console.log(arr2);

//assign use case
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 5 }; //(shallow and deep copy kya hota hai)
const obj3 = Object.assign(obj1, obj2);
console.log(obj2, obj1);
//split ( ...obj,...obj) padhna hai
