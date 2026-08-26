// ============================================================
// JAVASCRIPT ARRAY METHODS - QUICK REVISION
// ============================================================

// ==================== 1. MAP

// map() → array ke har element par operation karta hai
// aur ek NEW ARRAY return karta hai.
// Original array change nahi hota.

let numbers1 = [1, 2, 3, 4, 5, 6];

let result1 = numbers1.map(function (nums) {
  return nums * nums;
});

console.log("Map:", result1);

// ==================== 2. FILTER

// filter() → condition ke basis par elements select karta hai.
// Sirf wahi elements new array me aate hain
// jinke liye condition TRUE hoti hai.

let numbers2 = [10, 20, 25, 30, 40, 50];

let result2 = numbers2.filter((num) => num > 20);

console.log("Filter:", result2);

// ==================== 3. FILTER - NORMAL FUNCTION

// Arrow function ke bina bhi filter() use kar sakte hain.
// filter(callback) me callback har element par run hota hai.

let numbers3 = [10, 20, 30, 25, 35, 40, 50];

let result3 = numbers3.filter(function (nums) {
  return nums > 20;
});

console.log("Filter:", result3);

// ==================== 4. ODD NUMBERS

// % → remainder operator
// Even number → num % 2 === 0
// Odd number  → num % 2 !== 0

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers4.filter(function (nums) {
  return nums % 2 !== 0;
});

console.log("Odd Numbers:", result4);

// ==================== 5. REDUCE - SUM

// reduce() → poore array ko ek single value me reduce karta hai.
// Common use: sum, product, maximum, total etc.
//
// sum = accumulator
// nums = current element
// 0 = initial value

let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result5 = numbers5.reduce(function (sum, nums) {
  return sum + nums;
}, 0);

console.log("Sum:", result5);

// ==================== 6. REDUCE - PRODUCT

// Multiplication ke liye initial value 1 rakhte hain.
// Agar 0 rakhenge to result hamesha 0 ho jayega.

let numbers6 = [2, 3, 4, 5, 6, 7];

let result6 = numbers6.reduce(function (product, nums) {
  return product * nums;
}, 1);

console.log("Product:", result6);

// ==================== 7. FILTER + MAP + REDUCE

// Ye bahut important pattern hai:
//
// filter() → data select
// map()    → selected data ko transform
// reduce() → final single result
//
// Flow:
// Array → filter → map → reduce

let marks = [4, 67, 89, 32, 76, 90, 55];

let result7 = marks
  .filter(function (mark) {
    return mark >= 50;
  })
  .map(function (mark) {
    return mark + 5;
  })
  .reduce(function (sum, mark) {
    return sum + mark;
  }, 0);

console.log("Marks Result:", result7);

// ==================== 8. PRICE + DISCOUNT

// 10% discount:
// discount = price * 10 / 100
//
// Final price:
// price - discount

let prices1 = [100, 250, 80, 500, 300, 150];

let result8 = prices1
  .filter(function (price) {
    return price > 150;
  })
  .map(function (price) {
    return price - (price / 100) * 10;
  })
  .reduce(function (sum, price) {
    return sum + price;
  }, 0);

console.log("Total Price After Discount:", result8);

// ==================== 9. ARRAY OF OBJECTS

// Jab array ke andar objects hote hain,
// property access karne ke liye:
// object.property
//
// Example:
// student.marks

let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 60 },
  { name: "D", marks: 30 },
  { name: "E", marks: 90 },
];

let result9 = students
  .filter(function (student) {
    return student.marks >= 60;
  })
  .map(function (student) {
    return student.marks + 10;
  })
  .reduce(function (sum, marks) {
    return sum + marks;
  }, 0);

console.log("Students Result:", result9);

// ==================== 10. PRODUCTS

// filter() objects ke saath bhi kaam karta hai.
// Yahan hum sirf un products ko select kar rahe hain
// jinki price 3000 se zyada hai.

let products = [
  { name: "Laptop", price: 50000, quantity: 2 },
  { name: "Mouse", price: 1000, quantity: 3 },
  { name: "Keyboard", price: 2000, quantity: 1 },
  { name: "Monitor", price: 15000, quantity: 2 },
  { name: "Headphone", price: 3000, quantity: 4 },
];

let result10 = products.filter(function (product) {
  return product.price > 3000;
});

console.log("Expensive Products:", result10);

// ==================== 11. SPLICE

// splice() → original array ko MODIFY karta hai.
//
// Syntax:
// array.splice(start, deleteCount, item1, item2...)
//
// Example:
// splice(2, 3, "money", 90)
//
// index 2 se start
// 3 elements delete
// "money" aur 90 insert

