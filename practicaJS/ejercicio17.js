let contarLetraA = pal => {
    let cont = 0;
    for(let i=0; i < pal.length; i++){
        if(pal[i] === "a"){ //Para que también cuente "A" la condición debería ser (pal[i] === "a" || pal[i] === "A")
            cont++;
        }
    }
    return cont;
}
palabra = "Anastasia";
console.log(`La cantidad de veces que aparece la letra "a" es de: ${contarLetraA(palabra)}`);