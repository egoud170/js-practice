const score=400
console.log(score)

const balance= new  Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber=23.09847236

console.log(otherNumber.toPrecision(3));

const hundreads = 100000000

console.log(hundreads.toLocaleString("en-IN"));


// +++++++++++++++++++++Maths++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));

// console.log(Math.min(4,7,8,9));
// console.log(Math.max(4,7,8,9));

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);


const min=10
const max=20

console.log(Math.random()*(max-min+1));
console.log(Math.floor(Math.random()*(max-min+1))+min);