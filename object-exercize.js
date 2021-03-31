/*

EXO 1:
- création de l'objet cafe
- avec la propriété name: Au merveille du café
- avec la propriété businessHours qui est un objet lui-même dont les propriétés sont les suivantes:
- opening: "10H00"
- closing: "20H00"
*/


const cafe = {
	name: "Au merveille du café",
	businessHours: {
		opening: "10H00",
		closing: "20H00"
	},
	menus: ["Chocolat viennois", "Caffè latte", "Vanhoutten", "Expresso"]	
};


// Affiche les informations à propos de la booutique

console.log("Affiche les informations à propos de la booutique de café:");

console.log('');

console.log("NOM: " + cafe.name);
console.log("Ouverture: " + cafe.businessHours.opening);
console.log("Fermeture: " + cafe.businessHours.closing);

console.log(`----`);
console.log("Au menu:");
for (let i = 0; i < cafe.menus.length; i++) {
	console.log(cafe.menus[i]);
}

console.log("");
console.log(`----------------------------`);
console.log("");


/**
 * EXO 2: créer objet USER avec name et age et taille comme PROPERTY et Ken, 18 et 1,76 m comme VALUE 
 */

console.log(`EXO 2: 
- créer objet USER avec name et age 
et taille comme PROPERTY
et Ken, 18 et 1,76 m comme VALUE: `);


const user = {
	name: "Ken",
	age: 18,
	taille: "1,76 m"
};

console.log(user);

// affiche le nom, l'âge et la taille de USER
console.log(`Je m'appelle ${user.name},
j'ai ${user.age} ans et je mesure ${user.taille}`);
