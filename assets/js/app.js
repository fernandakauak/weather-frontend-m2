$(document).ready(function () {

    /* MULTIPLICAR CARD SIN REPETIR HTML */
    const contenedor = document.getElementById('lugares-clima');
    const lugares = [
        { num: "1", nombre: "Santiago, Chile", ico: "☁️", clima: "18°C", lunes: "18°C", martes: "20°C", miercoles: "16°C", jueves: "18°C", viernes: "20°C", sabado: "16°C", domingo: "16°C" },
        { num: "2", nombre: "Osorno, Chile", ico: "🌧️", clima: "7°C", lunes: "20", martes: "16" },
        { num: "3", nombre: "Reñaca, Chile", ico: "⛅", clima: "15°C", lunes: "20", martes: "16" },
        { num: "4", nombre: "Panguipulli, Chile", ico: "🌧️", clima: "10°C", lunes: "20", martes: "16" },
        { num: "5", nombre: "Toronto, Canadá", ico: "⛅", clima: "10°C", lunes: "20", martes: "16" },
        { num: "6", nombre: "Londres, Inglaterra", ico: "🌧️", clima: "20°C", lunes: "20", martes: "16" },
        { num: "7", nombre: "Melbourne, Australia", ico: "☀️", clima: "25°C", lunes: "20", martes: "16" }
    ];

    lugares.forEach(lugar => {
        contenedor.innerHTML += `
            <article class="card col-sm-12 col-md-4 mb-3 bg-secondary bg-gradient">
                <div class="card-body text-center">
                    <h2 class="card-title">${lugar.nombre}</h2>
                    <div class="clima-ico">${lugar.ico}</div>
                    <h3 class="card-text">${lugar.clima}</h3>
                    <a type="button" class="btn btn-primary class-12" id="btn-detalle-${lugar.num}" href="#">Detalles</a>
                </div>
            </article>
        `;

        $(`#btn-detalle-${lugar.num}`).click(function(){
            const lugarElegido = lugar;
            localStorage.setItem("lugarElegido", JSON.stringify(lugarElegido));
            window.location.href = 'detalle.html';

            const detallesClimaCiudad = document.getElementById('lugares-clima');
            const detallesCiudad = lugarElegido;
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