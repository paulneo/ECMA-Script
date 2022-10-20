function* iterate(array) {
  for (const value of array) {
    yield value;
  }
}

const it = iterate(['Oscar', 'Jean', 'Paul', 'Mozart', 'Roberto']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
