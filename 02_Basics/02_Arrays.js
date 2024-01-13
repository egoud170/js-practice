
const Dc_heros=["batman","flash","wonderwomen"]
const marvel_heroes=['spidrman',"prince","blackPanter"]

const nu=Dc_heros.concat(marvel_heroes)
console.log(nu);

const pro=[...Dc_heros,...marvel_heroes]
console.log(pro);

const another_Array=[1,2,3,[4,5,6],[[7,8,90]]]

const real_another_Array=another_Array.flat(Infinity)
console.log(real_another_Array);

const name="vijay"
console.log(Array.isArray(name))
console.log(Array.from(name));
console.log(Array.from({name:"vijay"})); //interesting

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));