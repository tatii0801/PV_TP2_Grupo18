// Array de notas (puede modificarse)
const notas = [8, 5, 7, 3, 10, 6, 4, 9, 2, 6];

// Variables auxiliares
let suma = 0;
let aprobadas = 0;

// Recorrer el array
notas.forEach(nota => {
    console.log(`Nota: ${nota}`);

    suma += nota;

    if (nota >= 6) {
        console.log(`→ Aprobada`);
        aprobadas++;
    } else {
        console.log(`→ Desaprobada`);
    }
});

// Calculos finales
const promedio = suma / notas.length;

// Resultados
console.log(`Promedio general: ${promedio}`);
console.log(`Cantidad de notas aprobadas: ${aprobadas}`);