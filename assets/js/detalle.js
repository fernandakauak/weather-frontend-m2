$(document).ready(function () {

    /* CAPTAR INFORMACIÓN PARA USAR EN DETALLE.HTML */
    const lugarElegido = localStorage.getItem("lugarElegido");
    const lugarDatos = JSON.parse(lugarElegido);
    const detallesClimaCiudad = document.getElementById('clima-detalle');
    const detallesCiudad = lugarElegido;

    /* COLOCAR EN ESTRUCTURA HTML */
    /* ESTRUCTURA: TÍTULO (CON NOMBRE LUGAR), CLIMA, HUMEDAD, VELOCIDAD DE VIENTO Y PRONÓSTICO PARA EL RESTO DE LA SEMANA */
    detallesClimaCiudad.innerHTML += `
        <h1 class="text-center">Pronóstico de la semana: ${lugarDatos.nombre}</h1>

        <div class="col-sm-12 col-md-4 text-center mt-3 mb-3 detalle-clima">
            <h2>Clima</h2>
            <div class="clima-ico">${lugarDatos.ico}</div>
            <h3>${lugarDatos.clima}</h3>
        </div>

        <div class="col-sm-12 col-md-4 text-center mb-3 detalle-clima">
            <h2>Humedad</h2>
            <div class="clima-ico">💧</div>
            <h3>${lugarDatos.humedad}</h3>
        </div>

        <div class="col-sm-12 col-md-4 text-center mb-3 detalle-clima">
            <h2>Viento</h2>
            <div class="clima-ico">💨</div>
            <h3>${lugarDatos.viento}</h3>
        </div>

        <h2 class="text-center mt-5">Pronóstico Semana</h2>
        <aside class="card col-sm-12 col-md-4 card-body text-center">
            <h2 class="card-title">Martes</h2>
            <h3 class="card-text text-dark">${lugarDatos.martes}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body text-center">
            <h2 class="card-title">Miércoles</h2>
            <h3 class="card-text text-dark">${lugarDatos.miercoles}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body text-center">
            <h2 class="card-title">Jueves</h2>
            <h3 class="card-text text-dark">${lugarDatos.jueves}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body text-center">
            <h2 class="card-title">Viernes</h2>
            <h3 class="card-text text-dark">${lugarDatos.viernes}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body text-center">
            <h2 class="card-title">Sábado</h2>
            <h3 class="card-text text-dark">${lugarDatos.sabado}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body text-center">
            <h2 class="card-title">Domingo</h2>
            <h3 class="card-text text-dark">${lugarDatos.domingo}</h3>
        </aside>
    `; 
    
});