$(document).ready(function () {

    // Multiplicar cards sin repetir HTML
    const contenedor = document.getElementById('lugares-clima');
    const lugares = [
        {nombre: "Tu ciudad", clima: "18", url: "/detalle.html#1", lunes: "20", martes: "16" },
        {nombre: "Osorno, Chile", clima: "7", url: "/detalle.html#2", lunes: "20", martes: "16" },
        {nombre: "Reñaca, Chile", clima: "15", url: "/detalle.html#3", lunes: "20", martes: "16" },
        {nombre: "Panguipulli, Chile", clima: "10", url: "/detalle.html#4", lunes: "20", martes: "16" },
        {nombre: "Toronto, Canadá", clima: "10", url: "/detalle.html#5", lunes: "20", martes: "16" },
        {nombre: "Londres, Inglaterra", clima: "20", url: "/detalle.html#6", lunes: "20", martes: "16" },
        {nombre: "Melbourne, Australia", clima: "25", url: "/detalle.html#7", lunes: "20", martes: "16" }
    ];

    contenedor.innerHTML = '';

    lugares.forEach(lugar => {
        contenedor.innerHTML += `
            <article class="card col-sm-12 col-md-4 mb-3">
                
                <div class="card-body">
                    <h5 class="card-title">${lugar.nombre}</h5>
                    <p class="card-text">${lugar.clima}</p>
                    <img src="assets/img/prueba.png" class="card-img-top mt-3" alt="Imagen de Lugar">
                    <a type="button" class="btn btn-primary class-12" href="${lugar.url}">Detalles</a>
                </div>
            </article>
        `;
    });

});