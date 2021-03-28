// Definir une la fonction: dire bonjour
console.log(`Definir la fonction: dire bonjour
Appel de la fonction dire bonjour:`);
console.log("");

const greeting = function () {
	console.log("- Hello World!");
};

// Appel de la fonction dire bonjour
greeting();


console.log('');


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

