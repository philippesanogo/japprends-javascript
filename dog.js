import Animal from './animal';

class Dog extends Animal {
    constructor(name, age, type, weight) {
        super(name, age, type);

        this.weight = weight;
    }
    // create a getHumanAge in Dog class
    getHumanAge() {
        return this.age * 7;
    }

    // use the same name method info in the Animal class - child method override parent method
    info() {
        this.sayHello();
        console.log(`My name is ${this.name} and i'm a ${this.type}`);
        console.log(`I'm ${this.age} years old`);
        const humanAge = dog.getHumanAge();
        console.log(`But in human years, I'm ${humanAge} years old`);
        console.log(`I'm ${this.weight} pounds weight`);
    }
}
export default Dog;