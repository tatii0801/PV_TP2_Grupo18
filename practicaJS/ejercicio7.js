let nombres = ["Ana", "Martín", "Lucía", "Sebastián", "Juan", "Valentina",];

nombres.forEach(n => { console.log(`Nombre: ${n}`); });

let nLargo = nombres.reduce((max, actual) => {
    let pAux;
    if (actual.length > max.length) {
        pAux = actual;
    } else {
        pAux = max;
    }
    return pAux
});
console.log(`El nombre más largo es: ${nLargo}`);