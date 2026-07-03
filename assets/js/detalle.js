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
            <h3 class="detail__estado">${lugarDatos.estadoActual}</h3>
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
        <h3 class="container__promedio">Promedio de máxima de la semana: ${lugarDatos.nombre}</h3>

        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[0].dia}</h3>
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[0].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[0].min} / ${lugarDatos.pronosticoSemanal[0].max}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[1].dia}</h3>
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[1].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[1].min} / ${lugarDatos.pronosticoSemanal[1].max}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[2].dia}</h3>
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[2].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[2].min} / ${lugarDatos.pronosticoSemanal[2].max}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[3].dia}</h3>
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[3].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[3].min} / ${lugarDatos.pronosticoSemanal[3].max}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[4].dia}</h3>
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[4].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[4].min} / ${lugarDatos.pronosticoSemanal[4].max}</h3>
        </aside>
        <aside class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[5].dia}</h3>
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[5].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[5].min} / ${lugarDatos.pronosticoSemanal[5].max}</h3>
        </aside>
    `; 
});