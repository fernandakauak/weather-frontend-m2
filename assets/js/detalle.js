$(document).ready(function () {

    /* CAPTAR INFORMACIÓN PARA USAR EN DETALLE.HTML */
    const lugarElegido = localStorage.getItem("lugarElegido");
    const lugarDatos = JSON.parse(lugarElegido);
    const detallesClimaCiudad = document.getElementById('clima-detalle');
    const detallesCiudad = lugarElegido;

    /* COLOCAR EN ESTRUCTURA HTML */
    /* ESTRUCTURA: TÍTULO (CON NOMBRE LUGAR), CLIMA, HUMEDAD, VELOCIDAD DE VIENTO Y PRONÓSTICO PARA EL RESTO DE LA SEMANA */
    detallesClimaCiudad.innerHTML += `
        <h1 class="container__title">Pronóstico de la semana: ${lugarDatos.nombre}</h1>

        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Clima</h2>
            <div class="detail__ico">${lugarDatos.ico}</div>
            <h3 class="detail__grade">${lugarDatos.climaActual}</h3>
            <h3 class="detail__title">${lugarDatos.estadoActual}</h3>
        </div>

        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Humedad</h2>
            <div class="detail__ico">💧</div>
            <h3 class="detail__grade">${lugarDatos.humedad}</h3>
        </div>

        <div class="col-sm-12 col-md-4 detail__info">
            <h2  class="detail__title">Viento</h2>
            <div class="detail__ico">💨</div>
            <h3 class="detail__grade">${lugarDatos.viento}</h3>
        </div>

        <h2 class="container__title">Pronóstico Semana</h2>
        <h3 class="container__title">Promedio de máxima de laa semana: ${lugarDatos.nombre}</h3>
        
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">Martes</h3>
            <h3 class="forecast__grade">${lugarDatos.martes}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">Miércoles</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal.miercoles}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">Jueves</h3>
            <h3 class="forecast__grade">${lugarDatos.jueves}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">Viernes</h3>
            <h3 class="forecast__grade">${lugarDatos.viernes}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">Sábado</h3>
            <h3 class="forecast__grade">${lugarDatos.sabado}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">Domingo</h3>
            <h3 class="forecast__grade">${lugarDatos.domingo}</h3>
        </aside>
    `; 
    
});