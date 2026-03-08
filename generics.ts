interface toUp {
  toUpperCase(): string;
}
function myString<T extends toUp>(name: T) {
  return name.toUpperCase();
}
console.log(myString("mugisha"));
