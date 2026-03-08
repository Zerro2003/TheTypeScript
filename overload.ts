type strOrNum = number | string;
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return a.toString() + b.toString();
}
console.log(combine(2, 8));
