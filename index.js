const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Nagarjuna");
greetings("Abhi");

const { substract, add, add2 } = require("./calculator");

console.log(substract(9, 6));
console.log(add(5, 3));
console.log(add2);
