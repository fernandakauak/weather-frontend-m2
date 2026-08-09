<script setup>
    import { ref } from 'vue'
    import { climas } from '../climas.js'
</script>

<template>
    <main class="container p-2 container_body">
        <h1 class="container__title">KlimatHaus</h1>
        <h3 class="container__subtitle">El clima en tu casa</h3>
        <section class="clima-view" id="lugares-clima">
            <article class="climacard" v-for="clima in climas" :key="clima.id">
                <div class="card-body text-center climacard__body">
                    <h2 class="card-title climacard__title">{{ clima.nombre }}</h2>
                    <div class="climacard__ico">{{ clima.ico }}</div>
                    <h3 class="climacard__grado">{{ clima.climaActual }}</h3>
                    <h4 class="climacard__estado">{{ clima.estadoActual }}</h4>
                    <a type="button" class="btn btn-outline-light col-12 climacard__button" id="btn-detalle-{{ clima.id }}" href="detalle.html">Detalles</a>        
                </div>
                <button @click="verDetalle(disco.id)">Ver</button>
            </article>
        </section>
    </main>
</template>

<style scoped>
    section.clima-view {    
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 3%;
    }

    .climacard {
        width: 30%;
        background-color: #7d858c;
        margin: 1% 0;
    }

    .climacard__body {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .climacard__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        width: 100%;
    }

    .climacard__estado {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        width: 100%;
        font-size: 21px;
        font-weight: normal;
        margin: 0 0 1%;
    }
    
    .climacard__ico {
        font-size: 76px;
    }

    .climacard__grado {
        color: rgb(255, 255, 255);
        font-size: 28px;
        background-color: rgb(211, 121, 223);
        width: 100%;
        text-align: center;
        margin: 2% auto;
        padding: 2%;
    }

    .climacard__button {
        padding: 5px 10px;
        font-weight: bold;
        font-size: 16px;
        background-color: rgb(138, 43, 226);
        border: 1px solid rgb(128, 0, 128);
        width: 100%;
        color: white;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        .climacard__button {
            padding: 5px 10px;
            font-weight: bold;
            font-size: 16px;
            background-color: rgb(138, 43, 226);
            border: 1px solid rgb(128, 0, 128);
        }
    }
</style>