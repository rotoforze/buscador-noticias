export function cambiarIdioma(idioma) {

    const header = document.querySelector(".navbar-brand");
    const idiomas = document.querySelector(".idiomas");
    const btnBuscar = document.querySelector(".bt-buscar");
    // filtro lengua
    const filtroLengua = document.querySelector(".filtro-pais");

    // filtro orden
    const filtroOrden = document.querySelector(".ordenar-texto");

    const filtroCantidad = document.querySelector(".texto-cantidad-res");
    const fechaDesde = document.querySelector(".texto-desde");
    const fechaHasta = document.querySelector(".texto-hasta");

    switch (idioma) {
        case "es":
            header.innerHTML = "Buscador de noticias📰";
            idiomas.innerHTML = "Idioma 🌍";
            btnBuscar.innerHTML = "Buscar";
            filtroLengua.innerHTML = "Filtrar por país";
            filtroOrden.innerHTML = "Ordenar por";
            filtroCantidad.innerHTML = "Cantidad de resultados";
            fechaDesde.innerHTML = "Desde";
            fechaHasta.innerHTML = "Hasta";
            break;

        case "en":
            header.innerHTML = "News Finder📰";
            idiomas.innerHTML = "Languages 🌍";
            btnBuscar.innerHTML = "Search";
            filtroLengua.innerHTML = "Language filter";
            filtroOrden.innerHTML = "Order by";
            filtroCantidad.innerHTML = "News volume";
            fechaDesde.innerHTML = "From";
            fechaHasta.innerHTML = "To";
            break;
    }

    cambiarListaPaises(idioma);
    cambiarListaOrdenar(idioma);
}

function cambiarListaPaises(idioma) {
    const traduccion = new Map([
        ["es", ["----", "Español", "Alemán", "Inglés", "Frances", "Italiano", "Neerlandes", "Noruego", "Portuges", "Ruso", "Sueco", "Árabe", "Chino"]],
        ["en", ["----", "Spanish", "German", "English", "French", "Italian", "Dutch", "Norwegian", "Portuguese", "Russian", "Swedish", "Arabic", "Chinese"]]
    ]);
    const listaPaises = document.querySelector(".lista-paises");

    const arrayTraduccion = Array.from(traduccion.get(idioma));

    for (const i in listaPaises.children) {
        if (i < listaPaises.children.length) {
            listaPaises.children[i].innerHTML = arrayTraduccion[i];
        }
    }
}

function cambiarListaOrdenar(idioma) {
    const traduccion = new Map([
        ["es", ["Relevancia", "Popularidad", "Recientes"]],
        ["en", ["Relevancy", "Popularity", "Newer"]]
    ]);
    const ordenar = document.querySelector(".orden");

    const arrayTraduccion = Array.from(traduccion.get(idioma));

    for (const i in ordenar.children) {
        if (i < ordenar.children.length) {
            ordenar.children[i].innerHTML = arrayTraduccion[i];
        }
    }
}