let score="33absc" //here we want number but user may had given the number in double quotes which make it a string.
console.log(typeof score);
let valueInNumber=Number(score) //another variable containing score but it converts to number datatype if score is given in another datatype.
console.log(typeof valueInNumber);
console.log(valueInNumber)

//"33"=>33
// "33abc"=>NaN
//true =>1 and false=>0

let isLoggedIn=1
let booleanisLoggedIn= Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
// 1=> true 0=>false
// ""=>false
//  "gaurav"=>true
