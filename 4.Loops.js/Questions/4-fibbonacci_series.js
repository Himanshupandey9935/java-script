// printing the fibonacci series up to 10 ;

let a = 0;
let b = 1;

console.log("the fibonacci series ")
 

for(i = 0; i<=10; i++){
    console.log(a)
    let nextNum = a + b;
    a = b;  
    b = nextNum ; // swapping technique
   
}



