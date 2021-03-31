// Creation de object.stylo

const stylo = {
	taille: "petit",
	couleur: "rose",
	style: "encre"
}

// Affiche object.stylo dans la console
console.log("Affiche object.stylo dans la console:")
console.log(stylo);


// separation
console.log('');
console.log("----------------------------------");


// recuperer la valeur de la couleur de l'object stylo
console.log("recuperer la valeur de la couleur de l'object stylo:");
console.log(stylo.couleur);


console.log('');
console.log("----------------------------------");


// Remplacer la valeur de la propriété style actuelle par "bille" et affiche dans la console l'objet stylo
stylo.style = "bille";
console.log(stylo);
console.log("");
console.log("----------------------------------");

// Creer un objet user et l'afficher dans la console
console.log("Creer un objet user et l'afficher dans la console:");
const user = {
	name: "- Ken the ninja",
	age: 35
};
console.log("objet user:");
console.log(user.name);
console.log("- " + user.age);
console.log("");

console.log("----------------------------------");

// Objet et fonction
// Creer un objet dont la valeur de la propriété est une fonction et Affiche dans la console la valeur

console.log("Creer un objet dont la valeur de la propriété est une fonction et Affiche dans la console la valeur:");

const constantName = {
	propertyName: () => {
		console.log("- SALUT");
	}
};

constantName.propertyName();
console.log("");

console.log("----------------------------------");

// Creer un objet "user" avec 2 propriétés dont un des 2 est une fonction et affiche dans la console
console.log("Creer un objet 'user' avec 2 propriétés dont un des 2 est une fonction et affiche dans la console:");

const user2 = {
	name: "Ken the ninja",
	sayHello: (param1) => {
		console.log(`Hello ${param1}`);
	}
};

user2.sayHello(user2.name);

console.log("----------------------------------");


// autre exemple

const user3 = {
	name: "Master Wooly",
	sayHello: (param1) => {
		console.log(`hello ${param1}`);
	}
};

user3.sayHello(user3.name);

console.log("----------------------------------");

/**
 * EXO 1: créer objet USER 4 dont la valeur d'une des PROPERTY est une FUNCTION
 */

console.log("EXO 1: créer objet USER 4 dont la valeur d'une des PROPERTY est une FUNCTION:");

const user4 = {
	name: "Ken",
	throwShuriken: () => {
		console.log("lance un shuriken");
	},
	type: "ninja"
};
console.log(user4);
console.log("");
// Affiche les infos de USER 4 dans la console
console.log("Affiche les infos de USER 4 dans la console:");
console.log(`${user4.name} le ${user4.type}`);
user4.throwShuriken();
