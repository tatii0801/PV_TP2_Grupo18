const meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"];

let retornarMes = n => {
    let mes;
    if(n >= 1 && n <= 12){
        mes = meses[n-1];
    }else{
        mes = "El número ingresado no corresponde a un mes";
    }
    return mes;
}

console.log("Mes: ",retornarMes(13));

