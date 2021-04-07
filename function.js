/**
 * Introduction aux fonctions
 */

// Declarer une fonction basique: direBonjour et Affiche dans la console
function direBonjour() {
	console.log("Bonjour à tous!");
}
direBonjour();

console.log("");

// Definir la fonction: greeting
console.log(`Declarer une fonction basique: greeting et assigner la fonction à une constante et Affiche dans la console`);

console.log("");

const greeting = function () {
	console.log("- Hello World!");
};
greeting();


console.log('');

// Declarer une fonction avec parametres et Affiche dans la console
console.log("Declarer une fonction avec parametres et Affiche dans la console:");
const sayGoodNight = function (param1) {
	console.log("Good night " + param1 + ".");
};
sayGoodNight("philippe");

console.log("");


// Utilisation de RETURN dans une fonction
console.log("Créer une fonction ADDITION avec une valeur de retour et AFFICHE dans la console: ");

const add = (param1) => {
	return 5 + param1;
};
const result = add(20);
console.log(result);


console.log("");








// Definir une fonction fléchée et l'afficher dans la console 
console.log("Definir une fonction fléchée et l'afficher dans la console:");

const introduce = () => {
	console.log("- Hi, my name is Hello");
};
introduce();


// Definir une fonction fléchée intitulée: sayHello

const sayHello = () => {
	console.log("- Hello World!");
};
sayHello();


console.log("");


// Definir la fonction fléchée intitulée: sayGoodBye
console.log("Definir la fonction fléchée intitulée: sayGoodBye:");
const sayGoodBye = () => {
	console.log("- Good Bye Good Boy!");
};

// Affiche la fonction sayGoodBye
console.log("");
sayGoodBye();
console.log("");

// Utiliser un argument dans la fonction sayGoodBye

console.log("Utiliser un argument dans la fonction sayGoodBye:");
const sayGoodBye2 = (name) => {
	console.log(`- Good Bye ${name}`);
};

// Appeler le fonction sayGoodBye2

sayGoodBye2("Tinem");
sayGoodBye2("Tydru");

console.log("");
console.log("Utiliser plusieurs arguments dans la fonction introduce2:");
// Utiliser plusieurs arguments dans la fonction introduce2

const introduce2 = (name, age) => {
	console.log(`Je m'appelle ${name}`);
	console.log(`J'ai ${age} ans.`);
};

// Appel de la fonction

introduce2("Tinem", 47);

