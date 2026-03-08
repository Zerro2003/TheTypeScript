"use strict";
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getName(): void {
//     console.log(`my name is ${this.name} and I am ${this.age} years old`);
//   }
// }
// const person1 = new Person("Elie Mugisha", 22);
// person1.getName();
Object.defineProperty(exports, "__esModule", { value: true });
exports.partsSums = partsSums;
// class Smartphone {
//   public model: string;
//   private internalSerial: string;
//   protected batteryHealth: number;
//   constructor(model: string, serial: string) {
//     this.model = model;
//     this.internalSerial = serial;
//     this.batteryHealth = 100;
//   }
//   public showSerial() {
//     console.log(`The hidden serial is: ${this.internalSerial}`);
//   }
// }
// const myPhone = new Smartphone("Pixel 8", "XYZ-123");
// console.log(myPhone.model);
// console.log(myPhone.internalSerial);
// myPhone.showSerial();
// class Smartphone {
//   static totalPhonesCreated: number = 0;
//   constructor(public model: string) {
//     Smartphone.totalPhonesCreated++;
//   }
//   static getManufacturer(): string {
//     return "Global Tech Corp";
//   }
// }
// const phone1 = new Smartphone("iPhone 15");
// const phone2 = new Smartphone("Galaxy S24");
// console.log(Smartphone.totalPhonesCreated);
// console.log(Smartphone.getManufacturer());
// console.log(phone1.totalPhonesCreated);
// console.log("Opps there is something went wrong");
function partsSums(ls) {
    var cont = [];
    for (var a = ls.length; a >= 0; a--) {
        if (ls.length === a) {
            cont.push(ls);
            cont.pop();
        }
    }
    return cont;
}
console.log(partsSums([0, 1, 3, 6, 10]));
