let horas, minutos;
horas = 5;
minutos = 46;

let seg = (h,m) => h*3600+m*60;

console.log(`Horas: ${horas} \nMinutos: ${minutos} \nTotal en segundos: ${seg(horas, minutos)}`);
