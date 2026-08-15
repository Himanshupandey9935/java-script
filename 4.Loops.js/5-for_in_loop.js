// example of for in loop 

let student = {
    name : "himanshu pandey",
    age : 21,
    cgpa : 7.5,
    
}
for(let key in student){
    console.log("the keys are ",key, "the values are", student[key]);
}