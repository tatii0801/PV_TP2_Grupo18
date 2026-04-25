// Declaracion de variables (en cm)
const base = 10;
const altura = 5;

// Funcion para calcular area
const calcularArea = (b, h) => b * h;

// Funcion para calcular perimetro
const calcularPerimetro = (b, h) => 2 * (b + h);

// Calculos
const area = calcularArea(base, altura);
const perimetro = calcularPerimetro(base, altura);

// Mostrar resultados
console.log(`Base: ${base} cm`);
console.log(`Altura: ${altura} cm`);
console.log(`Area del rectangulo: ${area} cm2 (cuadrados)`);
console.log(`Perimetro del rectangulo: ${perimetro} cm`);