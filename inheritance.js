/**
 * EXO 1: Inheritance (heritage)
 * - creer CLASS Animal
 * - creer CLASS Dog et Horse qui héritent de Animal
 * - affiche les infos dans la console
 */


class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    sayHello () {
        console.log("Hello");
    }

    info() {
        // use the sayHello method in info method
        this.sayHello();
        console.log(`My name is ${this.name} and i'm a ${this.type}`);
        console.log(`I'm ${this.age} years old`);
    }
}

class Dog extends Animal {
    // create a getHumanAge in Dog class
    getHumanAge() {
        return this.age * 7;
    }

    // use the same name method info in the Animal class - child method override parent method
    info() {
        console.log("bouhou");
    }
}

const animal = new Animal("Felix", 7, "cat");
animal.info();

console.log("--------------------");

const dog = new Dog("pluto", 10, "Doberman");
// the method's Dog class override the Animal class
dog.info();
// assign the getHumanAge method of the Dog class in humanAge constant
const humanAge = dog.getHumanAge();
console.log(`But in human age, I'm ${humanAge} years old`);

console.log("--------------------");

class Horse extends Animal {

}

const horse = new Horse("Yakari", 3, "Black Stallion");
horse.info();