// TOMAR INFORMACIÓN DEL LOCALSTORAGE PARA DESPLEGAR EN LA SECCIÓN "DETALLE"
function reuneInformacion() {
    const lugarElegido = localStorage.getItem("lugarElegido");
    if (!lugarElegido) {
        console.error("No hay ningún lugar seleccionado en localStorage");
        return null;
    }
    const lugarDatos = JSON.parse(lugarElegido);
    return lugarDatos;
}

function calcularEstadisticas(pronosticoSemanal) {
    // OPERATORIAS TEMPERATURAS MÍNIMAS: RECOPILAR, SUMAR, SACAR PROMEDIO
    const temperaturasMinimas = pronosticoSemanal.map(dia => {
        return parseFloat(dia.min);
    });

    const sumaMinimas = temperaturasMinimas.reduce((acumulador, temperatura) => {
            return acumulador + temperatura; 
        }, 0
    );

    const promedioMinCiudad = sumaMinimas / temperaturasMinimas.length;

    // OPERATORIAS TEMPERATURAS MÍNIMAS: RECOPILAR, SUMAR, SACAR PROMEDIO
    const temperaturasMaximas = pronosticoSemanal.map(dia => {
        return parseFloat(dia.max);
    });

    const sumaMaximas = temperaturasMaximas.reduce((acumulador, temperatura) => {
            return acumulador + temperatura;
        }, 0
    );

    const promedioMaxCiudad = sumaMaximas / temperaturasMaximas.length;

    // OPERATORIAS PROMEDIO TEMPERATURAS: RECOPILAR, SUMAR, SACAR PROMEDIO 
    const todasTemperaturas = [ ...temperaturasMinimas, ...temperaturasMaximas ];

    const sumaTotal = todasTemperaturas.reduce((acumulador, temperatura) => {
            return acumulador + temperatura;
        }, 0
    );

    const promedioTodoCiudad = sumaTotal / todasTemperaturas.length;

    // MODA DE CLIMA PARA MENSAJE PERSONALIZADO
    const contadorEstados = {};

    pronosticoSemanal.forEach(dia => {
        const estado = dia.estado;
        if (contadorEstados[estado]) {
            contadorEstados[estado]++;
        } else {
            contadorEstados[estado] = 1;
        }
    });

    let modaClimaCiudad = "";
    let mayorCantidad = 0;

    for (const estado in contadorEstados) {
        if (contadorEstados[estado] > mayorCantidad) {
            mayorCantidad = contadorEstados[estado];
            modaClimaCiudad = estado;
        }
    }

    let resumenClimaCiudad = "";
    if (modaClimaCiudad === "Soleado"){
        resumenClimaCiudad = `☀️ Como calienta el sol en tu ciudad... 🎵`
    } else if (modaClimaCiudad === "Nubosidad Parcial"){
        resumenClimaCiudad = `⛅ Un poco de nube, un poco de sol, un poco de todo, a little respect to me... 🎵`
    } else if (modaClimaCiudad === "Nublado") {
        resumenClimaCiudad = `☁️ Está nubladito, abrígate y da un paseo un ratito, little fluffy clouds 🎵`
    } else if (modaClimaCiudad === "Chubascos"){
        resumenClimaCiudad = `🌧️ Esta tarde vi llover, vi gente correr... 🎵`
    } else {
        resumenClimaCiudad = `🪐 No sé tú pero yo no sé donde estamos... this is Major Tom to Ground Control 🎵`
    }

    return {
        promedioMinCiudad,
        promedioMaxCiudad,
        promedioTodoCiudad,
        modaClimaCiudad,
        resumenClimaCiudad
    };
}


