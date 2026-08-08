$(document).ready(function () {

    /* CAPTAR INFORMACIÓN PARA USAR EN DETALLE.HTML */
    const lugarElegido = localStorage.getItem("lugarElegido");
    const lugarDatos = JSON.parse(lugarElegido);
    const detallesClimaCiudad = document.getElementById('clima-detalle');
    const detallesEstadisticaSemana = document.getElementById('estadistica-semana');
    const detallesCiudad = lugarElegido;

    /* PROMEDIO MÍNIMO */
    let promedioMin = [parseInt(lugarDatos.pronosticoSemanal[0].min), parseInt(lugarDatos.pronosticoSemanal[1].min), parseInt(lugarDatos.pronosticoSemanal[2].min), parseInt(lugarDatos.pronosticoSemanal[3].min), parseInt(lugarDatos.pronosticoSemanal[4].min), parseInt(lugarDatos.pronosticoSemanal[5].min)];

    let sum = 0;

    for (let i = 0; i < promedioMin.length; i++) {
        sum += promedioMin[i];
    }

    const promedioMinCiudad = Math.round(sum / promedioMin.length);

    /* PROMEDIO MÁXIMO */
    let promedioMax = [parseInt(lugarDatos.pronosticoSemanal[0].max), parseInt(lugarDatos.pronosticoSemanal[1].max), parseInt(lugarDatos.pronosticoSemanal[2].max), parseInt(lugarDatos.pronosticoSemanal[3].max), parseInt(lugarDatos.pronosticoSemanal[4].max), parseInt(lugarDatos.pronosticoSemanal[5].max)];

    for (let i = 0; i < promedioMax.length; i++) {
        sum += promedioMax[i];
    }

    const promedioMaxCiudad = Math.round(sum / promedioMax.length);


    /* PROMEDIO MÍNIMO Y MÁXIMO */
    let promedioTodoCiudad = Math.round((promedioMinCiudad + promedioMaxCiudad) / 2);


    /* MODA CLIMA POR CIUDAD */
    let estadoClimaCiudad = [lugarDatos.pronosticoSemanal[0].estado, lugarDatos.pronosticoSemanal[1].estado, lugarDatos.pronosticoSemanal[2].estado, lugarDatos.pronosticoSemanal[3].estado, lugarDatos.pronosticoSemanal[4].estado, lugarDatos.pronosticoSemanal[5].estado];

    function modaClima(arr){
        return arr.sort((a,b) =>
            arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }

    let modaClimaCiudad = modaClima(estadoClimaCiudad);


    /* MENSAJE SEGÚN CLIMA */
    function resumenClima() {
        if (modaClimaCiudad === "Soleado"){
            return `☀️ Como calienta el sol en tu ciudad... 🎵`
        } else if (modaClimaCiudad === "Nubosidad Parcial"){
            return `⛅ Un poco de nube, un poco de sol, un poco de todo, a little respect to me... 🎵`
        } else if (modaClimaCiudad === "Nublado") {
            return `☁️ Está nubladito, abrígate y da un paseo un ratito, little fluffy clouds 🎵`
        } else if (modaClimaCiudad === "Chubascos"){
            return `🌧️ Esta tarde vi llover, vi gente correr... 🎵`
        } else {
            return `🪐 No sé tú pero yo no sé donde estamos... this is Major Tom to Ground Control 🎵`
        }
    }

    let resumenClimaCiudad = resumenClima()


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

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[0].dia}</h3>
            <h3 class="forecast__state">${lugarDatos.pronosticoSemanal[0].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[0].min} / ${lugarDatos.pronosticoSemanal[0].max}</h3>
        </article>
        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[1].dia}</h3>
            <h3 class="forecast__state">${lugarDatos.pronosticoSemanal[1].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[1].min} / ${lugarDatos.pronosticoSemanal[1].max}</h3>
        </article>
        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[2].dia}</h3>
            <h3 class="forecast__state">${lugarDatos.pronosticoSemanal[2].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[2].min} / ${lugarDatos.pronosticoSemanal[2].max}</h3>
        </article>
        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[3].dia}</h3>
            <h3 class="forecast__state">${lugarDatos.pronosticoSemanal[3].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[3].min} / ${lugarDatos.pronosticoSemanal[3].max}</h3>
        </article>
        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[4].dia}</h3>
            <h3 class="forecast__state">${lugarDatos.pronosticoSemanal[4].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[4].min} / ${lugarDatos.pronosticoSemanal[4].max}</h3>
        </article>
        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDatos.pronosticoSemanal[5].dia}</h3>
            <h3 class="forecast__state">${lugarDatos.pronosticoSemanal[5].estado}</h3>
            <h3 class="forecast__grade">${lugarDatos.pronosticoSemanal[5].min} / ${lugarDatos.pronosticoSemanal[5].max}</h3>
        </article>
    `; 

    detallesEstadisticaSemana.innerHTML += `
    <h3 class="promedio__title">Promedio de máxima de la semana: ${lugarDatos.nombre}</h3>

    <div class="col-sm-12 promedio__section">
        <article class="promedio__min col-sm-12 col-md-4 ">
            <h3 class="grado__title">Mínimo de la semana:</h3>
            <h4 class="grado__text">${promedioMinCiudad}</h4>
        </article>
        <article class="promedio__max col-sm-12 col-md-4 ">
            <h3 class="grado__title">Máximo de la semana:</h3>
            <h4 class="grado__text">${promedioMaxCiudad}</h4>
        </article>
        <article class="promedio__todo col-sm-12 col-md-4 ">
            <h3 class="grado__title">Promedio de la semana:</h3>
            <h4 class="grado__text">${promedioTodoCiudad}</h4>
        </article>
    </div>

    <aside class="promedio__estado">
        <h3 class="estado__title">Clima más repetido:</h3>
        <h4 class="estado__text">${modaClimaCiudad}</h4>
        <h3 class="estado__title">Consideración para este clima:</h3> 
        <h4 class="estado__text">${resumenClimaCiudad}</h4>          
    </aside>
    `; 

});