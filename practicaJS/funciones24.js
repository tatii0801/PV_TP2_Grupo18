export function mostrar(valor, elemento) {
    elemento.textContent = `Seleccionaste: ${valor}`;
    console.log(`Valor seleccionado ${valor}`);

    if (valor === "Java Script") {
        document.body.style.backgroundColor = "#f7df1e";
    } else if (valor === "Python") {
        document.body.style.backgroundColor = "#3776AB";
    } else if (valor === "Ruby") {
        document.body.style.backgroundColor = "#CC342D";
    }
}

