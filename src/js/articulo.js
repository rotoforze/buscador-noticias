const feed = document.querySelector(".feed");

function limpiarFeed() {
    while (feed.firstChild) {
        feed.firstChild.remove();
    }
    document.querySelector(".resultados-encontrados").innerHTML = "0";
    document.querySelector(".resultados-mostrados").innerHTML = "0";
}

export async function addArticulo(datos) {
    limpiarFeed();

    if (datos.totalResults <= 0) {
        return;
    }


    const cantidad = document.querySelector(".cantidadBusqueda");
    let noticiasMaximas;
    console.log(cantidad.value)
    if (cantidad.value == "") {
        noticiasMaximas = 10;
    } else noticiasMaximas = cantidad.value;

    let mostradosFinalmente = 0;

    for (let i = 0; i < noticiasMaximas && i < datos.articles.length; i++) {

        // articulo
        const articulo = document.createElement("div");
        articulo.className = "articulo-contenido";

        // contenedor para los datos
        const contenedorDatos = document.createElement("div");
        contenedorDatos.className = "contenedor-datos d-flex";

        // autor
        const autor = document.createElement("span");
        autor.className = "autor";
        if (datos.articles[i].author) {
            autor.innerHTML = datos.articles[i].author;
        }
        contenedorDatos.appendChild(autor);

        // periodico
        const periodico = document.createElement("span");
        periodico.className = "periodico";
        periodico.innerHTML = datos.articles[i].source.name;
        contenedorDatos.appendChild(periodico);

        // fecha
        const fecha = document.createElement("span");
        fecha.className = "fecha";
        fecha.innerHTML = datos.articles[i].publishedAt.slice(0, 10);
        contenedorDatos.appendChild(fecha);

        // contenedor de la descripción
        const contenedorDescripcion = document.createElement("div");
        contenedorDescripcion.className = "contenedor-descripcion";

        // titulo
        const titulo = document.createElement("a");
        titulo.className = "titulo btn letras-hover-a-gris fw-semibold";
        titulo.innerHTML = datos.articles[i].title;
        titulo.href = datos.articles[i].url;
        titulo.target = "_blank";
        contenedorDescripcion.appendChild(titulo);

        // descripcion
        const descripcion = document.createElement("span");
        descripcion.className = "descripcion";
        descripcion.innerHTML = datos.articles[i].description + " ";

        // saber más
        const saberMas = document.createElement("a");
        saberMas.className = "saber-mas";
        saberMas.innerHTML = "Saber más..."
        saberMas.href = datos.articles[i].url;
        saberMas.target = "_blank";
        descripcion.appendChild(saberMas);
        contenedorDescripcion.appendChild(descripcion);

        articulo.appendChild(contenedorDatos);
        articulo.appendChild(contenedorDescripcion);


        // bloque para el articulo
        const bloqueArticulo = document.createElement("div");
        bloqueArticulo.className = "bloque-articulo bg-secondary-subtle";
        bloqueArticulo.appendChild(articulo);

        const imagen = document.createElement("img");
        imagen.className = "imagen-articulo"
        imagen.srcset = datos.articles[i].urlToImage;
        bloqueArticulo.appendChild(imagen);


        feed.appendChild(bloqueArticulo);
        mostradosFinalmente++;
    } // fin del for

    document.querySelector(".resultados-encontrados").innerHTML = datos.totalResults;
    document.querySelector(".resultados-mostrados").innerHTML = mostradosFinalmente;

}