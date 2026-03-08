interface person {
  name: string;
  interest: string;
  skinColor: string;
}
interface assets {
  cars: number;
  children: number;
  age: number;
  allTo: () => string;
}
type man = person & assets;
let myObj: man = {
  name: "kagabo",
  interest: "gaming",
  skinColor: "white",
  cars: 2,
  children: 2,
  age: 30,
  allTo: function () {
    return `a ${this.skinColor} man called ${this.name} has interest in ${this.interest} he has ${this.children} kids plus ${this.cars} cars at only age of ${this.age}`;
  },
};
console.log(myObj.allTo());
