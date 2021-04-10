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

console.log("");

// Créer un array intitulé friends
console.log("Créer un array intitulé friends:");

const friends = [["Justine", 24, "fille"], ["Pierre", 31, "garçon"]];

// Affiche array friends
console.log("Affiche array friends:");
console.log(friends);

// Accéder à 24 et "pierre"
console.log("Accéder à 24 et pierre");
console.log(friends[0][1]);
console.log(friends[1][0]);

// Remplacer 24 et 31 par 7 et 47
console.log("Remplacer 24 et 31 par 7 et 47:");

friends[0][1] = 7;
friends[1][1] = 47;

// Affiche array friends
console.log("Affiche array friends:");
console.log(friends);

// Affiche âge de justine et pierre
console.log("Affiche âge de justine et pierre:");
console.log(friends[0][1] + " et " + friends[1][1] + " ans.");
