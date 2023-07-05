// ----------data types pata karne ka tarika 

// method 1 - using type of  - 2 syntax are there 



let score = 33;
console.log(typeof(score)) // syntax 1
console.log(typeof score) // syntax 2 


// conversion of data types ------------------


// yadi hamko code diya hua hai hamko fix karna hai operations lagana hai then pehle data type to pata hona chahiye n 
// after identifiying the data types we can convert them and operate them 


let scoree = "33"
console.log(typeof scoree) // here it is string 
let ValueInNumber = Number(scoree) // string is converted to int data type  (ek new variable lenge aur usme number use kar ke score assign karenge)
console.log(typeof(ValueInNumber))


// if we write anything else in place of 33
// 1. score = NULL - then it give value 0 
// 2. score = Undefined - then it give value NaN
// 3. score = 33abc     - then it also give NaN
// 4. score = "gopal"  - then it also give NaN 
// 5. score = true or false - it give 1 0r 0 respectively and vice versa 
// BUT TAKE IN MIND IT SHOULD BE CONVERTED INTO NUMBER  THROUGH THE PROCESS THAT WE HAVE USED IN ABOVE STEPS BY ASSIGNING NEW VARIABLE 







