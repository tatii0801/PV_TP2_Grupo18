//Numeros impares

const impares = () => {
    let numero = 1;
    let contador = 0;
     console.log(`Los primeros 10 números impares son:`);
    
     while (contador < 10) {
         if (numero % 2 !== 0) {
            console.log(`Posicion ${contador + 1}: ${numero}`);
            contador++;
        }
        numero++;
    }
};
impares();