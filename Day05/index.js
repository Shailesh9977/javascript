let a = 10;
let b = a;
b = 30;
console.log(b);
console.log(a);

// Primitive data type vs non primitive data type
// primitive data type :immutable
// non primitive data type :mutable
let obj1 = {
  id: 20,
  naming: "Rohit",
};
let obj2 = obj1;
obj2.id = 30;
console.log(obj1);
console.log(obj2);

//let n1 = 10;
//let n2 = 20;
//let n3 = 30;
let obj = {
  user_name: " Shailesh kumar",
  account_number: " 12345678765",
  balance: 420,
};
console.log(obj);

// Type  conversion

let account_balance = "100";
let num = Number(account_balance);
console.log(typeof account_balance);
console.log(typeof num);

// Boolean convert to number
let x = false;
console.log(Number(x));

let account = "100xs";
let bal = "200s";
console.log(Number(account));
console.log(Number(account));

let x1 = null;
console.log(Number(x1));

//undefined
//let x2;
//console.log(Nummber(x2));

// string ke andar convert
let ax = true;
console.log(String(ax));
console.log(typeof " String");

//Boolean
let abc = " ahsgsbgd123";
console.log(Boolean(abc));

//mathematical operator
console.log((8 * (4 + 18)) / 6 - 9);

//devide multiply  left to right
// Add Sub Left to Right

//Modulous give remnder

console.log(20 % 3);

// ++ icreament operator ,-- decreament operator
let sum = 25;
++sum;
console.log(sum);

//p

obj.id = 10;
comsole.log(obj);

let obj2 = {
  id: 20,
  money: 30,
};
obj = obj2;
