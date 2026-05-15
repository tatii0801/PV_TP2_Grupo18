import { obtenerCapital } from "./funciones21.js";

const pais = document.querySelector("#pais");
const capital = document.querySelector("#capital");

pais.addEventListener("change", () => {

    const paisSeleccionado = pais.value;

    const capitalCorrespondiente = obtenerCapital(paisSeleccionado);

    capital.value = capitalCorrespondiente;

    console.log(`País seleccionado: ${paisSeleccionado}`);
    console.log(`Capital seleccionada: ${capitalCorrespondiente}`);

});