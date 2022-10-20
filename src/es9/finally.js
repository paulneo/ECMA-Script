const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Final'));
