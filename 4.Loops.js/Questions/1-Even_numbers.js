// Question = print all even numbers from 0 to 50 ,
 
// FIRST METHOD

for(let i = 2; i<=50 ; i+=2){
   console.log(i);
}

// SECOND METHOD 

for(let i = 2; i<=50 ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}