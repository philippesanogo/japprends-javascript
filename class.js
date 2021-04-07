/**
 * EXO 1: créer la class USER et affiche dans la console
 */
console.log("EXO 1:");

class User {

}

class User { }
const user = new User();
console.log(user);

console.log("----------------------------------");

/**
 * EXO 2: ajoute un CONSTRUCTOR dans la CLASS Animal
 * - ajoute du code dans CONSTRUCTOR
 * - affiche une instance de Animal dans la console
 */
console.log("EXO 2:");

class Animal {
    constructor() {
        console.log("Hello");
    }
}

// Definir la classe Animal
class Animal { }
// Definir une instance de Animal en l'assignant dans un const
console.log("Definir une instance de Animal en l'assignant dans un const:");
const animal = new Animal();

console.log("----------------------------------");
console.log("EXO 3:");

/**
 * EXO 3: créer la class Car
 * - ajoute un CONSTRUCTOR
 * - dans CONSTRUCTOR ajoute une PROPERTY name dont la VALUE est Volvo
 * - affiche le nom de la marque et le type de moteur dans la console apres avoir creer une instance de Car
 */

/**
 * EXO 4: ajoute 2 arguments à CONSTRUCTOR
 * - change la marque et le type de moteur de l'objet car (Mazda et essence)
 * - creer une autre instance de Car et affiche dans la console mercedes et diesel
 */

/**
 * EXO 5: ajoute la METHOD rouler dans le CONSTRUCTOR
 */

/**
 * EXO 6: Utilisation de valeurs dans les méthodes
 */

/**
 * EXO 7: Utilisation de méthodes dans les méthodes
 */

// constructor
console.log("constructor:");
class Voiture {
    constructor() {
        console.log(`Voiture`);
    }
}

const car = new Car("Mazda", "essence");
console.log(car.name);
console.log(car.typeOfEngine);

console.log("");

console.log("EXO 4:");
const merco = new Car("Mercedes", "Diesel");
console.log(`Marque: ${merco.name}`);
console.log(`Moteur: ${merco.typeOfEngine}`);

console.log("");

console.log("EXO 5:");
const renault = new Car("espace", "Diesel");
console.log("Marque: " + renault.name);
console.log("Moteur: " + renault.typeOfEngine);

// Utilisation de this dans constructor
const prefixe = "Ma future maison aura";
class MaisonType {
    constructor() {
        this.pieces = 5;
        this.fenetres = 4;
        this.portes = 6;
    }
}

console.log("");

console.log("EXO 7:");
const citroen = new Car("Citroen", "Diesel");
citroen.brake();

