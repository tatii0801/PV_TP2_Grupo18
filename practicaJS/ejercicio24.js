import { mostrar } from "./funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const mensaje = document.getElementById("mensaje");

radios.forEach(radio => {
    radio.addEventListener("click", (event) => {
                mostrar(event.target.value, mensaje);
    });
});
