//flat
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));

//flatmap
const array2 = [1, 2, 3, 4, 3];

console.log(array2.flatMap((v) => [v, v * 2]));
console.log(array2);
