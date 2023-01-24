const number = undefined;
const validate = number ?? 5;

console.log(validate);

const usuario1 = {};
const nombre1 = usuario1.name ?? 'Andres';

const usuario2 = { name: 'Juan' };
const nombre2 = usuario2.name ?? 'Andres';

console.log(nombre1); // 'Andres'
console.log(nombre2); // 'Juan'

const id = 0;

const orId = id || 'Sin id';
const nullishId = id ?? 'Sin id';

console.log(orId); //  'Sin id'
console.log(nullishId); // 0