let prices2 = [100, 250, 80, 500, 300, 150];

let result11 = prices2.splice(2, 3, "money", 90);

console.log("After Splice:", prices2);

// splice() deleted elements ko return bhi karta hai.
console.log("Removed Elements:", result11);

// ==================== 12. TOSTRING

// toString() → array ko string me convert karta hai.
// Example:
// [10, 20, 30]
// "10,20,30"

let prices3 = [100, 250, 80, 500, 300, 150];

console.log("To String:", prices3.toString());

// ==================== 13. JOIN

// join() → array elements ko specified separator
// ke saath ek string me convert karta hai.
//
// join("*") → 100*250*80
// join(" ") → 100 250 80

console.log("Join *:", prices3.join("*"));

console.log("Join Space:", prices3.join(" "));

// ==================== 14. CONCAT

// concat() → do ya multiple arrays ko combine karta hai.
// Ye original arrays ko modify nahi karta.

let arr1 = [100, 250, 80, 500, 300, 150];

let arr2 = [1, 2, 3, 4, 5, 6, 7];

let arr3 = arr1.concat(arr2);

console.log("Concatenated Array:", arr3);

// ==================== 15. 2D ARRAY

// 2D Array = Array ke andar Arrays.
//
// arr2d[row][column]
//
// Example:
// arr2d[0]    → first row
// arr2d[0][2] → first row ka third element

let arr2d = [
  [100, 250, 80],
  [500, 300, 150],
  [20, 30, 40],
];

console.log("2D Array:", arr2d);

console.log("First Row:", arr2d[0]);

console.log("First Row Third Element:", arr2d[0][2]);

// ==================== 16. FLAT

// flat() → nested array ko flat/single-level array me convert karta hai.
//
// [[1, 2], [3, 4]]
//       ↓
// [1, 2, 3, 4]
//
// flat(1) → 1 level tak flatten

let newarr = arr2d.flat(1);

console.log("1D Array:", newarr);

// ============================================
// QUICK REVISION
// ===================
//
// map()     → har element ko transform → NEW ARRAY
//
// filter()  → condition ke according select → NEW ARRAY
//
// reduce()  → multiple values → ONE value
//
// splice()  → original array MODIFY karta hai
//
// concat()  → arrays combine karta hai
//
// join()    → array → string
//
// toString()→ array → string
//
// flat()    → nested array → flat array
//
// 2D array  → arr[row][column]
//
//
// ========== 17. PUSH

// push() → array ke END me element add karta hai.
// Original array MODIFY hota hai.
// push() new array nahi banata.
// push() array ki NEW LENGTH return karta hai.

let arrPush = [10, 20, 30];

arrPush.push(40);

console.log("Push:", arrPush);
// [10, 20, 30, 40]

//  18. POP

// pop() → array ke END se element remove karta hai.
// Original array MODIFY hota hai.
// pop() removed element return karta hai.

let arrPop = [10, 20, 30, 40];

let removedPop = arrPop.pop();

console.log("Pop Array:", arrPop);
// [10, 20, 30]

console.log("Removed Element:", removedPop);
// 40

// = 19. SHIFT ===

// shift() → array ke START se element remove karta hai.
// Original array MODIFY hota hai.
// shift() removed element return karta hai.

let arrShift = [10, 20, 30, 40];

let removedShift = arrShift.shift();

console.log("Shift Array:", arrShift);
// [20, 30, 40]

console.log("Removed Element:", removedShift);
// 10

// ==================== 20. UNSHIFT

// unshift() → array ke START me element add karta hai.
// Original array MODIFY hota hai.
// unshift() array ki NEW LENGTH return karta hai.

let arrUnshift = [20, 30, 40];

arrUnshift.unshift(10);

console.log("Unshift:", arrUnshift);
// [10, 20, 30, 40]

// ==================== 21. SLICE

// slice() → array ke ek portion ko copy karta hai.
// Original array MODIFY NAHI hota.
//
// Syntax:
// array.slice(start, end)
//
// IMPORTANT:
// end index include NAHI hota.
//
// Example:
// slice(1, 4)
// index 1 se start
// index 4 se pehle tak

let arrSlice = [10, 20, 30, 40, 50];

let resultSlice = arrSlice.slice(1, 4);

console.log("Slice:", resultSlice);
// [20, 30, 40]

console.log("Original Array:", arrSlice);
// [10, 20, 30, 40, 50]

// ============================================================
// QUICK REVISION
// ============================================================
//
// push()    → END me ADD
// pop()     → END se REMOVE
// shift()   → START se REMOVE
// unshift() → START me ADD
// slice()   → portion COPY, original unchanged
//
// ============================================================
