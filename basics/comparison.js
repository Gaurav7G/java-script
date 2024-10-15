console.log("2">1); // =>true
console.log(2>1); //true
console.log(1<"2"); //true
// better to compare two same datatypes as sometimes result will not be according to our thinking.

console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true
// equality == : works different from comparison >=,><,<= these comparators treat null as '0'.

console.log(undefined>0); //false
console.log(undefined>=0);//false

console.log("2"===2); //false
// === :(strict euality check also checks datatypes.therefore for this equality both datatypes must be same.)








