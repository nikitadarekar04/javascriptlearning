function add(a,b){
    console.log(a+b);
}
add(12,5)

function addTwo(x,y){
    let result=x+y;
    return result
}
const result=addTwo(5,8)
console.log("Result:",result);

//rest operator
function calculate(...num1){
    return num1;
}
console.log(calculate(23,66,88));

//object passing
function handleobject(anyobject){
 console.log(`username is ${anyobject.username}
    and price is ${anyobject.price}`);
}
handleobject({
    username:"sam",
    price:345
})

//array pass
const mynewarray=[24,54,77]
function returnvalue(getarray){
    return getarray[1]
}
console.log(returnvalue(mynewarray));
