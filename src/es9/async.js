async function* generator(params) {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = generator();

other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));

console.log('Hello');

async function forAwait() {
  const nombres = ['Alexa', 'Oscar', 'David'];
  for await (let valor of nombres) {
    console.log(valor);
  }
}

forAwait();
