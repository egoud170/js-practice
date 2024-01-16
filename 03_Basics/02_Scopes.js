
{//this is blockScope

}

function ton(){
    //this is functionScope
}

if(true){
    //this is ifScope
}

if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a);
// console.log(b);
// console.log(c);

for(let i=0;i<=Array.length;i++){
  const element=Array[i];
}

function one(){
     const username="viajy"

     function two(){
        const website="youtube"
       
        return  console.log(`${username}`); 
    }
    // console.log(website);
  two()
}

one()

if(true){
    const username='vijay'
    if(username==="vijay"){
          const website='yoitube'
          console.log(username+website);
    }
    // console.log(?website);
}
// console.log(username);

// ++++++++++++++intersting++++++++++++++++++++++

console.log(addone(2))//hoisting works only for functions and var keywords
function addone(num){
    return num + 1
}


console.log(addTwo(2))
const addTwo=function(num){//function expression
    return num + 1;
}