// CARGA DE DETALLES EN DETALLE.HTML
function cargarDetalle(lugarDetalle) {
    const detallesClimaCiudad = document.getElementById("clima-detalle");
    const pronosticoSemanal = lugarDetalle.pronosticoSemanal;

    // PROBLEMAS DE CARGA: NO HAY DATOS DE PRONÓSTICO SEMANAL O NO HAY CIUDAD
    if (!detallesClimaCiudad) {
        console.error("No se encontraron detalles del clima seleccionado'");
        return;
    }

    if (!pronosticoSemanal) {
        console.error("No hay datos disponibles");
        return detallesClimaCiudad.innerHTML = `
            <h1>No hay datos disponibles</h1>
        `
    }    

    // CÁLCULO DE ESTADÍSTICAS    
    const estadisticas = calcularEstadisticas(lugarDetalle.pronosticoSemanal);

    // HTMP DETALLES: PRONÓSTICOS Y ESTADÍSTICAS
    detallesClimaCiudad.innerHTML = `
        <h1 class="container__title">Pronóstico de la semana: <br/> ${lugarDetalle.nombre}</h1>
        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Clima</h2>
            <div class="detail__ico">${lugarDetalle.ico}</div>
            <h3 class="detail__grade">${lugarDetalle.climaActual}</h3>
            <h3 class="detail__estado">${lugarDetalle.estadoActual}</h3>
        </div>

        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Humedad</h2>
            <div class="detail__ico">💧</div>
            <h3 class="detail__grade">${lugarDetalle.humedad}</h3>
        </div>

        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Viento</h2>
            <div class="detail__ico">💨</div>
            <h3 class="detail__grade">${lugarDetalle.viento}</h3>
        </div>

        <h2 class="container__title">Pronóstico de la Semana</h2>
        <h3 class="container__promedio">Promedio de máxima de la semana: ${estadisticas.promedioMaxCiudad.toFixed(1)}°C</h3>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[0].dia}</h3>
            <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[0].estado}</h3>
            <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[0].min} / ${lugarDetalle.pronosticoSemanal[0].max}</h3>
        </article>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[1].dia}</h3>
            <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[1].estado}</h3>
            <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[1].min} / ${lugarDetalle.pronosticoSemanal[1].max}</h3>
        </article>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[2].dia}</h3>
            <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[2].estado}</h3>
            <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[2].min} / ${lugarDetalle.pronosticoSemanal[2].max}</h3>
        </article>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[3].dia}</h3>
            <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[3].estado}</h3>
            <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[3].min} / ${lugarDetalle.pronosticoSemanal[3].max}</h3>
        </article>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[4].dia}</h3>
            <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[4].estado}</h3>
            <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[4].min} / ${lugarDetalle.pronosticoSemanal[4].max}</h3>
        </article>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[5].dia}</h3>
            <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[5].estado}</h3>
            <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[5].min} / ${lugarDetalle.pronosticoSemanal[5].max}</h3>
        </article>

        <section class="estadisticas-semana">
            <h2 class="container__title">Estadísticas de la semana</h2>

            <div class="col-sm-12 promedio__section">
                <article class="promedio__min col-sm-12 col-md-4">
                    <h3 class="grado__title">Mínimo de la semana:</h3>
                    <h4 class="grado__text">${estadisticas.promedioMinCiudad.toFixed(1)}°C</h4>
                </article>

                <article class="promedio__max col-sm-12 col-md-4">
                    <h3 class="grado__title">Máximo de la semana:</h3>
                    <h4 class="grado__text">${estadisticas.promedioMaxCiudad.toFixed(1)}°C</h4>
                </article>

                <article class="promedio__todo col-sm-12 col-md-4">
                    <h3 class="grado__title">Promedio de la semana:</h3>
                    <h4 class="grado__text">${estadisticas.promedioTodoCiudad.toFixed(1)}°C</h4>
                </article>
            </div>

            <aside class="promedio__estado">
                <h3 class="estado__title">Clima más repetido:</h3>
                <h4 class="estado__text">${estadisticas.modaClimaCiudad}</h4>
                <h3 class="estado__title">Consideración para este clima:</h3>
                <h4 class="estado__text">${estadisticas.resumenClimaCiudad}</h4>
            </aside>
        </section>
    `;
}

// CARGA DE FUNCIONES Y RECOPILACIÓN DE DATOS
const lugar = reuneInformacion();

if (lugar) {
    console.log("Lugar recuperado:", lugar);
    cargarDetalle(lugar);
}