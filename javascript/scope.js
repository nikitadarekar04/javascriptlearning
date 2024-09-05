let a=30
let b=80
if(true){
    let a=20
    const b=50
    console.log("Inner A:",a);
    console.log("Inner B:",b);
    
}

console.log("Global a:",a);
console.log("Global b:",b);

//nested function
function one(){
    const username="xyz"

function two(){
        const website="abc"
        console.log("UserName:",username);
        console.log("Website:",website);
        
        
    }
    
    two()
    
}
one()

//nested if
if(true){
    const username="nikita"
    if(username=="nikita"){
        const website="youtube"
        console.log(username + website);
        console.log(website);
        
        
    }
    console.log(username);
    
}
