/*

Petit exercice:
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
	}	
}


// Affiche les informations à propos de la booutique

console.log("Affiche les informations à propos de la booutique:");

console.log("NOM: " + cafe.name);
console.log("Ouverture: " + cafe.businessHours.opening);
console.log("Fermeture: " + cafe.businessHours.closing);