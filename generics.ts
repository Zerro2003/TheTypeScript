// interface toUp {
//   toUpperCase(): string;
// }
// function myString<T extends toUp>(name: T) {
//   return name.toUpperCase();
// }
// console.log(myString("mugisha"));

// interface toUp<t> {
//   toUpperCase(): t;
// }
// function myString<T extends toUp<string>>(name: T) {
//   return name.toUpperCase();
// }
// console.log(myString("mugisha"));

class List<anylist> {
  constructor(public theList: anylist[] = []) {}
  addthings(elmt: anylist): void {
    this.theList.push(elmt);
  }
  getAll(): anylist[] {
    return this.theList;
  }
}
const veges = new List<string>();
veges.addthings("igihaza");
veges.addthings("imboga");
veges.addthings("intoryi");
const marks = new List<number>();
marks.addthings(3);
marks.addthings(55);
marks.addthings(21);
console.log(marks.getAll());
console.log(veges.getAll());
