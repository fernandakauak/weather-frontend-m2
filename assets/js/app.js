$(document).ready(function () {

    // Multiplicar cards sin repetir HTML
    const contenedor = document.getElementById('mi-lista');
    const lugares = [
        {nombre: "Tu ciudad", clima: "18" },
        {nombre: "Osorno, Chile", clima: "7" },
        {nombre: "Reñaca, Chile", clima: "15" },
        {nombre: "Panguipulli, Chile", clima: "10" },
        {nombre: "Toronto, Canadá", clima: "10" },
        {nombre: "Londres, Inglaterra", clima: "20" },
        {nombre: "Melbourne, Australia", clima: "25" }
    ];

    contenedor.innerHTML = '';

    lugares.forEach(lugar => {
        contenedor.innerHTML += `
            <article class="card col-sm-12 col-md-4 mb-3">
                <img src="assets/img/prueba.png" class="card-img-top" alt="Imagen de Lugar">
                <div class="card-body">
                    <h5 class="card-title">${lugar.nombre}</h5>
                    <p class="card-text">${lugar.clima}</p>
                    <a href="#" class="btn btn-primary col-12">Detalles</a>
                </div>
            </article>
        `;
    });

    
});