function sum(...rest: number[]) {
  return rest.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3, 4, 5));
