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

            break;

        case "en":
            header.innerHTML = "News Finder📰";
            idiomas.innerHTML = "Languages 🌍";
            btnBuscar.innerHTML = "Search";
            filtroLengua.innerHTML = "Country filter";
            filtroOrden.innerHTML = "Order by";
            filtroCantidad.innerHTML = "News volume";
            fechaDesde.innerHTML = "From";
            fechaHasta.innerHTML = "To";
            break;
    }

}