// Definir la classe User et Affiche une instance vide de la classe dans la console
console.log("Definir la classe User et Affiche une instance vide de la classe dans la console:");

class User { }
const user = new User();
console.log(user);
// Fin

// separation
console.log("");

// Definir la classe Animal
class Animal { }
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
    constructor() {
        console.log(`Voiture`);
    }
}

const voiture1 = new Voiture();
const voiture2 = new Voiture();
// Fin


// separation
console.log("");


// Utilisation de this dans constructor
const prefixe = "Ma future maison aura";
class MaisonType {
    constructor() {
        this.pieces = 5;
        this.fenetres = 4;
        this.portes = 6;
    }
}

const maison = new MaisonType();
console.log(`${prefixe} ${maison.pieces} pièces`);
console.log(`${prefixe} ${maison.fenetres} fenêtres`);
console.log(`${prefixe} ${maison.portes} portes`);

