// const d = new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());
// console.log(typeof d);
// console.log(d.getMonth()); // ye sab number me output dikhata hai
// console.log(d.getDay());
// console.log(d.getMinutes());
// console.log(d.getTime());
// const now = Date.now();
// console.log(now);

// const d = new Date("2022-10-20");
// const date = new Date(2024, 4, 28);
// console.log(date.toDateString());

//Date calculation
// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// console.log(d);

//  Countdown timer
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2 - date1;
const days = Math.floor(date / (1000 * 60 * 60 * 24));
//console.log(days);
const hours = Math.floor((date / (1000 * 60 * 60)) % 24);
//console.log(hours);
const minute = Math.floor((date / (1000 * 60)) % 60);
//console.log(minute);
const second = Math.floor((date / 1000) % 60);
//console.log(second);

console.log(
  `Olympics CountDown:Days;${days} hours:${hours}minute:${minute}second:${second}`,
);
