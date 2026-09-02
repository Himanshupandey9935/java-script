let fruits = ["apple","mango"];

// PUSH = for insert the value at the end 

fruits.push("guava","litchi");
console.log(fruits);

// POP = for delete any values of array from the end 

fruits.pop();
console.log(fruits);

// TOstring = for converting an array into string

let marks = [88,99,56,67,45];
console.log(marks.toString())

// CONCAT = for joining the multiple  array

let marvel = ["ironman","spiderman","loki"]
let dc = ["superman","batman"]
let indian = ["shaktiman","krish"]

let heroes = marvel.concat(dc,indian)
console.log(heroes);

// UNSHIFT = for affing in start
marvel.unshift("gabbar");
console.log(marvel)

// SHIFT = for deleting value from the start
marvel.shift()
console.log(marvel)

// SLICE = for returning a piece of array
console.log(marvel.slice(0,2))

// SPLICE = for deleting and adding a new array 
const num = [88,78,56,26,46,18,48]
num.splice(1,2,66,77)
console.log(num)
