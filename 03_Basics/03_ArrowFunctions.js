const user={
    name:'viajy',
    price:999,
   
    welcomeMessage:function(){
        console.log(`${this.name},welcome to website`);
    }
}

user.welcomeMessage()
user.name=('jai')
user.welcomeMessage()

// const cahi=function(){
//     const username="vijay"
//     console.log(this.username);
// }
const cahi=()=>{ //this is arrow function and (implisit return funtion if it is a single line of code dont have to use return keyword)
    const username="vijay"
    console.log(this.username);
}

// const add=(num1,num2)=>num1+num2 //(impliste return function)
const add=(num1,num2)=>({name:"vijay"}) //(impliste return function)

console.log(add(2,4));