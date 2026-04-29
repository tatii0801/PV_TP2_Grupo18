//Calcular y mostrar por consola el volumen de una esfera cuyo radio = 4m
let radio = 4;
const pi = 3.1415;
//let vol = (4/3)*pi*Math.pow(radio,3);
//let vol=(4/3)*pi*radio**3;
let calcularVolumen = (r,p) => (4/3)*p*Math.pow(r,3);

let vol=calcularVolumen(radio,pi);

console.log(`Volumen de esfera de 4m = ${vol}`);
