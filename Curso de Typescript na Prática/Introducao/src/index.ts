// String
const firstName: string = "Alvaro";

// Number
const age: number = 32;

// Boolean
const isAdmin: boolean = true;

// Array
const myNumbers: number[] = [1,2,3,4,5];

// Tupla
const myTuple: [number, string, string[]] = [32, "Alvaro", ["nome", "tipo"]];

// Object
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18,
};

// Vários tipos
const id: number | string = "10";

// Type alias
type myIdType = number | string;
const userId: myIdType = "001";

// Enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
}

// Literal types
let teste: "algumValor";

// Funções
function sum(a: number, b: number) {
    return a + b;
}

function sayHello(name: string): string {
  return `Hello ${name}`;
}

function logger(msg: string): void {
  console.log(msg);
}

function greeting(name: string, greet?: string) {
  console.log(`Hello ${greet} ${name}`);
}

// Interfaces

interface MathFunctionsParams {
    n1: number,
    n2: number,
}

function sumNumbers(nums: MathFunctionsParams) {
    return nums.n1 + nums.n2;
}

// Narrowing
// Checagem de tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log("Number");
    } else {
        console.log("Boolean");
    }
}

// Generics
function showArraysItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}

const a1 = [1,2,3];
const a2 = ["a","b","c"];


// Classes

class User {

    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

}

// Interfaces em Classes

interface IVehicle {
    brand: string;
    showBrad(): void;
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrad(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }

}

// Decorators

// Constructor Decorator
function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParamters()

class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");

console.log(sam);

