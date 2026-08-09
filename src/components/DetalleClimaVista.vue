<script setup>
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { climas } from '../climas.js';
    const route  = useRoute();
    const router = useRouter();

    const props = defineProps({
        id: String
    });

    const pronostico = computed(()=>{
        return climas.find((c)=> c.id === Number(props.id));
    });
</script>

<template>

        <h1 class="container__title">Pronóstico de la semana: <br/> {{ pronostico.nombre }}</h1>
        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Clima</h2>
            <div class="detail__ico">{{ pronostico.ico }}</div>
            <h3 class="detail__grade">{{ pronostico.climaActual }}</h3>
            <h3 class="detail__estado">{{ pronostico.estadoActual }}</h3>
        </div>

        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Humedad</h2>
            <div class="detail__ico">💧</div>
            <h3 class="detail__grade">{{ pronostico.humedad }}</h3>
        </div>

        <div class="col-sm-12 col-md-4 detail__info">
            <h2 class="detail__title">Viento</h2>
            <div class="detail__ico">💨</div>
            <h3 class="detail__grade">{{ pronostico.viento }}</h3>
        </div>

        <h2 class="container__title">Pronóstico de la Semana</h2>
        <h3 class="container__promedio">Promedio de máxima de la semana: ${estadisticas.promedioMaxCiudad}°C</h3>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">{{ pronostico.pronosticoSemanal[0].dia }}</h3>
            <h3 class="forecast__state">{{ pronostico.pronosticoSemanal[0].estado }}</h3>
            <h3 class="forecast__grade">{{ pronostico.pronosticoSemanal[0].min }} / {{ pronostico.pronosticoSemanal[0].max }}</h3>
        </article>

        <article class="card col-sm-12 col-md-4 card-body forecast__card">
            <h3 class="forecast__title">{{ pronostico.pronosticoSemanal[1].dia }}</h3>
            <h3 class="forecast__state">{{ pronostico.pronosticoSemanal[1].estado }}</h3>
            <h3 class="forecast__grade">{{ pronostico.pronosticoSemanal[1].min }} / {{ pronostico.pronosticoSemanal[1].max }}</h3>
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



</template>

<style scoped>
    .detalle__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
    }
</style>