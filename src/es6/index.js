function newFunction(name, age, country) {
  var name = name || 'Jean'
  var age = age || 21
  var country= country || 'Peru'
  console.log(name, age, country);
}

//es6

function newFuntion2(name = 'Jean', age = 21, country = 'Peru'){
  console.log(name, age, country);
}

newFuntion2()
newFuntion2('Jean Paul', 21, 'Peru')

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);
