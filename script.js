var _ = require('lodash');
var array = [1,2,3,4,5,6,7,8];
console.log('answer',_.without(array, 7));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right,"+ color1.value + " ," + color2.value + ")";
	css.textContent = body.style.background + ",";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// const array = [1, 2, 5, 7, 11];
// const ar = [];
// const newArray = array.forEach(num =>{
// 	ar.push(num*3);
// });
// console.log("forEach", ar);

// // map Array
// const mapArray = array.map(num => num + 2);
// console.log("mapArray", mapArray);

// // filter
// const filterArray = array.filter(num => num>5);
// console.log("filterArray", filterArray);

// // reduce
// const reduceArray = array.reduce((acc, num) => {
// 	return acc + num;
// }, 7);
// console.log("reduceArray", reduceArray);



// //instantiation
// class Player{
// 	constructor(name, type){
// 		this.name = name;
// 		this.type = type;;
// 	}
// 	intro(){
// 		console.log(`Hi! i am ${this.name}. I'm a ${this.type}`);
// 	}
// };

// class Wizard extends Player{
// 	constructor(name, type){
// 		super(name, type);
// 	}
// 	play(){
// 		console.log(`I'm an awesome ${this.type}`);
// 	}
// }

// const w1 = new Wizard("Sunny", "Football Player!!!");
