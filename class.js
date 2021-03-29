// Definir la classe User et Affiche une instance vide de la classe dans la console
console.log("Definir la classe User et Affiche une instance vide de la classe dans la console:");

class User {}   
const user = new User();
console.log(user);
// Fin

// separation
console.log("");

// Definir la classe Animal
class Animal {}
// Definir une instance de Animal en l'assignant dans un const
console.log("Definir une instance de Animal en l'assignant dans un const:");
const animal = new Animal();
// Affiche dans la console la constante
console.log(animal);
// Fin

// separation
console.log("");


// constructor
console.log("constructor:");
class Voiture {
    constructor () {
        console.log(`Voiture`);
    }
}

const voiture1 = new Voiture();
const voiture2 = new Voiture();
// Fin


// separation
console.log("");


// Utilisation de this dans constructor
const phrase = "Ma future maison aura";
class MaisonType {
    constructor (pieces, fenetres, portes) {
        this.pieces = pieces;
        this.fenetres = fenetres;
        this.portes = portes;
    }
}

const maison = new MaisonType(7, 18, 4);
console.log(`${phrase} ${maison.pieces} pièces`);
console.log(`${phrase} ${maison.fenetres} fenêtres`);
console.log(`${phrase} ${maison.portes} portes`);
// Fin


console.log('');

// un autre exemple
class Velo {
    constructor (marque, type, prix) {
        this.marque = marque;
        this.type = type;
        this.prix = prix;
    }
}

const velo1 = new Velo("Mitsubishi", "MountainBike", 500);

console.log("Marque: " + velo1.marque);
console.log("Type: " + velo1.type);
console.log("Prix: " + velo1.prix);

