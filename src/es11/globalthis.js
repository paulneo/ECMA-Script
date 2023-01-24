// Ejecuta el siguiente código y observa que muestra
console.log(window); //navegador
console.log(global); //node
console.log(selft); //webworker
console.log(globalThis);

// En el navegador
window === globalThis; // true

// En Node.js
global === globalThis; // true
