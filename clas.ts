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

class Smartphone {
  public model: string;
  private internalSerial: string;
  protected batteryHealth: number;

  constructor(model: string, serial: string) {
    this.model = model;
    this.internalSerial = serial;
    this.batteryHealth = 100;
  }

  public showSerial() {
    console.log(`The hidden serial is: ${this.internalSerial}`);
  }
}
const myPhone = new Smartphone("Pixel 8", "XYZ-123");
console.log(myPhone.model);
console.log(myPhone.internalSerial);
myPhone.showSerial();
