import { mostrarTexto} from './funciones22.js';

const input = document.getElementById('texto');
const resultado = document.getElementById('resultado');


input.addEventListener('input', () => {
    mostrarTexto(input, resultado);
});