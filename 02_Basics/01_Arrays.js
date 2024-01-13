//Arrays

const Arry=[1,2,3,4,5]

const heros=["heman","sheman"]

const array=new Array(1,2,3,4,54,6)
console.log(array);
console.log(array[0]);

//Array-methods

array.push(6)
array.push(7)
array.pop()

array.unshift(9)
array.shift()

console.log(array);

console.log(array.includes(0));
console.log(array.indexOf(0));

const newArr= array.join()
console.log(newArr);
console.log(typeof(newArr));


//slice,splice

console.log('A',Arry);

const myArr1=Arry.slice(1,3)

console.log(Arry);
console.log("B",Arry);




const myArr2=Arry.splice(1,3)
console.log('C',Arry);
console.log(Arry)