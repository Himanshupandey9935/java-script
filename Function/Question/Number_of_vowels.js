function countVowel(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowel("himanshu"));

// With arrow function

const countVow = (str)=>{
     let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
}
return count++
}
console.log(countVow("himanshu"));