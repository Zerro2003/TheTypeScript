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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class User {
//   constructor(public username: string) {} // Short-cut: creates and sets property at once
//   login() {
//     console.log(`${this.username} logged in.`);
//   }
// }
// class Admin extends User {
//   constructor(
//     username: string,
//     public adminLevel: number,
//   ) {
//     super(username); // 📞 Calls the User constructor
//   }
//   deleteUser(target: string) {
//     console.log(`Admin ${this.username} is deleting ${target}`);
//   }
// }
// const myAdmin = new Admin("Mugisha", 1);
// myAdmin.login(); // ✅ Inherited from User
// myAdmin.deleteUser("Guest123"); // ✅ Specific to Admin
// class Vehicle {
//   constructor(protected speed: number) {}
//   accelerate(a: number) {
//     this.speed += a;
//   }
// }
// class Car extends Vehicle {
//   constructor(speed: number) {
//     super(speed);
//   }
//   checkSpeed() {
//     console.log(`the current speed is ${this.speed}`);
//   }
// }
// const newVeh = new Car(10);
// newVeh.accelerate(10);
// newVeh.checkSpeed();
// abstract class Waste {
//   constructor(public weight: number) {}
//   getWeight() {
//     return `${this.weight}kg`;
//   }
//   abstract recycle(): void;
// }
// class Plastic extends Waste {
//   recycle() {
//     console.log("Melting down the plastic...");
//   }
// }
// class Organic extends Waste {
//   recycle() {
//     console.log("Composting the organic waste...");
//   }
// }
// const bottle = new Plastic(2);
// console.log(bottle.getWeight());
// bottle.recycle();
var Shape = /** @class */ (function () {
    function Shape(side) {
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, side) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.getArea = function () {
        return this.side * this.side;
    };
    return Square;
}(Shape));
var calc = new Square(2);
console.log(calc.getArea());
