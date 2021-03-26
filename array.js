// Création d'un array

const prenoms = ["philippe", "jeanette", "nina", "robert"];

// Afficher array.prenoms dans la console
console.log("Afficher array.prenoms dans la console")

console.log(prenoms);

console.log('');
console.log("Afficher elements de array.prenoms en utilisant une boucle for");

// Afficher elements de array.prenoms en utilisant une boucle for

for (let i = 0; i < prenoms.length; i++) {
	console.log(prenoms[i]);
}

console.log('');
console.log("Ajouter une condition : si element de array.prenom egal a philippe, alors affiche philippe dev web par exemple:");

// Ajouter une condition : si element de array.prenom egal a philippe, alors affiche philippe dev web par exemple.

for (let i = 0; i < prenoms.length; i++) {
	if (prenoms[i] === "philippe") {
		console.log(prenoms[i] + " dev web");
	} else {
		console.log(prenoms[i]);
	}
}
