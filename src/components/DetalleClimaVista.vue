<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { climas } from '../climas.js';
    const route  = useRoute();
    const router = useRouter();
    const itemId = route.params.id;
    const props = defineProps({
        id: String,
    });

    const detalle = computed(()=>{
        return climas.find(t => t.id === route.params.id);
    });

    // TEMPERATURAS MÍNIMAS: MAPEO, SUMA Y CÁLCULO PROMEDIO
    const temperaturasMinimas = detalle.value.pronosticoSemanal.map(dia => {
        return parseFloat(dia.min);
    });
    const sumaMinimas = temperaturasMinimas.reduce((acumulador, temperatura) => {
            return acumulador + temperatura; 
        }, 0
    );
    const promedioMinCiudad = Math.round(sumaMinimas / temperaturasMinimas.length);


    // TEMPERATURAS MÍNIMAS: MAPEO, SUMA Y CÁLCULO PROMEDIO
    const temperaturasMaximas = detalle.value.pronosticoSemanal.map(dia => {
        return parseFloat(dia.max);
    });
    const sumaMaximas = temperaturasMaximas.reduce((acumulador, temperatura) => {
            return acumulador + temperatura;
        }, 0
    );
    const promedioMaxCiudad = Math.round(sumaMaximas / temperaturasMaximas.length);
    

    // PROMEDIO TEMPERATURAS TOTAL: MAPEO, SUMA Y CÁLCULO PROMEDIO 
    const todasTemperaturas = [ ...temperaturasMinimas, ...temperaturasMaximas ];
    const sumaTotal = todasTemperaturas.reduce((acumulador, temperatura) => {
            return acumulador + temperatura;
        }, 0
    );
    const promedioTodoCiudad = Math.round(sumaTotal / todasTemperaturas.length);


    // MODA DE CLIMA PARA MENSAJE PERSONALIZADO
    const contadorEstados = {};
    detalle.value.pronosticoSemanal.forEach(dia => {
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

   // FRECUENCIA DE CLIMAS
    let climasSemana = detalle.value.pronosticoSemanal.reduce((acc, pronosticoSemanal) => {
        acc[pronosticoSemanal.estado] = (acc[pronosticoSemanal.estado] || 0) + 1;
        return acc;
    }, {});
    const frecuenciaClimas = Object.entries(climasSemana)
    .map(([estado, conteo]) => `${estado}: ${conteo} veces`)
    .join(" - ");
    const climaRepetido = Object.keys(climasSemana).filter(clima => climasSemana[clima] > 3);

    let estadoFrecuenciaSemanal = "";
    if (climaRepetido == "Soleado"){
        estadoFrecuenciaSemanal = `☀️ Hace mucho calor. Ponte bloqueador y toma mucha agua ¡Y busca la sombra!`
    } else if (climaRepetido == "Nubosidad Parcial"){
        estadoFrecuenciaSemanal = `⛅ ¿Sol? ¿Nubes? ¡Ambos! Nubosidad parcial, con espacio para un rayito de sol.`
    } else if (climaRepetido == "Nublado") {
        estadoFrecuenciaSemanal = `☁️ Nubes, nubes y más nubes.`
    } else if (climaRepetido == "Chubascos"){
        estadoFrecuenciaSemanal = `🌧️ Mucha lluvia esta semana, el paraguas es tu mejor amigo. ¡No lo olvides!`
    } else {
        estadoFrecuenciaSemanal = `🌌 No hay un claro ganador en esta semana, mantente atento de las señales del clima.`
    }
    
    console.log(promedioTodoCiudad)


</script>

<template>
    <button class="volver" @click="router.back()">Volver al inicio</button>
    <div v-if="detalle">
        <h1 class="container__title">Pronóstico del día: <br/> {{ detalle.nombre }}</h1>
        <section class="detail">
            <div class="detail__info">
                <h2 class="detail__title">Clima</h2>
                <div class="detail__ico">{{ detalle.ico }}</div>
                <h3 class="detail__grade">{{ detalle.climaActual }}</h3>
                <h3 class="detail__estado">{{ detalle.estadoActual }}</h3>
            </div>

            <div class="detail__info">
                <h2 class="detail__title">Humedad</h2>
                <div class="detail__ico">💧</div>
                <h3 class="detail__grade">{{ detalle.humedad }}</h3>
            </div>

            <div class="col-sm-12 col-md-4 detail__info">
                <h2 class="detail__title">Viento</h2>
                <div class="detail__ico">💨</div>
                <h3 class="detail__grade">{{ detalle.viento }}</h3>
            </div>
        </section>

        <h1 class="container__title">Pronóstico de la Semana</h1>

        <section class="forecast">
            <article class="card col-sm-12 col-md-4 card-body forecast__card" v-for="pronostico in detalle.pronosticoSemanal" :key="pronostico.id">
                <h3 class="forecast__title">{{ pronostico.dia }}</h3>
                <h3 class="forecast__state">{{ pronostico.estado }}</h3>
                <h3 class="forecast__grade">{{ pronostico.min }} / {{ pronostico.max }}</h3>
            </article>

        </section>

        <section class="estadisticas-semana">
            <h2 class="container__title">Estadísticas de la semana</h2>

            <article class="promedio__estado col-sm-12">
                <h3 class="grado__title">Frecuencia de climas:</h3>
                <h4 class="grado__text">{{ frecuenciaClimas }}</h4>
                <h4 class="grado__text">{{ estadoFrecuenciaSemanal }}</h4>
            </article>

            <div class="col-sm-12 promedio__section">
                <article class="promedio__min col-sm-12 col-md-4">
                    <h3 class="grado__title">Mínimo de la semana:</h3>
                    <h4 class="grado__text">{{ promedioMinCiudad }}°C</h4>
                </article>

                <article class="promedio__max col-sm-12 col-md-4">
                    <h3 class="grado__title">Máximo de la semana:</h3>
                    <h4 class="grado__text">{{ promedioMaxCiudad }}°C</h4>
                </article>

                <article class="promedio__todo col-sm-12 col-md-4">
                    <h3 class="grado__title">Promedio de la semana:</h3>
                    <h4 class="grado__text">{{ promedioTodoCiudad }}°C</h4>
                </article>
            </div>

            <aside class="promedio__estado">
                <h3 class="estado__title">Clima más repetido:</h3>
                <h4 class="estado__text">{{ modaClimaCiudad }}</h4>
                <h3 class="estado__title">Consideración para este clima:</h3>
                <h4 class="estado__text">{{ resumenClimaCiudad }}</h4>
            </aside>
        </section>
    </div>
    <div v-else>
        No hay nada aquí
    </div>


</template>

<style scoped>
    .forecast {
        width: 100%;
        display: flex;
        gap: 2%;
        margin-bottom: 5%;
    }

    .forecast__card {
        background: rgba(85, 17, 82, 0.5);
        padding: 2%;
        text-align: center;
        font-weight: bold;
        border-radius: 10px;
        display: grid;
        gap: 5px;
        grid-template-rows: 30%;
        width: 25%;
    }

    .forecast__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        font-size: 20px;
        font-weight: normal;
        margin: 0;
    }

    .forecast__state {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .detail {
        display: flex;
        gap: 2%;
    }

    .detail__info {
        border-left: 1px solid rgb(255, 255, 255);
        border-right: 1px solid rgb(255, 255, 255);
        border-top: 0;
        border-bottom: 0;
        text-align: center;
        margin-bottom: 5%;
        background-color: rgba(85, 17, 82, 0.5);
        display: grid;
        gap: 5px;
        width: 33%;
    }

    .detail__ico {
        font-size: 76px;
    }

    .detalle__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .detail__grade {
        color: rgb(255, 255, 255);
        font-size: 28px;
        background-color: rgb(211, 121, 223);
        width: 96%;
        text-align: center;
        margin: 2% auto;
        padding: 2%;
    }

    .detail__estado {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .summary__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .grado__title, .estado__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
    }

    .container__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
    }

    .container__subtitle {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
        font-weight: bold;
    }

    .volver {
        margin: 2% auto;
        padding: 1% 2%;
        background-color: white;
        font-size: 14px;
        color: rgb(128, 0, 128);
        font-weight: bold;
        border: none;
        cursor: pointer;
    }

    .promedio__estado {
        background: rgba(85, 17, 82, 0.5);
        padding: 2%;
        text-align: center;
        font-weight: bold;
        border-radius: 10px;
    }

    .promedio__min, .promedio__max, .promedio__todo {
        border-left: 1px solid rgb(255, 255, 255);
        border-right: 1px solid rgb(255, 255, 255);
        border-top: 0;
        border-bottom: 0;
        text-align: center;
        margin-bottom: 5%;
        background-color: rgba(85, 17, 82, 0.5);
        display: grid;
        gap: 5px;
        width: 33%;
    }

    .grado__title, .estado__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
        font-weight: normal;
        font-size: 21px;
    }

    .promedio__section {
        width: 100%;
        display: flex;
    }

    .promedio__estado {
        background: rgba(85, 17, 82, 0.5);
        padding: 2%;
        text-align: center;
        font-weight: bold;
        border-radius: 10px;
    }

    .grado__text, .estado__text {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 0;
        font-size: 24px;
        font-weight: normal;
    }
</style>