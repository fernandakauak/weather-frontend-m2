<script setup>
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { climas } from '../climas.js';
    const route  = useRoute();
    const router = useRouter();

    const itemId = route.params.id;

    const props = defineProps({
        id: String
    });

    const detalle = computed(()=>{
        return climas.find(t => t.id === route.params.id);
    });

    console.log(detalle.value);

</script>

<template>
    <div v-if="detalle">
        <button class="volver" @click="router.back()">Volver al inicio</button>
        <h1 class="container__title">Pronóstico de la semana: <br/> {{ detalle.nombre }}</h1>
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

        <h2 class="container__title">Pronóstico de la Semana</h2>
        <h3 class="container__promedio">Promedio de máxima de la semana: {{ detalle.promedioMaxCiudad }}°C</h3>

        <section v-for="pronostico in detalle.pronosticoSemanal" :key="pronostico.id">
            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">{{ pronostico.dia }}</h3>
                <h3 class="forecast__state">{{ pronostico.estado }}</h3>
                <h3 class="forecast__grade">{{ pronostico.min }} / {{ pronostico.max }}</h3>
            </article>

            <!--<article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">{{ detalle.pronosticoSemanal[0].dia }}</h3>
                <h3 class="forecast__state">{{ detalle.pronosticoSemanal[0].estado }}</h3>
                <h3 class="forecast__grade">{{ detalle.pronosticoSemanal[0].min }} / {{ detalle.pronosticoSemanal[0].max }}</h3>
            </article>
            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">{{ detalle.pronosticoSemanal[1].dia }}</h3>
                <h3 class="forecast__state">{{ detalle.pronosticoSemanal[1].estado }}</h3>
                <h3 class="forecast__grade">{{ detalle.pronosticoSemanal[1].min }} / {{ detalle.pronosticoSemanal[1].max }}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">{{ detalle.pronosticoSemanal[2].dia }}</h3>
                <h3 class="forecast__state">{{ detalle.pronosticoSemanal[2].estado }}</h3>
                <h3 class="forecast__grade">{{ detalle.pronosticoSemanal[2].min }} / {{ lugarDetalle.pronosticoSemanal[2].max }}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">{{ detalle.pronosticoSemanal[3].dia }}</h3>
                <h3 class="forecast__state">{{ detalle.pronosticoSemanal[3].estado }}</h3>
                <h3 class="forecast__grade">{{ detalle.pronosticoSemanal[3].min }} / {{ lugarDetalle.pronosticoSemanal[3].max }}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">{{ detalle.pronosticoSemanal[4].dia }}</h3>
                <h3 class="forecast__state">{{ detalle.pronosticoSemanal[4].estado }}</h3>
                <h3 class="forecast__grade">{{ detalle.pronosticoSemanal[4].min}} / {{ lugarDetalle.pronosticoSemanal[4].max }}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">{{ detalle.pronosticoSemanal[5].dia }}</h3>
                <h3 class="forecast__state">{{ detalle.pronosticoSemanal[5].estado }}</h3>
                <h3 class="forecast__grade">{{ detalle.pronosticoSemanal[5].min }} / {{ detalle.pronosticoSemanal[5].max }}</h3>
            </article>-->
        </section>

        <section class="estadisticas-semana">
            <h2 class="container__title">Estadísticas de la semana</h2>

            <article class="promedio__min col-sm-12">
                <h3 class="grado__title">Frecuencia de climas:</h3>
                <h4 class="grado__text">${estadisticas.frecuenciaClimas}</h4>
                <h4 class="grado__text">${estadisticas.estadoFrecuenciaSemanal}</h4>
            </article>

            <div class="col-sm-12 promedio__section">
                <article class="promedio__min col-sm-12 col-md-4">
                    <h3 class="grado__title">Mínimo de la semana:</h3>
                    <h4 class="grado__text">${estadisticas.promedioMinCiudad}°C</h4>
                </article>

                <article class="promedio__max col-sm-12 col-md-4">
                    <h3 class="grado__title">Máximo de la semana:</h3>
                    <h4 class="grado__text">${estadisticas.promedioMaxCiudad}°C</h4>
                </article>

                <article class="promedio__todo col-sm-12 col-md-4">
                    <h3 class="grado__title">Promedio de la semana:</h3>
                    <h4 class="grado__text">${estadisticas.promedioTodoCiudad}°C</h4>
                </article>
            </div>

            <aside class="promedio__estado">
                <h3 class="estado__title">Clima más repetido:</h3>
                <h4 class="estado__text">${estadisticas.modaClimaCiudad}</h4>
                <h3 class="estado__title">Consideración para este clima:</h3>
                <h4 class="estado__text">${estadisticas.resumenClimaCiudad}</h4>
            </aside>
        </section>
    </div>
    <div v-else>TÚ PUEDES</div>


</template>

<style scoped>
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
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
    }
</style>