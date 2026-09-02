// find the average 
student = [66,98,65,64,35,23]

sum = 0;
for(let i=0; i<student.length; i++){
    sum += student[i];
}
/*  second method,
for(let the val of student){
sum = sum + val
} */
average = sum/student.length;
console.log(`the average of students are ${average}`);