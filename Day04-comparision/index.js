// comparision operator
// number to number
let a1 = 1;
let a2 = 2;
console.log(a1 == a2); //<,>,<=,>,>= sab kar sakte hai

// null can only be equavalent to undefined ==
console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);

//undefined comparision
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

console.log(NaN == NaN);
let str1 = "Mohit";
let str2 = " Rohit";

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log((abc1 == abc2) == abc3);
//abc1 and abc2 true but abc3 not equal to abc1 ,abc2
// this gives false

//logical operator
let age = 18;
let money = 420;
console.log(age >= 18 && money > 200); // dono true hona chahiye

console.log(age > 10 || money > 200); // or me koi ek true to true hoga

console.log(!(age > 10));
//reverse kar deta hai true ko false and false ko true

//bitwise operator
//convert it into binary number 0 and 1

console.log(4 & 5);
console.log(11 & 14);
console.log(11 | 14);

//XOR
console.log(5 ^ 7);
console.log(5 << 3);
// 5 multiply by 2 power 3
// 101.0000000
//101000.0000
console.log(20 >> 2);
// right shift, 20 divided by power 2
// 10100.000000
// 101.00000
