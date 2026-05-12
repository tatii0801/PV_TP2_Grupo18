export function cambiarDeTexto() {

    const parrafo = document.getElementById("parrafo");

   parrafo.textContent =`El DOM representa un documento con un árbol lógico. 
                          Cada rama del árbol termina en un nodo y cada nodo contiene objetos. 
                          Los métodos DOM permiten el acceso programático al árbol. Con ellos, puede cambiar la estructura, 
                          el estilo o el contenido del documento.`;

    document.body.style.backgroundColor = "Pink";
    parrafo.style.color= "Maroon";
    parrafo.style.fontWeight = "bold";
}
