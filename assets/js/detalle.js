$(document).ready(function () {

    const lugarElegido = localStorage.getItem("lugarElegido");

    const lugarDatos = JSON.parse(lugarElegido);
    const detallesClimaCiudad = document.getElementById('clima-detalle');
    const detallesCiudad = lugarElegido;

    detallesClimaCiudad.innerHTML += `
        <h1>Pronóstico de la semana: ${lugarDatos.nombre}</h1>

            <div class="col-sm-12 col-md-4 text-center">
                <h2>CLIMA</h2>
                <div>${lugarDatos.ico}</div>
                <h2>${lugarDatos.clima}</h2>
            </div>

            <div class="col-sm-12 col-md-4 text-center">
                <h2>Humedad</h2>
                <div>ICONO</div>
                <h2>Número</h2>
            </div>

            <div class="col-sm-12 col-md-4 text-center">
                <h2>Viento</h2>
                <div>💨</div>
                <h2>Número</h2>
            </div>

            <h3>Pronóstico Semana</h3>
            <aside class="card col-sm-12 col-md-4 card-body text-center">
                <h2 class="card-title">Martes</h2>
                <h3 class="card-text">${lugarDatos.martes}</h3>
            </aside>
            <aside class="card col-sm-12 col-md-4 card-body text-center">
                <h2 class="card-title">Miércoles</h2>
                <h3 class="card-text">${lugarDatos.miercoles}</h3>
            </aside>
            <aside class="card col-sm-12 col-md-4 card-body text-center">
                <h2 class="card-title">Jueves</h2>
                <h3 class="card-text">${lugarDatos.jueves}</h3>
            </aside>
            <aside class="card col-sm-12 col-md-4 card-body text-center">
                <h2 class="card-title">Viernes</h2>
                <h3 class="card-text">${lugarDatos.viernes}</h3>
            </aside>
            <aside class="card col-sm-12 col-md-4 card-body text-center">
                <h2 class="card-title">Sábado</h2>
                <h3 class="card-text">${lugarDatos.sabado}</h3>
            </aside>
            <aside class="card col-sm-12 col-md-4 card-body text-center">
                <h2 class="card-title">Domingo</h2>
                <h3 class="card-text">${lugarDatos.domingo}</h3>
            </aside>
    `; 

    
});
    