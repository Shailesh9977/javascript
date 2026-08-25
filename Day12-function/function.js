//function => is a way to write code

//fn is block of code
function greet() {
  console.log(" mai badhiya hu ");
  console.log(" aur kya hal chal hai ");
  console.log(" hello bhai kaise ho ");
} // function ko call kiya jata hai
greet();
greet();
greet();

// method 1 function

function sum(number1, number2) {
  console.log(number1 + number2);
}

//function calll : argument
sum(3, 4);
sum(10, 15);

//{method 2 function }

function multiply(num1, num2) {
  //console.log(num1*num2)
  return num1 * num2;
}
let result = multiply(4, 5);

console.log(result);

// method3
const fun1 = function () {
  console.log(" hello coder army ");
  console.log(" mai to badhiya hu ");
};
fun();

// arrow function

const fun = () => {
  console.log(" hello shailesh kaise ho ");
};
fun(3, 4);

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(3, 4));

// very usefull this method
const sum = (num1, num2) => num1 + num2;

console.log(sum(3, 4));

// //2

const cube = (number) => number * number * number;
console.log(cube(8));

//spread operator or rest operator
const sum = function (...number) {
  // ( ...number ) chahe jitna dal do sabko return kr dega
  console.log(number);
};
sum(2, 3, 4, 5);
sum(4, 6, 1, 10, 13);
sum(10, 20, 30, 40);
//fn

function run() {
  console.log(" I am running ");
}
run();
run();
run();

function sayName() {
  console.log("hello , i am good man ");
}
sayName();

function sayhi(a, b) {
  console.log(a + b);
}
sayhi(10, 20);

function greet(user) {
  console.log(" Good Morning ", user);
}
greet("shailesh");
greet("shivam");
greet("rahul");

function checkEligibility(user, age) {
  if (age > 18) {
    console.log(user, " you can become prime minister");
  } else {
    console.log(user, " sorry you can not elegible");
  }
}
checkEligibility(21, "shailesh");

function abc(user, age) {
  console.log("hello", user, "your age is", age);
}
abc(" Shailesh", 25);

var hero = function () {
  console.log(" hello shailesh u  real hero ");
};
hero();

//functio declaration

function a1(a) {
  console.log(" hello function 1", a);
}
a1();

const a2 = function (a) {
  console.log(" hello function 2", a);
};
a2();

// arrow function
const a3 = (a) => {
  console.log(" hello function 3 ", a);
};
a3();

// one liner function
const a4 = (a) => console.log(" hello shailesh 10", a);

a1(10);
a2(20);
a3(30);
a4(40);

(() => {
  console.log(" hello gys");
})();

function greet(user = "sir", age = 25) {
  console.log("Good Morning ", user, age);
}
greet("shailesh", 24);
greet();

return value;

var a = 10;
console.log(a);

function hero() {
  return 20;
}
var a = hero();
console.log(a);

const add = (a, b) => {
  return a + b;
};
const sqr = (a) => {
  return a * a;
};
console.log(add(20, 30));
console.log(sqr(5));

// this is incorect
function hero() {
  return 10; //20    // ek baar me ek hi value return karta hai esliye galat hai
}

function hero(age) {
  if (age > 30) {
    return "hey";
  } else {
    return "bye";
  }
}
console.log(hero(50));

const giveintro = function (sayName, sayAge, greet) {
  sayName("shailesh");
  sayAge(21);
  greet();
};
const sayName = function (uname) {
  console.log("hello i  am ", uname);
};
const sayAge = function (age) {
  console.log(" i am", age, " years old");
};
const greet = function () {
  console.log(" thank you for watching this.");
  {
  }
};
giveintro(sayName, sayAge, greet);

function maths() {
  function add() {
    function addtwonumber() {
      return 5 + 2;
    }
    return addtwonumber;
  }
  return add;
}
console.log(maths()()());

function marks(num) {
  function agrade() {
    return "you get a car!";
  }
  function bgrade() {
    return " you get a bike !";
  }
  function cgrade() {
    return " you get a auto riksa!";
  }
  if (num > 85) {
    return agrade;
  } else if (num > 60) {
    return bgrade;
  } else {
    return cgrade;
  }
}
console.log(marks(55)());
