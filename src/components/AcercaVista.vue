<script setup></script>

<template>
    <main class="container p-2">
        <section class="row">
            <h3 class="container__subtitle">Averigüe el clima con comodidad con</h3>
            <h1 class="container__title">KlimatHaus</h1>
            <article class="col-sm-12 col-md-8 about__info">
                <p>Si hay lugares que frecuenta o tiene seres queridos en otras ciudades y quiere saber cómo está el clima allí, puede grabarlas en su cuenta de KlimatHaus y estar al tanto del clima actual, humedad, velocidad del viento y el pronóstico semanal. Así tendrá claridad para futuros planes y tranquilidad para usted y los suyos.</p>
                <p>Nos mueve el clima, la información y el satisfacer sus necesidades climáticas mientras disfruta de la comodidad de su casa. ¡Despejaremos sus dudas como un cielo sin nubes!</p>
            </article>
            <article class="col-sm-12 col-md-4 about__img"> 
                <img src="/src/assets/representante-klimathaus.jpg" alt="Representante de KlimatHaus" />
            </article>
        </section>
    </main>
</template>

<style scoped>
    .about__info {
        background-color: rgb(255, 255, 255);
        padding: 2%;
        font-size: 18px;
    }

    @media (max-width: 768px) {
        .about__img {
            width: 100%;
            padding: 1%;
        }
    }
</style>