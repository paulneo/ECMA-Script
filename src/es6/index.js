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

let lorem = 'Quiero escribir una frase epica que quiero separar \n'
+ 'otra frase epica que necesitamos'

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`

console.log(lorem);
console.log(lorem2);

let person = {
  'name': 'Jean',
  'age': 32,
  'country': 'PERU'
}
console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age);


let team1 = ['Jean', 'Pedro', 'Paul']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]
console.log(education);

{
  var globalVar = 'Global Var'
}

{
  let globalLet = 'Global Let'
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b'
// a = 'a' no va a cambiar 



