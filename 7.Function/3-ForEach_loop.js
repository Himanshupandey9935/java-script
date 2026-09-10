let arr = [1,2,3,4,5];

arr.forEach(function printval(val) {
    console.log(val)
});

// Arrow function,

arr.forEach((val)=>{
 console.log(val)
})
// Parameters 

arr.forEach((val,index,array)=>{ // 3 parameters are passes in this 
 console.log(val,index,array)
})