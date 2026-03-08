function parseData(jsonString) {
    return JSON.parse(jsonString);
}
var rawData = parseData('{"name":"Elie","age":25}');
if (typeof rawData === "object" && rawData !== null) {
    console.log("Name: ".concat(rawData.name, ", Age: ").concat(rawData.age));
}
