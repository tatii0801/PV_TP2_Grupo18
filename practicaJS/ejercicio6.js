//Crear un array denominado edades con al menos 8 edades distintas.
//Recorrer el array, mostrar las edades y mostrar el promedio de las edades.
const edades = [9,15,28,32,11,23,37,24];
let suma = 0;

console.log("Edades: ")
edades.forEach(edad => {
    console.log(edad);
    suma += edad;
})

let promedio = suma / edades.length;
console.log("Promedio de las edades: " + promedio);
