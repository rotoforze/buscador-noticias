const url = 'https://newsapi.org/v2/';
let endpoint = 'everything?'
let busqueda = 'q=';
const apikey = '&apiKey=ac046c96f82943229d366392c8f8da3a';



function reemplazarEspacios(texto) {
    return texto.replace(/ /g, '%20');
}

export async function getApi(userInput) {

    const elmFechaInicio = document.querySelector(".fecha-inicio");
    const elmFechaFin = document.querySelector(".fecha-fin");

    const elmLengua = document.querySelector(".lista-paises").value;
    const elmOrden = document.querySelector(".orden").value;

    let apiFactorizada = url;

    if (userInput) {
        busqueda = 'q=' + reemplazarEspacios(userInput);
        apiFactorizada += endpoint + busqueda;
        apiFactorizada += "&sortBy=" + elmOrden;
    } else {
        return;
    }


    // ordenar


    // idioma
    if (elmLengua != "none") {
        apiFactorizada += "&language=" + elmLengua;
    }

    // fechas
    console.log(elmFechaInicio.value != "")
    if (elmFechaInicio.value != "") {
        apiFactorizada += "&from=" + elmFechaInicio.value;
    }
    console.log(elmFechaFin.value != "")
    if (elmFechaFin.value != "") {
        apiFactorizada += "&to=" + elmFechaFin.value;
    }


    // cantidad
    const elmCantidadArticulos = document.querySelector(".cantidadBusqueda");
    let maxNoticias = 0;
    if (elmCantidadArticulos.value == "") {
        maxNoticias = 10;
    } else maxNoticias = elmCantidadArticulos.value;

    apiFactorizada += "&pageSize=" + maxNoticias;

    // apikey
    if (apikey) {
        apiFactorizada += apikey;
    }

    console.log(apiFactorizada);

    try {
        const response = await fetch(apiFactorizada);
        if (!response.ok) {
            throw new Error('Problemas de conexión');
        } else {
            const data = await response.json();

            return data;

        }
    } catch (error) {

        console.log("No se han encontrado noticias");

        console.error('Ha surgido un problema al recoger los datos:', error);
        return null; // Return null en caso de error
    }
}