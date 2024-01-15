

function sayMyName(){
    console.log('v');
    console.log('i');
    console.log('j');
    console.log('a');
    console.log('y');
    
}


// sayMyName //Reference
// sayMyName() //Execution

function addTwoNum(num1,num2){
   return num1+num2 //after return keyword next line of code is not works
}

const result=addTwoNum(2,3)  //it store only return keyword used function values only

console.log(result);

function logInUserMessage(userName){
    return `${userName} just logedin`
}

const name=logInUserMessage("jai")
// console.log(name);


 function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,500))

const user={
    userName:"viajy",
    price:678
}

function handleObject(anyo){
    console.log(`userName is ${anyo.userName} and price is ${anyo.price}`);
}

handleObject(user)

const myNewArray=[100,200,300]

function returnsom(getArray){
    return getArray[1]
}

console.log(returnsom(myNewArray));