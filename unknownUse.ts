function parseData(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

const rawData: unknown = parseData('{"name":"Elie","age":25}');
if (typeof rawData === "object" && rawData !== null) {
  console.log(`Name: ${rawData.name}, Age: ${rawData.age}`);
}
