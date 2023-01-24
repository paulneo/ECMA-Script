class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.#speak()} ${this.name} ${this.age}`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user('david', 15);
console.log(bebeloper1.greeting());
console.log(bebeloper1.uAge);
console.log((bebeloper1.uAge = 20));
console.log(bebeloper1.uAge);
