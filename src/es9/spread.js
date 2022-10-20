const objeto = {
  nombre: 'Andres',
  age: 23,
};

const usuario = {
  ...objeto,
  plataforma: 'Platzi',
};

const { nombre } = usuario;
console.log(nombre);
console.log(usuario);
