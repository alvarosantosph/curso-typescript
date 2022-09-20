"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const firstName = "Alvaro";
const age = 32;
const isAdmin = true;
const myNumbers = [1, 2, 3, 4, 5];
const myTuple = [32, "Alvaro", ["nome", "tipo"]];
const user = {
    name: "Pedro",
    age: 18,
};
const id = "10";
const userId = "001";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
let teste;
function sum(a, b) {
    return a + b;
}
function sayHello(name) {
    return `Hello ${name}`;
}
function logger(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    console.log(`Hello ${greet} ${name}`);
}
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
function doSomething(info) {
    if (typeof info === "number") {
        console.log("Number");
    }
    else {
        console.log("Boolean");
    }
}
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
}
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrad() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
