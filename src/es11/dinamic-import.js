const button = document.getElementById('btn');

button.addEventListener('click', async () => {
  const modules = await import('./module.js');
  console.log(modules);
  modules.hello();
});
