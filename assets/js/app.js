$(document).ready(function () {

    /* MULTIPLICAR CARD SIN REPETIR HTML */
    const contenedor = document.getElementById('lugares-clima');
    const lugares = [
        { nombre: "Santiago, Chile", clima: "18", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" },
        { nombre: "Osorno, Chile", clima: "7", lunes: "20", martes: "16" },
        { nombre: "Reñaca, Chile", clima: "15", lunes: "20", martes: "16" },
        { nombre: "Panguipulli, Chile", clima: "10", lunes: "20", martes: "16" },
        { nombre: "Toronto, Canadá", clima: "10", lunes: "20", martes: "16" },
        { nombre: "Londres, Inglaterra", clima: "20", lunes: "20", martes: "16" },
        { nombre: "Melbourne, Australia", clima: "25", lunes: "20", martes: "16" }
    ];

    lugares.forEach(lugar => {
        contenedor.innerHTML += `
            <article class="card col-sm-12 col-md-4 mb-3">
                <div class="card-body">
                    <h5 class="card-title">${lugar.nombre}</h5>
                    <p class="card-text">${lugar.clima}</p>
                    <a type="button" class="btn btn-primary class-12 btn-detalle" href="#">Detalles</a>
                </div>
            </article>
        `;

        $(".btn-detalle").click(function(){
            const lugarElegido = lugar;
            JSON.parse(localStorage.getItem(lugarElegido));
            window.location.href = 'detalle.html';

            const detallesClimaCiudad = document.getElementById('lugares-clima');
            const detallesCiudad = lugarElegido;

            lugares.forEach(lugar => {
                detallesClimaCiudad.innerHTML += `
                    <article class="card col-sm-12 col-md-4 mb-3">
                        <h1>Pronóstico de la semana: ${lugar.nombreDetalle}</h1>
                    </article>
                `;
            }); 
        });   
    });

    
});
    
    /*}); */
    /*const detalleContent = document.getElementById('clima-detalle');
    const detalles = [
        { nombreDetalle: "Santiago, Chile", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" },
        { nombreDetalle: "Osorno, Chile", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" },
        { nombreDetalle: "Reñaca, Chile", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" },
        { nombreDetalle: "Panguipulli, Chile", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" },
        { nombreDetalle: "Toronto, Canadá", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" },
        { nombreDetalle: "Londres, Inglaterra", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" },
        { nombreDetalle: "Melbourne, Australia", lunes: "18", martes: "20", miercoles: "16", jueves: "18", viernes: "20", sabado: "16", domingo: "16" }
    ];
    
    detalles.forEach(detalle => {
        contenedor.innerHTML += `
            <article class="card col-sm-12 col-md-4 mb-3">
                <h1>Pronóstico de la semana: ${detalle.nombreDetalle}</h1>
            </article>
        `;
    });*/