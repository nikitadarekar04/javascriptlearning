//singleton
//object literals 
const mySym=Symbol("key1")
const  user={
    name:"abc",
    [mySym]:"mykey",
    age:18,
    location:"latur",
    email:"abc@google.com",
    isLoggedIn:false,
    lastLoginDays:["sunday","monday"]

}

console.log(user["email"]);
console.log(user[mySym]);

//change value
user.email="niku@123.com"

//function
user.greeting = Function()
    console.log("Hello JS User");
    


//referance
user.greetingOne = Function()
    console.log(`Hello JS User,${this.age}`);

    

console.log(user.greeting());
console.log(user.greetingOne());

