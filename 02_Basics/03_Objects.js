//singleton
//Object.create

//objectliterals

mySum=Symbol('key1')
const Jsuser={
    name:'vijay',
    "Full name":'viajy kumar goud',
    [mySum]:"mykey1",
    age:42,
    location:'kurnool',
    email:'viajy@gamil.com',
    isLoggedIn:false,
    lastLogedIn:["monday","friday"],

}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["Full name"]);
console.log(typeof Jsuser[mySum]);

// Object.freeze(Jsuser)
Jsuser.email="abcdjabvcanbk"
console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("jello js user")
}

Jsuser.greetingTwo=function(){
    console.log(`jello js user ${this.name}`)
}
console.log(Jsuser.greetingTwo());
console.log(Jsuser.greeting);
console.log(Jsuser.greeting());