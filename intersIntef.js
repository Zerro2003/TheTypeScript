var myObj = {
    name: "kagabo",
    interest: "gaming",
    skinColor: "white",
    cars: 2,
    children: 2,
    age: 30,
    allTo: function () {
        return "a ".concat(this.skinColor, " man called ").concat(this.name, " has interest in ").concat(this.interest, " he has ").concat(this.children, " kids plus ").concat(this.cars, " cars at only age of ").concat(this.age);
    },
};
console.log(myObj.allTo());
