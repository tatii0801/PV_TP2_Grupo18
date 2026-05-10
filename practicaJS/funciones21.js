export const obtenerCapital = (pais) => {

    const capitales = {
        Argentina: "Buenos Aires",
        Brasil: "Brasilia",
        Chile: "Santiago",
        Perú: "Lima",
        Uruguay: "Montevideo",
        Colombia: "Bogotá"
    };

    return capitales[pais];
};