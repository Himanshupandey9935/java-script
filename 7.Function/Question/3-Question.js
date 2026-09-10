// Take a number n as input from the user.

// . Create an array of numbers from 1 to n.
// . Use the reduce method to calculate the sum of all numbers in the array.
// . Use the reduce method to calculate the product of all numbers in the array.

let n = 5;
let arr = [];

for(let i =1; i <= n ; i++ ){
    arr[i-1] = i ;

}
 console.log(arr)
 let sum = arr.reduce((rslt,curntval)=>{
        return rslt+curntval;
 })
 let product = arr.reduce((rslt,curntval)=>{
        return rslt*curntval;
 })
  console.log(sum)
  console.log(product)
  