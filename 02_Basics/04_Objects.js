//const btinderUser =  new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name='samy'
tinderUser.isLogedIn=false
console.log(tinderUser);

tinderUser.regularUser={
    email:'sam@gmail.com',
    fullName:{
        firstname:'vijay',
        lastName:'goud',
    }

}

console.log(tinderUser.regularUser.fullName);

const obj1={a:1,b:'s'}
const obj2={c:'e',d:'k'}

// const obj={...obj1,...obj2}
const obj=Object.assign({},obj1,obj2)
console.log(obj);


const course={
    courseName:"Js in hindi",
    price:999,
    courseInstructor:"vijay"
}

const {courseInstructor:instructor}=course
console.log(instructor)