import { getApi } from "./api.js";
import { addArticulo } from "./articulo.js";


const btnBuscar = document.querySelector(".bt-buscar");
const valorBuscar = document.querySelector(".contenido-busqueda");

async function tryApi() {
    if (valorBuscar.value) {
        const datos = await getApi(valorBuscar.value);
        console.log(datos);
        addArticulo(datos);
    }
}

function comprobarTeclado(event) {
    switch (event.key) {
        case 'Enter':
            tryApi();
            break;
        default:
            break;
    }

}

// tryApi();
btnBuscar.addEventListener("click", tryApi, true);
valorBuscar.addEventListener("keydown", () => { comprobarTeclado(event); });

// añadimos el eventlistener del teclado para toda la web
document.addEventListener("keydown", () => { comprobarTeclado(event); })