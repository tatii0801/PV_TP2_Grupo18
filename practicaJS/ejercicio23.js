import { mostrarTexto} from './funciones23.js';

const input = document.getElementById('texto');
const resultado = document.getElementById('resultado');


input.addEventListener('input', () => {
    mostrarTexto(input, resultado);
});