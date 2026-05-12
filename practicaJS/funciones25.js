export function cambiarColor() {

    const colores = [
        "Salmon",
        "HotPink",
        "Orange",
        "Yellow",
        "Gold",
        "Khaki",
        "Violet",
        "SlateBlue",
        "LawnGreen",
        "SpringGreen",
        "YellowGreen",
        "LightSeaGreen",
        "Cyan",
        "SteelBlue",
        "DeepSkyBlue", 
        "RosyBrown",
        "LightSlateGray"
    ];

    let colorFondo = document.body.style.backgroundColor;

    let indAleatorio = Math.floor(Math.random() * colores.length);

    let color = colores[indAleatorio];

    document.body.style.backgroundColor = color;

    console.log(`El color ${colorFondo} fue cambiado por el color: ${color}`);
}