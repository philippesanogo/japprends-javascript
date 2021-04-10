class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    sayHello() {
        console.log("Hello");
    }

    info() {
        // use the sayHello method in info method
        this.sayHello();
        console.log(`My name is ${this.name} and i'm a ${this.type}`);
        console.log(`I'm ${this.age} years old`);
    }
}
export default Animal;