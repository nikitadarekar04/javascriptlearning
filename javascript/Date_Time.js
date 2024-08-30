const a = new Date();
console.log(typeof a)
console.log(a)
console.log(a.toString())
console.log(a.toDateString())
console.log(a.toLocaleString())

let date  = new Date(2024,3,14)
console.log(date.toLocaleString())

console.log(a.getDay())

 console.log(date.toLocaleString('default',{
    weekday:"long",
}))
