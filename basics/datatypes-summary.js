const Id=Symbol('123')
const anotherId=Symbol('123')
//since both Ids above are unique so even if their return datatype inside symbol is same still they both are not same as we are using symbol.
console.log(Id==anotherId);  //false, hence proved.

const heros=["shaktiman","nagraj","doga"]; //array 

// if you write between {} then it is 'Object'
{
name:"Gaurav"
//age: 18,
}
//you can give a variable name to an Object
let MyObj={
    name: "jai",
    //age: 18,
}

const MyFunc= function(){  //we can treat function as a variable too.
console.log("hello world")

}
// ******************************************************
let myyoutubeName="gaurav@95"
let anotherName=myyoutubeName
anotherName="JAi"
console.log(myyoutubeName); //gaurav@95 
console.log(anotherName);   //JAi
//the variable anotherName get a copy of variable myyoutubeName since stack is involed here.

let userOne={
    email:"userone@email",
    upi:"gaurva&ybl"
}
let usertwo=userOne
usertwo.email="jai@gmail"
console.log(userOne); //jai@gmail as we had changed the email through usertwo.This happens because in case of non primitive we use heap memory which gives reference of original data.




