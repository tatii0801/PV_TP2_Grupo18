export function mostrarTexto(input, destino) {
    destino.textContent = input.value;
    if (input.value.length > 20) {
        destino.style.color = "tomato";
    } else {
        destino.style.color = "green";
    }
}