// var generateName = require("sillyname")
import generateName from "sillyname";
import superheroes from "superheroes";


var sillyName = generateName()
var heroName = superheroes.random()

console.log(`my superhero name is ${heroName}.`)
console.log(`my name is ${sillyName}.`);
