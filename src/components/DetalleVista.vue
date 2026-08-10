<script setup>
    import { ref } from 'vue';
</script>

<template>
    <section>
        <article class="welcome">
            <h1 class="welcome__title">No hay datos disponibles</h1>
            <h3 class="welcome__subtitle">Elige una ciudad en el "Inicio" para ver esta sección activa</h3>
        </article>    
    </section>
</template>

<style scoped>
    .welcome {
        margin: 3% auto;
    }

    .welcome__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
    }

    .welcome__subtitle {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
    }
</style>