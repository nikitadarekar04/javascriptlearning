const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}

//const obj3={obj1,obj2}
//const obj3=object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"nikita"
}

const {courseInstructor:instructor} =course
//console.log(courseInstructor);
console.log(instructor);



