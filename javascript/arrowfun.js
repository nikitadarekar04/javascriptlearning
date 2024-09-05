const user={
    username:"hitesh",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to webside`);
        console.log(this);
        
    }

}
user.welcomemessage()
user.username="sam"
user.welcomemessage()

//arrow function
const add=(num1,num2) =>{
    return num1+num2
}
add(33,67)
console.log(add);

//implicit return
const addone=(a,b) => a+b

console.log(addone(6,9));

//object return
const str=() => ({stri:"yogita"})
console.log(str());


//IIFE(Immediately Invoked Function Expressions)
(function chai()
{
    console.log('DB connected');
    
})();

( (name) => {
    console.log(`db connected two ${name}`);
    
})("nikita");


