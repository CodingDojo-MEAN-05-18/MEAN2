let myString = 'this is a string';
myString = 'reassign';
const array = [9999, 'cat', 'dog'];
array.push('things');
array.push(5);
array.push(true);
const first = array[1];
const arr = [];
arr.push(['string']);
function printName(name) {
    return `Hello ${name}`;
}
printName('Jason');
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.email = 'bob@bob.com';
    }
    sayHello(name) {
        console.log(`Hello, ${name}, I'm ${this.name}`);
    }
}
const user = new User('Jason', 90);
user.sayHello('Bob');
class Person extends User {
    constructor(name, age = 100) {
        super(name, age);
    }
}
const person = new Person('Person');
