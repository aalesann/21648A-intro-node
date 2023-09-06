console.log("Instrucción 1")
console.time("Inicio");

setTimeout(() => {
    console.log("Instrucción 2")
    console.timeEnd('Inicio')
}, 3000);

setTimeout(() => {
    console.log("Instrucción 3")
}, 2000);

console.log("Instrucción 4")