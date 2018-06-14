let myString = 'this is a string';

myString = 'reassign';


const array: boolNumStr[] = [9999, 'cat', 'dog'];

array.push('things');
array.push(5);
array.push(true);

type boolNumStr = boolean | string | number;

const first: number = array[1] as number;

const arr: string[][] = [];

arr.push(['string']);

function printName(name: string): string {
    return `Hello ${name}`;
}

printName('Jason');

class User implements IUser {
    email: string = 'bob@bob.com';

    constructor(public name: string, public age: number) {
    }

    sayHello(name: string): void {
        console.log(`Hello, ${name}, I'm ${this.name}`);
    }
}

const user = new User('Jason', 90);

user.sayHello('Bob');

interface IUser {
    name: string;
    age: number;
    email: string;
}

class Person extends User {
    constructor(name: string, age: number = 100) {
        super(name, age);
    }
}

const person = new Person('Person');

const stringArray = ['1', '4', '100', '345'];

function map<T, TResult>(array: T[], callback: (element: T, index: number, array: T[]) => TResult) {
    const results: TResult[] = [];

    for (let index = 0; index < array.length; index++) {
        results.push(callback(array[index], index, array));
    }

    return results;
}

const results = map(stringArray, (element) => parseInt(element, 10));