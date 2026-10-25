const quotes = [
  "First, solve the problem. Then, write the code. - John Johnson",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "Java is to JavaScript what car is to carpet. - Chris Heilmann",
  "Knowledge is power. - Francis Bacon",
  "Fix the cause, not the symptom. - Steve Maguire",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "Make it work, make it right, make it fast. - Kent Beck",
  "Before software can be reusable it first has to be usable. - Ralph Johnson",
  "Deleted code is debugged code. - Jeff Sickel",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "Action is the foundational key to all success. - Pablo Picasso",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "Small steps in the right direction can turn out to be the biggest step of your life. - Anonymous",
  "Learning never exhausts the mind. - Leonardo da Vinci",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Strive for progress, not perfection. - Anonymous",
];

const color = [
  "#1a1a1a",
  "#2c3e50",
  "#8e44ad",
  "#16a085",
  "#d35400",
  "#c0392b",
];

function generatQuote() {
  const text = document.getElementById("quote");

  const index = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[index];
}

function changeBackground() {
  const colorIndex = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[colorIndex];
}
setInterval(generatQuote, 2000);
setInterval(changeBackground, 2000);
