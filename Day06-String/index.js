// string in js
let str1 = "hello shailesh kumar";
let str2 = "mai mast hu";
let str3 = `aur bhai kaise ho`;
console.log(str1, str2, str3);
let price = 80;
console.log(` price of the tomato is ${price} get it asap`);
console.log("price of the tomato is ", price, "get it asap");
//console.log(str1,str2,str3);

// string concatenation
let s1 = "hello";
let s2 = " coder army";
let s3 = s1 + s2;
console.log(s3);
console.log(s3.length);

// print "hello coder army"
console.log('"hello coder army"');

let message = " shailesh bhai bahut badmosh hai. \n wo bahut gande insan hai. ";
console.log(message);

//scape character
let comment =
  " shailesh bhai bahut badmosh hai. \\n wo bahut gande insan hai. ";
console.log(comment);

let special = "Shailesh"; // letter print karna hai
console.log(special[2]); // cconsole.log(special.charAt(3)); esse bhi wahi same print hoga letter

//upper case
//lower case
console.log(special.toLowerCase());
console.log(special.toUpperCase());

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf(" Coder"));
console.log(hero.lastIndexOf("Coder"));

let newstring = "HeloDon";
// -8-7-6-5-4-3-2-1
console.log(newstring.slice(0, 3));
//slice can take negative index also;
console.log(newstring.substring(0, 3));
console.log(newstring.slice(-3, 6));

let stre10 = "Helo Ji Kaise ho Ji ";
console.log(stre10.replace("Ji", "Money"));
console.log(stre10.replaceAll("Ji", "Money"));

let str11 = " Money! Honey! sunny! bunny!";
console.log(str11.split("! "));

//trim
let str12 = " hello ji ";
console.log(str12.length);
console.log(str12.trim().length);
