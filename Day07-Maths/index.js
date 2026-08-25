let num1 = 231;
let num2 = new Number(231);
let num3 = new Number(231);
console.log(num1);
console.log(num1 == num2);
console.log(num2 == num3);

let num = 231.6;
console.log(num.toFixed(3));
console.log(num.toPrecision(2));
console.log(num.toExponential(2));
console.log(typeof num.toString());

//Maths
//console.log(Math.E);
//console.log(Math.LN10);
//console.log(Math.PI);
//console.log(Math.LOG10E);

//let num1 = 23.5;
//console.log(Math);
console.log(Math.floor(Math.random() * 10));
//0<=value<1
//generate 0 to 9 value
console.log(Math.floor(Math.random() * 10) + 1);

//11 to 20 generate
console.log(Math.floor(Math.random() * 10) + 11);

//min=40;    max=50;
//console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * 11 + 2));

//30 to 40
console.log(Math.floor(Math.random() * (40 - 30 + 1) + 30));

//ludo
// 1 to 6
console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));

// Math.round()

let productPrice = 1849.75;
let discount = 17.35;

let discountAmount = (productPrice * discount) / 100;
let finalPrice = productPrice - discountAmount;

console.log(Math.round(finalPrice));

// Output:
// 1529

// Math.floor()

let totalSeconds = 9876;

let hours = Math.floor(totalSeconds / 3600);
let remainingSeconds = totalSeconds % 3600;

let minutes = Math.floor(remainingSeconds / 60);
let seconds = remainingSeconds % 60;

console.log(hours);
console.log(minutes);
console.log(seconds);

// Output:
// 2
// 44
// 36

// Math.ceil()

let totalStudents = 237;
let studentsPerClass = 30;

let totalClasses = Math.ceil(totalStudents / studentsPerClass);

console.log(totalClasses);

// Output:
// 8

// Math.trunc()

let balance = -5847.9275;

let wholeBalance = Math.trunc(balance);

console.log(wholeBalance);

// Output:
// -5847

// Math.abs()

let currentLocation = {
  x: 875,
  y: 430,
};

let targetLocation = {
  x: 1200,
  y: 950,
};

let xDistance = Math.abs(targetLocation.x - currentLocation.x);

let yDistance = Math.abs(targetLocation.y - currentLocation.y);

console.log(xDistance);
console.log(yDistance);

// Output:
// 325
// 520

// Math.pow()

let principal = 50000;
let annualGrowthRate = 1.08;
let years = 5;

let futureValue = principal * Math.pow(annualGrowthRate, years);

console.log(Math.round(futureValue));

// Output:
// 73466

// Math.sqrt()

let pointA = {
  x: 15,
  y: 25,
};

let pointB = {
  x: 42,
  y: 65,
};

let xDifference = pointB.x - pointA.x;
let yDifference = pointB.y - pointA.y;

let distance = Math.sqrt(Math.pow(xDifference, 2) + Math.pow(yDifference, 2));

console.log(distance);

// Output:
// 48.2597...

// Math.max()

let serverResponseTimes = [120, 450, 89, 670, 230, 910, 340];

let slowestResponse = Math.max(...serverResponseTimes);

console.log(slowestResponse);

// Output:
// 910

// Math.min()

let productPrices = [1499, 899, 2499, 699, 1799, 1299];

let cheapestProduct = Math.min(...productPrices);

console.log(cheapestProduct);

// Output:
// 699

// Math.random()

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let randomCode = "";

for (let i = 0; i < 8; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length);

  randomCode += characters[randomIndex];
}

console.log(randomCode);

// Possible Output:
// 7KQ2M9XA

// Random integer between 100000 and 999999

let otp = Math.floor(100000 + Math.random() * 900000);

console.log(otp);

// Possible Output:
// 583214
