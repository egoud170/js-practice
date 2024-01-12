//Primitives

//7 types: Strings,numbers,booleans,null,undefined,symbol,BigInt

const score=1
const scoreValue=100.3

const isLogIn=false
const outSideTemp=null
let userEmail=undefined


const Id=Symbol('123')
const anotherId=Symbol('123')
const num=15n
//Reference non-premitive

console.log(Id===anotherId);

//Array,objects,functions

const array=["vijay","kumar","goud"]

const obj={
    name:'vijay',
    age:25,

}

const fun=function(){
    console.log('vijay');
}
console.log(typeof num);