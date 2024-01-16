//Immediately invoked function expressions(IFFE)


(function jai(){
    //named IFFE
    console.log(`DB STORAGE`);
})();//this is immediate invoked function expression   (Here collan is must(;))

( (name) => {
    //this is simple IFFE
    console.log(`DB CONNECTED TWO ${name}`);
})('vijay')