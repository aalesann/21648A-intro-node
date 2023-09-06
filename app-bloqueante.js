const retrasar = (milisegundos, leyenda) => {

    const start = new Date().getTime()

    while(new Date().getTime() - start < milisegundos){
        // Haciendo algo
    }

    return leyenda
}


console.log("Instrucción 1")
console.time("Inicio");

console.log(retrasar(3000, "Instrucción 2"))

console.log(retrasar(3000, "Instrucción 3"))

console.log("Instrucción 4")
console.timeEnd('Inicio')